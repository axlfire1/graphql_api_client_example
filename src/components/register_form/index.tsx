// STYLE SHEETS
import './register_form.css';

// COMPONENTS
import React, { useState } from 'react';
import NumericInputComponent from '../numeric_input_component';
import { GreenSubmitButton } from '../green_submit_button';
import { handleSubmit } from '../../functions/handle_submit';

import { globalContext, ContextProps, EmptyInput } from '../../contexts/form_context'

export const RegisterForm = (): JSX.Element => {
  const [emptyTextField, setEmptyTextField] = useState<EmptyInput>(true);
 
  const myFunction = (param: boolean) => {
    setEmptyTextField(param);
  };

  const contextValue: ContextProps = {
    emptyFieldText: emptyTextField,
    myFunction: myFunction
  };

  return (
    <globalContext.Provider value={contextValue}>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-100">
              <NumericInputComponent />
            </div>
          </div>
          <div className="row">
            <div className="col-100">
              <GreenSubmitButton />
            </div>
          </div>
        </form>
      </div>
    </globalContext.Provider>
  );
};
