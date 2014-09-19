// easy management of menu on all pages that has this particular menu

/*global document */
document.write('<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">' +
        '<div class="container">' +
            '<div class="navbar-header">' +
                '<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">' +
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
                '<ul class="nav navbar-nav">' +
                    '<li class="dropdown">' +
                       '<a data-toggle="dropdown" href="#">Information</a>' +
                                  '<ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">' +
                                        '<li role="presentation"><a role="menuitem" tabindex="-1" href="../Information/Reducing Risk and Enhancing Resilience.html">Reducing Risk and Enhancing Resilience</a></li>' +
                                        '<li role="presentation" class="divider"></li>' +
                                        '<li role="presentation"><a role="menuitem" tabindex="-1" href="../Information/more info.html">More Info</a></li>' +
                                '</ul>' +
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