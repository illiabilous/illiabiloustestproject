/// <reference types="cypress" />


export class logInForm{

    logInButtonClick(){
        const logInButton = cy.contains('h1', 'QA Portal Login').parents('div').find('input[type="submit"]');
        expect(logInButton).to.exist;
        logInButton.click();
    }

    inputEmail(inputemail){
        const emailInput = cy.contains('h1', 'QA Portal Login').parents('div').find('input[name="username"]');
        expect(emailInput).to.exist
        emailInput.type(inputemail);
    }

    inputPassword(inputpassword){
        const emailInput = cy.contains('h1', 'QA Portal Login')
       .parents('div')
       .find('input[name="password"]');
        expect(emailInput).to.exist
        emailInput.type(inputpassword);
    }

    isEmptyUsernameError(){
        cy.contains('h1', 'QA Portal Login')
        .parents('div')
        .find('input[name="username"] + span.help-block')
        .invoke('text')
        .then( text =>{
            expect(text).to.equal('Please enter username.')
        })
    }

    isEmptyPasswordError(){
        cy.contains('h1', 'QA Portal Login').parents('div')
        .find('input[name="password"] + span.help-block')
        .invoke('text').then( text =>{
            expect(text).to.equal('Please enter your password.')
        })
    }
    
    isNoAccFoundError(){
       /* cy.contains('h1', 'QA Portal Login')
        .parents('div').find('input[name="username"] + span.help-block')
        .invoke('text').then( text =>{
            expect(text).to.equal('No account found with that username.')
        })*/

        const errorMessageLabel = cy.contains('h1', 'QA Portal Login')
        .parents('div').find('input[name="username"] + span.help-block');
        expect(errorMessageLabel).to.not.exist;
    }
    
}

export const logForm = new logInForm();
