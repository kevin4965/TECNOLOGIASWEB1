const express = require('express');
const { config } = require('dotenv');
config();
const mongoose = require('mongoose');
const clienteRoutes = require('./routes/clienteRoutes');

const app = express();
app.use(express.json());

//conectar la base de datos
mongoose.connect(process.env.MONGO_URL, {dbName: process.env.MONGO_DB_NAME,
const db = mongoose.connection;
})
.then(() => console.log('Conectado a MongoDB'))
.catch(error => console.error(error));

app.use('/api/clientes', clienteRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
