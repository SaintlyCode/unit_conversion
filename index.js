/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const btnConvert = document.getElementById("btn-convert");
const edtUnit = document.getElementById("edt-unit");
const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");

btnConvert.addEventListener('click', function() {
    lengthEl.textContent = convertLength(edtUnit.value);
    volumeEl.textContent = convertVolume(edtUnit.value);
    massEl.textContent = convertMass(edtUnit.value);
})

function convertLength(value) {
    let meter_to_feet = (value * 3.281);
    let feet_to_meter = (value * 0.3048);
    return formatUnitText(value, 'meters', meter_to_feet, 'feet', feet_to_meter);  
}

function convertVolume(value) {
    let liter_to_gallon = (value * 0.264172);
    let gallon_to_liter = (value * 3.78541);
    return formatUnitText(value, 'liters', liter_to_gallon, 'gallons', gallon_to_liter);  
}

function convertMass(value) {
    let kilo_to_pound = (value * 2.20462);
    let pound_to_kilo = (value * 0.453592);
    return formatUnitText(value, 'kilos', kilo_to_pound, 'pounds', pound_to_kilo);  
}

function formatUnitText(convert_value, first_label, first_unit, second_label, second_unit) {
    return `${convert_value} ${first_label} = ${first_unit.toFixed(3)} ${second_label} 
            | 
            ${convert_value} ${second_label} = ${second_unit.toFixed(3)} ${first_label}`
}