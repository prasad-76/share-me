// import createSchema from "part:@sanity/base/schema-creator";

import comment from "./comment";
import pin from "./pin";
import postedBy from "./postedBy";
import save from "./save";
import user from "./user";

// import schemaTypes from "all:part:@sanity/base/schema-type"
export const schemaTypes = [user, pin, comment, postedBy, save]
