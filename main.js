function saveToLocalStorage(event){
    event.preventDefault();
    const name=event.target.name.value;
    const email=event.target.email.value;
    const phoneNumber=event.target.phoneNumber.value;

//    // localStorage.setItem('name', name);
//     localStorage.setItem('email', email);
//     localStorage.setItem('phoneNumber',phno);

    const obj={
        name,
        email,
        phoneNumber
    }
//    localStorage.setItem(obj.name, JSON.stringify(obj));
      localStorage.setItem(obj.email, JSON.stringify(obj));
   //localStorage.setItem(obj.phoneNumber, JSON.stringify(obj));

   showUserOnScreen(obj);
}
function showUserOnScreen(obj){
    const parentElem=document.getElementById('users');
    parentElem.innerHTML=parentElem.innerHTML + `${obj.name} - ${obj.email} - ${obj.phoneNumber}`;

}