// src/delete-user/index.ts
import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
// const firebase = require("firebase");
// // Required for side-effects
// require("firebase/firestore");

// admin.initializeApp();

export const deleteUser = functions.database
  .ref("/users/{userId}")
  .onCreate(async event => {
    console.log(event);
  });

// export const listener = functions.https.onRequest(async (req, res) => {
//   const id = req.query.userId;

//   // Initialize Cloud Firestore through Firebase
//   /*
//   firebase.initializeApp({
//     apiKey: "AIzaSyA08waoYXMF-k-Or8NcjVoDsU4O1t6dTws",
//     authDomain: "last-phase-project.firebaseapp.com",
//     projectId: "last-phase-project"
//   });

//   var db = firebase.firestore();

//   db.collection("users")
//     .doc({ id })
//     .delete.then(function() {
//       console.log("Document successfully deleted!");
//     })
//     .catch(() => {
//       console.error("Error removing document: ");
//     });
//     */

//   var adaRef = admin.database().ref('users/'+{id});
//   adaRef.remove()
//   .then(function() {
//     console.log("Remove succeeded.")
//   })
//   .catch(function(error) {
//     console.log("Remove failed: " + error.message)
//   });
//   */

//   const snapshot = await admin.database().ref('users/'+{id}).remove();

//    res.redirect(303, snapshot.ref)
// });
