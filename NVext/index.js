window.onload = function () {
    var startTime = Date.now() - (90 * 24 * 60 * 60 * 1000);
    var searchQueries = [];
    var counter = 0;
    chrome.history.search({
        text: '',
        startTime: startTime,
        maxResults: 0
    }, function (historyItems) {
        for (var i = 0; i < historyItems.length; i++) {
            if (historyItems[i].url.indexOf("q=") > -1 && counter < 2000) {
                var url = historyItems[i].url;
                var queryString = url.substring(url.indexOf("q=") + 2);
                var searchQuery = queryString.split("&")[0];
                searchQueries.push(searchQuery.split("+").join(" "));
                counter++;
            }
        }
    });
    console.log(searchQueries);

    $.ajax({
        url:"/test",
        type:"POST",
        contentType: "application/json",
        data: JSON.stringify(JSON.stringify(searchQueries))});


}