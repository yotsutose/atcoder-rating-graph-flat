// ==UserScript==
// @name         atcoder-rating-flat
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://atcoder.jp/users/yotsutose*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    let rating_history_length = rating_history.length;
    let endtime_diff = rating_history[rating_history_length-1].EndTime - rating_history[0].EndTime;
    let endtime_delta = endtime_diff / (rating_history_length-1);
    for(var i = 1; i < rating_history_length; i++){
        rating_history[i].EndTime = rating_history[i-1].EndTime + endtime_delta;
    }
})();

