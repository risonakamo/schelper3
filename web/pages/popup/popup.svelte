<script lang="ts">
async function onTestClick(e:MouseEvent):Promise<void>
{
    e.preventDefault();
    const result:chrome.tabs.Tab[]=await chrome.tabs.query({});
    console.log(result);
}
</script>

<a href="" onclick={onTestClick}>Test</a>