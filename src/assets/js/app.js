// Initialize Salla Theme
salla.init({
    // Theme Settings
    darkMode: {
        enable: true,
        default: 'light'
    },
    
    // Cart Settings
    cart: {
        autoOpen: false
    },

    // Event Handlers
    onReady: () => {
        // Initialize components when DOM is ready
        initializeComponents();
    }
});

// Initialize Theme Components
function initializeComponents() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('[data-mobile-menu]');
    const mobileMenu = document.querySelector('[data-menu]');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Search Toggle
    const searchBtn = document.querySelector('[data-search]');
    const searchModal = document.querySelector('[data-search-modal]');

    if (searchBtn && searchModal) {
        searchBtn.addEventListener('click', () => {
            searchModal.classList.toggle('hidden');
        });
    }
}

// Handle Product Quick View
salla.event.on('product.quick-view::open', ({ trigger, data }) => {
    // Custom quick view logic
});

// Handle Add to Cart
salla.event.on('cart::add', ({ trigger, data }) => {
    // Custom add to cart logic
});
