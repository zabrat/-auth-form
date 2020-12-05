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
        this.regContainer.innerHTML = `
        <form method="post">
            <h1>Registration</h1>
            <label for="user">Email or Number</label>
            <input type="text" id="user" class="user" title="Write just number phone or email"pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" autocomplete="off" required >
            <label for="password">Create password</label>
            <input type="password" name="password" id="password" class="password" 
            title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters" 
            pattern="(?=.*[1-9])(?=.*[a-z])(?=.*[A-Z]).{8,}" autocomplete="off" required>
            <button type="submit" id="signUp" class="signUp">Sign up</button>
            <span class="haveAcc">Already have account<span>
        </form>`;
        
        this.rootEl.appendChild(this.regContainer);
    }
}

export default Reg;