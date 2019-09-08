import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

const endpoint = 'quote';

const App: React.FC = () => {
  const [quote, setQuote] = useState();
  const [quoteSource, setQuoteSource] = useState();
  
  const getQuote = () => {
    fetch(endpoint)
      .then((res) => res.json())
      .then((data: any) => {
      setQuote(data.body);
      setQuoteSource(data.source);
    });
  };
  
  return (
    <div className="App">
      <header className="App-header">
        Version 1.0.0 <img src={logo} className="App-logo" alt="logo"/>
      </header>
      <main>
        <div className="jumbotron">
          <h1 className="display-4">Daily Quote:</h1>
          <p className="lead">{quote}</p>
          <p>{quoteSource}</p>
          <button className="btn btn-primary btn-lg" onClick={getQuote}>Get a quote</button>
        </div>
      </main>
    </div>
  );
};

export default App;
