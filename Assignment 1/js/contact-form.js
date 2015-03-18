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
                	validators: {   
                        notEmpty: {
                            message: 'enter an email address'
                        },
                        emailAddress: {
                            message: 'Email not in proper format'
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



// $.fn.serializeObject = function()
// {
//     var o = {};
//     var a = this.serializeArray();
//     $.each(a, function() {
//         if (o[this.name] !== undefined) {
//             if (!o[this.name].push) {
//                 o[this.name] = [o[this.name]];
//             }
//             o[this.name].push(this.value || '');
//         } else {
//             o[this.name] = this.value || '';
//         }
//     });
//     return o;
// };


// $(function() {
//     $('form').submit(function() {
//         var obj = JSON.stringify($('form').serializeObject());
//         console.save(JSON.parse(obj));
//         return false;
//     });
// });


// (function(console){

// console.save = function(data, filename){

//     if(!data) {
//         console.error('Console.save: No data')
//         return;
//     }

//     if(!filename) filename = 'contact-form.json'

//     if(typeof data === "object"){
//         data = JSON.stringify(data, undefined, 4)
//     }

//     var blob = new Blob([data], {type: 'text/json'}),
//         e    = document.createEvent('MouseEvents'),
//         a    = document.createElement('a')

//     a.download = filename
//     a.href = window.URL.createObjectURL(blob)
//     a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':')
//     e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
//     a.dispatchEvent(e)
//  }
// })(console)

