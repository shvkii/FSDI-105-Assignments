console.log("User register");


class User{
    constructor(email,pass,first,last,age,address,phone,payment,color){
        //this.attr=parameter;
        this.email=email;
        this.password=pass;
        this.fname=first;
        this.lname=last;
        this.age=age;
        this.address=address;
        this.phone=phone;
        this.payment=payment;
        this.color=color;
    }
}


function isValid(user){
    //return false when the user is not valid
    //return tru when the user is valid
    let valid=true;
    //We reset the original appearance all inputs
    // by removing the error class (see style.css)
    $("input").removeClass("error");
    if(user.fname.length == 0){
        //it is an invalid name
        valid=false;
        $("#txtFirst").css("border-color", "red")
    }
    if(user.lname.length <= 0){
        //it is an invalid name
        valid=false;
     }
     if(user.password.length ==0){
        //is not a valid value
        $("#txtPassword").addClass("error");
        valid = false;
     }
     if(user.email.length == 0){
         //is not a valid value
         $("#txtEmail").addClass("error")
         valid = false;
     }
    return valid;
}


function clearInputs(){
    $("#txtEmail").val();
    $("#txtPassword").val();
    $("#txtFirst").val();
    $("#txtLast").val();
    $("#txtAge").val();
    $("#txtAddress").val();
    $("#txtPhone").val();
    $("#selPayment").val();
    $("#txtColor").val();
}








function registerUser(){
  
   let email = $("#txtEmail").val();//****check your id on the HTML
   let password = $("#txtPassword").val();
   let first=$("#txtFirst").val();
   let last = $("#txtLast").val();
   let age = $("#txtAge").val();
   let address = $("#txtAddress").val();
   let phone = $("#txtPhone").val();
   let payment = $("#selPayment").val();
   let color=$("#txtColor").val();
   let user=new User(email,password,first,last,age,address,phone,payment,color);
    if(isValid(user)){
       saveUser(user);
    }
   
    console.log(user);

}

function init(){
    console.log("Init function");
    $("#btnSave").click(registerUser);

}
window.onload=init;