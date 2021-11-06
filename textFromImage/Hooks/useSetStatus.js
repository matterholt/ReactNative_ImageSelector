import React, { useState, useEffect, useReducer } from 'react';

// image control hook useReducer
const initalView = 'inital';
function reducerImageControl(state, action) {
  switch (action.type) {
    case 'inital':
      return { status: 'intal' };
    case 'error':
      return { status: 'error' };
    case 'showResults':
      return { status: 'showResults' };
    case 'notFound':
      return { status: 'notFound' };
    case 'loading':
      return { status: 'loading' };
    default:
      throw new Error();
  }
}

function useSetStatus(actionType) {
  const [componentStatus, setcomponentStatus] = useReducer(reducerImageControl, initalView);

  useEffect(() => {});
  return [componentStatus, setcomponentStatus];
}
export { useSetStatus };
