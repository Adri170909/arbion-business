                  
import Image from "next/image";
import Reveal from "./components/reveal";

const services = [
  {
    number: "01",
    title: "Atraer a las personas adecuadas",
    text: "Planificamos campañas según los tratamientos que quieres impulsar, la zona donde trabaja tu clínica y el tipo de paciente que buscas.",
    detail: "Campañas y presencia digital",
  },
  {
    number: "02",
    title: "Convertir interés en consultas",
    text: "Creamos páginas claras para cada servicio y facilitamos que las personas interesadas puedan contactar sin perderse entre opciones.",
    detail: "Páginas y llamadas a la acción",
  },
  {
    number: "03",
    title: "Dar seguimiento a cada oportunidad",
    text: "Organizamos el seguimiento para responder a tiempo, entender qué necesita cada contacto y evitar que una consulta quede olvidada.",
    detail: "Seguimiento y automatización",
  },
];

const steps = [
  ["01", "Conocemos tu clínica", "Hablamos de tus objetivos, tratamientos prioritarios, zona de servicio y cómo gestionas hoy las consultas."],
  ["02", "Revisamos el punto de partida", "Analizamos la web, las campañas y el recorrido desde que alguien te encuentra hasta que pide información."],
  ["03", "Acordamos un plan", "Definimos qué acciones tienen sentido, cómo se medirán y qué necesita aportar cada parte antes de ponerlas en marcha."],
  ["04", "Medimos y mejoramos", "Revisamos las consultas y citas que genera cada acción. Con esa información decidimos juntos qué mantener y qué ajustar."],
];

const measures = [
  ["Consultas", "Cuántas llegan y desde qué canal."],
  ["Calidad", "Qué tipo de consultas genera cada canal, usando datos agregados."],
  ["Citas", "Cuántas consultas avanzan a una cita, cuando la clínica puede compartir ese dato."],
  ["Inversión", "Qué coste tiene generar una consulta y cómo evoluciona."],
];

