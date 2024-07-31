$(document).ready(function(){

    $("#toggle_button").click(function(){
        var outerheight = $("#jq_id").outerHeight(true);
        var outerwidth = $("#jq_id").outerWidth(true);
        alert("outerheight = " + outerheight + " outerwidth = " + outerwidth);
    });

})