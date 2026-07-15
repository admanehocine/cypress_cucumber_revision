Feature: inscription
    Background:
        Given je suis sur le site "https://api.efi-academy.com/e-commerce-test-api/auth/login.php"
    Scenario:inscription
        When je clique sur le boutton creer compte 
        Then je me rederige vers la page "https://api.efi-academy.com/e-commerce-test-api/auth/register.php"
        When je saisie le prenom 
        And je saisie le nom 
        And je saisie l email
        And je saisie le date de naissance
        And je saisie le password
        And je confirme le password
        And je choisi le type de compte
        And je clique sur creer mon compte
        Then ce message est visible "Compte créé avec succès. Vous pouvez maintenant vous connecter."
       


