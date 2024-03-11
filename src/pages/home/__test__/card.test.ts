
import { render, screen } from '@testing-library/react';
import { cardProps }  from '../components/Card';
import { Character } from '../../../models/character';
import Card from '../components/Card';

// Mock de datos de ejemplo para el personaje
const character: Character = {
  name: 'Example Character',
  status: 'Alive',
  image: 'https://example.com/image.jpg',
  gender:'male',
  id:'1',
  species: 'human',
  type: ''
};

const testCardProps: cardProps = {
  character: character,
  handleFavorite: jest.fn(),
  handleSelected: jest.fn(),
  favoriteProp: false
};

test('renders Card component correctly', () => {

  render(Card(testCardProps) );

  const nameElement = screen.getByText(/Example Character/i);
  const statusElement = screen.getByText(/Alive/i);

  // Asserts
  expect(nameElement)
  expect(statusElement)
});
