import MainLayout from "@layouts/main";
import SubmitFormSuccess from "@components/SubmitFormSuccess";
import ContentWrapper from "@components/ContentWrapper";
import { NextSeo } from "next-seo";

export default function Success() {
  return (
    <>
      <MainLayout>
        <NextSeo
          title="Thank you for your submission | UNBREAK.TECH"
          description="Thank you for your submission to UNBREAK.TECH — a platform for MEN to educate other MEN about the need for change and equality in tech."
        />

        <ContentWrapper>
          <SubmitFormSuccess />
        </ContentWrapper>
      </MainLayout>
    </>
  );
}
