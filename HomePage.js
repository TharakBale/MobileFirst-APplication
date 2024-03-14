

import React, { useState, useEffect } from 'react';

const HomePage = ({ onLogout }) => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {

    fetch('https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10')
      .then((response) => response.json())
      .then((data) => setJokes(data.jokes))
      .catch((error) => console.error('Error fetching jokes:', error));
  }, []);

  return (
    <div>
      <h2>Homepage</h2>
      <button type="button" className="btn btn-secondary" onClick={onLogout}>
        Logout
      </button>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Joke</th>
          </tr>
        </thead>
        <tbody>
          {jokes.map((joke) => (
            <tr key={joke.id}>
              <td>{joke.id}</td>
              <td>{joke.joke}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomePage;
