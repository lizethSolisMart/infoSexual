// pages/api/chat/route.js

import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request) {
  try {
    // Aquí puedes agregar validaciones para la solicitud entrante
    const body = await request.json();

    const chat = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: body.messages, // Asegúrate de que 'messages' es el formato correcto
    });

    return NextResponse.json(chat.choices[0].message.content);
  } catch (error) {
    console.error("Error al llamar a la API:", error);
    return NextResponse.error(error, {
      status: 500,
    });
  }
}