const faqs = [
  ["¿Qué hace Arbion Business por una clínica dental?", "Ayuda a conectar marketing, páginas web y seguimiento de consultas. El objetivo es que la clínica atraiga pacientes para los tratamientos que quiere impulsar y pueda entender qué acciones generan interés y citas."],
  ["¿Podéis garantizar un número de pacientes o de citas?", "No sería responsable prometer una cifra sin conocer la clínica. Los resultados dependen de factores como la zona, los tratamientos, la inversión, la demanda y la rapidez del seguimiento. Por eso se acuerdan indicadores y se revisa su evolución."],
  ["¿Cómo sé si el trabajo está dando resultado?", "Desde el inicio se define qué se va a observar: consultas, canal de origen, avance a cita y coste. Así se puede distinguir la actividad de marketing de lo que realmente ocurre en la agenda."],
  ["¿Tengo que cambiar mis herramientas o mi forma de trabajar?", "Primero revisamos el recorrido y las herramientas actuales. A partir de ahí se proponen cambios concretos, explicando qué problema resuelve cada uno."],
  ["¿Qué información tengo que enviar para empezar?", "Para una primera conversación basta con explicar los objetivos y el contexto general de la clínica. No incluyas datos personales, historiales ni información clínica identificable de pacientes."],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Arbion Business, inicio">
          <Image className="brand-symbol" src="/arbion-mark-gold.png" alt="" width={275} height={260} priority />
          <span className="brand-name">ARBION<span className="brand-muted">BUSINESS</span></span>
        </a>
        <nav className="nav" aria-label="Navegación principal">
          <a href="#sistema">Qué hacemos</a>
          <a href="#proceso">Cómo trabajamos</a>
          <a href="#resultados">Resultados</a>
          <a href="#preguntas">Preguntas</a>
        </nav>
        <a className="header-cta" href="#contacto">Habla con Arbion <span>↗</span></a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-grid" />
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse" /> MARKETING PARA CLÍNICAS DENTALES</div>
          <h1>Más pacientes adecuados.<br /><em>Más claridad para crecer.</em></h1>
          <p className="hero-text">
            Arbion conecta campañas, páginas web y seguimiento para ayudarte a atraer pacientes para tus tratamientos prioritarios y ver qué está funcionando.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contacto">Cuéntanos qué quieres mejorar <span>↗</span></a>
            <a className="text-link" href="#sistema">Conoce el sistema <span>↓</span></a>
          </div>
          <p className="hero-note">Una estrategia clara, con objetivos acordados y resultados que se pueden revisar.</p>
        </div>
        <figure className="hero-visual">
          <div className="hero-photo-frame">
            <img className="hero-photo" src="https://images.unsplash.com/photo-1777331903190-341a3dd0441b?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=85&w=1400" alt="Dentista conversa con una paciente en una clínica luminosa y contemporánea" fetchPriority="high" />
            <div className="journey-card">
              <span>DEL PRIMER CONTACTO A LA CITA</span>
              <div className="journey-steps"><b>Te encuentran</b><i>→</i><b>Te consultan</b><i>→</i><b>Reservan</b></div>
            </div>
          </div>
          <figcaption>Imagen de <a href="https://unsplash.com/@harold_angus" target="_blank" rel="noreferrer">Harold Hizon / Unsplash</a></figcaption>
        </figure>
      </section>

      <section className="trust-strip" aria-label="Áreas de trabajo">
        <span>UN SISTEMA CONECTADO</span>
        <strong>VISIBILIDAD <i>·</i> CONSULTAS <i>·</i> SEGUIMIENTO <i>·</i> CITAS</strong>
      </section>

      <Reveal as="section" className="problem-section">
        <div className="problem-heading">
          <span className="section-index">EL RETO</span>
          <h2>¿Sabes qué pasa después de que alguien encuentra tu clínica?</h2>
        </div>
        <div className="problem-copy">
          <p>Una campaña puede generar visitas y una web puede recibir consultas. Si cada parte trabaja por separado, cuesta saber qué funciona y dónde se pierden oportunidades.</p>
          <p>Arbion ordena ese recorrido para que puedas tomar decisiones con una imagen más completa de la captación y el seguimiento.</p>
        </div>
      </Reveal>

      <Reveal as="section" className="section system" id="sistema">
        <div className="section-intro">
          <span className="section-index">QUÉ HACEMOS</span>
          <h2>Del primer clic<br /><em>a una agenda mejor conectada.</em></h2>
          <p>No se trata de sumar acciones sin dirección. Diseñamos un recorrido que une lo que una persona ve con la forma en que tu clínica responde.</p>
        </div>
        <div className="service-list">
          {services.map((service) => (
            <article className="service" key={service.number}>
              <span className="service-number">{service.number}</span>
              <div className="service-content">
                <span className="service-detail">{service.detail}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
              <span className="service-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="dark-section" id="proceso">
        <div className="dark-inner">
          <div className="section-intro light">
            <span className="section-index">CÓMO TRABAJAMOS</span>
            <h2>Un proceso claro.<br /><em>Decisiones compartidas.</em></h2>
            <p>Primero entendemos el punto de partida. Después, acordamos qué hacer y cómo evaluar si está ayudando.</p>
          </div>
          <div className="process-grid">
            {steps.map(([number, title, text]) => (
              <article className="process-step" key={number}>
                <span className="process-number">{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="results-section" id="resultados">
        <div className="results-intro">
          <span className="section-index">RESULTADOS CON CONTEXTO</span>
          <h2>Medir más que los clics.</h2>
          <p>Las visitas cuentan una parte de la historia. Para valorar el trabajo, conectamos la actividad de marketing con las consultas y citas que tu clínica puede registrar.</p>
        </div>
        <div className="measurement-panel">
          <div className="panel-heading"><span>QUÉ REVISAMOS</span><span className="panel-status"><i /> INDICADORES ACORDADOS</span></div>
          {measures.map(([title, text]) => (
            <div className="measure-row" key={title}>
              <strong>{title}</strong><span>{text}</span><b aria-hidden="true">↗</b>
            </div>
          ))}
          <p className="panel-note">Los objetivos se definen con la clínica y se priorizan datos agregados. No se prometen cifras de pacientes o ingresos antes de conocer el contexto.</p>
        </div>
      </Reveal>

      <Reveal as="section" className="trust-section">
        <div className="trust-heading">
          <span className="section-index">TRANSPARENCIA</span>
          <h2>Entender cada paso<br /><em>también forma parte del resultado.</em></h2>

        </div>
        <p className="trust-proof">Tenemos casos de éxito de empresas que han confiado en Arbion Business y han aumentado sus ingresos. Detrás de cada proyecto hay un equipo comprometido que trabaja de forma constante para ayudar a nuestros clientes a ver resultados en poco tiempo.</p>
        <div className="trust-grid">
          <article><span>01</span><h3>Sabes qué se propone</h3><p>Las acciones se explican junto con su objetivo, el esfuerzo que requieren y la forma de revisarlas.</p></article>
          <article><span>02</span><h3>Ves qué se está midiendo</h3><p>Los indicadores se acuerdan antes de empezar, para que el avance tenga contexto y no dependa de cifras sueltas.</p></article>
          <article><span>03</span><h3>La clínica participa</h3><p>Tu conocimiento de los pacientes y del equipo ayuda a interpretar las consultas y decidir los siguientes ajustes.</p></article>
        </div>
      </Reveal>

      <Reveal as="section" className="faq-section" id="preguntas">
        <div className="faq-intro">
          <span className="section-index">ANTES DE EMPEZAR</span>
          <h2>Es normal querer saberlo.</h2>
          <p>Estas son algunas preguntas habituales al valorar un servicio de crecimiento para una clínica.</p>
        </div>
        <div className="faq-list">
          {faqs.map(([question, answer]) => (
            <details className="faq-item" key={question}>
              <summary>{question}<span aria-hidden="true">+</span></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="contact-section" id="contacto">
        <div>
          <span className="section-index">SIGUIENTE PASO</span>
          <h2>Empecemos por<br /><em>entender tu clínica.</em></h2>
          <p>Cuéntanos qué quieres mejorar. Revisaremos el contexto contigo y veremos si Arbion puede ayudarte.</p>
        </div>
        <a className="contact-card" href="mailto:hola@arbionbusiness.com?subject=Quiero%20hablar%20sobre%20mi%20cl%C3%ADnica">
          <span>PRIMERA CONVERSACIÓN</span>
          <strong>Habla con Arbion <b>↗</b></strong>
          <small>Comparte objetivos generales. No envíes datos personales ni información clínica de pacientes.</small>
        </a>
      </Reveal>

      <footer>
        <a className="brand" href="#inicio" aria-label="Arbion Business, volver al inicio"><Image className="brand-logo" src="/arbion-logo-gold.png" alt="" width={530} height={575} /></a>
        <span>Estrategia digital para clínicas dentales.</span>
        <a href="mailto:hola@arbionbusiness.com">hola@arbionbusiness.com</a>
        <span>© 2026 Arbion Business</span>
      </footer>
    </main>
  );
}
