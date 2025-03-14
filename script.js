// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Modal functionality
const modal = document.getElementById('enrollmentModal');
const enrollButtons = document.querySelectorAll('.enroll-button');
const closeModal = document.querySelector('.close');

enrollButtons.forEach(button => {
    button.addEventListener('click', () => {
        modal.style.display = 'flex';
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

function downloadSample(sampleNumber) {
    const selectedProgram = document.querySelector('#programSelect').value;
    
    // Pour les pigeons premium
    if(selectedProgram === 'scam' || sampleNumber === 3) {
        alert('Erreur 418 : Formation réservée aux vrais losers\n(En réalité nos avocats ont tout bloqué)');
        window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
        return;
    }

    // Pour les pigeons ordinaires
    const fakePdfs = [
        'formations/Fondation_de_la_richesse_sample.pdf',
        'formations/Accélérateur_de_Liberté_Financière_sample.pdf',
    ];
    
    // Redirection aléatoire pour brouiller les pistes
    window.location.href = fakePdfs[sampleNumber - 1] + `?ref=${Date.now()}`;
    
    // Analytics pour cibler les plus crédules
    console.log(`Pigeon ${selectedProgram} a cliqué sur sample ${sampleNumber}`);
}