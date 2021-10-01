const { google } = require('googleapis');

// initilize the oauth client
const oauth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URI
);

// define the scopes that needs to get permission
const scopes = [
    'https://www.googleapis.com/auth/drive.appdata',
    'https://www.googleapis.com/auth/drive.file',
    'https://www.googleapis.com/auth/drive.install',
];

// set auth as a global default
google.options({
    auth: oauth2Client,
});

// generate a url that asks permissions for scopes
exports.autthencticateController = (req, res) => {
    const url = oauth2Client.generateAuthUrl({
        // 'online' (default) or 'offline' (gets refresh_token)
        access_type: 'offline',
        scope: scopes,
    });
    return res.json({
        url,
    });
};

// save token credentials in the backend
exports.saveContoller = (req, res) => {
    let code = req.query.code;
    let token;
    if (code) {
        oauth2Client.getToken(code).then(({ tokens }) => {
            token = tokens;
            oauth2Client.setCredentials(tokens);

            return res.json({ token });
        });
    }
};
