// MOBILE MENU
const nav = document.querySelector(".navigation");
const ham = document.querySelector(".hamburger");
const container = document.querySelector(".container");
const header = document.querySelector("header");
const content = document.querySelector(".head-content");
const logo = document.querySelector(".logo");

ham.addEventListener("click", (e) => {
    nav.classList.add("mobile-open");
    container.classList.add("mobile-open");
    header.classList.add("mobile-open");
    content.classList.add("mobile-open");
    logo.classList.add("mobile-open");
    ham.classList.add("mobile-open");
});

document.addEventListener("click", (e) => {
    if (!e.target.closest(".navigation") && !e.target.closest(".hamburger")) {
        nav.classList.remove("mobile-open");
        container.classList.remove("mobile-open");
        header.classList.remove("mobile-open");
        content.classList.remove("mobile-open");
        logo.classList.remove("mobile-open");
        ham.classList.remove("mobile-open");
    }
});

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

if (pagesLoc) {
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
}

// LANGUAGES
const language = document.querySelectorAll(".languages > li");

language.forEach(function (el) {
    el.addEventListener("click", (e) => {
        let lang = e.target.dataset.lang;

        saveLng(lang);

        languageSet(lang);
    });
});

const languageSet = (lang) => {
    document.querySelectorAll(`[data-lang]`).forEach((el) => {
        el.classList.remove("active");
    });

    if (lang) {
        document.querySelector(`[data-lang=${lang}]`).classList.add("active");
    } else {
        document.querySelector('[data-lang="pl"]').classList.add("active");
    }

    for (let objKey in h_translate[lang]) {
        document.getElementById(objKey).innerText = h_translate[lang][objKey];
    }

    for (let objKey in q_translate[lang]) {
        document.getElementById(objKey).innerText = q_translate[lang][objKey];
    }

    for (let objKey in f_translate[lang]) {
        document.getElementById(objKey).innerText = f_translate[lang][objKey];
    }

    if (document.body.dataset.page === "home") {
        for (let objKey in ch_translate[lang]) {
            document.getElementById(objKey).innerText =
                ch_translate[lang][objKey];
        }

        for (let objKey in ch_translate_html[lang]) {
            document.getElementById(objKey).innerHTML =
                ch_translate_html[lang][objKey];
        }
    }

    if (document.body.dataset.page === "about") {
        for (let objKey in ca_translate[lang]) {
            document.getElementById(objKey).innerText =
                ca_translate[lang][objKey];
        }

        for (let objKey in ca_translate_html[lang]) {
            document.getElementById(objKey).innerHTML =
                ca_translate_html[lang][objKey];
        }
    }

    if (document.body.dataset.page === "services") {
        for (let objKey in cs_translate[lang]) {
            document.getElementById(objKey).innerText =
                cs_translate[lang][objKey];
        }

        for (let objKey in cs_translate_html[lang]) {
            document.getElementById(objKey).innerHTML =
                cs_translate_html[lang][objKey];
        }
        if (lang === "de") {
            document
                .querySelector(".services-2 .circle-imgs")
                .classList.add("lng-de");
            document
                .querySelector(".services-2 .button")
                .classList.add("lng-de");
        } else {
            document.querySelector(".circle-imgs").classList.remove("lng-de");
            document
                .querySelector(".services-2 .button")
                .classList.remove("lng-de");
        }
    }

    if (document.body.dataset.page === "portfolio") {
        for (let objKey in cp_translate[lang]) {
            document.getElementById(objKey).innerText =
                cp_translate[lang][objKey];
        }
    }

    if (document.body.dataset.page === "contact") {
        for (let objKey in cc_translate[lang]) {
            document.getElementById(objKey).innerText =
                cc_translate[lang][objKey];
        }
    }
};

// IndexedDB

const createDB = () => {
    let openRequest = indexedDB.open("languageDB", 1);

    openRequest.onupgradeneeded = function () {
        let db = openRequest.result;
        if (!db.objectStoreNames.contains("language")) {
            db.createObjectStore("language", { autoIncrement: true });
        }
    };
};

createDB();

const saveLng = (lng) => {
    let openRequest = indexedDB.open("languageDB");

    openRequest.onsuccess = function () {
        let db = openRequest.result;
        let transaction = db.transaction("language", "readwrite");
        let languageTrans = transaction.objectStore("language");

        let lang = lng;

        let request = languageTrans.put(lang, "lang");

        request.onsuccess = function () {};

        request.onerror = function () {
            console.log("Error", request.error);
        };
    };
};

const getLng = () => {
    let openRequest = indexedDB.open("languageDB");

    openRequest.onsuccess = function () {
        let db = openRequest.result;
        let transaction = db.transaction("language");
        let languageTrans = transaction.objectStore("language");

        let request = languageTrans.get("lang");

        request.onsuccess = function () {
            languageSet(request.result);
        };

        request.onerror = function () {
            console.log("Error", request.error);
        };
    };
};

getLng();
// languageSet();
