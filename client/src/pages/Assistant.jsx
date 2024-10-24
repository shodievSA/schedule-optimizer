import { useState } from "react"

function Assistant() {
  const [prompt, setPrompt] = useState("")
  const [response, setResponse] = useState("")
  const [messages, setMessages] = useState([])

  async function sendPrompt(e) {
    e.preventDefault()

    setMessages((prevMessages) => [
      ...prevMessages,
      { type: "user", text: prompt },
    ])

    try {
      const res = await fetch("http://localhost:3000/api/v1/student-prompt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt,
        }),
      })
      const data = await res.json()

      console.log(data)
      setResponse(data.data)

      setMessages((prevMessages) => [
        ...prevMessages,
        { type: "assistant", text: data.data },
      ])

      setPrompt("")
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div>
      <div className="chat-bubble">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={msg.type === "user" ? "text-blue-500" : "text-green-500"}
          >
            {msg.type === "user" ? "You: " : "Assistant: "}
            {msg.text}
          </div>
        ))}
      </div>

      <form action="" onSubmit={sendPrompt}>
        <input
          className="flex items-center gap-2 input input-bordered"
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />

        <button className="absolute btn btn-md btn-circle btn-ghost right-4 top-4">
          Send
        </button>
      </form>
    </div>
  )
}

export default Assistant
