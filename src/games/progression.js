import utils from '../utils.js';
import playGame from '../engine.js';

const GAME_RULE = 'What number is missing in the progression?';

const hideElementByIndex = (arr, index, symbolToReplace) => {
  const result = [...arr];

  result.splice(index, 1, symbolToReplace);

  return result;
};

const makeProgression = (start, iterator, size) => (
  Array(size)
    .fill(start)
    .map((num, index) => num + (iterator * index))
);

const makeRound = () => {
  const size = 10;
  const startNumber = utils.getRandomNumber(0, 100);
  const iterator = utils.getRandomNumber(2, 100);
  const progression = makeProgression(startNumber, iterator, size);

  const hideElementPosition = utils.getRandomNumber(0, progression.length - 1);

  const question = hideElementByIndex(progression, hideElementPosition, '..').join(' ');
  const correctAnswer = progression[hideElementPosition].toString();

  return [question, correctAnswer];
};

export default () => playGame(GAME_RULE, makeRound);
