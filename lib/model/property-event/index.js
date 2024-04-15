class PropertyEvent
{
    _source = null;
    _sourceLocation = null;
    _sourceDirectLocation = null;
    _localLocation = null;
    _date = null;
    _rawDate = null;
    _details = null;
    _rawDetails = null;
    _type = null;
    _price = null;
    _rawPrice = null;
    _provider = null;




    constructor()
    {
    };



    ToJson()
    {
        let d = 
        {
            "source": this.source,
            "sourceLocation": this.sourceLocation,
            "sourceDirectLocation": this.sourceDirectLocation,
            "localLocation": this.localLocation,
            "date": this.date,
            "rawDate": this.rawDate,
            "details": this.details,
            "rawDetails": this.rawDetails,
            "type": this.type,
            "price": this.price,
            "rawPrice": this.rawPrice,
            "provider": this.provider
        };

        return d;
    };




    /*********************/
    /* Setters & Getters */
    /*********************/

    set source(v)
    {
        this._source = v;
    };

    get source()
    {
        return this._source;
    };

    set sourceLocation(v)
    {
        this._sourceLocation = v;
    };

    get sourceLocation()
    {
        return this._sourceLocation;
    };

    set sourceDirectLocation(v)
    {
        this._sourceDirectLocation = v;
    };

    get sourceDirectLocation()
    {
        return this._sourceDirectLocation;
    };

    set localLocation(v)
    {
        this._localLocation = v;
    };

    get localLocation()
    {
        return this._localLocation;
    };

    set date(v)
    {
        this._date = v;
    };

    get date()
    {
        return this._date;
    };

    set rawDate(v)
    {
        this._rawDate = v;
    };

    get rawDate()
    {
        return this._rawDate;
    };

    set details(v)
    {
        this._details = v;
    };

    get details()
    {
        return this._details;
    };

    set rawDetails(v)
    {
        this._rawDetails = v;
    };

    get rawDetails()
    {
        return this._rawDetails;
    };

    set type(v)
    {
        this._type = v;
    };

    get type()
    {
        return this._type;
    };

    set price(v)
    {
        this._price = v;
    };

    get price()
    {
        return this._price;
    };

    set rawPrice(v)
    {
        this._rawPrice = v;
    };

    get rawPrice()
    {
        return this._rawPrice;
    };

    set provider(v)
    {
        this._provider = v;
    };

    get provider()
    {
        return this._provider;
    };
};

export default PropertyEvent;