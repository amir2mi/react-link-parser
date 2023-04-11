import React from "react";

export default function getLabelFromChildren(children: React.ReactNode) {
  let label = "";

  React.Children.map(children, (child) => {
    if (typeof child === "string") {
      label += child;
    }
  });

  return label;
}
