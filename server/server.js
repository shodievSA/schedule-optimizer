require("dotenv").config();
const session = require("express-session");
const Sequelize = require("sequelize");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const verifyStudentCredentials = require("./utils/verifyStudentCredentials.js");
const crypto = require("crypto");
const path = require("path");
const app = require("./app");

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: "postgres"
    }
);

const sessionStore = new SequelizeStore({
    db: sequelize,
    tableName: "sessions"
});

sessionStore.sync();

app.use(session({
    secret: process.env.SECRET_KEY,
    store: sessionStore,
    resave: false,
    saveUninitialized: true,
    cookie: { 
        secure: false,
        maxAge: 1000 * 60 * 60 * 24 * 7
    },
    genid: function(req) {
        return crypto.randomBytes(32).toString('hex');
    }
}));

app.get("/registration", (req, res) => {

    const filePath = path.join(
        __dirname, 
        '../client/dist/index.html'
    );

    res.sendFile(filePath);

});

app.post('/api/v1/login-user', async (req, res) => {

    const studentEmail = req.body['webster-email'];
    const emailPassword = req.body['webster-email-password'];

    let isAuthorized = await verifyStudentCredentials(
        studentEmail, 
        emailPassword
    );

    if (isAuthorized == true) {

        req.session['student-email'] = studentEmail;
        res.sendStatus(200);

    } else {

        res.status(401).send("Unauthorized");

    }

});

app.get("*", async (req, res) => {

    if (req.session['student-email']) {
        const filePath = path.join(
            __dirname, 
            "../client/dist/index.html"
        );

        res.sendFile(filePath);
    } else {
        res.redirect("/registration");
    }

}); 

app.listen(3000, () => {

    console.log("App running on port 3000...");

});
