let express = require('express');
let app = express();

app.use('*/pics',express.static('public/pics'));
app.use('*/logo',express.static('public/logo'));
app.use('*/css',express.static('public/css'));
app.use('*/video',express.static('public/video'));
app.use('*/js',express.static('public/js'));

app.get('/', (req, res) => {
    res.render('index.ejs');
});
app.get('/events', (req, res) => {
    res.render('events.ejs');
});
app.get('/gallery', (req, res) => {
    res.render('gallery.ejs');
});
app.get('/contact', (req, res) => {
    res.render('contact.ejs');
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running');
});