import { default as Mapper } from "../index.js";
import { default as Building } from "../../model/building/index.js";




class BuildingMapper extends Mapper
{
    constructor()
    {
        super();
    };





    FromJson(d)
    {
        let b = new Building();
        b.id = d.hasOwnProperty("id") ? d.id : null;
        b.address = d.hasOwnProperty("address") ? d.address : null;
        b.cleanAddress = d.hasOwnProperty("cleanAddress") ? d.cleanAddress : null;
        b.city = d.hasOwnProperty("city") ? d.city : null;
        b.state = d.hasOwnProperty("state") ? d.state : null;
        b.postalCode = d.hasOwnProperty("postalCode") ? d.postalCode : null;
        b.county = d.hasOwnProperty("county") ? d.county : null;
        b.country = d.hasOwnProperty("country") ? d.country : null;
        b.latitude = d.hasOwnProperty("latitude") ? d.latitude : null;
        b.longitude = d.hasOwnProperty("longitude") ? d.longitude : null;
        b.submarkets = d.hasOwnProperty("submarkets") ? d.submarkets : null;
        b.type = d.hasOwnProperty("type") ? d.type : null;
        b.details = d.hasOwnProperty("details") ? d.details : null;
        b.created = d.hasOwnProperty("created") ? d.created : null;
        b.status = d.hasOwnProperty("status") ? d.status : null;
        return b;
    };


    FromStreeteasy(d)
    {
        let addressResult = d && d.hasOwnProperty("title") ? this._addressParser.Parse(d.title) : null;

        let dl = d && d.hasOwnProperty("dl") ? d.dl : null;
        dl = dl && dl.length > 0 ? dl[0] : null;
        dl = dl && dl.hasOwnProperty("zguidh") ? dl : null;

        let boro = dl && dl.hasOwnProperty("listBoro") ? dl.listBoro : null;
        let lat = dl && dl.hasOwnProperty("listGeoLat") ? dl.listGeoLat : null;
        let lng = dl && dl.hasOwnProperty("listGeoLon") ? dl.listGeoLon : null;
        let propType = dl && dl.hasOwnProperty("listPropertyType") ? dl.listPropertyType : null;

        let b = new Building();
        b.id = null;
        b.address = addressResult && addressResult.hasOwnProperty("address") ? addressResult.address : null;
        b.cleanAddress = addressResult && addressResult.hasOwnProperty("cleanAddress") ? addressResult.cleanAddress : null;
        b.city = d && d.hasOwnProperty("buildingCity") ? d.buildingCity : null;
        b.state = d && d.hasOwnProperty("buildingState") ? d.buildingState : null;
        b.postalCode = d && d.hasOwnProperty("buildingZip") ? d.buildingZip : null;
        b.county = boro ? boro.toUpperCase().trim() : null;
        b.country = "US";
        b.latitude = lat ? lat : null;
        b.longitude = lng ? lng : null;
        b.type = propType;
        b.created = Date.now();
        b.status = 1;
        return b;
    };

    FromOutEast(d)
    {
        let b = new Building();
        return b;
    };

    FromZillow(d)
    {
        let b = new Building();
        return b;
    };

    FromRedfin(d)
    {
        let b = new Building();
        return b;
    };

    FromRealtor(d)
    {
        let b = new Building();
        return b;
    };
};

export default BuildingMapper;