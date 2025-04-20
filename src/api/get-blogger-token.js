// This is a serverless function to securely obtain an OAuth token for the Blogger API
// using a Google service account. This can be deployed to Vercel, Netlify, or other
// serverless providers.

// Import required modules
const { google } = require('googleapis');
const fs = require('fs');

// Export handler function for serverless deployment
module.exports = async (req, res) => {
  try {
    // CORS headers if needed
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', process.env.ALLOWED_ORIGIN || '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');

    // Handle preflight OPTIONS request
    if (req.method === 'OPTIONS') {
      res.status(200).end();
      return;
    }

    // Get service account key from environment variable or file
    let serviceAccountKey;

    if (process.env.GOOGLE_SERVICE_ACCOUNT_KEY) {
      // If provided as environment variable (recommended for security)
      serviceAccountKey = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY);
    } else {
      // Fallback to file (not recommended for production)
      const keyPath = process.env.GOOGLE_SERVICE_ACCOUNT_KEY_PATH || './service-account-key.json';
      serviceAccountKey = JSON.parse(fs.readFileSync(keyPath));
    }

    // Create JWT client using service account
    const jwtClient = new google.auth.JWT(
      serviceAccountKey.client_email,
      null,
      serviceAccountKey.private_key,
      ['https://www.googleapis.com/auth/blogger'] // Blogger API scope
    );

    // Authorize and get access token
    await jwtClient.authorize();

    // Return the access token
    res.status(200).json({
      access_token: jwtClient.credentials.access_token,
      expires_in: jwtClient.credentials.expiry_date,
    });
  } catch (error) {
    console.error('Error generating access token:', error);
    res.status(500).json({ error: 'Failed to generate access token' });
  }
};
