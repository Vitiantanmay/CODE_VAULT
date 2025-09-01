import type { Note } from '../types';

export const initialNotes: Note[] = [
  {
    "id": "2025-09-01T04:14:28.595Z",
    "title": "Full Adder (7-Seg Display)",
    "code": "module full_adder_display(\n    input  wire A,\n    input  wire B,\n    input  wire Cin,\n    output reg  [6:0] HEX0,   // Sum\n    output reg  [6:0] HEX1    // Carry\n);\n\n    wire Sum, Cout;\n\n    // Full Adder logic\n    assign Sum  = A ^ B ^ Cin;\n    assign Cout = (A & B) | (B & Cin) | (A & Cin);\n\n    // Drive HEX0 for Sum using if-else\n    always @(*) begin\n        if (Sum == 1'b0)\n            HEX0 = 7'b0000001; // Display \"0\"\n        else\n            HEX0 = 7'b1001111; // Display \"1\"\n    end\n\n    // Drive HEX1 for Carry using if-else\n    always @(*) begin\n        if (Cout == 1'b0)\n            HEX1 = 7'b0000001; // Display \"0\"\n        else\n            HEX1 = 7'b1001111; // Display \"1\"\n    end\n\nendmodule\n"
  },
  {
    "id": "2025-08-31T08:53:23.994Z",
    "title": "AQI Index (BUDGET)",
    "code": "ESP32 Dev Board  -\t₹479\n\nGas Sensor MQ-135  - ₹235\n\nLM358P Op-Amp DIP-8\t - ₹20\n\nDHT11 Module  -\t₹59\n\nMiscellaneous Components\t-\t₹100\n\nPower Supply  -\t₹100\n\nTotal Estimated Cost  ~  ₹1000"
  }
];
