// about section
(() => {
    const aboutSect = document.querySelector(".about-section"),
    tabsCont = document.querySelector(".about-tabs");

    tabsCont.addEventListener("click", (e) => {
        if (e.target.classList.contains("tab-item") && !e.target.classList.contains("active")) {
            const target = e.target.getAttribute("data-target")
            console.log(target);
            // deactivate existing active 'tab-item'
            tabsCont.querySelector(".active").classList.remove("outer-shadow", "active");
            // activate new tab-item
            e.target.classList.add("active", "outer-shadow");
            // deactivate existing active 'tab-content;
            aboutSect.querySelector(".tab-content.active").classList.remove("active");
            //  activate new tab-content
            aboutSect.querySelector(target).classList.add("active");
        }
    });
})();

// services



// portfolio filter and popup
(() => {
    const filterContainer = document.querySelector(".portfolio-filter")
    const portolioItemsCont = document.querySelector(".portfolio-items")
    const portfolioItems = document.querySelectorAll(".portfolio-item")
    const popup = document.querySelector(".portfolio-popup")
    const prevBtn = popup.querySelector(".pp-prev")
    const nextBtn = popup.querySelector(".pp-next")
    const closeBtn = popup.querySelector(".pp-close")
    const projectDetailsCont = popup.querySelector(".pp-details")
    const projectDetailsBtn = popup.querySelector(".pp-project-details-btn")
    let itemIndex, slideIndex, screenshots

    // filter items
    filterContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("filter-item") && !e.target.classList.contains("active")) {
            // deactivate existing active filte item
            filterContainer.querySelector(".active").classList.remove("outer-shadow", "active")
            // activate new filter item
            e.target.classList.add("active", "outer-shadow")
            const target = e.target.getAttribute("data-target")
            console.log(target);
            portfolioItems.forEach((item) => {
                if (target === item.getAttribute("data-category") || target === 'all') {
                    item.classList.remove("hide")
                    item.classList.add("show")
                } else {
                    item.classList.remove("show")
                    item.classList.add("hide")
                }
            })
        }
    })

})();

// testimonial


// contact