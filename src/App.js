import React, { useState, useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import { getBreweries } from './breweries/breweries';
import BreweryCard from './components/BreweryCard';
import BreweryList from './components/BreweryList';

function App() {

  //handling error while loading data
  const [loading, setLoading] = useState(false);
  //array of breweries from API call
  const [breweries, setBreweries] = useState([]);

  //loading time for React to update the DOM
  useEffect(() => {
    loadBreweries();
  }, []);

  const loadBreweries = async () => {
    try {
      setLoading(true);
      const res = await getBreweries();
      setBreweries(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <Fragment>
      <div>
        <h2>Saroj Niraula</h2>
        <h3>Pre-assignment</h3>
      </div>
      {loading ? (
        <h2>loading</h2>
      ) : (
        <div className="App">
          <Router>
            <Routes>
              <Route exact path="/" element={<BreweryCard breweries={breweries} />} />
              <Route exact path="/:id" element={<BreweryList breweries={breweries} />} />
            </Routes>
          </Router>
        </div>
      )}
    </Fragment>
  );
}

export default App;
