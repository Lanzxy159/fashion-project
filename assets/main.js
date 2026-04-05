// Navbar//
const navbar = document.querySelector('.navbar-section');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


// Results Tab and Features//

const featureCards = document.querySelectorAll('.feature-card');
const resultsGrid = document.getElementById('resultsGrid');

const data = {
    trending: [
        "https://images.unsplash.com/photo-1529139574466-a303027c1d8b",
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
        "https://images.unsplash.com/photo-1483985988355-763728e1935b"
    ],
    upvoted: [
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
        "https://images.unsplash.com/photo-1509631179647-0177331693ae",
        "https://images.unsplash.com/photo-1539008835657-9e8e9680c956"
    ],
    featured: [
        "https://images.unsplash.com/photo-1521335629791-ce4aec67dd47",
        "https://images.unsplash.com/photo-1485968579580-b6d095142e6e",
        "https://images.unsplash.com/photo-1509631179647-0177331693ae"
    ]
};

function renderResults(type) {
    resultsGrid.innerHTML = "";

    data[type].forEach(src => {
        const div = document.createElement("div");
        div.classList.add("result-card");

        div.innerHTML = `
            <div class="image-wrapper">
                <img src="${src}" alt="">
            </div>
        `;

        resultsGrid.appendChild(div);
    });
}

featureCards.forEach(card => {
    card.addEventListener("click", () => {
        const type = card.getAttribute("data-type");
        renderResults(type);
    });
});

