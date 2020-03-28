
function xhrr_getdata(table, url, page, modul='') {
        // body...
        if (window.XMLHttpRequest) {
            // code for modern browsers
            xmlhttp = new XMLHttpRequest();
         } else {
            // code for old IE browsers
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }

        var selectedData = localforage.getItem(modul);
        console.log(selectedData)
        if(selectedData) {
            
            var myArr = JSON.parse(selectedData);
            
            for(var i in myArr){                
                          table.row.add(myArr[i]).draw();
                        }
        }else{

            xmlhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    var response = JSON.parse(this.responseText);

                    var myArr   = response.data;

                    localforage.setItem(modul, JSON.stringify(myArr)); 
                        for(var i in myArr){                
                          table.row.add(myArr[i]).draw();
                        }


                    // if(response.current_page != response.last_page){
                    //     xhr_getdata(table, url, (page + 1))
                    //     // console.log(response.current_page+ ' ' + response.last_page)
                    // }
                }
            };
        }
            

        xmlhttp.open("GET", url, true);    
        xmlhttp.send();                    
}

function xhr_getvoucher(url, modul='', couponInput) {
  var subtotal     = $('.p-grandtotal').val();
      localforage.getItem(prefix_app+modul).then(function(response) {
      if(response === null){
        get(url).then(function(response){
          var response = JSON.parse(response); 
          var array = $.map(response.data, function(value, index) {
                      return [value];
                    });
          var myArr    = array;
          // console.log(myArr)
            $.each(myArr, function(i, obj){
                   if(couponInput === obj.name){
                       
                       var grandtotal   = subtotal - obj.discount_amount;
                       $('.p-grandtotal').val(grandtotal);
                       $('.p-coupon').val(obj.discount_amount);
                       $('[name="tcoupon"]').show();

                   }

            })
          localforage.setItem(prefix_app+modul, JSON.stringify(myArr)).then(function (value) {                      
                    }).catch(function(err) {                  
                      console.log(err);
                    });
          }, function(error) {
             console.error("Failed!", error);
          })
      }else{
        var response = JSON.parse(response);
        $.each(response, function(i, obj){
          if(couponInput === obj.name){
                       
                       var grandtotal   = subtotal - obj.discount_amount;
                       $('.p-grandtotal').val(grandtotal);
                       $('.p-coupon').val(obj.discount_amount);
                       $('[name="tcoupon"]').show();

                   }
        })

      }
    })


}
function xhr_getdatacity(url, modul='', prov)
{
  var prov_id  = Number(prov);
  localforage.getItem(prefix_app+modul).then(function(response) {
      if(response === null){
        get(url).then(function(response){
          var response = JSON.parse(response); 
          var myArr    = response.data;

          $('[name="city"]').empty()
          $.each(response.data, function(i, obj){

            if(obj.provinsi_id === prov_id)
            {
              $('[name="city"]').append('<option value="'+obj.id+'">'+obj.nama_kota+'</option>')
            }
            
          })
          localforage.setItem(prefix_app+modul, JSON.stringify(myArr)).then(function (value) {                      
                    }).catch(function(err) {                  
                      console.log(err);
                    });
          }, function(error) {
             console.error("Failed!", error);
          })
      }else{
        $('[name="city"]').empty()
        var response = JSON.parse(response);
        $.each(response, function(i, obj){
          if(obj.provinsi_id === prov_id)
          {
              $('[name="city"]').append('<option value="'+obj.id+'">'+obj.nama_kota+'</option>')
          }
        })

      }
    })
                   
}


function get(url) {
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
    var req = new XMLHttpRequest();
    req.open('GET', url);

    req.onload = function() {
      // This is called even on 404 etc
      // so check the status
      if (req.status == 200) {
        // Resolve the promise with the response text
        resolve(req.response);
      }
      else {
        // Otherwise reject with the status text
        // which will hopefully be a meaningful error
        reject(Error(req.statusText));
      }
    };

    // Handle network errors
    req.onerror = function() {
      reject(Error("Network Error"));
    };

    // Make the request
    req.send();
  });
}

