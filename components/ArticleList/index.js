import Styles from "@styles/ArticleList.module.css";
import ExternalLinkSvg from "./ExternalLinkSvg";

export default function ArticleList({ articles }) {
  return (
    <section className={Styles.articleList}>
      {articles.map((article) => (
        <a
          href={article.url}
          rel="nofollow noopener"
          className={Styles.articleList__card}
          key={article.sys.id}
          target="_blank"
        >
          <h3 className={Styles.article__title}>{article.title}</h3>
          <div className={Styles.article__footer}>
            <p className={Styles.article__author}>{article.author}</p>
            <ExternalLinkSvg />
          </div>
        </a>
      ))}
    </section>
  );
}
