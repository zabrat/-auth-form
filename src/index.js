import './reg-styles.less';
import './auth-styles.less';
import './welcome-styles.less';

import mp3 from './audio/StarWars.mp3';


import Reg from "./reg/reg.js";
import Auth from "./auth/auth.js";
import Model from "./model/model.js";

class Modals {
    constructor(){
        this.model = null;
        this.rootEl = null;
        this.regForm = null;
        this.authForm = null;
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
                    <audio controls autoPlay src=${mp3}></audio>
                </div>
            </section>`;

    }

    registration = event => {
        event.preventDefault();
        this.setInputData();
        if(this.checkPasswordValidation() && this.checkUserValidation()){
            if(this.model.getUserData(this.userInput)){
                alert('this user already exist');
            } else {
            this.model.addUser(this.userInput, this.passwordInput);
            console.log(this.model.dataBase)
            this.showAuthForm(); 
            }
        }else{
            alert("Password must contain at least 8 symbols, login must contain at least 4 symbols")
        }
    }

    searchUser = event => {
        event.preventDefault();
        this.setInputData();

        if(!this.model.getUserData(this.userInput)){
           alert ("We dont have a user with login " + this.userInput);
        } else if (this.model.checkPassword(this.userInput, this.passwordInput)) {
            this.showWelcome();
        } else {
           alert("Check your password correction");
        }
    }

    

    setInputData = () =>{
        this.userInput = document.getElementById("user").value;
        this.passwordInput = document.getElementById("password").value;
    }

    checkPasswordValidation = () =>{
        const password =/.{8,}/;

        return password.test(this.passwordInput);
    }

    checkUserValidation = () =>{
        const userName =/.{4,}/;

        return userName.test(this.userInput);
    }

}
new Modals();