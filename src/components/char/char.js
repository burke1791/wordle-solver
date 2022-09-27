import React, { useEffect, useState } from 'react';
import './char.css';

/**
 * @typedef CharProps
 * @property {Boolean} isInWord
 * @property {Boolean} isCorrectPosition
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
  }, [...props])

  return (
    <div className={charClass}>
      {props.children}
    </div>
  );
}

export default Char;