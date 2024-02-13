const maintitle = document.querySelector('#title')
let curval = 0;
const resetbtn = document.querySelector('#reset');
const decrement_btn = document.querySelector('#decrement');

const increment_btn = document.querySelector('#increment');

increment_btn.addEventListener('click', ()=>{
    curval ++;
    maintitle.textContent = curval;
});
resetbtn.addEventListener('click', ()=>{
        curval = 0;
        maintitle.textContent = curval;
});
decrement_btn.addEventListener('click', ()=>{
    if(curval > 0){
        curval --;
        maintitle.textContent = curval;
    }
});
