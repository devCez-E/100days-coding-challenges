const productNameInputElement = document.querySelector('#memo');
const charCount = document.querySelector('#memo-cnt');
const remainCharElement = document.querySelector('#remain-cnt');
const totalCnt = productNameInputElement.maxLength;

productNameInputElement.addEventListener('input', updateRemainingCharacter);

function updateRemainingCharacter(event){
    let cnt = event.target.value.length;
    let remainCnt = totalCnt - cnt;

    if(remainCnt < 0) return;
    else {
        if(remainCnt <= 10){
            productNameInputElement.className = 'warning';
            charCount.className = 'warning';
        }   
        remainCharElement.textContent = remainCnt;
    }
}