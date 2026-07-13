function App() {
  return (
    <main className="flex flex-col max-w-3xl mx-auto px-6 sm:px-8 text-ink">
      <header className="flex flex-wrap justify-between items-baseline gap-x-4 gap-y-2 py-6 sm:py-8">
        <p>Pablo</p>
        <nav className="flex items-baseline gap-4 sm:gap-8">
          <a href="#about" className="">About</a>
          <a href="#projects" className="">Projects</a>
          <a href="#contact" className="">Contact</a>
        </nav>
      </header>
      <section className="pt-12 sm:pt-16">
        <div className="flex items-center gap-2">
          <span className="w-8 h-px bg-ink-light"></span>
          <p className="text-ink-light">Galicia, Spain</p>
        </div>

        <h1 className="pt-2 text-4xl sm:text-6xl md:text-7xl lg:text-8xl">
          A <strong className="font-normal text-accent">junior developer</strong> bridging the gap.
        </h1>

        <p className="pt-8 text-lg">
          Drawn to backend work with <strong>Java and Spring</strong> and to figuring out how the
          pieces of a system fit together. I learn best by building real things
          rather than just reading about them&mdash;so this is where I keep them.
        </p>
        <a href="#contact" className="block pt-8 font-bold text-xl underline">Hire me!</a>
      </section>
      <section id="about" className="pt-12 sm:pt-16">
        <div className="flex items-center gap-2">
          <p className="text-ink-light">About me</p>
          <span className="flex-1 h-px bg-cream-dark"></span>
        </div>
        <p className="text-lg mt-4">It all started with video games. I spent enough hours inside them that I eventually got curious about how were they built. The first time I made something move on screen with my own code, it became clear: playing was fun, building was even better.</p>
        <p className="text-lg mt-4">That pulled me into <strong>Computer Engineering</strong>, and the degree changed what I was chasing. The pull stopped being the visible surface and became everything humming underneath it: how complex systems fit together, and the invisible interactions that make software actually work. The part I can't stop thinking about turned out to be the part you never see.</p>
        <p className="text-lg mt-4">I graduated this summer, and I'm spending it building. I'm going deep on backend development — Java, Spring, projects shipped and documented as I go — and looking for the first team that'll let me do this for a living.</p>
        <blockquote className="mt-16 border-l-4 border-accent pl-4 text-2xl sm:text-3xl md:text-4xl italic">
          Leveraging AI to move faster, not to skip the fundamental decisions.
        </blockquote>
      </section>
      <section id="projects" className="pt-12 sm:pt-16">
        <div className="flex items-center gap-2">
          <p className="text-ink-light">Current projects</p>
          <span className="flex-1 h-px bg-cream-dark"></span>
        </div>
        <h2 className="text-3xl sm:text-4xl pt-8">What I'm building now.</h2>
        <a href="https://github.com/pabloquirogaotero/beans" target="_blank" className="group block w-full mt-4 p-6 sm:p-8 bg-cream-dark hover:bg-[#E0D9CE] cursor-pointer">
          <p className="text-2xl"><strong>Beans.</strong> A store, and the system that runs it.</p>
          <p className="pt-4">
            An inventory, ordering and fulfilment system for a coffee shop. Built from scratch to learn the
            patterns corporate backends use&mdash;hexagonal architecture, DDD, concurrency, event-driven with
            Kafka&mdash;rather than to reinvent the wheel.
          </p>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 pt-4">
            <div className="flex">
              <p className="px-2 py-1 bg-cream text-ink-light">Java · Spring · Kafka · React · Tailwind · DDD · JUnit · PostgreSQL</p>
            </div>
            <p className="self-end sm:self-auto text-2xl font-bold text-accent pr-2 transition-all duration-300 sm:group-hover:pr-0">&rarr;</p>
          </div>
        </a>
      </section>
      <section id="trajectory" className="pt-12 sm:pt-16">
        <div className="flex items-center gap-2">
          <p className="text-ink-light">Trajectory</p>
          <span className="flex-1 h-px bg-cream-dark"></span>
        </div>
        <h2 className="text-3xl sm:text-4xl pt-8">The journey.</h2>
        <div className="flex flex-col sm:flex-row py-8 border-b border-cream-dark gap-2 sm:gap-16">
          <p className="text-xl">2026</p>
          <div>
            <p className="text-xl">Graduated and internship at Viewnext.</p>
            <p className="pt-2">I could work on systems other people depend on. There, I could see the gap between university and production environments, and I'm spending the summer bridging it.</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row py-8 border-b border-cream-dark gap-2 sm:gap-16">
          <p className="text-xl">2022</p>
          <div>
            <p className="text-xl">Started Computer Engineering.</p>
            <p className="pt-2">Traded game logic for the fundamentals&mdash;algorithms, architecture, the layers I didn't know were there.</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row pt-8 gap-2 sm:gap-16">
          <p className="text-xl">2016</p>
          <div>
            <p className="text-xl">First lines of code.</p>
            <p className="pt-2">Arduino, Scratch, then Unity&mdash;blinking LEDs and simple games, long before I knew what OOP was.</p>
          </div>
        </div>
      </section>
      <section id="contact" className="pt-12 sm:pt-16">
        <div className="flex items-center gap-2">
          <p className="text-ink-light">Contact</p>
          <span className="flex-1 h-px bg-cream-dark"></span>
        </div>
        <h2 className="text-3xl sm:text-4xl pt-8">Let's talk.</h2>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline gap-8 pt-8">
          <div className="sm:w-1/2">
            <a href="mailto:hello@quirogaotero.com" className="font-bold text-xl hover:text-accent">hello@quirogaotero.com</a>
            <p className="pt-4">If you got a job offer, an interesting project, or you just want to talk, get in touch!</p>
          </div>
          <div className="sm:w-1/2 grid grid-cols-[auto_auto] gap-x-8 gap-y-2 justify-start sm:justify-end">
            <a href="https://linkedin.com/in/pablo-quiroga-otero" target="_blank" className="contents">
              <span className="text-sm text-ink-light text-right">LINKEDIN</span>
              <span className="text-sm text-right">Pablo Quiroga Otero</span>
            </a>
            <a href="https://github.com/pabloquirogaotero/" target="_blank" className="contents">
              <span className="text-sm text-ink-light text-right">GITHUB</span>
              <span className="text-sm text-right">@pabloquirogaotero</span>
            </a>
            <a href="https://leetcode.com/u/pabloquirogaotero/" target="_blank" className="contents">
              <span className="text-sm text-ink-light text-right">LEETCODE</span>
              <span className="text-sm text-right">@pabloquirogaotero</span>
            </a>
          </div>
        </div>
      </section>
      <footer className="flex justify-between items-baseline pt-12 sm:pt-16 pb-8">
        <p>Pablo</p>
        <p>&copy; { new Date().getFullYear() } · Galicia</p>
      </footer>
    </main>
  );
}

export default App