function xhr_getdata(table, url, page, modul='') {
    // body...        

    localforage.getItem(prefix_app+modul).then(function(response) {        
        if(response === null){       
            get(url).then(function(response) {    
                    // console.log(response)
                    var response = JSON.parse(response);       
                    var myArr    = response.data;
                    localforage.setItem(prefix_app+modul, JSON.stringify(myArr)).then(function (value) {                      
                      addrowtotable(table, JSON.parse(value))
                    }).catch(function(err) {                  
                      console.log(err);
                    });
                }, function(error) {
                    console.error("Failed!", error);
                })                
        } else {
            var data     = JSON.parse(response);
            var lastarr  = data[data.length - 1];            

            get(url+'?updated_at='+lastarr.updated_at).then(function(response) {
                    var response = JSON.parse(response);
                    
                    var myArr    = response.data;

                    if(myArr.length > 1){                        
                        for (var i in myArr) {                          
                          for (var j in data){
                            if(data[j].id == myArr[i].id){                              
                              data.splice(j, 1)          
                              data.push(myArr[i])                              
                              break; //Stop this loop, we found it!
                            }
                          }
                        }
                    }

                    localforage.setItem(prefix_app+modul, JSON.stringify(data)).then(function (value) {                      
                      addrowtotable(table, JSON.parse(value))
                    }).catch(function(err) {                  
                      console.log(err);
                    });

            }, function(error) {
                console.error("Failed!", error);
            })

            // addrowtotable(table, JSON.parse(response))
        }
    })
}

function addrowtotable(table,myArr) {
    // body...
    for(var i in myArr){                
       table.row.add(myArr[i]).draw();
    }
}

function xhr_getdataproduct(url, page, modul='', num) {
    // body...
    // console.log(i)
    var counter = num;
    // counter     = counter + 1;
    var div     = $("<tr />");

    $("[name='body-product']").append(div);

    localforage.getItem(prefix_app+modul).then(function(response) {
        if(response === null){
            // console.log(1)  
            console.log(url)          
            get(url).then(function(response) {                
                    var response = JSON.parse(response);
                    var array = $.map(response.data, function(value, index) {
                      return [value];
                    });
                    var myArr    = array;
                    localforage.setItem(prefix_app+modul, JSON.stringify(myArr)).then(function (value) {                      
                      div.html(chooseproduct(counter, response));                                        
                      $('.select-product').select2();
                      console.log(counter)
                      $.each(myArr, function(i, obj){
                        $('.select-product').append('\
                        <option value="'+obj.sku+'">'+obj.sku+' - '+obj.nama+'</option>\
                        ')
                      })
                    }).catch(function(err) {                  
                      console.log(err);
                    });
                }, function(error) {
                    console.error("Failed!", error);
                })                
        } else {
            
            var data     = JSON.parse(response);
            var lastarr  = data[data.length - 1];          
            // console.log(url)
            get(url+'?updated_at='+lastarr.updated_at).then(function(response) {
                    var response = JSON.parse(response);
                    var array = $.map(response.data, function(value, index) {
                      return [value];
                    });
                    var myArr    = array;

                    if(myArr.length > 1){
              
                        for (var i in myArr) {                          
                          for (var j in data){
                            if(data[j].id == myArr[i].id){                              
                              data.splice(j, 1)          
                              data.push(myArr[i])                              
                              break; //Stop this loop, we found it!
                            }
                          }
                        }
                    }
                    
              
                    localforage.setItem(prefix_app+modul, JSON.stringify(data)).then(function (value) { 
                     
                      div.html(chooseproduct(counter, data));
                      $('.select-product').select2();
                      $.each(data, function(i, obj){
                        $('.select-product').append('\
                        <option value="'+obj.sku+'">'+obj.sku+' - '+obj.nama+'</option>\
                        ')
                      })
                        // i++;
                    }).catch(function(err) {                  
                      console.log(err);
                    });

            }, function(error) {
                console.error("Failed!", error);
            })
        }
    })
}
var subdistrict=[];
function xhr_getdataspCoverage(url, modul='', kel, action)
{
  var kel_id = Number(kel);
  console.log(kel_id)
  localforage.getItem(prefix_app+'subdistrict').then(function(response) {
      var response = JSON.parse(response);
      $.each(response, function(i, obj){

        if(obj.id === kel_id)
        {
          subdistrict['nama_kelurahan'] = obj.nama_kelurahan;
           console.log(obj)
        }
      })
     
    localforage.getItem(prefix_app+modul).then(function(response) { 
    if(response === null){      
      get(url).then(function(response){
      var response = JSON.parse(response); 
      var myArr    = response.data;
      $.each(response.data, function(i, obj){
        if(obj.kelurahan === subdistrict.nama_kelurahan)
        { 
          if(action ===  'post_newcustomer')
          {
            post_newcustomer(obj.stockpoint_id)
          }else{
          postnewshipping(obj.stockpoint_id)
            
          }
        }else{
           $('.alert-msg').html('')

           $('.alert-msg').append('<div class="alert alert-info">\
                     Coverage Not Found\
                    </div>')
           return false;
        }
      })

      localforage.setItem(prefix_app+modul, JSON.stringify(myArr)).then(function (value) {                      
                      // addrowtotable(table, JSON.parse(value))
                    }).catch(function(err) {                  
                      console.log(err);
                    });

      },function(error){
        console.error("Failed!", error);
      })
    }else{  
      console.log(subdistrict)
      console.log(subdistrict.nama_kelurahan)
      var response = JSON.parse(response);
      $.each(response, function(i, obj){
        if(obj.kelurahan === subdistrict.nama_kelurahan)
        {

          // postnewshipping(obj.stockpoint_id)

          if(action ===  'post_newcustomer')
          {
          post_newcustomer(obj.stockpoint_id)
          }else{
          postnewshipping(obj.stockpoint_id)
            
          }


        }else{
          console.log('stockpoint_id kosong')
          $('.alert-msg').html('')
          $('.alert-msg').append('<div class="alert alert-info">\
                      Coverage Not Found\
                    </div>')
          return false;
          
        }
      })
    }

  })


  })

                       
}


