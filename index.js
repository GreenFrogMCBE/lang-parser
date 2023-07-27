const parseJson = (langString) => {
  const lines = langString.trim().split('\n');
  const resultObject = {};

  lines.forEach((line) => {
    const match = line.match(/^\s*"?(.*?)"?\s*:\s*"?(.*?)"?\s*,?\s*$/);
    if (match) {
      const key = match[1].trim();
      const value = match[2].trim().replace(/%s/g, '%s'); // Escape % symbol

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

module.exports = parseJson, parseRaw;
