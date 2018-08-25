/**
 * For more information on using remark, please check out the wiki pages:
 * https://github.com/gnab/remark/wiki
 */
var slideShow = remark.create({
    // Set the slideshow display ratio
    // Default: '4:3'
    // Alternatives: '16:9', ...
    ratio: '16:9',

    // Navigation options
    navigation: {
        // Enable or disable navigating using scroll
        // Default: true
        // Alternatives: false
        scroll: false,

        // Enable or disable navigation using touch
        // Default: true
        // Alternatives: false
        touch: true,

        // Enable or disable navigation using click
        // Default: false
        // Alternatives: true
        click: false
    },

    

    // Enable or disable counting of incremental slides in the slide counting
    countIncrementalSlides: false,
    slideNumberFormat: 'stevenhicks.me/your-first-react-app 🦄 @pepopowitz',

    // For more options see:
    // https://github.com/gnab/remark/wiki/Configuration#highlighting
    highlightLanguage: 'remark',
    highlightStyle: 'tomorrow',
    highlightLines: true,
    highlightSpans: false
});

slideShow.on('showSlide', function(slide) {
    if (slide.properties.name && slide.properties['animated-background']) {
        var element = document.getElementById('slide-' + slide.properties.name);
        if (element) {
            //ticks in the querystring because chrome won't start the animation over
            // if we enter it a second time.
            var ticks = new Date().getTime();
            var url =
                'url(' +
                slide.properties['animated-background'] +
                '?t=' +
                ticks +
                ')';

            element.style.backgroundImage = url;
        }
    }
});

slideShow.on('hideSlide', function(slide) {
    if (slide.properties.name && slide.properties['animated-background']) {
        //revert to the original background-image.
        var element = document.getElementById('slide-' + slide.properties.name);
        if (element) {
            element.style.backgroundImage =
                slide.properties['background-image'];
        }
    }
});
