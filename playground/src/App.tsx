import { Highlight } from "react-flatifycss";
import LinkParser from "../../src";
import styled from "styled-components";
import Arrow from "./components/Arrow";
import { CopyBlock, tomorrowNight } from "react-code-blocks";
import { customWatcherCode, demoCode, installCode, simpleCode } from "./codes";

function App() {
  return (
    <main>
      <Header>
        <Container>
          <Title>
            React <br />
            Link <br />
            Parser
          </Title>
          <Subtitle>Effortlessly parse text into links, tags, mentions, emails, etc. </Subtitle>
        </Container>
      </Header>
      <Container>
        <SectionTitle>Give the plain text. Get the content.</SectionTitle>
        <SectionSubtitle>
          Define watchers to pick up special parts of the text and render them the way you want.
        </SectionSubtitle>
        <Compare>
          <div className="card">
            <p>
              #Far_far_away, behind the word mountains, far from the countries @Vokalia and Consonantia, there live the
              blind texts. Separated they live in @Bookmarks right at the coast of the Semantics* a large language
              ocean. A small river named #Duden flows* by their place and supplies it with the necessary #regelialia. \n
              Credit: \n https://www.blindtextgenerator.com/lorem-ipsum \n Contact Me: happy.cactus@mail.me
            </p>
          </div>
          <Arrow />
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
                    render: (text) => (
                      <b style={{ color: "var(--flatify__color-red-primary)" }}>{text.replace("*", "")}</b>
                    ),
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
                #Far_far_away, behind the word mountains, far from the countries @Vokalia and Consonantia, there live
                the blind texts. Separated they live in @Bookmarks right at the coast of the Semantics* a large language
                ocean. A small river named #Duden flows* by their place and supplies it with the necessary #regelialia.
                \n Credit: \n https://www.blindtextgenerator.com/lorem-ipsum \n Contact Me: happy.cactus@mail.me
              </LinkParser>
            </p>
          </div>
        </Compare>
        <CopyBlock text={demoCode} language="jsx" showLineNumbers={false} wrapLines={false} theme={tomorrowNight} />

        <SectionTitle>Install</SectionTitle>
        <SectionSubtitle>Use npm or yarn to install the package</SectionSubtitle>
        <CopyBlock text={installCode} showLineNumbers={false} wrapLines={false} theme={tomorrowNight} />

        <SectionTitle>Start with a simple example</SectionTitle>
        <SectionSubtitle>By default the watcher will highlight links with anchor</SectionSubtitle>
        <CopyBlock text={simpleCode} language="jsx" showLineNumbers={false} wrapLines={false} theme={tomorrowNight} />

        <SectionTitle>Define custom watcher</SectionTitle>
        <SectionSubtitle>With a custom watcher, customize what and how you want to parse and render</SectionSubtitle>
        <CopyBlock
          text={customWatcherCode}
          language="js"
          showLineNumbers={false}
          wrapLines={false}
          theme={tomorrowNight}
        />
        <p>
          The component accepts a list of watchers as an array with the prop named <code>watchers</code>, a watcher
          looks for a string as part of the word to render it with the custom <code>render</code> prop.
        </p>

        <SectionTitle>Github</SectionTitle>
        <SectionSubtitle>
          If you liked the project and it was useful for your case, consider giving it a star in{" "}
          <a href="github.com/amir2mi/react-link-parser/">Github</a>.
        </SectionSubtitle>
      </Container>
    </main>
  );
}

const Title = styled.h1`
  font-weight: 900;
  font-size: 4em !important;
  line-height: 0.85;
  margin: 0;
  color: var(--flatify__color-accent-primary);
`;

const SectionTitle = styled.h3`
  font-weight: bold;
  font-size: 2.4em !important;
  margin: 1em 0 0;
  color: var(--flatify__color-accent-primary);
`;

const SectionSubtitle = styled.p`
  line-height: 1.3;
  font-size: 1.36em !important;
  padding: 1em 0 1em;
  margin: 0;
`;

const Subtitle = styled.p`
  line-height: 1.3;
  font-size: 1.36em !important;
  margin-top: 0.5em;
  color: var(--flatify__txt-color-inverted);
  opacity: 0.6;
`;

const Header = styled.header`
  padding: 2em 2em;
  margin-bottom: 1em;
  background-color: var(--flatify__color-dark-dark);

  @media (max-width: 768px) {
    padding: 2em 0;
  }
`;

const Container = styled.div`
  max-width: 860px;
  padding: 1em;
  margin: 0 auto;
`;

const Compare = styled.div`
  display: flex;
  align-items: stretch;
  gap: 1em;
  margin: 1em 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    .arrow-icon {
      position: relative;
      z-index: 10;
      transform: rotate(45deg) scale(0.5);
    }
  }
`;

export default App;
