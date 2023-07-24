import { useState } from "react";
import { TbDots } from "react-icons/tb";
import { FiSidebar, FiExternalLink } from "react-icons/fi";
import { BiMessage, BiTrash } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import userImage from "./assets/user-image.png";
import { CSSTransition } from "react-transition-group";

function ChatSidebar({
	sidebarVisible,
	toggleSidebar,
	createNewChat,
	uniqueTitles,
	handleClick,
	clearChats,
}) {
	const [isMenuVisible, setIsMenuVisible] = useState(false);

	const handleMenuToggle = () => {
		setIsMenuVisible((prevIsMenuVisible) => !prevIsMenuVisible);
	};

	const handleHelpButtonClick = () => {
		window.open(
			"https://help.openai.com/en/collections/3742473-chatgpt",
			"_blank"
		);
		handleMenuToggle();
	};

	const handleClearButtonClick = () => {
		clearChats();
		handleMenuToggle();
	};

	return (
		<section className={`side-bar ${sidebarVisible ? "" : "collapsed"}`}>
			<CSSTransition
				in={isMenuVisible}
				timeout={300}
				classNames="side-bar-menu"
				unmountOnExit
			>
				<div className={isMenuVisible ? "side-bar-menu" : "hidden"}>
					<div>
						<button
							className="side-bar-menu-button"
							onClick={handleHelpButtonClick}
						>
							{" "}
							<FiExternalLink className="side-bar-menu-icons" />{" "}
							Help and FAQ
						</button>
					</div>
					<div>
						<button
							className="side-bar-menu-button"
							onClick={handleClearButtonClick}
						>
							{" "}
							<BiTrash className="side-bar-menu-icons" />
							Clear chats
						</button>
					</div>
				</div>
			</CSSTransition>
			<div className="side-bar-header">
				<button className="side-bar-button" onClick={createNewChat}>
					<AiOutlinePlus className="plus-sign" />
					New Chat
				</button>
				<button className="side-bar-toggle" onClick={toggleSidebar}>
					<FiSidebar />
				</button>
			</div>
			<span className="today">Today</span>
			<ul className="history">
				{uniqueTitles?.map((uniqueTitle, index) => (
					<li key={index} onClick={() => handleClick(uniqueTitle)}>
						<BiMessage className="message-icon" /> {uniqueTitle}
					</li>
				))}
			</ul>
			<nav className="side-bar-bottom" onClick={handleMenuToggle}>
				<div className="side-bar-grid-one">
					<img
						src={userImage}
						alt="User"
						className="side-bar-image"
					/>
				</div>
				<div>User</div>
				<div className="align-right">
					<TbDots />
				</div>
			</nav>
		</section>
	);
}

export default ChatSidebar;
