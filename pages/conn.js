const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const pool = require('../pages/queries');
const port = process.env.PORT || 3000;

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API...' })
})

app.get('/register', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM register');
      res.json(result.rows);
    } catch (error) {
      console.error('Error executing query', error);
      res.status(500).send('Internal Server Error');
    }
  });

  app.post('/register', async (req, res) => {
  try {
    // Assuming that you have the necessary data in the request body
    
    const {email, phone, password} = req.body;

    // Use parameterized query to prevent SQL injection
    const result = await pool.query('INSERT INTO register (email, phone, password) VALUES ($1, $2, $3) RETURNING *', [email, phone, password]);

    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).send('Internal Server Error');
  }
});


app.get('/topic', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM topic');
      res.json(result.rows);
    } catch (error) {
      console.error('Error executing query', error);
      res.status(500).send('Internal Server Error');
    }
  });

  
  app.post('/topic', async (req, res) => {
  try {
    // Assuming that you have the necessary data in the request body  
    const {image, heading, description} = req.body;
    // Use parameterized query to prevent SQL injection
    const result = await pool.query('INSERT INTO topic (image, heading, description) VALUES ($1, $2, $3) RETURNING *', [image, heading, description]);

    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).send('Internal Server Error');
  }
});

app.delete('/topic/:id', async (req, res) => {
  try {
    // Assuming that you have the necessary data in the request body
    const {id} = req.params;

    // Use parameterized query to prevent SQL injection
    const result = await pool.query('DELETE FROM topic WHERE id = $1 RETURNING *', [id]);

    if (result.rows.length === 0) {
      // No matching record found
      res.status(404).json({ message: 'Record not found' });
    } else {
      res.json({ message: 'Record deleted successfully' });
    }
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).send('Internal Server Error');
  }
});


app.get('/subtopic', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM subtopic');
      res.json(result.rows);
    } catch (error) {
      console.error('Error executing query', error);
      res.status(500).send('Internal Server Error');
    }
  });

  
  app.post('/subtopic', async (req, res) => {
  try {
    // Assuming that you have the necessary data in the request body  
    const {tid, heading, description} = req.body;
    // Use parameterized query to prevent SQL injection
    const result = await pool.query('INSERT INTO subtopic ( tid, heading, description) VALUES ($1, $2, $3) RETURNING *', [tid, heading, description]);

    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).send('Internal Server Error');
  }
});


app.delete('/subtopic/:newid', async (req, res) => {
  try {
    // Assuming that you have the necessary data in the request body
    const {newid} = req.params;

    // Use parameterized query to prevent SQL injection
    const result = await pool.query('DELETE FROM subtopic WHERE newid = $1 RETURNING *', [newid]);

    if (result.rows.length === 0) {
      // No matching record found
      res.status(404).json({ message: 'Record not found' });
    } else {
      res.json({ message: 'Record deleted successfully' });
    }
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).send('Internal Server Error');
  }
});

app.delete('/subtopicdel/:tid', async (req, res) => {
  try {
    // Assuming that you have the necessary data in the request body
    const {tid} = req.params;

    // Use parameterized query to prevent SQL injection
    const result = await pool.query('DELETE FROM subtopic WHERE tid = $1 RETURNING *', [tid]);

    if (result.rows.length === 0) {
      // No matching record found
      res.status(404).json({ message: 'Record not found' });
    } else {
      res.json({ message: 'Record deleted successfully' });
    }
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).send('Internal Server Error');
  }
});


app.get('/detail', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM detail');
      res.json(result.rows);
    } catch (error) {
      console.error('Error executing query', error);
      res.status(500).send('Internal Server Error');
    }
  });

  app.post('/detail', async (req, res) => {
  try {
    // Assuming that you have the necessary data in the request body  
    const {tid, subid, text, image} = req.body;
    // Use parameterized query to prevent SQL injection
    const result = await pool.query('INSERT INTO detail ( tid, subid, text, image) VALUES ($1, $2, $3, $4) RETURNING *', [tid, subid, text, image]);

    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).send('Internal Server Error');
  }
});

app.delete('/detail/:subid', async (req, res) => {
  try {
    // Assuming that you have the necessary data in the request body
    const {subid} = req.params;

    // Use parameterized query to prevent SQL injection
    const result = await pool.query('DELETE FROM detail WHERE subid = $1 RETURNING *', [subid]);

    if (result.rows.length === 0) {
      // No matching record fo.comund
      res.status(404).json({ message: 'Record not found' });
    } else {
      res.json({ message: 'Record deleted successfully' });
    }
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).send('Internal Server Error');
  }
});

app.delete('/detail2/:tid', async (req, res) => {
  try {
    // Assuming that you have the necessary data in the request body
    const {tid} = req.params;

    // Use parameterized query to prevent SQL injection
    const result = await pool.query('DELETE FROM detail WHERE tid = $1 RETURNING *', [tid]);

    if (result.rows.length === 0) {
      // No matching record fo.comund
      res.status(404).json({ message: 'Record not found' });
    } else {
      res.json({ message: 'Record deleted successfully' });
    }
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`App running...`)
})