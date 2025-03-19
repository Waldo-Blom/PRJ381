document.querySelector('.see-more').addEventListener('click', () => {
    const secondGroupWrapper = document.querySelector('.second-group-wrapper');
    secondGroupWrapper.classList.remove('hidden');
    document.querySelector('.see-more').classList.add('hidden');
    document.querySelector('.hide-names').classList.remove('hidden');
});

document.querySelector('.hide-names').addEventListener('click', () => {
    const secondGroupWrapper = document.querySelector('.second-group-wrapper');
    secondGroupWrapper.classList.add('hidden');
    document.querySelector('.see-more').classList.remove('hidden');
    document.querySelector('.hide-names').classList.add('hidden');
});