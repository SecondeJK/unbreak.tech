import Styles from "@styles/SubmitForm.module.css";
import { Formik } from "formik";

export default function SubmitForm() {
  return (
    <Formik
      initialValues={{ link: "", name: "", word: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.link) {
          errors.link = "Please enter a link to an article";
        } else if (!/^https:\/\//i.test(values.link)) {
          errors.link = "Please use a valid article URL including https://";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}>
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <form
          method="POST"
          data-netlify="true"
          action="/submit/success"
          className={Styles.submitForm}>
          <div className={Styles.submitForm__row}>
            <label htmlFor="link" required className={Styles.submitForm__label}>
              Link to article<span className={Styles.submitForm__label__required}>*</span>
            </label>
            <input
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.link}
              type="url"
              name="link"
              id="link"
              placeholder="https:"
              className={Styles.submitForm__input}
            />
          </div>

          {errors.link && touched.link && <p className={Styles.submitForm__error}>{errors.link}</p>}

          <div className={Styles.submitForm__row}>
            <label htmlFor="name" className={Styles.submitForm__label}>
              Your name
            </label>
            <input
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
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
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.word}
              name="word"
              id="word"
              className={Styles.submitForm__select}>
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
          <button type="submit" className={Styles.submitForm__button} disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  );
}
