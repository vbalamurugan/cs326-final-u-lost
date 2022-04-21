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

        if (count === 0) {
            await this.collection.insertMany([
                { _id: '1', name: 'Artemis', age: 19 },
                { _id: '2', name: 'Parzival', age: 17 },
                { _id: '3', name: 'John', age: 30 },
                { _id: '4', name: 'Mia', age: 22 },
            ]);
        }
    }

    // Close the pool.
    async close() {
        this.client.close();
    }

    // CREATE a user in the database.
    async createLogin(email, password) {
        const res = await this.collection.insertOne({ email: email, password: password });
        // Note: the result received back from MongoDB does not contain the
        // entire document that was inserted into the database. Instead, it
        // only contains the _id of the document (and an acknowledged field).
        return res;
    }
}