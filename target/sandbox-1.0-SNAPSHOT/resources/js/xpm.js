/**
 * XPM specific functions
 */
(function($) {
    // initialize global variable
    var isInXpm = false;

    // check and set global variable
    $.fn.checkIfInXpm = function() {
        // check via availability of Tridion objects
        if (typeof Tridion != "undefined" && typeof Tridion.Web.UI.SiteEdit != "undefined") {
            console.log("Experience Manager is loaded.");
            isInXpm = true;

            // display elements specifically for experience manager
            $(".xpm-only").show();
        } else {
            console.log("Experience Manager is NOT loaded.");
            isInXpm = false;

            // hide elements specifically for experience manager
            $(".xpm-only").hide();
        }
    };
}(jQuery));

$(document).ready(function() {
    // wait 5 seconds after document ready (to complete XPM load) and check if we are in XPM (setting global variable)
    setTimeout(function() {
        $().checkIfInXpm();
    }, 5000);
});