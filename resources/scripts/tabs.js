$(document).ready(function(){

    $('ul.tabs li').click(function(){
        console.log("111111111");
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass(' current');
        $("#"+tab_id).addClass(' current');
    })

})
