export const validateMessageCode = (text) => {
    const tripleQuoteRegex = /^"""([\s\S]*)"""$/;
    const match = text?.trim().match(tripleQuoteRegex);
    
    if (match) {
      return {
        content: match[1].trim(),
        hasTripleQuotes: true
      };
    }
    
    return {
      content: text,
      hasTripleQuotes: false
    };
  };