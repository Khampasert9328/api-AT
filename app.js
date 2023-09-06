const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require("cors")
const i18next = require('i18next')
const Backend = require('i18next-fs-backend')
const middleware = require('i18next-http-middleware')
const bodyParser = require('body-parser')
const corsOption = {
    origin: "*", // ["http://x.com", "http://b.com"]
    optionsSuccessStatus: 200
}

//connect DB
const connectDB = require('./config/connectDB')


i18next.use(Backend).use(middleware.LanguageDetector).init({
    fallbackLng: 'en',
    backend:{
        loadPath: './locales/{{lng}}/translation.json'
    }
})


const indexRouter = require('./src/routes/index');
const usersRouter = require('./src/routes/users');
const homeRouter = require('./src/routes/home/home');
const aboutRouter = require('./src/routes/about/about_router');
const serviceRouter = require('./src/routes/service/service_rout')
const productsRouter = require('./src/routes/products/products_route')
const customersRouter = require('./src/routes/customers/customers_route')
const teamsRouter = require('./src/routes/teams/teams_route')
const contactRouter = require('./src/routes/contect/contact_route')

const app = express();
connectDB()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors(corsOption))
app.use(middleware.handle(i18next))
app.use(logger('dev'));
app.use('/images',express.static('images'))

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/v1/home', homeRouter);
app.use('/api/v1/about',aboutRouter)
app.use('/api/v1/service',serviceRouter)
app.use('/api/v1/products',productsRouter)
app.use('/api/v1/customers',customersRouter)
app.use('/api/v1/teams', teamsRouter)
app.use('/api/v1/contact', contactRouter)
module.exports = app;
