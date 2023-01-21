window.onload = function () {
    var startTime = Date.now() - (90 * 24 * 60 * 60 * 1000);
    var searchQueries = [];
    chrome.history.search({
        text: '',
        startTime: startTime,
        maxResults: 0
    }, function (historyItems) {
        for (var i = 0; i < historyItems.length; i++) {
            if (historyItems[i].url.indexOf("q=") > -1) {
                var url = historyItems[i].url;
                var queryString = url.substring(url.indexOf("q=") + 2);
                var searchQuery = queryString.split("&")[0];
                searchQueries.push(searchQuery.split("+").join(" "));
            }
        }
    });
    console.log(searchQueries);
    // var jsonSearchQueries = JSON.stringify(searchQueries);
    // fetch("python file path, undetermined for now", {
    //     method: "POST",
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: jsonSearchQueries
    // })
}