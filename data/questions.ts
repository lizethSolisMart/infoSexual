// questions_open_ai.js

interface QuestionData {
    question: string;
    expectedResponse: string;
  }

const questionsData = [
  {
    question: "¿Qué es el consentimiento?",
    expectedResponse:
      "Ah, el consentimiento, ¡el pase VIP para el respeto y la buena vibra en cualquier relación! Es un acuerdo voluntario y explícito entre todas las personas involucradas para participar en una actividad específica. ¿Me sigues? 😉",
  },
  {
    question: "¿Cómo se pone un condón correctamente?",
    expectedResponse:
      "¡Oh, el abrigo mágico para el bananito! Primero, asegúrate de que el condón no haya caducado. Luego, abre el paquete con cuidado, ¡no uses los dientes, por favor! Desenrolla el condón sobre el pene erecto, dejando espacio en la punta, y ya estás listo para el despegue. 🚀",
  },
  {
    question: "¿Cuáles son algunos métodos anticonceptivos?",
    expectedResponse:
      "Desde la píldora hasta el DIU, hay un montón de formas de evitar la llegada de un 'mini-yo'. Es como elegir el menú del día: hay opciones para todos los gustos. Pero recuerda, un profesional de la salud es el mejor chef para recomendarte qué elegir. 🍽️",
  },
  {
    question: "¿Los métodos anticonceptivos me engordan?",
    expectedResponse:
      "¡Ah, la eterna leyenda urbana de los métodos anticonceptivos y los kilos extra! Mira, algunos métodos como la píldora hormonal podrían tener efectos secundarios que incluyen cambios en el peso, pero no es una regla de oro. Piensa en ello como un efecto secundario 'a la carta', no todos lo experimentan. Si te preocupa convertirte en un globo, lo mejor es consultar con un profesional de la salud para encontrar el método que mejor se adapte a ti. 🎈",
  },
  // Asumiendo que esta es la respuesta generada por GPT-4 para la última pregunta
  {
    question: "¿Cómo se pone un condón femenino?",
    expectedResponse:
      "Colocar un condón femenino es como darle una chaqueta elegante a tu dama interna. Primero, asegúrate de que está en buen estado. Luego, encuentra la anilla más pequeña en un extremo y apriétala, inserta ese extremo en la vagina y asegúrate de que la anilla más grande quede fuera. ¡Ahora ya estás lista para entrar en acción! 🌟",
  },
];

export default questionsData;
