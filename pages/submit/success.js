import MainLayout from "@layouts/main";
import SubmitFormSuccess from "@components/SubmitFormSuccess";
import ContentWrapper from "@components/ContentWrapper";
import ArticleList from "@components/ArticleList";
import ContentfulArticles from "@lib/contentful/Articles";
import Styles from "@styles/Typography.module.css";
import { NextSeo } from "next-seo";

export default function Success({ featuredArticles }) {
  return (
    <>
      <MainLayout>
        <NextSeo
          title="Thank you for your submission | UNBREAK.TECH"
          description="Thank you for your submission to UNBREAK.TECH — a platform for MEN to educate other MEN about the need for change and equality in tech."
        />

        <ContentWrapper>
          <SubmitFormSuccess />
          <h2 className={Styles.sectionHeading}>Read featured articles</h2>
          <ArticleList articles={featuredArticles} />
        </ContentWrapper>
      </MainLayout>
    </>
  );
}

export async function getStaticProps() {
  const featuredArticles = await ContentfulArticles.getFeatured();

  return {
    props: {
      featuredArticles,
    },
  };
}
