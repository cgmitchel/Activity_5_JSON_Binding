sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
    "sapips/training/jsonbinding/model/formatter"
], (Controller, JSONModel, ResourceModel, formatter) => {
    "use strict";
 
    return Controller.extend("sapipstraining.jsonbinding.controller.jsonbinding", {
        onInit() {
            var oData = {
                Eid: "mitchel.gaabucayan",
                Enabled: true,
                Address: {
                  Street: "Iponan",
                  City: "Cagayan de oro",
                  Zip: "9000",
                  Country: "Philippines"
                },
                SalesAmount: 30000,
                CurrencyCode: "PHP"
            };
 
            let oModel = new JSONModel();
            oModel.setData(oData);
            this.getView().setModel(oModel, "myModel");
 
            // set i18n model on view
            const i18nModel = new ResourceModel({
                bundleName: "sapipstraining.jsonbinding.i18n.i18n"
            });
            this.getView().setModel(i18nModel, "i18n");      
            this.oBundle = this.getView().getModel("i18n").getResourceBundle();    
        },
 
        onListItemPress(oEvent) {
            var oSelectedItem = oEvent.getSource();
            var oContext = oSelectedItem.getBindingContext("ProductModel");
            var oData = oContext.getObject();
 
            console.log(oData);
 
            this.byId("ProductID").setValue(oData.ProductID);
            this.byId("ProductName").setValue(oData.ProductName);
            this.byId("QuantityPerUnit").setValue(oData.QuantityPerUnit);
            this.byId("UnitPrice").setValue(oData.UnitPrice);
            this.byId("UnitsInStock").setValue(oData.UnitInStock);
            this.byId("Discontinued").setValue(oData.Discontinued);            
        },
 
        onSendEmail: function () {
            var sEmployeeId = this.getView().getModel("myModel").getProperty("/Eid");
            var sMailLink = formatter.formatMail(sEmployeeId, this.oBundle);
 
            // Open the email client with generated mailto link
            window.location.href = sMailLink;
        }
    });
});