const { MongoClient } = require('mongodb')

const uri = "mongodb+srv://juniorpocay:GrxW3DiGFYQQwUpy@clusterfirstdb.gpfb4a7.mongodb.net/?retryWrites=true&w=majority"

const client = new MongoClient(uri)

async function run(){
    try {
        await client.connect()
        console.log('Conectamos ao MongoDB!')
    } catch (err) {
        console.log(err)
    }
}

run()

module.exports = client