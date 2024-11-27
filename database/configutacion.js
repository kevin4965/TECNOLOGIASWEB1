const mongoose = require('mongoose')

const mongoConn = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: 'proyectos-iud'
        })
        console.log('Conexión correcta a Mongo')
    }catch(e){
        console.log('Error', e)
        throw new Error('Error conectando a Mongo')
    }
}

module.exports = { mongoConn }