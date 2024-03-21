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
