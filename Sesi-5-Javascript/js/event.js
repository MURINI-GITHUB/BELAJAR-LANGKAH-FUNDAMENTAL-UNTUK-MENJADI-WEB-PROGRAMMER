function onchangetest() {
   if (document.getElementById("select").value == "1") {
      alert("Selamat anda mendapatkan juara 1");
   }
   else if (document.getElementById("select").value == "2") {
      alert("Selamat anda mendapatkan juara 2");
   }
   else if (document.getElementById("select").value == "3") {
      alert("Selamat anda mendapatkan juara 3");
   }
}

function onclicktest() {
   document.getElementById("tampilonclick").innerHTML = "Hello, World!";
}

function onmouseovertest() {
   document.getElementById("paragraf").style.fontWeight = "bold";
   document.getElementById("paragraf").style.width = "20%";
}

function onmouseouttest() {
   document.getElementById("paragraf").style.fontWeight = "normal";
   document.getElementById("paragraf").style.width = "40%";
}

function onkeydowntest() {
   alert("Anda sedang menekan keyboard!");
}