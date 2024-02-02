import express from 'express';

const app = express();

// Set a static folder
app.use(express.static('public'));

// Parse url encoded bodies (as sent in html forms)
app.use(express.urlencoded({ extended: true }));

//  Parse Json bodies (as sent by API clients)
app.use(express.json());

//  Start the server
app.listen(3000, () => {
    console.log('Server listening on port 3000')
});