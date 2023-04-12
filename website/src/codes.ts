export const demoCode = `
import LinkParser from "react-link-parser";
import { Highlight } from "react-flatifycss";

export function App() {
    const watchers = [
        {
            type: "startsWith",
            watchFor: "#",
            render: (text) => (
                <a 
                    href={"/post?filterByTag=" + text} 
                    target="_blank" 
                    rel="noreferrer noopener nofollow">
                        <Highlight 
                            inline 
                            theme="orange-light" 
                            sx="margin-right: 4px">
                                {text}
                        </Highlight>
                </a>
            ),
        },
        {
            type: "endsWith",
            watchFor: "*",
            render: (text) => (
                <b style={{ color: "var(--flatify__color-red-primary)" }}>{text.replace("*", "")}</b>
            ),
        },
        {
            type: "startsWith",
            watchFor: "@",
            render: (text) => (
                <Highlight 
                    inline 
                    theme="success-light" 
                    sx="margin-right: 4px">
                        {text}
                </Highlight>
            ),
        },
        {
            watchFor: "link",
            render: (url: string) => (
                <a 
                    href={url} 
                    target="_blank" 
                    rel="noreferrer noopener">
                        {url}
                </a>
            ),
        },
        {
            watchFor: "email",
            render: (url: string) => (
                <a 
                    href={"mailto:" + url} 
                    target="_blank" 
                    rel="noreferrer noopener">
                        {url.replace("@", "[at]")}
                </a>
            ),
        },
    ]

    return (
        <LinkParser watchers={watchers}>
            #Far_far_away, behind the word mountains, far from the countries @Vokalia and Consonantia, there live the blind texts. Separated they live in @Bookmarks right at the coast of the Semantics* a large language ocean. A small river named #Duden flows* by their place and supplies it with the necessary #regelialia. \\n Credit: \\n https://www.blindtextgenerator.com/lorem-ipsum \\n Contact Me: happy.cactus@mail.me
        </LinkParser>
    );
}
`;

export const installCode = `
npm install react-link-parser

# or

yarn add react-link-parser`;

export const simpleCode = `
import LinkParser from "react-link-parser";

export function App() {
  return (
    <LinkParser>
      I know you will forgive me for it. Were not my other associations so chosen by Fate as to make a heart like mine uneasy? Read more here: https://lorem.ipsum/book
    </LinkParser>
  );
}
`;

export const customWatcherCode = `
{
    watchFor: 'anything',
    type: "startsWith" | "endsWith",
    render: (text) => ()
}
`;
