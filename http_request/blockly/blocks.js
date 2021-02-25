Blockly.Blocks['http_request'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.HTTP_REQUEST)
        .appendField(new Blockly.FieldDropdown([
          ["GET","GET"],
          ["POST","POST"]
        ]), "request_type_");
    this.appendValueInput("value_url_")
        .setCheck("String");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(300);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
