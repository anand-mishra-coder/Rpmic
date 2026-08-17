# Ramphal Memorial Inter College — Premium School Web App

A modular Firebase + Google Sign-In school web application starter.

## Setup
1. Create a Firebase Web App.
2. Enable Google Sign-In in Firebase Authentication.
3. Create Cloud Firestore.
4. Replace the placeholders in `assets/js/firebase-config.js`.
5. Publish the provided `firestore.rules`.
6. Open `index.html` through a local/static web server.

## Important
The Firebase API key is not a secret credential. Security comes from Firebase Authentication and Firestore Security Rules.
The admin area is protected by role checks; do not rely on a hidden URL alone.

## Demo role bootstrap
For the first admin, sign in once, then create:
`users/{YOUR_UID}` with:
`{ "name": "...", "email": "...", "role": "admin", "active": true }`

For production, use Firebase Admin SDK/custom claims on a trusted server for stronger administrative role management.
