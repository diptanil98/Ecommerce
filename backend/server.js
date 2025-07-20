const express=require ('express');
const mongoose=require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const app=express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());


const productRoutes = require('./routes/productRoutes');
app.use(productRoutes);
const userRoutes = require('./routes/userRoutes');
app.use('/users',userRoutes);
const orderRoutes = require('./routes/orderRoutes');
app.use('/orders',orderRoutes);
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

  const port = process.env.PORT || 5000;
  app.listen(port,()=>(console.log(`Server running on port ${port}`)));
  