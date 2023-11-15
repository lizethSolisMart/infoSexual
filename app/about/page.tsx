import React from 'react';

const AboutPage: React.FC = () => {
    return (
        <div className="container mx-auto p-4 max-w-[700px] mb-40">
            {/* Título Principal */}
            <div className="text-center my-10 text-white">
                <h1 className="text-2xl font-bold">Acerca de Infosexual</h1>
            </div>

            {/* Secciones de Contenido */}
            <div className="space-y-10">
                {/* Sección Nuestra Misión */}
                <section>
                    <h2 className="text-xl font-semibold mb-4 text-white">Nuestra Misión</h2>
                    {/* Texto para Nuestra Misión */}
                    <p className='text-white'>
                    Infosexual es un proyecto iniciado por un grupo de estudiantes de pedagogía de la FES Aragón de la UNAM. Creemos firmemente en la importancia vital del orientador educativo en el desarrollo profesional y personal de los estudiantes. Nuestro objetivo es resaltar y expandir este rol crucial, a menudo subestimado y limitado en las instituciones educativas.
                    </p>
                </section>

                {/* Sección La Necesidad de Innovar */}
                <section>
                    <h2 className=" text-xl font-semibold mb-4 text-white">La Necesidad de Innovar en la Orientación Educativa</h2>
                    {/* Texto para La Necesidad de Innovar */}
                    <p className='text-white'>                    
                    Hemos notado que, lamentablemente, la figura del orientador educativo no siempre recibe la valoración que merece. Su presencia es esencial, pero en muchas ocasiones es insuficiente debido a la alta demanda y a los recursos limitados. Este desafío nos ha llevado a buscar soluciones innovadoras.
                    </p>
                </section>

                {/* Sección Un Asistente Virtual */}
                <section>
                    <h2 className="text-xl font-semibold mb-4 text-white">Un Asistente Virtual para la Educación Sexual</h2>
                    {/* Texto para Un Asistente Virtual */}
                    <p className='text-white'>                    
                    Infosexual es nuestra respuesta a esta necesidad. Hemos diseñado esta plataforma como una extensión del orientador educativo. Aquí, los estudiantes pueden encontrar un asistente virtual en forma de chatbot, capaz de responder preguntas y proporcionar información valiosa sobre educación sexual. Este asistente no solo refleja los valores y principios del orientador a cargo, sino que también actúa como un recurso adicional para aliviar la carga de trabajo del orientador, permitiéndole así brindar una atención más personalizada y humana.
                    </p>
                </section>

                {/* Sección Nuestro Compromiso */}
                <section>
                    <h2 className="text-xl font-semibold mb-4 text-white">Nuestro Compromiso</h2>
                    {/* Texto para Nuestro Compromiso */}
                    <p className='text-white'>                    
                    Nos comprometemos a ofrecer una experiencia educativa enriquecedora y accesible. A través de nuestra página, los estudiantes tienen la oportunidad de explorar y aprender sobre temas relevantes de educación sexual de una manera segura y confiable. En casos donde se requiera una interacción más profunda, nuestro sistema está diseñado para facilitar la conexión con un orientador real.
                    </p>
                </section>

                {/* Sección Hacia un Futuro Más Informado */}
                <section>
                    <h2 className="text-xl font-semibold mb-30 text-white">Hacia un Futuro Más Informado</h2>
                    {/* Texto para Hacia un Futuro Más Informado */}
                    <p className='text-white'>                    
                    En Infosexual, aspiramos a ser un puente entre el conocimiento y los jóvenes que buscan respuestas. Creemos que una educación sexual integral es clave para el desarrollo de individuos informados y responsables. Nuestro chatbot es solo el comienzo de un viaje hacia un futuro donde cada estudiante tenga acceso a la orientación y el apoyo que necesita para florecer tanto en lo personal como en lo profesional.
                    </p>
                </section>
            </div>
        </div>
    );
}

export default AboutPage;
