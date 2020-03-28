// Start Detail Customer
function myFunction(data, modul='') {
  var id = data;
  var prevBtn = $('li.previous');
  prevBtn.removeClass('disabled');
  $('.card-header').hide()
  $('.body').hide()    
  prevBtn.on('click', function() {
    $('#detailcust').hide();
    $('#select-address').hide();
    $('.card-header').show();
    $('.body').show();
    cart = [];
    prevBtn.addClass('disabled');
  });
  localforage.getItem(prefix_app+modul).then(function(response) {  
      if(response === null){
          // console.log(1)                                  
      } else {
          // console.log(2)
        $('#detailcust').show()
        $('#select-address').show();
        
        var data = JSON.parse(response);
        $.each(data, function(i, obj){
          // console.log(obj['id'])
           if (Number(id) === obj['id']) {
                cart['customer'] = obj;
                console.log(cart)
                if(obj.outlettype_id == 1)
                {
                  var outlet_type = 'Personal';
                }else if(obj.outlettype_id == 2){
                 var outlet_type = 'Toko';
                }else{
                  var outlet_type = 'Perusahaan';
                }
                $('.body-detail').html('')
                $('.body-detail').append('<div class="container"><br>Customer Type'+' &nbsp;&nbsp;&nbsp;'+outlet_type+'<text class="pull-right">Customer Name'+'  &nbsp;&nbsp;&nbsp;<span class="owner_name_c underline">'+obj.owner_outlet_firstname+'</span></text></div>\
                  <br>')

                cart['owner_name'] = obj.owner_outlet_firstname +' '+obj.owner_outlet_lastname;
                cart['outlet_id'] = obj.id;
                cart['npwp_type'] = obj.npwp_type;
                if(obj.owner_telephone != null)
                {
                  var owner_telephone = obj.owner_telephone;
                }else
                {
                  var owner_telephone = '';
                }
                var owner_hp =  obj.owner_hp;
                $('.select-shipping').html('')
                $.each(obj.Address, function(i, obj){  
                  $('.select-shipping').append('<div class="col-md-5"><textarea class="form-control" style="margin-top: 0px; margin-bottom: 0px;height: 155px; color:black" placeholder="" disabled="" name="cust-address-'+obj.id+'">'+ obj.address+', '+obj.nama_kelurahan+ ', '+ obj.nama_kecamatan+ ', '+obj.nama_kota+', '+obj.nama_provinsi+'\
                      \
                      \
                      \
                      '+owner_hp+','+owner_telephone+'\
                      \
                      \
                      \
                      Stockpoint\
                      \
                      \
                      \
                      '+obj.nama_stockpoint+'\
                    </textarea><br>\
                       <p><button class="btn btn-primary" onclick="sp1('+obj.id+')" name="select1">Select</button></p></div>')

                  cart['nama_stockpoint'] = obj.nama_stockpoint;
                  cart['delivery_address'] = obj.address;

                })


                $('.owner_name_c').on('click', function(){
                  showdetailCustomer(cart.customer, cart.delivery_address)
                })

                if(obj.Point != '0')
                {
                  cart['own_point'] = obj.Point;
                } else{
                  cart['own_point'] = obj.Point;
                }

           }
         })        
      }
  })
}
// Payment Method
$('[name="cod"]').on('click', function(){
$('[name="cod-msg"]').show();
$('[name="info-pembayaran"]').hide();
cart['payment_type'] = 'Cash On Delivery';
})

$('[name="cash"]').on('click', function(){
$('[name="cod-msg"]').hide();
$('[name="info-pembayaran"]').show();
cart['payment_type'] = 'Cash On Delivery';
})