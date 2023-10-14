// function clicked(){
//    eform=document.getElementById('email-form');
// document.getElementById('email-template').innerHTML=eform.value;
// document.getElementById('password-template').innerHTML=document.getElementById('password-form').value;


//    console.log(eform)
//    console.log(document.getElementById('email-template'))
// }

// function handle(){
//    const eform=document.getElementById('email-form').value;
//    const pform=document.getElementById('password-form').value;

//    Storage.setItem('Email',eform);
//    localStorage.setItem('Password',pform);

//    document.location.href="cv-template.html";

//    return;

// }
function addNewWeField() {

   let newNode = document.createElement("textarea");
   newNode.classList.add("form-control");
   newNode.classList.add("weField");
   newNode.classList.add("mt-2");
   newNode.setAttribute("rows", 2);
   newNode.setAttribute("placeholder", "Enter here");

   let weOb = document.getElementById("we");
   let weAddButtonOb = document.getElementById("weAddButton");

   weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAqField() {

   let newNode = document.createElement("textarea");
   newNode.classList.add("form-control");
   newNode.classList.add("eqField");
   newNode.classList.add("mt-2");
   newNode.setAttribute("rows", 2);
   newNode.setAttribute("placeholder", "Enter here");

   let aqOb = document.getElementById("aq");
   let aqAddButtonOb = document.getElementById("aqAddButton");

   aqOb.insertBefore(newNode, aqAddButtonOb);
}


function generateResume() {
   const nameField = document.getElementById("nameField").value;
   const contactField = document.getElementById("contactField").value;
   const mailField = document.getElementById("mailField").value;
   const addressField = document.getElementById("addressField").value;
   const fbField = document.getElementById("fbField").value;
   const instaField = document.getElementById("instaField").value;
   const linkedField = document.getElementById("linkedField").value;
   const objectiveField = document.getElementById("objectiveField").value;




   localStorage.setItem('Name', nameField);
   localStorage.setItem('Contact', contactField);
   localStorage.setItem('Mail', mailField);
   localStorage.setItem('Address', addressField);
   localStorage.setItem('Fb', fbField);
   localStorage.setItem('Insta', instaField);
   localStorage.setItem('Linked', linkedField);
   localStorage.setItem('Objective', objectiveField);

   // Work Experience
   var arr = [];
   for (var i = 0; i < $("#we").find(".weField").length; i++) {

      var obj = {};
      $("#we").find(".weField").eq(i).val();
      obj["we"] = $("#we").find(".weField").eq(i).val().trim();
      arr.push(obj);
   }
   console.log(arr)
   localStorage.setItem("workExperience", JSON.stringify({ "weArr": arr }));

   // Academic Qualification

   var arr2 = [];
   for (var i = 0; i < $("#aq").find(".eqField").length; i++) {

      var obj2 = {};
      $("#aq").find(".eqField").eq(i).val();
      obj2["aq"] = $("#aq").find(".eqField").eq(i).val().trim();
      arr2.push(obj2);
   }
   console.log(arr2)
   localStorage.setItem("academiQualification", JSON.stringify({ "aqArr": arr2 }));


   // Image Field

  





}


oFReader = new FileReader();

oFReader.onload = function (oFREvent) {

    // alert(oFREvent.target.result)
    // document.getElementById("fotoImg").src = oFREvent.target.result;
    // document.getElementById("fotoImg").style.visibility = "visible";
    //    screenHeight = screenHeight - 120;
    //    document.getElementById("fotoImg").style.height = screenHeight;
    //document.getElementById("stringImg").innerText = "Data Image: " + oFREvent.target.result;

         localStorage.setItem("obj", oFREvent.target.result)

}

$("#imgField").change(function () {
    var input = document.getElementById('imgField');
    var oFile = input.files[0];
   
    oFReader.readAsDataURL(oFile);

});

