import React from "react";
import {
  RiTwitterLine,
  RiLinkedinBoxLine,
  RiGithubLine,
  RiGitlabLine,
  RiMailLine,
} from "react-icons/ri";

const contactList = [
  {
    href: "https://github.com/zweimach",
    title: "GitHub",
    icon: <RiGithubLine />,
  },
  {
    href: "https://gitlab.com/zweimach",
    title: "GitLab",
    icon: <RiGitlabLine />,
  },
  {
    href: "https://www.linkedin.com/in/zweimach",
    title: "LinkedIn",
    icon: <RiLinkedinBoxLine />,
  },
  {
    href: "https://twitter.com/zweimach",
    title: "Twitter",
    icon: <RiTwitterLine />,
  },
  {
    href: "mailto:zweimach@zweimach.org",
    title: "Email",
    icon: <RiMailLine />,
  },
];

export default function Footer() {
  return (
    <footer className="flex-none text-center">
      <div className="sm:max-w-screen-lg sm:mx-auto my-2 sm:my-5 md:my-8 sm:flex sm:flex-row-reverse sm:items-center sm:justify-between">
        <ul className="sm:mr-6 flex justify-center text-lg">
          {contactList.map(({ href, title, icon }) => (
            <li key={title} className="mx-3 hover:text-gray-600">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={href}
                title={title}
              >
                {icon}
              </a>
            </li>
          ))}
        </ul>
        <span className="sm:ml-6 text-sm sm:text-base">
          Copyright &copy; 2020
        </span>
      </div>
    </footer>
  );
}
