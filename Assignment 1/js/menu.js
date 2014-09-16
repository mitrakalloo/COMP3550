// easy management of menu on all pages that has this particular menu

/*global document */
document.write ( '<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">' +
        '<div class="container">' +
            '<div class="navbar-header">' +
                '<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">' +
                    '<span class="sr-only">Toggle navigation</span>' +
                    '<span class="icon-bar"></span>' +
                    '<span class="icon-bar"></span>' +
                    '<span class="icon-bar"></span>' +
                '</button>' +
                '<a class="navbar-brand" href="#">' +
                        '<ul class="nav navbar-nav" >' +
                            '<li>' +
                                '<a href="../Index/index.html">Home</a>' +
                            '</li>' +
                    '</ul>' +
                '</a>' +
            '</div>' +
            '<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">' +
                '<ul class="nav navbar-nav">'+
                   '<li>' +
                        '<a href="../Information/information.html">Information</a>' +
                    '</li>' +
                    '<li>' +
                      '<a href="../Problems/problems.html">Problems</a>' +
                    '</li>' +
                    '<li>' +
                        '<a href="../Solutions/solutions.html">Solutions</a>' +
                    '</li>' +
                    '<li>' +
                        '<a href="../Contact/contact.html">Contact</a>' +
                    '</li>' +
                '</ul>' +
            '</div>' +
        '</div>' +
    '</nav>');