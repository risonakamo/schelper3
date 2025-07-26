<script lang="ts">
import {onMount} from "svelte";
import {getAllRunnableTabFuncs} from "@/lib/tab-level/tab-level-funcs";

var runnableFuncs:TabLevelFunc[]=$state([]);

// on load, get the runnable funcs
onMount(()=>{
    (async ()=>{
        runnableFuncs=await getAllRunnableTabFuncs();
    })();
});

/** clicked on run func link. execute the run func */
function onRunfuncLinkClick(runFunc:TabLevelFunc)
{
    return (e:MouseEvent)=>{
        e.preventDefault();
        runFunc.actionFunc();
    };
}
</script>

<style lang="sass">
    @use "./popup.sass"
</style>

{#each runnableFuncs as runFunc (runFunc.name)}
    <p><a href="" onclick={onRunfuncLinkClick(runFunc)}>
        {runFunc.displayText}
    </a></p>
{:else}
    <p>no executable items</p>
{/each}