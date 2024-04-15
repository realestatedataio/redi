class AddressParser
{
    _directionFormats = 
    [
        {"pattern": "(NORTH|NRTH|N)", "replace": "N"},
        {"pattern": "(SOUTH|STH|S)", "replace": "S"},
        {"pattern": "(EAST|E)", "replace": "E"},
        {"pattern": "(WEST|WST|W)", "replace": "W"},
        {"pattern": "(NORTHWEST|NRTHWST|NORTHWST|NTHWST|NRTHWEST|NORTHW|NRTHW)", "replace": "NW"},
        {"pattern": "(NORTHEAST|NRTHEST|NORTHEST|NTHEST|NRTHEAST|NORTHE|NRTHE)", "replace": "NE"},
        {"pattern": "(SOUTHWEST|STHWST|SOUTHWST|STHW|STHWEST|SOUTHW|STHW)", "replace": "SW"},
        {"pattern": "(SOUTHEAST|STHEST|SOUTHEST|STHE|STHEAST|SOUTHE|STHE)", "replace": "SE"},
    ];

    _streetSuffixFormats =
    [
        {"pattern": "(ALLEY|ALLEE|ALLY|ALY)", "replace": "ALLEY"},
        {"pattern": "(ANNEX|ANEX|ANNX|ANX)", "replace": "ANNEX"},
        {"pattern": "(ARCADE|ARCDE|ARCD|ARC)", "replace": "ARCADE"},
        {"pattern": "(AVENUE|AVENU|AVNUE|AVEN|AVN|AVE|AV)", "replace": "AVE"},
        {"pattern": "(BAYOU|BAYOO|BYU)", "replace": "BAYOU"},
        {"pattern": "(BEACH|BCH)", "replace": "BEACH"},
        {"pattern": "(BEND|BND)", "replace": "BEND"},
        {"pattern": "(BLUFFS|BLUFS|BLFS)", "replace": "BLUFFS"},
        {"pattern": "(BLUFF|BLUF|BLF)", "replace": "BLUFF"},
        {"pattern": "(BOTTOM|BOTTM|BTTM|BTM|BOT)", "replace": "BOTTOM"},
        {"pattern": "(BOULEVARD|BOULEVRD|BOULEVA|BLVARD|BLVRD|BOULVD|BOULVRD|BLVD|BOULV|BOUL)", "replace": "BLVD"},
        {"pattern": "(BRANCH|BRNCH|BR)", "replace": "BRANCH"},
        {"pattern": "(BRIDGE|BRDGE|BRG)", "replace": "BRIDGE"},
        {"pattern": "(BROADWAY|BROADWY|BRODWY|BRODWAY|BRDWAY|BRDWY|BWAY|BWY)", "replace": "BROADWAY"},
        {"pattern": "(BROOKS|BRKS)", "replace": "BROOKS"},
        {"pattern": "(BROOK|BRK)", "replace": "BROOK"},
        {"pattern": "(BURGS)", "replace": "BURGS"},
        {"pattern": "(BURG)", "replace": "BURG"},
        {"pattern": "(BYPASS|BYPAS|BYPS|BYPA|BYP)", "replace": "BYPASS"},
        {"pattern": "(CAMP|CMP|CP)", "replace": "CAMP"},
        {"pattern": "(CANYON|CANYN|CNYON|CNYN)", "replace": "CANYON"},
        {"pattern": "(CAPE|CPE)", "replace": "CAPE"},
        {"pattern": "(CAUSEWAY|CAUSWY|CAUSWA|CAUSEWY|CSWY)", "replace": "CAUSEWAY"},
        {"pattern": "(CENTERS|CENTRES|CNTERS|CENTRS|CENTS|CNTRS|CTRS|CENS)", "replace": "CENTERS"},
        {"pattern": "(CENTER|CENTRE|CNTER|CENTR|CENT|CNTR|CTR|CEN)", "replace": "CENTER"},
        {"pattern": "(CIRCLES|CRCLES|CIRCLS|CRCLS|CIRCS|CIRS)", "replace": "CIRCLES"},
        {"pattern": "(CIRCLE|CRCLE|CIRCL|CRCL|CIRC|CIR)", "replace": "CIRCLE"},
        {"pattern": "(CLIFFS|CLIFS|CLFS)", "replace": "CLIFFS"},
        {"pattern": "(CLIFF|CLIF|CLF)", "replace": "CLIFF"},
        {"pattern": "(CLUB|CLB)", "replace": "CLUB"},
        {"pattern": "(COMMONS|CMMNS|CMNS)", "replace": "COMMONS"},
        {"pattern": "(COMMON|CMMN|CMN)", "replace": "COMMON"},
        {"pattern": "(CORNERS|CRNERS|CRNRS|CNRS|CORS)", "replace": "CORNERS"},
        {"pattern": "(CORNER|CRNER|CRNR|CNR|COR)", "replace": "CORNER"},
        {"pattern": "(COURSE|CORSE|CRSE)", "replace": "COURSE"},
        {"pattern": "(COURTS|CTS)", "replace": "CTS"},
        {"pattern": "(COURT|CT)", "replace": "CT"},
        {"pattern": "(COVES|CVS)", "replace": "COVES"},
        {"pattern": "(COVE|CV)", "replace": "COVE"},
        {"pattern": "(CREEK|CRK)", "replace": "CREEK"},
        {"pattern": "(CRESCENT|CRSENT|CRSNT|CRES)", "replace": "CRESCENT"},
        {"pattern": "(CREST|CRST)", "replace": "CREST"},
        {"pattern": "(CROSSING|CRSSNG|CRSSING|CRSNG|XING)", "replace": "CROSSING"},
        {"pattern": "(CROSSROADS|CRSSRDS|CROSSRDS|CRSRDS|XRDS)", "replace": "CROSSROADS"},
        {"pattern": "(CROSSROAD|CRSSRD|CROSSRD|CRSRD|XRD)", "replace": "CROSSROAD"},
        {"pattern": "(CURVE|CURV)", "replace": "CURVE"},
        {"pattern": "(DALE|DL)", "replace": "DALE"},
        {"pattern": "(DAM|DM)", "replace": "DAM"},
        {"pattern": "(DIVIDE|DIVDE|DVIDE|DIV|DV|DVD)", "replace": "DIVIDE"},
        {"pattern": "(DRIVES|DRIVS|DRVS|DRS)", "replace": "DRS"},
        {"pattern": "(DRIVE|DRIV|DRV|DR)", "replace": "DR"},
        {"pattern": "(ESTATES|ESTS)", "replace": "ESTATES"},
        {"pattern": "(ESTATE|EST)", "replace": "ESTATE"},
        {"pattern": "(EXPRESSWAY|EXPRESSWY|EXPWAY|EXPWY|EXPRESS|EXPR|EXPW|EXPY|EXP)", "replace": "EXPWY"},
        {"pattern": "(EXTENSIONS|EXTNSNS|EXTNS|EXTS)", "replace": "EXTS"},
        {"pattern": "(EXTENSION|EXTNSN|EXTN|EXT)", "replace": "EXT"},
        {"pattern": "(FALLS|FLS)", "replace": "FALLS"},
        {"pattern": "(FALL)", "replace": "FALL"},
        {"pattern": "(FERRY|FERY|FRRY|FRY)", "replace": "FERRY"},
        {"pattern": "(FIELDS|FLDS)", "replace": "FIELDS"},
        {"pattern": "(FIELD|FLD)", "replace": "FIELD"},
        {"pattern": "(FLATS|FLTS)", "replace": "FLATS"},
        {"pattern": "(FLAT|FLT)", "replace": "FLAT"},
        {"pattern": "(FORDS|FRDS)", "replace": "FORDS"},
        {"pattern": "(FORD|FRD)", "replace": "FORD"},
        {"pattern": "(FORESTS|FOREST|FRST)", "replace": "FOREST"},
        {"pattern": "(FORGES|FORGS|FRGS)", "replace": "FORGES"},
        {"pattern": "(FORGE|FORG|FRG)", "replace": "FORGE"},
        {"pattern": "(FORKS|FRKS)", "replace": "FORKS"},
        {"pattern": "(FORK|FRK)", "replace": "FORK"},
        {"pattern": "(FORT|FRT|FT)", "replace": "FT"},
        {"pattern": "(FREEWAY|FREEWY|FRWAY|FRWY|FWY)", "replace": "FWY"},
        {"pattern": "(GARDENS|GARDNS|GRDENS|GRDNS)", "replace": "GARDENS"},
        {"pattern": "(GARDEN|GARDN|GRDEN|GRDN)", "replace": "GARDEN"},
        {"pattern": "(GATEWAY|GATEWY|GATWAY|GTWAY|GTWY)", "replace": "GATEWAY"},
        {"pattern": "(GLENS|GLNS)", "replace": "GLENS"},
        {"pattern": "(GLEN|GLN)", "replace": "GLEN"},
        {"pattern": "(GREENS|GRNS)", "replace": "GREENS"},
        {"pattern": "(GREEN|GRN)", "replace": "GREEN"},
        {"pattern": "(GROVES|GROVS|GRVS)", "replace": "GROVES"},
        {"pattern": "(GROVE|GROV|GRV)", "replace": "GROVE"},
        {"pattern": "(HARBORS|HARBOURS|HRBORS|HRBOURS|HARBRS|HARBS|HBRS)", "replace": "HARBOR"},
        {"pattern": "(HARBOR|HARBOUR|HRBOR|HRBOUR|HARBR|HARB|HBR)", "replace": "HARBOR"},
        {"pattern": "(HAVEN|HVN)", "replace": "HAVEN"},
        {"pattern": "(HEIGHTS|HIGHTS|HTS|HT)", "replace": "HTS"},
        {"pattern": "(HIGHWAY|HIWAY|HIGHWY|HIWY|HWY|HWAY)", "replace": "HWY"},
        {"pattern": "(HILLS|HLS)", "replace": "HILLS"},
        {"pattern": "(HILL|HL)", "replace": "HILL"},
        {"pattern": "(HOLLOWS|HOLLOW|HOLWS|HOLW|HLLW)", "replace": "HOLLOW"},
        {"pattern": "(INLET|INLT)", "replace": "INLET"},
        {"pattern": "(ISLANDS|ISLNDS|ISS)", "replace": "ISLANDS"},
        {"pattern": "(ISLAND|ISLND|IS)", "replace": "ISLAND"},
        {"pattern": "(ISLES|ISLE)", "replace": "ISLE"},
        {"pattern": "(JUNCTIONS|JCTNS|JCTS)", "replace": "JUNCTIONS"},
        {"pattern": "(KEYS|KYS)", "replace": "KEYS"},
        {"pattern": "(KEY|KY)", "replace": "KEY"},
        {"pattern": "(KNOLLS|KNLS|KNOLS)", "replace": "KNOLLS"},
        {"pattern": "(KNOLL|KNL|KNOL)", "replace": "KNOLL"},
        {"pattern": "(LAKES|LKS)", "replace": "LAKES"},
        {"pattern": "(LAKE|LK)", "replace": "LAKE"},
        {"pattern": "(LAND)", "replace": "LAND"},
        {"pattern": "(LANDING|LNDNG|LNDG)", "replace": "LANDING"},
        {"pattern": "(LANE|LN)", "replace": "LN"},
        {"pattern": "(LIGHTS|LGHTS|LGTS)", "replace": "LIGHTS"},
        {"pattern": "(LIGHT|LGHT|LGT)", "replace": "LIGHT"},
        {"pattern": "(LOAF|LF)", "replace": "LOAF"},
        {"pattern": "(LOCKS|LCKS)", "replace": "LOCKS"},
        {"pattern": "(LOCK|LCK)", "replace": "LOCK"},
        {"pattern": "(LODGE|LODG|LDGE|LDG)", "replace": "LODGE"},
        {"pattern": "(LOOPS|LOOP)", "replace": "LOOP"},
        {"pattern": "(MALL)", "replace": "MALL"},
        {"pattern": "(MANORS|MNRS)", "replace": "MANORS"},
        {"pattern": "(MANOR|MNR)", "replace": "MANOR"},
        {"pattern": "(MEADOWS|MEDOWS|MDWS)", "replace": "MEADOWS"},
        {"pattern": "(MEADOW|MEDOW|MDW)", "replace": "MEADOW"},
        {"pattern": "(MEWS)", "replace": "MEWS"},
        {"pattern": "(MILLS|MLS)", "replace": "MILLS"},
        {"pattern": "(MILL|ML)", "replace": "MILL"},
        {"pattern": "(MISSION|MISION|MISSN|MSSN|MSN)", "replace": "MISSION"},
        {"pattern": "(MOTORWAY|MTRWY|MOTORWY)", "replace": "MOTORWAY"},
        {"pattern": "(MOUNTAINS|MNTAINS|MOUNTINS|MNTNS|MTINS|MTNS)", "replace": "MOUNTAINS"},
        {"pattern": "(MOUNTAIN|MNTAIN|MOUNTIN|MNTN|MTIN|MTN)", "replace": "MOUNTAIN"},
        {"pattern": "(NECK|NEK|NCK)", "replace": "NECK"},
        {"pattern": "(ORCHARD|ORCHRD|ORCH)", "replace": "ORCHARD"},
        {"pattern": "(OVAL|OVL)", "replace": "OVAL"},
        {"pattern": "(OVERPASS|OVERPSS|OVRPSS|OPAS)", "replace": "OVERPASS"},
        {"pattern": "(PARKS|PRKS|PKS)", "replace": "PARKS"},
        {"pattern": "(PARK|PRK|PK)", "replace": "PARK"},
        {"pattern": "(PARKWAYS|PARKWYS|PRKWYS|PKWAYS|PKWYS|PKYS)", "replace": "PKWYS"},
        {"pattern": "(PARKWAY|PARKWY|PRKWY|PKWAY|PKWY|PKY)", "replace": "PKWY"},
        {"pattern": "(PASS)", "replace": "PASS"},
        {"pattern": "(PASSAGE|PSSGE|PASG|PSGE)", "replace": "PASSAGE"},
        {"pattern": "(PATHS|PATH|PTH)", "replace": "PATH"},
        {"pattern": "(PIKES|PIKE|PKE)", "replace": "PIKE"},
        {"pattern": "(PINES|PNES)", "replace": "PINES"},
        {"pattern": "(PINE|PNE)", "replace": "PINE"},
        {"pattern": "(PLACE|PLCE|PL)", "replace": "PL"},
        {"pattern": "(PLAINS|PLNS)", "replace": "PLAINS"},
        {"pattern": "(PLAIN|PLN)", "replace": "PLAIN"},
        {"pattern": "(PLAZA|PLZA|PLZ)", "replace": "PLAZA"},
        {"pattern": "(POINTS|PTS)", "replace": "POINTS"},
        {"pattern": "(POINT|PT)", "replace": "POINT"},
        {"pattern": "(PORTS|PRTS)", "replace": "PORTS"},
        {"pattern": "(PORT|PRT)", "replace": "PORT"},
        {"pattern": "(PRAIRIE|PRARIE|PRR|PR)", "replace": "PRAIRIE"},
        {"pattern": "(RADIAL|RAIDIAL|RAIDIEL|RADIEL|RADL|RDL|RAD)", "replace": "RADIAL"},
        {"pattern": "(RAMP)", "replace": "RAMP"},
        {"pattern": "(RAPIDS|RPDS)", "replace": "RAPIDS"},
        {"pattern": "(RAPID|RPD)", "replace": "RAPID"},
        {"pattern": "(REST|RST)", "replace": "REST"},
        {"pattern": "(RIDGES|RDGES|RDGS)", "replace": "RIDGES"},
        {"pattern": "(RIDGE|RDGE|RDG)", "replace": "RIDGE"},
        {"pattern": "(RIVER|RVER|RIVR|RVR|RIV)", "replace": "RIVER"},
        {"pattern": "(ROADS|RDS)", "replace": "ROADS"},
        {"pattern": "(ROAD|RD)", "replace": "RD"},
        {"pattern": "(ROUTE|RTE)", "replace": "ROUTE"},
        {"pattern": "(ROW)", "replace": "ROW"},
        {"pattern": "(RUE)", "replace": "RUE"},
        {"pattern": "(RUN)", "replace": "RUN"},
        {"pattern": "(SHOALS|SHLS)", "replace": "SHOALS"},
        {"pattern": "(SHOAL|SHL)", "replace": "SHOAL"},
        {"pattern": "(SHORES|SHOARS|SHRS)", "replace": "SHORES"},
        {"pattern": "(SHORE|SHOAR|SHR)", "replace": "SHORE"},
        {"pattern": "(SKYWAY|SKYWY|SKWAY|SKWY)", "replace": "SKYWAY"},
        {"pattern": "(SPRINGS|SPRNGS|SPNGS|SPGS)", "replace": "SPRINGS"},
        {"pattern": "(SPRING|SPRNG|SPNG|SPG)", "replace": "SPRING"},
        {"pattern": "(SPURS|SPUR)", "replace": "SPUR"},
        {"pattern": "(SQUARES|SQRES|SQRS|SQS)", "replace": "SQS"},
        {"pattern": "(SQUARE|SQRE|SQR|SQ)", "replace": "SQ"},
        {"pattern": "(STATION|STATN|STN|STA)", "replace": "STATION"},
        {"pattern": "(STRAVENUE|STRVNUE|STRAVEN|STRAVN|STRVN|STRAV|STRA)", "replace": "STRAVENUE"},
        {"pattern": "(STREAM|STREME|STRM)", "replace": "STREAM"},
        {"pattern": "(STREETS|STREES|STRTS|STRS|STS)", "replace": "STS"},
        {"pattern": "(STREET|STREE|STRET|STRT|STR|ST)", "replace": "ST"},
        {"pattern": "(SUMMIT|SUMITT|SUMIT|SMT)", "replace": "SUMMIT"},
        {"pattern": "(TERRACE|TERACE|TRRACE|TERR|TER)", "replace": "TER"},
        {"pattern": "(THROUGHWAY|THROUGHWY|THROWAY|THRUWAY|THROWY|THRUWY|THRWAY|THRWY|TRWY)", "replace": "TRWY"},
        {"pattern": "(TRACES|TRACE|TRCE)", "replace": "TRACE"},
        {"pattern": "(TRACKS|TRACK|TRAK|TRKS|TRK)", "replace": "TRACK"},
        {"pattern": "(TRAFFICWAY|TRAFFICWY|TRFFWAY|TRFFWY|TRFWAY|TRFWY|TRFY)", "replace": "TRAFFICWAY"},
        {"pattern": "(TRAILS|TRAIL|TRLS|TRL)", "replace": "TRAIL"},
        {"pattern": "(TRAILERS|TRAILER|TRLRS|TRLR)", "replace": "TRAILER"},
        {"pattern": "(TUNNELS|TUNNEL|TUNELS|TUNEL|TUNNLS|TUNNL|TUNLS|TUNL|TNLS|TNL)", "replace": "TUNNEL"},
        {"pattern": "(TURNPIKE|TRNPIKE|TURNPK|TRNPK|TPKE)", "replace": "TPKE"},
        {"pattern": "(UNDERPASS|UNDERPSS|UNDRPASS|UNDRPS|UPAS)", "replace": "UNDERPASS"},
        {"pattern": "(UNIONS|UNS)", "replace": "UNIONS"},
        {"pattern": "(UNION|UN)", "replace": "UNION"},
        {"pattern": "(VALLEYS|VALLYS|VALYS|VLLYS|VLYS)", "replace": "VALLEYS"},
        {"pattern": "(VALLEY|VALLY|VALY|VLLY|VLY)", "replace": "VALLEY"},
        {"pattern": "(VIADUCT|VIADCT|VDCT|VIA)", "replace": "VIADUCT"},
        {"pattern": "(VIEWS|VWS)", "replace": "VIEWS"},
        {"pattern": "(VIEW|VW)", "replace": "VIEW"},
        {"pattern": "(VILLAGES|VILLIAGES|VILLAGS|VILAGES|VILAGS|VILLS|VLGS)", "replace": "VILLAGES"},
        {"pattern": "(VILLAGE|VILLIAGE|VILLAG|VILAGE|VILAG|VILL|VLG)", "replace": "VILLAGE"},
        {"pattern": "(VILLE|VL)", "replace": "VILLE"},
        {"pattern": "(VISTA|VIST|VSTA|VST|VIS)", "replace": "VISTA"},
        {"pattern": "(WALKS|WLKS)", "replace": "WALKS"},
        {"pattern": "(WALK|WLK)", "replace": "WALK"},
        {"pattern": "(WALL|WAL)", "replace": "WALL"},
        {"pattern": "(WAYS|WYS)", "replace": "WAYS"},
        {"pattern": "(WAY|WY)", "replace": "WY"},
        {"pattern": "(WELLS|WLS)", "replace": "WELLS"},
        {"pattern": "(WELL|WL)", "replace": "WELL"},
        {"pattern": "(YARDS|YDS)", "replace": "YARDS"},
        {"pattern": "(YARD|YD)", "replace": "YARD"}
    ];

    _ordinalFormats =
    [
        {"pattern": "(FIRST|FRST)", "replace": "1"},
        {"pattern": "(SECOND|SCND)", "replace": "2"},
        {"pattern": "(THIRD|THRD)", "replace": "3"},
        {"pattern": "(FOURTH|FRTH)", "replace": "4"},
        {"pattern": "(FIFTH|FFTH)", "replace": "5"},
        {"pattern": "(SIXTH|SXTH)", "replace": "6"},
        {"pattern": "(SEVENTH|SVNTH)", "replace": "7"},
        {"pattern": "(EIGHTH|EGHTH)", "replace": "8"},
        {"pattern": "(NINTH|NINTH)", "replace": "9"},
        {"pattern": "(TENTH|TENTH)", "replace": "10"},
        {"pattern": "(ELEVENTH|ELVTH)", "replace": "11"},
        {"pattern": "(TWELFTH|TWLTH)", "replace": "12"},
        {"pattern": "(THIRTEENTH|THRTNTH)", "replace": "13"},
        {"pattern": "(FOURTEENTH|FRTNTTH)", "replace": "14"},
        {"pattern": "(FIFTEENTH|FFTNTTH)", "replace": "15"},
        {"pattern": "(SIXTEENTH|SXTNTH)", "replace": "16"},
        {"pattern": "(SEVENTEENTH|SVNTNTH)", "replace": "17"},
        {"pattern": "(EIGHTEENTH|EGHTNTH)", "replace": "18"},
        {"pattern": "(NINETEENTH|NINTNTH)", "replace": "19"},
        {"pattern": "(TWENTIETH|TWNTTH)", "replace": "20"}
    ];

    _unitFormats =
    [
        {"pattern": "#?(APARTMENT|APARTMNT|APARTMT|APART|APTMT|APT)(-?)(.+)", "replace": "$3"},
        {"pattern": "#?(BASEMENT|BSMNT|BSMT)(-?)(.*)", "replace": "BSMT$3"},
        {"pattern": "#?(BUILDING|BLDG|BLD|BLG)(-?)(.*)", "replace": "BLDG$3"},
        {"pattern": "#?(DEPARTMENT|DEPT|DEPTMT|DEPTMNT|DEPTM)(-?)(.*)", "replace": "DEPT$3"},
        {"pattern": "#?(-?)(FLOOR|FLR|FL)(-?)(.+)", "replace": "$4"},
        {"pattern": "#?([0-9]+)((ST|ND|RD|TH)?)(-?)(FLOOR|FLR|FL)(-?)([a-zA-Z]?)", "replace": "$1$6"},
        {"pattern": "#?(.+)(-?)(FLOOR|FLR|FL)", "replace": "$1"},
        {"pattern": "#?(LOT|LT)(-?)(.*)", "replace": "LOT$3"},
        {"pattern": "#?(OFFICE|OFC|OFC)(-?)(.*)", "replace": "OFFICE$3"},
        {"pattern": "#?(PENTHOUSE|PENTHSE|PENTH|PENT|PH)(-?)(/?)(.*)", "replace": "PH$4"},
        {"pattern": "#?(PH)(-?)(NORTH|NRTH)", "replace": "PHN"},
        {"pattern": "#?(PH)(-?)(SOUTH|SOTH|STH)", "replace": "PHS"},
        {"pattern": "#?(PH)(-?)(EAST)", "replace": "PHE"},
        {"pattern": "#?(PH)(-?)(WEST|WST)", "replace": "PHW"},
        {"pattern": "#?(ROOM|RM)(-?)(.+)", "replace": "RM$3"},
        {"pattern": "#?(SHOP|SH)(-?)(.*)", "replace": "SH$3"},
        {"pattern": "#?(STORAGE|STORE|STOR|STR|SU)(-?)(.*)", "replace": "STOR$3"},
        {"pattern": "#?(SUITE|STE)(-?)(.+)", "replace": "STE$3"},
        {"pattern": "#?(UNIT|UNT|UT)(-?)(.+)", "replace": "$3"},
        {"pattern": "#?(RESIDENCE|RESIDENC|RESIDNCE|RESIDNC|RESID|RES)(-?)(.+)", "replace": "$3"},
        {"pattern": "#?(TOWNHOUSE|TOWNHOME|TWNHSE|TWNHS|TWHSE|TWNH|TWHM|TWHN|THSE|THS|TWN|TWH|TWS|TH)(-?)(.*)", "replace": "TH$3"},
        {"pattern": "#?(NONE|NOAPT|NO|NA|MISSING)", "replace": "UNKNOWN"},
        {"pattern": "#?(MAISONETTE|MAISONNETTE|MAISON|MAIS)(-?)(.*)", "replace": "MAISON$3"},
        {"pattern": "#?(CONDOMINIUM|CONDO|CNDO|CND)", "replace": "CONDO"},
        {"pattern": "#?(DUPLEX|DPLEX|DUPLX|DPLX|DUP)", "replace": "DUPLEX"},
        {"pattern": "#?(TRIPLEX|TRPLEX|TRIPLX|TRPLX|TRIP|TRP)", "replace": "TRIPLEX"},
        {"pattern": "#?(GARDEN|GARDN|GRDEN|GRDN|GDN)(-?)(.*)", "replace": "GARDEN$3"},
        {"pattern": "#?(NORTH|NRTH)(-?)(.*)", "replace": "N$3"},
        {"pattern": "#?(SOUTH|SOTH)(-?)(.*)", "replace": "S$3"},
        {"pattern": "#?(EAST)(-?)(.*)", "replace": "E$3"},
        {"pattern": "#?(WEST|WST)(-?)(.*)", "replace": "W$3"},
        {"pattern": "#?(.+)(-?)(NORTH|NRTH)", "replace": "N$1"},
        {"pattern": "#?(.+)(-?)(SOUTH|SOTH)", "replace": "S$1"},
        {"pattern": "#?(.+)(-?)(EAST)", "replace": "E$1"},
        {"pattern": "#?(.+)(-?)(WEST|WST)", "replace": "W$1"},
        {"pattern": "#?(NUMBER|NO|NUM|NBR)(-?)(.+)", "replace": "$3"},
        {"pattern": "#?(\d{1})-(\d{1})", "replace": "$1/$2"},
        {"pattern": "#?(\d{2})-(\d{2})", "replace": "$1/$2"},
        {"pattern": "#?(\d{3})-(\d{3})", "replace": "$1/$2"},
        {"pattern": "#?(\d{4})-(\d{4})", "replace": "$1/$2"},
        {"pattern": "#?(\d{1})-(\d{2})", "replace": "$1/$2"},
        {"pattern": "#?ONE", "replace": "1"},
        {"pattern": "#?TWO", "replace": "2"},
        {"pattern": "#?THREE", "replace": "3"},
        {"pattern": "#?FOUR", "replace": "4"},
        {"pattern": "#?FIVE", "replace": "5"},
        {"pattern": "#?SIX", "replace": "6"},
        {"pattern": "#?SEVEN", "replace": "7"},
        {"pattern": "#?EIGHT", "replace": "8"},
        {"pattern": "#?NINE", "replace": "9"},
        {"pattern": "#?TEN", "replace": "10"},
        {"pattern": "#?ELEVEN", "replace": "11"},
        {"pattern": "#?TWELVE", "replace": "12"},
        {"pattern": "#?THIRTEEN", "replace": "13"},
        {"pattern": "#?FOURTEEN", "replace": "14"},
        {"pattern": "#?FIFTEEN", "replace": "15"},
        {"pattern": "#?([0-9]+(-?)FAMILY|[0-9]+(-?)FAM)", "replace": ""},
        {"pattern": "#?(ONE|TWO|THREE|FOUR|FIVE|SIX|SEVEN|EIGHT|NINE|TEN|ELEVEN|TWELVE|THIRTEEN|FOURTEEN|FIFTEEN)(-?)(FAMILY|FAM)(-?)(HOUSE|HOUS|HOU)", "replace": ""},
        {"pattern": "#?(MULTI-FAMILY|MULTIFAMILY|MULTIFAM|MULTI-FAM|MULTI|MF)(-?)(.*)", "replace": ""},
        {"pattern": "#?([0-9]+)(COMMERCIAL|COMM|COM)", "replace": "COM$1"},
        {"pattern": "#?(-?)(COMMERCIAL|COMM|COM)(-?)(.*)", "replace": "COM$4"},
        {"pattern": "#(.+)", "replace": "$1"}

    ];

    _specificAddressFormats = 
    [
        {"pattern": "^([0-9-]+) (AVE) ([A-Z])"}
    ];

    _miscFormats = 
    [
        {"pattern": "(SAINT)", "replace": "ST"},
        {"pattern": "(NICHOLASS|NICHOLAS)", "replace": "NICHOLAS"}
    ];




    constructor()
    {
    };


    async CleanAddress(d)
    {
        if (d === null || d === undefined || d === "")
        {
            return null;
        }

        let result = 
        {
            "address": null, 
            "cleanAddress": null,
            "unit": null,
            "cleanUnit": null
        };

        let v = d;
        v = v.toUpperCase().replace(/\s+/g, " ").trim();

        let regexNonAscii = /[^a-zA-Z0-9-\#\/\s]/g;
        v = v.replace(regexNonAscii, "");


        let regexOrdinalSuffixes = / (\d+)(ST|ND|RD|TH)/;
        v = v.replace(regexOrdinalSuffixes, " $1");

        let regexDashes = /-+/g;
        v = v.replace(regexDashes, "-");


        let validEndings = [];
        this._directionFormats.forEach((i) => { validEndings.push(i.replace); });
        this._streetSuffixFormats.forEach((i) => { validEndings.push(i.replace); });

        // Component cleaning.
        let exploded = v.replace(",", " ");
        exploded = exploded.replace(/\s+/g, " ");
        exploded = exploded.split(" ");

        for (let i = 0; i < exploded.length; i++)
        {
            for (let j = 0; j < this._directionFormats.length; j++)
            {
                let f = this._directionFormats[j];
                let regex = new RegExp("^" + f.pattern + "$");
                exploded[i] = exploded[i].replace(regex, f.replace);
            }

            for (let j = 0; j < this._streetSuffixFormats.length; j++)
            {
                let f = this._streetSuffixFormats[j];
                let regex = new RegExp("^" + f.pattern + "$");
                exploded[i] = exploded[i].replace(regex, f.replace);
            }

            for (let j = 0; j < this._ordinalFormats.length; j++)
            {
                let f = this._ordinalFormats[j];
                let regex = new RegExp("^" + f.pattern + "$");
                exploded[i] = exploded[i].replace(regex, f.replace);
            }

            for (let j = 0; j < this._miscFormats.length; j++)
            {
                let f = this._miscFormats[j];
                let regex = new RegExp("^" + f.pattern + "$");
                exploded[i] = exploded[i].replace(regex, f.replace);
            }
        }

        let reconstituted = exploded.join(" ");
        let isSpecificAddressForm = false;

        for (let i = 0; i < this._specificAddressFormats.length; i++)
        {
            let f = this._specificAddressFormats[i];
            let regex = new RegExp(f.pattern);

            if (reconstituted.match(regex) !== null)
            {
                isSpecificAddressForm = true;
                break;
            }
        }

        let lastPart = exploded.length ? exploded[exploded.length - 1] : null;
        let stlPart = exploded.length > 1 ? exploded[exploded.length - 2] : null; // second to last part

        if (lastPart && lastPart.indexOf("#") === 0)
        {
            result.unit = exploded.pop();
            result.unit = result.unit.replace("#", "");
        }

        else if (lastPart && validEndings.indexOf(lastPart) === -1 && isSpecificAddressForm === false)
        {
            if (stlPart && validEndings.indexOf(stlPart) !== -1 )
            {
                result.unit = exploded.pop();
            }
        }

        else
        {
            for (let i = 0; i < this._unitFormats.length; i++)
            {
                let f = this._unitFormats[i];
                let regex = new RegExp("^" + f.pattern + "$");
                
                if (lastPart.match(regex) !== null)
                {
                    let unit = exploded.pop();
                    //unit = unit.replace(regex, f.replace);
                    unit = unit.trim();
                    result.unit = unit;
                    break;
                }
            }
        }

        result.address = d;
        result.cleanAddress = exploded.join(" ").trim();
        result.cleanUnit = result.unit ? await this.CleanUnit(result.unit) : null;
        result.exploded = exploded;

        //console.log(result);

        return result;
    };

    async CleanUnit(d, propertyType)
    {
        if (d === null || d === undefined)
        {
            return null;
        }

        let v = d.toUpperCase().replace(/\s+/g, " ").trim();

        for (let i = 0; i < this._unitFormats.length; i++)
        {
            let f = this._unitFormats[i];
            let regex = new RegExp("^" + f.pattern + "$");
            v = v.replace(regex, f.replace);
        }

        v = v.replace(/[^a-zA-Z0-9]/g, "");

        return v;
    };
};

export { AddressParser };