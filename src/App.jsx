import { useState } from 'react';
import './App.css';
import api from './api';

function App() {
  const [title, setTitle] = useState(null);
  const [page, setPage] = useState(1);
  const [response, setResponse] = useState(null);

  const getStream = async () => {
    const response = await api.handleSearch(title, page);
    setResponse(response);
  };

  console.log('data', response);

  const onSubmit = async e => {
    e.preventDefault();
    e.stopPropagation();
    getStream();
  };

  return (
    <div className='App'>
      <h1>Stream Checker</h1>

      <form onSubmit={onSubmit}>
        <input onChange={e => setTitle(e.target.value)} />
        <input
          type='number'
          value={page}
          onChange={e => setPage(e.target.value)}
        />
        <button type='submit'>Search</button>
      </form>
    </div>
  );
}

export default App;
