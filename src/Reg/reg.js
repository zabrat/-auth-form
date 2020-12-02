 import './style.less';

class Reg{
    constructor(){
        this.rootEl = null;
        this.userInputEl = null;
        this.passwordInputEl = null;
        this.signUpButton = null;

        this.init();
    }

    init = () => {
        this.rootEl = document.getElementById("root");

        this.createRegForm();

        this.signUpButton = document.getElementById("signUp");
        this.signUpButton.addEventListener("click", this.getInputData);
        

    }

    createRegForm = () => {
        const regContainer = document.createElement("div");
        regContainer.classList = "reg-container";
        const regEx = '(^(\+994[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$|[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$)';
        regContainer.innerHTML = `
        <form>
                <h1>Registration</h1>
                <label for="email">Email or Number</label>
                <input type="text" name="email" id="email" class="email" title="Write just number phone or email">
                <label for="password">Create password</label>
                <input type="password" name="password" id="password" class="password">
                <button type="submit" id="signUp" class="signUp">Sign up</button>
        </form>`
        this.rootEl.appendChild(regContainer);
    }

    getInputData = event => {
        event.preventDefault();
        this.userInputEl = document.getElementById("email").value;
        this.passwordInputEl = document.getElementById("password").value;   
    }
}

new Reg();