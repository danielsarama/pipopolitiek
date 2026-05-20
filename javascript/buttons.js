const _FIRST_SCREEN = document.querySelector("first_screen");
const _START_BUTTON = document.querySelector(".start_button");
const _SECOND_SCREEN = document.querySelector(".second_screen");
const _BACK_BUTTON = document.querySelector(".back_button");


// _START_BUTTON.addEventListener("click", () => {
//     const audio = new Audio("./MyMovie.mp3"); 
//     audio.play();
// });

let pageNumbers = 0

_START_BUTTON.addEventListener("click", startScreen)
// _START_BUTTON.addEventListener("click", change)
_BACK_BUTTON.addEventListener("click", backWords)

function startScreen(){
    switch(pageNumbers) {

        case 0:
            if (_FIRST_SCREEN){
                _FIRST_SCREEN.style.display = "none"
                _SECOND_SCREEN.style.display = "flex"
                pageNumbers++
            }

            const audio = new Audio("./MyMovie.mp3"); 
            audio.play();

            if(_START_BUTTON){
                _START_BUTTON.style.width="40%"
                _START_BUTTON.style.left="70%"
                _BACK_BUTTON.style.display= "flex"
            }
            break; 
        default :
            _FIRST_SCREEN.style.display= 'flex'
            _BACK_BUTTON.style.display= "none"
            _START_BUTTON.style.width="80%"
            _START_BUTTON.style.left="50%"

            pageNumbers=0;

            break;
    }

     if(_START_BUTTON.innerHTML == "NEXT"){
        _START_BUTTON.innerHTML = "start"
    } else{
        _START_BUTTON.innerHTML = "NEXT";
    }

}

// function change()
// {   
//    }

function backWords(){

    switch(pageNumbers){

        case 0:
        if (_FIRST_SCREEN){
            _FIRST_SCREEN.style.display = "none"
            _SECOND_SCREEN.style.display = "flex"
            pageNumbers--

    }
        if(_START_BUTTON){
           _START_BUTTON.style.width="40%"
            _START_BUTTON.style.left="70%"
            _BACK_BUTTON.style.display= "flex"

        }
        break; 
        default :
        _FIRST_SCREEN.style.display= 'flex'
        _BACK_BUTTON.style.display= "none"
        _START_BUTTON.style.width="80%"
        _START_BUTTON.style.left="50%"

        pageNumbers=0;

        break;
    }
}
    
        
        