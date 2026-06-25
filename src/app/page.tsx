import Link from 'next/link';
import TrackedLink from '@/components/TrackedLink';
import QuoteModal from '@/components/QuoteModal';

export default function Home() {
  return (
    <div className="min-h-screen text-zinc-300 font-sans selection:bg-orange-500/30 selection:text-orange-200">
      {/* Global Navbar */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-900/50">
        <div className="max-w-6xl mx-auto px-6 h-24 flex items-center justify-between">
          <div className="flex items-center">
            {/* Logo Text */}
            <Link href="/" className="flex items-center gap-2 font-extrabold text-3xl md:text-4xl tracking-widest text-[#7B2CBF] " aria-label="LogikaMobile Home">
              LOGIKA<span className="text-orange-500 ">MOBILE</span>
            </Link>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10 text-base font-bold uppercase tracking-widest text-zinc-400">
            <TrackedLink href="#about" targetName="about" className="hover:text-orange-500 hover: transition-colors duration-300">Acerca de</TrackedLink>
            <TrackedLink href="#services" targetName="services" className="hover:text-orange-500 hover: transition-colors duration-300">Servicios</TrackedLink>
            <TrackedLink href="#contact" targetName="contact" className="hover:text-orange-500 hover: transition-colors duration-300">Contacto</TrackedLink>
          </nav>

          {/* Mobile Menu Icon */}
          <button className="md:hidden text-zinc-400 hover:text-[#7B2CBF] hover:" aria-label="Abrir menú">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center px-6 min-h-[85vh] py-20 relative">
          {/* Subtle radial glow behind hero */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-orange-600/5 blur-[150px] pointer-events-none rounded-full"></div>
          
          <img src="/logos/computerLogo.svg" alt="LogikaMobile Logo" className="h-56 md:h-96 mb-14 w-auto relative z-10" />
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-[#7B2CBF]  mb-8 relative z-10">
            Logika<span className="text-orange-500 ">Mobile</span><span className="text-[#6CD3D3]">.</span>
          </h1>
          <p className="text-xl md:text-3xl text-zinc-300 text-justify max-w-4xl mb-16 leading-relaxed font-light relative z-10">
            Soluciones de software estratégico para impulsar tu negocio. Construimos plataformas móviles y web escalables, enfocadas en optimizar tus operaciones y acelerar tu crecimiento.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto relative z-10">
            <QuoteModal />
          </div>
        </section>


        {/* About Us */}
        <section id="about" className="py-32 md:py-48 max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight text-[#7B2CBF]  mb-6">
              <span className="text-orange-500 ">System.Info</span> <span className="text-[#6CD3D3]">//</span> About Us
            </h2>
            <div className="h-1 w-32 bg-orange-500"></div>
            <div className="h-px w-full bg-zinc-900/80 mt-1"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 leading-relaxed">
            <div className="bg-black/40 p-10 md:p-16 border border-zinc-900/50 hover:border-zinc-700 transition-colors duration-500">
              <h3 className="text-orange-500  font-extrabold tracking-widest uppercase mb-8 text-2xl md:text-3xl">Misión</h3>
              <p className="text-zinc-300 text-justify text-xl md:text-2xl font-light">
                Diseñar y desarrollar plataformas tecnológicas de <strong className="text-[#7B2CBF]  font-bold">alto rendimiento</strong>. Nos enfocamos en crear soluciones sostenibles que resuelvan problemas complejos y garanticen un retorno de inversión (ROI) claro para tu empresa.
              </p>
            </div>
            <div className="bg-black/40 p-10 md:p-16 border border-zinc-900/50 hover:border-zinc-700 transition-colors duration-500">
              <h3 className="text-orange-500  font-extrabold tracking-widest uppercase mb-8 text-2xl md:text-3xl">Visión</h3>
              <p className="text-zinc-300 text-justify text-xl md:text-2xl font-light">
                Convertirnos en el <strong className="text-[#7B2CBF]  font-bold">socio tecnológico estratégico</strong> de las empresas líderes. Ayudamos a transformar la complejidad operativa en sistemas eficientes, permitiéndote escalar sin fricciones.
              </p>
            </div>
          </div>
          
          <div className="mt-16 bg-black/40 p-10 md:p-16 border border-zinc-900/50 hover:border-zinc-700 transition-colors duration-500">
            <h3 className="text-[#7B2CBF] font-extrabold tracking-widest uppercase mb-8 text-2xl md:text-3xl border-b border-zinc-900 pb-4">
              Liderazgo Técnico<span className="text-[#6CD3D3]">_</span>
            </h3>
            <div className="flex flex-col md:flex-row gap-10 items-start">
              <div className="md:w-1/3 flex flex-col gap-2 items-center text-center">
                <div className="w-full flex justify-center mb-6">
                  <img src="/logos/Vector.svg" alt="LogikaMobile Vector" className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-[0_0_15px_rgba(123,44,191,0.3)]" />
                </div>
                <strong className="text-orange-500 font-bold text-2xl uppercase tracking-wider">Luis Daniel Michel</strong>
                <span className="text-zinc-300 font-mono text-sm tracking-widest uppercase">CEO & Fundador</span>
                
                <div className="mt-6 space-y-2 text-sm font-mono text-zinc-500 flex flex-col items-center">
                  <p className="flex items-center gap-2"><span className="text-[#6CD3D3]">/</span> Ing. en Computación (2019)</p>
                  <p className="flex items-center gap-2"><span className="text-[#6CD3D3]">/</span> IPN</p>
                  <p className="flex items-center gap-2"><span className="text-[#6CD3D3]">/</span> Cédula: 15683999</p>
                </div>
              </div>
              <div className="md:w-2/3 md:border-l border-zinc-900 md:pl-10 pt-6 md:pt-0 border-t md:border-t-0">
                <p className="text-zinc-300 text-justify text-lg md:text-xl font-light leading-relaxed mb-4">
                  Dirigir el desarrollo de software crítico requiere más que dominio técnico; exige un profundo sentido de la responsabilidad empresarial. En LogikaMobile, entendemos que cada línea de código es una pieza fundamental para la operación diaria de nuestros clientes.
                </p>
                <p className="text-zinc-400 text-justify text-base md:text-lg font-light leading-relaxed">
                  Bajo un liderazgo enfocado en la arquitectura escalable y la excelencia técnica, nos aseguramos de que la tecnología que entregamos no sólo funcione hoy, sino que se convierta en un activo resiliente capaz de soportar el crecimiento futuro de su empresa con total seguridad.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Servicios */}
        <section id="services" className="py-32 md:py-48 bg-black/60 border-t border-zinc-900/50 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-24">
              <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight text-[#7B2CBF]  mb-6">
                Nuestros <span className="text-orange-500 ">Servicios</span><span className="text-[#6CD3D3] animate-pulse">_</span>
              </h2>
              <div className="h-1 w-32 bg-orange-500"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Card 1 */}
              <div className="border border-zinc-800/80 bg-zinc-950/50 p-12 hover:border-orange-500/50 hover:bg-black transition-all duration-500 group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                
                <div className="w-20 h-20 bg-black border border-zinc-800 flex items-center justify-center mb-10 group-hover:border-orange-500/50 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500  group-hover:scale-110 transition-transform duration-500">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                    <line x1="12" y1="18" x2="12.01" y2="18"></line>
                  </svg>
                </div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-[#7B2CBF]  mb-6 leading-tight">Ingeniería <br/>Móvil</h3>
                <span className="inline-block px-4 py-2 bg-orange-500/10 text-orange-400 font-mono text-sm mb-8 border border-orange-500/20">Native / Cross-Platform</span>
                <p className="text-zinc-400 text-justify text-lg md:text-xl font-light leading-relaxed">
                  Desarrollamos aplicaciones móviles robustas a la medida. Seleccionamos la mejor tecnología para asegurar que tu producto ofrezca una experiencia impecable y cumpla con tus objetivos de negocio.
                </p>
              </div>

              {/* Card 2 */}
              <div className="border border-zinc-800/80 bg-zinc-950/50 p-12 hover:border-orange-500/50 hover:bg-black transition-all duration-500 group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                
                <div className="w-20 h-20 bg-black border border-zinc-800 flex items-center justify-center mb-10 group-hover:border-orange-500/50 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500  group-hover:scale-110 transition-transform duration-500">
                    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
                  </svg>
                </div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-[#7B2CBF]  mb-6 leading-tight">Arquitecturas <br/>Cloud</h3>
                <span className="inline-block px-4 py-2 bg-orange-500/10 text-orange-400 font-mono text-sm mb-8 border border-orange-500/20">AWS / GCP / Azure</span>
                <p className="text-zinc-400 text-justify text-lg md:text-xl font-light leading-relaxed">
                  Diseñamos e implementamos soluciones en la nube altamente disponibles. Preparamos tu sistema para crecer de forma inteligente, optimizando costos y garantizando disponibilidad ante altas demandas.
                </p>
              </div>

              {/* Card 3 */}
              <div className="border border-zinc-800/80 bg-zinc-950/50 p-12 hover:border-orange-500/50 hover:bg-black transition-all duration-500 group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                
                <div className="w-20 h-20 bg-black border border-zinc-800 flex items-center justify-center mb-10 group-hover:border-orange-500/50 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500  group-hover:scale-110 transition-transform duration-500">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-[#7B2CBF]  mb-6 leading-tight">Refactorización & <br/>Escalabilidad</h3>
                <span className="inline-block px-4 py-2 bg-orange-500/10 text-orange-400 font-mono text-sm mb-8 border border-orange-500/20">Legacy to Modern</span>
                <p className="text-zinc-400 text-justify text-lg md:text-xl font-light leading-relaxed">
                  Actualizamos y optimizamos sistemas existentes para asegurar su viabilidad futura. Reducimos la deuda técnica y mejoramos el rendimiento para que tu tecnología nunca sea un límite.
                </p>
              </div>

              {/* Card 4 */}
              <div className="border border-zinc-800/80 bg-zinc-950/50 p-12 hover:border-orange-500/50 hover:bg-black transition-all duration-500 group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                
                <div className="w-20 h-20 bg-black border border-zinc-800 flex items-center justify-center mb-10 group-hover:border-orange-500/50 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500  group-hover:scale-110 transition-transform duration-500">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-[#7B2CBF]  mb-6 leading-tight">Presencia Digital <br/>Estratégica</h3>
                <span className="inline-block px-4 py-2 bg-orange-500/10 text-orange-400 font-mono text-sm mb-8 border border-orange-500/20">Web / SEO / CRO</span>
                <p className="text-zinc-400 text-justify text-lg md:text-xl font-light leading-relaxed">
                  Creamos plataformas corporativas y portales orientados a la conversión. Combinamos diseño atractivo con optimización técnica para posicionar tu marca y potenciar tus ventas en línea.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Trusted By */}
        <section className="py-24 border-y border-zinc-900/50 bg-black/40 backdrop-blur-sm relative z-10 overflow-hidden">
          <div className="max-w-full mx-auto">
            <h3 className="text-center text-lg md:text-xl font-bold text-zinc-500 mb-16 uppercase tracking-[0.2em] px-6">
              Con la confianza de:
            </h3>
            
            <div className="relative flex overflow-hidden py-12 -my-12">
              <div className="flex w-max animate-marquee gap-16 md:gap-32 pr-16 md:pr-32 opacity-70 grayscale hover:grayscale-0 transition-all duration-700">
                {/* Original Items */}
                <div className="flex flex-col justify-center items-center gap-6 group hover:scale-[1.15] md:hover:scale-125 transition-all duration-500 cursor-default w-80 md:w-96 h-32 md:h-40 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:drop-shadow-[0_0_30px_rgba(123,44,191,0.8)]">
                  <img src="/logos/roche_logo.svg" alt="Roche Logo" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="flex flex-col justify-center items-center gap-6 group hover:scale-[1.15] md:hover:scale-125 transition-all duration-500 cursor-default w-80 md:w-96 h-32 md:h-40 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:drop-shadow-[0_0_30px_rgba(123,44,191,0.8)]">
                  <img src="/logos/irn_logo_complete.svg" alt="Iberoamerican Research Network Logo" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="flex flex-col justify-center items-center gap-6 group hover:scale-[1.15] md:hover:scale-125 transition-all duration-500 cursor-default w-80 md:w-96 h-32 md:h-40 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:drop-shadow-[0_0_30px_rgba(123,44,191,0.8)]">
                  <img src="/logos/asesoria_certificada_logo.svg" alt="Asesoría Certificada Logo" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="flex flex-col justify-center items-center gap-6 group hover:scale-[1.15] md:hover:scale-125 transition-all duration-500 cursor-default w-80 md:w-96 h-32 md:h-40 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:drop-shadow-[0_0_30px_rgba(123,44,191,0.8)]">
                  <img src="/logos/ClinveltLogo.svg" alt="Clinvelt Logo" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="flex flex-col justify-center items-center gap-6 group hover:scale-[1.15] md:hover:scale-125 transition-all duration-500 cursor-default w-80 md:w-96 h-32 md:h-40 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:drop-shadow-[0_0_30px_rgba(123,44,191,0.8)]">
                  <img src="/logos/P-J_LEGAL_Y_CONTABLE_logo.svg" alt="P&J Legal y Contable Logo" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="flex flex-col justify-center items-center gap-6 group hover:scale-[1.15] md:hover:scale-125 transition-all duration-500 cursor-default w-80 md:w-96 h-32 md:h-40 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:drop-shadow-[0_0_30px_rgba(123,44,191,0.8)]">
                  <div className="text-2xl md:text-3xl font-extrabold tracking-tight text-orange-500 text-center group-hover:text-orange-400 transition-colors duration-300">Tu empresa, crece aquí</div>
                  <div className="w-64 h-24 bg-zinc-900/50 border border-orange-500/20 rounded flex items-center justify-center">
                    <span className="text-sm font-mono text-orange-600/50">Space Available</span>
                  </div>
                </div>

                {/* Duplicated Items for Marquee Loop */}
                <div className="flex flex-col justify-center items-center gap-6 group hover:scale-[1.15] md:hover:scale-125 transition-all duration-500 cursor-default w-80 md:w-96 h-32 md:h-40 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:drop-shadow-[0_0_30px_rgba(123,44,191,0.8)]">
                  <img src="/logos/roche_logo.svg" alt="Roche Logo" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="flex flex-col justify-center items-center gap-6 group hover:scale-[1.15] md:hover:scale-125 transition-all duration-500 cursor-default w-80 md:w-96 h-32 md:h-40 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:drop-shadow-[0_0_30px_rgba(123,44,191,0.8)]">
                  <img src="/logos/irn_logo_complete.svg" alt="Iberoamerican Research Network Logo" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="flex flex-col justify-center items-center gap-6 group hover:scale-[1.15] md:hover:scale-125 transition-all duration-500 cursor-default w-80 md:w-96 h-32 md:h-40 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:drop-shadow-[0_0_30px_rgba(123,44,191,0.8)]">
                  <img src="/logos/asesoria_certificada_logo.svg" alt="Asesoría Certificada Logo" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="flex flex-col justify-center items-center gap-6 group hover:scale-[1.15] md:hover:scale-125 transition-all duration-500 cursor-default w-80 md:w-96 h-32 md:h-40 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:drop-shadow-[0_0_30px_rgba(123,44,191,0.8)]">
                  <img src="/logos/ClinveltLogo.svg" alt="Clinvelt Logo" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="flex flex-col justify-center items-center gap-6 group hover:scale-[1.15] md:hover:scale-125 transition-all duration-500 cursor-default w-80 md:w-96 h-32 md:h-40 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:drop-shadow-[0_0_30px_rgba(123,44,191,0.8)]">
                  <img src="/logos/P-J_LEGAL_Y_CONTABLE_logo.svg" alt="P&J Legal y Contable Logo" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="flex flex-col justify-center items-center gap-6 group hover:scale-[1.15] md:hover:scale-125 transition-all duration-500 cursor-default w-80 md:w-96 h-32 md:h-40 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:drop-shadow-[0_0_30px_rgba(123,44,191,0.8)]">
                  <div className="text-2xl md:text-3xl font-extrabold tracking-tight text-orange-500 text-center group-hover:text-orange-400 transition-colors duration-300">Tu empresa, crece aquí</div>
                  <div className="w-64 h-24 bg-zinc-900/50 border border-orange-500/20 rounded flex items-center justify-center">
                    <span className="text-sm font-mono text-orange-600/50">Space Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer / Contact */}
      <footer id="contact" className="py-40 bg-black/20 backdrop-blur-md border-t border-zinc-900/50 text-center px-6 relative overflow-hidden">
        {/* Subtle radial glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-600/5 blur-[120px] pointer-events-none rounded-full"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-[#7B2CBF]  mb-10">
            Hablemos <span className="text-orange-500 ">de tu Proyecto</span><span className="text-[#6CD3D3]">.</span>
          </h2>
          <p className="text-zinc-400 text-justify mb-16 text-2xl md:text-3xl font-light max-w-2xl mx-auto leading-relaxed">
            Contacta a nuestro equipo de especialistas y descubre cómo nuestra tecnología puede escalar tu negocio al siguiente nivel.
          </p>
          <QuoteModal trigger={
            <span 
              className="inline-block text-orange-500  hover:text-orange-400 hover: text-3xl md:text-5xl font-extrabold underline underline-offset-[16px] decoration-orange-500/40 hover:decoration-orange-400 transition-all duration-300"
            >
              contacto@logikamobile.com
            </span>
          } />
        </div>
      </footer>
    </div>
  );
}
