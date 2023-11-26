import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  render(<App />);
  const btnSubmit = screen.getByText(/Registrar/i);
  expect(btnSubmit).toBeInTheDocument();
  expect(btnSubmit).toBeDisabled
});

test('input textfield is empty', () => {
  const result = render(<App />);
  const element = result.container.querySelector('#numeric_input');
  expect(element?.textContent).toEqual('');
});
