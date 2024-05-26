import React from "react";
import {ReactComponent as VectorIcon} from "../../assets/Vector.svg";

function Card({
  img = "",
  tags = [""],
  header = "",
  description = ""
}) {
  console.log(tags);

  return (
    <div className="card">
      <div className="card-image-container">
        <img src={img} alt="card" className="raw-image" loading="lazy"/>
      </div>
      <div className="card-content">
        <div className="tags">
          {tags.map(tag => {
            return (
              <div className="tag" key={tag}>
                {tag}
              </div>
            );
          })}
        </div>
        <h1 className="header">{header}</h1>
        <p className="short-description">{description}</p>
        <button className="read-more-link" disabled={false}>
          Read more
          <VectorIcon className="read-more-icon" aria-hidden="true"/>
        </button> 
      </div>
    </div>
  );
}

export default Card;
