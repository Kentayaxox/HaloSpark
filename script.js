// Attach click handlers when the page is ready
window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.buy-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-product-id');
            alert(`Thanks for choosing product ${id}!`);
        });
    });
});

