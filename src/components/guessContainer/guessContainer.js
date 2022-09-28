import React, { Fragment, useEffect } from 'react';
import { useGuessState } from '../../context/guessContext';
import GuessRow from '../guessRow/guessRow';

function GuessContainer() {

  const { activeRow, activeCol } = useGuessState();

  useEffect(() => {
    document.addEventListener('keyup', handleKeypress);

    return (() => {
      document.removeEventListener('keyup');
    });
  }, []);

  const setGuess = (letter) => {
    
  }

  const handleKeypress = (e) => {
    console.log(e);
    if (e.which >= 65 && e.which <= 90) {
      // upper-case letters
      e.preventDefault();
      setGuess()
    } else if (e.which >= 97 && e.which <= 122) {
      // lower-case letters
      e.preventDefault();
      setGuess()
    }
  }

  return (
    <Fragment>
      <GuessRow guessNum={1} />
      <GuessRow guessNum={2} />
      <GuessRow guessNum={3} />
      <GuessRow guessNum={4} />
      <GuessRow guessNum={5} />
      <GuessRow guessNum={6} />
    </Fragment>
  );
}

export default GuessContainer;