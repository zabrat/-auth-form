import './style.less';
class Authform {
    constructor () {          
        this.rootElement = null;
        this.signbtn = null;
        this.userinput = null;
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
                <h1>Autorisation page</h1>
                <label id="username" class = "username" for="username">Username or phone</label>
                <input id="userninput" class="userninput" placeholder="Username or phone"
                type="email||number" required  
                title="must contain email or phone number">
                <label id="password" class = "password" for="password">Password</label>
                <input required pattern="(?=.*[a-z]).{8,32}"
                title="Must contain at least one lowercase letter appear anywhere, and at least
                8 and no more 32 characters"id="passwordinput" class="passwordinput" placeholder="password" type="password" required >
                <button id="signin" class="signin" type ="submit" > Sign in</button>
        </form>
        `
        this.rootElement.append(authcontainer);
    }

    getInputvalues = event => {
        event.preventDefault()
        this.user = document.getElementById("userninput").value;
        this.password = document.getElementById("passwordinput").value;
        //checkInputvalues ( user, password ) 
    }
   
};

new Authform()