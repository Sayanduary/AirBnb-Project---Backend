
const express = require('express');
const path = require('path');


//local module
const userRouter = require('./routes/userRouter');

const hostRouter = require('./routes/hostRouter');

const app = express();



app.use(express.urlencoded({ extended: true }));

app.use(userRouter);
app.use('/host', hostRouter);

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404page.html'));
});


const PORT = 3001;


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
})