const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://akshayjyothip_node_rev:fifB5cBqHBNF4Ors@noderev.b9xmas7.mongodb.net/";


const client = new MongoClient(url);

const dbName = "HELLOWORLD";

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("USER");

  // the following code examples can be pasted here...

  const data={

    firstName:"chandra",
    lastName:"neli",
    age:33,
    Place:"lokha",
    phone:"7778787878"
  }

  //  const insertResult = await collection.insertMany([
  //  data
  //  ]);

  // console.log("Inserted documents =>", insertResult);


  // const findResult = await collection.find({}).toArray();
  //  console.log("Found documents =>", findResult);


  //  const count=await collection.countDocuments({})
  //  console.log(count);


  const res = await collection.find({ firstName: "chandra" }).toArray()

  console.log(res);

    // const updateResult = await collection.updateOne(
    //   { firstName: "chandra" },
    //   { $set: { lastName: "kaliyani" } }
    // );
    // console.log("Updated documents =>", updateResult);

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
