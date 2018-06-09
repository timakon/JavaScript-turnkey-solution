$(document).ready(function () {
    showStartModel();
})

function showStartModel() {
    if (localStorage.getItem('modal-yes-btn')!=1){
        setTimeout(function () {
            $('#exampleModal').modal('show');
            $('#modal-yes-btn').on('click', function () {
                //Сохранить состояние
                //Закрыть модальное окно
                localStorage.setItem('modal-yes-btn', 1)
                $('#exampleModal').modal('hide')
            })
        },2000);
    }
}