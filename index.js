
const express = require('express');


//local module
const userRouter = require('./routes/userRouter');

const hostRouter = require('./routes/hostRouter');

const app = express();

app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
})

app.use(express.urlencoded({ extended: true }));

app.use(userRouter);
app.use(hostRouter);




const PORT = 3001;


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
})