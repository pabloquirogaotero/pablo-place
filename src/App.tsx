function App() {
  return (
    <main className="max-w-3xl mx-auto px-8 text-ink">
      <header className="flex justify-between items-baseline py-8">
        <a href="#" className="text-sm">PABLO</a>
        <nav className="flex items-baseline gap-8">
          <a href="#about" className="text-sm">ABOUT</a>
          <a href="#projects" className="text-sm">PROJECTS</a>
          <a href="#contact" className="text-sm">CONTACT</a>
        </nav>
      </header>
      <section>
        <div className="flex items-center gap-2 mt-12">
          <span className="w-8 h-px bg-ink-light"></span>
          <p className="text-sm text-ink-light">GALICIA, SPAIN</p>
        </div>
        <h1 className="font-serif text-8xl mt-2">Lorem ipsum dolor <strong className="font-normal text-accent">sit amet</strong> consectetur, adipisicing elit.</h1>
        <p className="mt-8">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor facere iusto quo dolore, temporibus suscipit facilis numquam assumenda vero sint voluptatum dicta magnam fugit ea pariatur totam maiores iste est!</p>
      </section>
      <section id="about" className="pt-16">
        <div className="flex items-center gap-2 mt-12">
          <p className="text-sm text-ink-light">ABOUT ME</p>
          <span className="flex-1 h-px bg-cream-dark"></span>
        </div>
      </section>
      <section id="projects" className="pt-16">
        <div className="flex items-center gap-2 mt-12">
          <p className="text-sm text-ink-light">CURRENT PROJECTS</p>
          <span className="flex-1 h-px bg-cream-dark"></span>
        </div>
      </section>
      <section id="contact" className="pt-16">
        <div className="flex items-center gap-2 mt-12">
          <p className="text-sm text-ink-light">CONTACT</p>
          <span className="flex-1 h-px bg-cream-dark"></span>
        </div>
      </section>
    </main>
  );
}

export default App
