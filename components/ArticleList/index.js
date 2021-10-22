import HoverVideoPlayer from "react-hover-video-player";
import {
  Articles,
  Card,
  Title,
  TitleInner,
  Author,
  Excerpt,
  PlayIconContainer,
} from "./index.styles";
import PlayIcon from "./svg/PlayIcon";

export default function ArticleList({ articles }) {
  return (
    <Articles>
      {articles.map((article) => (
        <Card
          isCta={article.isCta ?? false}
          hasVideo={article.video !== null}
          imageUrl={article.image?.url ?? null}
          ariaLabel={`${article.title} by ${article.author}`}
          href={article.url}
          rel="nofollow noopener"
          key={article.sys.id}
          target="_blank">
          {article.video && (
            <HoverVideoPlayer
              videoSrc={article.video.url}
              style={{ position: "absolute" }}
              loop={true}
              volume={0.2}
              muted={false}
              controls
              videoCaptions={[
                {
                  src: article.vttFile.url,
                  srcLang: "en",
                  label: "English",
                  kind: "captions",
                  default: true,
                },
              ]}
              pausedOverlay={
                <PlayIconContainer>
                  <PlayIcon />
                </PlayIconContainer>
              }
            />
          )}

          <Title>
            <TitleInner>{article.title}</TitleInner>
          </Title>
          <Excerpt>{article.excerpt}</Excerpt>

          <Author>{article.author}</Author>
        </Card>
      ))}
    </Articles>
  );
}
