// helper lib for tab level funcs

import _ from "lodash";

/** returns true if there is 1 tab in the window with a certain
 *  url pattern. curried function to work with shouldExecute */
export async function oneTabWithUrl(url:string):Promise<boolean>
{
    const tabs:chrome.tabs.Tab[]=await chrome.tabs.query({
        currentWindow:true,
    });

    return _.some(tabs,(tab:chrome.tabs.Tab):boolean=>{
        if (!tab.url)
        {
            console.warn("tab had no url",tab);
            return false;
        }

        return tab.url.includes(url);
    });
}