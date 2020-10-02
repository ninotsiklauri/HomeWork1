function first(name="დავწეროთ ფუნქცია, რომელიც პარამეტრად გადაცემულ ტექსტს დახრის, ქვეშ ხაზს გაუსვამს და გაამუქებს."){
    document.write("<u><i><b>"+name+"</b></i></u>")
 }

function second(x=100, y=150) {
    document.write("100 + 150 = "+(x+y))
}

function third(name="დავწეროთ ფუნქცია, რომელიც პარამეტრად გადაცემულ ტექსტს გამოიტანს ასევე პარამეტრად გადაცემული ზომის შრიფტით.", class_name="fontSize"){
    document.write("<p class="+class_name+">"+name+"</p>")
 }

function fourth() {
    document.getElementById("myTable1").style.width = "400px"
} 

function fifth() {
    document.getElementById("myTable2").style.height = "300px"
}

function sixth() {
    document.getElementById("myTable3").style.width = "400px"
    document.getElementById("myTable3").style.height = "300px"
}

function seventh() {
    document.getElementById("myTable4").style.backgroundColor = "burlywood"
}

function eighth() {
    document.getElementById("myTable5").style.borderWidth = "5px"
}

function ninth() {
    document.getElementById("myTable6").style.width = "400px"
    document.getElementById("myTable6").style.height = "300px"
    document.getElementById("myTable6").style.backgroundColor = "burlywood"
    document.getElementById("myTable6").style.borderWidth = "5px"
}

function eleventh() {
    var text = ""
    var i
    for (i = 1; i < 11; i++) {
      text += i + ","
    }
    document.getElementById("demo").innerHTML = text
}

function twelfth(par="16") {
    var text = ""
    var i
    for (i = 1; i < par; i++) {
      text += i + "<br>"
    }
    document.getElementById("demo1").innerHTML = text;
}

function thirteenth(par1="16", par2="26") {
    var text = ""
    var i
    for (i = par1; i < par2; i++) {
      text += i + "<br>"
    }
    document.getElementById("demo2").innerHTML = text;
}


