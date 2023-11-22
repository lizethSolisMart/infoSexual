// pages/api/chat/route.js
import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request) {
  try {
    const body = await request.json();

    let threadId = body.threadId;

    // Si no se recibe un threadId, crea un nuevo thread
    if (!threadId) {
      const thread = await openai.beta.threads.create();
      threadId = thread.id;
    }

    // Agrega el mensaje del usuario al thread (ya sea existente o nuevo)
    await openai.beta.threads.messages.create(threadId, {
      role: "user",
      content: body.message,
    });

    // Inicia el asistente y espera la respuesta
    const run = await openai.beta.threads.runs.create(threadId, {
      assistant_id: "asst_zcHPRfnbBUEErGOKOyKyJgdt",
    });

    let runStatus = await openai.beta.threads.runs.retrieve(threadId, run.id);
    while (runStatus.status !== "completed") {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      runStatus = await openai.beta.threads.runs.retrieve(threadId, run.id);
    }

    // Recupera los mensajes del thread, incluida la respuesta del asistente
    const messages = await openai.beta.threads.messages.list(threadId);
    const lastMessageForRun = messages.data
      .filter(
        (message) => message.run_id === run.id && message.role === "assistant"
      )
      .pop();

    // Devuelve la respuesta del asistente y el ID del thread para futuras interacciones
    return NextResponse.json({
      message: lastMessageForRun ? lastMessageForRun.content[0].text.value : "",
      threadId: threadId,
    });
  } catch (error) {
    console.error("Error al llamar a la API:", error);
    return NextResponse.error(error, {
      status: 500,
    });
  }
}
