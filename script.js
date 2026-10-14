
        const filters = document.querySelectorAll('.filter');
        const cards = document.querySelectorAll('.card');
        filters.forEach((button) => button.addEventListener('click', () => {
            const category = button.dataset.filter;
            filters.forEach((item) => {
                const selected = item === button;
                item.classList.toggle('active', selected);
                item.setAttribute('aria-pressed', String(selected));
            });
            cards.forEach((card) => { card.hidden = category !== 'all' && card.dataset.category !== category; });
        }));
        document.getElementById('subscribe-form').addEventListener('submit', (event) => {
            event.preventDefault();
            document.getElementById('form-message').textContent = 'Thanks for stopping by! Newsletter sign-up is coming soon.';
            event.currentTarget.reset();
        });
    