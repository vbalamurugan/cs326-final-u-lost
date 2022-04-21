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

        const count = await this.collection.countDocuments();
    }

    // Close the pool.
    async close() {
        this.client.close();
    }

    // CREATE a user in the database.
    async createItem(category, location, contact, time, image, id) {
        this.collection = this.db.collection(category);
        const res = await this.collection.insertOne({ category: category, location: location, contact: contact, time: time, image: image, id: id });
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
    async deleteItem(id, category) {
        // Note: the result received back from MongoDB does not contain the
        // entire document that was deleted from the database. Instead, it
        // only contains the 'deletedCount' (and an acknowledged field).
        this.collection = this.db.collection(category);
        const res = await this.collection.deleteOne({ id: id });
        return res;
    }

    // READ a login from the database.
    async readLogin(email, password) {
        const res = await this.collection.findOne({ email: email, password: password });
        return res;
    }

    // UPDATE a user in the database.
    async updatePerson(id, name, age) {
        const res = await this.collection.updateOne({ _id: id }, { $set: { name, age } });
        return res;
    }


    // READ all people from the database.
    async readAllPeople() {
        const res = await this.collection.find({}).toArray();
        return res;
    }
}