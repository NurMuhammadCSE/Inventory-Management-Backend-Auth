import mongoose from 'mongoose';
import app from './app';


const port = 3000

async function main() {
    try {
        mongoose.connect('mongodb://127.0.0.1:27017/test');
        console.log('Database connected successfully')
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        })
    } catch (error) {
        console.log('Failed to connect to MongoDB', error);
    }
}

main();