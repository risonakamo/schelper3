// lib implementing tab level function collection

import _ from "lodash";

const TabLevelFuncs:TabLevelFunc[]=[
    {
        category:"EXH",
        displayText:"Open All Images",

        shouldExecute:oneTabWithUrl("exhentai.org/s"),
        actionFunc:exhOpenLargeImagesAll,
    }
];

/** returns true if there is 1 tab in the window with a certain
 *  url pattern. curried function to work with shouldExecute */
function oneTabWithUrl(url:string)
{
    async function inner():Promise<boolean>
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

    return inner;
}

/** on all tabs, if it is an exh image tab, run exh open full size
 *  page script */
async function exhOpenLargeImagesAll():Promise<void>
{
    const tabs:chrome.tabs.Tab[]=await chrome.tabs.query({
        currentWindow:true,
    });

    for (var tab of tabs)
    {
        if (!tab.id)
        {
            console.error("tab had no id",tab);
            continue;
        }

        chrome.scripting.executeScript({
            target:{tabId:tab.id},
            func()
            {
                console.log("hello from CS");
            },
        });
    }
}