

const hideBtn = document.getElementById('hide-btn')
const deskImg = document.getElementById('desk-img')
console.log(hideBtn)
console.log(deskImg)


hideBtn.addEventListener('click',function(){
    deskImg.style.visibility = 'hidden'
    console.log("hidden")
})