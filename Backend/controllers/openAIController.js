const {OpenAI} = require("openai");

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})

const runPrompt = async () => {
	try {
        const response = await openai.chat.completions.create({
            model: 'gpt-4o-mini', // Use the correct model name, if 'gpt-4o-mini' is not available
            messages: [{ role: 'user', content: "Say Hi" }],
            max_tokens: 150, // Adjust as needed
            temperature: 0.7,
        });
		console.log(response.choices)
        return response.choices[0].message.content.trim();
    } catch (error) {
        console.error('Error during API call:', error);
        throw new Error('Failed to get a response from OpenAI');
    }
};

module.exports = {
    runPrompt
}