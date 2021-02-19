/// <reference types="cypress" />
import {logForm} from '../support/LogInForm.js'

const inputemail = Cypress.env('username')
const inputpassword = Cypress.env('password')

describe('suite', ()=>{

    beforeEach('open website', () =>{
        cy.visit('/');
    })

    it('auth', () =>{
        logForm.inputEmail(inputemail);
        logForm.inputPassword(inputpassword);
        logForm.logInButtonClick();
    })

    it('allEmptyInputs', () =>{
        logForm.logInButtonClick();
        logForm.isEmptyUsernameError();
        logForm.isEmptyPasswordError();
        
    })

    it('wrongEmail', () =>{
        
        logForm.inputEmail(inputemail);
        logForm.inputPassword(inputpassword);
        logForm.logInButtonClick();
        logForm.isNoAccFoundError();
                
    })
})