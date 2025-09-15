import React from "react";

const CasoExito: React.FC = () => {
  return (
    <div className="max-w-[800px] mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Política de Cookies</h1>
      <p className="mb-4">
        Esta Política de Cookies explica qué son las cookies, cómo las utilizamos, 
        cómo terceros pueden colocar cookies en su dispositivo a través de nuestro 
        servicio, sus opciones con respecto a las cookies y más información sobre 
        cookies.
      </p>
      <h2 className="text-xl font-semibold mb-2">¿Qué son las cookies?</h2>
      <p className="mb-4">
        Las cookies son pequeños archivos de texto que se utilizan para almacenar 
        información en su navegador. Se utilizan ampliamente para hacer que los 
        sitios web funcionen, o para que lo hagan de manera más eficiente, así 
        como para proporcionar información a los propietarios del sitio.
      </p>
      <h2 className="text-xl font-semibold mb-2">¿Cómo utilizamos las cookies?</h2>
      <p className="mb-4">
        Utilizamos cookies para recordar información sobre su visita, como sus 
        preferencias y la información de inicio de sesión. Esto nos ayuda a 
        mejorar su experiencia en nuestro sitio web.
      </p>
      <h2 className="text-xl font-semibold mb-2">Sus opciones con respecto a las cookies</h2>
      <p className="mb-4">
        Puede optar por desactivar las cookies a través de la configuración de su 
        navegador. Sin embargo, tenga en cuenta que si desactiva las cookies, 
        es posible que algunas partes de nuestro sitio no funcionen correctamente.
      </p>
      <h2 className="text-xl font-semibold mb-2">Más información sobre cookies</h2>
      <p>
        Para obtener más información sobre las cookies, visite 
        <a href="https://www.allaboutcookies.org/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline"> allaboutcookies.org</a>.
      </p>
    </div>
  );
};

export default CasoExito;