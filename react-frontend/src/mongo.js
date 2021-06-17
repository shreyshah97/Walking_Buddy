// async function main() {
//     const MongoClient = require('mongodb').MongoClient;
//     const uri = "mongodb+srv://shreyshah:Speaker_123@shrey-cluster-0.dwvhl.mongodb.net/Users?retryWrites=true&w=majority";
//     const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
//     await client.connect();
//     await findListings(client, 5);
//     client.close();
// }

// main().catch(console.error);

async function findListing(client, user) {
    const cursor = client.db("Users").collection("UserList").find(user);
    const results = await cursor.toArray();
    if(results.length > 0) {
        console.log(`Found ${results.length} listing(s):`);
        results.forEach((result, i) => {
            console.log(`   _id: ${result._id}`);
            console.log(`   email: ${result.email}`);
            console.log(`   password: ${result.password}`);
        });
        return true;
    }
    return false;
}

async function addUser(client, user) {
    client.db("Users").collection("UserList").insertOne(user);
    const cursor = client.db("Users").collection("UserList").find().limit(2);
    const results = await cursor.toArray();
    if(results.length > 0) {
        console.log(`Found ${results.length} listing(s):`);
        results.forEach((result, i) => {
            console.log(`   _id: ${result._id}`);
            console.log(`   email: ${result.email}`);
            console.log(`   password: ${result.password}`);
        });
    }
}

export { findListing, addUser }