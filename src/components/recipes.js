import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './recipes.css';
import config from '../config';

const Recipes = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${config.RECIPE_API_KEY}&number=50`);
        setData(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);
  
  return (
    <div className="container">
      {data ? (
        <div>
          <h2 className="title">Recipes list</h2>
          <div className="recipe-container">
            {data.results.map(item => (
              <div key={item.id} className="recipe-item">
                <h4>{item.title}</h4>
                <img src={item.image} alt={item.title} />
              </div>
            ))}
          </div>
        </div>
      ) : error ? (
        <div>
          <h2>Error:</h2>
          <pre>{JSON.stringify(error, null, 2)}</pre>
        </div>
      ) : (
        <div>Loading recipes...</div>
      )}
    </div>
  );
};

export default Recipes;