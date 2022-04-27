function validate(){
Fname=document.getElementById('fname').value
Lname=document.getElementById('lname').value
Phone=document.getElementById('phone').value
Dob=document.getElementById('dob').value
Add=document.getElementById('address').value
Email=document.getElementById('email').value
pwd=document.getElementById('spwd').value
cpwd=document.getElementById('cspwd').value


if (Fname.trim()=="")
        {   
            document.getElementById('error1').style.visibility='visible';   
        }
else{
  document.getElementById('error1').style.visibility='hidden';
}

if (Lname.trim()=="")
        {   
            document.getElementById('error2').style.visibility='visible';   
        }
else{
  document.getElementById('error2').style.visibility='hidden';
}

if (Phone.trim()=="")
        {   
            document.getElementById('error3').style.visibility='visible';   
        }
else{
  document.getElementById('error3').style.visibility='hidden';
}

if (Email.trim()=="")
        {   
            document.getElementById('error7').style.visibility='visible';   
        }
else{
  document.getElementById('error7').style.visibility='hidden';
}

if (Dob.trim()=="")
        {   
            document.getElementById('error4').style.visibility='visible';   
        }
else{
  document.getElementById('error4').style.visibility='hidden';
}

if (Add.trim()=="")
        {   
            document.getElementById('error5').style.visibility='visible';
        }
else{
  document.getElementById('error5').style.visibility='hidden';
}

if (pwd!=cpwd){   
        obj=document.getElementById('error6').style.visibility='visible';
      }
else{
  document.getElementById('error6').style.visibility='hidden';
}

if (Fname.trim()!="" && Lname.trim()!="" && Phone.trim()!="" && Dob.trim()!="" && Add.trim()!="" && Email.trim()!="" && pwd==cpwd){
  alert("Registerd Succesfully")
  document.getElementById("register").type="submit";
  document.getElementById("myForm").submit();
} 
}           

function validatepwd(){
  pwd=document.getElementById('spwd').value
  if (pwd.length<5){
      obj=document.getElementById('e1').style.display='block';
      obj=document.getElementById('e1').style.color='red';
  }
  else if (pwd.length>7 && pwd.length<11)
  {
      obj=document.getElementById('e2').style.display='block';
      obj=document.getElementById('e2').style.color='yellow';

  }
  else
  {
      obj=document.getElementById('e3').style.display='block';
      obj=document.getElementById('e3').style.color='green';
  }
}
                 
            