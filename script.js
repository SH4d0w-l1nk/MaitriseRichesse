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
    
    const fakePdfs = [
        'formations/Fondation_de_la_richesse_sample.pdf',
        'formations/Accélérateur_de_Liberté_Financière_sample.pdf',
        'formations/Mastermind_des_Millionnaire_sample.pdf'
    ];
    
    window.location.href = fakePdfs[sampleNumber - 1] + `?ref=${Date.now()}`;
    
    console.log(`Pigeon ${selectedProgram} a cliqué sur sample ${sampleNumber}`);
}