import * as bodyParser from 'body-parser';
import * as express from 'express';
import FormModel from './model/forms.model';
import * as mongoose from 'mongoose';
import * as cors from 'cors';

// setup server
const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
server.use(bodyParser.json());

if(process.env.NODE_ENV === "development") {
  console.log('connect to development db')
  mongoose.connect('mongodb://db:27017/');
} else if( process.env.NODE_ENV === "production") {
  mongoose.connect("mongodb://mongo-0.mongo,mongo-1.mongo:27017/?replicaSet=rs0")
}

const db = mongoose.connection;
const collection = db.collection('Forms');

db.on('error', () => {
  console.log('---Failed to connect to mongoose');
});

db.once('open', () => {
  console.log('+++ Connected to mongoose');
});

server.use('/board', async (req, res) => {
  let form = new FormModel();
  let formData = await FormModel.find();
  res.send(formData);
  console.log(formData) 
});

server.use('/save', async (req, res) => {
  /* let newForm = {
    title: 'Form Title',
    numForm: 2,
    activeRow: 1,
    forms: [
      {
        title: 'ช่วงเงินเดือน',
        formId: 'first-form',
        type: 'MultipleChoices',
        radiosTitle: ['1000-2000', '50-6893'],
      },
      {
        title: '',
        formId: 'second form',
        type: 'Checkboxes',
        radiosTitle: ['test loading', 'test2'],
      },
      {
        title: '',
        formId: 'third form',
        type: 'SingleInput',
      },
    ],
  };
  */
 
  const newForm = req.body.data;
  const Id = req.body.formId;
  console.log(` New form ${JSON.stringify(newForm)}`);
  delete newForm.__v
  FormModel.findOneAndUpdate(
    { uid: Id }, // find a document with that filter
    newForm, // document to insert when nothing was found
    { upsert: true, new: true, runValidators: true }, // options
    function(err, doc) {
      // callback
      if (err) {
        // handle error
        console.log(err);
      } else {
        // handle document
        console.log(`update document ${doc} `);
      }
    }
  );
});

server.use('/delete', (req, res) => {
   
});

server.use('/signin', (req, res) => {
  res.send(req.bodyParser());
});

server.use('/', (req, res) => {
  res.send('Home page');
});

server.listen(5000, () => {
  console.log('Listen for port 5000');
});

// export default setupGraphQLServer;
