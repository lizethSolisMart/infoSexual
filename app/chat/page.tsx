"use client";

import { useState } from "react";

function HomePage() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [threadId, setThreadId] = useState(null); // Nuevo estado para almacenar el threadId

  const generateJoke = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: prompt,
          threadId, // Envía el threadId existente
        }),
      });
      const data = await response.json();
      setResult(data.message);
      setThreadId(data.threadId); // Almacena el threadId para la próxima solicitud
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
    setLoading(false);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    generateJoke();
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <form onSubmit={onSubmit} className="bg-white rounded-xl bg-opacity-60 backdrop-blur p-10 w-full mx-6">
        <h1 className="text-2xl font-bold mb-2">
          Infosexual GPT
        </h1>
        <p className="mb-6">Soy tu orientador sobre educación sexual, pregúntame alguna duda que tengas</p>
        <input
          type="text"
          name="name"
          placeholder="Ingresa tu duda sobre la que quieras que te apoye"
          onChange={(e) => setPrompt(e.target.value)}
          className="p-2 rounded-md block bg-white text-black w-full"
          value={prompt}
          autoFocus
        />
        <button
          type="submit"
          className="bg-green-500 p-2 rounded-md block mt-2 disabled:opacity-50 text-white"
          disabled={!prompt || loading}
        >
          {loading ? "Pensando..." : "Enviar"}
        </button>
        {result && (
          <p className="font-bold my-10">
            {result}
          </p>
        )}
      </form>
    </div>
  );
}

export default HomePage;
