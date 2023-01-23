$(".modal_overlay") .on("click", function(e){
if($(e.target).closest(".modal").length == 0){
    $(this).fadeOut();
}
});
$(".close") .on("click", function(){
    $(this).parents(".modal_overlay").fadeOut()
});

$("#open_modal").on ("click", function(){
    $(".modal_overlay").fadeIn()
})