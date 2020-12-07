class Auth {
    constructor () {          
        this.signBtn = null;
        this.password = null;
        this.userInput = null;
        this.rootElement = null;
        
        this.init();
    }

    init = () => {
        this.rootElement = document.getElementById("root");

        this.createAutform();
    }

    createAutform = () => {
        const authcontainer = document.createElement("div");
        authcontainer.classList = "auth-container";
        authcontainer.innerHTML = `
        <form class="formAut" id="form">
                <h1>Autorisation</h1>
                <label for="user"> Login</label>
                <input type="text" id="user" class="user" autocomplete="off" required>
                <label for="password">Password</label>
                <input type="password" id="password" class="password" autocomplete="off" required>
                <button id="signIn" class="signIn"> Sign in</button>
                <span class="regAcc">Sign up new account</span>
        </form>
        `
        this.rootElement.append(authcontainer);
    }
   
};

export default Auth;