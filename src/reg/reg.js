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
        const regEx = '(^(\+994[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$|[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$)';
        this.regContainer.innerHTML = `
        <form>
            <h1>Registration</h1>
            <label for="user">Email or Number</label>
            <input type="text" name="user" id="user" class="user" title="Write just number phone or email" pattern="${regEx}">
            <label for="password">Create password</label>
            <input type="password" name="password" id="password" class="password">
            <button type="submit" id="signUp" class="signUp">Sign up</button>
            <span class="haveAcc">Already have account<span>
        </form>`;
        
        this.rootEl.appendChild(this.regContainer);
    }
}

export default Reg;