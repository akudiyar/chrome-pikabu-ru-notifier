//
// Export
//
var AppNotifier;

YUI().use('base-notifier', function (Y) {

	/**
	 * @constructor
	 */ 
	AppNotifier = function () {
		arguments.callee.superclass.constructor.apply(this, arguments);
	};

	AppNotifier.NAME = "AppNotifier";

	//
	// Attributes
	//
	AppNotifier.ATTRS = {
		
		/**
		 * The title of the extentsion
		 */ 
		title : {
			value : chrome.i18n.getMessage("appName")
		},
	
		/**
		 * The URL of the app
		 */ 
		url : {
			value : {
				base :    'http://pikabu.ru',
                messages: 'http://pikabu.ru/freshitems.php',
				login :   'http://pikabu.ru'
			}
		},
		
		/**
		 * Known domains for the app. Domains here must also be listed under
		 * permissions in your manifest.json.
		 */ 
		domains : {
			value : [
				'pikabu.ru'
			]
		},

		/**
		 * Text to display to the user
		 */
		text : {
			value : {
				success :           chrome.i18n.getMessage("success"),
				notLoggedIn :       chrome.i18n.getMessage("notLoggedIn"),
				notificationTitle : chrome.i18n.getMessage("notificationTitle")
			}
		},

		/**
		 * The background color of the icon text while the user is logged in to the app
		 */ 
		loggedInColor : {
			value : [0,43,150,255]
		}


	};

	Y.extend(AppNotifier, BaseNotifier, {

		/**
		 * Override this function with your own code to get the number of
		 * items from the url specified under ATTRS.
		 * @param {HTMLElement} node (YUI) DOM node representation of the page 
		 * contents of ATTRS.url.
		 * @returns Integer or null
		 */ 
		getNumberFromNode : function (node) {
			var persNode, msgCount;
			if (node && (persNode = node.one('.personals'))) {            
				if (msgCount = persNode.one('b')) {
					return parseInt(msgCount.get('text'), 10);
				}
                else{
                    return 0;
                }
			}
			return null;
		}
	});
});

