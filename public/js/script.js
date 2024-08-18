const clickMe = () => {
    alert("Thanks for clicking me. Hope you have a nice day!")
}
$(document).ready(function () {
    //$('.materialboxed').materialbox();
    $('#clickMeButton').click(() => {
        clickMe();  //Type of Lazy Loading
        //$.ajax({url: "index.html", success: function(result){
        //    alert("This is a students portal where you can freely ask a doubt or share a problem")
        //  }});
    })
});
