import React from "react";
import cardImage from "../../assets/spacejoy-YqFz7UMm8qE-unsplash.jpg"

function Card({
  img = "",
  tags = [""],
  header = "",
  description = "",
  link = ""
}) {
  console.log(tags);

  return (
    <div className="card">
      <div className="card-image">
        <img src={cardImage} />
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
        <div className="short-description">{description}</div>
        <a className="read-more-link" href="#">Read more</a>
      </div>
    </div>
  );
}

export default Card;
