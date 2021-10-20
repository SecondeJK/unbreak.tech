import { Articles, Card, Title, TitleInner, Author } from "./index.styles";

export default function ArticleList({ articles }) {
  return (
    <Articles>
      {articles.map((article) => (
        <Card
          cta={article.cta ?? false}
          imageUrl={article.image?.url ?? null}
          ariaLabel={`${article.title} by ${article.author}`}
          href={article.url}
          rel="nofollow noopener"
          key={article.sys.id}
          target="_blank">
          <Title>
            <TitleInner>{article.title}</TitleInner>
          </Title>
          {/* <p className={Styles.article__excerpt}>{article.excerpt}</p> */}

          <Author>{article.author}</Author>
        </Card>
      ))}
    </Articles>
  );
}
