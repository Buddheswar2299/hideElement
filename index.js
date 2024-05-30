

const hideBtn = document.getElementById('hide-btn')
const deskImg = document.getElementById('desk-img')
const showbtn = document.getElementById('show-btn')
console.log(showbtn)
console.log(hideBtn)
console.log(deskImg)


hideBtn.addEventListener('click',function(){
    deskImg.style.visibility = 'hidden'
    console.log("hidden")
})

showbtn.addEventListener('click',function(){
    deskImg.style.visibility = 'visible'
    console.log('show')

})