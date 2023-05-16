import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  let newLinks = links.map((zelda) => <a href= {`#${zelda}`} key = {zelda}>{zelda}</a>)
  return (<nav>{newLinks}</nav>
  )
}

export default NavBar;
