import { render, fireEvent, screen } from '@testing-library/react';
import ButtonsGender from '../components/ButtonsGender';
import { stateFilter } from '../components/Slide';
import React from 'react';

const mockOnGender =(state:stateFilter)=> {state};

describe('ButtonsGender component', () => {
  test('renders ButtonsGender component correctly', () => {
    render(ButtonsGender({onGender: ()=>{}}) );
    React.useState = jest.fn().mockReturnValue(['', {}])
    // Verificamos que los botones estén presentes
    expect(screen.getByText(/female/i)).toBeTruthy();
    expect(screen.getByText(/male/i)).toBeTruthy();
    expect(screen.getByText(/genderless/i)).toBeTruthy();
    expect(screen.getByText(/unknown/i)).toBeTruthy();
  });

  test('calls onGender handler correctly when clicking buttons', () => {
    render(ButtonsGender({onGender: ()=>{}}) );

    fireEvent.click(screen.getByText(/female/i));
    fireEvent.click(screen.getByText(/male/i));
    fireEvent.click(screen.getByText(/genderless/i));
    fireEvent.click(screen.getByText(/unknown/i));

    expect(mockOnGender).toHaveBeenCalledTimes(4);
    expect(mockOnGender).toHaveBeenCalledWith({ status: 'Female', origin: 'gender' });
    expect(mockOnGender).toHaveBeenCalledWith({ status: 'Male', origin: 'gender' });
    expect(mockOnGender).toHaveBeenCalledWith({ status: 'Genderless', origin: 'gender' });
    expect(mockOnGender).toHaveBeenCalledWith({ status: 'Unknown', origin: 'gender' });
  });
});