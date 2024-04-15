class Building
{
    _id = null;
    _address = null;
    _cleanAddress = null;
    _city = null;
    _state = null;
    _postalCode = null;
    _county = null;
    _country = null;
    _latitude = null;
    _longitude = null;
    _submarkets = [];
    _type = null;
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
            "city": this.city,
            "state": this.state,
            "postalCode": this.postalCode,
            "county": this.county,
            "country": this.country,
            "latitude": this.latitude,
            "longitude": this.longitude,
            "submarkets": this.submarkets,
            "type": this.type,
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

    set city(v)
    {
        this._city = v;
    };

    get city()
    {
        return this._city;
    };

    set state(v)
    {
        this._state = v;
    };

    get state()
    {
        return this._state;
    };

    set postalCode(v)
    {
        this._postalCode = v;
    };

    get postalCode()
    {
        return this._postalCode;
    };

    set county(v)
    {
        this._county = v;
    };

    get county()
    {
        return this._county;
    };

    set country(v)
    {
        this._country = v;
    };

    get country()
    {
        return this._country;
    };

    set latitude(v)
    {
        this._latitude = v;
    };

    get latitude()
    {
        return this._latitude;
    };

    set longitude(v)
    {
        this._longitude = v;
    };

    get longitude()
    {
        return this._longitude;
    };

    set submarkets(v)
    {
        this._submarkets = v;
    };

    get submarkets()
    {
        return this._submarkets;
    };

    set type(v)
    {
        this._type = v;
    };

    get type()
    {
        return this._type;
    };

    set details(v)
    {
        this._details = v;
    };

    get details()
    {
        return this._details;
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

export default Building;