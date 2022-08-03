
import 'react-native';
import React from 'react';
import App from '../App';

jest.useFakeTimers()
// Note: test renderer must be required after react-native.
import {create, act, renderer}  from 'react-test-renderer';

// it('renders correctly', async () => {
//   renderer.create(<App />);
// });

describe('<App /> Basics', () => {
  it('has 1 child', async () => {
    let tree
    act(()=>{
       tree = create(<App />)
    })
    expect(tree.toJSON().children.length).toBe(1);
  });
})

