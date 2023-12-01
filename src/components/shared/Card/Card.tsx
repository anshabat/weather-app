import React from "react";
import "./Card.css";

type Props = {
  title: React.ReactNode;
  children: React.ReactNode;
};

const Card = (props: Props) => {
  const { title, children } = props;

  return (
    <article className="card">
      <h2 className="card_title">{title}</h2>
      {children}
    </article>
  );
};

export default Card;
