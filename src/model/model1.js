class userDB {
    constructor () {
        this.userBase = [{ user:"bahram", parol:"123" }, { user:"nurlan", parol:"1243" },{ user:"zaur", parol:"1235" }]
    }

    isUserexist (username) {
        
        const found = this.userBase.find(element => username === element.user);

        if(!found){
           console.log ("we dont have a user with login " + username);
        }
                
        return found ;      
    }

    getPassfrDB (username) {
        const elemenet = this.isUserexist(username);
        return elemenet.parol;
    }

    checkPassword (password, username) {
        const parol = this.getPassfrDB(username)
        if (password === parol) 
        {
            console.log("welcome")
        }
        else {
            console.log("Password is incorrect")
        }
    }

}

const base = new userDB()

base.checkPassword("123","bahram")