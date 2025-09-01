import type { Note } from '../types';

export const initialNotes: Note[] = [
  {
    "id": "2025-09-01T04:19:55.036Z",
    "title": "F_Adder (Display)",
    "code": "module fadder_display(\n    input  wire A,        // Connect to SW0\n    input  wire B,        // Connect to SW1\n    input  wire Cin,      // Connect to SW2\n    output reg  [6:0] HEX0, // Sum on HEX0\n    output reg  [6:0] HEX1  // Carry on HEX1\n);\n\n    wire Sum, Cout;\n\n    // Full Adder logic\n    assign Sum  = A ^ B ^ Cin;\n    assign Cout = (A & B) | (B & Cin) | (A & Cin);\n\n    // Drive HEX0 (Sum)\n    always @(*) begin\n        if (Sum == 1'b0)\n            HEX0 = 7'b0000001; // \"0\"\n        else\n            HEX0 = 7'b1001111; // \"1\"\n    end\n\n    // Drive HEX1 (Carry)\n    always @(*) begin\n        if (Cout == 1'b0)\n            HEX1 = 7'b0000001; // \"0\"\n        else\n            HEX1 = 7'b1001111; // \"1\"\n    end\n\nendmodule\n"
  },
  {
    "id": "2025-08-31T08:53:23.994Z",
    "title": "AQI Index (BUDGET)",
    "code": "ESP32 Dev Board  -\t₹479\n\nGas Sensor MQ-135  - ₹235\n\nLM358P Op-Amp DIP-8\t - ₹20\n\nDHT11 Module  -\t₹59\n\nMiscellaneous Components\t-\t₹100\n\nPower Supply  -\t₹100\n\nTotal Estimated Cost  ~  ₹1000"
  }
];
