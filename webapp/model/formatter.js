sap.ui.define([
 
    "sap/m/library",
 
    "sap/ui/model/type/Currency"
 
], function (mobileLibrary, Currency) {
 
    "use strict";
 
    return {
 
        /**
 
         * Formatter method for generating mailto Href links
 
         * @param {string} sEid - Employee ID
 
         * @param {object} oBundle - Resource bundle from i18n model
 
         * @returns {string} Mailto link
 
         */
 
        formatMail: function (sEid, oBundle) {
 
            return mobileLibrary.URLHelper.normalizeEmail(
 
                sEid + oBundle.getText("domain"),
 
                oBundle.getText("mailSubject", [sEid]),
 
                oBundle.getText("mailBody")
 
            );
 
        },
 
        /**
 
         * Formatter method for formatting stock value using Currency type
 
         * @param {float} fUnitPrice - Unit price of product
 
         * @param {int} iStockLevel - Stock level (quantity)
 
         * @param {string} sCurrCode - Currency code (e.g., USD, EUR)
 
         * @returns {string} Formatted currency value
 
         */
 
        formatStockValue: function (fUnitPrice, iStockLevel, sCurrCode) {
 
            var oCurrency = new Currency();
 
            return oCurrency.formatValue([fUnitPrice * iStockLevel, sCurrCode], "string");
 
        }
 
    };
 
});