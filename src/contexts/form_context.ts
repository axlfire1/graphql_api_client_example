import React from 'react'

//TYPES AND INTERFACES
export type EmptyInput = true | false;
export interface ContextProps {
  emptyFieldText: EmptyInput;
  myFunction: (flag: boolean) => void;
}

// CONTEXT
export const globalContext = React.createContext<ContextProps | undefined>(undefined);
