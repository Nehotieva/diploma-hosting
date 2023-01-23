$(".about-items > div").on("click", function(){
    $(this).children(".about-icon").toggleClass("about-rotate-icon");
    $(this).parent(".about-items").toggleClass('change-color');
    $(this).next(".about-text").slideToggle(300);

})
$(".about_leads_items > div"). on("click", function(){
    $(this).parent(".about_leads_items").toggleClass("about_leads_blue");
    $(this).children(".about_leads_pretitle").toggleClass("change_color_leads");
    $(this).next(".about_leads_text").slideToggle(300);
})

$('#menuToggle #toggleCheckbox').change(function() {
    if(this.checked) {
        $('body').css({'overflow': "hidden" })
    }
    else {
        $('body').css({'overflow': "visible" })
    }
});

$('#home').on('click', function(e){
    e.preventDefault()
    $('html, body').animate({scrollTop: $('#about').offset().top}, 500)
    document.getElementById('toggleCheckbox').checked = false
    $('body').css({'overflow': "visible" })
});