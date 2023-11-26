// Importing CSS
import './green_submit_button.css';
import { useContext } from 'react';
import { globalContext } from '../../contexts/form_context'

const GreenSubmitButton = (): JSX.Element => {
  const enabled = useContext(globalContext);

  if (!enabled) {
    throw new Error('Global context not provided');
  }

  return (
    <input
      disabled={enabled.emptyFieldText}
      id="greenButton"
      type="submit"
      value="Registrar"
      className='submitButton'
    />
  );
};

export { GreenSubmitButton };
