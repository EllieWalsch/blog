const express = require('express');
const routes = require('./controllers/homeroutes');
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');

const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const hbs = exphbs.create({ helpers });

app.use(express.json());

app.use(routes);

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});