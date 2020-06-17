import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { FiMail, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

import SEO from "../components/seo";

const contactList = [
  {
    href: "mailto:zweimach@zweimach.org",
    title: "zweimach@zweimach.org",
    icon: <FiMail />,
  },
  {
    href: "https://github.com/zweimach",
    title: "zweimach",
    icon: <FiGithub />,
  },
  {
    href: "https://www.linkedin.com/in/zweimach",
    title: "zweimach",
    icon: <FiLinkedin />,
  },
  {
    href: "https://twitter.com/zweimach",
    title: "@zweimach",
    icon: <FiTwitter />,
  },
];

const experienceList = [
  {
    company: "Direktorat Jenderal Pajak Republik Indonesia",
    date: "Dec 2017 - Feb 2020",
    details: [""],
    position: "Administrative Assistant",
  },
];

const educationList = [
  {
    school: "Politeknik Keuangan Negara STAN",
    date: "2016 - 2017",
    degree: "Associate's degree",
    major: "Taxation",
  },
];

export default function ResumePage() {
  const {
    imageSharp: { fixed: userImage },
  } = useStaticQuery(graphql`
    query {
      imageSharp(fixed: { originalName: { eq: "user.jpg" } }) {
        fixed(width: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  `);

  return (
    <div className="h-full py-6 bg-gray-200 text-lg">
      <SEO title="zweimach's resume" />
      <div className="max-w-screen-lg mx-auto p-6 bg-white">
        <div className="flex mb-2">
          <div className="flex-none w-40 mt-4 ml-4">
            <Img className="rounded-full" fixed={userImage} alt="zweimach" />
          </div>
          <div className="flex-1 p-4">
            <h1 className="font-serif text-4xl leading-tight">Ananda Umamil</h1>
            <h2 className="text-2xl leading-tight">Software Engineer</h2>
            <p className="py-4">
              I have a passion for computer science and mathematics. I used to
              hate math but then fell in love with it because of Haskell and
              functional programming. I build web applications and
              text-processing tools.
            </p>
          </div>
        </div>
        <div className="flex mb-8">
          <div className="flex-none w-40 ml-4 pt-4 border-t-4 border-gray-400">
            Contact
          </div>
          <div className="flex-1 pt-5 px-4">
            <ul className="flex">
              {contactList.map(({ href, title, icon }) => (
                <li key={title} className="mx-3 hover:text-gray-600">
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href={href}
                    className="flex items-center"
                  >
                    {icon} &nbsp; {title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex mb-8">
          <div className="flex-none w-40 ml-4 pt-4 border-t-4 border-gray-400">
            Experience
          </div>
          <div className="flex-1 pt-5 px-4">
            <ul className="">
              {experienceList.map(({ company, position, date, details }) => (
                <li key={company}>
                  <div className="flex justify-between">
                    <div className="font-bold">{company}</div>
                    <div>{date}</div>
                  </div>
                  <div>{position}</div>
                  <div>{details}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex mb-8">
          <div className="flex-none w-40 ml-4 pt-4 border-t-4 border-gray-400">
            Education
          </div>
          <div className="flex-1 pt-5 px-4">
            <ul className="">
              {educationList.map(({ school, degree, date, major }) => (
                <li key={school}>
                  <div className="flex justify-between">
                    <div className="font-bold">{school}</div>
                    <div>{date}</div>
                  </div>
                  <div>
                    {degree} | {major}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex mb-8">
          <div className="flex-none w-40 ml-4 pt-4 border-t-4 border-gray-400">
            Skills
          </div>
          <div className="flex-1 pt-5 px-4 grid grid-cols-4 text-base">
            <ul className="list-disc list-inside">
              <li>Haskell</li>
              <li>Rust</li>
              <li>JavaScript</li>
              <li>PHP</li>
            </ul>
            <ul className="list-disc list-inside">
              <li>HTML &amp; CSS</li>
              <li>Node.js</li>
              <li>React</li>
              <li>Vue</li>
            </ul>
            <ul className="list-disc list-inside">
              <li>Express</li>
              <li>MySQL/PostgreSQL</li>
              <li>Version Control (Git)</li>
              <li>TypeScript/Flow</li>
            </ul>
            <ul className="list-disc list-inside">
              <li>Docker</li>
              <li>Linux</li>
              <li>Elm</li>
              <li>PureScript</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
