import React from 'react';
import { Row, Col } from 'antd';
import { useGuessState } from '../../context/guessContext';
import Char from '../char/char';

/**
 * @typedef GuessRowProps
 * @property {Number} guessNum
 */

/**
 * @component
 * @param {GuessRowProps} props 
 */
function GuessRow(props) {

  const { guesses } =  useGuessState();

  const getCharProp = (charIdx, prop) => {
    if (!guesses?.length) return null;

    const guess = guesses.find(g => g.guessNum == props.guessNum);
    if (guess == undefined) return null;

    const char = guess.chars[charIdx];
    if (char == undefined) return null;

    return char[prop];
  }

  return (
    <Row justify='space-around'>
      <Col>
        <Char
          isInWord={getCharProp(1, 'isInWord')}
          isCorrectPosition={getCharProp(1, 'isCorrectPosition')}
        >
          {getCharProp(1, 'letter')}
        </Char>
      </Col>
      <Col>
        <Char
          isInWord={getCharProp(2, 'isInWord')}
          isCorrectPosition={getCharProp(2, 'isCorrectPosition')}
        >
          {getCharProp(2, 'letter')}
        </Char>
      </Col>
      <Col>
        <Char
          isInWord={getCharProp(3, 'isInWord')}
          isCorrectPosition={getCharProp(3, 'isCorrectPosition')}
        >
          {getCharProp(3, 'letter')}
        </Char>
      </Col>
      <Col>
        <Char
          isInWord={getCharProp(4, 'isInWord')}
          isCorrectPosition={getCharProp(4, 'isCorrectPosition')}
        >
          {getCharProp(4, 'letter')}
        </Char>
      </Col>
      <Col>
        <Char
          isInWord={getCharProp(5, 'isInWord')}
          isCorrectPosition={getCharProp(5, 'isCorrectPosition')}
        >
          {getCharProp(5, 'letter')}
        </Char>
      </Col>
    </Row>
  )
}

export default GuessRow;