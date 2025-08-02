// contains implementations of tab level funcs

import {oneTabWithUrl, runScriptOnAllTabs} from "@/lib/tab-level/tab-level-lib";

/** exh image page (displays 1 image) */
export const ExhImagePageUrls:string[]=["exhentai.org/s"];

/** sc image page (displays 1 image) */
export const ScImagePageUrls:string[]=[
    "chan.sankakucomplex.com/en/posts",
    "chan.sankakucomplex.com/posts",
]

/** on all tabs, if it is an exh image tab, run exh open full size
 *  page script */
export async function exhOpenLargeImagesAll():Promise<void>
{
    return runScriptOnAllTabs(
        "open-exh-full-size",
        ExhImagePageUrls,
    );
}

/** returns true if there is 1 exh tab existing in the current window */
export function oneExhTab():Promise<boolean>
{
    return oneTabWithUrl(ExhImagePageUrls);
}

/** on all sc tabs, run sc open */
export async function downloadScAll():Promise<void>
{
    return runScriptOnAllTabs(
        "open-sc-full-size",
        ScImagePageUrls,
    );
}

/** finds 1 sc image tab */
export function oneScImageTab():Promise<boolean>
{
    return oneTabWithUrl(ScImagePageUrls);
}