const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;



app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {

    res.send('hello from hello smart smart pant')

});

const users = [

    { id: 1, name: 'sabana', email: 'sabana@gmail.com', number: '017888888' },
    { id: 2, name: 'sabnur', email: 'sabnur@gmail.com', number: '017888888' },
    { id: 3, name: 'maghan', email: 'maghan@gmail.com', number: '017888888' },
    { id: 4, name: 'gabana', email: 'habana@gmail.com', number: '017888888' },
    { id: 5, name: 'habana', email: 'habana@gmail.com', number: '017888888' },
    { id: 6, name: 'fabana', email: 'fabana@gmail.com', number: '017888888' },
]

app.get('/users', (req, res) => {
  if(req.query.name){

        const search = req.query.name.toLocaleLowerCase();
         const matched = users.filter(user => user.name.toLocaleLowerCase().includes(search));

        res.send(matched);

  }
  else{
    res.send(users)
    }
})    

app.get('/user/:id', (req, res)=>{
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user);
})

app.post('/users' , (req , res) =>{

    //console.log( 'request',req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
   res.send(user);
})

app.listen(port, () => {
    console.log('Listening to port', port)
})