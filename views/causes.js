
MyApp.causes = function() {

	var viewModel = {
        dataSource: new DevExpress.data.DataSource({
            load: function(loadOptions) {
                return $.getJSON('http://chimeapp.herokuapp.com/causes');
            },
            map: function(item) {
                return {
                    title: item.title
                };
            }
        })
    };
    return viewModel;
};

var overlayVisible = ko.observable(false);
var showOverlay = function () {
    overlayVisible(true);
};
var hideOverlay = function () {
    overlayVisible(false);
};

