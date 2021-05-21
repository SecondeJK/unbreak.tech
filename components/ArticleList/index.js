import { Articles } from "@data/articles";
import Styles from "@styles/ArticleList.module.css";

export default function ArticleList() {
  return (
    <section className={Styles.articleList}>
      {Articles.map((article) => (
        <a
          href={article.url}
          rel="nofollow noopener"
          className={Styles.articleList__card}
          key={article.id}
          target="_blank"
        >
          <h3 className={Styles.article__title}>{article.title}</h3>
          <p className={Styles.article__author}>{article.author}</p>
        </a>
      ))}
    </section>
  );
}
