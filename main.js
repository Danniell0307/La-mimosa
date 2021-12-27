const menu_id = document.getElementById('menu_id');
const nav_id = document.getElementById('nav_id');
const cross_id = document.getElementById('cross-id');
const select_id = document.getElementById('select-id');
const btn_mas = document.getElementById('icon');


menu_id.addEventListener('click', () => {

    nav_id.classList.add('nav-show')
    menu_id.classList.remove('icon-menu')
    cross_id.classList.add('icon-cancel')
})

cross_id.addEventListener('click', () => {

    nav_id.classList.remove('nav-show')
    menu_id.classList.add('icon-menu')
    cross_id.classList.remove('icon-cancel')
})

//-------------boton social

btn_mas.addEventListener('click', () => {

    btn_mas.classList.toggle('icon-cancel-1')
    btn_mas.classList.toggle('icon-plus')
})


//-------------------------------carta




select_id.addEventListener('click', () => {

    select_id.classList.toggle('arrow-reverse');
});


function onChangeSelect(){

    var opcion = document.getElementById('select-id').value;

    if (opcion == 1){
        $('#cafeteria').show();
        $('#bebidas').hide();
        $('#batidos').hide();
        $('#alcochol').hide();
        $('#pulgaditas').hide();
        $('#piadina').hide();
        $('#hamburguesas').hide();
        $('#sandwiches').hide();
        $('#picar').hide();
    }
    else
    if (opcion == 2){
        $('#cafeteria').hide();
        $('#bebidas').show();
        $('#batidos').hide();
        $('#alcochol').hide();
        $('#pulgaditas').hide();
        $('#piadina').hide();
        $('#hamburguesas').hide();
        $('#sandwiches').hide();
        $('#picar').hide();
    }
    else
    if(opcion == 3){
        $('#cafeteria').hide();
        $('#bebidas').hide();
        $('#batidos').show();
        $('#alcochol').hide();
        $('#pulgaditas').hide();
        $('#piadina').hide();
        $('#hamburguesas').hide();
        $('#sandwiches').hide();
        $('#picar').hide();
    }

    if (opcion == 4){
        $('#cafeteria').hide();
        $('#bebidas').hide();
        $('#batidos').hide();
        $('#alcochol').show();
        $('#pulgaditas').hide();
        $('#piadina').hide();
        $('#hamburguesas').hide();
        $('#sandwiches').hide();
        $('#picar').hide();
    }
    else
    if (opcion == 5){
        $('#cafeteria').hide();
        $('#bebidas').hide();
        $('#batidos').hide();
        $('#alcochol').hide();
        $('#pulgaditas').show();
        $('#piadina').hide();
        $('#hamburguesas').hide();
        $('#sandwiches').hide();
        $('#picar').hide();
    }
    else
    if(opcion == 6){
        $('#cafeteria').hide();
        $('#bebidas').hide();
        $('#batidos').hide();
        $('#alcochol').hide();
        $('#pulgaditas').hide();
        $('#piadina').show();
        $('#hamburguesas').hide();
        $('#sandwiches').hide();
        $('#picar').hide();
    }
    if (opcion == 7){
        $('#cafeteria').hide();
        $('#bebidas').hide();
        $('#batidos').hide();
        $('#alcochol').hide();
        $('#pulgaditas').hide();
        $('#piadina').hide();
        $('#hamburguesas').show();
        $('#sandwiches').hide();
        $('#picar').hide();
    }
    else
    if (opcion == 8){
        $('#cafeteria').hide();
        $('#bebidas').hide();
        $('#batidos').hide();
        $('#alcochol').hide();
        $('#pulgaditas').hide();
        $('#piadina').hide();
        $('#hamburguesas').hide();
        $('#sandwiches').show();
        $('#picar').hide();
    }
    else
    if(opcion == 9){
        $('#cafeteria').hide();
        $('#bebidas').hide();
        $('#batidos').hide();
        $('#alcochol').hide();
        $('#pulgaditas').hide();
        $('#piadina').hide();
        $('#hamburguesas').hide();
        $('#sandwiches').hide();
        $('#picar').show();
    }
}

