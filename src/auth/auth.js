class Authform {
    constructor () {          
        this.rootElement = null;
        this.signBtn = null;
        this.userInput = null;
        this.password = null;
        this.init()
    }
    init = () => {
        this.rootElement = document.getElementById("root")

        this.createAutform ()

        this.signbtn = document.getElementById("signin")

        this.signbtn = addEventListener( "submit", this.getInputvalues )
    }
    createAutform = () => {
        const authcontainer = document.createElement("div");
        authcontainer.classList = "auth-container";
        authcontainer.innerHTML = `
        <form class="formAut">
                <h1>Autorisation</h1>
                <label id="username" class = "username" for="username"> username or phone</label>
                <input id="userninput" class="userninput" placeholder="Username or phone"
                type="email||number" required>
                <label id="password" class = "password" for="password">Password</label>
                <input required id="passwordinput" class="passwordinput" placeholder="password" type="password" required >
                <button id="signin" class="signin" type ="submit" > Sign in</button>
                <a href="https://youtu.be/CQeezCdF4mk">Forget username or password</a>
        </form>
        `
        this.rootElement.append(authcontainer);
    }

    getInputvalues = event => {
        event.preventDefault()
        this.userInput = document.getElementById("userninput").value;
        this.password = document.getElementById("passwordinput").value;
    }
   
};


export default Authform;