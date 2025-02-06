const apiUrl = "https://67a49c20c0ac39787a1bdd7c.mockapi.io/coordonnees"; // Mets ton URL ici

document.addEventListener("DOMContentLoaded", function () {
    loadTableData();

    const form = document.getElementById("coordonneesForm");
    
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const nom = document.getElementById("nom").value;
        const email = document.getElementById("email").value;
        const telephone = document.getElementById("telephone").value;

        fetch(apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nom, email, telephone })
        }).then(response => response.json())
          .then(() => {
              alert("Coordonnées enregistrées !");
              form.reset();
              loadTableData();
          });
    });
});

function loadTableData() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById("tableBody");
            tableBody.innerHTML = "";
            
            data.forEach(entry => {
                let tr = document.createElement("tr");
                tr.innerHTML = `<td>${entry.nom}</td><td>${entry.email}</td><td>${entry.telephone}</td>`;
                tableBody.appendChild(tr);
            });
        });
}
