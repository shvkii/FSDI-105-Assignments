function createRow(users){
    //travel the array
    for(let i=0; i<users.length;i++){
        //get each one of the user
        
        console.log(users[i]);

        let tmp=`<tr>
                     <th>${users[i].fname}</th>
                     <th>${users[i].lname}</th>
                     <th>${users[i].email}</th>
                     <th>${users[i].age}</th>
                     <th>${users[i].phone}</th>
                     <th>${users[i].address}</th>
                </tr>`;
        console.log(tmp);
        //append
        //document.getElementById("usersTable").innerHTML+=tmp;
        $("#usersTable").append(tmp);
    }
}
function init(){
    console.log("Listing Users")
    var users = readUsers();
    createRow(users);

}
window.onload=init;