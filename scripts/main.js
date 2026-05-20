const olculer = document.querySelectorAll(".olcu");

olculer.forEach(olcu => {
    olcu.addEventListener("click", () => {

        const parent = olcu.parentElement;

        parent.querySelectorAll(".olcu").forEach(item => {
            item.classList.remove("aktiv");
        });

        olcu.classList.add("aktiv");
    });
});

const sebet = [];

const butonlar = document.querySelectorAll(".kart-btn");

butonlar.forEach((btn) => {

    btn.addEventListener("click", () => {

        const kart = btn.closest(".kart");

        const ad = kart.querySelector(".kart-ad").textContent;
        const qiymet = kart.querySelector(".kart-giymet").textContent;

        const aktivOlcu = kart.querySelector(".olcu.aktiv");

        if (!aktivOlcu) {
            alert("Zəhmət olmasa ölçü seçin");
            return;
        }

        const olcu = aktivOlcu.textContent;

        sebet.push({
            ad,
            qiymet,
            olcu
        });

        btn.textContent = "ƏLAVƏ EDİLDİ ✓";

        setTimeout(() => {
            btn.textContent = "SƏBƏTƏ ƏLAVƏ ET";
        }, 1500);

        console.log(sebet);
    });

});

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {
        header.classList.add("header-active");
    } else {
        header.classList.remove("header-active");
    }

});

const kolleksiyaBtn = document.querySelector(".banner a");
const mehsullar = document.querySelector(".mehsullar");

kolleksiyaBtn.addEventListener("click", (e) => {

    e.preventDefault();

    mehsullar.scrollIntoView({
        behavior: "smooth"
    });

});

const kartlar = document.querySelectorAll(".kart");

kartlar.forEach((kart) => {

    kart.addEventListener("mousemove", (e) => {

        const rect = kart.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - 0.5) * 10;
        const rotateX = ((y / rect.height) - 0.5) * -10;

        kart.style.transform = `
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
        `;

    });

    kart.addEventListener("mouseleave", () => {

        kart.style.transform = "rotateX(0) rotateY(0)";

    });

});