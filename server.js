import express from 'express';
import logger from 'morgan';
import multer from 'multer';
import { UlostDatabase } from './ulost-db.js';
import path from 'path';

class UlostServer {
    constructor(dburl) {
        this.dburl = dburl;
        this.app = express();
        this.app.use(logger('dev'));
        this.app.use(express.json());
        this.app.use('/client', express.static('client'));
        this.app.use(express.json());
        // AFTER : Create multer object
        this.imageUpload = multer({
            storage: multer.diskStorage({
                destination: function(req, file, cb) {
                    cb(null, 'images/');
                },
                filename: function(req, file, cb) {
                    cb(
                        null,
                        new Date().valueOf() +
                        '_' +
                        file.originalname
                    );
                }
            }),
        });
    }

    async initRoutes() {
        // Note: when using arrow functions, the "this" binding is lost.
        const self = this;

        this.app.post('/login/create', async(req, res) => {
            try {
                const { email, password } = req.query;
                if (!(await this.emailExists(email))) {
                    const person = await self.db.createLogin(email, password);
                    res.send(JSON.stringify(person));
                } else {
                    res.status(500).send("Email Already in Use");
                }
            } catch (err) {
                console.log("BKENK")
                res.status(500).send(err);
            }
        });

        this.app.post('/reporter/create', async(req, res) => {
            try {
                const { category, location, contact, time, image, email } = req.query;
                const id = Date.now();
                const item = await self.db.createItem(category, location, contact, time, image, id, email);
                res.send(JSON.stringify(item));
            } catch (err) {
                res.status(500).send(err);
            }
        });

        this.app.put('/reporter/update', async(req, res) => {
            console.log(res.query)
            try {
                const { location, contact, time, image, id } = req.query;
                const item = await self.db.updateItem(location, contact, time, image, id);
                res.send(JSON.stringify(item));
            } catch (err) {
                res.status(500).send(err);
            }
        });

        this.app.put('/login/update', async(req, res) => {
            try {
                const { email } = req.query;
                const item = await self.db.updateLogin(email);
                console.log(item);
                res.send(JSON.stringify(item));
            } catch (err) {
                res.status(500).send(err);
            }
        });

        this.app.delete('/reporter/delete', async(req, res) => {
            try {
                const { id } = req.query;
                const item = await self.db.deleteItem(id);
                res.send(JSON.stringify(item));
            } catch (err) {
                res.status(500).send(err);
            }
        });

        this.app.get('/login/read', async(req, res) => {
            try {
                const { email, password } = req.query;
                const login = await self.db.readLogin(email);
                if (!(await this.emailExists(email) && this.checkPassword(login, password))) {
                    res.send(JSON.stringify(login));
                } else {
                    res.status(500).send("Wrong password");
                }
            } catch (err) {
                res.status(500).send(err);
            }
        });

        this.app.get('/reporter/read', async(req, res) => {
            try {
                const { category } = req.query;
                const resArray = await self.db.readItem(category);
                let resObj = {};
                for (let i = 0; i < resArray.length; ++i) {
                    resObj[resArray[i]._id] = resArray[i];
                }
                res.send(JSON.stringify(resObj));
            } catch (err) {
                res.status(500).send(err);
            }
        });

        // @TODO Add routes
        // Image Upload Routes
        this.app.post('/image', this.imageUpload.single('image'), (req, res) => {
            console.log(req.file);
            res.json(req.file.filename);
        });
        // Image Get Routes
        this.app.get('/image/:filename', (req, res) => {
            const { filename } = req.params;
            console.log("FILENAME", filename)
            const dirname = path.resolve();
            console.log("DIRNAME", dirname)
            const fullfilepath = path.join(dirname, 'images/' + filename);
            return res.sendFile(fullfilepath);
        });
    }

    async initDb() {
        this.db = new UlostDatabase(this.dburl);
        await this.db.connect();
    }

    async start() {
        await this.initRoutes();
        await this.initDb();

        const port = 3000;
        this.app.listen(port, () => {
            console.log(`UlostServer listening on port ${port}!`);
        });
    }

    async emailExists(emailthing) {
        let allEmails = await this.db.readAllLogins();
        // console.log("prev", allEmails);
        let newallEmails = allEmails.filter(x => x.email === emailthing);
        // console.log("after filter", newallEmails);
        console.log(newallEmails.length)
        if (newallEmails.length !== 0) {
            console.log("truehere")
            return true;
        } else {
            console.log("falsehere")
            return false;
        }
    }

    checkPassword(obj, password) {
        return obj["password"] === password;
    }

}

const server = new UlostServer(process.env.DATABASE_URL);
server.start();