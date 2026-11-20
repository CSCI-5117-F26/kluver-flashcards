<script lang="ts">
    const {data} = $props()
    const {decks} = data;
    console.log(decks)
</script>

{#if decks.length == 0}
    <div>ohno it's empty</div>
{:else}
<ul>
    {#each decks as deck }
    <li><a href="/decks/{deck._id['$oid']}">{deck.name}</a></li>        
    {/each}
</ul>

{/if}