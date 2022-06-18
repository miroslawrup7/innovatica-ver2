// LIGHTBOX

const lightbox = document.querySelector("#lightbox");
const imgWrapper = document.querySelector(".img-wrapper");
const gallery = document.querySelector(".gallery-box");
const closeBtn = document.querySelector(".close-btn");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

const lightboxSet = () => {
    const images = gallery.querySelectorAll("img");
    const titleWrapper = document.querySelector(".img-wrapper > .img-title");
    let clickedImageIdx = null;

    images.forEach((image, idx) => {
        image.addEventListener("click", () => {
            if (idx === 0) {
                prevBtn.classList.add("disabled");
            }
            if (idx === images.length - 1) {
                nextBtn.classList.add("disabled");
            }
            lightbox.classList.add("active");

            clickedImageIdx = idx;

            const img = document.createElement("img");
            img.src = image.src;

            const title = document.createElement("p");
            title.innerText = image.alt;

            if (imgWrapper.querySelector(".img-wrapper > img")) {
                imgWrapper.removeChild(
                    imgWrapper.querySelector(".img-wrapper > img")
                );
            }
            imgWrapper.prepend(img);

            if (titleWrapper.querySelector("p")) {
                titleWrapper.removeChild(titleWrapper.querySelector("p"));
            }
            titleWrapper.appendChild(title);

            prevBtn.addEventListener("click", handlePrevBtn);
            nextBtn.addEventListener("click", handleNextBtn);
        });
    });

    closeBtn.addEventListener("click", () => {
        lightbox.classList.remove("active");
        prevBtn.classList.remove("disabled");
        nextBtn.classList.remove("disabled");
        prevBtn.removeEventListener("click", handlePrevBtn);
        nextBtn.removeEventListener("click", handleNextBtn);
    });

    const handlePrevBtn = () => {
        const actualImg = imgWrapper.querySelector(".img-wrapper > img");
        const titleBox = imgWrapper.querySelector(".img-title > p");

        if (clickedImageIdx > 0) {
            nextBtn.classList.remove("disabled");
            actualImg.src = images[clickedImageIdx - 1].src;
            actualImg.alt = images[clickedImageIdx - 1].alt;
            titleBox.innerText = actualImg.alt;
            clickedImageIdx = clickedImageIdx - 1;
        }
        if (clickedImageIdx === 0) {
            prevBtn.classList.add("disabled");
        }
    };

    const handleNextBtn = () => {
        const actualImg = imgWrapper.querySelector(".img-wrapper > img");
        const titleBox = imgWrapper.querySelector(".img-title > p");

        if (clickedImageIdx < images.length - 1) {
            prevBtn.classList.remove("disabled");
            actualImg.src = images[clickedImageIdx + 1].src;
            actualImg.alt = images[clickedImageIdx + 1].alt;
            titleBox.innerText = actualImg.alt;
            clickedImageIdx = clickedImageIdx + 1;
        }
        if (clickedImageIdx === images.length - 1) {
            nextBtn.classList.add("disabled");
        }
    };
};

// LIGHTBOX PAGINATION
const previous = document.querySelector(".prevPage");
const next = document.querySelector(".nextPage");
const galleryBox = document.querySelector(".gallery-box");
const pagesLoc = document.querySelector(".pages");

const pad = "000";
let imgs = [];

for (i = 0; i < 72; i++) {
    let title =
        pad.substring(0, pad.length - (i + 1).toString().length) +
        (i + 1).toString();
    imgs.push({
        title: title,
        source: `./img/gallery/${title}.jpg`,
    });
}

const perPage = 12;
let page = 1;
let pagesNumber = Math.ceil(imgs.length / perPage);

for (i = 0; i < pagesNumber; i++) {
    const div = document.createElement("div");
    const pageNumber = document.createTextNode(i + 1);
    div.classList.add("page");
    div.setAttribute("data-index", i);
    div.appendChild(pageNumber);

    div.addEventListener("click", function (e) {
        goToPage(e.target.getAttribute("data-index"));
    });

    pagesLoc.appendChild(div);
}

previous.addEventListener("click", function () {
    if (page === 1) {
        page = 1;
    } else {
        page--;
        showImages();
    }
});

next.addEventListener("click", function () {
    if (page < pagesNumber) {
        page++;
        showImages();
    }
});

const goToPage = (index) => {
    index = parseInt(index);
    page = index + 1;
    showImages();
};

const showImages = () => {
    while (galleryBox.firstChild) {
        galleryBox.removeChild(galleryBox.firstChild);
    }

    let offset = (page - 1) * perPage;
    const pages = document.querySelectorAll(".page");

    for (i = 0; i < pages.length; i++) {
        pages[i].classList.remove("active");
    }

    pages[page - 1].classList.add("active");

    for (i = offset; i < offset + perPage; i++) {
        if (imgs[i]) {
            const img = document.createElement("img");

            img.setAttribute("src", imgs[i].source);
            img.setAttribute("alt", imgs[i].title);

            gallery.appendChild(img);
        }
    }
    lightboxSet();
};

showImages();
