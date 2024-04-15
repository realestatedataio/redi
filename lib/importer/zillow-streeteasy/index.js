import { default as Importer } from "../index.js";




class ZillowStreeteasyImporter extends Importer
{
    constructor(config)
    {
        super();
    };




    ToProperty(d)
    {
        if (d === null || d === undefined)
        {
            return null;
        }

        let addressResult = d && d.hasOwnProperty("title") && d.title ? this._addressParser.Parse(d.title) : null;
        let p = new Property();
        p.id = null;
        
    };

    FileToProperty(file)
    {
        let p = null;

        try
        {
            let se = fs.readFileSync(file);
            se = JSON.parse(se);
            p = this.ToProperty(se);
        }

        catch (e)
        {
        }

        return this.ToProperty(se);
    };



    
};

export default ZillowStreeteasyImporter;
