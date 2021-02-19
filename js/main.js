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

function bodyScrollingToggle() {
    document.body.classList.toggle("stop-scrolling")
}

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

    portolioItemsCont.addEventListener("click", (e) => {
        if (e.target.closest(".portfolio-item-inner")) {
            const portfolioItem = e.target.closest(".portfolio-item-inner").parentElement
            // get the portfolio item index
            itemIndex = Array.from(portfolioItem.parentElement.children).indexOf(portfolioItem)
            screenshots = portfolioItems[itemIndex].querySelector(".portfolio-item-img img").getAttribute("data-screenshots")
            // convert ss to array
            screenshots = screenshots.split(",")
            slideIndex = 0
            popupToggle()
            popupSlideshow()
        }
    })

    closeBtn.addEventListener("click", () => {
        popupToggle()
    })

    function popupToggle() {
        popup.classList.toggle("open")
        bodyScrollingToggle()
    }

    function popupSlideshow() {
        const imgSrc = screenshots[slideIndex]
        console.log(imgSrc);
        const popupImg = popup.querySelector(".pp-img")
        // activate loader untill the popupImg loaded
        popup.querySelector(".pp-loader").classList.add("active")
        popupImg.src=imgSrc
        popupImg.onload = () => {
            // deactivate loader after the popupImg loaded
            popup.querySelector(".pp-loader").classList.remove("active")
        }
        popup.querySelector(".pp-counter").innerHTML = (slideIndex + 1) + " of " + screenshots.length
    }

})();

// testimonial


// contact