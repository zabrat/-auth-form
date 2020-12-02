// import './style.less';


let dataBase = [{email: 'nurlan@gmail.com', password: 'parol'}, {email: 'zaur@gmail.com', password: 'marol'}]; 


function isUserExist(newEmail, newPassword){
    for (let i = 0; i < dataBase.length; i++) {
        if (newEmail == dataBase[i].email){
            isPasswordCorrect(newPassword, i);
        }
    } 
    return console.log('This Email isnt exist');
}



function isPasswordCorrect(newPassword, index) {
    if (newPassword == dataBase[index].password) {
         return console.log('You are welcome');
    } else {
        return console.log('Enter the correct password');
    }
}


function addUser(newEmail, newPassword){
    dataBase.push({email: newEmail, password: newPassword});
    return dataBase;
}



// // isUserExist('zaur@gmail.com');
// // isPasswordCorrect('zaur@gmail.com', 'marol');
// addUser('ASAsd' , "wewqewqe");
//isUserExist()

