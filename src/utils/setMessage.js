export const setMessage = (content) => {
    const dataMessage = {
        id: (Math.random() + 1).toString(36).substring(12),
        content,
        machine: false
      };

      return dataMessage;
};