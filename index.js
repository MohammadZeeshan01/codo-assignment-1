

function myfun(){
   var name= document.getElementById("uname");
   var age= document.getElementById("uage");
   var quali= document.getElementById("uqualification");
  
   if(name.value=="" || age.value=="" || quali.value=="")
   {
       alert("No blank values allowed");
        return false;
   }
   else{
       true;
   }

   var cv=document.getElementById("cv");
   if(cv.value=="")
   {
    alert("CV is not selected");
    return false;
}
else{
   true;  
   }




    var a = document.forms.genders;
    for(i=0; i<a.length;i++){
        if(a[i].checked==true)
        return true;

    }
    document.getElementById("messages").innerHTML="**Please Select anyone**"
    return false;
}


// API

function fetch(){
    $.ajax({
        url:"https://run.mocky.io/v3/16375822-6d22-4d61-b131-6672e9e13884",
        type:"POST",
        dataType:"JSON",
        data:JSON.stringify({ }),
        success:function(data){
            $('name').appered("<input>",JSON.stringify(data)+"</input>")
            $('age').appered("<input>",JSON.stringify(data)+"</input>")
            $('gender').appered("<input>",JSON.stringify(data)+"</input>")
            $('qualification').appered("<input>",JSON.stringify(data)+"</input>")
            $(' about').appered("<input>",JSON.stringify(data)+"</input>")
            $('cv').appered("<input>",JSON.stringify(data)+"</input>")
        }
    })
}