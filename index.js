
const express = require('express');


//local module
const userRouter = require('./routes/userRouter');

const hostRouter = require('./routes/hostRouter');

const app = express();



app.use(express.urlencoded({ extended: true }));

app.use('/host', userRouter);
app.use('/host', hostRouter);

app.use((req, res) => {
  res.status(404).send(`<h1>Your Page is not found</h1>`)
})


const PORT = 3001;


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
})