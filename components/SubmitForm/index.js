import Styles from "@styles/SubmitForm.module.css";
import { useState } from "react";

export default function SubmitForm() {
  const [link, setLink] = useState("");
  const [linkValid, setLinkValid] = useState(false);
  const [linkTouched, setLinkTouched] = useState(false);
  const [twitterUser, setTwitterUser] = useState("");
  const [name, setName] = useState("");
  const [word, setWord] = useState("-1");

  function validateLink(value) {
    const match = value.match(/^https:\/\//);
    setLinkValid(match !== null);
  }

  function handleChange(type, value) {
    switch (type) {
      case "bot":
        setCanSubmit(false);
        break;
      case "twitter":
        setTwitterUser(value);
        break;
      case "link":
        setLinkTouched(true);
        setLink(value);
        validateLink(value);
        break;
      case "name":
        setName(value);
        break;
      case "word":
        setWord(value);
        break;
      default:
        return;
    }
  }

  return (
    <>
      <div className={Styles.container}>
        <h1 className={Styles.header}>Submit your article for UNBREAK.TECH</h1>
        <p className={Styles.disclaimer}>
          Submission does not guarantee inclusion on the site. Requests go to real human beings,
          please be kind!
        </p>
        <p className={Styles.disclaimer}>
          If you'd like to be notified when your article goes live, please include your Twitter
          username.
        </p>
        <p className={Styles.disclaimer}>Thank you!</p>
      </div>

      <form
        name="Submit unbreak.tech article"
        method="POST"
        action="/submit/success"
        data-netlify="true"
        className={Styles.submitForm}>
        <input type="hidden" name="form-name" value="Submit unbreak.tech article" />
        <div className={Styles.submitForm__row}>
          <label htmlFor="link" required className={Styles.submitForm__label}>
            Link to article<span className={Styles.submitForm__label__required}>* required</span>
          </label>
          <input
            onChange={(e) => handleChange("link", e.target.value)}
            value={link}
            type="url"
            name="link"
            id="link"
            placeholder="https://"
            className={Styles.submitForm__input}
          />
          {!linkValid && linkTouched && (
            <p className={Styles.submitForm__error}>Please enter a valid URL including https://</p>
          )}
        </div>

        <div className={Styles.submitForm__row}>
          <label htmlFor="name" className={Styles.submitForm__label}>
            Your name
          </label>
          <input
            onChange={(e) => handleChange("name", e.target.value)}
            value={name}
            type="text"
            name="name"
            id="name"
            placeholder="Matty"
            className={Styles.submitForm__input}
          />
        </div>

        <div className={Styles.submitForm__row}>
          <label htmlFor="twitter" className={Styles.submitForm__label}>
            Twitter username
          </label>
          <input
            onChange={(e) => handleChange("twitter", e.target.value)}
            value={twitterUser}
            type="text"
            name="twitter"
            id="twitter"
            placeholder="whitep4nth3r"
            className={Styles.submitForm__input}
          />
        </div>

        <div className={Styles.submitForm__row}>
          <label htmlFor="word" className={Styles.submitForm__label}>
            How did you hear about unbreak.tech?
          </label>
          <select
            value={word}
            name="word"
            id="word"
            className={Styles.submitForm__select}
            onChange={(e) => handleChange("word", e.target.value)}>
            <option value="-1" disabled hidden>
              Optional
            </option>
            <option value="community">Online community</option>
            <option value="facebook">Facebook</option>
            <option value="friend">Friend or colleague</option>
            <option value="linkedin">LinkedIn</option>
            <option value="polywork">Polywork</option>
            <option value="search">Search Engine</option>
            <option value="twitch">Twitch</option>
            <option value="twitter">Twitter</option>
          </select>
        </div>
        <div className={Styles.submitForm__honeypot}>
          <label htmlFor="word">Do not fill this out if you are human</label>
          <input
            name="bot-field"
            type="text"
            onChange={(e) => handleChange("bot", e.target.value)}
          />
        </div>
        <button
          type="submit"
          className={`${Styles.submitForm__button} ${Styles.submitForm__button__full}`}
          disabled={!linkValid}>
          Submit
        </button>
        {!linkValid && linkTouched && (
          <p className={Styles.submitForm__error}>Please correct the form errors above.</p>
        )}
      </form>
    </>
  );
}
