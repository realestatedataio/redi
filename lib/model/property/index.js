class Property
{
    _id = null;
    _address = null;
    _cleanAddress = null;
    _unit = null;
    _cleanUnit = null;
    _building = null;

    _type = null;

    _sqft = null;
    _beds = null;
    _baths = null;

    _events = [];
    _taxes = [];

    _details = [];

    _created = null;
    _status = null;


    constructor()
    {
    };



    ToJson()
    {
        let d = 
        {
            "id": this.id,
            "address": this.address,
            "cleanAddress": this.cleanAddress,
            "unit": this.unit,
            "cleanUnit": this.cleanUnit,
            "building": this.building,

            "type": this.type,

            "sqft": this.sqft,
            "beds": this.beds,
            "baths": this.baths,

            "events": this.events,
            "taxes": this.taxes,

            "details": this.details,

            "created": this.created,
            "status": this.status
        };

        return d;
    };




    /*********************/
    /* Setters & Getters */
    /*********************/

    set id(v)
    {
        this._id = v;
    };

    get id()
    {
        return this._id;
    };

    set address(v)
    {
        this._address = v;
    };

    get address()
    {
        return this._address;
    };

    set cleanAddress(v)
    {
        this._cleanAddress = v;
    };

    get cleanAddress()
    {
        return this._cleanAddress;
    };

    set unit(v)
    {
        this._unit = v;
    };

    get unit()
    {
        return this._unit;
    };

    set cleanUnit(v)
    {
        this._cleanUnit = v;
    };

    get cleanUnit()
    {
        return this._cleanUnit;
    };

    set building(v)
    {
        this._building = v;
    };

    get building()
    {
        return this._building;
    };

    set type(v)
    {
        this._type = v;
    };

    get type()
    {
        return this._type;
    };

    set sqft(v)
    {
        this._sqft = v;
    };

    get sqft()
    {
        return this._sqft;
    };

    set beds(v)
    {
        this._beds = v;
    };

    get beds()
    {
        return this._beds;
    };

    set baths(v)
    {
        this._baths = v;
    };  

    get baths()
    {
        return this._baths;
    };

    set events(v)
    {
        this._events = v;
    };

    get events()
    {
        return this._events;
    };

    set taxes(v)
    {
        this._taxes = v;
    };

    get taxes()
    {
        return this._taxes;
    };

    set created(v)
    {
        this._created = v;
    };

    get created()
    {
        return this._created;
    };

    set status(v)
    {
        this._status = v;
    };

    get status()
    {
        return this._status;
    };
};

export default Property;