const express = require('express');
// const dotenv = require('dotenv');
// dotenv.config();
// require('dotenv').config();
const app = express();
const { resolve } = require('path');
require('dotenv').config();
require('dotenv').config({ path: './.env' });
// require('dotenv').config();

console.log(`STATIC_DIR: ${process.env.STATIC_DIR}`);



const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2020-08-27',
  appInfo: {
    name: "stripe-samples/identity/modal",
    version: "0.0.1",
    url: "https://github.com/stripe-samples"
  }
});

// Serve static files from a specified directory
app.use(express.static(process.env.STATIC_DIR));

// Parse JSON data in request bodies
app.use(
  express.json({
    verify: function(req, res, buf) {
      if (req.originalUrl.startsWith('/webhook')) {
        req.rawBody = buf.toString();
      }
    }
  })
);

// Serve the index.html file
app.get('/', (req, res) => {
  const path = resolve(process.env.STATIC_DIR + '/index.html');
  res.sendFile(path);
});

// Expose a route to get configuration data
app.get('/config', (req, res) => {
  res.send({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  });
});

// Create a verification session
app.post('/create-verification-session', async (req, res) => {
  try {
    const verificationSession = await stripe.identity.verificationSessions.create({
      type: 'document',
      metadata: {
        user_id: 'gorle.abhilash@gmail.com', // Replace with the actual user ID
      },
      type : 'document',
      
      options : {
        document : {
          require_matching_selfie : true,
          },

        },
      
      // Additional options for configuring the verification session can be added here.
    });

    // Send the verification session's client secret to the client
    res.send({
      client_secret: verificationSession.client_secret
    });

  } catch (e) {
    console.log(e);
    return res.status(400).send({
      error: {
        message: e.message
      }
    });
  }
});

// Handle incoming webhook events
app.post('/webhook', async (req, res) => {
  let data, eventType;

  if (process.env.STRIPE_WEBHOOK_SECRET) {
    // Verify the webhook signature
    let event;
    let signature = req.headers['stripe-signature'];
    try {
      event = stripe.webhooks.constructEvent(
        req.rawBody,
        signature,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      console.log(`⚠️  Webhook signature verification failed.`);
      return res.sendStatus(400);
    }
    data = event.data;
    eventType = event.type;
  } else {
    // If no secret is configured, retrieve event data directly from the request body
    data = req.body.data;
    eventType = req.body.type;
  }

  // Handle different webhook event types here
  switch (eventType) {
    case 'identity.verification_session.verified':
      // Handle verification success
      break;
    case 'identity.verification_session.requires_input':
      // Handle verification that requires user input
      break;
    default:
      // Handle other webhook events if needed
      break;
  }
  res.sendStatus(200);
});

app.listen(4242, () => console.log(`Node server listening at http://localhost:4242`));
