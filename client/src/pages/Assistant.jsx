import { useState } from "react"
import { TypeAnimation } from "react-type-animation"

function Assistant() {
  const [prompt, setPrompt] = useState("")
  const [response, setResponse] = useState("")
  const [messages, setMessages] = useState([])
  const [isLoading, setIsLoading] = useState(false);

  async function sendPrompt(e) {
    e.preventDefault();

    setIsLoading(true);
    setPrompt("");

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

      setResponse(data.data);

      const emailPattern = /\b([A-Za-z0-9._%+-]+@webster\.edu)\b/g;
      const text = (data.data).replace(/\n\n/g, '<br><br>')
                              .replace(/\n/g, '<br>')
                              .replace(emailPattern, (match) => {
                                  const outlookWebLink = `https://outlook.office365.com/mail/deeplink/compose?to=${match}`;
                                  return `<a class="link-secondary" href="${outlookWebLink}" target="_blank" rel="noopener noreferrer">${match}</a>`;
                              });

      setMessages((prevMessages) => [
        ...prevMessages,
        { type: "assistant", text: text },
      ]);
      setIsLoading(false);
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div 
    className="flex flex-col h-[calc(100vh-48px)] gap-y-8"
    >
      <div 
      className="flex flex-col w-5/6 gap-4 p-8 mx-auto rounded-md grow overflow-y-auto"
      >
        {
          messages.length > 0 ? (
            messages.map((msg, index) => {

              return (
                  <div
                    key={index}
                    className={
                      msg.type === "user"
                        ? "text-black chat chat-end"
                        : "text-black chat chat-start"
                    }
                  >
                    {
                        msg.type === "assistant" ? (
                            <div 
                            className={ msg.type === "user"
                              ? "chat-bubble chat-bubble-primary"
                              : "chat-bubble"
                            }
                            dangerouslySetInnerHTML={{
                              __html: `<p>${msg.text}</p>`,
                            }}></div>
                        ) : (
                            <div className={ msg.type === "user"
                              ? "chat-bubble chat-bubble-primary"
                              : "chat-bubble"
                            }>{msg.text}</div>
                        )
                    }
                  </div>
              )
              })
          ) : (
            <div className="flex justify-center items-center grow p-12">
              <h1 className="text-5xl font-semibold text-center leading-snug">
                  <TypeAnimation
                    sequence={
                      [
                      'Meet the first AI-powered Academic Advisor', 2000,
                      'Have questions about your semester or schedule?', 2000,
                      'Feel free to ask!', 2000
                      ]
                    }
                    speed={30}
                    omitDeletionAnimation={true}
                    repeat={Infinity}
                    cursor={false}
                  />
              </h1>
            </div>
          )
        }
        {
            isLoading && (
              <span className="loading loading-dots loading-lg"></span>
            )
        }
      </div>

      <div className="w-full pb-12 bottom-6 chat-footer flex justify-center">
        <form 
        onSubmit={sendPrompt} 
        className="relative flex w-9/12"
        >
            <input
            className="flex text-lg items-center w-full gap-2 py-8 rounded-lg input input-lg input-bordered"
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
