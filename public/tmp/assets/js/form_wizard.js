/* ============================================================
 * Form Wizard
 * Multistep form wizard using Bootstrap Wizard Plugin
 * For DEMO purposes only. Extract what you need.
 * ============================================================ */
(function($) {

    'use strict';

    $(document).ready(function() {

        $('#rootwizard').bootstrapWizard({
            onTabShow: function(tab, navigation, index) {

                var $total = navigation.find('li').length;
                var $current = index + 1;
                if($current == 1 && cart.customer != null){
                    console.log('disable')
                    $('#rootwizard').find('.pager .previous').show().removeClass('disabled');
                }
                // If it's the last tab then hide the last button and show the finish instead
                if ($current >= $total) {
                    $('#rootwizard').find('.pager .next').hide();
                    $('#rootwizard').find('.pager .finish').show().removeClass('disabled hidden');
                } else {
                    $('#rootwizard').find('.pager .next').show();
                    $('#rootwizard').find('.pager .finish').hide();
                }

                var li = navigation.find('li a.active').parent();

                var btnNext = $('#rootwizard').find('.pager .next').find('button');
                var btnPrev = $('#rootwizard').find('.pager .previous').find('button');

                // remove fontAwesome icon classes
                function removeIcons(btn) {
                    btn.removeClass(function(index, css) {
                        return (css.match(/(^|\s)fa-\S+/g) || []).join(' ');
                    });
                }
                if ($current > 1 && $current < $total) {

                    var nextIcon = li.next().find('.fa');
                    var nextIconClass = nextIcon.attr('class').match(/fa-[\w-]*/).join();

                    removeIcons(btnNext);
                    btnNext.addClass(nextIconClass + ' btn-animated from-left fa');

                    var prevIcon = li.prev().find('.fa');
                    var prevIconClass = prevIcon.attr('class').match(/fa-[\w-]*/).join();

                    removeIcons(btnPrev);
                    btnPrev.addClass(prevIconClass + ' btn-animated from-left fa');
                } else if ($current == 1) {
                    // remove classes needed for button animations from previous button
                    console.log('current' + $current);
                    btnPrev.removeClass('btn-animated from-left fa');
                    removeIcons(btnPrev);
                } else {
                    // remove classes needed for button animations from next button
                    btnNext.removeClass('btn-animated from-left fa');
                    removeIcons(btnNext);
                }
            },
            onNext: function(tab, navigation, index) {
                console.log("Showing next tab" + index);
                if(confirm('Are you sure you want to next step?'))
                {
                    switch(index){
                        case 1:
                            if(cart.owner_name != null && cart.shippingaddress != null)
                            {
                                console.log(index);
                                appendData();
                            }
                            else
                            {
                                alert('Please select customer and shipping address first');
                                return false;
                            }
                            break;
                        case 2:
                            if(cart.detail != null)
                            {
                                console.log(index);
                                appendData();
                            }
                            else 
                            {
                                alert('Please add product first');
                                return false;
                            }
                            break;
                        case 3:
                            if(cart.payment_type != null)
                            {
                                console.log(index);
                                appendData();
                            }
                            else
                            {
                                alert('Please select payment method first');
                                return false;
                            }
                            break;
                        case 4:
                            if(cart.msg != 'Success')
                            {
                                console.log(cart.msg)
                                console.log('gagal')

                                confirmFailedOrder();
                            }else{
                                console.log(cart.msg);
                                console.log('berhasil');
                                
                                confirmsucessOrder();
                            }
                    }
                        
                }
                else
                {
                    return false;
                }
            },
            onPrevious: function(tab, navigation, index) {
                console.log("Showing previous tab" + index);
                var current = index + 1;
            },
            onInit: function() {
                $('#rootwizard ul').removeClass('nav-pills');
            }

        });

        $('.remove-item').click(function() {
            $(this).parents('tr').fadeOut(function() {
                $(this).remove();
            });
        });

    });

})(window.jQuery);