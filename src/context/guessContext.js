import React, { createContext, useContext, useReducer } from 'react';
import { getLocalStorage } from '../utilities/localStorage';
import ContextSkeleton from './template';

const guessContext = new ContextSkeleton({ name: 'guessContext', storageEnabled: true });

const StateContext = createContext();
const DispatchContext = createContext();

function GuessProvider({ children }) {
  const initialState = getLocalStorage('guessContext', JSON.parse) || {};
  const [state, dispatch] = useReducer(guessContext.contextReducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

function useGuessState() {
  const context = useContext(StateContext);
  if (context === undefined) {
    throw new Error('useGuessState must be used within a GuessProvider');
  }
  return context;
}

function useGuessDispatch() {
  const context = useContext(DispatchContext);
  if (context === undefined) {
    throw new Error('useGuessDispatch must be used within a GuessProvider');
  }
  return context;
}

export { GuessProvider, useGuessState, useGuessDispatch };