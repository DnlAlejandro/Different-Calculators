let darkMode = document.querySelector(".container-modenight");
let sunMode = document.querySelector(".container-modesun");

//BODY SECTION!!! BODY SECTION!!! BODY SECTION!!! BODY SECTION!!! BODY SECTION!!!
let mainCalculators = document.querySelector(".calculators-main");
let heightIMC = document.querySelector("#imc-height");
let weightIMC = document.querySelector("#imc-weight");
let btnIMC = document.querySelector("#calculate-imc");
let resultIMC = document.querySelector("#result-form-imc");

let ageWR = document.querySelector("#weight-range__age");
let heightWR = document.querySelector("#weight-range__height");
let genderWR = document.querySelector("#weight-range__gender");
let btnWR = document.querySelector("#calculate-weight-range");
let resultWR = document.querySelector("#result-form-weight-range");

let ageBMR = document.querySelector("#bmr__age");
let genderBMR = document.querySelector("#bmr__gender");
let heightBMR = document.querySelector("#bmr__height");
let weightBMR = document.querySelector("#bmr__weight");
let activityBMR = document.querySelector("#bmr__activity");
let btnBMR = document.querySelector("#calculate-bmr");
let resultBMR = document.querySelector("#result-form-bmr");

//FIGURES SECTION!!! FIGURES SECTION!!! FIGURES SECTION!!! FIGURES SECTION!!! FIGURES SECTION!!!

let sideFS = document.querySelector("#square-side");
let btnFS = document.querySelector("#calculate-square");
let resultFS = document.querySelector("#result-square");

let radiusFC = document.querySelector("#circle-side");
let btnFC = document.querySelector("#calculate-circle");
let resultFC = document.querySelector("#result-circle");

let typeFT = document.querySelector("#triangle-type");
let sideAFT = document.querySelector("#triangle-sideA");
let sideBFT = document.querySelector("#triangle-sideB");
let baseFT = document.querySelector("#triangle-base");
let divAFT = document.querySelector("#triangle-divA");
let divBFT = document.querySelector("#triangle-divB");
let divCFT = document.querySelector("#triangle-divC");
let btnFT = document.querySelector("#calculate-triangle");
let resultFT = document.querySelector("#result-triangle");

//STATISTICS SECTION!!! STATISTICS SECTION!!! STATISTICS SECTION!!! STATISTICS SECTION!!! STATISTICS SECTION!!!

let datasetMMM = document.querySelector("#mmm-dataset");
let btnCalculateMMM = document.querySelector("#mmm-calculate");
let numberMMM = document.querySelector("#mmm-number");
let btnAddMMM = document.querySelector("#mmm-add");
let resultMMM = document.querySelector("#result-mmm");
let btnResetMMM = document.querySelector("#mmm-reset");

let datasetRMM = document.querySelector("#rmm-dataset");
let btnCalculateRMM = document.querySelector("#rmm-calculate");
let numberRMM = document.querySelector("#rmm-number");
let btnAddRMM= document.querySelector("#rmm-add");
let resultRMM = document.querySelector("#result-rmm");
let btnResetRMM = document.querySelector("#rmm-reset");

let datasetSM = document.querySelector("#sm-dataset");
let btnCalculateSM = document.querySelector("#sm-calculate");
let numberSM = document.querySelector("#sm-number");
let btnAddSM = document.querySelector("#sm-add");
let resultSM = document.querySelector("#result-sm");
let btnResetSM = document.querySelector("#sm-reset");


// /*************/*******************/********************/
// /*************/*******************/********************/

darkMode.addEventListener('click', changetodarkMode);

//DARK MODE!!! DARK MODE!!! DARK MODE!!! DARK MODE!!! DARK MODE!!!
//DARK MODE!!! DARK MODE!!! DARK MODE!!! DARK MODE!!! DARK MODE!!!
//DARK MODE!!! DARK MODE!!! DARK MODE!!! DARK MODE!!! DARK MODE!!!

function changetodarkMode() {
    darkMode.classList.add('inactive');
    sunMode.classList.remove('inactive');
    mainCalculators.setAttribute("style", "filter:invert(1) contrast(0.95) saturate(0.5) hue-rotate(180deg);")
}

