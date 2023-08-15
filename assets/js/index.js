const redslider=document.getElementById('redslider');
const greenslider=document.getElementById('greenslider');
const blueslider=document.getElementById('blueslider');

const redvaluespan=document.getElementById('redvalue');
const greenvaluespan=document.getElementById('greenvalue');
const bluevaluespan=document.getElementById('bluevalue');

const colorbox=document.getElementById('colorBox');

const copybtn=document.getElementById('copybtn');
const inputypergbvalue=document.getElementById('inputype');


redslider.addEventListener("input",updateColor);
greenslider.addEventListener("input",updateColor);
blueslider.addEventListener("input",updateColor);
copybtn.addEventListener("click",copyRgbValue);

function updateColor(){
    const redvalue=redslider.value;
    const greenvalue=greenslider.value;
    const bluevalue=blueslider.value;

    console.log(redvalue);

    const rgbColor=`rgb(${redvalue},${greenvalue},${bluevalue})`;
    console.log(rgbColor);


    colorbox.style.backgroundColor=rgbColor;


    redvaluespan.textContent=redvalue;
    greenvaluespan.textContent=greenvalue;
    bluevaluespan.textContent=bluevalue;

    inputypergbvalue.textContent=rgbColor;

}
updateColor();

function copyRgbValue(){
    const redvalue=redslider.value;
    const greenvalue=greenslider.value;
    const bluevalue=blueslider.value;

    const rgbColor=`rgb(${redvalue},${greenvalue},${bluevalue})`;
    navigator.clipboard.writeText(rgbColor)
    .then(()=>{
        alert("RGB color copied to Clipboard:"+rgbColor)
    })
    .catch((error)=>{
        console.error("Failed to copy rgb value:",error);
    });
}