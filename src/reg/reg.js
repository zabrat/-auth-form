class Reg{
    constructor(){
        this.rootEl = null;
        this.signUpButton = null;
        this.regContainer = null;
        
        this.init();
    }

    init = () => {
        this.rootEl = document.getElementById("root");

        this.createRegForm();
    }

    createRegForm = () => {
        this.regContainer = document.createElement("div");
        this.regContainer.classList = "reg-container"; 
        const regPassword = '(?=.*[1-9])(?=.*[a-z])(?=.*[A-Z]).{8,}';    
        this.regContainer.innerHTML = `
        <form id="form">
            <h1>Registration</h1>
            <label for="user">Create login</label>
            <input type="text" id="user" class="user" minlength="4" autocomplete="off" required >
            <label for="password">Create password</label>
            <input type="password" id="password" class="password" 
            title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters" 
            pattern="${regPassword}" autocomplete="off" required>
            <button id="signUp" class="signUp">Sign up</button>
            <span class="haveAcc">Already have account<span>
        </form>`;
        
        this.rootEl.appendChild(this.regContainer);
    }
}

export default Reg;