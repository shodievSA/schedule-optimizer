require("dotenv").config();
const OpenAI = require("openai");

const client = new OpenAI({
    organization: "org-60MkVWYTDG3x3L6IiJmlA1zb",
    project: "proj_4rHfWjp5cJ4w7GRNVSDtfecy",
    apiKey: process.env.OPENAI_API_KEY
});

async function sendPrompt(prompt) {

    const content = "";

    const chatCompletion = await client.chat.completions.create({
        messages: [
            { role: 'user', content: prompt }
        ],
        model: "gpt-4o-mini"
    });

    return chatCompletion.choices[0].message.content;

}

module.exports = sendPrompt;