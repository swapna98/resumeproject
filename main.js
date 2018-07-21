function Loadjson(file,callback){
  var x = new XMLHttpRequest();
  x.overrideMimeType("application/json");
  x.open("GET",file,true);
  x.onreadystatechange=function(){
    if(x.readyState === 4 && x.status == "200"){
      callback(x.responseText);
    }
  };
  x.send(null);
}

 Loadjson("data.json",function(text){
   var data= JSON.parse(text);
   console.log(data);
   basics(data.details);
   basics1(data.career);
   basics2(data.education);
   basics3(data.keyskills);
   basics4(data.achievements);
 })
 var child1 = document.querySelector(".child1");
 function basics(det)
 {
   var image= document.createElement("img");
   image.src=det.image;
   child1.appendChild(image);

   var name= document.createElement("h4");
   name.textContent = det.name;
   child1.appendChild(name);

   var phoneno= document.createElement("h4");
   phoneno.textContent = det.phoneno;
   child1.appendChild(phoneno);

   var email=document.createElement("a");
   email.href="mailtomanneswapna02@gmail.com";
   email.textContent = det.email;
   child1.appendChild(email);

   var ad= document.createElement("h3");
   ad.textContent = "Address:";
   child1.appendChild(ad);

   var hr= document.createElement("hr");
   child1.appendChild(hr);

   var Address= document.createElement("Address");
   Address.textContent = det.Address;
   child1.appendChild(Address);
 }

   var child2 = document.querySelector(".child2");

   function basics1(car)
   {
     var care= document.createElement("h3");
     care.textContent = "career objective";
     child2.appendChild(care);

     var hr= document.createElement("hr");
     child2.appendChild(hr);

     var info= document.createElement("h3");
     info.textContent=car.info;
     child2.appendChild(info);

     var hr= document.createElement("hr");
     child2.appendChild(hr);
   }

  function basics2(edu)
  {
    var ed= document.createElement("h3");
    ed.textContent = "EDUCATIONAL QUALIFICATION";
    child2.appendChild(ed);

    var hr= document.createElement("hr");
    child2.appendChild(hr);

    for(i=0;i<edu.length;i++)
    {
     var deg= document.createElement("h2");
    deg.textContent = edu[i].degree;
    child2.appendChild(deg);

    var ul= document.createElement("h3");
    var li= document.createElement("li");
    li.textContent = edu[i].institute;
    ul.appendChild(li);
    child2.appendChild(ul);

    var li2= document.createElement("li");
    li2.textContent = edu[i].date;
    ul.appendChild(li2);
    child2.appendChild(ul);
  }
}
  function basics3(key)
  {
    var te= document.createElement("h2");
    te.textContent = "technical skills";
    child2.appendChild(te);

    var hr= document.createElement("hr");
    child2.appendChild(hr);

    var skilltable=document.createElement("table");
    skilltable.border="1";
    child2.appendChild(skilltable);

    tabledata=""
    for(i=0;i<key.length;i++)
    {
     tabledata+="<tr><td>"+key[i].title+"</td><td>"+key[i].info+"</td></tr>"
   }
   skilltable.innerHTML=tabledata;
  }

  function basics4(achi)
{
  var ac=document.createElement("h2");
  ac.textContent="Achievements";
  child2.appendChild(ac);

  var hr=document.createElement("hr");
  child2.appendChild(hr);
  for(i=0;i<achi.length;i++)
  {
    var cg=document.createElement("h5");
    cg.textContent=achi[i].college;
    child2.appendChild(cg);

 var ul=document.createElement("ul");
 var li=document.createElement("li");
 li.textContent=achi[i].event;
 ul.appendChild(li);
 child2.appendChild(ul);

 var li3=document.createElement("li");
 li3.textContent=achi[i].prize;
 ul.appendChild(li3);
 child2.appendChild(ul);

  }
}
