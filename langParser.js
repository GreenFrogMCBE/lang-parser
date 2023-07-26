/**
 * Parses a .lang file to a JSON object
 * 
 * @param {any} langString 
 */
const parse = (langString) => {
  const lines = langString.trim().split('\n');
  const resultObject = {};

  lines.forEach((line) => {
    const match = line.match(/^\s*"?(.*?)"?\s*:\s*"?(.*?)"?\s*,?\s*$/);
    if (match) {
      const key = match[1].trim();
      const value = match[2].trim().replace(/%s/g, '%s'); // Escape % symbol
      const keys = key.split('.');
      let nestedObject = resultObject;

      keys.forEach((currentKey, index) => {
        if (!nestedObject[currentKey]) {
          nestedObject[currentKey] = index === keys.length - 1 ? value : {};
        }
        if (index === keys.length - 1) {
          nestedObject[currentKey] = value;
        }
        nestedObject = nestedObject[currentKey];
      });
    }
  });

  if (Object.keys(resultObject).length === 0) {
    throw new Error("Lang file is corrupted or empty");
  }

  return resultObject;
};

module.exports = parseLangFile;
