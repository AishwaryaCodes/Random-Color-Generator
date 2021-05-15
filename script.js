const generatorBtn = document.querySelector("#btn");
const codeText = document.querySelector("#txt")
const codeBtn = document.querySelector("#icon")

const codeText2 = document.querySelector("#txt2")
const codeBtn2 = document.querySelector("#icon2")

//to generate a random number from 0 to 255
function generateRandomNum()
{
return Math.floor(Math.random() * 255)
}

//convert rgb to hexcode
function rgbToHexcode(r,g,b)
{
r = r.toString(16)
g = g.toString(16)
b = b.toString(16)

if (r.length == 1)
r = `0${r}`

if (g.length == 1)
r = `0${g}`

if (b.length == 1)
r = `0${b}`

return `#${r}${g}${b}`
}

//funtion for rondom color
function randomColor()
{
    const red = generateRandomNum()
    const green = generateRandomNum()
    const blue = generateRandomNum()

    const hexcode = rgbToHexcode(red,green,blue)
    return [red, green, blue,hexcode]
}

//copy button 
function copyToClipboard(e)
{
    if(e.target.id === 'icon2'){
        codeText2.select()
    }
    else{
        codeText.select()
    }
    document.execCommand('copy')

    alert('The Code is copied !') 

}

generatorBtn.addEventListener('click',() =>
{
    const colorArray = randomColor()

    //const colorCode = "rgb("+ colorArray[0] + "," + colorArray[1] + "," + colorArray[2] + ")" ; 
    
    const colorCode2 = `rgb(${colorArray[0]}, ${colorArray[1]},${colorArray[2]})`

    //console.log(colorCode2);
   // console.log(colorArray[0],colorArray[1],colorArray[2])

   document.body.style.background = colorArray[3];

   codeText.value = colorArray[3];
   codeText.style.color = colorCode2;

   codeText2.value = `rgb(${colorArray[0]}, ${colorArray[1]}, ${colorArray[2]})`
   codeText2.style.color = colorCode2
})


codeBtn.addEventListener('click', copyToClipboard)
codeBtn2.addEventListener('click', copyToClipboard)













