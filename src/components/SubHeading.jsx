import React from "react";
import "../styles/SubHeading.css";
export default function SubHeading({
  HeadingVariant,
  HeadingText,
  ParagraphText,
}) {
  return (
    <>
      {HeadingVariant ? (
        <HeadingVariant>{HeadingText}</HeadingVariant>
      ) : (
        <h2>{HeadingText}</h2>
      )}
      <p>{ParagraphText}</p>
    </>
  );
}
