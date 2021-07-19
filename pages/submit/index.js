import MainLayout from "@layouts/main";
import SubmitForm from "@components/SubmitForm";
import ContentWrapper from "@components/ContentWrapper";
import { DefaultSeo } from "next-seo";

export default function Submit() {
  return (
    <>
      <MainLayout>
        <DefaultSeo
          title="Submit your article | UNBREAK.TECH"
          description="Submit your article to UNBREAK.TECH — a platform for MEN to educate other MEN about the need for change and equality in tech."
        />

        <ContentWrapper>
          <SubmitForm />
        </ContentWrapper>
      </MainLayout>
    </>
  );
}
