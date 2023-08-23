const btn = document.getElementById('btn');
const change = document.getElementById('change');
const bg = document.getElementById('bg-clr')

btn.addEventListener('click', () => {
    console.log('yes');

    if (change.style.display === 'none') {
        change.style.display = 'block';
    } else {
        change.style.display = 'none';
    }
});


