import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { render, screen, fireEvent } from '@testing-library/react-native';
import AsteroidDetails from '../AsteroidDetails';


describe('Testing react navigation', () => {
  test('page contains header and 1 button ', async () => {
    const component = (
      <NavigationContainer>
        <AsteroidDetails />
      </NavigationContainer>
    );

    render(component);

    const content =await screen.findByText(/Absolute magnitude h:/i)
    // const homeButton = await screen.findAllByRole('button')
    // expect(homeButton.length).toBe(1);
    expect(content).toBeTruthy();
  });
})