module.exports = function(Blockly){
  'use strict';
Blockly.JavaScript['sw1_press'] = function(block) {  
  var code = 'wait_SW1();\n';
  return code;
};
Blockly.JavaScript['sw1_press_one'] = function(block) {  
  var code = 'wait_SW1_one();\n';
  return code;
};
Blockly.JavaScript['muilt_core'] = function(block) {
  var functionName = block.getFieldValue('FUNCTION');
  var code = `multicore_launch_core1(${functionName});\n`;
  return code;
};




Blockly.JavaScript['button_1_status'] = function(block) {  
  var code = '(digitalRead(6))';  
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['INPUT_digital'] = function(block) { 
  var value_pin = Blockly.JavaScript.valueToCode(block, 'pin', Blockly.JavaScript.ORDER_ATOMIC) || '0'; 
  var code = '(IN('+value_pin+'))';  
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['TCS_color_status'] = function(block) {
  var dropdown_pin = block.getFieldValue('_color');
  var code = `(Read_Color_TCS(${dropdown_pin}))`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['TCS_color_config'] = function(block) {
  var dropdown_pinSDA = block.getFieldValue('pin_SDA');
  var dropdown_pinSCL = block.getFieldValue('pin_SCL');
  var code = `
              #SETUP  Wire1.setSDA(${dropdown_pinSDA});Wire1.setSCL(${dropdown_pinSCL});if (tcsB.begin(0x29,&Wire1)) {Serial.println("Found sensor");} #END `;
              // (Read_Color_TCS(${dropdown_pin}))`;
  return code;
};

Blockly.JavaScript['TCS_color_status_B'] = function(block) {
  var dropdown_pin = block.getFieldValue('_color');
  var code = `#SETUP  Wire1.setSDA(14);Wire1.setSCL(15);if (tcsB.begin(0x29,&Wire1)) {Serial.println("Found sensor");} #END
              (Read_Color_TCS_B(${dropdown_pin}))`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['Light_Sensor'] = function(block) {
  var dropdown_pin = block.getFieldValue('pin');
  var code = `(ADC(${dropdown_pin}))`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['Ultrasonic_sensor'] = function(block) {  
  var dropdown_pin_Echo = block.getFieldValue('pin_Echo');
  var dropdown_pin_Trig = block.getFieldValue('pin_Trig');
  var code = `(ultrasonic(${dropdown_pin_Echo},${dropdown_pin_Trig}))`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};






// Blockly.JavaScript['Knob_status'] = function(block) {  
//   var code = '(Knob_sensor())';
//   return [code, Blockly.JavaScript.ORDER_ATOMIC];
// };
// Blockly.JavaScript['Irremote_sensor'] = function(block) {  
//   var code = '(irremote_sensor())';
//   return [code, Blockly.JavaScript.ORDER_ATOMIC];
// };
// Blockly.JavaScript['Ultrasinoc_sensor'] = function(block) {  
//   var code = '(ultrasonic())';
//   return [code, Blockly.JavaScript.ORDER_ATOMIC];
// };

// Blockly.JavaScript['LDR_Sensor'] = function(block) {
//   var dropdown_pin = block.getFieldValue('pin');
//   var code = `(analog(${dropdown_pin}))`;
//   return [code, Blockly.JavaScript.ORDER_ATOMIC];
// };
// Blockly.JavaScript['LED_status'] = function(block) {
//   var dropdown_pin = block.getFieldValue('pin');
//   var dropdown_status = block.getFieldValue('status');
//   var code = `digitalWrite(${dropdown_pin},${dropdown_status});`;
//   return code;
// };
// Blockly.JavaScript['Rapbit32_beep'] = function(block) {  
//   var code = 'beep();\n';
//   return code;
// };
// Blockly.JavaScript['Rapbit32_beep_on'] = function(block) {  
//   var code = 'beep_on();\n';
//   return code;
// };
// Blockly.JavaScript['Rapbit32_beep_off'] = function(block) {  
//   var code = 'beep_off();\n';
//   return code;
// };
// Blockly.JavaScript['Rapbit32_beep_delay'] = function(block) {
//   var value_delay = Blockly.JavaScript.valueToCode(block, '_delay', Blockly.JavaScript.ORDER_ATOMIC) || '0';
//   var code = 'beep(' + value_delay + ');\n';
//   return code;
// };
// Blockly.JavaScript['Rapbit32_setBrightness'] = function(block) {
//   var value_Brightness = Blockly.JavaScript.valueToCode(block, 'Brightness', Blockly.JavaScript.ORDER_ATOMIC) || '0';
//   var code = 'Rapbit32_setBrightness(' + value_Brightness + ');\n';
//   return code;
// };
// Blockly.JavaScript['Rapbit32set_color_led'] = function(block) {
//   var led_id =block.getFieldValue('led_id');
//   var value_led_r = Blockly.JavaScript.valueToCode(block, 'led_r', Blockly.JavaScript.ORDER_ATOMIC) || '0';
//   var value_led_g = Blockly.JavaScript.valueToCode(block, 'led_g', Blockly.JavaScript.ORDER_ATOMIC) || '0';
//   var value_led_b = Blockly.JavaScript.valueToCode(block, 'led_b', Blockly.JavaScript.ORDER_ATOMIC) || '0';
//   //var led_r = block.getFieldValue('led_r');
//   //var led_g = block.getFieldValue('led_g');
//   //var led_b = block.getFieldValue('led_b');
//   var code = `Rapbit32_setPixel(${led_id},${value_led_r},${value_led_g},${value_led_b});\n`;
//   return code;
// };

// Blockly.JavaScript['Rapbit32set_color_led2'] = function(block) {
//   var led_id =block.getFieldValue('led_id');
//   var color = block.getFieldValue('color');
//   var led_r = "0x"+color.substring(1,3);
//   var led_g = "0x"+color.substring(3,5);
//   var led_b = "0x"+color.substring(5,7);
//   var code = `Rapbit32_setPixel(${led_id},${led_r},${led_g},${led_b});\n`;
//   return code;
// };
// Blockly.JavaScript['Rapbit32_rainbow'] = function(block) {
//   var value_delay = Blockly.JavaScript.valueToCode(block, '_delay', Blockly.JavaScript.ORDER_ATOMIC) || '0';
//   var code = 'Rapbit32_rainbow(' + value_delay + ');\n';
//   return code;
// };


}