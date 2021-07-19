import ContentfulApi from "@lib/contentful/Api";

function sortByFeatured(a, b) {
  if (a.featured === true && b.featured !== true) {
    return -1;
  }

  if (a.featured !== true && b.featured === true) {
    return 1;
  }

  if (a.featured === true && b.featured === true) {
    return 0;
  }
}

export default class ContentfulArticles extends ContentfulApi {
  static async getFeatured() {
    /* TODO - limit and paginate with image link */
    const query = `{
      articleCollection(order: publishedDate_DESC, where: { featured: true }) {
        total
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
          featured
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

    const sortedArticles = articles.sort(sortByFeatured);

    return sortedArticles;
  }
}
