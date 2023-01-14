import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linksList = links.map((link, index) =>
  {
    const href = `#${link}`;

    return <a key={index} href={href} >{link}</a>
  });

  return <nav>{/* display an <a> tag for each link here */}
    {/* <a href="#home">home</a> */}
    {linksList}
  </nav>;
}

export default NavBar;
