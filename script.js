document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("coordonneesForm");

    // Vérifier s'il y a des données enregistrées dans le Local Storage
    if (localStorage.getItem("nom")) {
        document.getElementById("nom").value = localStorage.getItem("nom");
    }
    if (localStorage.getItem("email")) {
        document.getElementById("email").value = localStorage.getItem("email");
    }
    if (localStorage.getItem("telephone")) {
        document.getElementById("telephone").value = localStorage.getItem("telephone");
    }

    // Sauvegarde des données lors de la soumission du formulaire
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Empêche le rechargement de la page

        // Récupérer les valeurs des champs
        const nom = document.getElementById("nom").value;
        const email = document.getElementById("email").value;
        const telephone = document.getElementById("telephone").value;

        // Enregistrer dans Local Storage
        localStorage.setItem("nom", nom);
        localStorage.setItem("email", email);
        localStorage.setItem("telephone", telephone);

        alert("Vos coordonnées ont été sauvegardées !");
    });
});
