import React, { useState, useEffect } from 'react';
import api from '../services/api';

function History() {
  const [history, setHistory] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const response = await api.get('/ip/history');
      setHistory(response.data);
    } catch (error) {
      setError('Error fetching search history.');
    }
  };

  const handleDelete = async (selectedIds) => {
    try {
      await api.delete('/ip/history', { data: { ids: selectedIds } });
      fetchHistory();
    } catch (error) {
      setError('Error deleting search history.');
    }
  };

  return (
    <div>
      <h2>Search History</h2>
      {error && <p>{error}</p>}
      <ul>
        {history.map((item) => (
          <li key={item.id}>
            <p>{item.ip}</p>
            <p>{item.city}, {item.country}</p>
          </li>
        ))}
      </ul>
      <button onClick={() => handleDelete([1, 2, 3])}>Delete Selected</button>
    </div>
  );
}

export default History;
