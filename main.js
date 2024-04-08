const box = document.querySelector(".box");
let data = [

    {
        id: 1,
        name: "product 1",
        price: 100,
        des: "lorem",
    },
    {
        id: 2,
        name: "product 2",
        price: 200,
        des: "lorem",
    },
    {
        id: 3,
        name: "product 3",
        price: 300,
        des: "lorem",
    },
    {
        id: 4,
        name: "product 4",
        price: 400,
        des: "lorem",
    },
]

for (const i of data) {
    box.innerHTML += `
    <div class="card">
        <h2>${i.id}</h2>
        <strong>${i.name}</strong>
        <p>${i.price}</p>
        <h2>${i.des}</h2>
    </div>
`;

}

const card = document.querySelectorAll(".card");

const changeColor = (e) => {
    for (const i of card) {
        i.style.backgroundColor = "";
    }
    e.target.style.backgroundColor = "red";
};

for (const i of card) {
    i.addEventListener("click", changeColor)
}