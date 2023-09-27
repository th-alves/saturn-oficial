const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modal = document.getElementById('modal');
const loginTab = document.getElementById('loginTab');
const signupTab = document.getElementById('signupTab');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const body = document.body;

openModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
    loginTab.classList.add('active');
    signupTab.classList.remove('active');
    loginForm.style.display = 'block';
    signupForm.style.display = 'none';
    body.classList.add('open');
    
    // Ocultar o botão "Abrir Modal" quando o modal é aberto
    openModalBtn.style.display = 'none';
});

closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    body.classList.remove('open');
    
    // Mostrar o botão "Abrir Modal" quando o modal é fechado
    openModalBtn.style.display = 'block';
});

loginTab.addEventListener('click', () => {
    loginTab.classList.add('active');
    signupTab.classList.remove('active');
    loginForm.style.display = 'block';
    signupForm.style.display = 'none';
});

signupTab.addEventListener('click', () => {
    signupTab.classList.add('active');
    loginTab.classList.remove('active');
    signupForm.style.display = 'block';
    loginForm.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
        body.classList.remove('open');
        openModalBtn.style.display = 'block';
    }
});

modal.style.display = 'none';
