(function($) {

	"use strict";

	$(".toggle-password").click(function() {

  $(this).toggleClass("fa-eye fa-eye-slash");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});

})(jQuery);

const username=document.getElementById("username-field");
const password=document.getElementById("password-field");
const signUp=document.getElementById("signup-btn");
signUp.addEventListener('click',e=>{
  e.preventDefault();
  const usernameValue=username.value;
  const passwordValue=password.value;
  const auth=firebase.auth();
  
  console.log(usernameValue);
  console.log(passwordValue);
  if(usernameValue==""){
      alert("Please enter your username");
  }
  else if(passwordValue==""){
      alert("Please enter your password");
  }
  else{
    auth.createUserWithEmailAndPassword(usernameValue, passwordValue).then(user =>{
      alert('Succesfully signed up');
  }).catch(err => {
      alert(err.message);
  });
    
    
  }

});
