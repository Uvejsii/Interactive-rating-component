let rateUsBox = document.querySelector('.rate-us-container')
let thankYouBox = document.querySelector('.thank-you-container')
let numsBtn = document.querySelectorAll('.nums')
let submitBtn = document.querySelector('.submit-btn')
let result = document.querySelector('.result')

numsBtn.forEach((nums) => {
    nums.addEventListener('click', () => {
       result.innerHTML = nums.innerHTML; 
    })
});

submitBtn.addEventListener('click', () => {
    thankYouBox.classList.toggle("hide")
    rateUsBox.classList.add('hide')
})