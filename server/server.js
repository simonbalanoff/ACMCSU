import express from 'express';
import eventsRouter from './routes/events.js';

const app = express();
const port = process.env.PORT || 4000;

app.use('/api', eventsRouter);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})