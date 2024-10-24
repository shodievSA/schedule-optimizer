import { useState } from "react"

function Assistant() {
  const [prompt, setPrompt] = useState("")
  const [response, setResponse] = useState("")
  const [messages, setMessages] = useState([])

  async function sendPrompt(e) {
    e.preventDefault()

    setPrompt("")

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
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="relative h-[calc(100vh-48px)]">
      <div className="flex flex-col items-center w-full gap-4 p-4 mx-auto bg-white chat-bubble">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={
              msg.type === "user"
                ? "text-right self-end  rounded-md p-3 bg-[#f4f4f4] text-black"
                : "text-left self-start rounded-md p-3 bg-[#f4f4f4] text-black"
            }
          >
            {/* {msg.type === "user" ? "You: " : "Assistant: "} */}
            {msg.text}
          </div>
        ))}
      </div>

      <div className="absolute left-0 w-full pb-4 bottom-6 chat-footer">
        <form action="" onSubmit={sendPrompt} className="relative flex w-full">
          <input
            className="flex items-center w-full gap-2 py-8 rounded-lg left-6 input input-bordered"
            type="text"
            value={prompt}
            placeholder="Do you need help regarding your schedule?"
            onChange={(e) => setPrompt(e.target.value)}
          />

          <button className="absolute rounded-lg right-3 top-[10px] btn btn-circle btn-ghost">
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

export default Assistant
