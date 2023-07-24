import TextareaAutosize from "react-textarea-autosize";
import SvgIconFill from "./SvgIcon";
import SvgIconNull from "./SvgIconNull";

function ChatBottomSection({ value, setValue, getMessages }) {
	return (
		<div className="bottom-section">
			<div className="input-container">
				<div className="user-input-container">
					<TextareaAutosize
						maxRows={10}
						className="text-area-container"
						placeholder="Send a message"
						value={value}
						onChange={(e) => setValue(e.target.value)}
						onKeyPress={(e) => {
							if (e.key === "Enter" && !e.shiftKey) {
								e.preventDefault();
								getMessages();
							} else if (e.key === "Enter" && e.shiftKey) {
								setValue((prevValue) => prevValue + "\n");
							}
						}}
					/>
					<div className="svg-icon" onClick={getMessages}>
						{value ? <SvgIconFill /> : <SvgIconNull />}
					</div>
				</div>
			</div>

			<p className="info">
				Free Research Preview. ChatGPT may produce inaccurate
				information about people, places, or facts.{" "}
				<a
					href="
                        https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
					target="_blank"
				>
					<u>ChatGPT May 24 Version</u>
				</a>
			</p>
		</div>
	);
}

export default ChatBottomSection;
