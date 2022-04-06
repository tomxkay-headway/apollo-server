const generateRandomString = () => {
  const generateRandomChars = (length = 3) => {
    const startIndex = 2;
    return Math.random()
      .toString(32)
      .substring(startIndex, startIndex + length);
  };

  var random_string = generateRandomChars(3) + generateRandomChars(3);

  return random_string;
};

module.exports = generateRandomString;
