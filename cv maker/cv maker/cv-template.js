window.addEventListener('load',()=>{
    // const Em=localStorage.getItem('Email');
    // const Ps=localStorage.getItem('Password');
    // console.log("jhguy")
    //  console.log(sessionStorage.getItem("Name1"))
    document.getElementById('nameT1').innerHTML=localStorage.getItem('Name');
    document.getElementById('nameT2').innerHTML=localStorage.getItem("Name");
    document.getElementById('contactT').innerHTML=localStorage.getItem("Contact");
    document.getElementById('mailT').innerHTML=localStorage.getItem("Mail");
    document.getElementById('addressT').innerHTML=localStorage.getItem("Address");
   // document.getElementById('fbT').innerHTML=localStorage.getItem("Fb");
    // document.getElementById('instaT').innerHTML=localStorage.getItem("Insta");
    // document.getElementById('linkedT').innerHTML=localStorage.getItem("Linked");
    document.getElementById('objectiveT').innerHTML=localStorage.getItem("Objective");

   // Work Experience
    x=localStorage.getItem("workExperience");
   val=JSON.parse(x);


    let str=''
   for(var i=0;i<val['weArr'].length;i++){
    console.log(val['weArr'][i]['we'])
    str=str+ `<li> ${val['weArr'][i]['we']} </li>`;
   }
    document.getElementById('weT').innerHTML=str;

// Academic Qualification
 y=localStorage.getItem("academiQualification");
   val2=JSON.parse(y);


    let str2=''
   for(var i=0;i<val2['aqArr'].length;i++){
    // console.log(val['aqArr'][i]['aq'])
    str2=str2+ `<li> ${val2['aqArr'][i]['aq']} </li>`;
   }
    document.getElementById('aqT').innerHTML=str2;


    // let ShowImg=localStorage.getItem()

    const ShowImg= localStorage.getItem("img");
    
  $(document).ready(function(){
     var FB=localStorage.getItem("Fb");
     $('#fbT').attr('href',FB)

     var INS=localStorage.getItem("Insta");
     $('#instaT').attr('href',INS)

     var LIK=localStorage.getItem("Linked");
     $('#linkedT').attr('href',LIK)
  })
   
   
   
 }) 




           var x=localStorage.getItem('obj');
           
           document.getElementById("imgT").src = x;

 function printResume(el){
   const invoice = document.getElementById("ResumeBody");
           console.log(invoice);
         console.log(window);    
           html2pdf().from(invoice).save();
  }

