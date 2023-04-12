import { Highlight } from "react-flatifycss";
import LinkParser from "../../src";

function App() {
  return (
    <div className="card">
      <p>
        <LinkParser
          watchers={[
            {
              type: "startsWith",
              watchFor: "#",
              render: (text) => (
                <a href={`/post?filterByTag=${text}`} target="_blank" rel="noreferrer noopener nofollow">
                  <Highlight inline theme="orange-light" sx="margin-right: 4px">
                    {text}
                  </Highlight>
                </a>
              ),
            },
            {
              type: "endsWith",
              watchFor: "*",
              render: (text) => <b style={{ color: "var(--flatify__color-red-primary)" }}>{text.replace("*", "")}</b>,
            },
            {
              type: "startsWith",
              watchFor: "@",
              render: (text) => (
                <Highlight inline theme="success-light" sx="margin-right: 4px">
                  {text}
                </Highlight>
              ),
            },
            {
              watchFor: "link",
              render: (url: string) => (
                <a href={url} target="_blank" rel="noreferrer noopener">
                  {url}
                </a>
              ),
            },
            {
              watchFor: "email",
              render: (url: string) => (
                <a href={`mailto:${url}`} target="_blank" rel="noreferrer noopener">
                  {url.replace("@", "[at]")}
                </a>
              ),
            },
          ]}
        >
          #Far_far_away, behind the word mountains, far from the countries @Vokalia and Consonantia, there live the
          blind texts. Separated they live in @Bookmarks right at the coast of the Semantics* a large language ocean. A
          small river named #Duden flows* by their place and supplies it with the necessary #regelialia. \n Credit: \n
          https://www.blindtextgenerator.com/lorem-ipsum \n Contact Me: happy.cactus@mail.me
        </LinkParser>
      </p>
    </div>
  );
}

export default App;
