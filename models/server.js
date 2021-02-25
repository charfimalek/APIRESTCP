const express = require ('express')
const mongoose = require ('mongoose') 
const dotenv = require ('dotenv')
const router = express.Router()
const app = ('../models/user.js')
const routesusers = require ('../models/user.js')
const { request, response } = require('express')

dotenv.config()

mongoose.connect(process.env.MONGO_URI, () => console.log ("Database connected"))

router.get('/user', (response) => {
    const userone = new routesusers({
        userone.save()
        .then(data =>{
            response.json(data)
        })
        .catch(error =>{
            response.json(error)
        })
    })
    
})

router.post('/user', (request, response) => {
    const userone = new routesusers ({
    test:request.body.firstname
    })
    userone.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    }),
})

app.use('/app', routesusers)
app.listen(4000, () => console.log ("server is up and running"))

exports.express = router()