<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
import $ from 'jquery'
//= require jquery3
//= require jquery_ujs
//= require turbolinks
//= require_tree . 

$(document).ready(function() {
  $('[data-js-hide-link]').click(function(event){
    alert('You clicked the Hide link');
    event.preventDefault(); 
  });
})