sunMode.addEventListener('click', changetoSunMode);

function changetoSunMode() {
    sunMode.classList.add('inactive');
    darkMode.classList.remove('inactive');
    mainCalculators.style.removeProperty('filter');
}

//BODY SECTION!!! BODY SECTION!!! BODY SECTION!!! BODY SECTION!!! BODY SECTION!!!
//BODY SECTION!!! BODY SECTION!!! BODY SECTION!!! BODY SECTION!!! BODY SECTION!!!
//BODY SECTION!!! BODY SECTION!!! BODY SECTION!!! BODY SECTION!!! BODY SECTION!!!

btnIMC.addEventListener('click', calculateIMC);

function calculateIMC(event) {

    event.preventDefault()
    const heightIMCValue = heightIMC.value;
    const heightInches = heightIMCValue / 2.54;
    const weightIMCValue = weightIMC.value;
    const weightPounds = weightIMCValue * 2.20462262;
    const formula = (weightPounds * 703) / (heightInches * heightInches)
    let category;

    if (formula < 18.5) {
        category = "Underweight"
    }
    else if (formula > 18.5 && formula < 24.5) {
        category = "Normal weight"
    }
    else if (formula > 25 && formula < 29.9) {
        category = "Overweight"
    }
    else if (formula > 29.9) {
        category = "Obesity"
    }
    else {
        category = "Not valid category"
    }

    if (!heightIMCValue || !weightIMCValue) {
        resultIMC.innerHTML = 'You have not completed the required fields'
    }
    else {
        resultIMC.innerHTML = 'Your BMI is: ' + formula.toFixed(2) + " and your category is: " + category + ".";
    }
}

btnWR.addEventListener('click', calculateIdealWeight);

function calculateIdealWeight(event) {

    event.preventDefault()
    const genderWRValue = genderWR.value;
    const heightWRValue = heightWR.value;
    let result;
    let diference150;

    if (genderWRValue == "male") {
        if (heightWRValue > 150) {
            diference150 = heightWRValue - 150;
        }
        else {
            result = "You have not completed the required fields"
        }
        result = ((2.72 * (diference150 / 2.5)) + 47.7)

    }

    else if (genderWRValue == "female") {
        if (heightWRValue > 150) {
            diference150 = heightWRValue - 150;
        }
        else {
            result = "You have not completed the required fields"
        }
        result = ((2.72 * (diference150 / 2.5)) + 45.5)

    }

    else {
        result = "You have not completed the required fields"
    }

    if (!heightWRValue || !genderWRValue) {
        resultWR.innerHTML = 'You have not completed the required fields';
    }
    else {
        resultWR.innerHTML = 'Your IBW is: ' + result.toFixed(2);
    }

    console.log(result)
}

btnBMR.addEventListener('click', calculateBasalMetabolicRate);

function calculateBasalMetabolicRate(event) {

    event.preventDefault()
    const ageBMRValue = ageBMR.value;
    const genderBMRValue = genderBMR.value;
    const heightBMRValue = heightBMR.value;
    const weightBMRValue = weightBMR.value;
    const activityBMRValue = activityBMR.value;
    let result;

    if (genderBMRValue == "male") {

        partialResult = ((10 * weightBMRValue) + (6.25 * heightBMRValue) - (5 * ageBMRValue) + 5)
    }
    else if (genderBMRValue == "female") {
        partialResult = ((10 * weightBMRValue) + (6.25 * heightBMRValue) - (5 * ageBMRValue) - 161)
    }

    if (activityBMRValue == "1") {
        result = partialResult * 1.2;
    }
    else if (activityBMRValue == "2") {
        result = partialResult * 1.375;
    }
    else if (activityBMRValue == "3") {
        result = partialResult * 1.55;
    }
    else if (activityBMRValue == "4") {
        result = partialResult * 1.725;
    }
    else if (activityBMRValue == "5") {
        result = partialResult * 1.9;
    }
    else {
        resultBMR.innerHTML = 'You have not completed the required fields';
    }

    if (!ageBMRValue || !genderBMRValue || !heightBMRValue || !weightBMRValue || !activityBMRValue) {
        resultBMR.innerHTML = 'You have not completed the required fields';
    }
    else {
        resultBMR.innerHTML = 'Your BMR is: ' + result.toFixed(2);
    }


}

