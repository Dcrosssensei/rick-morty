import { render, fireEvent, screen } from '@testing-library/react';
import ButtonsGender from '../components/ButtonsGender';
import { stateFilter } from '../components/Slide';

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: jest.fn(),
  }));
  
const mockOnGender =(state:stateFilter)=> {state};

describe('ButtonsGender component', () => {
  test('renders ButtonsGender component correctly', () => {
    render(ButtonsGender({onGender: ()=>{}}) );
    
    // Verificamos que los botones estén presentes
    expect(screen.getByText(/female/i)).toBeTruthy();
    expect(screen.getByText(/male/i)).toBeTruthy();
    expect(screen.getByText(/genderless/i)).toBeTruthy();
    expect(screen.getByText(/unknown/i)).toBeTruthy();
  });

  test('calls onGender handler correctly when clicking buttons', () => {
    render(ButtonsGender({onGender: ()=>{}}) );

    // Simulamos hacer clic en los botones
    fireEvent.click(screen.getByText(/female/i));
    fireEvent.click(screen.getByText(/male/i));
    fireEvent.click(screen.getByText(/genderless/i));
    fireEvent.click(screen.getByText(/unknown/i));

    // Verificamos que la función onGender haya sido llamada con los argumentos correctos
    expect(mockOnGender).toHaveBeenCalledTimes(4);
    expect(mockOnGender).toHaveBeenCalledWith({ status: 'Female', origin: 'gender' });
    expect(mockOnGender).toHaveBeenCalledWith({ status: 'Male', origin: 'gender' });
    expect(mockOnGender).toHaveBeenCalledWith({ status: 'Genderless', origin: 'gender' });
    expect(mockOnGender).toHaveBeenCalledWith({ status: 'Unknown', origin: 'gender' });
  });
});