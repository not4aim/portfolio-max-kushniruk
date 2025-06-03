document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.project-card');
    const modal = document.getElementById('project-modal');
    const closeBtn = modal.querySelector('.close-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalImg = document.getElementById('modal-img');
    const modalDesc = document.getElementById('modal-desc');

    const projects = [
        {
            title: 'Проєкт 1',
            img: 'img/project1.jpg',
            desc: 'Телеграм-бот на Python, який виконує різні завдання, такі як надсилання повідомлень, обробка команд та інтеграція з API. Створений для автоматизації процесів і покращення взаємодії з користувачами.',
        },
        {
            title: 'Проєкт 2',
            img: 'img/project2.jpg',
            desc: 'Детальний опис проєкту 2...'
        },
        {
            title: 'Проєкт 3',
            img: 'img/project3.jpg',
            desc: 'Детальний опис проєкту 3...'
        }
    ];

    cards.forEach((card, i) => {
        card.addEventListener('click', () => {
            modalTitle.textContent = projects[i].title;
            modalImg.src = projects[i].img;
            modalImg.alt = projects[i].title;
            modalDesc.textContent = projects[i].desc;
            modal.classList.remove('hidden');
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.add('hidden');
    });
});