//FIGURES SECTION!!! FIGURES SECTION!!! FIGURES SECTION!!! FIGURES SECTION!!! FIGURES SECTION!!!
//FIGURES SECTION!!! FIGURES SECTION!!! FIGURES SECTION!!! FIGURES SECTION!!! FIGURES SECTION!!!
//FIGURES SECTION!!! FIGURES SECTION!!! FIGURES SECTION!!! FIGURES SECTION!!! FIGURES SECTION!!!

btnFS.addEventListener('click', calculateAreaPerimeterSquare);

function calculateAreaPerimeterSquare(event) {
    event.preventDefault()
    const sideFSValue = sideFS.value;

    resultPerimeter = sideFSValue * 4;
    resultArea = sideFSValue * sideFSValue;

    if (!sideFSValue) {
        resultFS.innerHTML = 'You have not completed the required fields';
    }
    else {
        resultFS.innerHTML = 'The perimeter is: ' + resultPerimeter.toFixed(0) + ' and area is: ' + resultArea.toFixed(0);
    }
}

btnFC.addEventListener('click', calculateAreaPerimeterCircle);

function calculateAreaPerimeterCircle(event) {
    event.preventDefault()
    const radiusFCValue = radiusFC.value;

    let resultPerimeter = 2 * (Math.PI * radiusFCValue);
    let resultArea = Math.PI * (radiusFCValue * radiusFCValue);

    if (!radiusFCValue) {
        resultFC.innerHTML = 'You have not completed the required fields';
    }
    else {
        resultFC.innerHTML = 'The perimeter is: ' + resultPerimeter.toFixed(0) + ' and area is: ' + resultArea.toFixed(0);
    }
}

typeFT.addEventListener("click", () => {
    typeFT.addEventListener("change", () => {
        switch (typeFT.value) {
            case "equilateral":
                divAFT.classList.remove("triangle-inactive");
                divBFT.classList.add("triangle-inactive");
                divCFT.classList.add("triangle-inactive");
                break;  
            case "isosceles":
                divAFT.classList.remove("triangle-inactive");
                divBFT.classList.add("triangle-inactive");
                divCFT.classList.remove("triangle-inactive");
                break; 
            case "scalene":
                divAFT.classList.remove("triangle-inactive");
                divBFT.classList.remove("triangle-inactive");
                divCFT.classList.remove("triangle-inactive");
            break; 
        }
    });
});

btnFT.addEventListener('click', calculateAreaPerimeterTriangle);

function calculateAreaPerimeterTriangle(event){

    event.preventDefault()
    const typeFTValue = typeFT.value;
    const sideAFTValue = parseFloat(sideAFT.value);
    const sideBFTValue = parseFloat(sideBFT.value);
    const baseFTValue = parseFloat(baseFT.value);

    if(typeFTValue == "equilateral"){
        let resultPerimeter = 3 * sideAFTValue 
        let resultArea = (((sideAFTValue**2)*(Math.sqrt(3)))/4)

        if (!sideAFTValue) {
            resultFT.innerHTML = 'You have not completed the required fields';
        }
        else {
            resultFT.innerHTML = 'The perimeter is: ' + resultPerimeter.toFixed(2) + ' and area is: ' + resultArea.toFixed(2);
        }
    }
    else if(typeFTValue == "isosceles"){
        let resultPerimeter = ((2 * sideAFTValue) + parseFloat(baseFTValue));
        let resultArea = (baseFTValue/4)*(Math.sqrt(((4*(sideAFTValue ** 2)) - (baseFTValue ** 2))));

        if (!sideAFTValue || !baseFTValue) {
            resultFT.innerHTML = 'You have not completed the required fields';
        }
        else if(sideAFTValue == baseFTValue){
            resultFT.innerHTML = 'It is not a isosceles triangle, the sides must be different';
        }
        else {
            resultFT.innerHTML = 'The perimeter is: ' + resultPerimeter.toFixed(2) + ' and area is: ' + resultArea.toFixed(2);
        }
    }
    else if(typeFTValue == "scalene"){
        let semiperimeter = ((sideAFTValue + sideBFTValue + baseFTValue) / 2);
        let resultPerimeter = sideAFTValue + sideBFTValue + baseFTValue;
        let resultArea =  Math.sqrt(semiperimeter*(semiperimeter - sideAFTValue)*(semiperimeter - sideBFTValue)*(semiperimeter - baseFTValue));

        if (!sideAFTValue || !sideBFTValue || !baseFTValue) {
            resultFT.innerHTML = 'You have not completed the required fields';
        }
        else if(sideAFTValue == baseFTValue || sideAFTValue == sideBFTValue || sideBFTValue == baseFTValue ){
            resultFT.innerHTML = 'It is not a scalene triangle, the sides must be different';
        }
        else {
            resultFT.innerHTML = 'The perimeter is: ' + resultPerimeter.toFixed(2) + ' and area is: ' + resultArea.toFixed(2);
        }
    }


    
}

