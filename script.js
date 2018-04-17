var config = {
    apiKey: "AIzaSyBJr-VTaLFVbGmCk8cApjTZhdKsnfueBe8",
    authDomain: "walking-dead-dc1f0.firebaseapp.com",
    databaseURL: "https://walking-dead-dc1f0.firebaseio.com",
    projectId: "walking-dead-dc1f0",
    storageBucket: "walking-dead-dc1f0.appspot.com",
    messagingSenderId: "868214489413"
};
firebase.initializeApp(config);

const preObject = document.getElementById('Personnages');

const dbRefObject = firebase.database().ref().child('Personnages');


dbRefObject.on('value', snapshot => {
    snapshot.forEach(function (childSnapshot) {
        var childData = childSnapshot.val();
        document.getElementById('Personnages').innerHTML += '<li>' + childData.name + '</li>';
    });
});

 function writeUserData(Name) {
  firebase.database().ref('Personnages/' + name).push({
  name: Name
  });
  
  }
  
  function PushOnFirebase() {
  let name = document.getElementById("Name").value;
  writeUserData(name);
  window.location.reload();
  }