function xhr_getdataprovince(url, modul='')
{
    new_shippingaddress()
    localforage.getItem(prefix_app+modul).then(function(response) {
      if(response === null){
        get(url).then(function(response){
          var response = JSON.parse(response); 
          var myArr    = response.data;
          $.each(response.data, function(i, obj){
            $('[name="province"]').append('<option value="'+obj.id+'">'+obj.nama_provinsi+'</option>')
          })
          localforage.setItem(prefix_app+modul, JSON.stringify(myArr)).then(function (value) {                      
                    }).catch(function(err) {                  
                      console.log(err);
                    });
          }, function(error) {
             console.error("Failed!", error);
          })
      }else{
        var response = JSON.parse(response);
        $.each(response, function(i, obj){
          $('[name="province"]').append('<option value="'+obj.id+'">'+obj.nama_provinsi+'</option>')
        })

      }
    })


}
function xhr_getdatacity(url, modul='', prov)
{
  var prov_id  = Number(prov);
  localforage.getItem(prefix_app+modul).then(function(response) {
      if(response === null){
        get(url).then(function(response){
          var response = JSON.parse(response); 
          var myArr    = response.data;

          $('[name="city"]').empty()
          $.each(response.data, function(i, obj){

            if(obj.provinsi_id === prov_id)
            {
              $('[name="city"]').append('<option value="'+obj.id+'">'+obj.nama_kota+'</option>')
            }
            
          })
          localforage.setItem(prefix_app+modul, JSON.stringify(myArr)).then(function (value) {                      
                    }).catch(function(err) {                  
                      console.log(err);
                    });
          }, function(error) {
             console.error("Failed!", error);
          })
      }else{
        $('[name="city"]').empty()
        var response = JSON.parse(response);
        $.each(response, function(i, obj){
          if(obj.provinsi_id === prov_id)
          {
              $('[name="city"]').append('<option value="'+obj.id+'">'+obj.nama_kota+'</option>')
          }
        })

      }
    })
}

