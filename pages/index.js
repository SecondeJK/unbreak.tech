import MainLayout from "@layouts/main";
import Head from "next/head";
import Mission from "@components/Mission";
import ContentWrapper from "@components/ContentWrapper";
import ArticleList from "@components/ArticleList";
import ContentfulArticles from "@lib/contentful/Articles";
import LogoBanner from "@components/LogoBanner";

export default function Home({ articles }) {
  return (
    <>
      <MainLayout>
        <Head>
          <title>UNBREAK.TECH</title>
          <meta
            name="description"
            content="UNBREAK.TECH — a platform for MEN to educate other MEN about the need for change and equality in tech."
          />
          {/* <link rel="icon" href="/favicon.ico" /> */}

          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link
            href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Head>

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
