function saveToLocalStorage(event){
    event.preventDefault();
    const name=event.target.name.value;
    const email=event.target.email.value;
    const phoneNumber=event.target.phoneNumber.value;

//    localStorage.setItem('name', name);
//     localStorage.setItem('email', email);
//     localStorage.setItem('phoneNumber',phno);

    const obj={
        name,
        email,
        phoneNumber
    }
axios.post("https://crudcrud.com/api/d574b1c7ded44ac985502e78c1e9fd76/appointmentData",obj)
.then((response)=>{
    showUserOnScreen(response.data)
    //console.log(response)
})
.catch((err)=>{
    document.body.innerHTML=document.body.innerHTML+"<h4> Something went wrong </h4>"
    console.log(err)
})

//    localStorage.setItem(obj.name, JSON.stringify(obj));
   //   localStorage.setItem(obj.email, JSON.stringify(obj));
   //localStorage.setItem(obj.phoneNumber, JSON.stringify(obj));

   //showUserOnScreen(obj);
}
function showUserOnScreen(obj){
    const parentElem=document.getElementById('users');
    const childElem=document.createElement('li')
    childElem.textContent=obj.name +' - '+obj.email+' - '+obj.phoneNumber;

    // parentElem.innerHTML= parentElem.innerHTML + `${obj.name} - ${obj.email} - ${obj.phoneNumber}`;

    const deleteButton=document.createElement('input')
    deleteButton.type="button"
    deleteButton.value="Delete"
    deleteButton.onclick= () => {
        localStorage.removeItem(obj.email)
        parentElem.removeChild(childElem)
    }

    const editButton=document.createElement('input')
    editButton.type="button"
    editButton.value="Edit"
    editButton.onclick= () => {
        localStorage.removeItem(obj.email)
        parentElem.removeChild(childElem)
        document.getElementById('name').value=obj.name;
        document.getElementById('email').value=obj.email;
        document.getElementById('phoneNumber').value=obj.phoneNumber;
    }
    childElem.appendChild(editButton)
    childElem.appendChild(deleteButton)
    parentElem.appendChild(childElem)

}