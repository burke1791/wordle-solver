import React, { Fragment, useEffect } from 'react';
import { useGuessState } from '../../context/guessContext';
import GuessRow from '../guessRow/guessRow';

function GuessContainer() {

  const { activeRow } = useGuessState();

  useEffect(() => {
    document.addEventListener('keydown', handleKeypress);

    return (() => {
      document.removeEventListener('keydown');
    });
  }, []);

  const handleKeypress = (e) => {
    if (e.which >= 65 && e.which <= 90) {
      e.preventDefault();

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