import { default as Mapper } from "../index.js";
import { default as Property } from "../../model/property/index.js";
import { AddressParser } from "../../address-parser/index.js";




class PropertyMapper extends Mapper
{
    _addressParser = null;




    constructor()
    {
        super();

        this._addressParser = new AddressParser();
    };




    FromJson(d)
    {
        let p = new Property();
        p.id = d.hasOwnProperty("id") ? d.id : null;
        p.address = d.hasOwnProperty("address") ? d.address : null;
        p.cleanAddress = d.hasOwnProperty("cleanAddress") ? d.cleanAddress : null;
        p.unit = d.hasOwnProperty("unit") ? d.unit : null;
        p.cleanUnit = d.hasOwnProperty("cleanUnit") ? d.cleanUnit : null;
        p.building = d.hasOwnProperty("building") ? d.building : null;
        p.type = d.hasOwnProperty("type") ? d.type : null;
        p.sqft = d.hasOwnProperty("sqft") ? d.sqft : null;
        p.beds = d.hasOwnProperty("beds") ? d.beds : null;
        p.baths = d.hasOwnProperty("baths") ? d.baths : null;
        p.events = d.hasOwnProperty("events") ? d.events : null;
        p.taxes = d.hasOwnProperty("taxes") ? d.taxes : null;
        p.details = d.hasOwnProperty("details") ? d.details : null;
        p.created = d.hasOwnProperty("created") ? d.created : null;
        p.status = d.hasOwnProperty("status") ? d.status : null;
        return p;
    };
};

export default PropertyMapper;