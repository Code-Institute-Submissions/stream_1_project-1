function load_header() {
    $("header").load("assets/include/header.html");
}

function load_footer() {
    $("footer").load("assets/include/footer.html");
}

function get_year() {
    $(".year").text((new Date).getFullYear());
}

function submit_booking() {
    $(".booking-confirmed").css("display", "initial");
}
