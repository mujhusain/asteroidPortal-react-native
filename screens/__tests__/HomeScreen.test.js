import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {render, screen, fireEvent} from '@testing-library/react-native';
import HomeScreen from '../HomeScreen';

const mockFunc = jest.fn();

describe('Testing react navigation', () => {
  test('page contains the 3 button ', () => {
    const component = (
      <NavigationContainer>
        <HomeScreen />
      </NavigationContainer>
    );

    render(component);

    const input = screen.getByPlaceholderText('Enter Asteroid Id');
    const buttons = screen.getAllByRole('button');

    expect(input).toBeTruthy();
    expect(buttons.length).toBe(3);
  });
});

describe('Testing action of component', () => {
  test('fire changeText event', () => {
    const component = (
      <NavigationContainer>
        <HomeScreen />
      </NavigationContainer>
    );
    render(component);
    const input = screen.getByPlaceholderText('Enter Asteroid Id');
    fireEvent.changeText(input, '123');
    expect(input.props.value).toBe('123');
  });

  test('on click on reset button input field should be empty', () => {
    const component = (
      <NavigationContainer>
        <HomeScreen />
      </NavigationContainer>
    );
    render(component);
    const input = screen.getByPlaceholderText('Enter Asteroid Id');
    const buttons = screen.getAllByRole('button');
    fireEvent.changeText(input, '123');
    fireEvent.press(buttons[1]);
    expect(input.props.value).toBe('');
  });

  test('clicking on search button takes you to the loading screen', async () => {
    const component = (
      <NavigationContainer>
        <HomeScreen />
      </NavigationContainer>
    );
    render(component);
    const input = await screen.findByPlaceholderText('Enter Asteroid Id');
    fireEvent.changeText(input, '2000433');
    const buttons = await screen.findAllByRole('button');
    fireEvent.press(buttons[0]);

    const loader = await screen.findByText('Loading...');
    expect(loader).toBeTruthy();
    
  });
});
