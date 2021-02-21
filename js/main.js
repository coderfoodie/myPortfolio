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
    document.body.classList.toggle("hidden-scrolling")
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
            if (screenshots.length === 1) {
                prevBtn.style.display = "none"
                nextBtn.style.display = "none"
            } else {
                prevBtn.style.display = "block"
                nextBtn.style.display = "block"
            }
            slideIndex = 0
            popupToggle()
            popupSlideshow()
            popupDetails()
        }
    })

    closeBtn.addEventListener("click", () => {
        popupToggle()
        if (projectDetailsCont.classList.contains("active")) {
            popupDetailsToggle()
        }
    })

    function popupToggle() {
        popup.classList.toggle("open")
        bodyScrollingToggle()
    }

    function popupSlideshow() {
        const imgSrc = screenshots[slideIndex]
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
    // next slide index
    nextBtn.addEventListener("click", () => {
        if (slideIndex ===  screenshots.length - 1) {
            slideIndex = 0
        } else {
            slideIndex++
        }
        popupSlideshow()
    })

    // prev slide
    prevBtn.addEventListener("click", () => {
        if (slideIndex === 0) {
            slideIndex + (screenshots.length - 1)
        } else {
            slideIndex--
        }
        popupSlideshow()
    })

    function popupDetails() {
        // if detail does not exists
        if (!portfolioItems[itemIndex].querySelector(".portfolio-item-details")) {
            projectDetailsBtn.style.display = "none"
            return //end function execution
        } else {
            projectDetailsBtn.style.display = "block"
            // get the details
            const details = portfolioItems[itemIndex].querySelector(".portfolio-item-details").innerHTML
            popup.querySelector(".pp-project-details").innerHTML = details
            // get the project title
            const title = portfolioItems[itemIndex].querySelector(".portfolio-item-title").innerHTML
            popup.querySelector(".pp-title h2").innerHTML = title
            // get the project category
            const category =  portfolioItems[itemIndex].getAttribute("data-category")
            popup.querySelector(".pp-project-category").innerHTML = category.split("-").join(" ")
        }
    }

    projectDetailsBtn.addEventListener("click", () => {
        popupDetailsToggle()
    })

    function popupDetailsToggle() {
        if (projectDetailsCont.classList.contains("active")) {
            // projectDetailsBtn.querySelector(".pp-project-details-btn i").classList.remove("fa-minus")
            // projectDetailsBtn.querySelector(".pp-project-details-btn i").classList.add("fa-plus")
            projectDetailsCont.classList.remove("active")
            projectDetailsCont.style.maxHeight = 0 + "px"
        } else {
            // projectDetailsBtn.querySelector(".pp-project-details-btn i").classList.remove("fa-plus")
            // projectDetailsBtn.querySelector(".pp-project-details-btn i").classList.add("fa-minus")
            projectDetailsCont.classList.add("active")
            projectDetailsCont.style.maxHeight = projectDetailsCont.scrollHeight + "px"
            popup.scrollTo(0, projectDetailsCont.offsetTop)
        }
    }

})();

// testimonial


// contact