const festivals = [
    {
        name: "Baku Summer Fest",
        city: "Baki",
        date: "22 Iyun 2025",
        genre: "Pop",
        img: "img/baku.jpg",
        desc: "Azerbaycanin en boyuk yay musiqi festivalidir. Dunyanin populyar pop ifaçıları qatilir."
    },
    {
        name: "London Rock Explosion",
        city: "London",
        date: "5 Iyul 2025",
        genre: "Rock",
        img: "img/london.jpg",
        desc: "Ingilterenin meshur rock festivalidir. Minlerle tamaşaçı iştirak edir."
    },
    {
        name: "Berlin EDM Night",
        city: "Berlin",
        date: "10 Avqust 2025",
        genre: "EDM",
        img: "img/berlin.jpg",
        desc: "Elektron musiqi sevənler ucun mukemmel gecedir."
    },
    {
        name: "New York Jazz Story",
        city: "New York",
        date: "3 Sentyabr 2025",
        genre: "Jazz",
        img: "img/ny.jpg",
        desc: "Dünyanın ən qədim jazz festivallarından biridir."
    }
];

// Əsas siyahı
const list = document.getElementById("festivalList");

function display(listData) {
    list.innerHTML = "";
    listData.forEach(f => {
        list.innerHTML += `
            <div class="card" onclick="openModal('${f.img}','${f.name}','${f.city}','${f.date}','${f.genre}','${f.desc}')">
                <img src="${f.img}">
                <h3>${f.name}</h3>
                <p>${f.city} — ${f.genre}</p>
            </div>
        `;
    });
}

display(festivals);

// Filtr janr
document.getElementById("genreFilter").addEventListener("change", e => {
    let val = e.target.value;
    if (val === "Hamisi") display(festivals);
    else display(festivals.filter(f => f.genre === val));
});

// Filtr şəhər
document.getElementById("cityFilter").addEventListener("change", e => {
    let val = e.target.value;
    if (val === "Hamisi") display(festivals);
    else display(festivals.filter(f => f.city === val));
});

// Axtarış
document.getElementById("search").addEventListener("keyup", e => {
    let text = e.target.value.toLowerCase();
    display(festivals.filter(f => f.name.toLowerCase().includes(text)));
});

// Modal
function openModal(img, name, city, date, genre, desc) {
    document.getElementById("modalImg").src = img;
    document.getElementById("modalName").innerText = name;
    document.getElementById("modalCity").innerText = "Seher: " + city;
    document.getElementById("modalDate").innerText = "Tarix: " + date;
    document.getElementById("modalGenre").innerText = "Janr: " + genre;
    document.getElementById("modalDesc").innerText = desc;

    document.getElementById("modal").style.display = "block";
}

document.getElementById("close").onclick = () => {
    document.getElementById("modal").style.display = "none";
};
