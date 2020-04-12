
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDGXM3TfyetUpTioWCnwfzw5fsKlTO-no8",
    authDomain: "demo1-f71a0.firebaseapp.com",
    databaseURL: "https://demo1-f71a0.firebaseio.com",
    projectId: "demo1-f71a0",
    storageBucket: "demo1-f71a0.appspot.com",
    messagingSenderId: "1013586282937",
    appId: "1:1013586282937:web:3e71d1fa630f3a245fce68",
    measurementId: "G-9RXNWMJSPL"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var FireAuth = firebase.auth()
var FireDB = firebase.firestore()

function SubmitUser(){
    var newEmail = document.getElementById('Email_Field').value
    var newPassword = document.getElementById('Password_Field').value
    FireDB.collection("UserEmails").add({
        userEmail: "Email"
    })
    FireAuth.createUserWithEmailAndPassword(newEmail, newPassword).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(`${errorCode} : ${errorMessage}`)
    
        alert(`${newEmail} entered!`)
    })
    
}
/*
FireAuth.createUserWithEmailAndPassword("Mich@hotmail.com", "Mb026612").catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(`${errorCode} : ${errorMessage}`)
})

FireDB.collection("GroceryList").add({
    Bread: "WonderBread",
    Store: "Ralphs"
})

FireDB.collection('GroceryList').get().then((querySnapshot) => {
    querySnapshot.forEach((item) => {
        console.log(`${item.id}, ${item.data()}`)
    })
})*/