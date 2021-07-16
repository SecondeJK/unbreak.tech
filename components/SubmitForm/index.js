import Styles from "@styles/SubmitForm.module.css";
import { useState } from "react";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export default function SubmitForm() {
  const [link, setLink] = useState("");
  const [name, setName] = useState("");
  const [word, setWord] = useState("");

  function handleChange(type, value) {
    console.log("handling change");
    switch (type) {
      case "link":
        setLink(value);
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
    <form
      name="Submit unbreak.tech article"
      method="POST"
      action="/submit/success"
      data-netlify="true"
      className={Styles.submitForm}>
      <input type="hidden" name="form-name" value="Submit unbreak.tech article" />
      <div className={Styles.submitForm__row}>
        <label htmlFor="link" required className={Styles.submitForm__label}>
          Link to article<span className={Styles.submitForm__label__required}>*</span>
        </label>
        <input
          onChange={(e) => handleChange("link", e.target.value)}
          type="url"
          name="link"
          id="link"
          placeholder="https:"
          className={Styles.submitForm__input}
        />
      </div>

      <div className={Styles.submitForm__row}>
        <label htmlFor="name" className={Styles.submitForm__label}>
          Your name
        </label>
        <input
          onChange={(e) => handleChange("name", e.target.value)}
          type="text"
          name="name"
          id="name"
          placeholder="Matty"
          className={Styles.submitForm__input}
        />
      </div>
      <div className={Styles.submitForm__row}>
        <label htmlFor="word" className={Styles.submitForm__label}>
          How did you hear about unbreak.tech?
        </label>
        <select
          name="word"
          id="word"
          className={Styles.submitForm__select}
          onChange={(e) => handleChange("word", e.target.value)}>
          <option value="-1" disabled>
            Please choose
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
        <input name="bot-field" type="text" />
      </div>
      <button type="submit" className={Styles.submitForm__button}>
        Submit
      </button>
    </form>
  );
}
