$("#buttonCategories").click(function(){
if(window.matchMedia("(max-width:767px)").matches){
    $("#buttonCategories").after($("#Categories").slideToggle("fast"))
}else{
    $("#header").after($("#categories").slideToggle("fast"))
}
});