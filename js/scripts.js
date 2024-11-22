// Initialisation AOS
AOS.init({
    duration: 1000, // Animation duration
    easing: 'ease-in-out', // Easing function
    once: true, // Animate only once
});

// GSAP Animation for the Bug Button
const testButton = document.getElementById('test-button');
testButton.addEventListener('click', () => {
    gsap.to(testButton, {
        duration: 1,
        backgroundColor: 'green',
        color: 'white',
        innerHTML: "Je fonctionne maintenant !",
        scale: 1.2,
    });

    // Revenir à l'état initial après 1 seconde
    gsap.to(testButton, {
        duration: 0.5,
        scale: 1,
        delay: 1,
    });
});

// SweetAlert2 for the Exercise Button
// Validation de la réponse de l'utilisateur
const validateButton = document.getElementById('validate-button');
validateButton.addEventListener('click', () => {
    const selectedOption = document.querySelector('input[name="error"]:checked');

    if (!selectedOption) {
        // Si aucun choix n'est sélectionné
        Swal.fire({
            title: 'Erreur',
            text: 'Veuillez sélectionner une réponse avant de valider.',
            icon: 'warning',
            confirmButtonText: 'OK',
        });
        return;
    }

    const userAnswer = selectedOption.value;

    // Vérification de la réponse
    if (userAnswer === 'Exampel') {
        // Bonne réponse
        Swal.fire({
            title: 'Bravo !',
            text: 'Vous avez trouvé la bonne réponse : "Exampel" devrait être "Exemple".',
            icon: 'success',
            confirmButtonText: 'Continuer',
        });
    } else {
        // Mauvaise réponse
        Swal.fire({
            title: 'Oups !',
            text: 'Ce n’est pas la bonne réponse. Essayez encore.',
            icon: 'error',
            confirmButtonText: 'Réessayer',
        });
    }
});
