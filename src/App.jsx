import "./index.css";
import { useState, useEffect } from "react";
import { FiSidebar } from "react-icons/fi";
import ChatSidebar from "./ChatSidebar";
import ChatMainSection from "./ChatMainSection";
import { Helmet } from "react-helmet";

export default function App() {
	const [value, setValue] = useState(null);
	const [message, setMessage] = useState(null);
	const [previousChats, setPreviousChats] = useState([]);
	const [currentTitle, setCurrentTitle] = useState(null);
	const [sidebarVisible, setSidebarVisible] = useState(true);

	const toggleSidebar = () => {
		setSidebarVisible(!sidebarVisible);
	};

	const createNewChat = () => {
		setMessage(null);
		setValue("");
		setCurrentTitle(null);
	};

	const handleClick = (uniqueTitle) => {
		setCurrentTitle(uniqueTitle);
		setMessage(null);
		setValue("");
	};

	const clearChats = () => {
		setPreviousChats([]);
		setCurrentTitle(null);
		setMessage(null);
		setValue("");
	};

	const getMessages = async () => {
		const options = {
			method: "POST",
			body: JSON.stringify({
				message: value,
			}),
			headers: {
				"Content-Type": "application/json",
			},
		};
		try {
			const response = await fetch(
				"http://localhost:8000/completions",
				options
			);

			if (!response.ok) {
				throw new Error("Failed to fetch data from the server.");
			}

			const data = await response.json();
			setMessage(data.choices[0].message);
		} catch (error) {
			if (error.name === "TypeError") {
				console.error(
					"Network error occurred. Check your internet connection."
				);
			} else {
				console.error(
					"An error occurred while fetching data:",
					error.message
				);
			}
		}
	};

	const currentChat = previousChats.filter(
		(previousChat) => previousChat.title === currentTitle
	);

	const uniqueTitles = Array.from(
		new Set(previousChats.map((previousChat) => previousChat.title))
	);

	useEffect(() => {
		if (!currentTitle && value && message) {
			setCurrentTitle(value);
		}

		if (currentTitle && value && message) {
			setPreviousChats((prevChats) => [
				...prevChats,
				{
					title: currentTitle,
					role: "user",
					content: value,
				},
				{
					title: currentTitle,
					role: message.role,
					content: message.content,
				},
			]);
			setValue("");
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [message, currentTitle]);

	return (
		<div className="app">
			<Helmet>
				<title>ChatGPT</title>
				<meta
					name="description"
					content="Braden Hollis's Chat GPT Clone"
				/>
			</Helmet>
			<button
				className={`hidden ${
					sidebarVisible ? "" : "side-bar-user-toggled"
				}`}
				onClick={toggleSidebar}
			>
				<FiSidebar />
			</button>

			<ChatSidebar
				sidebarVisible={sidebarVisible}
				toggleSidebar={toggleSidebar}
				createNewChat={createNewChat}
				uniqueTitles={uniqueTitles}
				handleClick={handleClick}
				currentTitle={currentTitle}
				clearChats={clearChats}
			/>

			<ChatMainSection
				sidebarVisible={sidebarVisible}
				currentTitle={currentTitle}
				currentChat={currentChat}
				setValue={setValue}
				getMessages={getMessages}
				value={value}
			/>
		</div>
	);
}
