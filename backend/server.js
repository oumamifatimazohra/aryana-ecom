import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routers/userRouter.js';
import cors from 'cors';
import productRouter from './routers/productRouter.js';

const app = express();
mongoose.connect(process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/aryana', {
    useNewUrlParser: true,
  //  useCreateIndex: true,
    useUnifiedTopology: true

})
app.use(cors());


app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.get('/', (req, res) =>{
    res.send('Server is ready');
});
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});


const port = 5000;
app.listen(port, () =>{
    console.log(`Serve at http://localhost:${port}`);
})

