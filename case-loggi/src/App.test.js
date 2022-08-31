import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Dice from './components/dice';

test('Verificar renderização do título', () => {
  render(<Dice />);
  const titleElement = screen.getByText("Sorteie o Dado");
  expect(titleElement).toBeInTheDocument();
});

test('Testar botão', () => {
  render(<Dice />);
  const buttonElement = screen.getByText("Sortear");
  fireEvent(buttonElement, new MouseEvent("click", {}));
  const modal = screen.queryByText("Clicou!");
  expect(modal).not.toBeInTheDocument();
});

test('Verificar renderização inicial do dado', () => {
  render(<Dice />);
  const diceElement = screen.getByAltText("Imagem inicial do dado com valor 0");
  expect(diceElement).toBeInTheDocument();
});

/* test('Verificar renderização do dado de valor 1', () => {
  render(<Dice />);
  const buttonElement = screen.getByText("Sortear")
  userEvent.click(buttonElement);
  const diceElement = screen.getByAltText("Imagem do dado com valor 1");
  expect(diceElement).toBeInTheDocument();
});

test('Verificar renderização do dado de valor 2', () => {
  render(<Dice />);
  const buttonElement = screen.getByText("Sortear")
  userEvent.click(buttonElement);
  const diceElement = screen.getByAltText("Imagem do dado com valor 2");
  expect(diceElement).toBeInTheDocument();
});

test('Verificar renderização do dado de valor 3', () => {
  render(<Dice />);
  const buttonElement = screen.getByText("Sortear")
  userEvent.click(buttonElement);
  const diceElement = screen.getByAltText("Imagem do dado com valor 3");
  expect(diceElement).toBeInTheDocument();
});

test('Verificar renderização do dado de valor 4', () => {
  render(<Dice />);
  const buttonElement = screen.getByText("Sortear")
  userEvent.click(buttonElement);
  const diceElement = screen.getByAltText("Imagem do dado com valor 4");
  expect(diceElement).toBeInTheDocument();
});

test('Verificar renderização do dado de valor 5', () => {
  render(<Dice />);
  const buttonElement = screen.getByText("Sortear")
  userEvent.click(buttonElement);
  const diceElement = screen.getByAltText("Imagem do dado com valor 5");
  expect(diceElement).toBeInTheDocument();
});

test('Verificar renderização do dado de valor 6', () => {
  render(<Dice />);
  const buttonElement = screen.getByText("Sortear")
  userEvent.click(buttonElement);
  const diceElement = screen.getByAltText("Imagem do dado com valor 6");
  expect(diceElement).toBeInTheDocument();
}); */