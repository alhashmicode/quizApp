const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const quizRouter = require('./routers/quiz.js');
const resultRouter = require('./routers/results.js');

const app = express();
const PORT = process.env.PORT | 8080;



app.use(cors());
app.use(bodyParser.json({ strict: true }))
app.use(bodyParser.urlencoded({ extended: true }))

const DB_URI = 'mongodb+srv://typescript:qLVB40t09yLh9S2f@cluster0.697wy.mongodb.net/quiz-app?retryWrites=true&w=majority'
mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  if (err) {console.log(err)}
  app.listen(PORT);
  console.log(`lesting at port ${PORT}`);
})
app.use('/results',resultRouter);
app.use('/',quizRouter);

// 404
app.use((req, res) => {
  res.status(404).send('404', { title: '404' });
});