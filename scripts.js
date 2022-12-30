function muestra_neon_card(elemento){
    var item = elemento.dataset.item;
    console.log('borde_top_card_'+item);
    document.getElementById('borde_top_card_'+item).style.display="";
    document.getElementById('borde_bottom_card_'+item).style.display="";
}
function oculta_neon_card(elemento){
    var item = elemento.dataset.item;
    document.getElementById('borde_top_card_'+item).style.display="none";
    document.getElementById('borde_bottom_card_'+item).style.display="none";
}