"use client";

import { useState } from "react";

// Define una interfaz para los mensajes
interface Message {
    role: "user" | "assistant";
    content: string;
  }
  
  function HomePage() {
    const [prompt, setPrompt] = useState("");
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);
    const [threadId, setThreadId] = useState<string | null>(null);
    const [messages, setMessages] = useState<Message[]>([]); // Usa la interfaz definida para tipar el estado
  
    const addMessageToHistory = (role: "user" | "assistant", content: string) => {
      setMessages((prevMessages) => [...prevMessages, { role, content }]);
    };

  const generateJoke = async () => {
    setLoading(true);
    addMessageToHistory("user", prompt); // Agrega el mensaje del usuario al historial
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: prompt,
          threadId,
        }),
      });
      const data = await response.json();
      addMessageToHistory("assistant", data.message); // Agrega la respuesta del asistente al historial
      setThreadId(data.threadId);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
    setLoading(false);
    setPrompt(""); // Limpia la entrada después de enviar
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!prompt.trim()) return; // Evita enviar mensajes vacíos
    generateJoke();
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="bg-white rounded-xl bg-opacity-60 backdrop-blur p-10 w-full mx-6">
        <h1 className="text-2xl font-bold mb-2">
          Infosexual Chat
        </h1>
        <p className="mb-6">Soy tu orientador sobre educación sexual, pregúntame alguna duda que tengas</p>

        {/* Contenedor del historial de mensajes */}
        <div className="overflow-auto h-96 mb-4">
          {messages.map((message, index) => (
            <div key={index} className={`rounded-lg my-2 p-2 ${message.role === "user" ? "bg-green-200 " : "bg-blue-200"}`}>
              {message.content}
            </div>
          ))}
        </div>

        {/* Formulario de envío de mensaje */}
        <form onSubmit={onSubmit} className="flex flex-col">
          <input
            type="text"
            name="name"
            placeholder="Ingresa tu duda sobre la que quieras que te apoye"
            onChange={(e) => setPrompt(e.target.value)}
            className="p-2 rounded-md bg-white text-black mb-2"
            value={prompt}
            autoFocus
          />
          <button
            type="submit"
            className="bg-green-500 p-2 rounded-md disabled:opacity-50 text-white"
            disabled={!prompt || loading}
          >
            {loading ? "Pensando..." : "Enviar"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default HomePage;
