import React from "react";
import { Link } from "gatsby";

export default function Header() {
  return (
    <header className="flex-none mt-4 mb-6 md:my-8 text-base sm:text-xl">
      <nav className="sm:max-w-screen-lg sm:mx-auto flex justify-between">
        <span className="ml-6 font-bold hover:text-gray-600">
          <Link to="/">zweimach</Link>
        </span>
        <ul className="flex">
          {["about", "blog"].map((item) => (
            <li key={item} className="mr-6 hover:text-gray-600">
              <Link to={`/${item}`}>{item}</Link>
            </li>
          ))}
          <li className="mr-6 hover:text-gray-600">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/zweimach"
              title="projects"
            >
              projects
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
