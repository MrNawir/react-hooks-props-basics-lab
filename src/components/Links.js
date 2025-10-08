import React from "react";

function Links({ github, linkedin }) {
  return (
    <div id="links">
      <h3>Links</h3>
      {github ? (
        <a href={github}>{github}</a>
      ) : null}
      {linkedin ? (
        <a href={linkedin}>{linkedin}</a>
      ) : null}
    </div>
  );
}

export default Links;
