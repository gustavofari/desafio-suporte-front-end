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