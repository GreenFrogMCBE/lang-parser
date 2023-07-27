/**
 * Parses the `langString` and returns a JSON object
 * 
 * @param {string} langString - The input string to parse
 * @returns {any} The parsed JSON object
 */
const parseJson = (langString) => {
  const lines = langString.trim().split('\n');
  const resultObject = {};

  lines.forEach((line) => {
    const match = line.match(/^\s*([^=]+)\s*=\s*(.*)\s*$/);
    if (match) {
      const key = match[1].trim();
      const value = match[2].trim();

      const keys = key.split('.');
      let nestedObject = resultObject;

      for (let i = 0; i < keys.length; i++) {
        const currentKey = keys[i];
        if (i === keys.length - 1) {
          nestedObject[currentKey] = value;
        } else {
          nestedObject[currentKey] = nestedObject[currentKey] || {};
          nestedObject = nestedObject[currentKey];
        }
      }
    }
  });

  if (Object.keys(resultObject).length === 0) {
    throw new Error("Lang file is corrupted or empty");
  }

  return resultObject;
};

/**
 * Parses the raw content and returns a translations object
 * 
 * @param {string} content - The content to parse
 * @returns {Object.<string, string>} The translations object
 */
const parseRaw = (content) => {
  const translations = {};

  const lines = content.split('\n');

  for (const line of lines) {
    const trimmedLine = line.trim();
    if (!trimmedLine || trimmedLine.startsWith('#')) {
      continue; // Ignore comments
    }

    const [key, value] = trimmedLine.split('=');
    const trimmedKey = key.trim();
    const trimmedValue = value.trim();

    translations[trimmedKey] = trimmedValue;
  }

  return translations;
}

/**
 * Returns the value for the specified key from the JSON object
 * 
 * @param {string} key - The key to retrieve
 * @param {any} jsonObject - The JSON object to get the retrieve from
 * @returns {string}
 */
const getKey = (key, jsonObject) => {
  if (key.includes(".")) {
    const keys = key.split(".");
    let value = jsonObject;
    for (const k of keys) {
      if (!value.hasOwnProperty(k)) {
        return jsonObject[key];
      }
      value = value[k];
    }
    return value;
  }
};

module.exports = {
  parseJson,
  parseRaw,
  getKey,
};
