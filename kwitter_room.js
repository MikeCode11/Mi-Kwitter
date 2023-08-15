var firebaseConfig = { apiKey: "AIzaSyBbTdgG3i9NHXR-cuXhxDvHIl7_GJtFK6A",
authDomain: "chat-9a789.firebaseapp.com",
projectId: "chat-9a789",
databaseURL: "https://chat-9a789-default-rtdb.firebaseio.com",
storageBucket: "chat-9a789.appspot.com",
messagingSenderId: "106826165992",
appId: "1:106826165992:web:0bf898692001c998ece35d"};
firebase.initializeApp(firebaseConfig); // AÑADE LOS ENLACES FIREBASE//AÑADE TUS ENLACES DE FIREBASE

user_name = localStorage.getItem ("user_name"); // usa la variable user_name para guardar el nombre de usario, usa el comando localStorage.getItem ("user_name"); para obtener el  nombre de usuario de la página anterior
document.getElementById("user_name").innerHTML = "Hola " + user_name + "!"; //usa el comando document.getElementById("user_name").innerHTML para imprimir en HTML el mensaje Hola y el nombre de usuario guardado en la varibale


 function addRoom() //crea una función que se llame addRoom
{ //inicio de la funcion
   var room_name = document.getElementById("room_name").value;  //usa la variable room_name y el comando document.getElementById("room_name").value mpara guardar el nombre de la sala 
    firebase.database().ref("/").child(room_name).update({ purpose : "agregando room name"  }); //copia el siguiente comando para conectarnos a firebase:  firebase.database().ref("/").child(room_name).update({ purpose : "adding room name"  });
   localStorage.setItem("room_name", room_name); //usa el comando localStorage.setItem("room_name", room_name); para gaurdar el nombre de la sala 
    window.location = "kwitter_page.html";//usa el comando window.location para abrir la pagina web kwitter_page.html

} //fin de la funcion

function getData() //crea una función que se llame getData
{ //llave de inicio
    firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; // pega este codigo para accesar a firebase firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
     var Room_names = childKey; // Agrega a la variable Room_names el comando childKey para recuperar el nombre de la sala de firebase
      console.log("Nombre de la sala: " + Room_names); // imprime en la consola el texto Room name : seguido de la variable Room_names
       var row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; // usa row para guardar las etiquetas que vamos a poner en html  "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row; // usa el comando document.getElementById("output").innerHTML += para poner en html las etiquetas que guardamos en la variable row
         }); // cierra el primer acceso a firebase });
        }); // cierra el segundo acceso a firebase });
} // cierra la función

 getData(); //llama a la funcion getData
  function redirectToRoomName(name) // crea una funcion que se llame redirectToRoomName con el parametro name
{ //llave de inicio 
 console.log(name); //imprime en la consola el nombre de la sala guardado en la variable name
 localStorage.setItem("room_name", room_name); //usa el comando localStorage.setItem para guardar el nombre de la sala almacenado en la variable name usa el id "room_name"
 window.location = "kwitter_page.html"; // usa el comando window.location para abrir la página kwitter_page.html
} //fin de la función





       

