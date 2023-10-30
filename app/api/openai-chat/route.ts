import questionsData from '@/data/questions';
import { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from "openai";

export async function post(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const userQuestion = req.body.question;

    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    type ChatCompletionMessageParam = {
      role: "system" | "user" | "assistant";
      content: string;
    };
    
    // Usar ese tipo al crear la lista de mensajes
    const messages: ChatCompletionMessageParam[] = [
      {
        role: "system",
        content:
          "Eres un poderoso asistente que proporciona ejemplos de preguntas y respuestas que podrían ser útiles, con el tono un poco humorístico que has solicitado, para abordar temas de educación sexual de manera accesible y atractiva. Tu objetivo es ayudar a crear un recurso valioso y educativo para los jóvenes. 😊",
      },
    ];

    // Agregar las preguntas de questionsData a messages
    for (let q of questionsData) {
      messages.push({ role: "user", content: q.question });
      if (q.expectedResponse) {
        messages.push({ role: "assistant", content: q.expectedResponse });
      }
    }

    // Agregar la pregunta del usuario al final de messages
    messages.push({ role: "user", content: userQuestion });

    try {
      const chatCompletion = await openai.chat.completions.create({
        model: "gpt-4",
        messages: messages,
      });
      res
        .status(200)
        .json({ response: chatCompletion.choices[0].message.content });
    } catch (error) {
      console.error("Error al interactuar con OpenAI:", error);
      res.status(500).json({ error: "Error al interactuar con OpenAI" });
    }
  } else {
    res.status(405).json({ error: "Método no permitido" });
  }
}
