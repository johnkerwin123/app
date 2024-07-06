import React, { useState, useEffect } from 'react';
import api from '../services/api';
import Map from './Map';

function Home() {
  const [ip, setIp] = useState('');
  const [geoInfo, setGeoInfo] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchGeoInfo();
  }, []);

  const fetchGeoInfo = async () => {
    try {
      const response = await api.get(`/ip/${ip}/geo`);
      setGeoInfo(response.data);
    } catch (error) {
      setError('Error fetching geo information.');
    }
  };

  const handleIpChange = (e) => {
    setIp(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchGeoInfo();
  };

  return (
    <div>
      <h2>Home</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter IP Address"
          value={ip}
          onChange={handleIpChange}
          required
        />
        <button type="submit">Search</button>
      </form>
      {error && <p>{error}</p>}
      {geoInfo && (
        <div>
          <h3>IP & Geolocation Information:</h3>
          <p>IP: {geoInfo.ip}</p>
          <p>City: {geoInfo.city}</p>
          <p>Region: {geoInfo.region}</p>
          <p>Country: {geoInfo.country}</p>
          <Map location={{ lat: geoInfo.loc.split(',')[0], lon: geoInfo.loc.split(',')[1] }} />
        </div>
      )}
    </div>
  );
}

export default Home;
