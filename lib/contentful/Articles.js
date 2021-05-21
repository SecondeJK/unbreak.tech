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
        }
      }
    }`;

    const response = await this.callContentful(query);
    console.log(response);

    const articles = response.data.articleCollection.items
      ? response.data.articleCollection.items
      : [];

    return articles;
  }
}
