const cachorro = document.getElementById('cachorro');

cachorro.addEventListener('mouseover', () => {
    cachorro.classList.remove('triste');
    cachorro.classList.add('feliz');
});

cachorro.addEventListener('mouseout', () => {
    cachorro.classList.remove('feliz');
    cachorro.classList.add('triste');
});
