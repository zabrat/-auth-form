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
            <section class="star-wars">
                <div class="crawl">
                    <p class="welcomeText">Welcome, dear ${this.userInput}!</br>
                    You are on the site of 3 novice programmers: Behram, Nurlan and zaur!
                    it is our first serious project, but, definitely, not the last one!</p>
                    <audio src="./audio/StarWars.mp3" autoplay="autoplay"></audio>
                </div>
            </section>`;

    }

    registration = event => {
        this.setInputData(event);

        if(this.model.getUserData(this.userInput)){
            alert('this user already exist');
        } else {
        this.model.addUser(this.userInput, this.passwordInput);
        this.showAuthForm(); 
        }
    }
    searchUser = event => {
        this.setInputData(event);

        if(!this.model.getUserData(this.userInput)){
           alert ("We dont have a user with login " + this.userInput);
        } else if (this.model.checkPassword(this.userInput, this.passwordInput)) {
            this.showWelcome();
        } else {
           alert("Check your password correction");
        }
    }

    setInputData = event =>{
        event.preventDefault();

        this.userInput = document.getElementById("user").value;
        this.passwordInput = document.getElementById("password").value;
    }

}
new Modals();