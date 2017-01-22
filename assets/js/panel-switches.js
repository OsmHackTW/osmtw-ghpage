function activate(panel) {
    var allPanels = ['tab-main', 'tab-event', 'tab-contact'];
    for (var k = 0; k < allPanels.length; k++) document.getElementById(allPanels[k]).classList.remove('is-active');
    document.getElementById(panel).classList.add('is-active');
}