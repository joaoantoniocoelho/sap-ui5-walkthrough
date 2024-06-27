sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller, MessageToast) => {
    return Controller.extend("ui5.walkthrough.controller.App", {
        onShowHello() {
            
            MessageToast.show('Hello Controller!')
        }
    })
})