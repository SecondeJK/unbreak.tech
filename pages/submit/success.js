import MainLayout from "@layouts/main";
import Head from "next/head";
import SubmitForm from "@components/SubmitForm";
import ContentWrapper from "@components/ContentWrapper";

//TODO - add this to noindex

export default function Success() {
  return (
    <>
      <MainLayout>
        <Head>
          <title>Thank you for your submission | UNBREAK.TECH</title>
          <meta
            name="description"
            content="Thank you for your submission to UNBREAK.TECH — a platform for MEN to educate other MEN about the need for change and equality in tech."
          />

          <meta name="monetization" content="$ilp.uphold.com/J7y7wkRezRYL" />

          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link
            href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;700&display=swap"
            rel="stylesheet"
          />

          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />

          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="theme-color" content="#000000" />
        </Head>

        <ContentWrapper>SUBMIT SUCCESS</ContentWrapper>
      </MainLayout>
    </>
  );
}
