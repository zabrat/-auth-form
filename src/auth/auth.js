class Auth {
    constructor () {          
        this.rootElement = null;
        this.signBtn = null;
        this.userInput = null;
        this.password = null;
        
        this.init()
    }
    init = () => {
        this.rootElement = document.getElementById("root");

        this.createAutform ();


    }
    createAutform = () => {
        const authcontainer = document.createElement("div");
        authcontainer.classList = "auth-container";
        authcontainer.innerHTML = `
        <form class="formAut">
                <h1>Autorisation</h1>
                <label for="user"> username or phone</label>
                <input type="text" name="user" id="user" class="user">
                <label for="password">Password</label>
                <input type="password" name="password" id="password" class="password">
                <button id="signIn" class="signIn" type ="submit" > Sign in</button>
                <span class="regAcc">Sign up new account</span>
        </form>
        `
        this.rootElement.append(authcontainer);
    }
   
};


export default Auth;