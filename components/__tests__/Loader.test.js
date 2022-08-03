
import 'react-native';
import React from 'react';
import Loader from '../Loader';

jest.useFakeTimers()
 // Note: test renderer must be required after react-native.
 import renderer from 'react-test-renderer';
 
 it('Loader should render correctly', () => {
   renderer.create(<Loader />);
 });
 