YUI().use('event-base','node-style', 'array-extras', function (Y) {

	Y.on('domready', function () {
		//
		// Put localized strings to html
		//
		document.title = chrome.i18n.getMessage("optionsTittle") + ' '+ chrome.i18n.getMessage("appName");
		Y.one('#optionsHeader').setHTML(chrome.i18n.getMessage("optionsHeader") + ' ' + chrome.i18n.getMessage("appName"));
        Y.one('#optionsDNHeader').setHTML(chrome.i18n.getMessage("optionsDNHeader"));
        Y.one('#optionsDNText').setHTML(chrome.i18n.getMessage("optionsDNText"));
        Y.one('#optionsDNYes').setHTML(chrome.i18n.getMessage("optionsDNYes"));
        Y.one('#optionsDNNo').setHTML(chrome.i18n.getMessage("optionsDNNo"));
        
		//
		// Notifications
		//	
		Y.all('input[name="base_notifier_desktop_notifications"]')
			.each(function (el) {
				if (Y.Lang.isValue(localStorage.base_notifier_desktop_notifications)) {
					if (localStorage.base_notifier_desktop_notifications === el.get('value')) {
						el.set('checked', true);
					} else {
						el.set('checked', false);
					}
				}
				el.on('click', function (e) {
					localStorage.base_notifier_desktop_notifications = e.target.get('value');
				});
			});

	});
});