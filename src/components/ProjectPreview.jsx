import { ArrowDownRight, ArrowUpRight, Check, FileText } from "lucide-react";

function CorpCartPreview() {
  return (
    <div className="store-preview" aria-hidden="true">
      <div className="store-topline">
        <span>CC / GOODS FOR THE EVERYDAY</span>
        <span>SEARCH&nbsp;&nbsp; BAG (02)</span>
      </div>
      <div className="store-content">
        <div className="store-copy">
          <span className="preview-kicker">A BETTER KIND OF COMPANY STORE</span>
          <strong>Good things,<br />made to go.</strong>
          <span className="preview-link">SHOP THE COLLECTION <ArrowUpRight size={13} /></span>
        </div>
        <div className="product-stack">
          <div className="product product-one"><span>01</span><i /></div>
          <div className="product product-two"><span>02</span><i /></div>
          <div className="product product-three"><span>03</span><i /></div>
        </div>
      </div>
      <div className="store-bottom"><span>THOUGHTFULLY SELECTED</span><span>SCROLL TO DISCOVER ↓</span></div>
    </div>
  );
}

function ResumeIQPreview() {
  return (
    <div className="resume-preview" aria-hidden="true">
      <div className="resume-heading"><span>RESUMEIQ</span><span className="preview-pill">AI REVIEW <span>●</span></span></div>
      <div className="resume-panels">
        <div className="resume-paper">
          <div className="resume-avatar">S</div>
          <b>YOUR EXPERIENCE</b>
          <i className="resume-line line-long" /><i className="resume-line" />
          <i className="resume-line line-short" />
          <b>SKILLS</b>
          <div className="resume-chips"><i /><i /><i /></div>
          <i className="resume-line line-long" /><i className="resume-line line-short" />
        </div>
        <div className="resume-report">
          <span className="preview-kicker">ROLE ALIGNMENT</span>
          <strong>Make your next move count.</strong>
          <div className="match-meter"><i /><i /><i /><i /><i /></div>
          <span className="report-caption">RÉSUMÉ ↔ JOB DESCRIPTION</span>
          <div className="report-note"><Check size={12} /> Experience to review</div>
          <div className="report-note muted-note"><ArrowDownRight size={12} /> Suggestions to explore</div>
        </div>
      </div>
    </div>
  );
}

function RepoMindPreview() {
  return (
    <div className="repo-preview" aria-hidden="true">
      <div className="repo-topbar"><span className="repo-dot" /><span>REPOMIND / REPOSITORY INSPECTOR</span><span>● CONNECTED</span></div>
      <div className="repo-body">
        <div className="repo-sidebar"><span>EXPLORER</span><i>⌄&nbsp; src</i><i>　⌁&nbsp; app.js</i><i>　⌁&nbsp; routes</i><i>⌄&nbsp; services</i><i>　⌁&nbsp; github.js</i><i>　⌁&nbsp; README.md</i></div>
        <div className="repo-code"><span className="code-line"><b>01</b> <em>const</em> repository = <strong>await</strong> inspect(url);</span><span className="code-line"><b>02</b> </span><span className="code-line"><b>03</b> <em>if</em> (repository.imported) {'{'}</span><span className="code-line"><b>04</b>　 <strong>return</strong> process(repository);</span><span className="code-line"><b>05</b> {'}'}</span><span className="code-cursor" /></div>
      </div>
      <div className="repo-footer"><FileText size={13} /> Repository processing / early build <span>IN PROGRESS</span></div>
    </div>
  );
}

export default function ProjectPreview({ project }) {
  const Preview = {
    corpcart: CorpCartPreview,
    resumeiq: ResumeIQPreview,
    repomind: RepoMindPreview,
  }[project.visual];

  return (
    <div className={`project-art project-art--${project.visual}`}>
      <span className="art-label">{project.previewLabel}</span>
      <Preview />
      <span className="art-index">S / {project.number}</span>
    </div>
  );
}
