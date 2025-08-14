if (typeof window === "undefined") {
  const fetch = require('node-fetch');

  const SELF_URL = "https://edu-college.onrender.com/";

  setInterval(() => {
    fetch(SELF_URL)
      .then(res => console.log(`[Self-Ping] Pinged ${SELF_URL} at ${new Date().toISOString()}`))
      .catch(err => console.error('[Self-Ping] Error:', err));
  }, 10 * 60 * 1000); // every 10 minutes
}
