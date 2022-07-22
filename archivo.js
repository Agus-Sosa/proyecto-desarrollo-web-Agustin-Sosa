window.onload = function () {
    var btn_menu = document.querySelector('.btn_menu');
    var unorder = document.querySelector('.unorder' );

    if (btn_menu) {
        btn_menu.addEventListener('click', () => {
            unorder.classList.toggle('show');
        })
        
    }
}

var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
myInput.focus()
})