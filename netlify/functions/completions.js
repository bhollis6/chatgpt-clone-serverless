exports.handler = async function (event) {
	const { message } = JSON.parse(event.body);

	try {
		const fetch = (await import("node-fetch")).default;

		const options = {
			method: "POST",
			headers: {
				Authorization: `Bearer ${process.env.API_KEY}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				model: "gpt-3.5-turbo",
				messages: [{ role: "user", content: message }],
				max_tokens: 700,
			}),
		};

		const response = await fetch(
			"https://api.openai.com/v1/chat/completions",
			options
		);

		const data = await response.json();

		return {
			statusCode: 200,
			body: JSON.stringify(data),
		};
	} catch (error) {
		console.error(error);
		return {
			statusCode: 500,
			body: JSON.stringify({ error: "An error occurred" }),
		};
	}
};
