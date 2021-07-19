import MainLayout from "@layouts/main";
import Mission from "@components/Mission";
import ContentWrapper from "@components/ContentWrapper";
import ArticleList from "@components/ArticleList";
import ContentfulArticles from "@lib/contentful/Articles";
import LogoBanner from "@components/LogoBanner";
import { NextSeo } from "next-seo";

export default function Home({ articles }) {
  return (
    <>
      <MainLayout>
        <NextSeo
          title="UNBREAK.TECH"
          description="UNBREAK.TECH — a platform for MEN to educate other MEN about the need for change and equality in tech."
        />

        <LogoBanner />

        <ContentWrapper>
          <Mission />
          <ArticleList articles={articles} />
        </ContentWrapper>
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
