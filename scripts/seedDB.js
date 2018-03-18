const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/itaski",
  {
    useMongoClient: true
  }
);

const tasksSeed = [
    {title:"spin class" , tags:["social", "fitness"], complete: false, date:"2018-03-14 18:40:07.142Z"},
    {title:"julia's party" , tags:["social"], complete: true, date:"2018-03-18 18:40:07.142Z"},
    {title:"spanish meetup" , tags:["social", "spanish"], complete: false, date:"2018-03-18 18:40:07.142Z"},
    {title:"duolingo" , tags:["spanish"], complete: false, date:"2018-03-17 18:40:07.142Z"},
    {title:"lift weights" , tags:["fitness"], complete: true, date:"2018-03-18 18:40:07.142Z"},
    {title:"laundry" , tags:["housework"], complete: false, date:"2018-03-18 19:40:07.142Z"},
    {title:"dishes" , tags:["housework"], complete: false, date:"2018-03-18 18:40:07.142Z"},
    {title:"vacuum" , tags:["housework"], complete: false, date:"2018-03-19 18:40:07.142Z"},
    {title:"walk 606 with Shamika" , tags:["fitness", "social"], complete: false, date:"2018-03-20 18:40:07.142Z"}
];

db.Task
  .remove({})
  .then(() => db.Task.collection.insertMany(taskSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
