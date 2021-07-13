import React, { } from "react";
function OnHover({inSpanish,url}:{inSpanish:any,url:string}) {
  return (
    <div className="onHover flex">
      <a
        href={url} className="btn mx-auto fs-4 py-2 px-4"
        target="_blank"
        rel="noreferrer"
      >
        {inSpanish ? "Ver Más" : "See More"}
      </a>
    </div>
  )
}
export default OnHover
