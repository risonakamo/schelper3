<script lang="ts">
import {onMount} from "svelte";
import {getAllRunnableTabFuncs} from "@/lib/tab-level-funcs";

onMount(()=>{
    (async ()=>{
        console.log(await getAllRunnableTabFuncs());
    })();
});

async function onTestClick(e:MouseEvent):Promise<void>
{
    e.preventDefault();
    const result:chrome.tabs.Tab[]=await chrome.tabs.query({});
    console.log(result);
}
</script>

<a href="" onclick={onTestClick}>Test</a>