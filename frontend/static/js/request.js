
function fxhr(event){
    // Sending and receiving data in JSON format using POST method
    //
    var xhr = new XMLHttpRequest();
    var url = "http://localhost:5060/";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var json = JSON.parse(xhr.responseText);
            console.log("Recieved name : " + json.name + " age: "+json.age);
        }
    };
    var data = JSON.stringify({"email": "hey@mail.com", "password": "101010"});
    xhr.send(data);
}