const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const pizzaRoute = require("./routes/pizzas");
/* const authRoute = require("./routes/auth");

const {
  getPosts,
  addPost,
  delPost,
  getEditPostPage,
  editPost,
  getPersonalPosts,
} = require("./controllers/api-post-controller");


const methodOverride = require("method-override");
const apiRouter = express.Router();

app.use(express.json()); */

mongoose
  .connect(process.env.MONGO_URL, {})
  .then((res) => console.log("connected to db"))
  .catch((error) => console.log("errorDB"));

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-Width, content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

const allowedOrigins = [
  "https://blog-eta-nine-17.vercel.app",
  "https://blog-zhenkaaf.vercel.app",
];
app.use(
  cors({
    origin: allowedOrigins,
    methods: "GET, POST, DELETE, PUT, OPTIONS",
    accessControlAllowHeaders: "Content-Type, Authorization",
    credentials: true,
  })
);

app.options("/newpost", (req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.setHeader("Access-Control-Allow-Methods", "POST");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Access-Control-Allow-Origin"
  );
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.status(200).end();
});
app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Access-Control-Allow-Origin"
  );
  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});

const PORT = process.env.PORT || 8001;
app.use("/pizzas", pizzaRoute);

app.listen(PORT, (error) => {
  error
    ? console.log("listen***", error)
    : console.log(`listening port ${PORT}`);
});

/* 

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));



app.use('/auth', authRoute);


app.get('/', function (req, res) {
    res.send('Hello World');
});


app.get('/posts', getPosts);



app.get('/edit/:id', getEditPostPage);
app.put('/editpost/:id', editPost);


 */
