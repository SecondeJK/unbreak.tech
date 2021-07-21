import ContentfulArticles from "@lib/contentful/Articles";
import fs from "fs";

export default function buildRss(props) {
  return null;
}

function buildRssItems(articles) {
  return articles
    .map((article) => {
      return `
        <item>
          <title>${article.title}</title>
          <description>${article.excerpt}</description>
          <author>${article.author}</author>
          <link>${article.url}</link>
          <guid>${article.url}</guid>
          <pubDate>${article.publishedDate}</pubDate>
        </item>
        `;
    })
    .join("");
}

export async function getStaticProps() {
  const articles = await ContentfulArticles.getAll();

  const feedString = `<?xml version="1.0"?>
  <rss version="2.0" 
    xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>UNBREAK.TECH</title>
      <link>https://unbreak.tech</link>
      <atom:link 
        href="https://unbreak.tech/feed.xml" 
        rel="self" 
        type="application/rss+xml" />
      <description>UNBREAK.TECH is an evolving platform for MEN to educate other MEN about the need for change and equality in tech. For more information and to get involved, contact @whitep4nth3r on Twitter.</description>

      ${buildRssItems(articles)}

  </channel>
  </rss>`;

  fs.writeFile("./public/feed.xml", feedString, function (err) {
    if (err) {
      console.log("Could not write to feed.xml");
    }

    console.log("feed.xml written to ./public!");
  });

  return {
    props: {
      feedString, // return some data to the page, even if we don't use it
    },
  };
}
