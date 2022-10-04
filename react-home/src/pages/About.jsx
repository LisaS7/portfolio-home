import React from "react";

export default function About() {
  return (
    <>
      <h1>Courses</h1>
      <div className="flex badge-container">
        <div className="flex badge-card">
          <CredlyBadge
            image="aws-cloud-practitioner.png"
            id="502c8754-f1ae-48d0-a2d6-f08e0f49152b"
            date="September 2022"
          ></CredlyBadge>
          <p>
            This exam covers foundational knowledge of AWS key services,
            including deployment and operation, security, compliance, and
            architecture principles.
          </p>
        </div>
        <div className="flex badge-card">
          <CredlyBadge
            image="ibm-data-analyst.png"
            id="8c721b3f-a37d-4220-a2ac-3122c2dd3873"
            date="May 2021"
          ></CredlyBadge>

          <p>
            This course covered the basics of analysing and visualising data
            using Excel, SQL, Python, and IBM's Cognos Analytics.
          </p>
        </div>
      </div>
      <div className="m3">
        <h1>Skills</h1>
        <div className="flex badge-container">
          <Skills />
        </div>
      </div>
    </>
  );
}

function CredlyBadge({ image, id, date }) {
  const url = `https://www.credly.com/badges/${id}/public_url`;
  return (
    <div className="badge">
      <a href={url}>
        <img src={`./badges/${image}`} alt={`${image}`}></img>
      </a>
      <p>{date}</p>
    </div>
  );
}

function SkillGroup({ skills }) {
  return (
    <div className="flex skill-group">
      {skills.map((skill) => {
        return (
          <div className="">
            <p>{skill.name}</p>
            <img
              className="logo"
              src={`./skills/${skill.image}`}
              alt={`${skill.image}`}
            ></img>
          </div>
        );
      })}
    </div>
  );
}

function Skills() {
  const skills = {
    Languages: [
      { image: "python.svg", name: "Python" },
      { image: "javascript.svg", name: "JavaScript" },
    ],
    Frameworks: [
      { image: "nodejs.svg", name: "Node.JS" },
      { image: "flask.svg", name: "Flask" },
      { image: "django.svg", name: "Django" },
    ],
    Database: [
      { image: "mongodb.svg", name: "MongoDB" },
      { image: "sqlite.svg", name: "SQLite" },
      { image: "postgresql.svg", name: "PostgreSQL" },
      { image: "sqlalchemy.svg", name: "SQLAlchemy" },
    ],
    Frontend: [
      { image: "html.svg", name: "HTML" },
      { image: "css.svg", name: "CSS" },
      { image: "react.svg", name: "React" },
    ],
    Other: [
      { image: "git.svg", name: "Git" },
      { image: "linux.svg", name: "Linux" },
      { image: "jira.svg", name: "Jira" },
      { image: "confluence.svg", name: "Confluence" },
      { image: "amazonwebservices.svg", name: "AWS" },
    ],
  };

  return (
    <>
      {Object.keys(skills).map((level) => (
        <div key={level}>
          <p>{level}</p>
          <SkillGroup skills={skills[level]} />
        </div>
      ))}
    </>
  );
}
