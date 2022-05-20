const productNameInputElement = document.querySelector('#memo');
const charCount = document.querySelector('#memo-cnt');
const remainCharElement = document.querySelector('#remain-cnt');
const totalCnt = productNameInputElement.maxLength;

productNameInputElement.addEventListener('input', updateRemainingCharacter);

function updateRemainingCharacter(event){
    let cnt = event.target.value.length;
    let remainCnt = totalCnt - cnt;

    if(remainCnt < 0) return;
    else if(remainCnt === 0){
        productNameInputElement.classList.add('error');
        remainCharElement.classList.add('error');        
    }
    else {
        if(remainCnt <= 10){
            productNameInputElement.classList.remove('error');
            remainCharElement.classList.remove('error');
            productNameInputElement.classList.add('warning');
            remainCharElement.classList.add('warning');
        } else{
            productNameInputElement.classList.remove('warning');
            remainCharElement.classList.remove('warning');
        }
    }
    remainCharElement.textContent = remainCnt;
}