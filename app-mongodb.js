var MongoClient = require('mongodb').MongoClient, assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/myproject';
// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");
  insertDocuments(db, function () {
	  updateDocument(db, function () {
		  removeDocument(db, function () {
			  findDocuments(db,function () {
  				db.close();
			  });
		  });
	  });
  });
});

var insertDocuments = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Insert some documents
  collection.insert([
    {a1 : 1}, {a1 : 2}, {a1 : 3}
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 document into the document collection");
    callback(result);
  });
};

var updateDocument = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Update some documents
  collection.update({ a1 : 2 }
    , { $set: { b1 : 1 } }, function(err, result) {
    assert.equal(err, null);
    assert.equal(1, result.result.n);
    console.log("Updated the document with the field a equal to 2");
    callback(result);
  });  
};

var removeDocument = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Delete some documents
  collection.remove({ a1 : 3 }, function(err, result) {
    assert.equal(err, null);
    assert.equal(1, result.result.n);
    console.log("Removed the document with the field a equal to 3");
    callback(result);
  });    
};

var findDocuments = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Find some documents
  collection.find({a1:1}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.dir(docs);
    callback(docs);
    callback(docs);
    callback(docs);
    callback(docs);
    callback(docs);
    callback(docs);
  });      
};