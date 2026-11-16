type Project = {
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  href?: string;
};

// Newest first. A project without `href` shows as a card that isn't a link.
const projects: Project[] = [
  {
    name: 'Fieldwords',
    tagline: 'Learn English from the words you find online.',
    description:
      'A Chrome extension and phone app for B2–C2 learners: catch a word or phrase while browsing, see what it means in that exact context, and review it with spaced repetition. The extension is live on the Chrome Web Store, the app is about to launch, and its TikTok passed 100,000 views in the first week. Planned and built with Claude Code: a spec and a plan for every feature, and skills of my own to reach an MVP in weeks.',
    stack: ['TypeScript', 'React', 'React Native', 'Cloudflare Workers', 'Claude API'],
    href: 'https://fieldwords.app',
  },
  {
    name: 'Imprenta',
    tagline: "A CMS for people who don't know what Git is.",
    description:
      "Edit a website's texts, images and lists on a single page; every publish becomes one commit to the site's repository, and the site rebuilds itself. Someone non-technical uses it to run their own site, so it had to be hard to break: conflict detection, server-side validation and hardened logins.",
    stack: ['Svelte', 'Hono', 'Cloudflare Workers', 'GitHub API', 'Tailwind'],
    href: 'https://github.com/pabloquirogaotero/imprenta',
  },
  {
    name: 'Beans',
    tagline: 'A store, and the system that runs it.',
    description:
      'An inventory, ordering and fulfilment system for a coffee shop, built to go deeper into what I learned at Viewnext. It uses the patterns corporate backends use, hexagonal architecture, DDD, concurrency, events with Kafka, rather than reinventing the wheel, and its tests prove it never oversells.',
    stack: ['Java', 'Spring', 'Kafka', 'PostgreSQL', 'DDD', 'JUnit', 'Testcontainers'],
    href: 'https://github.com/pabloquirogaotero/beans',
  },
  {
    name: 'Mesh messaging',
    tagline: 'Messages that travel without internet.',
    description:
      'My bachelor’s thesis, graded 9.54/10. For disaster response: messages hop between nearby phones over Bluetooth Low Energy until one of them gets a connection and delivers them. I built the Android client, its mesh routing and exchange protocol, and the backend that receives the delivered messages.',
    stack: ['Android', 'Kotlin', 'Bluetooth LE', 'Spring Boot'],
  },
];

function ProjectCard({ project }: { project: Project }) {
  const content = (
    <>
      <p className="text-2xl"><strong>{project.name}.</strong> {project.tagline}</p>
      <p className="pt-4">{project.description}</p>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 pt-4">
        <div className="flex">
          <p className="px-2 py-1 bg-cream text-ink-light">{project.stack.join(' · ')}</p>
        </div>
        {project.href && (
          <p className="self-end sm:self-auto text-2xl font-bold text-accent pr-2 transition-all duration-300 sm:group-hover:pr-0">&rarr;</p>
        )}
      </div>
    </>
  );

  return project.href ? (
    <a href={project.href} target="_blank" className="group block w-full mt-4 p-6 sm:p-8 bg-cream-dark hover:bg-[#E0D9CE] cursor-pointer">
      {content}
    </a>
  ) : (
    <div className="block w-full mt-4 p-6 sm:p-8 bg-cream-dark">{content}</div>
  );
}

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
          I like understanding <strong>how everything works</strong>, from the database to the
          wireless protocol, and building <strong>software that's actually useful</strong> to someone.
          I learn best by building real things
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
        <p className="text-lg mt-4">I graduated this year, and I've spent the months since building: backends with <strong>Java and Spring</strong>, web and mobile apps with <strong>TypeScript and React</strong>, and a bit of everything in between, from a wireless mesh network to a CMS. Each one shipped and documented as I go. Now I'm looking for the first team that'll let me do this for a living.</p>
        <blockquote className="mt-16 border-l-4 border-accent pl-4 text-2xl sm:text-3xl md:text-4xl italic">
          Leveraging AI to move faster, not to skip the fundamental decisions.
        </blockquote>
      </section>
      <section id="projects" className="pt-12 sm:pt-16">
        <div className="flex items-center gap-2">
          <p className="text-ink-light">Projects</p>
          <span className="flex-1 h-px bg-cream-dark"></span>
        </div>
        <h2 className="text-3xl sm:text-4xl pt-8">What I've been building.</h2>
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
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
            <p className="pt-2">I could work on systems other people depend on. There, I could see the gap between university and production environments, and I've spent the months since bridging it.</p>
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
