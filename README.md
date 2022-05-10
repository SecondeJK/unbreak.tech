# Unbreak.tech

[Unbreak.tech](https://unbreak.tech) is a platform for MEN to educate other MEN about the need for change and equality in tech.

More media formats will be supported soon including TikToks, YouTube shorts and more.

---

## Add your article to the site

1. Fork the repository to your GitHub account and clone it to your local machine.

2. Navigate to `src/_data/links` and create a new `[yourIdentifier].json` file.

3. Add your details.

Note: Please choose one media format for each new JSON file. Current media formats supported:

- `url` — a link to an article hosted elsewhere
- `youtubeEmbedUrl` - a link to a video hosted on YouTube

```json
{
  "url": "A link to your article",
  "youtubeEmbedUrl": "please remember to use the embed URL",
  "title": "The title of your article",
  "author": "Your name",
  "excerpt": "An excerpt from your media source. The more horrifying, the better.",
  "githubUsername": "yourGithubUsername — this is optional"
}
```

4. Commit and push your changes, and open up a PR!

---

unbreak.tech is built with love and [Eleventy](https://www.11ty.dev/docs/).
