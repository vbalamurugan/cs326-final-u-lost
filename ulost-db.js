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

    // CREATE a item in the database.
    async createItem(category, location, contact, time, image, id, email) {
        const res = await this.collectionitems.insertOne({ category: category, location: location, contact: contact, time: time, image: image, _id: id, email: email });
        return res;
    }

    //create login
    async createLogin(email, password) {
        const res = await this.collection.insertOne({ email: email, password: password, honesty: 0});
        return res;
    }

    // DELETE a user from the database.
    async deleteItem(id) {
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
        //returns cursor (collection) of all items with this specific category
        const res = await this.collectionitems.find({ category: category });
        //convert the cursor to an array and return it
        const resArray = res.toArray();
        return resArray;
    }

    // UPDATE a user in the database.
    async updateItem(location, contact, time, image, id) {
        id = parseInt(id);
        const res = await this.collectionitems.updateOne({ _id: id }, { $set: { location: location, contact: contact, time: time, image: image } }, );
        return res;
    }

    //update honesty score of user (reporter) using email
    async updateLogin(email) {
        const bingo = await this.collection.findOne({ email: email });
        let num = bingo.honesty;
        ++num;
        const res = await this.collection.updateOne({email: email}, {$set: {honesty: num}});
        return res;
    }

    //Read all logins
    async readAllLogins() {
        const res = await this.collection.find().toArray();
        return res;
    }

}