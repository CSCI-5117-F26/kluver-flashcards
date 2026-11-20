<script lang="ts">
    const {data} = $props()
    const {deck} = data;
    console.log(deck)

    let front = $state("")
    let back = $state("")
    async function save_card() {

    }
    async function save_name_change() {
        
    }
</script>

<input bind:value={deck.name} oninput={save_name_change}>
<h1>  
    {deck.name}</h1>
{#if deck.cards.length > 0}
<table>
  <thead>
    <tr><th>front</th><th>back</th></tr>
    </thead>
    <tbody>
  {#each deck.cards as card }
  <tr><td>{card.front}</td><td>{card.back}</td></tr>
  {/each}
  </tbody>
</table>
{:else }
no cards
{/if}
<h2>add a card:</h2>
<input placeholder="front" bind:value={front}>
<input placeholder="back" bind:value={back}>
<button onclick={save_card}>add</button>
