import React, { useState, useEffect, useReducer } from 'react';

// image control hook useReducer

function reducerImageControl(state, action) {
  switch (action.type) {
    case 'inital':
      return { status: 'intal' };
    case 'error':
      return { status: 'error', message: action.message };
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

const intial = { status: 'inital' };
function useSetStatus() {
  const [componentStatus, setcomponentStatus] = useReducer(reducerImageControl, intial);

  useEffect(() => {});
  return [componentStatus, setcomponentStatus];
}
export { useSetStatus };