//STATISTICS SECTION!!! STATISTICS SECTION!!! STATISTICS SECTION!!! STATISTICS SECTION!!! STATISTICS SECTION!!!
//STATISTICS SECTION!!! STATISTICS SECTION!!! STATISTICS SECTION!!! STATISTICS SECTION!!! STATISTICS SECTION!!!
//STATISTICS SECTION!!! STATISTICS SECTION!!! STATISTICS SECTION!!! STATISTICS SECTION!!! STATISTICS SECTION!!!

btnAddMMM.addEventListener('click', addNumbersMMM);



function addNumbersMMM(event){

    event.preventDefault();
    let numberMMMValue = numberMMM.value;
    if(numberMMMValue != "" ){
        numbersListMMM.push(parseFloat(numberMMMValue));
        datasetMMM.append(numberMMMValue, " ");
        resultMMM.innerHTML = '';
    }
    else{
        resultMMM.innerHTML = 'You can not put empty values';
    }
    numberMMM.value = "";
}

function esPar(lista) {
    return !(lista.length % 2);
}

function ordenarListaBidimensional(listaDesordenada) {
    function ordenarListaSort(valorAcumulado, nuevoValor) {
        return valorAcumulado[1] - nuevoValor[1]
    }
    const lista = listaDesordenada.sort(ordenarListaSort);
    return lista;
}

function calcularModa(lista) {
    const listaCount = {};
    for (let i = 0; i < lista.length; i++) {
        const elemento = lista[i];
        if (listaCount[elemento]) {
            listaCount[elemento] += 1;
        } else {
            listaCount[elemento] = 1;
        }
    }
    const listaArray = Object.entries(listaCount);
    const listaOrdenada = ordenarListaBidimensional(listaArray);
    const listaOrdenadaLastOne = listaOrdenada[listaOrdenada.length - 1];
    const mode = listaOrdenadaLastOne[0];
    return mode;
}

function ordenarLista(listaDesordenada) {
    ordenarListaSort = function ordenarListaSort(valorAcumulado, nuevoValor) {
        return valorAcumulado - nuevoValor
    }
    const lista = listaDesordenada.sort(ordenarListaSort);
    return lista;
}

function calcularPromedioFor(lista) {

    let sumaElementos = 0;

    for (const elemento of lista) {
        sumaElementos = sumaElementos + elemento;
    }
    const promedio = sumaElementos / lista.length;
    console.log(promedio)
    return promedio
}

function calcularMediana(listaDesordenada) {
    const lista = ordenarLista(listaDesordenada);
    const listaEsPar = esPar(lista);

    if (listaEsPar) {
        const indexMitad1ListaPar = (lista.length / 2) - 1;
        const indexMitad2ListaPar = lista.length / 2;
        const listaMitades = [];
        listaMitades.push(lista[indexMitad1ListaPar]);
        listaMitades.push(lista[indexMitad2ListaPar]);

        const medianaListaPar = calcularPromedioFor(listaMitades);
        return medianaListaPar;
    } else {
        const indexMitadListaImpar = Math.floor(lista.length / 2);
        const medianaListaImpar = lista[indexMitadListaImpar];
        console.log(indexMitadListaImpar);
        console.log(medianaListaImpar);
        return medianaListaImpar;
    }
}

