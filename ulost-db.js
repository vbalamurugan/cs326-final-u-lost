import 'dotenv/config';
import { MongoClient, ServerApiVersion } from 'mongodb';

export class UlostDatabase {
    constructor(dburl) {
        this.dburl = dburl;
    }

    async connect() {
        this.client = await MongoClient.connect(this.dburl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverApi: ServerApiVersion.v1,
        });

        // Get the database.
        this.db = this.client.db('ulost');

        // Init the database.
        await this.init();
    }

    async init() {
        this.collection = this.db.collection('login');
        this.collectionitems = this.db.collection("items");
        const count = await this.collection.countDocuments();
    }

    // Close the pool.
    async close() {
        this.client.close();
    }

    // CREATE a user in the database.
    async createItem(category, location, contact, time, image, id) {
        const res = await this.collectionitems.insertOne({ category: category, location: location, contact: contact, time: time, image: image, _id: id });
        // Note: the result received back from MongoDB does not contain the
        // entire document that was inserted into the database. Instead, it
        // only contains the _id of the document (and an acknowledged field).
        return res;
    }

    async createLogin(email, password) {
        const res = await this.collection.insertOne({ email: email, password: password });
        // Note: the result received back from MongoDB does not contain the
        // entire document that was inserted into the database. Instead, it
        // only contains the _id of the document (and an acknowledged field).
        return res;
    }

    // DELETE a user from the database.
    async deleteItem(id) {
        // Note: the result received back from MongoDB does not contain the
        // entire document that was deleted from the database. Instead, it
        // only contains the 'deletedCount' (and an acknowledged field).
        id = parseInt(id);
        const res = await this.collectionitems.deleteOne({ _id: id });
        return res;
    }

    // READ a login from the database.
    async readLogin(email) {
        const res = await this.collection.findOne({ email: email });
        return res;
    }

    // READ an item from the database.
    async readItem(category) {
        let resObj = {};
        //returns cursor (collection) of all items with this specific category
        const res = await this.collection.find({ category: category });
        //convert the cursor to an array and return it
        const resArray = res.toArray();
        return resArray;
    }

    // UPDATE a user in the database.
    async updateItem(location, contact, time, image, id) {
        // Note: the result received back from MongoDB does not contain the
        // entire document that was inserted into the database. Instead, it
        // only contains the _id of the document (and an acknowledged field).
        id = parseInt(id);
        const res = await this.collectionitems.updateOne(
            { _id: id },
            { $set: { location: location, contact: contact, time: time, image: image} },
        );
        console.log(res)
        return res;
    }

    async readAllLogins() {
        const res = await this.collection.find();
        return res;
    }

}