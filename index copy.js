import express from 'express';  // backend routing
import bodyParser from 'body-parser';  // send post requests
import mongoose from 'mongoose';  // create models for posts
import cors from 'cors';  // cross regional requests
// nodemon automatically resets servers upon changes (autosaver)

import postRoutes from './routes/posts.js';

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes);

// mongodb cloud atlas
const CONNECTION_URL = 'mongodb+srv://astollfo:TheNexusGaming1!@cluster0.pmfxmdp.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 3000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true} )  // call to not lint
    .then(() => app.listen(PORT, () => console.log('Server running on port: ${PORT}')))
    .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false);  // call to not lint
 