import Styles from "@styles/ArticleList.module.css";
import ExternalLinkSvg from "./ExternalLinkSvg";

export default function ArticleList({ articles }) {
  return (
    <section>
      <h2 className={Styles.sectionHeading}>
        Read {articles.length} articles by men on equality in the tech industry
      </h2>
      <div className={Styles.articleList}>
        {articles.map((article) => (
          <a
            aria-label={`${article.title} by ${article.author}`}
            href={article.url}
            rel="nofollow noopener"
            className={Styles.articleList__card}
            key={article.sys.id}
            target="_blank"
          >
            <h3 className={Styles.article__title}>{article.title}</h3>
            <p className={Styles.article__excerpt}>{article.excerpt}</p>
            <div className={Styles.article__footer}>
              <p className={Styles.article__author}>{article.author}</p>
              <ExternalLinkSvg />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
