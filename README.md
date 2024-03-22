# Desafio 1 - Manipulando o DOM
Manipule o DOM do site [autoforce-test](https://testes.autoforce.com.br/autoforce-ford) usando javascript para obter os resultados enumerados a seguir. O resultado de cada questão deve ser o código javascript usado para atingir o objetivo pedido no enunciado. Considere que o avaliador vai colar seu código no console e verificar o resultado na interface.


## 1-1. Modifique os itens de menu "Novos" e "Seminovos" e reordene os itens do menu


Crie um novo item dropdown para o menu e o intitule "Veículos".
Os itens "Novos" e "Seminovos" devem ser realocados para esse novo dropdown. O item "Veículos" deve ser o primeiro do menu. Após este primeiro passo, reordene a disposição do menu para a seguinte ordem:

**Veículos | Consórcio | Pós-Venda | Ofertas Únicas | Vendas Diretas | Contato**


### Resultado 

```js


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


```

## 1-2. Modifique o formulário de "Estou Interessado" 


Disponível em https://testes.autoforce.com.br/autoforce-ford/novos/territory-2022 adicione os seguintes campos:

- 1 Select com as opções: SUV,  Senda, Hatch e Pickup;
- 1 Textarea com placeholder "Mensagem".


### Resolução


```js

// Carrega o primeiro fieldset do formulário
const fieldSet = document.querySelector("fieldset:nth-child(1)");

// Cria uma div para o elemento select
const divSelect = document.createElement("div");
divSelect.classList.add("form-group");
divSelect.innerHTML = `
    <select class="form-control">
        <option value="SUV">SUV</option>
        <option value="Sedan">Sedan</option>
        <option value="Hatch">Hatch</option>
        <option value="Pickup">Pickup</option>
    </select>`;

// Cria uma div para o elemento textarea
const divTextArea = document.createElement("div");
divSelect.classList.add("form-group");
divSelect.innerHTML = `
    <textarea class="form-control" placeholder="Mensagem"></textarea>`;


// Adiciona os elementos select e textarea dentro do fieldset
fieldSet.appendChild(divSelect);
fieldSet.appendChild(divTextArea);


```

## 1-3. Remova o formulário de conversão após clique no whatsapp


Ao clicar em qualquer link do dropdown de Whatsapp, um formulário modal é aberto.
Remova a aparição deste formulário de forma que o usuário seja direcionado para janela do Whatsapp em uma nova aba.



### Resolução


```js
// remove o menu dropdown do button "whatsapp"
const dropdownWhatsapp = document.querySelector("#header-card-whatsapp");
dropdownWhatsapp.remove();

// Seleciona o button "whatsapp" e direciona para outra aba
const whatsappButton = document.querySelector(".btn.button.button--whatsapp.header__phones-button-toggler")
whatsappButton.setAttribute("onclick", `window.open("https://api.whatsapp.com/send?phone=5511999999999","_blank")`);

// Remove o modal acionado pelo button "negocie pelo whatsapp"
const modalNegocieWhatsapp = document.querySelector("#new-vehicles-showcase_modal-whatsapp-box");
modalNegocieWhatsapp.classList.remove("micromodal-slide");

// Seleciona o button "negocie pelo whatsapp" e direciona para outra aba
const negocieWhatsappButton = document.querySelector("#new-vehicles-showcase_cta-box-button");
negocieWhatsappButton.setAttribute("onclick", `window.open("https://api.whatsapp.com/send?phone=5511973860742","_blank")`);

```

## 1-4. Crie um botão flutuante de WhatsApp


Crie um popup de WhatsApp fixado no canto inferior esquerdo da tela, ao clicar nesse botão três números devem aparecer:
(Seminovos: +55 (11) 99999-9999, Serviços +55 (11) 11111-11111 e Central de Vendas: +55 (11) 88888-8888), um novo clique em qualquer um desses números deve encaminhar o usuário diretamente para o WhatsApp



### Resolução


```js

// Criando o elemento div
const popupWhatsapp = document.createElement('div');

// Adicionando as classes já existentes do site ao popup
popupWhatsapp.classList.add('button-icon', 'button-icon--whatsapp', 'header__phones-button-toggler-mobile');

// estilizando o popup
popupWhatsapp.style.position = 'fixed';
popupWhatsapp.style.bottom = '30px';
popupWhatsapp.style.left = '30px';
popupWhatsapp.style.zIndex = '1';
popupWhatsapp.style.transform = "scale(1.8)";
popupWhatsapp.style.cursor = "pointer";


// Criando o elemento i e adicionando as classes já existentes do site
const iconWhatsapp = document.createElement('i');
iconWhatsapp.classList.add('icon', 'icon-whatsapp');

// Adicionando o icon como filho do elemento popup
popupWhatsapp.appendChild(iconWhatsapp);

// Adicionando o elemento ao corpo do site
document.body.appendChild(popupWhatsapp);

// adicionando código HTML ao popupWhatsapp
popupWhatsapp.innerHTML += `
<div class="popup-whatsapp-card" style="
   position: absolute;
   display: none;
   border-radius: 10px;
   bottom: 5px;
   left: 35px;
   box-shadow: 0px 10px 36px -3px rgba(0,0,0,0.4);
   background-color:  #fff;
   z-index: 1;">
   <ul class="list list--header-phones list--border-bottom" style=" 
      font-size: .7rem;
      ">
      <li class="header__card-whatsapp-item">
         <a class="header-mobile__whatsapp-link" href="https://api.whatsapp.com/send?phone=551199999999" target="_blank" style="color: #000;
            text-decoration: none;
            "><strong>Seminovos:</strong> <span class="header-mobile__whatsapp-number text-mask-phone">+55 (11) 99999-9999</span></a>
         <i class="icon icon-whatsapp"></i>
      </li>
      <li class="header__card-whatsapp-item">
         <a class="header-mobile__whatsapp-link" href="https://api.whatsapp.com/send?phone=55111111111111" target="_blank" style="color: #000;
            text-decoration: none;
            "><strong>Serviços:</strong> <span class="header-mobile__whatsapp-number text-mask-phone">+55 (11) 11111-11111</span></a>
         <i class="icon icon-whatsapp"></i>
      </li>
      <li class="header__card-whatsapp-item">
         <a class="header-mobile__whatsapp-link" href="https://api.whatsapp.com/send?phone=5511888888888" target="_blank" style="color: #000;
            text-decoration: none;
            "><strong>Central de Vendas:</strong> <span class="header-mobile__whatsapp-number text-mask-phone">+55 (11) 88888-8888</span></a>
         <i class="icon icon-whatsapp"></i>
      </li>
   </ul>
</div>`

// Seleciona o card com contatos do whatsapp
const cardPopup = document.querySelector(".popup-whatsapp-card");

// Adiciona um evento ao clicar
popupWhatsapp.addEventListener("click", () => {
  cardPopup.style.display = cardPopup.style.display === "none" ? "block" : "none";
});


```


# Desafio 2 - Montando Layout


<img src ="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />&nbsp;
<img src ="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white" />&nbsp;
<img src ="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />&nbsp;


Codifique a seguinte interface: [Desafio-Genius](https://www.figma.com/file/mEuuuja11kYw9M9swY69wl/Desafio-Genius?node-id=34%3A42).


## Instruções

- Não há necessidade de criar um dropdown nos botões do header. Crie um hyperlink para o telefone e um para o WhatsApp
- Link do vídeo para a área "Conheça o BMW": [Vídeo do YouTube](https://www.youtube.com/watch?v=cFyrTEYyq64).

### Resolução com Deploy

Implementação final do desafio: [Desafio Suporte Front-End](https://desafio-suporte-front-end.onrender.com/).

