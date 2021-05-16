$(function(){

    $("a").click(function(event){
        if (this.hash !== "") {
            event.preventDefault();

            var suave = this.hash; 

            $("html, body"). animate({
                scrollTop: $(suave).offset().top
            }, 1000, function(){
                window.location.hash = suave;
            }) ;
        }
    });

});