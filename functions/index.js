const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.addNewsItem = functions.firestore
  .document("{type}/{item}")
  .onCreate((snap, context) => {
    const data = snap.data();
    switch (context.params.type) {
      case "songs":
        console.log("New Song: " + context.params.item);
        return admin
          .firestore()
          .collection("news")
          .add({
            type: "SONG",
            itemId: context.params.item,
            creationDate: new Date(),
            creator: data.creator,
            name: data.name,
            bpm: data.bpm,
            mkey: data.mkey
          });
      case "setlists":
        console.log("New Setlist: " + context.params.item);
        return admin
          .firestore()
          .collection("news")
          .add({
            type: "SETLIST",
            itemId: context.params.item,
            creationDate: new Date(),
            creator: data.creator,
            date: data.date,
            name: data.name
          });
      case "users":
        console.log("New User: " + context.params.item);
        return admin
          .firestore()
          .collection("news")
          .add({
            type: "USER",
            itemId: context.params.item,
            date: new Date(),
            name: data.displayName,
            photoUrl: data.photoUrl
          });
    }
    return null;
  });
