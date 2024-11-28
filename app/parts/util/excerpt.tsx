const excerptCharacters = (text: string, maxLength = 100) => {
    if (text.length <= maxLength) {
        return text;
    }
    return text.slice(0, maxLength) + '...';
};


const excerptWords = (text: string, maxWords = 20) => {
    const words = text.split(' ');
    if (words.length <= maxWords) {
        return text;
    }
    return words.slice(0, maxWords).join(' ') + '...'; 
};
export {excerptCharacters, excerptWords};