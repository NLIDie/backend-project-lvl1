// Helpers
import getRandomNumber from '../helpers/getRandomNumber.js';

const OperatorEnum = {
  ADD: '+',
  SUBTRACT: '-',
  MULTIPLY: '*',
};

const OPERATORS = [
  OperatorEnum.ADD,
  OperatorEnum.SUBTRACT,
  OperatorEnum.MULTIPLY,
];

const QUESTION_MIN_NUMBER = 0;
const QUESTION_MAX_NUMBER = 100;

const getRandomOperator = () => {
  const randomIndex = getRandomNumber(0, OPERATORS.length - 1);

  return OPERATORS[randomIndex];
};

const calc = (num1, num2, operator) => {
  switch (operator) {
    case OperatorEnum.ADD: {
      return num1 + num2;
    }

    case OperatorEnum.SUBTRACT: {
      return num1 - num2;
    }

    case OperatorEnum.MULTIPLY: {
      return num1 * num2;
    }

    default: {
      throw new Error(`Operator "${operator}" does not exist.`);
    }
  }
};

const getCorrectAnswer = (question) => {
  const [leftOperand, operator, rightOperand] = question.split(' ');

  return calc(
    Number(leftOperand),
    Number(rightOperand),
    operator,
  ).toString();
};

const makeQuestion = () => {
  const leftOperand = getRandomNumber(QUESTION_MIN_NUMBER, QUESTION_MAX_NUMBER);
  const rightOperand = getRandomNumber(QUESTION_MIN_NUMBER, QUESTION_MAX_NUMBER);
  const operator = getRandomOperator();

  return `${leftOperand} ${operator} ${rightOperand}`;
};

const makeBrainCalcGame = (countRound) => {
  const description = 'What is the result of the expression?';
  const questions = Array(countRound).fill(null).map(makeQuestion);

  return {
    description,
    questions,
    getCorrectAnswer,
  };
};

export default makeBrainCalcGame;
