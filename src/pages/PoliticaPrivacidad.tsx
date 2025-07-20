import React from "react";
import NavBar from '../components/NavBar';

const PoliticaPrivacidad: React.FC = () => {
  return (
    <>
      <NavBar />
      <main className="bg-[#09243F] min-h-screen py-[100px] px-4">
        <section className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#09243F] mb-2">
            Política de Privacidad y Uso de Datos
          </h1>
          <p className="text-sm text-[#6b7280] mb-6">
            Última actualización: 17 de diciembre de 2024
          </p>
          <div className="space-y-7 text-[#23272f] text-base leading-relaxed">
            <section>
              <h2 className="font-bold text-lg text-[#1a6dbb] mb-2">1. Introducción</h2>
              <p>
                Bienvenido a <b>Mi Visualization.com</b>, un servicio SaaS disponible a través del Microsoft Marketplace. Esta Política de Privacidad describe cómo recopilamos, utilizamos, almacenamos y compartimos sus datos personales al utilizar nuestros servicios. Al acceder o utilizar la plataforma, usted acepta esta Política de Privacidad y los términos y condiciones aplicables.
              </p>
            </section>
            <section>
              <h2 className="font-bold text-lg text-[#1a6dbb] mb-2">2. Información que Recopilamos</h2>
              <ul className="list-disc ml-6">
                <li>
                  <b>Información proporcionada por el usuario:</b>
                  <ul className="list-disc ml-6">
                    <li>Datos personales: nombre, dirección de correo electrónico, número de teléfono, cargo, nombre de la empresa.</li>
                    <li>Credenciales de inicio de sesión: nombre de usuario, contraseña y otros detalles de autenticación.</li>
                    <li>Datos financieros: información de pago o facturación, según corresponda.</li>
                  </ul>
                </li>
                <li>
                  <b>Información recopilada automáticamente:</b>
                  <ul className="list-disc ml-6">
                    <li>Datos de uso: páginas visitadas, acciones realizadas, tiempo de sesión, entre otros.</li>
                    <li>Información del dispositivo: dirección IP, navegador, sistema operativo y configuración regional.</li>
                    <li>Cookies y tecnologías similares: para mejorar la experiencia, personalizar la interfaz y analizar el uso del servicio.</li>
                  </ul>
                </li>
              </ul>
            </section>
            <section>
              <h2 className="font-bold text-lg text-[#1a6dbb] mb-2">3. Finalidad del Tratamiento de Datos</h2>
              <ul className="list-disc ml-6">
                <li>Proporcionar y operar la plataforma SaaS.</li>
                <li>Facilitar el acceso a las funcionalidades y optimizar la experiencia de usuario.</li>
                <li>Cumplir con obligaciones legales y contractuales.</li>
                <li>Ofrecer soporte técnico y atención al cliente.</li>
                <li>Personalizar comunicaciones y, con su consentimiento, ofrecer marketing directo.</li>
              </ul>
            </section>
            <section>
              <h2 className="font-bold text-lg text-[#1a6dbb] mb-2">4. Base Legal para el Tratamiento de Datos</h2>
              <ul className="list-disc ml-6">
                <li>Ejecución de un contrato (servicios SaaS).</li>
                <li>Consentimiento explícito del usuario.</li>
                <li>Cumplimiento de obligaciones legales.</li>
                <li>Intereses legítimos (mejora continua del servicio y seguridad).</li>
              </ul>
            </section>
            <section>
              <h2 className="font-bold text-lg text-[#1a6dbb] mb-2">5. Compartición de Datos con Terceros</h2>
              <ul className="list-disc ml-6">
                <li>No vendemos ni alquilamos sus datos.</li>
                <li>Podríamos compartirlos con proveedores de servicios (alojamiento en la nube, análisis, pagos) vinculados mediante acuerdos de confidencialidad.</li>
                <li>Autoridades legales, para cumplir con requisitos normativos o procesos judiciales.</li>
              </ul>
            </section>
            <section>
              <h2 className="font-bold text-lg text-[#1a6dbb] mb-2">6. Seguridad de los Datos</h2>
              <p>
                Implementamos medidas técnicas y organizativas (encriptación, controles de acceso, auditorías de seguridad) para proteger sus datos. No obstante, ningún sistema puede garantizar seguridad absoluta.
              </p>
            </section>
            <section>
              <h2 className="font-bold text-lg text-[#1a6dbb] mb-2">7. Conservación de Datos</h2>
              <p>
                Conservamos sus datos el tiempo necesario para cumplir con las finalidades descritas o hasta que revoque su consentimiento. En caso de inactividad prolongada, podremos eliminar su cuenta y datos conforme a las normativas vigentes.
              </p>
            </section>
            <section>
              <h2 className="font-bold text-lg text-[#1a6dbb] mb-2">8. Derechos del Usuario</h2>
              <ul className="list-disc ml-6">
                <li>Acceder a sus datos.</li>
                <li>Rectificar información inexacta.</li>
                <li>Solicitar la eliminación de sus datos.</li>
                <li>Restringir su tratamiento.</li>
                <li>Solicitar la portabilidad de sus datos.</li>
                <li>Oponerse al tratamiento para fines específicos.</li>
              </ul>
              <p className="mt-2">
                Para ejercer estos derechos, contáctenos en: <a href="mailto:support@Mi Visualization.com" className="text-[#1a6dbb] underline">support@Mi Visualization.com</a>
              </p>
            </section>
            <section>
              <h2 className="font-bold text-lg text-[#1a6dbb] mb-2">9. Uso de Cookies</h2>
              <p>
                Empleamos cookies para mejorar el funcionamiento del servicio y personalizar la experiencia. Puede gestionar sus preferencias de cookies a través de la configuración de su navegador.
              </p>
            </section>
            <section>
              <h2 className="font-bold text-lg text-[#1a6dbb] mb-2">10. Transferencias Internacionales de Datos</h2>
              <p>
                Si realizamos transferencias de datos fuera de su país, garantizamos el cumplimiento de la normativa aplicable y la adopción de garantías apropiadas (por ejemplo, cláusulas contractuales estándar).
              </p>
            </section>
            <section>
              <h2 className="font-bold text-lg text-[#1a6dbb] mb-2">11. Cambios en la Política de Privacidad</h2>
              <p>
                Podremos actualizar esta política en cualquier momento. Notificaremos cambios significativos mediante correo electrónico o avisos en la plataforma.
              </p>
            </section>
            <section>
              <h2 className="font-bold text-lg text-[#1a6dbb] mb-2">12. Contacto</h2>
              <ul className="list-disc ml-6">
                <li>Correo electrónico: <a href="mailto:support@mivisualization.com" className="text-[#1a6dbb] underline">support@mivisualization.com</a></li>
                <li>Dirección postal: Calle Roca del Vergallo 493, Magdalena del Mar – Lima - Perú</li>
                <li>Teléfono: <a href="tel:+51933965110" className="text-[#1a6dbb] underline">+51 933965110</a></li>
              </ul>
            </section>
          </div>
        </section>
      </main>
    </>
  );
};

export default PoliticaPrivacidad;