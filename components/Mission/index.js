import Styles from "@styles/Mission.module.css";

export default function Mission() {
  return (
    <>
      <h1 className={Styles.mission__text}>
        UNBREAK.TECH — a platform for MEN to educate other MEN about the need for change and
        equality in tech.
      </h1>
      <h2 className={Styles.mission__text}>
        This is a prototype for a new future, built live on Twitch on Friday 21st May 2021. For more
        information and to get involved, contact{" "}
        <a
          className={Styles.mission__link}
          href="https://twitter.com/whitep4nth3r/status/1395304339229581312"
          target="_blank"
          rel="nofollow noopener"
        >
          @whitep4nth3r.
        </a>
      </h2>
    </>
  );
}
