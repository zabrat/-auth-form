 class Model {
    constructor(){
        this.dataBase = [{user: 'nurlan', password: 'parol'}, {user: 'zaur@gmail.com', password: 'marol'}];
    }
     
    addUser = (newUser, newPassword) => {
        this.dataBase.push({user: newUser, password: newPassword});
    }


    getUserData = (userName) => {
        const found = this.dataBase.find(element => userName === element.user);
                
        return found ;      
    }

    checkPassword = (userName, password) => {
        const passwordFromDb = this.getUserData(userName).password;

        if (passwordFromDb === password){
            return true;
        } else {
            return false;
        }
    } 
}

export default Model;