import MainLayout from "@layouts/main";
import ArticleList from "@components/ArticleList";
import ContentfulArticles from "@lib/contentful/Articles";
import styles from "@styles/Typography.module.css";
import { NextSeo } from "next-seo";

export default function Home({ articles }) {
  return (
    <>
      <MainLayout>
        <NextSeo
          title="UNBREAK.TECH"
          description="UNBREAK.TECH is a platform for MEN to educate other MEN about the need for change and equality in tech."
        />

        <h1 className={styles.visuallyHidden}>
          UNBREAK.TECH is a platform for MEN to educate other MEN about the need for change and
          equality in tech.
        </h1>

        <ArticleList articles={articles} />
      </MainLayout>
    </>
  );
}

export async function getStaticProps() {
  const articles = await ContentfulArticles.getAll();

  return {
    props: {
      articles,
    },
  };
}
