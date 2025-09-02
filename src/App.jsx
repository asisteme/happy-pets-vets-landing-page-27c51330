import React from "react"

const staff = [
  {
    name: "Dra. Lucía Ramírez",
    role: "Directora Veterinaria",
    photo: "https://images.pexels.com/photos/3714743/pexels-photo-3714743.jpeg?auto=compress&w=400&h=400&fit=facearea"
  },
  {
    name: "Dr. Mateo Torres",
    role: "Especialista en Cirugía",
    photo: "https://images.pexels.com/photos/8460155/pexels-photo-8460155.jpeg?auto=compress&w=400&h=400&fit=facearea"
  },
  {
    name: "Carla Gómez",
    role: "Auxiliar Veterinaria",
    photo: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&w=400&h=400&fit=facearea"
  }
]

const facilities = [
  "https://images.pexels.com/photos/623513/pexels-photo-623513.jpeg?auto=compress&w=400&h=300",
  "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&w=400&h=300",
  "https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg?auto=compress&w=400&h=300"
]

const services = [
  {
    icon: "🐾",
    title: "Consulta General",
    desc: "Atención médica integral para perros y gatos, con enfoque preventivo y personalizado."
  },
  {
    icon: "💉",
    title: "Vacunación",
    desc: "Esquemas completos de vacunación para proteger a tus mascotas de enfermedades comunes."
  },
  {
    icon: "🩺",
    title: "Cirugía",
    desc: "Procedimientos quirúrgicos seguros y modernos, realizados por especialistas."
  },
  {
    icon: "🦷",
    title: "Odontología",
    desc: "Cuidado dental profesional para una salud bucal óptima."
  },
  {
    icon: "🏥",
    title: "Hospitalización",
    desc: "Instalaciones cómodas y seguras para la recuperación de tu mascota."
  }
]

const gallery = [
  "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&w=400&h=400",
  "https://images.pexels.com/photos/4587997/pexels-photo-4587997.jpeg?auto=compress&w=400&h=400",
  "https://images.pexels.com/photos/52570/horse-herd-fog-nature-52570.jpeg?auto=compress&w=400&h=400",
  "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&w=400&h=400",
  "https://images.pexels.com/photos/4588000/pexels-photo-4588000.jpeg?auto=compress&w=400&h=400",
  "https://images.pexels.com/photos/1108098/pexels-photo-1108098.jpeg?auto=compress&w=400&h=400"
]

