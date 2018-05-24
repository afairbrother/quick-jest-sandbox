import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => (
  <div style={styles}>
    <Hello user={{firstName: 'Bobby', lastName: 'Jones', id: '123423'}} />
  </div>
);

render(<App />, document.getElementById('root'));
