const mongoQuestions = [
  {
    questionText: "What does BSON stand for?",
    options: [
      "Binary JSON",
      "Binary Storage Object Notation",
      "Binary Search Object Notation",
      "None of the above",
    ],
    answer: "Binary JSON",
  },
  {
    questionText:
      "Which method is used to insert a document into a collection in MongoDB?",
    options: [
      "db.collection.insertOne()",
      "db.collection.insert()",
      "db.collection.add()",
      "db.collection.save()",
    ],
    answer: "db.collection.insertOne()",
  },

  {
    questionText: "What is MongoDB?",
    options: [
      "A relational database",
      "A NoSQL database",
      "A key-value store",
      "A graph database",
    ],
    answer: "A NoSQL database",
  },
  {
    questionText: "What type of database is MongoDB?",
    options: [
      "Document-oriented",
      "Relational",
      "Key-value store",
      "Graph database",
    ],
    answer: "Document-oriented",
  },
  {
    questionText: "Which language is used to write MongoDB queries?",
    options: ["SQL", "JavaScript", "Python", "C#"],
    answer: "JavaScript",
  },
  {
    questionText: "What is a collection in MongoDB?",
    options: [
      "A set of databases",
      "A set of documents",
      "A set of tables",
      "A set of fields",
    ],
    answer: "A set of documents",
  },
  {
    questionText: "What is a document in MongoDB?",
    options: [
      "A table row",
      "A JSON-like object",
      "A key-value pair",
      "A database",
    ],
    answer: "A JSON-like object",
  },
  {
    questionText: "What is the default port for MongoDB?",
    options: ["27017", "5432", "3306", "1521"],
    answer: "27017",
  },
  {
    questionText: "Which command is used to show databases in MongoDB?",
    options: ["show dbs", "show databases", "list dbs", "list databases"],
    answer: "show dbs",
  },
  {
    questionText: "How do you insert a document into a MongoDB collection?",
    options: [
      "db.collection.add()",
      "db.collection.put()",
      "db.collection.insert()",
      "db.collection.save()",
    ],
    answer: "db.collection.insert()",
  },
  {
    questionText: "What is a replica set in MongoDB?",
    options: [
      "A set of master nodes",
      "A group of mongos instances",
      "A group of mongod instances with the same data",
      "A set of shards",
    ],
    answer: "A group of mongod instances with the same data",
  },
  {
    questionText: "How do you update a document in MongoDB?",
    options: [
      "db.collection.updateOne()",
      "db.collection.modify()",
      "db.collection.change()",
      "db.collection.replace()",
    ],
    answer: "db.collection.updateOne()",
  },
  {
    questionText: "What is sharding in MongoDB?",
    options: [
      "Replication of data",
      "Partitioning of data across multiple servers",
      "Caching of data",
      "Encrypting of data",
    ],
    answer: "Partitioning of data across multiple servers",
  },
  {
    questionText: "How do you delete a document from a MongoDB collection?",
    options: [
      "db.collection.deleteOne()",
      "db.collection.removeOne()",
      "db.collection.drop()",
      "db.collection.removeDocument()",
    ],
    answer: "db.collection.deleteOne()",
  },
  {
    questionText: "What is an index in MongoDB?",
    options: [
      "A way to sort documents",
      "A special data structure that improves search performance",
      "A way to duplicate documents",
      "A method to join collections",
    ],
    answer: "A special data structure that improves search performance",
  },
  {
    questionText: "What command is used to create an index in MongoDB?",
    options: [
      "db.collection.addIndex()",
      "db.collection.makeIndex()",
      "db.collection.newIndex()",
      "db.collection.createIndex()",
    ],
    answer: "db.collection.createIndex()",
  },
  {
    questionText: "What is an aggregation in MongoDB?",
    options: [
      "A way to create indexes",
      "A way to perform complex queries and transformations",
      "A way to replicate data",
      "A method to shard data",
    ],
    answer: "A way to perform complex queries and transformations",
  },
  {
    questionText: "What is the purpose of the find() method in MongoDB?",
    options: [
      "To delete documents",
      "To insert documents",
      "To update documents",
      "To query documents",
    ],
    answer: "To query documents",
  },
  {
    questionText: "How do you create a database in MongoDB?",
    options: [
      "use <dbName>",
      "create <dbName>",
      "new <dbName>",
      "db.createDatabase(<dbName>)",
    ],
    answer: "use <dbName>",
  },
  {
    questionText:
      "What is the purpose of the $match stage in an aggregation pipeline?",
    options: [
      "To filter documents",
      "To sort documents",
      "To group documents",
      "To project fields",
    ],
    answer: "To filter documents",
  },
  {
    questionText:
      "What is the purpose of the $group stage in an aggregation pipeline?",
    options: [
      "To filter documents",
      "To sort documents",
      "To group documents",
      "To project fields",
    ],
    answer: "To group documents",
  },
  {
    questionText: "How do you list collections in a database in MongoDB?",
    options: [
      "show collections",
      "list collections",
      "show tables",
      "list tables",
    ],
    answer: "show collections",
  },
  {
    questionText:
      "What is the purpose of the $project stage in an aggregation pipeline?",
    options: [
      "To filter documents",
      "To sort documents",
      "To group documents",
      "To include or exclude fields",
    ],
    answer: "To include or exclude fields",
  },
  {
    questionText: "How do you drop a collection in MongoDB?",
    options: [
      "db.collection.drop()",
      "db.collection.remove()",
      "db.collection.delete()",
      "db.collection.destroy()",
    ],
    answer: "db.collection.drop()",
  },
  {
    questionText: "What is the purpose of the ObjectId in MongoDB?",
    options: [
      "To uniquely identify documents",
      "To sort documents",
      "To index documents",
      "To encrypt documents",
    ],
    answer: "To uniquely identify documents",
  },
  {
    questionText: "What is the default storage engine for MongoDB?",
    options: ["InnoDB", "WiredTiger",  "RocksDB", "Memory"],
    answer: "WiredTiger",
  },
  {
    questionText: "How do you rename a collection in MongoDB?",
    options: [
      "db.collection.renameCollection()",
      "db.collection.rename()",
      "db.collection.changeName()",
      "db.collection.modifyName()",
    ],
    answer: "db.collection.renameCollection()",
  },
  {
    questionText: "What is a capped collection in MongoDB?",
    options: [
      "A fixed-size collection that overwrites its oldest entries",
      "A collection with a maximum number of documents",
      "A collection that cannot be updated",
      "A collection that is read-only",
    ],
    answer: "A fixed-size collection that overwrites its oldest entries",
  },
  {
    questionText: "How do you perform a text search in MongoDB?",
    options: [
      "Using the $search operator",
      "Using the $find operator",
      "Using the $query operator",
      "Using the $text operator",
    ],
    answer: "Using the $text operator",
  },
  {
    questionText:
      "What is the purpose of the $lookup stage in an aggregation pipeline?",
    options: [
      "To perform joins with other collections",
      "To filter documents",
      "To sort documents",
      "To group documents",
    ],
    answer: "To perform joins with other collections",
  },
  {
    questionText: "What is the oplog in MongoDB?",
    options: [
      "A special capped collection that keeps a rolling record of all operations",
      "A log of errors",
      "A list of active users",
      "A record of all database connections",
    ],
    answer:
      "A special capped collection that keeps a rolling record of all operations",
  },
  {
    questionText: "How do you back up a MongoDB database?",
    options: [
      "Using mongodump",
      "Using mongoexport",
      "Using mongobackup",
      "Using mongosave",
    ],
    answer: "Using mongodump",
  },
  {
    questionText: "What is a BSON document?",
    options: [
      "Binary JSON",
      "Basic JSON",
      "Binary Serialized Object Notation",
      "Basic Serialized Object Notation",
    ],
    answer: "Binary JSON",
  },
  {
    questionText: "What is a TTL index in MongoDB?",
    options: [
      "An index that sorts documents",
      "An index that groups documents",
      "An index that improves search performance",
      "An index that automatically removes documents after a certain period",
    ],
    answer:
      "An index that automatically removes documents after a certain period",
  },
  {
    questionText: "How do you create a TTL index in MongoDB?",
    options: [
      "db.collection.createIndex({ <field>: 1 }, { expireAfterSeconds: <seconds> })",
      "db.collection.addIndex({ <field>: 1 }, { ttl: <seconds> })",
      "db.collection.makeTTLIndex({ <field>: 1 }, { seconds: <seconds> })",
      "db.collection.setTTLIndex({ <field>: 1 }, { time: <seconds> })",
    ],
    answer:
      "db.collection.createIndex({ <field>: 1 }, { expireAfterSeconds: <seconds> })",
  },
  {
    questionText: "What is the purpose of the $set operator in MongoDB?",
    options: [
      "To update specific fields in a document",
      "To create a new document",
      "To delete a document",
      "To read a document",
    ],
    answer: "To update specific fields in a document",
  },
  {
    questionText: "How do you sort the results of a query in MongoDB?",
    options: [
      "Using the sort() method",
      "Using the orderBy() method",
      "Using the arrange() method",
      "Using the organize() method",
    ],
    answer: "Using the sort() method",
  },
  {
    questionText:
      "What is the purpose of the $unwind stage in an aggregation pipeline?",
    options: [
      "To deconstruct an array field from the input documents",
      "To filter documents",
      "To group documents",
      "To project fields",
    ],
    answer: "To deconstruct an array field from the input documents",
  },
  {
    questionText: "What is the purpose of the $addToSet operator in MongoDB?",
    options: [
      "To update a field",
      "To create a new document",
      "To add an element to an array only if it does not already exist",
      "To remove an element from an array",
    ],
    answer: "To add an element to an array only if it does not already exist",
  },
  {
    questionText: "How do you aggregate data in MongoDB?",
    options: [
      "Using the aggregate() method",
      "Using the group() method",
      "Using the sum() method",
      "Using the collect() method",
    ],
    answer: "Using the aggregate() method",
  },
  {
    questionText:
      "How do you connect a Node.js application to a MongoDB database?",
    options: [
      "Using the connect() method",
      "Using the MongoClient.connect() method",
      "Using the open() method",
      "Using the link() method",
    ],
    answer: "Using the MongoClient.connect() method",
  },

  {
    questionText: "Which method is used to find a single document in MongoDB?",
    options: ["findOne()", "find()", "select()", "fetch()"],
    answer: "findOne()",
  },

  {
    questionText:
      "How do you update multiple documents in MongoDB using Node.js?",
    options: [
      "Using the updateMany() method",
      "Using the updateOne() method",
      "Using the save() method",
      "Using the modify() method",
    ],
    answer: "Using the updateMany() method",
  },

  {
    questionText:
      "Which method is used to remove a document from a MongoDB collection?",
    options: ["deleteOne()", "remove()", "discard()", "drop()"],
    answer: "deleteOne()",
  },

  {
    questionText:
      "How do you create an index on a MongoDB collection using Node.js?",
    options: [
      "Using the createIndex() method",
      "Using the index() method",
      "Using the makeIndex() method",
      "Using the buildIndex() method",
    ],
    answer: "Using the createIndex() method",
  },

  {
    questionText:
      "Which method is used to perform a query with a sort order in MongoDB?",
    options: ["sort()", "orderBy()", "arrange()", "sequence()"],
    answer: "sort()",
  },

  {
    questionText:
      "How do you insert multiple documents into a MongoDB collection using Node.js?",
    options: [
      "Using the insertMany() method",
      "Using the insert() method",
      "Using the add() method",
      "Using the batchInsert() method",
    ],
    answer: "Using the insertMany() method",
  },

  {
    questionText:
      "What method is used to aggregate data in MongoDB to perform complex queries?",
    options: ["aggregate()", "group()", "collect()", "merge()"],
    answer: "aggregate()",
  },
  {
    questionText: "How do you delete a document?",
    options: [
      "Using the removeDocument method",
      "Using the deleteDoc method",
      "Using the deleteOne and deleteMany methods",
      "Using the removeOne and removeMany methods",
    ],
    answer: "Using the deleteOne and deleteMany methods",
  },
  {
    questionText: "How do you update a document?",
    options: [
      "Using the modifyOne and modifyMany methods",
      "Using the updateOne, updateMany, and replaceOne methods",
      "Using the changeOne and changeMany methods",
      "Using the updateDoc and replaceDoc methods",
    ],
    answer: "Using the updateOne, updateMany, and replaceOne methods",
  },
];

export default mongoQuestions;
