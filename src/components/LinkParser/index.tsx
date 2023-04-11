import React, { Fragment } from "react";
import getLabelFromChildren from "../../utils/getChildrenLabel";
import isValidUrl from "../../utils/isValidUrl";

interface WatchersProps {
  type?: "startsWith" | "endsWith";
  watchFor: "link" | string;
  render: (children: string) => React.ReactNode;
}

interface LinkParserProps {
  children: React.ReactNode;
  watchers?: WatchersProps[];
}

const defaultWatchers = [
  {
    watchFor: "link",
    render: (url: string) => (
      <a href={url} target="_blank" rel="noreferrer noopener">
        {url}
      </a>
    ),
  },
];

export default function LinkParser({ children, watchers = defaultWatchers }: LinkParserProps) {
  // separate words by space
  const words = getLabelFromChildren(children)?.split(" ");

  return (
    <>
      {words.map((word, index) => {
        const { watchFor, render } =
          watchers?.find(
            ({ type = "startsWith", watchFor }) =>
              (watchFor === "link" && isValidUrl(word)) || (watchFor !== "" && word?.[type](watchFor))
          ) || {};

        const content = index + 1 === words?.length ? ` ${word}` : `${word} `;

        return <Fragment key={`${index}_${word}`}>{watchFor ? render?.(content) ?? content : content}</Fragment>;
      })}
    </>
  );
}
