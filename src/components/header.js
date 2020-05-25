import React from "react";
import { Link } from "gatsby";

export default function Header() {
  return (
    <header className="flex-none">
      <nav className="md:max-w-screen-md h-full md:mx-auto flex justify-between flex-wrap text-lg">
        <span className="flex-1 py-2 px-6 text-center sm:text-left font-bold">
          <Link to="/">zweimach</Link>
        </span>
        <ul className="flex flex-1 justify-between py-2">
          {["blog", "projects", "about"].map((item) => (
            <li key={item} className="px-6">
              <Link to={`/${item}`}>{item}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
