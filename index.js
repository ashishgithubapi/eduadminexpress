const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const cors = require('cors');
const bodParser = require('body-parser');
const authRoutes = require('./routes/auth-routes');
const homeRoutes = require('./routes/home-routes');
const port = 5800;
const app = express();

app.use(expressLayouts);
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(bodParser.json());

app.use(express.static(path.join(__dirname, 'public')));
app.use(homeRoutes.routes);
app.use(authRoutes.routes);


app.listen(port, () => console.log(`App is listening on ${port}`));