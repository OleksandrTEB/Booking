import express from 'express';
import cors from 'cors';
import db from './db.json' with { type: 'json'}

const app = express()
const port = 3000

app.use(cors());
app.use(express.json())
app.get('/destination', (req, res) => {
    res.send(db.destination)
})

app.get('/hotels', (req, res) => {
    res.send(db.hotels)
})

app.listen(port, () => {
    console.log(`Servet started: http://localhost:${port}`)
})