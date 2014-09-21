$(document).ready(function() {
    $('#contactForm')
        // IMPORTANT: You must declare .on('init.field.bv')
        // before calling .bootstrapValidator(options)
        .on('init.field.bv', function(e, data) {
            // data.bv      --> The BootstrapValidator instance
            // data.field   --> The field name
            // data.element --> The field element

            var $parent    = data.element.parents('.form-group'),
                $icon      = $parent.find('.form-control-feedback[data-bv-icon-for="' + data.field + '"]'),
                options    = data.bv.getOptions(),                      // Entire options
                validators = data.bv.getOptions(data.field).validators; // The field validators

            if (validators.notEmpty && options.feedbackIcons && options.feedbackIcons.required) {
                // The field uses notEmpty validator
                // Add required icon
                $icon.addClass(options.feedbackIcons.required).show();
            }
        })

        .bootstrapValidator({
            feedbackIcons: {
                required: 'fa fa-asterisk',
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh'
            },
            fields: {
                fname: {
                    validators: {
                        notEmpty: {
                            message: 'First name is required'
                        }
                    }
                },

                lname: {
                    validators: {
                        notEmpty: {
                            message: 'Last name is required'
                        }
                    }
                },

                email: {
                	validators : {
                		notEmpty: {
                            message: 'Email is required'
                        },
                		emailAddress: {
                			message: 'proper email address needed'
                		}
                	}
                },

                phone: {
                    validators: {
                        numeric: {
                            message: 'must be a number'
                        }
                    }
                },
               
                description: {
                    validators: {
                        stringLength: {
                            max: 300,
                            message: 'The description must be less than 300 characters long'
                        }
                    }
                },
                price: {
                    validators: {
                        notEmpty: {
                            message: 'The price is required'
                        },
                        numeric: {
                            message: 'The price must be a number'
                        }
                    }
                }
                
            }
        })

        .on('status.field.bv', function(e, data) {
            // Remove the required icon when the field updates its status
            var $parent    = data.element.parents('.form-group'),
                $icon      = $parent.find('.form-control-feedback[data-bv-icon-for="' + data.field + '"]'),
                options    = data.bv.getOptions(),                      // Entire options
                validators = data.bv.getOptions(data.field).validators; // The field validators

            if (validators.notEmpty && options.feedbackIcons && options.feedbackIcons.required) {
                $icon.removeClass(options.feedbackIcons.required).addClass('fa');
            }
        });
});