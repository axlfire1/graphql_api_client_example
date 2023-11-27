// STYLE SHEETS
import './register_form.css';

// CONTEXTS
import { globalContext, ContextProps, EmptyInput } from '../../contexts/form_context'

// COMPONENTS
import React, { useState } from 'react';
import { createNewEvent } from '../../functions/graphql_requests';
import NumericInputComponent from '../numeric_input_component';
import { GreenSubmitButton } from '../green_submit_button';
import SnackbarComponent from '../event_alert/index';

export const RegisterForm = (): JSX.Element => {
  const [emptyTextField, setEmptyTextField] = useState<EmptyInput>(true);
 
  const myFunction = (param: boolean) => {
    setEmptyTextField(param);
  };

  const contextValue: ContextProps = {
    emptyFieldText: emptyTextField,
    myFunction: myFunction
  };

  // snack bar stuff
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>('');
  const [snackbarColor, setSnackbarColor] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      var number: number = parseInt(
        (document.getElementById('numeric_input') as HTMLInputElement
      ).value);
      
      const response = await createNewEvent(number);

      
      if(response.status == 200){
        setSnackbarColor('success')
        setSnackbarMessage('Submitted successfully');
      }else{
        setSnackbarColor('error')
        setSnackbarMessage('Error response:' + response.status);
      }

    } catch (error) {
      setSnackbarColor('error')
      setSnackbarMessage('Error on Submit');
    }

    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
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

        <SnackbarComponent
          open={snackbarOpen}
          message={snackbarMessage}
          colorMessage={snackbarColor}
          onClose={handleSnackbarClose}
        />
      </div>
    </globalContext.Provider>
  );
};
