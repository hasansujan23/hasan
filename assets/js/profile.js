            var i = 0;
            var element = document.getElementById('barBtn');
            element.addEventListener("click", myFunction);

            function myFunction() {
                document.getElementById('navUl').classList.toggle("show");
            }

            $(document).ready(function() {
                var ck = 0;
                $(window).scroll(function() {
                    var top_of_element = $("#workId").offset().top;
                    var bottom_of_element = $("#workId").offset().top + $("#workId").outerHeight();
                    var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
                    var top_of_screen = $(window).scrollTop();

                    if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
                        ck++;

                        if (ck == 1) {
                            $('.Count').each(function() {
                                var $this = $(this);
                                jQuery({
                                    Counter: 0
                                }).animate({
                                    Counter: $this.text()
                                }, {
                                    duration: 5000,
                                    easing: 'swing',
                                    step: function() {
                                        $this.text(Math.ceil(this.Counter));
                                    }
                                });
                            });
                        }

                    } else {
                        // the element is not visible, do something else
                    }
                });


                //Home click
                $("#homeId").click(function(event) {
                    event.preventDefault();

                    $('html, body').animate({
                        scrollTop: $("#home-section").offset().top - 80
                    }, 2000);
                });

                //About click
                $("#aboutId").click(function(event) {
                    event.preventDefault();

                    $('html, body').animate({
                        scrollTop: $("#about-section").offset().top - 80
                    }, 2000);
                });

                //Expertise click
                $("#expertiseId").click(function(event) {
                    event.preventDefault();

                    $('html, body').animate({
                        scrollTop: $("#expertise-section").offset().top - 80
                    }, 2000);
                });

                //Experience click
                $("#experienceId").click(function(event) {
                    event.preventDefault();

                    $('html, body').animate({
                        scrollTop: $("#experience-section").offset().top - 80
                    }, 2000);
                });

                //Service click
                $("#serviceId").click(function(event) {
                    event.preventDefault();

                    $('html, body').animate({
                        scrollTop: $("#workId").offset().top - 80
                    }, 2000);
                });

                //Skill click
                $("#skillId").click(function(event) {
                    event.preventDefault();

                    $('html, body').animate({
                        scrollTop: $("#skill-section").offset().top - 80
                    }, 2000);
                });

                //work click
                $("#workId").click(function(event) {
                    event.preventDefault();

                    $('html, body').animate({
                        scrollTop: $("#work-section").offset().top - 80
                    }, 2000);
                });

                //Education click
                $("#educationId").click(function(event) {
                    event.preventDefault();

                    $('html, body').animate({
                        scrollTop: $("#education-section").offset().top - 80
                    }, 2000);
                });

                //Contact click
                $("#contactId").click(function(event) {
                    event.preventDefault();

                    $('html, body').animate({
                        scrollTop: $("#contact-section").offset().top - 80
                    }, 2000);
                });
            });