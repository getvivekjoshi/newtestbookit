const Room = require('../models/room')
const mongoose = require('mongoose')
const rooms = require ('../data/rooms')

mongoose.connect('mongodb://localhost:27017/bookit',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false,
    useCreateIndex:true
})


const seedRooms = async () => {
    try {

        await Room.deleteMany();
        console.log('Rooms Deleted')

        await Room.insertMany(rooms)
        console.log('All Rooms Added')
        process.exit()

    } catch (error) {
        console.log(error.message)
        process.exit()
    }
}

seedRooms()