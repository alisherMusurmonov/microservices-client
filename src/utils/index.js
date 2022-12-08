export const styleTag = (text = '') => {
  const isEnglish = text.startsWith('<english>');
  const plainText = text.replace(/<english>|<german>/gi, '')
  const englishTag = `<span class="english-tag">&lt;english&gt;</span>`
  const germanTag = `<span class="german-tag">&lt;german&gt;</span>`
  const tags = {
    english: `${englishTag}${plainText}${englishTag}`,
    german: `${germanTag}${plainText}${germanTag}`
  };

  return isEnglish ? tags.english : tags.german;
}