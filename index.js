import { AddressParser } from "./lib/address-parser/index.js";
import { default as Building } from "./lib/model/building/index.js";
import { default as BuildingMapper } from "./lib/mapper/building/index.js";
import { default as Property } from "./lib/model/property/index.js";
import { default as PropertyMapper } from "./lib/mapper/property/index.js";

export default {

    // Parsers.
    AddressParser,

    // Models.
    Building,
    Property,

    // Mappers.
    BuildingMapper,
    PropertyMapper
};