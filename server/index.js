const  express = require('express')
const app = express()
const port = 5005
const cors =require('cors');
const pool =require('./db')


//middleware
app.use(cors());
app.use(express.json());

//Routes

//create a todo
app.post('/todos', async(req,res) =>{
   try {
       const {description} =req.body;
       const newTodo =await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *", [description] ) 
      
      res.json(newTodo.rows[0]);
       console.log(req.body);
   } catch (err) {
       console.error(err.message);
       
   }
})


//get all todos
app.get('/todos',async(req,res) =>{
    try {
        const allTodos = await pool.query('SELECT * FROM todo');
        res.json(allTodos.rows);
    } catch (error) {
        console.error(err.message);
    }

})

//get a todo
app.get('/todos/:id',async(req,res) =>{
    try {
        const allTodos = await pool.query('SELECT * FROM todo');
        res.json(allTodos.rows);
    } catch (error) {
        console.error(err.message);
    }

})
//update a todo

//delete a todo



app.get('/', (req, res) => res.send('Hello Dilek!'))







app.listen(port, () => console.log(`Example app listening on port ${port}!`))