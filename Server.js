const express = require('express')
const app = express()



const workingHours = (req, res, next) => {
  const currentDate = new Date();
  const day = currentDate.getDay();
  const hour = currentDate.getHours();

  if (day >= 1 && day <= 5 && hour >= 9 && hour <= 17) {
      next();
  } else {
      res.status(503).send('The website is only available during working hours (Monday to Friday, from 9 to 17)');
  }
}

app.use(workingHours);


app.get('/', (req, res) => {
    res.sendFile(__dirname+'/Home page.html')
  })

  app.get('/Contact', (req, res) => {
    res.sendFile(__dirname+'/Contact us.html')
  })

  app.get('/Services', (req, res) => {
    res.sendFile(__dirname+'/Our Services.html')
  })

  app.get('/Home.css', (req,res)=>{
    res.sendFile(__dirname + '/CSS/Home.css')
}) 

app.listen(5000, () => {
  console.log('Server running on port 5000')
})
