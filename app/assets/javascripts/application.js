//= require jquery
//= require jquery_ujs
//= require jquery.signaturepad.min
//= require json2.min
//= require_tree .

$(function(){
  var signatureOptions = {
    drawOnly: true,
    lineTop: 140
  }
  $('#new_signature').signaturePad(signatureOptions);
});
