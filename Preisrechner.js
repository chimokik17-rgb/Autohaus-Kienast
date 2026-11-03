

let prices = {
    "Mercedes-Benz A-Klasse": 32297,
    "Mercedes-Benz C-Klasse": 42982,
    "Mercedes-Benz E-Klasse": 52586,
    "Mercedes-Benz S-Klasse": 109221,
    "Mercedes-AMG GT": 111661,
    "Mercedes-Benz G-Klasse": 127592
};


document.getElementById("model").addEventListener("change", function() {

    let model = this.value;

    document.getElementById("basePrice").value = prices[model];

});


let startModel = document.getElementById("model").value;

document.getElementById("basePrice").value = prices[startModel];


function calculatePrice() {

    let model = document.getElementById("model");
    let base = Number(document.getElementById("basePrice").value);
    let condition = Number(document.getElementById("condition").value);
    let quality = Number(document.getElementById("quality").value);
    let repairs = Number(document.getElementById("repairs").value);

    let adjusted = base * condition * quality;
    let total = adjusted + repairs;
    let markup = total * 0.20;
    let salePrice = total + markup;

    document.getElementById("resultModel").textContent =
        model.options[model.selectedIndex].text;

    document.getElementById("salePrice").textContent =
        salePrice.toLocaleString("de-DE") + " €";

    document.getElementById("adjustedPrice").textContent =
        adjusted.toLocaleString("de-DE") + " €";

    document.getElementById("repairOutput").textContent =
        repairs.toLocaleString("de-DE") + " €";

    document.getElementById("marginOutput").textContent =
        markup.toLocaleString("de-DE") + " €";
}


document.getElementById("calculate").addEventListener("click", calculatePrice);
