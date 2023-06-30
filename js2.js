$(document).ready(function(){
    $("#convert").on("click", function(){
        var lang_one = $("#lang_one").val();
        var lang_two = $("#lang_two").val();
        var text = $("#text").val();

        $.ajax({
            url: "php_file.php",
            type: "post",
            date: { lang_one:lang_one,lang_two:lang_two,text:text},
            success: function(status){
                console.log(status);
            },
        });
    });
});
