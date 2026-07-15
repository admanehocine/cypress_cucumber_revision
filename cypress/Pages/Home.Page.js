class homepom{
    //definie l ensemble des locators
    element={
    creecompte:()=>cy.get('#nav-register'),
    }
    
    // defenir les methodes
    cliccreercompte(){
        this.element.creecompte().click()
    }
}
export default new homepom()