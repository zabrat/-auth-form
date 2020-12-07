 class Model {
    constructor(){
        this.dataBase = [{user: 'nurlan', password: 'parol'}, {user: 'zaur@gmail.com', password: 'marol'}];
    }
     
    addUser = (newUser, newPassword) => {
        this.dataBase.push({user: newUser, password: newPassword});
    }


    getUserData = userName => this.dataBase.find(element => userName === element.user);      
    

    checkPassword = (userName, password) => {
        const passwordFromDb = this.getUserData(userName).password;
        
        return passwordFromDb === password;
    } 
}

export default Model;