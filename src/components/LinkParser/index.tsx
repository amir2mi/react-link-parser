import React, { Fragment, useMemo } from "react";
import getLabelFromChildren from "../../utils/getChildrenLabel";
import { isValidEmail, isValidUrl } from "../../utils/validation";

interface WatchersProps {
  type?: "startsWith" | "endsWith";
  watchFor: "link" | string;
  render: (children: string) => React.ReactNode;
}

interface LinkParserProps {
  children: React.ReactNode;
  watchers?: WatchersProps[];
  parseNewLine?: boolean;
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

export default function LinkParser({ children, parseNewLine = true, watchers = defaultWatchers }: LinkParserProps) {
  // separate words by space
  const words = useMemo(() => getLabelFromChildren(children)?.split(" "), [children]);

  return (
    <>
      {words.map((word, index) => {
        if (parseNewLine && word === "\n") return <br />;

        const { watchFor, render } =
          watchers?.find(
            ({ type = "startsWith", watchFor }) =>
              (watchFor !== "" && word?.[type](watchFor)) ||
              (watchFor === "email" && isValidEmail(word)) ||
              (watchFor === "link" && isValidUrl(word))
          ) || {};

        const content = index + 1 === words?.length ? ` ${word}` : `${word} `;

        return <Fragment key={`${index}_${word}`}>{watchFor ? render?.(content) ?? content : content}</Fragment>;
      })}
    </>
  );
}
