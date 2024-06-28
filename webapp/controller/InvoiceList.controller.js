sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/formatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
  ],
  (Controller, JSONModel, formatter, Filter, FilterOperator) => {
    "use strict";

    return Controller.extend("ui5.walkthrough.controller.InvoiceList", {
      formatter: formatter,

      onInit() {
        const oViewModel = new JSONModel({
          currency: "EUR",
        });
        this.getView().setModel(oViewModel, "view");
      },

	  onFilterInvoices(oEvent) {
		// build filter
		const aFilter = []
		const sQuery = oEvent.getParameter("query")

		if (sQuery) {
			aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery))
		}

		// get the list
		const oList = this.byId("invoiceList")

		// get list items
		const oBinding = oList.getBinding("items");

		// apply filter
		oBinding.filter(aFilter)
	  }
    });
  }
);
