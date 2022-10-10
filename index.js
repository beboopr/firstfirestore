import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from 'firebase-admin/firestore';

// import our credentials ( service account)
import serviceAccount from './serviceAccount.js'

//connect to our firebase project using those credentials
initializeApp({
    credential: cert(serviceAccount)
})
//end of connection to firestore credentials

//coonect to firebase store Database
const db = getFirestore();

//define a new video game
const NewGame = {
title: 'Frogger',
rated: 'E',
genre: 'Arcade',
released: 1981
}
// Create a document inside a collection
db.collection('games').add(NewGame)

// if ok, consloe.log the doc id - .then
.then(doc => console.log('Game created', doc.id))

// if not console.log the error - .catch
.catch(console.error)

//get all games
db.collection('games').get()

//reshape the collection
.then(collection => {
    collection.docs.forEach(doc =>{
        console.log(doc.id, doc.data())
    })
})
.catch(console.error)