function xhr_getdatadistrict(url, modul='', city)
{
  var city_id  = Number(city);
  $('[name="district"]').empty()
  localforage.getItem(prefix_app+modul).then(function(response) {
      if(response === null){
        get(url).then(function(response){
          var response = JSON.parse(response); 
          var myArr    = response.data;

          
          $.each(response.data, function(i, obj){
            if(obj.kota_id === city_id)
            {
              $('[name="district"]').append('<option value="'+obj.id+'">'+obj.nama_kecamatan+'</option>')
            }
            
          })
            localforage.setItem(prefix_app+modul, JSON.stringify(myArr)).then(function (value) {                      
                      }).catch(function(err) {                  
                        console.log(err);
                      });
            }, function(error) {
               console.error("Failed!", error);
          })
      }else{
        var response = JSON.parse(response);
        $.each(response, function(i, obj){
          if(obj.kota_id === city_id)
          {
              $('[name="district"]').append('<option value="'+obj.id+'">'+obj.nama_kecamatan+'</option>')
          }
        })

      }
    })
}

function xhr_getdatasubdistrict(url, modul='', district)
{
  var district_id  = Number(district);
  $('[name="subdistrict"]').empty()
  localforage.getItem(prefix_app+modul).then(function(response) {
      if(response === null){
        get(url).then(function(response){
          var response = JSON.parse(response); 
          var myArr    = response.data;
          
          $.each(response.data, function(i, obj){
            if(obj.kecamatan_id === district_id)
            {
              $('[name="subdistrict"]').append('<option value="'+obj.id+'">'+obj.nama_kelurahan+'</option>')
            }
            
          })
            localforage.setItem(prefix_app+modul, JSON.stringify(myArr)).then(function (value) {                      
                      }).catch(function(err) {                  
                        console.log(err);
                      });
            }, function(error) {
               console.error("Failed!", error);
          })
      }else{
        var response = JSON.parse(response);
        $.each(response, function(i, obj){
          if(obj.kecamatan_id === district_id)
          {
              $('[name="subdistrict"]').append('<option value="'+obj.id+'">'+obj.nama_kelurahan+'</option>')
              var nama_kelurahan = obj.nama_kelurahan;
          }
        })

      }
    })
}
function xhr_getdatamyorder(table, url, page, modul='') {
    // body...        

    localforage.getItem(prefix_app+modul).then(function(response) {        
        if(response === null){       
            get(url).then(function(response) {    
                    var response = JSON.parse(response);       
                    var myArr    = response.data;
                    var myArr    = myArr.data;
                    localforage.setItem(prefix_app+modul, JSON.stringify(myArr)).then(function (value) {                      
                      addrowtotable(table, JSON.parse(value))
                    }).catch(function(err) {                  
                      console.log(err);
                    });
                }, function(error) {
                    console.error("Failed!", error);
                })                
        } else {
            var data     = JSON.parse(response);
            var lastarr  = data[data.length - 1];            

            get(url).then(function(response) {
                    var response = JSON.parse(response);
                    
                    var myArr    = response.data;
                    var myArr    = myArr.data;

                    if(myArr.length > 1){                        
                        for (var i in myArr) {                          
                          for (var j in data){
                            if(data[j].id == myArr[i].id){                              
                              data.splice(j, 1)          
                              data.push(myArr[i])                              
                              break; //Stop this loop, we found it!
                            }
                          }
                        }
                    }

                    localforage.setItem(prefix_app+modul, JSON.stringify(data)).then(function (value) {                      
                      addrowtotable(table, JSON.parse(value))
                    }).catch(function(err) {                  
                      console.log(err);
                    });

            }, function(error) {
                console.error("Failed!", error);
            })

            // addrowtotable(table, JSON.parse(response))
        }
    })
}
