const dino = document.querySelector('.dino');
let isJumping = false;

//Para capturar tecla espaço
function handleKeyUp(event){
    if (event.keyCode === 32) {
        if(!isJumping) {
            jump();
        }  
    }
}

//Para pular
function jump() {
    isJumping = true;
    let position = 0;

    let upInterval = setInterval(() => {
        if (position >= 150) {
            clearInterval(upInterval);
            
            let downInterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(downInterval);
                    isJumping = false;

                } else {
                    position -= 20;
                    dino.style.bottom = position + 'px';
                }
            }, 20);
        } else {
            //Subindo
            position += 20;
            dino.style.bottom = position + 'px';
        }
    }, 20);
}

document.addEventListener('keyup', handleKeyUp);
