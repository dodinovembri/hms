// Modal New Shipping Addresss
function new_shippingaddress()
{
  $('#modal-public .modal-body').html('')
  $('#modal-public .title').html('')
  $('#modal-public').modal('show')

  $('#modal-public .title').append('New Shipping Address')
  $('#modal-public .modal-body').append('<text class="alert-msg"></text>\
    <form id="new-shipping" class="form-horizontal" role="form" autocomplete="off">\
      	<div class="form-group row">\
      		<div class="col-md-6">\
        		<label for="fname" class="col-md-4 control-label">First Name</label>\
        		<div class="col-md-8">\
          			<input type="text" class="form-control" id="fname" placeholder="First name" name="first_name" required>\
        		</div>\
      		</div>\
      		<div class="col-md-6">\
            	<label for="fname" class="col-md-4 control-label">Last Name</label>\
        		<div class="col-md-8">\
          			<input type="text" class="form-control" id="fname" placeholder="Full name" name="last_name" required>\
        		</div>\
      		</div>\
      	</div>\
      	<div class="form-group row">\
        	<label for="fname" class="col-md-3 control-label">Street Address</label>\
        	<div class="col-md-9">\
          		<input type="text" class="form-control" id="fname" placeholder="Street Address" name="address" required>\
        	</div>\
      	</div>\
      	<div class="form-group row">\
      		<div class="col-md-6">\
	        	<label for="fname" class="col-md-3 control-label">Province</label>\
	        	<div class="col-md-9">\
	          		<select class="full-width form-control" data-init-plugin="select2"  onchange="chooseprovince(this);" id="province" name="province">\
	          		</select>\
	        	</div>\
	        </div>\
	        <div class="col-md-6">\
	        	<label for="fname" class="col-md-3 control-label">City</label>\
		        <div class="col-md-9">\
		          <select class="full-width form-control" data-init-plugin="select2" name="city" onchange="choosecity();">\
		          </select>\
		        </div>\
	        </div>\
      	</div>\
     	<div class="form-group row">\
     		<div class="col-md-6">\
		        <label for="fname" class="col-md-3 control-label">District</label>\
		        <div class="col-md-9">\
		          <select class="full-width form-control" data-init-plugin="select2" name="district" onchange="choosedistrict();">\
		          </select>\
		        </div>\
		    </div>\
		    <div class="col-md-6">\
		    	<label for="fname" class="col-md-3 control-label">Sub District</label>\
		        <div class="col-md-9">\
		          <select class="full-width form-control" data-init-plugin="select2" name="subdistrict" >\
		          </select>\
		        </div>\
		    </div>\
      	</div>\
      	<div class="form-group row">\
	        <label for="fname" class="col-md-3 control-label">Zipcode</label>\
	        <div class="col-md-9">\
	        	<input type="text" class="form-control" id="fname" placeholder="Zipcode" name="zipcode" required>\
	        </div>\
      	</div>\
      	<div class="form-group row">\
      		<div class="col-md-6">\
		        <label for="fname" class="col-md-3 control-label">Mobile No</label>\
		        <div class="col-md-9">\
		         	<input type="text" class="form-control" id="fname" placeholder="Mobile No" name="mobile_number" required>\
		        </div>\
	   		</div>\
	    	<div class="col-md-6">\
	        	<label for="fname" class="col-md-3 control-label">Telephone</label>\
        		<div class="col-md-9">\
          			<input type="text" class="form-control" id="fname" placeholder="Telephone" name="telephone" required>\
        		</div>\
        	</div>\
      </div>\
    </form>\
     <button class="btn btn-primary" onclick="getdataspCoverage()">Submit</button>\
')
  
}

// Modal Point Reedem 
function point_reedem()
{
	
	$('#modal-public').modal('show')
	$('#modal-public .title').html('')
	$('#modal-public .title').append('Saldo Point')

	$('#modal-public .modal-body').html('')
	$('#modal-public .modal-body').append('<input type="text" onkeyup="checkPoint()" name="point_use" class="form-control col-md-8" name="point_reedem">\
		<span>&nbsp;<button type="button"name="submitpoint" class="btn btn-primary" onclick="applypoint()">Submit</button></span>\
		<p><label class="control-label">Saldo Point : '+cart.own_point+'</label></p>\
		<p><i><label name="notif" class="control-label"></label></i></p>')
}

