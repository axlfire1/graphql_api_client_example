import './numeric_input_component.css';
import React, { ChangeEvent, useState } from 'react';
import { useContext } from 'react';
import { globalContext, EmptyInput } from '../../contexts/form_context'

const NumericInputComponent: React.FC = () => {
  const enabled = useContext(globalContext);

  if (!enabled) {
    throw new Error('Global context not provided');
  }
  
  const [numericValue, setNumericValue] = useState<number | ''>('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputText = event.target.value;
    if (/^\d*$/.test(inputText)) { // Check if the input is a valid number
      setNumericValue(inputText === '' ? '' : parseInt(inputText, 10));

      // change the state in global context
      if(inputText){
        enabled.myFunction(false);
      }else {
        enabled.myFunction(true);
      }
    }
  };

  return (
    <input
      className="numeric_input"
      type="text"
      id='numeric_input'
      value={numericValue === '' ? '' : numericValue.toString()}
      onChange={handleInputChange}
      placeholder="Ingresar Número"
    />
  );
};

export default NumericInputComponent;
