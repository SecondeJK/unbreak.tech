import Styles from "@styles/ArticleList.module.css";

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
          <p className={Styles.article__author}>{article.author}</p>
        </a>
      ))}
    </section>
  );
}
