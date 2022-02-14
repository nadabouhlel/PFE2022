const express = require('express');
const cors = require('cors');
const app = express();
//cors is a middleware funct used manipulates the response and passes it to the next funct
app.use(cors());


//listen to a specific route with app.use. 
//The first argument is the path the application will listen to 
//and the second argument is a callback function that will run when the application serves the path.
 //The callback takes a req argument, 
 //which contains the request data and a res argument that handles the result.
 app.use(cors());

app.use('/login', (req, res) => {
  res.send('hello world');
});

app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));
