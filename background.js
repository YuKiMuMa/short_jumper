chrome.action.onClicked.addListener((tab) => {
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, tabs => {
        let inde = tabs[0].index;
        let nid =tabs[0].id;
        console.log(inde);

        const nurl = tabs[0].url

        const matchResult = nurl.match(/shorts\/(.+)/);
        console.log(matchResult);

        if (matchResult && matchResult.length === 2) {
            const extractedString = matchResult[1];
            console.log(extractedString);
            //chrome.tabs.create({url: "https://www.youtube.com/watch?v="+extractedString,index: inde+1 });
            chrome.tabs.update(nid, {url: "https://www.youtube.com/watch?v="+extractedString});
        } else {
            console.log("not found");
        }

    })
});