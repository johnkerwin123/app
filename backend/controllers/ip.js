const axios = require('axios');
const { IPHistory } = require('../models/ipHistory'); 

exports.getIPGeo = async (req, res) => {
  const { ip } = req.params;

  try {
    const response = await axios.get(`https://ipinfo.io/${ip}/geo`);
    const data = response.data;

    await IPHistory.create({ ip, data });

    res.json(data);
  } catch (error) {
    console.error('IP Geolocation error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
