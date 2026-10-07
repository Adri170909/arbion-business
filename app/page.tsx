const services = [
  {
    number: "01",
    title: "Más pacientes",
    text: "Campañas y páginas pensadas para atraer pacientes que realmente encajan con tus tratamientos.",
  },
  {
    number: "02",
    title: "Más conversión",
    text: "Convertimos visitas y consultas en oportunidades con mensajes, funnels y seguimiento optimizados.",
  },
  {
    number: "03",
    title: "Más control",
    text: "Automatiza tareas repetitivas y entiende qué está generando pacientes, citas e ingresos.",
  },
];

const metrics = [
  ["01", "Captación", "Generamos demanda alrededor de tus tratamientos más rentables."],
  ["02", "Conversión", "Diseñamos cada punto de contacto para reducir fricción."],
  ["03", "Automatización", "El seguimiento continúa aunque tu equipo esté ocupado."],
  ["04", "Datos", "Decisiones basadas en resultados, no en intuiciones."],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#" aria-label="Arbion Business">
          <span className="brand-mark">A</span>
          <span>ARBION<span className="brand-muted">/BUSINESS</span></span>
        </a>
        <nav className="nav" aria-label="Navegación principal">
          <a href="#sistema">El sistema</a>
          <a href="#proceso">Cómo funciona</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <a className="header-cta" href="#contacto">Hablemos <span>↗</span></a>
      </header>

      <section className="hero">
        <div className="hero-grid" />
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse" /> GROWTH SYSTEM FOR DENTAL CLINICS</div>
          <h1>Tu clínica no necesita más marketing.<br /><em>Necesita un sistema.</em></h1>
          <p className="hero-text">
            Diseñamos el ecosistema que conecta captación, conversión y automatización
            para que tu clínica pueda crecer con control.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contacto">Descubrir Arbion <span>↗</span></a>
            <a className="text-link" href="#sistema">Ver cómo funciona <span>↓</span></a>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="orb orb-one" />
          <div className="orb orb-two" />
          <div className="signal signal-one" />
          <div className="signal signal-two" />
          <div className="visual-card">
            <div className="card-top"><span>CLINIC GROWTH</span><span>LIVE</span></div>
            <div className="chart">
              <i /><i /><i /><i /><i /><i /><i /><i />
            </div>
            <div className="card-bottom"><strong>+38.4%</strong><span>qualified opportunities</span></div>
          </div>
        </div>
      </section>

      <section className="trust-strip">
        <span>UN SISTEMA PARA CLÍNICAS QUE QUIEREN</span>
        <strong>CRECER · CONVERTIR · AUTOMATIZAR · ESCALAR</strong>
      </section>

      <section className="section system" id="sistema">
        <div className="section-intro">
          <span className="section-index">01 / EL SISTEMA</span>
          <h2>Deja de perseguir<br /><em>resultados aislados.</em></h2>
          <p>Arbion conecta las piezas que normalmente trabajan por separado para convertir el crecimiento en un proceso continuo.</p>
        </div>
        <div className="service-list">
          {services.map((service) => (
            <article className="service" key={service.number}>
              <span className="service-number">{service.number}</span>
              <div><h3>{service.title}</h3><p>{service.text}</p></div>
              <span className="service-arrow">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="dark-section" id="proceso">
        <div className="dark-inner">
          <div className="section-intro light">
            <span className="section-index">02 / CÓMO FUNCIONA</span>
            <h2>Una máquina de crecimiento<br /><em>hecha para tu clínica.</em></h2>
          </div>
          <div className="metric-grid">
            {metrics.map(([number, title, text]) => (
              <article className="metric" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="manifesto">
        <span className="section-index">03 / NUESTRA FORMA DE VERLO</span>
        <blockquote>“El objetivo no es conseguir más leads.<br /><em>Es construir una clínica que crece mejor.</em>”</blockquote>
      </section>

      <section className="contact-section" id="contacto">
        <div>
          <span className="section-index">04 / EMPECEMOS</span>
          <h2>¿Listo para construir<br /><em>tu próximo nivel?</em></h2>
        </div>
        <a className="contact-card" href="mailto:hola@arbionbusiness.com">
          <span>CUÉNTANOS SOBRE TU CLÍNICA</span>
          <strong>Hablemos <b>↗</b></strong>
        </a>
      </section>

      <footer>
        <a className="brand" href="#"><span className="brand-mark">A</span><span>ARBION<span className="brand-muted">/BUSINESS</span></span></a>
        <span>Growth systems for dental clinics.</span>
        <span>© 2026 Arbion Business</span>
      </footer>
    </main>
  );
}