btnCalculateMMM.addEventListener('click', calculateModeMedianMode);

let numbersListMMM = [];

function calculateModeMedianMode(event){

    event.preventDefault();

    if (numbersListMMM <= 0) {
        resultMMM.innerHTML = 'You have not completed the required fields';
    }
    else{
        
        // MEAN -- MEAN -- MEAN
        let addition = numbersListMMM.reduce((a, b) => a + b, 0);
        mean = addition / numbersListMMM.length;

        // MODE -- MODE -- MODE
        mode = calcularModa(numbersListMMM);
        
        // MEDIAN -- MEDIAN -- MEDIAN

        median = calcularMediana(numbersListMMM);

        resultMMM.innerHTML = 'The mean is: ' + mean.toFixed(2)+ " " + 'The mode is: ' + mode+ " " + 'The median is: ' + median;
    }
}

btnResetMMM.addEventListener('click', resetDatasetMMM);

function resetDatasetMMM(event){
    event.preventDefault();
    datasetMMM.innerHTML = '';
    numbersListMMM = [];
    console.log(numbersListMMM);
    resultMMM.innerHTML = '';
}

btnAddRMM.addEventListener('click', addNumbersRMM);
let numbersListRMM = [];

function addNumbersRMM(event){

    event.preventDefault();
    let numberRMMValue = numberRMM.value;
    if(numberRMMValue != "" ){
        numbersListRMM.push(parseFloat(numberRMMValue));
        datasetRMM.append(numberRMMValue, " ");
        resultRMM.innerHTML = '';
    }
    else{
        resultRMM.innerHTML = 'You can not put empty values';
    }
    numberRMM.value = "";
}

btnCalculateRMM.addEventListener('click', calculateRangeMinMax);

function calculateRangeMinMax(event){
    event.preventDefault();
    let min = Math.min(...numbersListRMM);
    let max = Math.max(...numbersListRMM);
    let range = max - min
    
    if (numbersListRMM <= 0) {
        resultRMM.innerHTML = 'You have not completed the required fields';
    }
    else{
        resultRMM.innerHTML = 'The range is: ' + range+ " " + 'The minimum is: ' + min+ " " + 'The maximum is: ' + max;
    }

}

btnResetRMM.addEventListener('click', resetDatasetRMM);

function resetDatasetRMM(event){
    event.preventDefault();
    datasetRMM.innerHTML = '';
    numbersListRMM = [];
    console.log(numbersListRMM);
    resultRMM.innerHTML = '';
}

btnAddSM.addEventListener('click', addNumberSM);
let numbersListSM = [];

function addNumberSM(event){

    event.preventDefault();
    let numberSMValue = numberSM.value;
    if(numberSMValue != "" ){
        numbersListSM.push(parseFloat(numberSMValue));
        datasetSM.append(numberSMValue, " ");
        resultSM.innerHTML = '';
    }
    else{
        resultSM.innerHTML = 'You can not put empty values';
    }
    numberSM.value = "";
    console.log(numbersListSM);
}

btnCalculateSM.addEventListener('click', calculateSummatoryCounting);

function calculateSummatoryCounting(event){
    event.preventDefault();
    let summatory = numbersListSM.reduce((a, b) => a + b, 0);
    let counting = numbersListSM.length

    if (numbersListSM <= 0) {
        resultSM.innerHTML = 'You have not completed the required fields';
    }
    else{
        resultSM.innerHTML = 'The summatory is: ' + summatory+ " " + 'The counting is: ' + counting+ " ";
    }

}

btnResetSM.addEventListener('click', resetDatasetSM);

function resetDatasetSM(event){
    event.preventDefault();
    datasetSM.innerHTML = '';
    numbersListSM = [];
    console.log(numbersListSM);
    resultSM.innerHTML = '';
}