import React from "react";
interface WatchersProps {
    type?: "startsWith" | "endsWith";
    watchFor: "link" | string;
    render: (children: string) => React.ReactNode;
}
interface LinkParserProps {
    children: React.ReactNode;
    watchers?: WatchersProps[];
}
export default function LinkParser({ children, watchers }: LinkParserProps): JSX.Element;
export {};
