$(document).ready(function(){

      $("input[name='demo1']").TouchSpin({

            // Minimum value.
            min: 1, 

            // Maximum value.
            max: 100, 

            // Applied when no explicit value is set on the input with the value attribute. 
            // Empty string means that the value remains empty on initialization.
            initval: '',
            replacementval: '',

            // Number of decimal points.
            decimals: 0,

            // none | floor | round | ceil
            forcestepdivisibility: 'round', 

            // Enables the traditional up/down buttons.
            verticalbuttons: false,

            // Class of the up button with vertical buttons mode enabled.
            verticalupclass: 'glyphicon glyphicon-chevron-up',

            // Class of the down button with vertical buttons mode enabled.
            verticaldownclass: 'glyphicon glyphicon-chevron-down',

            // Boost at every nth step.
            boostat: 5, 

            // If enabled, the the spinner is continually becoming faster as holding the button.
            booster: true,

            // Maximum step when boosted.
            maxboostedstep: 10, 

            // Text after the input.
            //postfix: '%', 

            // Text before the input.
            //prefix: '$', 

            // Extra class(es) for prefix.
            prefix_extraclass: '',

            //  Extra class(es) for postfix.
            postfix_extraclass: '',

            // Incremental/decremental step on up/down change.
            step: 1, 

            // Refresh rate of the spinner in milliseconds.
            stepinterval: 100, 

            // Time in milliseconds before the spinner starts to spin.
            stepintervaldelay: 500,

            //  Enables the mouse wheel to change the value of the input.
            mousewheel: true,

            //  Class(es) of down button.
            buttondown_class: 'btn btn-danger',

            //  Class(es) of up button.
            buttonup_class: 'btn btn-success',

            // Text for down button
            buttondown_txt: '-',

            // Text for up button
            buttonup_txt: '+'
            
          });

});
    //    var shoppingCartItems = [];

    // $(document).ready(function () {
    //     // Ki???m tra n???u ???? c?? sessionStorage["shopping-cart-items"] hay ch??a?
    //     if (sessionStorage["shopping-cart-items"] != null) {
    //         shoppingCartItems = JSON.parse(sessionStorage["shopping-cart-items"].toString());
    //     }

    //     // Hi???n th??? th??ng tin t??? gi??? h??ng
    //     displayShoppingCartItems();
    // });


    // // S??? ki???n click c??c button c?? class=".add-to-cart"
    // $(".add-to-cart").click(function () {
    //     var button = $(this); // L???y ?????i t?????ng button m?? ng?????i d??ng click
    //     var id = button.attr("id"); // id c???a s???n ph???m l?? id c???a button
    //     var name = button.attr("data-name"); // name c???a s???n ph???m l?? thu???c t??nh data-name c???a button
    //     var price = button.attr("data-price"); // price c???a s???n ph???m l?? thu???c t??nh data-price c???a button
    //     var quantity = $('#demo1').val(); // S??? l?????ng


    //     var item = {
    //         id: id,
    //         name: name,
    //         price: price,
    //         quantity: quantity
    //     };

    //     var exists = false;
    //     if (shoppingCartItems.length > 0) {
    //         $.each(shoppingCartItems, function (index, value) {
    //             // N???u m???t h??ng ???? t???n t???i trong gi??? h??ng th?? ch??? c???n t??ng s??? l?????ng m???t h??ng ???? trong gi??? h??ng.
    //             if (value.id == item.id) {
    //                 value.quantity++;
    //                 exists = true;
    //                 return false;
    //             }
    //         });
    //     }

    //     // N???u m???t h??ng ch??a t???n t???i trong gi??? h??ng th?? b??? sung v??o m???ng
    //     if (!exists) {
    //         shoppingCartItems.push(item);
    //     }

    //     // L??u th??ng tin v??o sessionStorage
    //     sessionStorage["shopping-cart-items"] = JSON.stringify(shoppingCartItems); // Chuy???n th??ng tin m???ng shoppingCartItems sang JSON tr?????c khi l??u v??o sessionStorage
    //     // G???i h??m hi???n th??? gi??? h??ng
    //     displayShoppingCartItems();
    // });

    // // X??a h???t gi??? h??ng shoppingCartItems
    // $("#button-clear").click(function () {
    //     shoppingCartItems = [];
    //     sessionStorage["shopping-cart-items"] = JSON.stringify(shoppingCartItems);
    //     $("#table-products > tbody").html("");
    // });


    // // Hi???n th??? gi??? h??ng ra table
    // function displayShoppingCartItems() {
    //     if (sessionStorage["shopping-cart-items"] != null) {
    //         shoppingCartItems = JSON.parse(sessionStorage["shopping-cart-items"].toString()); // Chuy???n th??ng tin t??? JSON trong sessionStorage sang m???ng shoppingCartItems.

    //         $("#table-products > tbody").html("");
    //         // Duy???t qua m???ng shoppingCartItems ????? append t???ng item d??ng v??o table
    //         $.each(shoppingCartItems, function (index, item) {
    //             var htmlString = "";
    //             htmlString += "<tr>";
    //             htmlString += "<td>" + item.id + "</td>";
    //             htmlString += "<td>" + item.name + "</td>";
    //             htmlString += "<td style='text-align: right'>" + item.price + "</td>";
    //             htmlString += "<td style='text-align: right'>" + item.quantity + "</td>";
    //             htmlString += "<td style='text-align: right'>" + item.price * item.quantity + "</td>";
    //             htmlString += "</tr>";

    //             $("#table-products > tbody:last").append(htmlString);

    //         });
    //     }
    // }
// });
          



