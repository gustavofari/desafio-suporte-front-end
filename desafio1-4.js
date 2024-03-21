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
