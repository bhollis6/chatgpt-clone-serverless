import { BsSun, BsLightningCharge } from "react-icons/bs";
import { TiWarningOutline } from "react-icons/ti";

function SplashScreen({ setValue }) {
	return (
		<div className="splash-main">
			<div>
				<h1 className="chatGPT">ChatGPT</h1>
			</div>
			<div className="splash-container">
				<div className="splash-item">
					<BsSun />
				</div>
				<div className="splash-item">
					<BsLightningCharge />
				</div>
				<div className="splash-item">
					<TiWarningOutline />
				</div>
				<div className="splash-item">Examples</div>
				<div className="splash-item">Capabilities</div>
				<div className="splash-item">Limitations</div>
				<div className="splash-item">
					<button
						className="splash-button"
						onClick={() =>
							setValue(
								"Explain quantum computing in simple terms"
							)
						}
					>
						"Explain quantum computing in simple terms"→
					</button>
				</div>
				<div className="splash-item">
					Remembers what user said earlier in the conversation
				</div>
				<div className="splash-item">
					May occasionally generate incorrect information
				</div>
				<div className="splash-item">
					<button
						className="splash-button"
						onClick={() =>
							setValue(
								"Got any creative ideas for a 10 year old’s birthday?"
							)
						}
					>
						"Got any creative ideas for a 10 year old’s birthday?"→
					</button>
				</div>
				<div className="splash-item">
					Allows user to provide follow-up corrections
				</div>
				<div className="splash-item">
					May occasionally produce harmful instructions or biased
					content
				</div>
				<div className="splash-item">
					<button
						className="splash-button"
						onClick={() =>
							setValue(
								"How do I make an HTTP request in Javascript?"
							)
						}
					>
						"How do I make an HTTP request in Javascript?"→
					</button>
				</div>
				<div className="splash-item">
					Trained to decline inappropriate requests
				</div>
				<div className="splash-item">
					Limited knowledge of world and events after 2021
				</div>
			</div>
		</div>
	);
}

export default SplashScreen;
