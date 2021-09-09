const config = require('./gatsby-config');

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;
  await Promise.all(
    config.siteMetadata.supportedLanguages.map(async lang => {
      const originalPath = page.path;
      const localizedPath = `/${lang}${page.path}`;
      console.log(page, localizedPath);
      await createPage({
        ...page,
        path: localizedPath,
        context: {
          ...page.context,
          originalPath,
          lang,
        }
      });
    })
  );
};