<nav class="page-sidebar" data-pages="sidebar" style="">
    <!-- <nav class="page-sidebar" data-pages="sidebar" style="transform: translate(210px);"> -->
  <!-- BEGIN SIDEBAR MENU TOP TRAY CONTENT-->
  <div class="sidebar-overlay-slide from-top" id="appMenu">
    <div class="row">
      <div class="col-xs-6 no-padding">
        <a href="#" class="p-l-40"><img src="assets/img/demo/social_app.svg" alt="socail">
        </a>
      </div>
      <div class="col-xs-6 no-padding">
        <a href="#" class="p-l-10"><img src="assets/img/demo/email_app.svg" alt="socail">
        </a>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-6 m-t-20 no-padding">
        <a href="#" class="p-l-40"><img src="assets/img/demo/calendar_app.svg" alt="socail">
        </a>
      </div>
      <div class="col-xs-6 m-t-20 no-padding">
        <a href="#" class="p-l-10"><img src="assets/img/demo/add_more.svg" alt="socail">
        </a>
      </div>
    </div>
  </div>
  <!-- END SIDEBAR MENU TOP TRAY CONTENT-->
  <!-- BEGIN SIDEBAR MENU HEADER-->
  <div class="sidebar-header">
    <img src="assets/img/logo_white.png" alt="logo" class="brand" data-src="assets/img/logo_white.png" data-src-retina="assets/img/logo_white_2x.png" width="78" height="22">
    <div class="sidebar-header-controls">
      <button type="button" class="btn btn-xs sidebar-slide-toggle btn-link m-l-20 hidden-md-down" data-pages-toggle="#appMenu"><i class="fa fa-angle-down fs-16"></i>
      </button>
      <button type="button" class="btn btn-link hidden-md-down" data-toggle-pin="sidebar"><i class="fa fs-12"></i>
      </button>
    </div>
  </div>
  <!-- END SIDEBAR MENU HEADER-->
  <!-- START SIDEBAR MENU -->
  <div class="sidebar-menu">
    <!-- BEGIN SIDEBAR MENU ITEMS-->
    <ul class="menu-items">
      <li class="m-t-30 ">
        <a href="admin.html" class="detailed">
          <span class="title">Dashboard</span>              
        </a>
        <!-- <span class="bg-success icon-thumbnail"><i class="pg-home"></i></span> -->
      </li>
      <li>
        <a href="javascript:;" style="width:100%"><span class="title">Departement</span>
        
        <span class=" arrow"></span></a>
        <!-- <span class="icon-thumbnail"><i class="pg-calender"></i></span> -->
        <ul class="sub-menu">
          <li class="">
            <a href="{{ route('main_departement') }}">Main Departement</a>
            <!-- <span class="icon-thumbnail">MD</span> -->
          </li>
          <li class="">
            <a href="calendar_lang.html">Add Departement</a>
            <!-- <span class="icon-thumbnail">AD</span> -->
          </li>
          <li class="">
            <a href="calendar_month.html">Departement List</a>
            <!-- <span class="icon-thumbnail">DL</span> -->
          </li>            
        </ul>
      </li>
      <li>
        <a href="javascript:;" style="width:100%"><span class="title">Doctor</span>
        <span class=" arrow"></span></a>
        <!-- <span class="icon-thumbnail"><i class="pg-calender"></i></span> -->
        <ul class="sub-menu">
          <li class="">
            <a href="calendar.html">Add Doctor</a>
            <!-- <span class="icon-thumbnail">AD</span> -->
          </li>
          <li class="">
            <a href="calendar_lang.html">Doctor List</a>
            <!-- <span class="icon-thumbnail">DL</span> -->
          </li>
          <li class="">
            <a href="calendar_month.html">Add Porofolio</a>
            <!-- <span class="icon-thumbnail">AD</span> -->
          </li>
          <li class="">
            <a href="calendar_lazy.html">Languange</a>
            <!-- <span class="icon-thumbnail">La</span> -->
          </li>
        </ul>
      </li>
      <li>
        <a href="javascript:;" style="width:100%"><span class="title">Patient</span>
        <span class=" arrow"></span></a>
        <!-- <span class="icon-thumbnail"><i class="pg-calender"></i></span> -->
        <ul class="sub-menu">
          <li class="">
            <a href="calendar.html">Add Patient</a>
            <!-- <span class="icon-thumbnail">AP</span> -->
          </li>
          <li class="">
            <a href="calendar_lang.html">Patient List</a>
            <!-- <span class="icon-thumbnail">PL</span> -->
          </li>
          <li class="">
            <a href="calendar_month.html">Import CSV Data</a>
            <!-- <span class="icon-thumbnail">ID</span> -->
          </li>
          <li class="">
            <a href="calendar_lazy.html">Add Document</a>
            <!-- <span class="icon-thumbnail">AD</span> -->
          </li>
          <li class="">
            <a href="calendar_lazy.html">Document List</a>
            <!-- <span class="icon-thumbnail">DL</span> -->
          </li>
        </ul>
      </li>
      <li>
        <a href="javascript:;" style="width:100%"><span class="title">Schedule</span>
        <span class=" arrow"></span></a>
        <!-- <span class="icon-thumbnail"><i class="pg-calender"></i></span> -->
        <ul class="sub-menu">
          <li class="">
            <a href="calendar.html">Add Time Slot</a>
            <!-- <span class="icon-thumbnail">AT</span> -->
          </li>
          <li class="">
            <a href="calendar_lang.html">Add Schedule</a>
            <!-- <span class="icon-thumbnail">AS</span> -->
          </li>
          <li class="">
            <a href="calendar_month.html">Schedule List</a>
            <!-- <span class="icon-thumbnail">SL</span> -->
          </li>
        </ul>
      </li>
      <li>
        <a href="javascript:;" style="width:100%"><span class="title">Appointment</span>
        <span class=" arrow"></span></a>
        <!-- <span class="icon-thumbnail"><i class="pg-calender"></i></span> -->
        <ul class="sub-menu">
          <li class="">
            <a href="calendar.html">Add Appointment</a>
            <!-- <span class="icon-thumbnail">AA</span> -->
          </li>
          <li class="">
            <a href="calendar_lang.html">Appointment List</a>
            <!-- <span class="icon-thumbnail">AL</span> -->
          </li>
          <li class="">
            <a href="calendar_month.html">Assign to Me</a>
            <!-- <span class="icon-thumbnail">AM</span> -->
          </li>
          <li class="">
            <a href="calendar_lazy.html">Assign by Me</a>
            <!-- <span class="icon-thumbnail">AM</span> -->
          </li>
          <li class="">
            <a href="calendar_lazy.html">Assign by All</a>
            <!-- <span class="icon-thumbnail">AA</span> -->
          </li>
          <li class="">
            <a href="calendar_lazy.html">Assign by Doctor</a>
            <!-- <span class="icon-thumbnail">AD</span> -->
          </li>
          <li class="">
            <a href="calendar_lazy.html">Assign to Doctor</a>
            <!-- <span class="icon-thumbnail">AD</span> -->
          </li>                            
          <li class="">
            <a href="calendar_lazy.html">Assign by Representative</a>
            <!-- <span class="icon-thumbnail">AR</span> -->
          </li>              
        </ul>
      </li>
      <li>
        <a href="javascript:;" style="width:100%"><span class="title">Pharmacy</span>
        <span class=" arrow"></span></a>
        <!-- <span class="icon-thumbnail"><i class="pg-calender"></i></span> -->
        <ul class="sub-menu">
          <li class="">
            <a href="calendar.html">Add Medicine Category</a>
            <!-- <span class="icon-thumbnail">AM</span> -->
          </li>
          <li class="">
            <a href="calendar_lang.html">Medicine Category List</a>
            <!-- <span class="icon-thumbnail">MC</span> -->
          </li>
          <li class="">
            <a href="calendar_month.html">Add Medicine</a>
            <!-- <span class="icon-thumbnail">AM</span> -->
          </li>
          <li class="">
            <a href="calendar_lazy.html">Medicine List</a>
            <!-- <span class="icon-thumbnail">Me</span> -->
          </li>              
        </ul>
      </li>
      <li>
        <a href="javascript:;" style="width:100%"><span class="title">Prescrption</span>
        <span class=" arrow"></span></a>
        <!-- <span class="icon-thumbnail"><i class="pg-calender"></i></span> -->
        <ul class="sub-menu">
          <li class="">
            <a href="calendar.html">Add Patient Case Study</a>
            <!-- <span class="icon-thumbnail">AP</span> -->
          </li>
          <li class="">
            <a href="calendar_lang.html">Patient Case Study List</a>
            <!-- <span class="icon-thumbnail">PC</span> -->
          </li>
          <li class="">
            <a href="calendar_month.html">Add Prescription</a>
            <!-- <span class="icon-thumbnail">AP</span> -->
          </li>
          <li class="">
            <a href="calendar_lazy.html">Perscription List</a>
            <!-- <span class="icon-thumbnail">PL</span> -->
          </li>                  
        </ul>
      </li>
      <li>
        <a href="javascript:;" style="width:100%"><span class="title">Account Manager</span>
        <span class=" arrow"></span></a>
        <!-- <span class="icon-thumbnail"><i class="pg-calender"></i></span> -->
        <ul class="sub-menu">
          <li class="">
            <a href="calendar.html">Chart Of Account</a>
            <!-- <span class="icon-thumbnail">AA</span> -->
          </li>
          <li class="">
            <a href="calendar_lang.html">Appointment List</a>
            <!-- <span class="icon-thumbnail">AL</span> -->
          </li>
          <li class="">
            <a href="calendar_month.html">Debit Voucher</a>
            <!-- <span class="icon-thumbnail">AM</span> -->
          </li>
          <li class="">
            <a href="calendar_lazy.html">Credit Voucher</a>
            <!-- <span class="icon-thumbnail">AM</span> -->
          </li>
          <li class="">
            <a href="calendar_lazy.html">Contra Voucher</a>
            <!-- <span class="icon-thumbnail">AA</span> -->
          </li>
          <li class="">
            <a href="calendar_lazy.html">Journal Voucher</a>
            <!-- <span class="icon-thumbnail">AD</span> -->
          </li>
          <li class="">
            <a href="calendar_lazy.html">Voucher Approval</a>
            <!-- <span class="icon-thumbnail">AD</span> -->
          </li>                            
          <li>
            <a href="javascript:;" style="width:100%"><span class="title">Account Report</span>
            <span class="arrow"></span></a>
            <!-- <span class="icon-thumbnail">AR</span> -->
            <ul class="sub-menu">
              <li>
                <a href="javascript:;" style="width:100%">Voucher Report</a>
                <!-- <span class="icon-thumbnail">Sm</span> -->
              </li>
              <li>
                <a href="ujavascript:;">Cash Book</a>
                <!-- <span class="icon-thumbnail">Sm</span> -->
              </li>
              <li>
                <a href="ujavascript:;">Bank Book</a>
                <!-- <span class="icon-thumbnail">Sm</span> -->
              </li>
              <li>
                <a href="ujavascript:;">General Ledger</a>
                <!-- <span class="icon-thumbnail">Sm</span> -->
              </li>
              <li>
                <a href="ujavascript:;">Trial Balance</a>
                <!-- <span class="icon-thumbnail">Sm</span> -->
              </li>  
              <li>
                <a href="ujavascript:;">Profit Balance</a>
                <!-- <span class="icon-thumbnail">Sm</span> -->
              </li>
              <li>
                <a href="ujavascript:;">Cash Flow</a>
                <!-- <span class="icon-thumbnail">Sm</span> -->
              </li>       
              <li>
                <a href="ujavascript:;">Chart Of Account Print</a>
                <!-- <span class="icon-thumbnail">Sm</span> -->
              </li>                                                               
            </ul>
          </li>            
        </ul>
      </li>
      <li>
        <a href="javascript:;" style="width:100%"><span class="title">Insurance</span>
        <span class=" arrow"></span></a>
        <!-- <span class="icon-thumbnail"><i class="pg-calender"></i></span> -->
        <ul class="sub-menu">
          <li class="">
            <a href="calendar.html">Add Insurance</a>
            <!-- <span class="icon-thumbnail">AA</span> -->
          </li>
          <li class="">
            <a href="calendar_lang.html">Insurance List</a>
            <!-- <span class="icon-thumbnail">AL</span> -->
          </li>
          <li class="">
            <a href="calendar_month.html">Add Limit Approval</a>
            <!-- <span class="icon-thumbnail">AM</span> -->
          </li>
          <li class="">
            <a href="calendar_lazy.html">Limit Approval List</a>
            <!-- <span class="icon-thumbnail">AM</span> -->
          </li>                    
        </ul>
      </li>
      <li>
        <a href="javascript:;" style="width:100%"><span class="title">Billing</span>
        <span class=" arrow"></span></a>
        <!-- <span class="icon-thumbnail"><i class="pg-calender"></i></span> -->
        <ul class="sub-menu">
          <li class="">
            <a href="calendar.html">Add Service</a>
            <!-- <span class="icon-thumbnail">AA</span> -->
          </li>
          <li class="">
            <a href="calendar_lang.html">Service List</a>
            <!-- <span class="icon-thumbnail">AL</span> -->
          </li>
          <li class="">
            <a href="calendar_month.html">Add Package</a>
            <!-- <span class="icon-thumbnail">AM</span> -->
          </li>
          <li class="">
            <a href="calendar_lazy.html">Package List</a>
            <!-- <span class="icon-thumbnail">AM</span> -->
          </li>
          <li class="">
            <a href="calendar_lazy.html">Add Patient Admission</a>
            <!-- <span class="icon-thumbnail">AA</span> -->
          </li>
          <li class="">
            <a href="calendar_lazy.html">Patient Admission List</a>
            <!-- <span class="icon-thumbnail">AD</span> -->
          </li>
          <li class="">
            <a href="calendar_lazy.html">Add Advance Payment</a>
            <!-- <span class="icon-thumbnail">AD</span> -->
          </li>                            
          <li class="">
            <a href="calendar_lazy.html">Advance Payment List</a>
            <!-- <span class="icon-thumbnail">AR</span> -->
          </li> 
          <li class="">
            <a href="calendar_lazy.html">Add Bill</a>
            <!-- <span class="icon-thumbnail">AR</span> -->
          </li>                            
          <li class="">
            <a href="calendar_lazy.html">Bill List</a>
            <!-- <span class="icon-thumbnail">AR</span> -->
          </li>               
        </ul>
      </li>
      <li>
        <a href="javascript:;" style="width:100%"><span class="title">Human Resources</span>
        <span class=" arrow"></span></a>
        <!-- <span class="icon-thumbnail"><i class="pg-calender"></i></span> -->
        <ul class="sub-menu">
          <li class="">
            <a href="calendar.html">Add Employee</a>
            <!-- <span class="icon-thumbnail">AA</span> -->
          </li>
          <li class="">
            <a href="calendar_lang.html">Employee List</a>
            <!-- <span class="icon-thumbnail">AL</span> -->
          </li>            
        </ul>
      </li>
      <li>
        <a href="javascript:;" style="width:100%"><span class="title">Bed Manager</span>
        <span class=" arrow"></span></a>
        <!-- <span class="icon-thumbnail"><i class="pg-calender"></i></span> -->
        <ul class="sub-menu">
          <li class="">
            <a href="calendar.html">Add Room</a>
            <!-- <span class="icon-thumbnail">AA</span> -->
          </li>
          <li class="">
            <a href="calendar_lang.html">Room List</a>
            <!-- <span class="icon-thumbnail">AL</span> -->
          </li>
          <li class="">
            <a href="calendar_month.html">Add Bed</a>
            <!-- <span class="icon-thumbnail">AM</span> -->
          </li>
          <li class="">
            <a href="calendar_lazy.html">Bed List</a>
            <!-- <span class="icon-thumbnail">AM</span> -->
          </li>
          <li class="">
            <a href="calendar_lazy.html">Bed Assign</a>
            <!-- <span class="icon-thumbnail">AA</span> -->
          </li>
          <li class="">
            <a href="calendar_lazy.html">Bed Assign List</a>
            <!-- <span class="icon-thumbnail">AD</span> -->
          </li>
          <li class="">
            <a href="calendar_lazy.html">Report</a>
            <!-- <span class="icon-thumbnail">AD</span> -->
          </li>                            
          <li class="">
            <a href="calendar_lazy.html">Bed Transfer List</a>
            <!-- <span class="icon-thumbnail">AR</span> -->
          </li>              
        </ul>
      </li>
      <li>
        <a href="javascript:;" style="width:100%"><span class="title">Medications and Visits</span>
        <span class=" arrow"></span></a>
        <!-- <span class="icon-thumbnail"><i class="pg-calender"></i></span> -->
        <ul class="sub-menu">
          <li class="">
            <a href="calendar.html">Add Patient Medication</a>
            <!-- <span class="icon-thumbnail">AA</span> -->
          </li>
          <li class="">
            <a href="calendar_lang.html">Patient Medication List</a>
            <!-- <span class="icon-thumbnail">AL</span> -->
          </li>
          <li class="">
            <a href="calendar_month.html">Add Patient Visits</a>
            <!-- <span class="icon-thumbnail">AM</span> -->
          </li>
          <li class="">
            <a href="calendar_lazy.html">Patient Visit List</a>
            <!-- <span class="icon-thumbnail">AM</span> -->
          </li>
          <li class="">
            <a href="calendar_lazy.html">Medication Reports</a>
            <!-- <span class="icon-thumbnail">AA</span> -->
          </li>
          <li class="">
            <a href="calendar_lazy.html">Visiting Reports</a>
            <!-- <span class="icon-thumbnail">AD</span> -->
          </li>
          <li class="">
            <a href="calendar_lazy.html">Report</a>
            <!-- <span class="icon-thumbnail">AD</span> -->
          </li>                                        
        </ul>
      </li>
      <li>
        <a href="javascript:;" style="width:100%"><span class="title">Notice Board</span>
        <span class=" arrow"></span></a>
        <!-- <span class="icon-thumbnail"><i class="pg-calender"></i></span> -->
        <ul class="sub-menu">
          <li class="">
            <a href="calendar.html">Add Notice</a>
            <!-- <span class="icon-thumbnail">AA</span> -->
          </li>
          <li class="">
            <a href="calendar_lang.html">Notice List</a>
            <!-- <span class="icon-thumbnail">AL</span> -->
          </li>
        </ul>
      </li>
      <li>
        <a href="javascript:;" style="width:100%"><span class="title">Case Manager</span>
        <span class=" arrow"></span></a>
        <!-- <span class="icon-thumbnail"><i class="pg-calender"></i></span> -->
        <ul class="sub-menu">
          <li class="">
            <a href="calendar.html">Add Patient</a>
            <!-- <span class="icon-thumbnail">AA</span> -->
          </li>
          <li class="">
            <a href="calendar_lang.html">Patient List</a>
            <!-- <span class="icon-thumbnail">AL</span> -->
          </li>             
        </ul>
      </li>
      <li>
        <a href="javascript:;" style="width:100%"><span class="title">Hospital Activity</span>
        <span class=" arrow"></span></a>
        <!-- <span class="icon-thumbnail"><i class="pg-calender"></i></span> -->
        <ul class="sub-menu">
          <li class="">
            <a href="calendar.html">Add Birth Report</a>
            <!-- <span class="icon-thumbnail">AA</span> -->
          </li>
          <li class="">
            <a href="calendar_lang.html">Birth Report</a>
            <!-- <span class="icon-thumbnail">AL</span> -->
          </li>
          <li class="">
            <a href="calendar_month.html">Add Death Report</a>
            <!-- <span class="icon-thumbnail">AM</span> -->
          </li>
          <li class="">
            <a href="calendar_lazy.html">Death Report</a>
            <!-- <span class="icon-thumbnail">AM</span> -->
          </li>
          <li class="">
            <a href="calendar_lazy.html">Add Operation Report</a>
            <!-- <span class="icon-thumbnail">AA</span> -->
          </li>
          <li class="">
            <a href="calendar_lazy.html">Operation Report</a>
            <!-- <span class="icon-thumbnail">AD</span> -->
          </li>
          <li class="">
            <a href="calendar_lazy.html">Add Investigation Report</a>
            <!-- <span class="icon-thumbnail">AD</span> -->
          </li>                            
          <li class="">
            <a href="calendar_lazy.html">Investigation Report</a>
            <!-- <span class="icon-thumbnail">AR</span> -->
          </li>              
        </ul>
      </li>
      <li>
        <a href="index.html">
          <span class="title">Enquiry</span>              
        </a>
        <!-- <span class="bg-success icon-thumbnail"><i class="pg-home"></i></span> -->
      </li>          
      <li>
        <a href="javascript:;" style="width:100%"><span class="title">Setting</span>
        <span class=" arrow"></span></a>
        <!-- <span class="icon-thumbnail"><i class="pg-calender"></i></span> -->
        <ul class="sub-menu">
          <li class="">
            <a href="calendar.html">App Setting</a>
            <!-- <span class="icon-thumbnail">AA</span> -->
          </li>
          <li class="">
            <a href="calendar_lang.html">Languange Setting</a>
            <!-- <span class="icon-thumbnail">AL</span> -->
          </li>
          <li class="">
            <a href="calendar_month.html">Auto Update</a>
            <!-- <span class="icon-thumbnail">AM</span> -->
          </li>                        
        </ul>
      </li>    
      <li>
        <a href="javascript:;" style="width:100%"><span class="title">SMS</span>
        <span class=" arrow"></span></a>
        <!-- <span class="icon-thumbnail"><i class="pg-calender"></i></span> -->
        <ul class="sub-menu">
          <li class="">
            <a href="calendar.html">Gateway Setting</a>
            <!-- <span class="icon-thumbnail">AA</span> -->
          </li>
          <li class="">
            <a href="calendar_lang.html">SMS Template</a>
            <!-- <span class="icon-thumbnail">AL</span> -->
          </li>
          <li class="">
            <a href="calendar_month.html">SMS Schedule</a>
            <!-- <span class="icon-thumbnail">AM</span> -->
          </li>
          <li class="">
            <a href="calendar_lazy.html">Send Custom SMS</a>
            <!-- <span class="icon-thumbnail">AM</span> -->
          </li>
          <li class="">
            <a href="calendar_lazy.html">Custom SMS List</a>
            <!-- <span class="icon-thumbnail">AA</span> -->
          </li>
          <li class="">
            <a href="calendar_lazy.html">Auto SMS Report</a>
            <!-- <span class="icon-thumbnail">AD</span> -->
          </li>
          <li class="">
            <a href="calendar_lazy.html">User SMS List</a>
            <!-- <span class="icon-thumbnail">AD</span> -->
          </li>                                        
        </ul>
      </li>           
      <li>
        <a href="javascript:;" style="width:100%"><span class="title">Messages</span>
        <span class=" arrow"></span></a>
        <!-- <span class="icon-thumbnail"><i class="pg-calender"></i></span> -->
        <ul class="sub-menu">
          <li class="">
            <a href="calendar.html">New Messages</a>
            <!-- <span class="icon-thumbnail">AA</span> -->
          </li>
          <li class="">
            <a href="calendar_lang.html">Inbox</a>
            <!-- <span class="icon-thumbnail">AL</span> -->
          </li>
          <li class="">
            <a href="calendar_month.html">Sent</a>
            <!-- <span class="icon-thumbnail">AM</span> -->
          </li>                  
        </ul>
      </li>
      <li>
        <a href="javascript:;" style="width:100%"><span class="title">Mail</span>
        <span class=" arrow"></span></a>
        <!-- <span class="icon-thumbnail"><i class="pg-calender"></i></span> -->
        <ul class="sub-menu">
          <li class="">
            <a href="calendar.html">Send Mail</a>
            <!-- <span class="icon-thumbnail">AA</span> -->
          </li>
          <li class="">
            <a href="calendar_lang.html">Mail Setting</a>
            <!-- <span class="icon-thumbnail">AL</span> -->
          </li>              
        </ul>
      </li>
      <li>
        <a href="javascript:;" style="width:100%"><span class="title">Website</span>
        <span class=" arrow"></span></a>
        <!-- <span class="icon-thumbnail"><i class="pg-calender"></i></span> -->
        <ul class="sub-menu">
          <li class="">
            <a href="calendar.html">Setting</a>
            <!-- <span class="icon-thumbnail">AA</span> -->
          </li>
          <li class="">
            <a href="calendar_lang.html">Menu</a>
            <!-- <span class="icon-thumbnail">AL</span> -->
          </li>
          <li class="">
            <a href="calendar_month.html">Template Assign</a>
            <!-- <span class="icon-thumbnail">AM</span> -->
          </li>
          <li class="">
            <a href="calendar_lazy.html">About</a>
            <!-- <span class="icon-thumbnail">AM</span> -->
          </li>
          <li class="">
            <a href="calendar_lazy.html">Slider</a>
            <!-- <span class="icon-thumbnail">AA</span> -->
          </li>
          <li class="">
            <a href="calendar_lazy.html">Add Banner Slider</a>
            <!-- <span class="icon-thumbnail">AD</span> -->
          </li>
          <li class="">
            <a href="calendar_lazy.html">Testimonial</a>
            <!-- <span class="icon-thumbnail">AD</span> -->
          </li>                            
          <li class="">
            <a href="calendar_lazy.html">Appointment Instruction</a>
            <!-- <span class="icon-thumbnail">AR</span> -->
          </li> 
          <li class="">
            <a href="calendar_lazy.html">Add Partner</a>
            <!-- <span class="icon-thumbnail">AR</span> -->
          </li>                            
          <li class="">
            <a href="calendar_lazy.html">Add News</a>
            <!-- <span class="icon-thumbnail">AR</span> -->
          </li>          
          <li class="">
            <a href="calendar_lazy.html">Section</a>
            <!-- <span class="icon-thumbnail">AR</span> -->
          </li>   
          <li class="">
            <a href="calendar_lazy.html">Add Service</a>
            <!-- <span class="icon-thumbnail">AR</span> -->
          </li> 
          <li class="">
            <a href="calendar_lazy.html">Support?</a>
            <!-- <span class="icon-thumbnail">AR</span> -->
          </li>                                              
        </ul>
      </li>  
      <li>
        <a href="javascript:;" style="width:100%"><span class="title">Permission</span>
        <span class=" arrow"></span></a>
        <!-- <span class="icon-thumbnail"><i class="pg-calender"></i></span> -->
        <ul class="sub-menu">
          <li class="">
            <a href="calendar.html">Add Role</a>
            <!-- <span class="icon-thumbnail">AA</span> -->
          </li>
          <li class="">
            <a href="calendar_lang.html">Role Permission</a>
            <!-- <span class="icon-thumbnail">AL</span> -->
          </li>  
          <li class="">
            <a href="calendar_lang.html">Assign Role To User</a>
            <!-- <span class="icon-thumbnail">AL</span> -->
          </li>                            
        </ul>
      </li>                                           
    </ul>
    <div class="clearfix"></div>
  </div>
  <!-- END SIDEBAR MENU -->
</nav>
