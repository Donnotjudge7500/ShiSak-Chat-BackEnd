import express from 'express';
import dotenv from 'dotenv';

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});


app.listen(process.env.PORT || 3000, () => console.log(`Server is listening at the PORT: ${process.env.PORT}` ));

dotenv.config({
    path: './env'
})   