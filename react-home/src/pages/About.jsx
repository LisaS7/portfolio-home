import React from "react";
import { CardContainer } from "../containers/CardContainer";
import { CourseCard, CourseBadge, CredlyBadge } from "../components/Course";
import { SkillsContainer } from "../components/Skills";
import { Skills } from "../components/Skills";

export default function About() {
  return (
    <>
      <h1>Courses</h1>
      <CardContainer className="py6">
        <CourseCard>
          <CourseBadge
            image="codeclan.png"
            url="https://codeclan.com/courses/professional-software-development/"
            date="January - May 2023"
          ></CourseBadge>
          <p>
            CodeClan's 16-week Professional Software Development bootcamp,
            covering Python, JavaScript, React, Java, Agile, TDD, OOP.
          </p>
        </CourseCard>
        <CourseCard>
          <CredlyBadge
            image="aws-cloud-practitioner.png"
            id="502c8754-f1ae-48d0-a2d6-f08e0f49152b"
            date="September 2022"
          />
          <p>
            This exam covers foundational knowledge of AWS key services,
            including deployment and operation, security, compliance, and
            architecture principles.
          </p>
        </CourseCard>
        <CourseCard>
          <CredlyBadge
            image="ibm-data-analyst.png"
            id="8c721b3f-a37d-4220-a2ac-3122c2dd3873"
            date="May 2021"
          />

          <p>
            This course covered the basics of analysing and visualising data
            using Excel, SQL, Python, and IBM's Cognos Analytics.
          </p>
        </CourseCard>
      </CardContainer>
      <div>
        <h1>Skills</h1>
        <SkillsContainer className="py6">
          <Skills />
        </SkillsContainer>
      </div>
    </>
  );
}
