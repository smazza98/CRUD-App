const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./utils/db');
const errorHandler = require('./middleware/errorMiddleware');

dotenv.config({ path: './config/.env' });


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/compliments", require("./routes/complimentsRoutes"));

app.use(errorHandler);

const port = process.env.PORT || 5000;

if (!process.env.DB_URI) {
    console.error("MongoDB connection string missing.");
} else {
    connectDB();
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}