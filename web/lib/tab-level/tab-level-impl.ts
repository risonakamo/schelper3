// contains implementations of tab level funcs

import {oneTabWithUrl} from "@/lib/tab-level/tab-level-lib";

/** if url contains this text, it is a exh image page (displays 1 image) */
export const ExhImagePageUrl:string="exhentai.org/s";

/** on all tabs, if it is an exh image tab, run exh open full size
 *  page script */
export async function exhOpenLargeImagesAll():Promise<void>
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

        if (!tab.url)
        {
            continue;
        }

        if (!tab.url.includes(ExhImagePageUrl))
        {
            continue;
        }

        await chrome.scripting.executeScript({
            target:{tabId:tab.id},
            func:()=>{
                window.localStorage.setItem("args",JSON.stringify({
                    runScript:"open-exh-full-size",
                } satisfies CsArgs));
            },
        });

        chrome.scripting.executeScript({
            target:{tabId:tab.id},
            files:["build-cs/schelper.iife.js"],
        });
    }
}

/** returns true if there is 1 exh tab existing in the current window */
export function oneExhTab():Promise<boolean>
{
    return oneTabWithUrl(ExhImagePageUrl);
}