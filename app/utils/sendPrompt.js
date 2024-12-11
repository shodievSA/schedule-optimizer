require("dotenv").config();
const OpenAI = require("openai");

const client = new OpenAI({
    organization: "org-60MkVWYTDG3x3L6IiJmlA1zb",
    project: "proj_4rHfWjp5cJ4w7GRNVSDtfecy",
    apiKey: process.env.OPENAI_API_KEY
});

async function sendPrompt(prompt, databaseData, universityCourses, instructorsData) {

    prompt = "Student's prompt:\n\n" + prompt + "\n\nStudent Data:\n\n" + "```json\n" + databaseData + "\n```\n\nUniversity courses data:\n\n" + "```json\n" + universityCourses + "\n```" + "\n\nInstructors Data:\n\n" + "```json\n" + instructorsData + "\n```\n\n";

    const content = "The prompt will contain the student's inquiry about the university they study at. " +
                    "The data about the university, such as student data, instructors and courses, " +
                    "will be included in the prompt, formatted as JSON. Please avoid using text formatting such as " +
                    "astericts in your responses. Finally, don't include technical details in your responses."

    const chatCompletion = await client.chat.completions.create({
        messages: [
            { role: 'user', content: content },
            { role: 'user', content: prompt }
        ],
        model: "gpt-4o"
    });

    return chatCompletion.choices[0].message.content;

}

module.exports = sendPrompt;