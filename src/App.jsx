import { useState } from "react";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  Copy,
  Github,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import portrait from "../profile_picture.jpg";
import resume from "../Soumya_Ankireddypalli_resume.pdf";
import CustomCursor from "./components/CustomCursor.jsx";
import ProjectPreview from "./components/ProjectPreview.jsx";
import Reveal from "./components/Reveal.jsx";
import { journey, principles, skills } from "./data/content.js";
import { projects } from "./data/projects.js";

const EMAIL = "sunsowmya24@gmail.com";
const GITHUB = "https://github.com/soumya738";
const AVAILABILITY = "OPEN TO FRONTEND OPPORTUNITIES";

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    ["Work", "#work"],
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Contact", "#contact"],
  ];

  return (
    <header className="site-header">
      <nav className="nav wrap" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Soumya Ankireddy Palli, home">
          <span className="brand-mark">SA</span>
          <span>Soumya Ankireddy Palli</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <div
          className={`nav-links${menuOpen ? " is-open" : ""}`}
          id="primary-navigation"
        >
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>
            Let’s talk <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  const reduceMotion = useReducedMotion();
  const entrance = {
    hidden: { opacity: 0, y: 22 },
    show: { opacity: 1, y: 0 },
  };
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.11,
      },
    },
  };

  return (
    <section className="hero wrap" id="top" aria-labelledby="hero-title">
      <motion.div
        className="hero-copy"
        variants={container}
        initial={reduceMotion ? false : "hidden"}
        animate="show"
      >
        <motion.p className="availability mono" variants={entrance}>
          <span className="availability-dot" />
          {AVAILABILITY}
        </motion.p>
        <motion.p className="hero-location mono" variants={entrance}>
          FRONTEND DEVELOPER <span>·</span> BENGALURU, INDIA
        </motion.p>
        <motion.h1 id="hero-title" variants={entrance}>
          I turn complex ideas into <em>thoughtful</em> web experiences.
        </motion.h1>
        <motion.p className="hero-description" variants={entrance}>
          I’m Soumya — an aspiring frontend developer with an enterprise IT
          background, building responsive React applications and practical
          AI-powered products.
        </motion.p>
        <motion.div className="hero-actions" variants={entrance}>
          <a className="button button-dark" href="#work">
            Explore my work <ArrowDown size={16} aria-hidden="true" />
          </a>
          <a className="button button-outline" href="#contact">
            Get in touch <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <a className="resume-link" href={resume} target="_blank" rel="noreferrer">
            View résumé <ArrowUpRight size={13} aria-hidden="true" />
          </a>
        </motion.div>
        <motion.div className="hero-footnote mono" variants={entrance}>
          <span>REACT · JAVASCRIPT · UI THAT FEELS RIGHT</span>
          <span>SCROLL TO EXPLORE ↓</span>
        </motion.div>
      </motion.div>
      <motion.div
        className="hero-art"
        initial={reduceMotion ? false : { opacity: 0, y: 22, rotate: 1 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.8, delay: reduceMotion ? 0 : 0.25 }}
        aria-label="Portrait and abstract interface composition"
      >
        <div className="hero-grid" />
        <div className="hero-note mono">A LITTLE DESIGN / A LOT OF INTENTION</div>
        <div className="hero-window">
          <div className="window-bar">
            <span /><span /><span />
            <div className="window-address">soumya / portfolio</div>
          </div>
          <div className="portrait-frame">
            <img src={portrait} alt="Portrait of Soumya Ankireddy Palli" />
            <div className="portrait-caption">
              <span className="mono">DESIGN MEETS SYSTEMS</span>
              <strong>Curious by nature.<br />Thoughtful by design.</strong>
            </div>
          </div>
        </div>
        <div className="hero-sticker mono">MADE<br />WITH CARE <span>✳</span></div>
        <div className="hero-index mono">FIG. 01 — THE MAKER</div>
      </motion.div>
    </section>
  );
}

function Marquee() {
  const phrases = ["Make it useful", "Make it clear", "Make it thoughtful"];
  return (
    <div className="marquee" aria-label="Make it useful, make it clear, make it thoughtful">
      <div className="marquee-track" aria-hidden="true">
        {[...phrases, ...phrases].map((phrase, index) => (
          <span key={`${phrase}-${index}`}>{phrase}<i>✳</i></span>
        ))}
      </div>
    </div>
  );
}

function SectionHeading({ id, label, title, note }) {
  return (
    <div className="section-heading">
      <div>
        <p className="section-label mono">{label}</p>
        <h2 id={id}>{title}</h2>
      </div>
      {note && <p className="section-note">{note}</p>}
    </div>
  );
}

function CaseStudy({ project }) {
  const entries = [
    ["Overview", project.caseStudy.overview],
    ["Problem", project.caseStudy.problem],
    ["My approach", project.caseStudy.approach],
    ["Technical decisions", project.caseStudy.decisions],
    ["Challenges", project.caseStudy.challenges],
    ["Outcome", project.caseStudy.outcome],
  ];

  return (
    <details className="case-study">
      <summary>
        <span>Explore the project notes</span>
        <ArrowDownRight size={17} aria-hidden="true" />
      </summary>
      <div className="case-study-grid">
        {entries.map(([label, copy]) => (
          <div className="case-study-item" key={label}>
            <h4>{label}</h4>
            <p>{copy}</p>
          </div>
        ))}
      </div>
    </details>
  );
}

