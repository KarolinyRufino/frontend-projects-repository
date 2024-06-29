document.addEventListener('DOMContentLoaded', () => {
    const addUser = document.querySelector('.add-user');
    const showHomePage = document.querySelector('#show-homePage');
    const showLoginUser = document.querySelector('#show-loginUser');
    const userList = document.querySelectorAll('#listAccount li');
    const accountBtn = document.querySelector('#account-btn');

    function showScreen(homePageVisible) {
        if (homePageVisible) {
            showHomePage.style.display = "block";
            showLoginUser.style.display = "none";
            localStorage.setItem('currentScreen', 'home');
        } else {
            showHomePage.style.display = "none";
            showLoginUser.style.display = "block";
            localStorage.setItem('currentScreen', 'login')
        }
    }

    addUser.addEventListener('click', () => {
        alert('Você ja possui o limite máximo de contas criadas.')
    });

    userList.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            showScreen(true);
        });
    });

    accountBtn.addEventListener('click', () => {
        showScreen(false)
    });

    const savedScreen = localStorage.getItem('currentScreen');
    if (savedScreen === 'home') {
        showScreen(true);
    } else {
        showScreen(false);
    }
});