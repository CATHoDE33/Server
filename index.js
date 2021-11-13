//const {MongoClient} = require('mongodb')
const express = require('express')
//const bodyParser = require('body-parser')
const fs = require('fs')
const http = require('http')
const port = 3000;
//const uri ="mongodb+srv://demo:demopass@cluster0.lu2wi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
//const client = new MongoClient(uri);
const mongoose = require('mongoose')

const app = express()
//app.use(express.json())
//app.use(express.static('public'))
//app.use(express.urlencoded({
//    extended: true
//}));

mongoose.connect("mongodb+srv://demo:demopass@cluster0.lu2wi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)

app.listen(3000, () => console.log('First server is listening on port 3000'))

/*const server = http.createServer(function(req, res)
{
    res.writeHead(200, { 'Content-Type': 'text/html' })
    fs.readFile('index.html', function(error, data)
    {
        if (error)
        {
            res.writeHead(404)
            res.write('Error: File Not Found')
        }
        else
        {
            res.write('This server is currently running on port ' + port + '.')
            res.write(data)
        }
        res.end()
    })
})

server.listen(port, function(error)
{
    if (error)
    {
        console.log('Something went wrong', error)   
    }
    else
    {
        console.log('Second server is listening on port ' + port);
    }
})

app.post("/form_submission",(req,res) => {
    var year = req.body.year;
    var brand = req.body.brand;
    var model = req.body.model;
    var power = req.body.power;
    var weight = req.body.weight;

    var data = {
        "year": year,
        "brand": brand,
        "model": model,
        "power": power,
        "weight": weight
    }

    db("Example_Database").collection("Example_Collection").insertOne(data);
    console.log("Successful");
    //res.redirect('signup_success.html')
})

app.get("/",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('index.html');
})

/*async function main()
{
    const uri ="mongodb+srv://demo:demopass@cluster0.lu2wi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
    try
    {
        await client.connect();

        await createListing(client, {
            name: "Lovely loft",
            summary: "A charming loft in Brunswick",
            property_type: "House",
            bedrooms: 1,
            bathrooms: 1,
            beds: 2
        })

        //await listDatabases(client);

        await createMultipleListings(client, [
            {
                name: "Lovely loft",
                summary: "A charming loft in Brunswick",
                property_type: "House",
                bedrooms: 1,
                bathrooms: 1,
                beds: 2
            },
            {
                name: "Vintage apartment",
                summary: "A historic location",
                property_type: "Apartment",
                bedrooms: 3,
                beds: 2
            }
        ]);
    }
    catch (e)
    {
        console.error(e);
    }
    finally
    {
        await client.close();
    }
}

main().catch(console.error);

async function createMultipleListings(client, newListings)
{
    const result = await client.db("Example_Database").collection("Example_Collection")
    .insertMany(newListings);

    console.log(`${result.insertedCount} new listings created with the following id(s):`);
    console.log(result.insertedIds);
}

async function createListing(client, newListing)
{
    const result = await client.db("Example_Database").collection("Example_Collection")
    .insertOne(newListing);

    console.log(`New listing created with the following id: ${result.insertedId}`);
}

async function listDatabases(client)
{
    const databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => {
        console.log(`- ${db.name}`);
    })
}

app.get('/tshirt', (req, res) => {
    res.status(200).send({
        tshirt: 'grey print',
        size: 'large'
    })
});

app.post('/tshirt/:id', (req, res) => {

    const { id } = req.params;
    const { logo } = req.body;

    if (!logo) {
        res.status(418).send({ message: 'We need a logo!' })
    }

    res.send({
        tshirt: `shirt with your ${logo} and ID of ${id}`,
    });
});

app.listen(
    PORT,
    () => console.log(`Server is available on http://localhost:${PORT}`)
)*/