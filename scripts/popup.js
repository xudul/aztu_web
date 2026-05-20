const overlay = document.getElementById('overlay');

function popupAc(id) {
    const popup = document.getElementById(id);
    if (!popup) return;
    overlay.classList.add('active');
    popup.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function popupBag(id) {
    const popup = document.getElementById(id);
    if (!popup) return;
    overlay.classList.remove('active');
    popup.classList.remove('active');
    document.body.style.overflow = '';
}

overlay.addEventListener('click', () => {
    document.querySelectorAll('.popup.active').forEach(p => {
        p.classList.remove('active');
    });
    overlay.classList.remove('active');
    document.body.style.overflow = '';
});

document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    document.querySelectorAll('.popup.active').forEach(p => {
        p.classList.remove('active');
    });
    overlay.classList.remove('active');
    document.body.style.overflow = '';
});

document.querySelectorAll('.popup-olcular .popup-olcu').forEach(olcu => {
    olcu.addEventListener('click', function() {
        const qrup = this.closest('.popup-olcular');
        qrup.querySelectorAll('.popup-olcu').forEach(o => o.classList.remove('secildi'));
        this.classList.add('secildi');
    });
});