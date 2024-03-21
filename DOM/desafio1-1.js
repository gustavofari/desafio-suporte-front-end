// Carrega os itens "novos" e "seminovos"
const novosItem = document.querySelector('a[href="/autoforce-ford/novos"]').parentNode;
const semiNovosItem = document.querySelector('a[href="/autoforce-ford/seminovos"]').parentNode;

// remove os itens "novos" e "seminovos" do menu
novosItem.remove();
semiNovosItem.remove();

// Adiciona o item "veículos"
const veiculosItem = document.createElement("li");
veiculosItem.classList.add("nav-item", "nav-simple__item", "veiculos");

// Adiciona HTML como dropdown de "veículos"
veiculosItem.innerHTML = `
    <a href="/autoforce-ford#" class="nav-link nav-simple__link" data-toggle="dropdown"> Veículos <i class="icon icon-dropdown icon-arrow-d"></i></a>
    <div class="nav-simple-sub card-collapse-deep dropdown-menu dropdown">
        <ul class="list list--border-bottom">
            <li><a href="/autoforce-ford/novos" class="card-collapse-deep__title"> Novos </a></li>
            <li><a href="/autoforce-ford/seminovos" class="card-collapse-deep__title"> Seminovos </a></li>
        </ul>
    </div>
`;

// Adiciona o item "veículos ao menu"
document.querySelector(".nav").appendChild(veiculosItem);

// Coloca em ordem os itens do menu
const orderMap = {
    "Veículos": 0,
    "Consórcios": 1,
    "Pós-venda": 2,
    "Vendas Diretas": 3
};

const listItems = document.querySelectorAll(".nav-item.nav-simple__item");

listItems.forEach(item => {
    const text = item.querySelector('.nav-link').textContent.trim();
    if (orderMap.hasOwnProperty(text)) {
        item.style.order = orderMap[text];
    }
});

// Dispara o evento de dropdown ao item "veículos"
veiculosItem.addEventListener("click", () => {
    veiculosItem.classList.toggle("show");
    document.querySelector(".menuDropdown").classList.toggle("show");
});
