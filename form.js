
//AZ űrlap elérése,eseménykezelő hozzáadása, esemény objektum hozzáadása
document.getElementById('userForm').addEventListener('submit', (e) =>{
    //Űrlap viselkedés letiltása(csak adat forrás)
    e.preventDefault();
//Fromdata objektum létrehozása, az űrlap-esemény hozzáadása 
    const myFromData = new FormData(e.target);
    //Az űrlap adatait tároló objektum létrehozása    
    const userData = Object.fromEntries(myFromData);
    console.log(userData)

    const userJSON = JSON.stringify(userData,null,2);
    localStorage.setItem('userDataKey', userJSON);

})
