import { theme } from "./theme.js";
import { color, colors } from "./colors.js";
// import { colors } from "./config.js";
import fs from "fs";

const colorTheme = theme(color, colors);

const result = JSON.stringify(colorTheme, null, 4);
 
fs.writeFile('themes/mista-theme.json', result, (err) => {
    if (err) {
        console.error('Error writing file', err);
    } else {
        console.log('Successfully wrote file');
    }
});
