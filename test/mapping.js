import { default as Redi } from "../index.js";
import fs from "fs";
import minimist from "minimist";




const argv = minimist(process.argv.slice(2));




const Run = async () =>
{
    let argDir = argv.hasOwnProperty("dir") ? argv.dir : null;
    argDir = argDir ? argDir : null;

    let argOutput = argv.hasOwnProperty("output") ? argv.output : null;
    argOutput = argOutput ? argOutput : null;

    const buildingMapper = new Redi.BuildingMapper();
};

Run();