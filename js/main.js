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
    const filterCont = document.querySelector(".portfolio-filter"),
    portfolioItemsCont = document.querySelector(".portfolio-items"),
    portfolioItems = document.querySelector(".portfolio-item"),
    popup = document.querySelector(".portfolio-popup"),
    prevBtn = popup.querySelector(".pp-prev"),
    nextBtn = popup.querySelector(".pp-next"),
    closeBtn = popup.querySelector(".pp-close"),
    projectDetailsCont = popup.querySelector(".pp-details"),
    projectDetailsBtn = popup.querySelector(".pp-project-details-btn");
    let itemIndex, slideIndex, screenshots;
    
    
    // filter portfolio items
    filterCont.addEventListener("click", (e) => {
        if (e.target.classList.contains("filter-item") && 
        !e.target.classList.contains("active")) {
            // deactivate current active
            filterCont.querySelector(".active").classList.remove("outer-shadow", "active");
            // activate new filter
            e.target.classList.add("active", "outer-shadow");
            const target = e.target.getAttribute("data-target");
            [portfolioItems].forEach((item) => {
                if (target === item.getAttribute("data-category")) {
                    item.classList.remove("hide");
                    item.classList.add("show");
                } else {
                    item.classList.remove("show");
                    item.classList.add("hide");
                }
            })
        }
    });
})();


// testimonial


// contact