$(document).ready(function() {
    $("#toggleOne").click(function() {
        $("#headingOne").slideToggle("slow");
    });
    $("#toggleTwo").click(function() {
        $("#headingTwo").slideToggle("slow");
    });
    $("#toggleThree").click(function() {
        $("#headingThree").slideToggle("slow");
    });
    $("#toggleFour").click(function() {
        $("#headingFour").slideToggle("slow");
    });
    $("#toggleFive").click(function() {
        $("#headingFive").slideToggle("slow");
    });
    $("#toggleSix").click(function() {
        $("#headingSix").slideToggle("slow");
    });
    $("#toggleSeven").click(function() {
        $("#headingSeven").slideToggle("slow");
    });
    $("#toggleEight").click(function() {
        $("#headingEight").slideToggle("slow");
    });
    $("#toggleNine").click(function() {
        $("#headingNine").slideToggle("slow");
    });
    $("#toggleTen").click(function() {
        $("#headingTen").slideToggle("slow");
    });
    $("#toggleEleven").click(function() {
        $("#headingEleven").slideToggle("slow");
    });
    $("#toggleTwelve").click(function() {
        $("#headingTwelve").slideToggle("slow");
    });

    $(window).load(function() {
        $("#brand").show("slide", {
            direction: "up"
        }, 2000);
    });
    $(window).load(function() {
        $("#brand-hires").show("slide", {
            direction: "up"
        }, 2000);
    });
    $(window).load(function() {
        $("#brandSelectOne").delay(100).fadeIn();
        $("#brandSelecTwo").delay(300).fadeIn();
    });
});