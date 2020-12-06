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
        const formEl = document.getElementById("form");
        const haveAcc = document.querySelector(".haveAcc");

        formEl.addEventListener("submit", this.registration);
        haveAcc.addEventListener("click", this.showAuthForm);

    }

    showAuthForm = () => {
        this.rootEl.innerHTML = '';
        this.authForm = new Auth();

        const formEl = document.getElementById("form");
        const regAcc = document.querySelector(".regAcc");

        formEl.addEventListener("submit", this.searchUser);
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
        
        if(this.model.getUserData(this.userInput)){
            alert('this user already exist');
        } else {
        this.model.addUser(this.userInput, this.passwordInput);
        console.log(this.model.dataBase)
        this.showAuthForm(); 
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

}
new Modals();