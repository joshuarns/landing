$(document).ready(function() {
    $("#clickOne").click(function() {
        $("#headingOne").slideclick("slow");
    });
    $("#clickTwo").click(function() {
        $("#headingTwo").slideclick("slow");
    });
    $("#clickThree").click(function() {
        $("#headingThree").slideclick("slow");
    });
    $("#clickFour").click(function() {
        $("#headingFour").slideclick("slow");
    });
    $("#clickFive").click(function() {
        $("#headingFive").slideclick("slow");
    });
    $("#clickSix").click(function() {
        $("#headingSix").slideclick("slow");
    });
    $("#clickSeven").click(function() {
        $("#headingSeven").slideclick("slow");
    });
    $("#clickEight").click(function() {
        $("#headingEight").slideclick("slow");
    });
    $("#clickNine").click(function() {
        $("#headingNine").slideclick("slow");
    });
    $("#clickTen").click(function() {
        $("#headingTen").slideclick("slow");
    });
    $("#clickEleven").click(function() {
        $("#headingEleven").slideclick("slow");
    });
    $("#clickTwelve").click(function() {
        $("#headingTwelve").slideclick("slow");
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
        $("#brandSelecTwo").delay(400).fadeIn();
    });
});