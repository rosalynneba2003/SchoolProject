const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const randomNumber = getRandomNumber(1, 10);
console.log(randomNumber);
