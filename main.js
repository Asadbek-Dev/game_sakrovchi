var jumper = document.querySelector('#jumper');
var block = document.querySelector('#block');
function jump() {
    if (jumper.classList != 'animate') {
        jumper.classList.add('animate');
    }
    setTimeout(function () {
        jumper.classList.remove('animate');
    }, 500)
}
var chackDead = setInterval(function () {
    var characterTop = parseInt(window.getComputedStyle(jumper).getPropertyValue('top'));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
        block.style.animation = 'none';
        block.style.display = 'none';
        alert('Yutqazdingiz!!!!');
    }
}, 10);