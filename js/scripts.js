/*!
* Start Bootstrap - Resume v7.0.5 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
var href = window.location.href;

if (href.includes('carousel')) {
    // change active class depending on which image was clicked in thumbnail gallery
    var img_id = href.split("#").pop();
    document.getElementsByClassName('carousel-item active')[0].classList.remove('active');
    document.getElementById(img_id).classList.add('active');

    // navigate carousel with arrow keys
    window.addEventListener("keydown", (e) => {
        if (e.keyCode === 37) {
        // Previous
        document.querySelector(".carousel-control-prev").click();
        return false;
        }
        if (e.keyCode === 39) {
        // Next
        document.querySelector(".carousel-control-next").click();
        return false;
        }
    });
} else if (href.includes('index')) {
    // navigate carousel with arrow keys
    window.addEventListener("keydown", (e) => {
        if (e.keyCode === 37) {
        // Previous
        document.querySelector(".carousel-control-prev").click();
        return false;
        }
        if (e.keyCode === 39) {
        // Next
        document.querySelector(".carousel-control-next").click();
        return false;
        }
    });
};
$('.carousel').bcSwipe({ threshold: 50 });
