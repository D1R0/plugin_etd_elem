const ETD_Helper = {
    init: function () {
        this.wrapLetters();
        this.attachEvents();
        this.reverseBurning();
    },

    wrapLetters: function () {
        var text = jQuery('#ETD_burningText h1').text();
        var letters = text.split('').map(letter => {
            if (letter === ' ') {
                return `<span class="ETD_span" style="white-space: pre;">&nbsp;</span>`;
            } else {
                return `<span class="ETD_span burn">${letter}</span>`;
            }
        }).join('');
        jQuery('#ETD_burningText h1').html(letters);
    },

    startBurning: function () {
        jQuery('#ETD_burningText h1 span').each(function (index) {
            setTimeout(() => {
                jQuery(this).removeClass('ETD_recover');
            }, index * 50);
        });
    },

    reverseBurning: function () {
        jQuery('#ETD_burningText h1 span').each(function (index) {
            setTimeout(() => {
                jQuery(this).addClass('ETD_recover');
            }, index * 50);
        });
    },

    attachEvents: function () {
        jQuery('#ETD_burnButton').on('click', () => this.startBurning());
        jQuery('#ETD_reverseButton').on('click', () => this.reverseBurning());
    }
};

jQuery('.slider_etd').each(function () {
    let $this = jQuery(this);
    let $group = $this.find('.slide_group_etd');
    let $slides = $this.find('.slide_etd');
    let bulletArray = [];
    let currentIndex = 0;
    let timeout;

    function move(newIndex) {
        let animateLeft, slideLeft;

        advance();

        if ($group.is(':animated') || currentIndex === newIndex) {
            return;
        }

        bulletArray[currentIndex].removeClass('active');
        bulletArray[newIndex].addClass('active');

        if (newIndex > currentIndex) {
            slideLeft = '100%';
            animateLeft = '-100%';
        } else {
            slideLeft = '-100%';
            animateLeft = '100%';
        }

        $slides.eq(newIndex).css({
            display: 'block',
            left: slideLeft
        });
        $group.animate({
            left: animateLeft
        }, function () {
            $slides.eq(currentIndex).css({
                display: 'none'
            });
            $slides.eq(newIndex).css({
                left: 0
            });
            $group.css({
                left: 0
            });
            currentIndex = newIndex;
        });
    }

    function advance() {
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            if (currentIndex < ($slides.length - 1)) {
                move(currentIndex + 1);
            } else {
                move(0);
            }
        }, 4000);
    }

    jQuery('.next_btn_etd').on('click', function () {
        if (currentIndex < ($slides.length - 1)) {
            move(currentIndex + 1);
        } else {
            move(0);
        }
    });

    jQuery('.previous_btn_etd').on('click', function () {
        if (currentIndex !== 0) {
            move(currentIndex - 1);
        } else {
            move(3);
        }
    });

    jQuery.each($slides, function (index) {
        let $button = jQuery('<a class="slide_btn">&bull;</a>');

        if (index === currentIndex) {
            $button.addClass('active');
        }
        $button.on('click', function () {
            move(index);
        }).appendTo('.slide_buttons_etd');
        bulletArray.push($button);
    });

    $this.on('mouseenter', function () {
        clearTimeout(timeout);
    }).on('mouseleave', function () {
        advance();
    });

    advance();
});