function dialogAlert() {
    alert("alert");
}

function cordovaDevice() {
    alert("Cordova version: " + device.cordova + "\n" +
        "Device model: " + device.model + "\n" +
        "Device platform: " + device.platform + "\n" +
        "Device UUID: " + device.uuid + "\n" +
        "Device version: " + device.version);
}
function cameraTakePicture() {
    navigator.camera.getPicture(onSuccess, onFail, {
        quality: 50,
        destinationType: Camera.DestinationType.DATA_URL
    });

    function onSuccess(imageData) {
        var image = document.getElementById('myImage');
        image.src = "data:image/jpeg;base64," + imageData;
    }

    function onFail(message) {
        alert('Failed because: ' + message);
    }
}

function whatsapp() {
    var x = document.getElementById("what").innerHTML;
    window.open("https://www.wasap.my/" + x)
}
function email() {
    var x = document.getElementById("email").innerHTML;
    window.open("mailto:" + x + "?")
}
function white(x) {
    x.style.background = "white"
    x.style.color = "black"
}
function black(x) {
    x.style.background = "#333"
    x.style.color = "white"
}
function display(x, y, z) {
    document.getElementById("img_dis").src = x.src
    document.getElementById("tittle_dis").innerHTML = y.innerHTML
    document.getElementById("result_dis").innerHTML = z.innerHTML
    document.getElementById("back").innerHTML = "employee"
}
function display_p(x) {

    if (x.innerHTML == "Lamps") {
        document.getElementById("img_dis").src = "img/lamps.png"
        document.getElementById("tittle_dis").innerHTML = x.innerHTML
        document.getElementById("result_dis").innerHTML = "Price :$10.00"
    }
    else {
        document.getElementById("img_dis").src = "img/table.png"
        document.getElementById("tittle_dis").innerHTML = x.innerHTML
        document.getElementById("result_dis").innerHTML = "Price :$15.00"
    }
    document.getElementById("back").innerHTML = "product"
}
function back() {
    x = document.getElementById("back").innerHTML
    location.replace("#" + x)
}

function ong() {
    document.getElementById("img").src = "img/ong.png"
    document.getElementById("name").innerHTML = "ONG HAN LIN"
    document.getElementById("position").innerHTML = "CEO"
    document.getElementById("age").innerHTML = "20"
    document.getElementById("email").innerHTML = "onghanlin48@gmal.com"
    document.getElementById("office").innerHTML = "085-123456"
    document.getElementById("persona").innerHTML = "+6013-8276487"
    document.getElementById("what").innerHTML = "+60138276487"
}

function chieng() {
    document.getElementById("img").src = "img/chieng.png"
    document.getElementById("name").innerHTML = "Chieng Kung Jie"
    document.getElementById("position").innerHTML = "Manager"
    document.getElementById("age").innerHTML = "20"
    document.getElementById("email").innerHTML = "chiengkungjie@gmal.com"
    document.getElementById("office").innerHTML = "085-8293213"
    document.getElementById("persona").innerHTML = "+6013-123456"
    document.getElementById("what").innerHTML = "+6013245656"
}

function philip() {
    document.getElementById("img").src = "img/philip.png"
    document.getElementById("name").innerHTML = "Philip Ling Tai Yew"
    document.getElementById("position").innerHTML = "Assistant-manager"
    document.getElementById("age").innerHTML = "21"
    document.getElementById("email").innerHTML = "123philipling@gmal.com"
    document.getElementById("office").innerHTML = "085-8123233"
    document.getElementById("persona").innerHTML = "+6013-121321"
    document.getElementById("what").innerHTML = "+6013121321"
}

function ling() {
    document.getElementById("img").src = "img/siew.png"
    document.getElementById("name").innerHTML = "Ling Siew Siew"
    document.getElementById("position").innerHTML = "Secretary"
    document.getElementById("age").innerHTML = "20"
    document.getElementById("email").innerHTML = "lingsiewsiew@gmal.com"
    document.getElementById("office").innerHTML = "085-1236563"
    document.getElementById("persona").innerHTML = "+6013-9999999"
    document.getElementById("what").innerHTML = "+6013999999"
}

function liz() {
    document.getElementById("img").src = "img/liz.png"
    document.getElementById("name").innerHTML = "Liz Wong Wan Qi"
    document.getElementById("position").innerHTML = "Secretary"
    document.getElementById("age").innerHTML = "20"
    document.getElementById("email").innerHTML = "lziwong123@gmal.com"
    document.getElementById("office").innerHTML = "085-5555555"
    document.getElementById("persona").innerHTML = "+6013-5555555"
    document.getElementById("what").innerHTML = "+60135555555"
}

function aida() {
    document.getElementById("img").src = "img/aida.png"
    document.getElementById("name").innerHTML = "Aida Hartini Binti Ismail"
    document.getElementById("position").innerHTML = "Marketing"
    document.getElementById("age").innerHTML = "20"
    document.getElementById("email").innerHTML = "aida1230@gmal.com"
    document.getElementById("office").innerHTML = "085-0000000"
    document.getElementById("persona").innerHTML = "+6013-0000000"
    document.getElementById("what").innerHTML = "+601300000000"
}

function hazwani() {
    document.getElementById("img").src = "img/hazwani.png"
    document.getElementById("name").innerHTML = "Nurul Hazwani Binti Bujang @ Bohari"
    document.getElementById("position").innerHTML = "Marketing"
    document.getElementById("age").innerHTML = "20"
    document.getElementById("email").innerHTML = "Hazwani1234340@gmal.com"
    document.getElementById("office").innerHTML = "085-111111"
    document.getElementById("persona").innerHTML = "+6013-1111111"
    document.getElementById("what").innerHTML = "+60131111111"
}

function najah() {
    document.getElementById("img").src = "img/najah.png"
    document.getElementById("name").innerHTML = "Dayang Najah Aqilah"
    document.getElementById("position").innerHTML = "Marketing"
    document.getElementById("age").innerHTML = "20"
    document.getElementById("email").innerHTML = "dayang_najah123@gmal.com"
    document.getElementById("office").innerHTML = "085-222222"
    document.getElementById("persona").innerHTML = "+6013-2222222"
    document.getElementById("what").innerHTML = "+60132222222"
}

function aziz() {
    document.getElementById("img").src = "img/aziz.png"
    document.getElementById("name").innerHTML = "Ol Abdul Aziz"
    document.getElementById("position").innerHTML = "software architect"
    document.getElementById("age").innerHTML = "20"
    document.getElementById("email").innerHTML = "abdul_aziz123@gmal.com"
    document.getElementById("office").innerHTML = "085-3333333"
    document.getElementById("persona").innerHTML = "+6013-3333333"
    document.getElementById("what").innerHTML = "+6013333333"
}

function carol() {
    document.getElementById("img").src = "img/carol.png"
    document.getElementById("name").innerHTML = "Carolline Engda Anak Kiven"
    document.getElementById("position").innerHTML = "sales representative"
    document.getElementById("age").innerHTML = "20"
    document.getElementById("email").innerHTML = "carolline123@gmal.com"
    document.getElementById("office").innerHTML = "085-8888888"
    document.getElementById("persona").innerHTML = "+6013-88888888"
    document.getElementById("what").innerHTML = "+601388888888"
}

