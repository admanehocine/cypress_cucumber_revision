class inscriptionpom{
element={
    prenom:()=>cy.get("#register-prenom"),
    nom:()=>cy.get("#register-nom"),
    email:()=>cy.get('#register-email'),
    datbirth:()=>cy.get('#register-date-naissance'),
    password:()=>cy.get('#register-date-naissance'),
    confipass:()=>cy.get('#register-password-confirm'),
    typecompte:()=>cy.get('#register-role'),
    btncreercompte:()=>cy.get('#register-submit')
}
// definir les methode
saisirpren(p){
    this.element.prenom().type(p)
}
saisirnom(n){
    this.element.nom().type(n)
}
saisiremail(e){
    this.element.email().type(e)
}
saisirbirthday(b){
    this.element.datbirth().type(b)
}
saisirmdp(pass){
    this.element.password().type(pass)
}
saisircmdp(cpass){
    this.element.confipass().type(cpass)
}
choisirClient() {
    this.element.typecompte().select('Client');
}
clickcreercompte(){
   this.element.btncreercompte().click();
}
}
export default new inscriptionpom()

