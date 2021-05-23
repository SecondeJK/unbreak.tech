import ContentfulApi from "@lib/contentful/Api";

export default class ContentfulArticles extends ContentfulApi {
  static async getAll() {
    /* TODO - limit and paginate with image link */
    const query = `{
      articleCollection {
        items {
          sys {
            id
          }
          author
          title
          url
          excerpt
        }
      }
    }`;

    const response = await this.callContentful(query);

    const articles = response.data.articleCollection.items
      ? response.data.articleCollection.items
      : [];

    return articles;
  }
}
