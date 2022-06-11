const setOfWords = ["My name is faisal imran and im a student of bs software engineering at university of swat.",
    "Hope you are having fun this is simple game you can make.",
    "If You want source code then visit my github account so you can create this challenge and play with your friends"];

    const msg = document.getElementById('msg');
    const typeWords = document.getElementById('mywords');
    const btn = document.getElementById('btn');

    let startTime, endTime;
   const  playGame =() =>{
        let randomNumber = Math.floor (Math.random()*setOfWords.length);
        msg.innerText = setOfWords[randomNumber];
        let date = new Date();
        startTime = date.getTime();
        btn.innerHTML = "Done";
    }

    const endplay = () => {
        let date = new Date();
        endTime = date.getTime();

        let totalTime = ((endTime - startTime)/1000);
        

        let totalStr = typeWords.value;
        let wordCount = wordCounter(totalStr);

        let speed = Math.round((wordCount/totalTime)*60);
        let finalMsg = "you typed total at " +speed + "words per minutes ";
        finalMsg += compareWords(msg.innerText, totalStr);

        msg.innerText = finalMsg;


    }

    const compareWords = (str1, str2) =>{
        let words1 =  str1.split(" ");
        let words2 =  str2.split(" ");
        let cnt = 0;

        words1.forEach(function(item, index){
            if(item == words2[index]){
                cnt++;
            }
        })
        let errwords = (words1.length - cnt);
        return(cnt + " Correct out of " + words1.length + " words and the total number of errors are " + errwords + "." );
    }

    const wordCounter = (str) =>{
        let response = str.split(" ").length;
        return response;
    }

btn.addEventListener('click',function(){
    // console.log(this);
    if (this.innerText == 'Start'){
        typeWords.disabled = false;
        playGame();
    } else if (this.innerHTML == "Done"){
        typeWords.disabled = true;
        btn.innerHTML = "Start";
        endplay();
    }
})