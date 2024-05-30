import fs from "fs";
import { yarg } from "./config/plugins/args.plugin";

const { b: base, l: limit, s: show } = yarg


const title = `
=======================================
    Tabla del ${base}
=======================================
   
`
let outputMessage = '';


for (let index = 1; index <= limit; index++) {
    outputMessage += `${base} x ${index} =  ${base * index}\n`;
}

const data = title + outputMessage;

show && console.log(data);

const outputPath = 'outputs'

fs.mkdirSync(outputPath, { recursive: true })
fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, data)

console.log('File created');




