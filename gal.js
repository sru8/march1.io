var counter = 0;


function like() {
    counter += 1;
    var disp1 = document.getElementById('something');
    disp1.innerText = counter;
    render();
    like();

}

function Dislike() {

    counter -= 1;
    var disp1 = document.getElementById('something');
    disp1.innerText = counter;
    render();
    Dislike();

}


function render() {
    var disp1 = document.getElementById('something');
    disp1.innerText = counter;


}
like()


Dislike()