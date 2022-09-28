import React, { useEffect, useState, Children } from 'react';
import './char.css';

/**
 * @typedef CharProps
 * @property {Boolean} isInWord
 * @property {Boolean} isCorrectPosition
 * @property {Children} children
 */

/**
 * @component
 * @param {CharProps} props 
 */
function Char(props) {

  const [charClass, setCharClass] = useState('char-container char-letter');

  useEffect(() => {
    if (props.letter) {
      if (props.isCorrectPosition) {
        setCharClass('char-container char-letter char-present');
      } else if (props.isInWord) {
        setCharClass('char-container char-letter char-present');
      } else {
        setCharClass('char-container char-letter char-incorrect');
      }
    }
  }, [props.isInWord, props.isCorrectPosition])

  return (
    <div className={charClass}>
      {props.children}
    </div>
  );
}

export default Char;