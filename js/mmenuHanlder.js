jQuery(document).ready(function () {
    if (window.innerWidth <= 1024) {
        jQuery("#etd_mmenu_parent nav").attr("id", "etd_mmenu");
        jQuery("#etd_mmenu_parent nav ul").css("display", "block");
        jQuery("#etd_mmenu").mmenu({
            extensions: ['theme-black', 'border-none', 'fx-menu-slide', 'pagedim-black'],
            navbar: {
                title: 'Eltand Navigation'
            },
            offCanvas: {
                position: "left",
                zposition: "front"
            },
            theme: "dark",
            navbars: [{
                position: "bottom",
                content: [
                    "<a class='fa fa-brands fa-linkedin' href='https://www.linkedin.com/company/72672682'></a>",
                    "<a class='fa fa-brands fa-instagram' href='https://www.instagram.com/eltand.official/'></a>",
                    "<a class='fa fa-facebook' href='https://www.facebook.com/Eltand/'></a>"
                ]
            }]
        });
    }
});
