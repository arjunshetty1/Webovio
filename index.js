const btn = document.getElementById('btn');
const change = document.getElementById('change');

btn.addEventListener('click', () => {
    console.log('yes');

    if (change.style.display === 'none') {
        change.style.display = 'block';
    } else {
        change.style.display = 'none';
    }
});
