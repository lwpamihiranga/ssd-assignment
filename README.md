# SSD OAuth 2.0 Assignment - 2021 OCT

This is the repo for SSD OAuth assignment implementation. This readme covers how to build the application for testing

## Prerequisite

- Clone the repo to the local machine
- You system should have Node.js v12.0 or later and Yarn package manager
  > You can use npm package manager as well. But it's recommended to use Yarn if possible

## Build Node.js backend

- Open a terminal inside the _backend_ folder then run, `yarn install`
- Create copy of `.env.example` file inside the _backend_ folder
- Rename the above create `env.example` copy as `.env`
- Set the necessary _vlaues_ for environmental variables according to your settings
  - **PORT** - specify a port to run the backend server. default `5000`
  - **MONGO_URL** - connection string for MongoDB database
  - **CLIENT_ID** - Google OAuth 2.0 App Client ID
  - **CLIENT_SECRET** - Google OAuth 2.0 App Client Secret
  - **REDIRECT_URI** - Redirect URI for the Google OAuth 2.0 App
- Finally, run `yarn start`

> If you have done all the configurations correctly your backend server should start without any error

## Build React JS frontend

- Open a terminal inside the _backend_ folder then run, `yarn install`
- Create copy of `.env.example` file inside the _backend_ folder
- Rename the above create `env.example` copy as `.env`
- Set the necessary _vlaues_ for environmental variables according to your settings
  - **PORT** - specify a port to run the backend server. default `8000`
  - **HTTPS** - it is recommended not to change this to `false`. default `true`
  - **REACT_APP_FACEBOOK_APP_ID** - Facebook OAuth 2.0 App ID
  - **REACT_APP_FACEBOOK_PAGE_ID** - Facebook Page ID to Publish Posts
  - **REACT_APP_FACEBOOK_BASE_URL** - Fabebook default base url. `Keep default`
  - **REACT_APP_BACKEND_URL** - Backend url for the Node.js server
- Finally, run `yarn start`

> If you have done all the configurations correctly your backend server should start without any error

> If you configure everything successfully, you you should have both backend server and frontend server running!

> For support please contact - lwpamihiranga@gmail.com (amith)
