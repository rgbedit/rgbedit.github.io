  //Created by SuperCatMaster special for site RGB MARK
  //All in this project are open source.
  function changeColor(){
    var r = document.getElementById("r").value;
    var g = document.getElementById("g").value;
    var b = document.getElementById("b").value;
    var br = r - "10";
    var bg = g - "10";
    var bb = b - "10";
    document.getElementById("egg").style.backgroundColor = "rgb("+ r +", "+ g +", "+ b +")";
    document.getElementById("footer").style.backgroundColor = "rgb("+ r +", "+ g +", "+ b +")";
    document.body.style.backgroundColor = "rgb("+ br +", "+ bg +", "+ bb +")";
    setTimeout("changeColor()", 50);
  }
  function setRed(){
    document.getElementById("r").value = 255;
    document.getElementById("g").value = 0;
    document.getElementById("b").value = 0;
  }
  function setGreen(){
    document.getElementById("r").value = 0;
    document.getElementById("g").value = 255;
    document.getElementById("b").value = 0;
  }
  function setBlue(){
    document.getElementById("r").value = 0;
    document.getElementById("g").value = 0;
    document.getElementById("b").value = 255;
  }
  function setWhite(){
    document.getElementById("r").value = 255;
    document.getElementById("g").value = 255;
    document.getElementById("b").value = 255;
  }
  function setBlack(){
    document.getElementById("r").value = 0;
    document.getElementById("g").value = 0;
    document.getElementById("b").value = 0;
  }
  function getRGB(){
    var r = document.getElementById("r").value;
    var g = document.getElementById("g").value;
    var b = document.getElementById("b").value;
    alert("Значение цветовой схемы RGB: " + "rgb("+ r +", "+ g +", "+ b +")");
  }
  function openDialog(){
    document.getElementById('dialog').showModal();
  }

  function closeDialog(){
    document.getElementById('dialog').close();
  }