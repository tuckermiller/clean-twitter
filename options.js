// Saves options to chrome.storage
function saveOptions() {
    var options = {};
    options["sidebarCommon"] = document.getElementById('sidebar-common').checked;
    options["wtf"] = document.getElementById('wtf').checked;
    options["trends"] = document.getElementById('trends').checked;
    options["profileCanopy"] = document.getElementById('profile-canopy').checked;
    options["profileSidebar"] = document.getElementById('profile-sidebar').checked;
    options["profileAvatar"] = document.getElementById('profile-avatar').checked;
    options["tweetAvatar"] = document.getElementById('tweet-avatar').checked;
    options["wtfStream"] = document.getElementById('wtf-stream').checked;
    options["linkSummary"] = document.getElementById('link-summary').checked;
    chrome.storage.sync.set({
        currentProfile: options
    }, function() {
        console.log("Saved options");
    });
}

document.getElementById('save').addEventListener('click',
    saveOptions);