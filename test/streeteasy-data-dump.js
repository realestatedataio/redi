import { default as Redi } from "../index.js"
import fs from "fs";
import minimist from "minimist";
import ExcelJS from "exceljs";


const argv = minimist(process.argv.slice(2));

const rediAddressParser = new Redi.AddressParser();

let wb = null;
let ws = null;


const ProcessFolder = async (folder) =>
{
    let dir = fs.opendirSync(folder);
    let file = null;
    let totalFiles = 0;
    let currentFile = 0;

    console.log("Processing folder " + folder);

    while ((file = dir.readSync()) !== null)
    {
        totalFiles = totalFiles + 1;

        if (file.isDirectory() && file.name.indexOf(".") === -1 && file.name.indexOf("..") === -1)
        {
            await ProcessFolder(dir.path + "/" + file.name);
        }

        else
        {
            //console.log("processing file " + file.name);
            let contents = fs.readFileSync(dir.path + "/" + file.name);
            let json = JSON.parse(contents);
            let title = json && json.hasOwnProperty("title") ? json.title : null;

            let result = await rediAddressParser.CleanAddress(title);

            if (result)
            {
                result.cleanUnit = await rediAddressParser.CleanUnit(result.unit);
                ws.addRow(result);
            }
            //console.log(result);
        }
    }

    dir.closeSync();
};

const Run = async () =>
{
    let argDir = argv.hasOwnProperty("dir") ? argv.dir : null;
    argDir = argDir ? argDir : null;

    let argOutput = argv.hasOwnProperty("output") ? argv.output : null;
    argOutput = argOutput ? argOutput : null;

    if (argDir === null)
    {
        console.log("Syntax: node streeteasy-data-dump.js --dir=<directory>");
        return;
    }

    wb = new ExcelJS.Workbook();
    ws = wb.addWorksheet("testing");

    ws.views = 
    [
        {"state": "frozen", "ySplit": 1}
    ];

    ws.columns = 
    [
        {"header": "Address", "key": "address", "width": 15},
        {"header": "Clean Address", "key": "cleanAddress", "width": 15},
        {"header": "Unit", "key": "unit", "width": 15},    
        {"header": "Clean Unit", "key": "cleanUnit", "width": 15}
    ];

    await ProcessFolder(argDir);

    await wb.xlsx.writeFile(argOutput);
};

Run();