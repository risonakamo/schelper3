/** high level generic function container for custom script */
interface TabLevelFunc
{
    // what category to place into ui
    category:string
    // clickable link text to run this tab level func
    displayText:string

    // function that decides if this tab level function should execute
    shouldExecute():boolean

    // the tab level function logic itself
    actionFunc():void
}