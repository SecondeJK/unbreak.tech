import ContentfulApi from "@lib/contentful/Api";

export default class ContentfulArticles extends ContentfulApi {
  static async getAll() {
    /* TODO - limit and paginate with image link */
    const query = `{
      articleCollection(order: publishedDate_DESC) {
        items {
          sys {
            id
          }
          author
          publishedDate
          excerpt
          title
          url
          image {
            sys {
              id
            }
            url
            height
            width
            description
          }
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
