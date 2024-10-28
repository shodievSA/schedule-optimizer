require("dotenv").config();
const OpenAI = require("openai");

const client = new OpenAI({
    organization: "org-60MkVWYTDG3x3L6IiJmlA1zb",
    project: "proj_4rHfWjp5cJ4w7GRNVSDtfecy",
    apiKey: process.env.OPENAI_API_KEY
});

async function sendPrompt(prompt, databaseData, universityCourses) {

    prompt = "Student's prompt:\n\n" + prompt + "\n\nStudent Data:\n\n" + "```json\n" + databaseData + "\n```\n\nUniversity courses data:\n\n" + "```json\n" + universityCourses + "\n```";

    const content = "The prompt will contain the student's inquiry about the university he studies. " +
                    "The data about the university, such as student's data, instructors and courses, " +
                    "will be included in the prompt, formatted as JSON. Reply only with the data that " +
                    "the user is asking for and refer to the user with their name, please. " +
                    "Respond without special formatting like asterisks or markdown. Provide plain text answers. " +
                    "When presenting lists, use new lines for each item instead of inline formatting. Format the list items with numbers or bullet points, each on a new line.";

    const chatCompletion = await client.chat.completions.create({
        messages: [
            { role: 'user', content: content },
            { role: 'user', content: prompt }
        ],
        model: "gpt-4o-mini"
    });

    return chatCompletion.choices[0].message.content;

}

module.exports = sendPrompt;