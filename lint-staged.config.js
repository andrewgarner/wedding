const micromatch = require("micromatch");
const prettier = require("prettier");

const addQuotes = (a) => `"${a}"`;

const prettierSupportedExtensions = prettier
  .getSupportInfo()
  .languages.map(({ extensions }) => extensions)
  .flat();

module.exports = (allStagedFiles) => {
  const eslintFiles = micromatch(allStagedFiles, ["{**/*,*}.{js,jsx}"], {
    dot: true,
  });

  const prettierFiles = micromatch(
    allStagedFiles,
    prettierSupportedExtensions.map((extension) => `**/*${extension}`),
    { dot: true }
  );

  const linters = [];

  if (eslintFiles.length > 0) {
    linters.push(`eslint --fix ${eslintFiles.join(" ")}`);
  }

  if (prettierFiles.length > 0) {
    linters.push(`prettier --write ${prettierFiles.map(addQuotes).join(" ")}`);
  }

  return linters;
};
