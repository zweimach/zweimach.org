import React from "react";
import PropTypes from "prop-types";
import {
  RiTwitterLine,
  RiLinkedinBoxLine,
  RiGithubLine,
  RiGitlabLine,
  RiMailLine,
} from "react-icons/ri";

import styles from "./Footer.module.scss";

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
    <footer className={styles.footer}>
      <div className={styles.container}>
        <ul className={styles.contactList}>
          {contactList.map(({ href, title, icon }) => (
            <ContactBox key={title} href={href} title={title}>
              {icon}
            </ContactBox>
          ))}
        </ul>
        <div className={styles.copyrightText}>
          Copyright &copy; 2020 &nbsp; Ananda Umamil
        </div>
      </div>
    </footer>
  );
}

function ContactBox({ href, title, children }) {
  return (
    <li className={styles.contactItem}>
      <a rel="noopener noreferrer" target="_blank" href={href} title={title}>
        {children}
      </a>
    </li>
  );
}

ContactBox.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
