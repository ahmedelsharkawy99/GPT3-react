import React from "react";

import classes from "./article.module.css";
const Article = ({ imgUrl, title, date }) => {
  return (
    <article className={classes["gpt3__blog-container_article"]}>
      <div className={classes["gpt3__blog-container_article-image"]}>
        <img src={imgUrl} alt={title} />
      </div>
      <div className={classes["gpt3__blog-container_article-content"]}>
        <div>
          <small>{date}</small>
          <h3>{title}</h3>
        </div>
        <small>Read Full Article</small>
      </div>
    </article>
  );
};

export default Article;
