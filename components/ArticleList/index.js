import Styles from "@styles/ArticleList.module.css";
import ExternalLinkSvg from "./ExternalLinkSvg";
import Image from "next/image";
import { formatPublishedDateForDateTime, formatPublishedDateForDisplay } from "@utils/Date";

export default function ArticleList({ articles }) {
  return (
    <section>
      <h1 className={Styles.sectionHeading}>
        Read {articles.length} articles by men on equality in the tech industry
      </h1>
      <div className={Styles.articleList}>
        {articles.map((article) => (
          <a
            aria-label={`${article.title} by ${article.author}`}
            href={article.url}
            rel="nofollow noopener"
            className={Styles.articleList__card}
            key={article.sys.id}
            target="_blank">
            {article.image && (
              <div className={Styles.articleList__cardImageContainer}>
                <Image
                  src={article.image.url}
                  height={article.image.height}
                  width={article.image.width}
                  alt={article.image.description}
                  layout="responsive"
                />
              </div>
            )}
            <div className={Styles.articleList__cardInner}>
              <time
                className={Styles.article__publishedDate}
                dateTime={formatPublishedDateForDateTime(article.publishedDate)}>
                {formatPublishedDateForDisplay(article.publishedDate)}
              </time>
              <h2 className={Styles.article__title}>{article.title}</h2>
              <p className={Styles.article__excerpt}>{article.excerpt}</p>

              <div className={Styles.article__footer}>
                <p className={Styles.article__author}>{article.author}</p>
                <ExternalLinkSvg />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
