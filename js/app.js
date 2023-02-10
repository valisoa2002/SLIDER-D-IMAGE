let images = document.querySelectorAll('img')
let temp ;
let div = document.createElement('div')
let sourceImage = []
let content = document.body
let newImage = document.createElement('img')
let nextBtn = document.createElement('i')
let prevBtn = document.createElement('i')


prevBtn.classList.add('bi')
nextBtn.classList.add('bi')

// ==============================================
// CREATION DE DIV POUR METTRE LE FOND DE L'IMAGE
// ==============================================
function createDivtoDisplay() {
    div.classList.add('imageContent')
    content.appendChild(div)        
    div.appendChild(newImage)
    newImage.classList.add('displayImage')
}


// ===================================
// CREATION DE DIV POUR METTRE L'IMAGE
// ===================================
(function ImageDisplaying() {    
    for (let i = 0; i < images.length; i++) {
        const image = images[i];
        sourceImage.push(image.getAttribute('src'))
        image.addEventListener('click', (e)=>{
            createDivtoDisplay()
            temp = i
            newImage.setAttribute('src', sourceImage[i])
        })
        div.appendChild(prevBtn)
        div.appendChild(nextBtn)
        prevBtn.classList.add('bi-arrow-left-circle')
        nextBtn.classList.add('bi-arrow-right-circle')

        div.addEventListener('click', (e)=>{
            if (e.target.classList.value == 'bi bi-arrow-left-circle' || e.target.classList.value == 'bi bi-arrow-right-circle') {
                return 0;
            }else{
                console.log(e.target.classList.value);
                div.remove()
                newImage.remove()
            }
        })
    }
    
})()

// ===============================
//  FONCTION QUI FAIT LE nextImg()
// ===============================

function nextImg() {
    temp++
    newImage.setAttribute('src', sourceImage[temp])
    if (temp >= sourceImage.length) {
        temp = 0
        newImage.setAttribute('src', sourceImage[temp])
    }
    
}

// ===============================
//  FONCTION QUI FAIT LE prevImg()
// ===============================

function prevImg() {
    if (temp === 0) {
        temp = sourceImage.length-1
        newImage.setAttribute('src', sourceImage[temp])
    }
    temp--
    newImage.setAttribute('src', sourceImage[temp])
}

// ===============================
//  EVENEMENT QUI FAIT LE prevImg()
// ===============================
prevBtn.addEventListener('click', prevImg)

// ===============================
//  EVENEMENT QUI FAIT LE prevImg()
// ===============================
nextBtn.addEventListener('click', nextImg)