function ProjectCard({ project }) {
  return (
    <Reveal className={`project-card project-card--${project.visual}`}>
      <div className="project-visual" data-cursor="check">
        <ProjectPreview project={project} />
      </div>
      <div className="project-content">
        <div className="project-meta mono">
          <span>{project.number} / {project.kind}</span>
          <span className={project.visual === "repomind" ? "project-status status-progress" : "project-status"}>
            {project.status}
          </span>
        </div>
        <h3>{project.name}<span className="project-title-dot">.</span></h3>
        <p className="project-description">{project.description}</p>
        <ul className="project-tags" aria-label={`${project.name} technologies`}>
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
        <div className="project-links">
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer">
              Live demo <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          )}
          {project.repository && (
            <a href={project.repository} target="_blank" rel="noreferrer">
              <Github size={14} aria-hidden="true" /> Source code <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          )}
        </div>
        <CaseStudy project={project} />
      </div>
    </Reveal>
  );
}

function Projects() {
  return (
    <section className="section work-section wrap" id="work" aria-labelledby="work-title">
      <Reveal>
        <SectionHeading
          id="work-title"
          label="01 / Selected work"
          title={<>Ideas, made<br />into useful things.</>}
          note="A few projects that bring together responsive interfaces, practical product thinking, and the details in between."
        />
      </Reveal>
      <div className="project-list">
        {projects.map((project) => <ProjectCard key={project.number} project={project} />)}
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section className="journey-section" id="journey" aria-labelledby="journey-title">
      <div className="wrap">
        <Reveal>
          <div className="journey-intro">
            <p className="section-label mono">02 / The path here</p>
            <h2 id="journey-title">From enterprise systems to <em>interactive</em> experiences.</h2>
            <p>A practical problem-solving foundation, now pointed toward the web.</p>
          </div>
        </Reveal>
        <div className="journey-track">
          {journey.map((stage, index) => (
            <Reveal className="journey-stage" delay={index * 0.08} key={stage.number}>
              <span className="journey-number mono">{stage.number}</span>
              <span className="journey-marker" aria-hidden="true" />
              <p className="journey-label mono">{stage.label}</p>
              <h3>{stage.title}</h3>
              <p className="journey-copy">{stage.copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section skills-section wrap" id="skills" aria-labelledby="skills-title">
      <Reveal>
        <SectionHeading
          id="skills-title"
          label="03 / The toolkit"
          title={<>A growing set<br />of useful tools.</>}
          note="Technologies and foundations I’ve used while learning, building, and working through real problems."
        />
      </Reveal>
      <div className="skills-grid">
        {skills.map((group) => (
          <Reveal className="skill-group" key={group.number}>
            <div className="skill-heading">
              <span className="mono">{group.number}</span>
              <h3>{group.title}</h3>
            </div>
            <ul>{group.items.map((skill) => <li key={skill}>{skill}</li>)}</ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <div className="wrap about-layout">
        <Reveal className="about-heading">
          <p className="section-label mono">04 / A little about me</p>
          <h2 id="about-title">Good work starts with <em>good questions.</em></h2>
          <span className="about-mark mono">BENGALURU, IN <span>↘</span></span>
        </Reveal>
        <Reveal className="about-copy" delay={0.12}>
          <p>
            I enjoy turning ideas into interfaces that feel intuitive, useful,
            and carefully considered. My background in enterprise IT taught me
            to approach problems methodically; my frontend projects give me a
            space to combine that mindset with creativity, design, and modern
            web technologies.
          </p>
          <p>
            I’m now looking for an opportunity to contribute, learn from
            experienced engineers, and grow as a frontend developer.
          </p>
          <ul className="principles">
            {principles.map((principle) => <li key={principle}><span>✳</span>{principle}</li>)}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  const [copyState, setCopyState] = useState("idle");

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopyState("copied");
    } catch {
      setCopyState("failed");
    }
  }

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="wrap contact-layout">
        <Reveal className="contact-main">
          <p className="section-label mono">05 / Start a conversation</p>
          <h2 id="contact-title">Have a good problem to solve? <em>Let’s talk.</em></h2>
          <p className="contact-note">Open to frontend opportunities and thoughtful conversations about building for the web.</p>
        </Reveal>
        <Reveal className="contact-side" delay={0.12}>
          <a className="contact-email" href={`mailto:${EMAIL}`}>
            <span><Mail size={17} aria-hidden="true" /> {EMAIL}</span>
            <ArrowUpRight size={19} aria-hidden="true" />
          </a>
          <button className="copy-button" type="button" onClick={copyEmail}>
            {copyState === "copied" ? <Check size={15} /> : <Copy size={15} />}
            {copyState === "copied" ? "Email copied" : "Copy email"}
          </button>
          <p className={`copy-status${copyState === "failed" ? " is-error" : ""}`} role="status" aria-live="polite">
            {copyState === "failed" ? "Couldn’t copy automatically — please use the email link." : ""}
          </p>
          <a className="contact-social" href={GITHUB} target="_blank" rel="noreferrer">
            <Github size={16} aria-hidden="true" /> GitHub <ArrowRight size={15} aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-content">
        <span>© {new Date().getFullYear()} Soumya Ankireddy Palli</span>
        <span>Designed with intention. Built with React.</span>
        <a href="#top" aria-label="Back to top"><ArrowUpRight size={15} /> BACK TO TOP</a>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <CustomCursor />
      <Navigation />
      <main>
        <Hero />
        <Marquee />
        <Projects />
        <Journey />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
