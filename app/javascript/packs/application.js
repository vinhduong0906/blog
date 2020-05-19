// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//= require jquery
//= require jquery_ujs
//= require rails-ujs
//= require bootstrap.min
//= require jquery.turbolinks
//= require tinymce above 
//= require tinymce-jquery
//= require_tree .

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

import "bootstrap"

$(document).ready(function() {
  $('#dialog_form').hide();
    $("#search-category").keyup(function (event) {
      var categories, category, i, filter;
      filter=$('#search-category').val().toUpperCase();
      
      categories=$('.select-category li').get();
      for (i = 0; i < categories.length; i++) {
        category=categories[i].innerText.trim().toUpperCase();
        if (category.indexOf(filter)>-1)
      {
        categories[i].style.display="block";
      }
      else
      categories[i].style.display="none";
      }
        event.preventDefault();
    });
    
    $('#delete-profile').click(function() {
      var user=this.getAttribute("data-myvalue");
      $('#dialog-form').html('<% escape_javascript(:locals => {:user_id=>user})%>');
        
  });
});