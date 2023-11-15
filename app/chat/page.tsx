"use client";

import { Avatar, Input, ScrollShadow, Spacer, Spinner } from "@nextui-org/react";
import { useState } from "react";
import { IoMdSend } from 'react-icons/io';


// Define una interfaz extendida para los mensajes que incluye un indicador de carga
interface Message {
  role: "user" | "assistant";
  content: string;
  loading?: boolean;
}
  
  function chatBot() {
    const [prompt, setPrompt] = useState("");
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);
    const [threadId, setThreadId] = useState<string | null>(null);
    const [messages, setMessages] = useState<Message[]>([
      { role: "assistant", content: "¡Hola! Soy el Chatbot de Infosexual, tu orientador en temas de educación sexual. ¿Tienes alguna duda o pregunta? Estoy aquí para ayudarte." }
    ]); // Inicializa el estado con el mensaje de bienvenida del chatbot  

    const addMessageToHistory = (role: "user" | "assistant", content: string, loading?: boolean) => {
      setMessages((prevMessages) => [...prevMessages, { role, content, loading }]);
    };

    const generateMessage = async () => {
      setLoading(true);
      addMessageToHistory("user", prompt); // Agrega el mensaje del usuario al historial
      setPrompt(""); // Limpia el input inmediatamente después de enviar
    
      // Agrega un mensaje temporal de "pensando..."
      addMessageToHistory("assistant", "Pensando... ", true);
    
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
    
        // Reemplaza el mensaje "pensando..." con la respuesta real
        setMessages((prevMessages) => {
          const newMessages = prevMessages.slice(0, -1); // Remueve el último mensaje (pensando...)
          newMessages.push({ role: "assistant", content: data.message }); // Añade la respuesta real
          return newMessages;
        });
    
        setThreadId(data.threadId);
      } catch (error) {
        if (error instanceof Error) {
          alert(error.message);
        }
      }
      setLoading(false);
    };

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const keyboardEvent = e.nativeEvent as KeyboardEvent;
      if (!prompt.trim()) return; // Evita enviar mensajes vacíos
      if (!keyboardEvent.shiftKey) {
        generateMessage(); // Solo envía si no se presionó Shift
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && e.shiftKey) {
        e.preventDefault(); // Evita el comportamiento predeterminado de Enter
    
        const cursorPosition = e.currentTarget.selectionStart || 0; // Asegura un valor numérico
        const textBeforeCursor = prompt.slice(0, cursorPosition);
        const textAfterCursor = prompt.slice(cursorPosition);
    
        // Actualiza el estado con el nuevo texto que incluye el salto de línea
        setPrompt(textBeforeCursor + "\n" + textAfterCursor);
    
        // Restablece la posición del cursor después de actualizar el estado
        setTimeout(() => {
          if (e.currentTarget) {
            e.currentTarget.selectionStart = e.currentTarget.selectionEnd = cursorPosition + 1;
          }
        }, 0);
      }
    };
    


  const formatMessage = (message: string) => {
    // Reemplaza los marcadores de negrita Markdown por etiquetas HTML
    let formattedMessage = message.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  
    // Divide el mensaje por saltos de línea y los mapea a elementos JSX
    return formattedMessage.split("\n").map((line, index) => (
      // Crea un span para cada línea y agrega un <br /> al final de cada línea
      <span key={index} dangerouslySetInnerHTML={{ __html: line + "<br/>" }} />
    ));
  };
  
  
  
  

  return (
    <div className="h-screen flex flex-col justify-center items-center p-6">
      <h1 className="text-2xl font-bold mb-4 text-white">Infosexual Chat</h1>
      <div className="bg-white rounded-xl p-10 w-full mx-6">
        {/* Contenedor del historial de mensajes */}
        <ScrollShadow size={100} className="w-full overflow-auto max-h-[32rem] mb-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex items-start my-2 ${
              message.role === "user" ? "justify-end" : ""
            }`}
          >
            {message.role === "assistant" && (
              <>
              <Spacer x={1} />
              <Avatar
                isBordered
                color="secondary"
                size="sm"
                src="/images/assistant.png"
              />
              <Spacer x={1} />
              </>
            )}
            <div
              className={`rounded-lg p-2 max-w-3/4 ${
                message.role === "user"
                ? "bg-[#DED5FC] text-[#58397E] max-w-[85%]"
                : "bg-[#EBEBEB] text-[#5D5D5D] max-w-[85%] ml-2"
              }`}
            >
            <div className="flex">
              {message.loading && 
              <>
              <Spinner color="primary" size="sm" />
              <Spacer x={2} />
              </>
              }
              <div className="mensaje">
                {formatMessage(message.content)}
              </div>

              </div>
            </div>
          </div>
        ))}

      </ScrollShadow>

        {/* Formulario de envío de mensaje */}
        <form onSubmit={onSubmit} className="flex items-end">
          <Input
          type="text"
          name="name"
          variant="bordered"
          placeholder="Ingresa tu duda, estoy para apoyarte..."
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={handleKeyDown} // Agrega el manejador de eventos aquí
          value={prompt}
          autoFocus
        />
          <button
            type="submit"
            className="ml-2 bg-green-500 p-2 rounded-lg disabled:opacity-50 text-white flex items-center justify-center"
            style={{ width: '40px', height: '40px' }} // Tamaño fijo para hacerlo cuadrado
            disabled={!prompt || loading}
          >
            {loading ? "..." : <IoMdSend className="icono-envio" /> }
          </button>
        </form>
      </div>
    </div>
  );
}

export default chatBot;
