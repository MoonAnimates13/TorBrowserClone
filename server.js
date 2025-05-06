const express = require('express');
const cors = require('cors');
const { SocksProxyAgent } = require('socks-proxy-agent');
const axios = require('axios');

const app = express();
app.use(cors());

app.get('/fetch', async (req, res) => {
  const targetUrl = req.query.url;
  if (!targetUrl || !targetUrl.endsWith('.onion')) {
    return res.status(400).send('Only .onion URLs allowed');
  }

  try {
    const agent = new SocksProxyAgent('socks5h://127.0.0.1:9050'); // Tor must be running locally
    const response = await axios.get(targetUrl, {
      httpAgent: agent,
      httpsAgent: agent,
      timeout: 10000,
    });

    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Failed to fetch .onion site');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Proxy server running on port ${PORT}`));
