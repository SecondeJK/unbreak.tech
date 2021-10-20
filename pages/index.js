import MainLayout from "@layouts/main";
import Mission from "@components/Mission";
import ContentWrapper from "@components/ContentWrapper";
import ArticleList from "@components/ArticleList";
import ContentfulArticles from "@lib/contentful/Articles";
import LogoBanner from "@components/LogoBanner";
import Styles from "@styles/Typography.module.css";
import { NextSeo } from "next-seo";

export default function Home({ articles }) {
  return (
    <>
      <MainLayout>
        <NextSeo
          title="UNBREAK.TECH"
          description="UNBREAK.TECH — a platform for MEN to educate other MEN about the need for change and equality in tech."
        />

        {/* <LogoBanner /> */}

        {/* <Mission /> */}

        {/* <h2 className={Styles.sectionHeading}>
            Read {articles.length} articles by men on equality in the tech industry
          </h2> */}
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
