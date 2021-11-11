import { render, screen } from '@testing-library/react';
import App from './App';

test('Deve conter um botão para cadastrar', () => {
  render(<App />);
  const buttonCadastrar = screen.getByRole("button", { name: /Cadastrar novo contato/i });

  expect(buttonCadastrar).toBeInTheDocument();
});
