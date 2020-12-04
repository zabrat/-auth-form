import './reg-styles.less';
import './auth-styles.less';
import './welcome-styles.less';

import Reg from "./reg/reg.js";
import Auth from "./auth/auth.js";
import Model from "./model/model.js";

class Modals {
    constructor(){
        this.rootEl = null;
        this.regForm = null;
        this.authForm = null;
        this.model = null;
        this.userInput = null;
        this.passwordInput = null;

        this.init();
        this.showRegForm();
    }

    init = () => {
        this.rootEl = document.getElementById('root');
        this.model = new Model();
    }

    showRegForm = () => {
        this.rootEl.innerHTML = '';
        this.regForm = new Reg();
        const signUpBtn = document.getElementById("signUp");
        const haveAcc = document.querySelector(".haveAcc");

        signUpBtn.addEventListener("click", this.registration);
        haveAcc.addEventListener("click", this.showAuthForm);

    }

    showAuthForm = () => {
        this.rootEl.innerHTML = '';
        this.authForm = new Auth();

        const signInBtn = document.getElementById("signIn");
        const regAcc = document.querySelector(".regAcc");

        signInBtn.addEventListener("click", this.searchUser);
        regAcc.addEventListener("click", this.showRegForm);
    }

    showWelcome = () => {
        this.rootEl.innerHTML = `
            <div class="fade"></div>

            <section class="star-wars">
                <div class="crawl">
                    <div class="title">
                    <p>Episode IV</p>
                    <h1>A New Hope</h1>
                    </div>
                    <p>Welcome</p>
                </div>
            </section>`;

    }

    registration = event => {
        this.setInputData(event);
        this.model.addUser(this.userInput, this.passwordInput);
        console.log(this.model.dataBase)
        this.showAuthForm(); 
    }

    searchUser = event => {
        this.setInputData(event);
        
        this.model.isUserExist();

        if (true){
            this.showWelcome();
        }
    }

    setInputData = event =>{
        event.preventDefault();

        this.userInput = document.getElementById("user").value;
        this.passwordInput = document.getElementById("password").value;
    }

}
new Modals();