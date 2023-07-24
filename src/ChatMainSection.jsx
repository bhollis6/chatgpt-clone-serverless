import SplashScreen from "./SplashScreen";
import userImage from "./assets/user-image.png";
import assistantImage from "./assets/assistant-image.png";
import ChatBottomSection from "./ChatBottomSection";

function ChatMainSection({
	sidebarVisible,
	currentTitle,
	currentChat,
	setValue,
	getMessages,
	value,
}) {
	return (
		<section className={`main ${sidebarVisible ? "main-shifted" : ""}`}>
			{!currentTitle && <SplashScreen setValue={setValue} />}
			<div className="feed">
				{currentChat?.map((chatMessage, index) => (
					<ul
						className={
							chatMessage.role === "user"
								? "feed-user"
								: "feed-assistant"
						}
						key={index}
					>
						<div className="feed-container">
							{chatMessage.role === "user" ? (
								<img
									src={userImage}
									alt="User"
									className="user-img-main"
								/>
							) : (
								<img
									src={assistantImage}
									alt="Assistant"
									className="assistant-img-main"
								/>
							)}
							<li
								key={index}
								className={
									chatMessage.role === "user"
										? "user"
										: "assistant"
								}
							>
								{chatMessage.role === "assistant" ? (
									<>
										{chatMessage.content.includes("```") ? (
											<>
												<span>
													{chatMessage.content.substring(
														0,
														chatMessage.content.indexOf(
															"```"
														)
													)}
												</span>
												<div className="code-output">
													<pre>
														<code>
															{chatMessage.content.substring(
																chatMessage.content.indexOf(
																	"```"
																) + 3,
																chatMessage.content.lastIndexOf(
																	"```"
																)
															)}
														</code>
													</pre>
												</div>
												<span>
													{chatMessage.content.substring(
														chatMessage.content.lastIndexOf(
															"```"
														) + 3
													)}
												</span>
											</>
										) : (
											<span>{chatMessage.content}</span>
										)}
									</>
								) : (
									<span>{chatMessage.content}</span>
								)}
							</li>
						</div>
					</ul>
				))}
			</div>

			<ChatBottomSection
				value={value}
				setValue={setValue}
				getMessages={getMessages}
			/>
		</section>
	);
}

export default ChatMainSection;
