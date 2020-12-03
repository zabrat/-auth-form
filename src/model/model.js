 class Model {
    constructor(){
        this.dataBase = [{email: 'nurlan@gmail.com', password: 'parol'}, {email: 'zaur@gmail.com', password: 'marol'}];
    }

    isPasswordCorrect = (newPassword, index) => {
        if (newPassword == this.dataBase[index].password) {
            return true;
        } else {
            return false;
        }
    }

    isUserExist = (newEmail, newPassword) => {

        
        // for (let i = 0; i < this.dataBase.length; i++) {
        //     if (newEmail == this.dataBase[i].user){
        //         if(this.isPasswordCorrect(newPassword, i)){
        //             return true;
        //         } else {
        //             alert('Your password is wrong!');
        //             return false;
        //         };
                
        //     }
        // } 
        // alert("This Email isn't exist");
    }
     
    addUser = (newEmail, newPassword) => {
        this.dataBase.push({user: newEmail, password: newPassword});
    }

}

export default Model;


