import { faker } from '@faker-js/faker';

const MINIMUM_CATEGORY_COUNT = 4;
const MINIMUM_POST_COUNT = 25;

async function seedCategories() {
  for (let i = 0; i < MINIMUM_CATEGORY_COUNT; i++) {
    await strapi.db.query('api::category.category').create({
      data: {
        name: faker.commerce.department().toLowerCase()
      }
    });
  }

  console.log('Categories seeded successfully.');
}

export const generateBlogContent = () => {
  // Generate the text content
  const paragraphs = faker.lorem.paragraphs(15);
  const content = paragraphs.split('\n').join('\n\n');

  // Define a function to insert code snippets
  const insertCodeSnippet = (text: string, code: string) => {
    const lines = text.split('\n');
    const insertIndex = Math.floor(Math.random() * lines.length);
    lines.splice(insertIndex, 0, code);
    return lines.join('\n');
  };

  // Only code, without formatting for Markdown syntax
  const codeToInsert = `
  async bootstrap(/*{ strapi }*/) {
  const isProduction = process.env.NODE_ENV === 'production';

  if (isProduction) {
    return;
  }

  // Check if the database has already been seeded
  const postsCount = await strapi.db.query('api::post.post').count();
  const categoriesCount = await strapi.db.query('api::category.category').count();

  if (categoriesCount < MINIMUM_CATEGORY_COUNT) {
    await seedCategories();
  }

  if (postsCount < MINIMUM_POST_COUNT) {
    await seedPosts();
  }
}
`;

  // Insert code and format it for Markdown syntax
  const codeSnippet = '```tsx:index.ts' + codeToInsert + '```';

  return insertCodeSnippet(content, codeSnippet);
};

async function seedPosts() {
  const categories = await strapi.db.query('api::category.category').findMany();

  for (let i = 0; i < MINIMUM_POST_COUNT; i++) {
    const category = faker.helpers.arrayElement(categories);

    await strapi.db.query('api::post.post').create({
      data: {
        title: faker.lorem.sentence({ max: 5, min: 3 }),
        isFeatured: faker.datatype.boolean(),
        content: generateBlogContent(),
        categories: [category.id],
      }
    });
  }

  console.log('Posts seeded successfully.');
}

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap(/*{ strapi }*/) {
    const isProduction = process.env.NODE_ENV === 'production';

    if (isProduction) {
      return;
    }

    // Check if the database has already been seeded
    const postsCount = await strapi.db.query('api::post.post').count();
    const categoriesCount = await strapi.db.query('api::category.category').count();

    if (categoriesCount < MINIMUM_CATEGORY_COUNT) {
      await seedCategories();
    }

    if (postsCount < MINIMUM_POST_COUNT) {
      await seedPosts();
    }
  }
};
