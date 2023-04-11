# React Link Parser

This packages contains a React component that can parse plain text into links, emails or render elements that **start** or **end** with specific character or word the way you want.

## Install it

Install the `react-link-parser` package with npm or yarn:

```bash
npm install react-link-parser
```

```bash
yarn add react-link-parser
```

## Get started

Let's start using the component with a couple of practical examples.

### A simple example

As a common use case, let's say you want to identify links in your text and render them with your custom render component. This is the default behavior of the component, so all you need to do is import the package and start using it in your React application.

```jsx
import LinkParser from "react-link-parser";

export function App() {
  return (
    <LinkParser>
      I know you will forgive me for it. Were not my other associations so chosen by Fate as to make a heart like mine
      uneasy? Read more here: https://lorem.ipsum/book
    </LinkParser>
  );
}
```

### Parse tags, mentions and more

In cases where you want to customize how certain words or characters are rendered, you can define a list of watchers that specify which words or characters to target and which function to use for rendering. With this functionality, you can easily create a more personalized parser.

```jsx
import LinkParser from "react-link-parser";

export function App() {
  // a list of watchers
  const watchers = [
    {
      type: "startsWith",
      watchFor: "#",
      render: (tag) => <b>{tag}</b>,
    },
    {
      type: "startsWith",
      watchFor: "@",
      render: (mention) => <i>{mention}</i>,
    },
    {
      type: "endsWith",
      watchFor: "*",
      render: (text) => <span style={{ color: "red" }}>{text}</span>,
    },
    {
      watchFor: "link",
      render: (url) => (
        <a href={url} target="_blank" rel="noreferrer noopener nofollow">
          {url}
        </a>
      ),
    },
  ];

  return (
    <LinkParser watchers={watchers}>
      #Far_far_away, behind the word mountains, far from the countries @Vokalia and @Consonantia, there live the blind
      texts. Separated they live in @Bookmarksgrove right at the coast of the Semantics*, a large language ocean. A
      small river named Duden flows by their place and supplies it with the necessary regelialia. \n Credit: \n
      https://www.blindtextgenerator.com/lorem-ipsum \n Contact Me: mail@mail.me
    </LinkParser>
  );
}
```
