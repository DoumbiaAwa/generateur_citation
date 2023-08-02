document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('myform'); // Correction : utiliser l'ID 'myform' pour sélectionner le formulaire
    form.addEventListener('submit', function(event) {
      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;
  
      if (email !== 'awa80598@gmail.com') {
        alert('Email incorrect.');
        return false;
      }
  
      if (password !== '1234') {
        alert('Votre mot de passe est incorrect.');
        return false;
      }
  
      
    });
    event.preventDefault();
  });
 
document.addEventListener('DOMContentLoaded', function() {
  const citation = [
    {
      auteur: "Albert Einstein",
      contenu: "La créativité est contagieuse, faites-la tourner."
    },
    {
      auteur: "Walt Disney",
      contenu: "La meilleure façon de prédire l'avenir est de le créer."
    },
    {
      auteur: "Nelson Mandela",
      contenu: "L'éducation est l'arme la plus puissante qu'on puisse utiliser pour changer le monde."
    }
  ];

  const genererCitation = () => {
    // Sélectionnez une citation aléatoire du tableau citations
    const randomIndex = Math.floor(Math.random() * citation.length);
    const randomCitation = citation[randomIndex];

    // Affichez la citation dans la div avec l'ID 'citation'
    const citationDiv = document.getElementById('citation');
    citationDiv.innerHTML = `
      <h3><strong>Auteur:</strong> ${randomCitation.auteur}</h3>
      <p><strong></strong> ${randomCitation.contenu}</p>
    `;
  };

  const btnGenerer = document.getElementById('generer');
  btnGenerer.addEventListener('click', genererCitation);
});
