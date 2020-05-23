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
    <footer className="flex-none py-2 md:py-5 md:px-4 bg-gray-500 text-center">
      <div className="md:flex md:flex-row-reverse md:items-center md:justify-between max-w-screen-md mx-auto">
        <ul className="text-lg">
          {contactList.map(({ href, title, icon }) => (
            <li key={title} className="inline-block mx-1 w-8">
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
        <span className="text-base">Copyright &copy; 2020</span>
      </div>
    </footer>
  );
}
