"use client"

import React, { useState } from "react";
import { Avatar, Input, ScrollShadow, Spacer, Spinner } from "@nextui-org/react";
import { IoMdSend } from 'react-icons/io';

// Definición de la interfaz para los mensajes
interface Message {
  role: "user" | "assistant";
  content: string;
  loading?: boolean;
}

// Componente ChatBot
const ChatBot: React.FC = () => {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "¡Hola! Soy el Chatbot de Infosexual, tu orientador en temas de educación sexual. ¿Tienes alguna duda o pregunta? Estoy aquí para ayudarte." }
  ]);
  const [loading, setLoading] = useState(false);
  const [threadId, setThreadId] = useState<string | null>(null);

  const addMessageToHistory = (role: "user" | "assistant", content: string, loading?: boolean) => {
    setMessages((prevMessages) => [...prevMessages, { role, content, loading }]);
  };

    const generateMessage = async () => {
      if (!prompt.trim()) return; // Evita enviar mensajes vacíos
      setLoading(true);
      addMessageToHistory("user", prompt); // Agrega el mensaje del usuario al historial
      setPrompt(""); // Limpia el input inmediatamente después de enviar
    
      // Agrega un mensaje temporal de "pensando..."
      addMessageToHistory("assistant", "Pensando...", true);
    
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
    
        if (!response.ok) {
          throw new Error('Error al obtener respuesta del chatbot');
        }
    
        const data = await response.json();
    
        // Reemplaza el mensaje "pensando..." con la respuesta real
        setMessages((prevMessages) => {
          const newMessages = prevMessages.slice(0, -1); // Remueve el último mensaje (pensando...)
          newMessages.push({ role: "assistant", content: data.message }); // Añade la respuesta real
          return newMessages;
        });
    
        setThreadId(data.threadId);
      } catch (error) {
        if (error instanceof Error) {
          console.error(error.message); // Muestra el error en la consola
          // Agrega un mensaje de error en la conversación
          addMessageToHistory("assistant", "Lo siento, hubo un error al procesar tu mensaje.");
        }
      } finally {
        setLoading(false);
      }
    };
  

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await generateMessage();
  };

  const formatMessage = (message: string) => {
    return message.split("\n").map((line, index) => (
      <span key={index} dangerouslySetInnerHTML={{ __html: line + "<br/>" }} />
    ));
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center p-6">
      <h1 className="text-2xl font-bold mb-4 text-white">Chat Infosexual</h1>
      <div className="bg-white rounded-xl p-10 w-full mx-6">
        <ScrollShadow size={100} className="w-full overflow-auto max-h-[32rem] mb-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex items-start my-2 ${message.role === "user" ? "justify-end" : ""}`}
            >
              {message.role === "assistant" && (
                <>
                  <Spacer x={1} />
                  <Avatar isBordered color="secondary" size="sm" src="/images/assistant.png" />
                  <Spacer x={1} />
                </>
              )}
              <div
                className={`rounded-lg p-2 max-w-3/4 ${message.role === "user"
                  ? "bg-[#DED5FC] text-[#58397E] max-w-[85%]"
                  : "bg-[#EBEBEB] text-[#5D5D5D] max-w-[85%] ml-2"
                }`}
              >
                <div className="flex">
                  {message.loading && (
                    <>
                      <Spinner color="primary" size="sm" />
                      <Spacer x={2} />
                    </>
                  )}
                  <div className="mensaje">
                    {formatMessage(message.content)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </ScrollShadow>

        <form onSubmit={onSubmit} className="flex items-end">
          <Input
            type="text"
            variant="bordered"
            placeholder="Ingresa tu duda, estoy para apoyarte..."
            onChange={(e) => setPrompt(e.target.value)}
            value={prompt}
            autoFocus
          />
          <button
            type="submit"
            className="ml-2 bg-green-500 p-2 rounded-lg disabled:opacity-50 text-white flex items-center justify-center"
            style={{ width: '40px', height: '40px' }}
            disabled={!prompt || loading}
          >
            {loading ? "..." : <IoMdSend className="icono-envio" />}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatBot;
