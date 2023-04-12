import React, { Fragment, useMemo } from "react";
import getLabelFromChildren from "../../utils/getChildrenLabel";
import { isValidEmail, isValidUrl } from "../../utils/validation";

interface WatchersProps {
  type?: "startsWith" | "endsWith";
  watchFor: "link" | "email" | string;
  render: (children: string) => React.ReactNode;
}

interface LinkParserProps {
  children: React.ReactNode;
  watchers?: WatchersProps[];
  parseNewLine?: boolean;
  newLineWatcher?: string;
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

export default function LinkParser({
  children,
  parseNewLine = true,
  newLineWatcher = "\\n",
  watchers = defaultWatchers,
}: LinkParserProps) {
  // separate words by space
  const words = useMemo(() => getLabelFromChildren(children)?.split(" "), [children]);

  return (
    <>
      {words.map((word, index) => {
        const key = `${index}_${word}`;
        if (parseNewLine && word === newLineWatcher) return <br key={key} />;

        const { watchFor, render } =
          watchers?.find(
            ({ type = "startsWith", watchFor }) =>
              (watchFor === "email" && isValidEmail(word)) ||
              (watchFor === "link" && isValidUrl(word)) ||
              (watchFor !== "" && word?.[type](watchFor))
          ) || {};

        const content = index + 1 === words?.length ? ` ${word}` : `${word} `;

        return <Fragment key={key}>{watchFor ? render?.(content) ?? content : content}</Fragment>;
      })}
    </>
  );
}
