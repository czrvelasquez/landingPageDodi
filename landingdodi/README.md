# DoDi Landing Page

## Overview

This repository contains the React client for the DoDi landing page. The application now includes a basic skeleton with a hero section, features, company information and a contact form. A lightweight Node.js service will eventually provide an API to support dynamic content and form submissions.

## Running the project

### React client

1. Install dependencies with `npm install`.
2. Start the development server:
   ```bash
   npm start
   ```
   The client will be available at `http://localhost:3000`.

### Node.js server (coming soon)

A server directory will be added in a later update. Once available, start it with:
```bash
node server/index.js
```
By default it should run on `http://localhost:5000`.

## Building and deploying

Create an optimized production build of the React client:
```bash
npm run build
```
The generated `build` directory can be served by any static host or a Node.js server. Deploy by copying this folder to your hosting provider.
