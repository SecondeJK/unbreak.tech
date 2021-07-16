import Styles from "@styles/SubmitForm.module.css";

export default function SubmitFormSuccess() {
  return (
    <>
      <div className={Styles.container}>
        <h1 className={Styles.header}>Thank you for your submission to UNBREAK.TECH</h1>

        <p className={Styles.disclaimer}>
          If you have included your Twitter username with your submission, you'll be notified when
          your article goes live on the site.
        </p>
        <p className={Styles.disclaimer}>Thank you!</p>
      </div>
    </>
  );
}
