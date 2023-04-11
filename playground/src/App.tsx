import { Badge } from "react-flatifycss";
import { LinkParser } from "../../src";

function App() {
  return (
    <div className="card">
      <p>
        <LinkParser
          watchers={[
            {
              type: "startsWith",
              watchFor: "#",
              render: (text) => <Badge theme="orange">{text}</Badge>,
            },
            {
              type: "startsWith",
              watchFor: "@",
              render: (text) => <Badge theme="blue">{text}</Badge>,
            },
            {
              watchFor: "link",
              render: (url: string) => (
                <a href={url} target="_blank" rel="noreferrer noopener">
                  {url}
                </a>
              ),
            },
          ]}
        >
          How happy happy.com I am to be gone! Best of #friends what is the heart of man! https://happy.com To forsake
          you, #whom I love so much, from whom I was #inseparable and be happy! I @know you will @forgive me for it.
          Were not my other #associations so chosen by Fate as to make a @heart like mine uneasy?
        </LinkParser>
      </p>
    </div>
  );
}

export default App;
