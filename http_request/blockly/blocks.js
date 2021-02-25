Blockly.Blocks['http_request'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.HTTP_REQUEST)
        .appendField(new Blockly.FieldDropdown([
          ["GET","GET"],
          ["POST","POST"]
        ]), "request_type_");
    this.appendValueInput("value_url_")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("value_token_")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("value_data_")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(300);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
