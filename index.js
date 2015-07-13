'use strict';

var Joi = require('joi');

module.exports = (function() {
  return {
    defaultRegex: Joi.string().regex(/[^\\]/).replace('"', '\\"'), // TODO: make replace easily chainable, so escapes get escaped, too
    passwordRegex: Joi.string().regex(/^[^\\"]+$/).required(),
    slugRegex: Joi.string().regex(/^[a-z0-9-]+$/i),
    searchRegex: Joi.string().regex(/[^\\]/).replace('"', '\\"'),
    skuRegex: Joi.string().regex(/^[\w|-]+$/),
    titleRegex: Joi.string().regex(/[^\\]/).replace('"', '\\"'),
    messageRegex: Joi.string().regex(/[^\\]/).replace('"', '\\"'),
    mediaUrlRegex: Joi.string().uri({ scheme: ['http', 'https'] }),
    statesRegex: Joi.string().regex(/(^AL$)|(^AK$)|(^AZ$)|(^AR$)|(^CA$)|(^CO$)|(^CT$)|(^DE$)|(^FL$)|(^GA$)|(^HI$)|(^ID$)|(^IL$)|(^IN$)|(^IA$)|(^KS$)|(^KY$)|(^LA$)|(^ME$)|(^MD$)|(^MA$)|(^MI$)|(^MN$)|(^MS$)|(^MO$)|(^MT$)|(^NE$)|(^NV$)|(^NH$)|(^NJ$)|(^NM$)|(^NY$)|(^NC$)|(^ND$)|(^OH$)|(^OK$)|(^OR$)|(^PA$)|(^RI$)|(^SC$)|(^SD$)|(^TN$)|(^TX$)|(^UT$)|(^VT$)|(^VA$)|(^WA$)|(^WV$)|(^WI$)|(^WY$)/i),
    hexColorRegex: Joi.string().regex(/^[a-f0-9]{6}$/),
    email: Joi.string().email()
  };
})();
