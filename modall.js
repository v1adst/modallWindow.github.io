const modal = document.querySelector('.modal');
const modalNameElement = document.getElementById('modalName');
const overlay = document.createElement('div');
overlay.classList.add('overlay');

document.body.appendChild(overlay);

const modalMessages = {
    modal1: "I'm the modal window 1 😍",
    modal2: "I'm the modal window 2 🚀",
    modal3: "I'm the modal window 3 🎉"
};

const buttons = document.querySelectorAll('.modalButton');
buttons.forEach((button, index) => {
    button.addEventListener('click', function () {
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        modalNameElement.textContent = modalMessages[`modal${index + 1}`];
        modal.style.display = 'block';
        overlay.style.display = 'block'; 
        document.body.classList.add('blur'); //blure background
    });
});

const closeButton = document.querySelector('#close-modal-button');
closeButton.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

function closeModal() {
    modal.style.display = 'none';
    overlay.style.display = 'none'; // hide background
    document.body.classList.remove('blur'); // excludet blure
    buttons.forEach(btn => btn.classList.remove('active')); // delete class active
}