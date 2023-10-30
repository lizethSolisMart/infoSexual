"use client";

import { useState } from 'react';
import axios from 'axios';

const ChatComponent: React.FC = () => {
  const [question, setQuestion] = useState<string>('');
  const [answer, setAnswer] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post('/api/openai-chat', { question });
      setAnswer(res.data.response);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={question} 
        onChange={handleInputChange} 
        placeholder="Ingresa tu pregunta aquí" 
      />
      <button onClick={handleSubmit}>Enviar</button>
      {answer && <div>Respuesta: {answer}</div>}
    </div>
  );
};

export default ChatComponent;
