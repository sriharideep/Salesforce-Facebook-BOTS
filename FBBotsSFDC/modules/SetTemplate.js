"use strict";
var bodyParser = require('body-parser');
var formatContact = function(contacts)
{
	/*var elements = [];
	console.log(contacts.get("Title"));
	contacts.forEach(function(contact){
		elements.push({
			title: contact.get("Name"),
            subtitle: contact.get("Title") + " at " + contact.get("Account").Name + " · " + contact.get("MobilePhone") + "FacebookID: " + contact.get("FacebookId__c"),
            "buttons":[{
            	"type":"postback",
            	"title":"View Notes",
            	"payload": "view_notes," + contact.getId() + "," + contact.get("Name")
            	
            }]
		});
	});
	return{
		"attachment": {
			"type": "template",
			"payload": {
				"template_type": "genric",
				"elements": elements
			}
		}
	};*/
	console.log("REACHED ST");
	var responsetext = "Hello";
	console.log(contacts[0]);
	var sName = contacts[0].get("ContactId__r").Name;
	//console.log("NAME");
	//console.log(sName);
	var sMobilePhone = contacts[0].get("ContactId__r").MobilePhone;
	var OpptyName = contacts[0].get("Name");
	var OpptyAmount = contacts[0].get("Amount");
	
	responsetext = "Hello '"+ sName +"', Your Phone Number in our database is'"+ sMobilePhone +"' , Thanks for reaching us !,\r\n  Opprotunity Assinged You and details are: \r\n Oppotunity Name:'"+ OpptyName +"'\r\n Oppotunity Amount:'"+ OpptyAmount +"'";
	console.log(responsetext);

	return responsetext;
};
exports.formatContact = formatContact; 