// Modal Detail Customer
function showdetailCustomer(obj, delivery_address){
  $('#myModal').modal('show')

   // $.each(cart.customer, function(i, obj){   // })
      if(obj.outlettype_id == 1)
      {
        $('.customer-type').html('')
        $('.customer-type').append('Personal')
        
      }else if(obj.outlettype_id == 2){
        $('.customer-type').html('')
        $('.customer-type').append('Toko')
      }else{
        $('.customer-type').html('')
        $('.customer-type').append('Perusahaan')
      }

   // Set Null
      $('.email').html('')
      $('.credit-point').html('')
      $('.outlet-name').html('')
      $('.npwp-type').html('')
      $('.billing-address').html('')
      $('.moble-number').html('')
      $('.telephone').html('')
      $('.customer-name').html('')

      $('.customer-name').append(obj.owner_outlet_firstname +' '+ obj.owner_outlet_lastname)
      $('.credit-point').append()
      $('.outlet-name').append(obj.outlet_nama)
      $('.npwp-type').append(obj.npwp_type)
      if(obj.npwp_type === 'NON-PKP')
      {
      	$('.billing-address').append(delivery_address)
      }else{
      	$('.billing-address').append(obj.npwp_alamat)
      }
      
      $('.moble-number').append(obj.owner_hp)
      $('.telephone').append(obj.owner_telephone)
      $('.email').append(obj.email)

}



function checkPoint()
{
	var saldo_point = cart.own_point;
	var point_use = $('[name="point_use"]').val();
	if(Number(point_use) > Number(saldo_point))
	{
		$('[name="notif"]').html('')
		$(':input[name="submitpoint"]').prop('disabled', true);
		$('[name="notif"]').append('poin yang digunakan tidak boleh melebihi saldo point')
	}else{
		$(':input[name="submitpoint"]').prop('disabled', false);
		$('[name="notif"]').html('')
	}
} 

function applypoint()
{	
	var subtotal	 = cart.subtotal;
	var saldo_point  = cart.own_point;
	var point_use	 = $('[name="point_use"]').val();

	var grandtotal 	 = subtotal - point_use;
	var own_point 	 = saldo_point - point_use;

	// cart['subtotal']  = grandtotal;
	// cart['own_point'] = own_point;
	// console.log(cart)
	$('.p-grandtotal').val(grandtotal);
	$('.p-pointreedem').val(point_use);
	$('[name="tPointreedem"]').show()
}


function apply_coupon(){
	$('#modal-public').modal('show')
	$('#modal-public .title').html('')
	$('#modal-public .title').append('Apply Coupon Code')

	$('#modal-public .modal-body').html('')
	$('#modal-public .modal-body').append('<input type="text" name="coupon" class="form-control col-md-8" name="point_reedem">\
		<span>&nbsp;<button type="button"  class="btn btn-primary" onclick="applyCoupon()">Submit</button></span>\
		<p><label name="notif" class="col-md-9 control-label"></label></p>')
}

function popupbillingshipping(cust)
{
	var address= [] ;
	if(cust.npwp_type === 'NON-PKP')
	{	

		 $.each(cust.Address, function(a, b){
		 	address['address'] = b.address+', '+b.nama_kelurahan+', '+b.nama_kecamatan+', '+b.nama_kota+', '+b.nama_provinsi+'\n'+'<br>Stockpoint'+'<br>'+b.nama_stockpoint;
		 })
		console.log(address)
	}else{
		address['address'] = cust.npwp_alamat;
	}
	$('#modal-public').modal('show')
	$('#modal-public .title').html('')
	$('#modal-public .title').append('')
	$('#modal-public .modal-body').html('Shipping Address and Billing Address')

	$('#modal-public .modal-body').append('<div class="row">\
		<div class="col-md-6">\
		    <div class="card-block bg-white">\
                <div class="panel panel-default">\
                    <div class="panel-heading">Shipping Address</div>\
                        <div class="body-detail">\
                        '+address.address+'\
                        </div>\
                </div>\
           </div>\
		</div>\
		<div class="col-md-6">\
		<div class="card-block bg-white">\
                <div class="panel panel-default">\
                    <div class="panel-heading">Billing Address</div>\
                        <div class="body-detail">\
                        '+address.address+'\
                        </div>\
                </div>\
           </div>\
		</div>\
		</div>')
}

