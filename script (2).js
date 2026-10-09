document.addEventListener('DOMContentLoaded', function () {
    // 1. Dynamic Copyright Year
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Mobile Hamburger Navigation Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIconOpen = document.getElementById('menu-icon-open');
    const menuIconClose = document.getElementById('menu-icon-close');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function () {
            const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
            mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
            mobileMenu.classList.toggle('hidden');
            menuIconOpen.classList.toggle('hidden');
            menuIconClose.classList.toggle('hidden');
        });

        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function () {
                mobileMenu.classList.add('hidden');
                menuIconOpen.classList.remove('hidden');
                menuIconClose.classList.add('hidden');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // 3. Price Filter Buttons Logic
    const filterBtns = document.querySelectorAll('.price-filter-btn');
    const priceCards = document.querySelectorAll('.price-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const category = this.getAttribute('data-category');

            // Reset buttons styling
            filterBtns.forEach(b => {
                b.classList.remove('bg-brand-deep', 'text-white', 'shadow-md');
                b.classList.add('bg-white', 'text-brand-dark', 'hover:bg-brand-pale', 'border', 'border-brand-soft/40');
            });

            // Highlight active button
            this.classList.remove('bg-white', 'text-brand-dark', 'hover:bg-brand-pale', 'border', 'border-brand-soft/40');
            this.classList.add('bg-brand-deep', 'text-white', 'shadow-md');

            // Filter pricing cards
            priceCards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // 4. FAQ Accordion Logic
    const faqToggles = document.querySelectorAll('.faq-toggle');

    faqToggles.forEach(toggle => {
        toggle.addEventListener('click', function () {
            const content = this.nextElementSibling;
            const icon = this.querySelector('i');
            const isExpanded = this.getAttribute('aria-expanded') === 'true';

            if (isExpanded) {
                content.classList.add('hidden');
                icon.style.transform = 'rotate(0deg)';
                this.setAttribute('aria-expanded', 'false');
            } else {
                content.classList.remove('hidden');
                icon.style.transform = 'rotate(180deg)';
                this.setAttribute('aria-expanded', 'true');
            }
        });
    });

    // 5. Copy Address Button Logic
    const copyAddressBtn = document.getElementById('copy-address-btn');
    const copyToast = document.getElementById('copy-toast');
    const copyBtnText = document.getElementById('copy-btn-text');
    const fullAddress = "Jl. Elang Sakti, Simpang Baru, Kec. Binawidya, Kota Pekanbaru, Riau 28293, Indonesia.";

    if (copyAddressBtn) {
        copyAddressBtn.addEventListener('click', function () {
            const tempInput = document.createElement('textarea');
            tempInput.value = fullAddress;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand('copy');
            document.body.removeChild(tempInput);

            if (copyBtnText) copyBtnText.textContent = 'Tersalin!';
            if (copyToast) copyToast.classList.remove('hidden');

            setTimeout(() => {
                if (copyBtnText) copyBtnText.textContent = 'Salin Alamat';
                if (copyToast) copyToast.classList.add('hidden');
            }, 3000);
        });
    }

    // 6. Quick WhatsApp Form Generator
    const waQuickForm = document.getElementById('wa-quick-form');
    if (waQuickForm) {
        waQuickForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const name = document.getElementById('form-name').value;
            const service = document.getElementById('form-service').value;
            const note = document.getElementById('form-note').value;

            let message = `Halo Maqwa Laundry, saya ${name}. Saya berminat dengan layanan ${service}.`;
            if (note.trim() !== '') {
                message += ` Catatan: ${note}.`;
            }
            message += ` Mohon informasi lebih lanjut. Terima kasih!`;

            const encodedMessage = encodeURIComponent(message);
            const waUrl = `https://wa.me/6282364392030?text=${encodedMessage}`;
            window.open(waUrl, '_blank');
        });
    }

    // 7. Scroll to Top Button
    const backToTopBtn = document.getElementById('back-to-top');
    window.addEventListener('scroll', function () {
        if (!backToTopBtn) return;
        if (window.scrollY > 400) {
            backToTopBtn.classList.remove('hidden');
            backToTopBtn.classList.add('flex');
        } else {
            backToTopBtn.classList.add('hidden');
            backToTopBtn.classList.remove('flex');
        }
    });

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
