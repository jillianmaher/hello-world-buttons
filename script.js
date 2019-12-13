


for(var spot=0; spot<answers.length; spot++)
{
   answerButtons[spot].innerHTML = answers[spot];

    answerButtons[spot].addEventListener('click', function() {
        disableAll();
        if(this.innerHTML == answers[correct]) {
            this.setAttribute('style','background-color:rgb(76,175,80);');
        } else {
            this.setAttribute('style','background-color:rgb(210,50,35);');
        }
    });

}


function disableAll() {
    for(var num=0; num<answerButtons.length; num++) {
        answerButtons[num].setAttribute('disabled', true);
    }
}