export default function App() {
  return (
    <>
      <header>
        <div style={{display: "flex", alignItems: "center", gap: "1rem"}}>
          <img
            src="https://storage.googleapis.com/tapthetable/assets/1406217/inbox/1000698931128255245/1756845145-descarga-%281%29.png"
            alt="Happy Pets Vets Logo"
            style={{width: 48, height: 48, borderRadius: "50%", background: "#fff", boxShadow: "0 2px 8px 0 rgba(110,193,182,0.10)"}}
          />
          <span style={{fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: "1.3rem", color: "var(--primary-dark)"}}>Happy Pets Vets</span>
        </div>
        <nav>
          <a href="#sobre-nosotros">Sobre Nosotros</a>
          <a href="#servicios">Servicios</a>
          <a href="#horario-ubicacion">Horario &amp; Ubicación</a>
          <a href="#galeria">Galería</a>
        </nav>
        <button onClick={() => window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'})}>Agenda tu cita</button>
      </header>

      <main>
        <section className="hero">
          <img
            className="hero-logo"
            src="https://storage.googleapis.com/tapthetable/assets/1406217/inbox/1000698931128255245/1756845145-descarga-%281%29.png"
            alt="Happy Pets Vets Logo"
          />
          <h1 className="hero-title">Cuidamos a tus mascotas con amor y ciencia</h1>
          <p className="hero-subtitle">Veterinaria innovadora, cercana y profesional. Tu tranquilidad, nuestra prioridad.</p>
          <button onClick={() => window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'})}>Solicita tu cita</button>
        </section>

        <section className="section" id="sobre-nosotros">
          <h2 className="section-title">Sobre Nosotros</h2>
          <div className="section-content">
            <p>
              En Happy Pets Vets, creemos que cada mascota merece una vida plena y saludable. Nuestro equipo combina experiencia, innovación y un trato humano para ofrecer atención veterinaria de excelencia en un ambiente sereno y amigable.
            </p>
            <div className="staff-list">
              {staff.map((s, i) => (
                <div className="staff-card" key={i}>
                  <img className="staff-photo" src={s.photo} alt={s.name} />
                  <div className="staff-name">{s.name}</div>
                  <div className="staff-role">{s.role}</div>
                </div>
              ))}
            </div>
            <h3 style={{marginTop: "2.2rem", color: "var(--primary-dark)", fontWeight: 600}}>Nuestras Instalaciones</h3>
            <div className="facility-photos">
              {facilities.map((url, i) => (
                <img className="facility-photo" src={url} alt={`Instalación ${i+1}`} key={i} />
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="servicios">
          <h2 className="section-title">Nuestros Servicios</h2>
          <div className="services-list">
            {services.map((s, i) => (
              <div className="service-card" key={i}>
                <div className="service-icon">{s.icon}</div>
                <div style={{fontWeight: 600, color: "var(--primary-dark)", marginBottom: "0.3rem"}}>{s.title}</div>
                <div style={{color: "var(--muted)", fontSize: "1rem"}}>{s.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="horario-ubicacion">
          <h2 className="section-title">Horario y Ubicación</h2>
          <div className="schedule-location">
            <div className="schedule">
              <h3 style={{color: "var(--primary-dark)", fontWeight: 600}}>Horario de Atención</h3>
              <ul style={{listStyle: "none", padding: 0, margin: "1rem 0 0 0", color: "var(--text)", fontSize: "1.05rem"}}>
                <li>Lunes a Viernes: 9:00 - 19:00</li>
                <li>Sábados: 10:00 - 15:00</li>
                <li>Domingos y feriados: Cerrado</li>
              </ul>
            </div>
            <div className="location">
              <h3 style={{color: "var(--primary-dark)", fontWeight: 600}}>¿Dónde estamos?</h3>
              <p style={{margin: "0.5rem 0 0.7rem 0"}}>Av. Mascotas Felices 123, Ciudad Animal, País</p>
              <iframe
                className="location-map"
                title="Ubicación Happy Pets Vets"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-3.7037902%2C40.4167754%2C-3.7037902%2C40.4167754&amp;layer=mapnik"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>

        <section className="section" id="galeria">
          <h2 className="section-title">Galería de Mascotas Felices</h2>
          <div className="gallery-grid">
            {gallery.map((url, i) => (
              <img className="gallery-photo" src={url} alt={`Mascota feliz ${i+1}`} key={i} />
            ))}
          </div>
        </section>
      </main>

      <footer>
        <div>© {new Date().getFullYear()} Happy Pets Vets. Todos los derechos reservados.</div>
        <div className="footer-socials">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener" aria-label="Facebook">
            <svg width="24" height="24" fill="currentColor" aria-hidden="true"><path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 5 3.657 9.127 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.127 22 17 22 12"/></svg>
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener" aria-label="Instagram">
            <svg width="24" height="24" fill="currentColor" aria-hidden="true"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 2.25a6 6 0 1 1 0 12 6 6 0 0 1 0-12zm0 1.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zm5.25 1.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>
          </a>
          <a href="https://wa.me/" target="_blank" rel="noopener" aria-label="WhatsApp">
            <svg width="24" height="24" fill="currentColor" aria-hidden="true"><path d="M12.004 2.003a9.94 9.94 0 0 0-8.09 15.89l-1.7 4.95a1 1 0 0 0 1.27 1.27l4.95-1.7a9.94 9.94 0 1 0 3.57-20.41zm0 1.5a8.44 8.44 0 1 1 0 16.88 8.44 8.44 0 0 1 0-16.88zm-4.1 6.1c.13-.29.41-.48.73-.48h.01c.32 0 .6.19.73.48.2.44.41.87.63 1.29.13.24.09.54-.1.74l-.54.54a6.5 6.5 0 0 0 2.7 2.7l.54-.54c.2-.19.5-.23.74-.1.42.22.85.43 1.29.63.29.13.48.41.48.73v.01c0 .32-.19.6-.48.73-.44.2-.87.41-1.29.63-.24.13-.54.09-.74-.1l-.54-.54a8.5 8.5 0 0 1-2.7-2.7l.54-.54c.19-.2.23-.5.1-.74-.22-.42-.43-.85-.63-1.29z"/></svg>
          </a>
        </div>
      </footer>
    </>
  )
}
