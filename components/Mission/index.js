// NOT IN USE

import Styles from "@styles/Mission.module.css";
import Twitter from "@components/Mission/svg/Twitter";

export default function Mission() {
  const text = encodeURIComponent(
    "#unbreaktech is an evolving platform for MEN to educate other MEN about the need for change and equality in tech.\n\n",
  );
  const href = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    `https://unbreak.tech/`,
  )}&text=${text}`;

  return (
    <div className={Styles.mission}>
      <h1 className={Styles.mission__text}>
        <span className={Styles.mission__text__bold}>UNBREAK.TECH</span> is an evolving platform for
        MEN to educate other MEN about the need for change and equality in tech. For more
        information and to get involved, contact{" "}
        <a
          className={Styles.mission__link}
          href="https://twitter.com/whitep4nth3r/status/1395304339229581312"
          target="_blank"
          rel="nofollow noopener">
          @whitep4nth3r.
        </a>
      </h1>
      <a className={Styles.mission__button} href={href} target="_blank">
        <span className={Styles.mission__buttonIcon}>
          <Twitter />
        </span>
        Share on Twitter
      </a>
    </div>
  );
}
