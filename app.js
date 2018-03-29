Ext.application({
  name: "MyApp",
  requires: ["Ext.grid.GridPanel"],
  launch: function() {
    var store = Ext.create("Ext.data.Store", {
      fields: ["name", "email", "phone"],
      data: [
        { name: "Lisa", email: "lisa@simpsons.com", phone: "555-111-1224" },
        { name: "Bart", email: "bart@simpsons.com", phone: "555-222-1234" },
        { name: "Homer", email: "home@simpsons.com", phone: "555-222-1244" },
        { name: "Marge", email: "marge@simpsons.com", phone: "555-222-1254" }
      ]
    });
    Ext.create("Ext.grid.GridPanel", {
      title: "Simpsons",
      store: store,
      height: 300,
      width: "100%",
      columns: [
        { text: "Name", dataIndex: "name", width: 200 },
        { text: "Email", dataIndex: "email", width: 250 },
        { text: "Phone", dataIndex: "phone", width: 120 }
      ],
      renderTo: Ext.get('grid')
    });
  }
});
