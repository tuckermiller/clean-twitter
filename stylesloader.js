chrome.storage.sync.get('currentProfile', (options) => {
    var style = document.createElement('style');
    var styleInnerHtml = "";
    if (options.currentProfile.sidebarCommon === false) {
        styleInnerHtml += ".SidebarCommonModules {display: none !important}";
    }

    if (options.currentProfile.profileCanopy === false) {
        styleInnerHtml += ".ProfileCanopy {display: none !important}";
    }

    if (options.currentProfile.profileSidebar === false) {
        styleInnerHtml += ".ProfileSidebar {display: none !important}";
    }

    if (options.currentProfile.trends === false) {
        styleInnerHtml += ".Trends {display: none !important}";
    }

    if (options.currentProfile.wtf === false) {
        styleInnerHtml += ".wtf-module {display: none !important}";
    }

    if (options.currentProfile.linkSummary === false) {
        styleInnerHtml += ".js-media-container {display: none !important}";
    }
    
    style.innerHTML = styleInnerHtml;
    (document.head||document.documentElement).appendChild(style);
});