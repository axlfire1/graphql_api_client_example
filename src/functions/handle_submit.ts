import { createNewEvent } from '../functions/graphql_requests';

export const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  var number: number = parseInt(
      (document.getElementById('numeric_input') as HTMLInputElement
    ).value);
  createNewEvent(number);
};
