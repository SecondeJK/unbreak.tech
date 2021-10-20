import ContentfulApi from "@lib/contentful/Api";

const defaultOptions = { featured: false };

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
  /*
   * Get the total number of articles
   */
  static async getTotal() {
    const query = `
        {
          articleCollection {
            total
          }
        }
      `;

    const response = await this.callContentful(query);
    const totalArticles = response.data.articleCollection.total
      ? response.data.articleCollection.total
      : 0;

    return totalArticles;
  }

  /**
   * Get articles in batches of pages
   * @param {*} page number
   * @param {*} options = defaultOptions
   * @returns {total: number, articles: []}
   */
  static async getPaginated(page, options = defaultOptions) {
    const queryLimit = 15;
    const skipMultiplier = page === 1 ? 0 : page - 1;
    const skip = skipMultiplier > 0 ? queryLimit * skipMultiplier : 0;
    const { featured } = options;
    const featuredQuery = featured ? `, where: {featured: true}` : "";

    const query = `{
      articleCollection(limit: ${queryLimit}, skip: ${skip}, order: publishedDate_DESC${featuredQuery}) {
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
          cta
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
    const { total } = response.data.articleCollection;
    const articles = response.data.articleCollection.items
      ? response.data.articleCollection.items
      : [];

    return { total, articles };
  }

  /**
   * Get all articles with options
   * @param {*} options = defaultOptions
   * @returns []
   */
  static async getAll(options = defaultOptions) {
    let page = 1;
    let shouldQueryMoreArticles = true;
    const returnArticles = [];

    while (shouldQueryMoreArticles) {
      const response = await this.getPaginated(page, options);

      if (response.articles.length > 0) {
        returnArticles.push(...response.articles);
      }

      shouldQueryMoreArticles = returnArticles.length < response.total;
      page++;
    }

    const sortedArticles = returnArticles.sort(sortByFeatured);

    return sortedArticles;
  }
}
