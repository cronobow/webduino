Blockly.JavaScript['http_request'] = function(block) {
  var request_type_ = block.getFieldValue('request_type_');
  var value_url_ = Blockly.JavaScript.valueToCode(block, 'value_url_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_token_ = Blockly.JavaScript.valueToCode(block, 'value_url_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_data_ = Blockly.JavaScript.valueToCode(block, 'value_url_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'send_request("'+request_type_+'",'+value_url_+','+value_token_','+value_data_+');\n';
  return code;
};
