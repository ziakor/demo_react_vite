import React, { useState } from 'react';
import Counter from '../../components/Counter/Counter';
import CustomSlider from '../../components/CustomSlider/CustomSlider';
// eslint-disable-next-line import/no-unresolved
import logo from '@/logo.svg';

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((currentCount) => currentCount + 1)}>
            count is:
            {' '}
            {count}
          </button>
        </p>
        <p>
          Edit
          {' '}
          <code>App.jsx</code>
          {' '}
          and save to test HMR updates.
        </p>
        <CustomSlider />
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>

        <Counter />

      </header>

    </div>
  );
}

export default Home;
