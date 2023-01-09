function saveToLocalStorage(event){
    event.preventDefault();
    const name=event.target.name.value;
    const email=event.target.email.value;
    const phno=event.target.phoneNumber.value;

    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('phoneNumber',phno);

    const obj={
        name: name,
        email:email,
        phoneNumber:phoneNumber

    }
    localStorage.setItem('userDetail', JSON.stringify(obj));
}