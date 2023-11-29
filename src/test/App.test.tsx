import { render, screen } from '@testing-library/react';
import Home from '../pages/home';

test('renders learn react link', () => {
  render(<Home />);
  const btnSubmit = screen.getByText(/Registrar/i);
  expect(btnSubmit).toBeInTheDocument();
  expect(btnSubmit).toBeDisabled
});

test('input textfield is empty', () => {
  const result = render(<Home />);
  const element = result.container.querySelector('#numeric_input');
  expect(element?.textContent).toEqual('');
});
