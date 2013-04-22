Ext.namespace('Foobar');
Ext.setup({
    config: {
        layout: {
            type: 'fit'
        }
    },
	onReady: function() {
        /*Ext.application({
            name: 'app',
            launch: function() { },
            data: {}
        });     */
        Foobar.data = [];
		var formPanel = new Ext.form.FormPanel({
			fullscreen : true,
            config: {
                layout: {
                    type: 'fit'
                }
            },
            items: [
				{
					xtype : "fieldset",
					title : "Patient Facing Module",
					items : [
                        {
                            xtype: "textfield",
                            name: "Medicine",
                            label: "Medicine Name",
                            placeHolder: "Enter your medicine name"
                        },
                        {
							xtype: "calendarpickerfield",
                            name: "Start Date",
							label: "Choose Date",
							dateFormat: 'm-d-Y',
							value: new Date()
						}
					]
				} ,
                {
                    xtype: 'toolbar',
                    docked: 'bottom',
                    layout: { pack: 'center' },
                    items: [
                        {
                            xtype: 'button',
                            text: 'Enter Medicine',
                            handler: function() {
                                formPanel.setValues({
                                    //date: new Date(1989,11,19),
                                  //  medicine: "aspirin"
                                })
                                //console.log("Start date" + formPanel.getValues()["Start Date"].getDay());
                                Foobar.data.push(formPanel.getValues()["Start Date"]);
                                //Foobar.data[formPanel.getValues()["Medicine"]] = formPanel.getValues()["Number of time"]
                                Ext.Msg.alert('Data added ',JSON.stringify(formPanel.getValues(), null, 4));
                            }
                        },
                        /*{
                            xtype: 'button',
                            text: 'Get Data',
                            handler: function() {
                                new Ext.form.ux.touch.CalendarPickerField;
                            }
                        },   */
                        {
                            xtype: 'button',
                            text: 'Clear',
                            handler: function() {
                                formPanel.reset();
                            }
                        }
                    ]
                }
            ]
        });
    }
});

