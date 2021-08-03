const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        classRemover();
        panel.classList.add('active');
    });
});

const classRemover = () => {
    panels.forEach((panel) => {
        panel.classList.remove('active');
    });
};