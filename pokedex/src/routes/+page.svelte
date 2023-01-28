<script lang="ts">
	import GuessingWindow from "../lib/guessing_window.svelte";
	import Restart from "../lib/restart.svelte";
	import { lives, score } from "../lib/store";

</script>

<body>

{#if $lives > 0}
<div class="player-details">
<h1>Lives: {$lives}</h1>
<h1>Score: {$score}</h1>
</div>
<GuessingWindow/>

{:else}
<h1>You Lose! <br> Your Score {$score}</h1>
<Restart/>
{/if}


</body>

<style>
	body{
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		font-family: Arial, Helvetica, sans-serif;
		text-align: center;
		height: 95vh;
		width: 95vw;
	}


	.player-details{
		display: flex;
		justify-content: space-between;
		width: 40vw;
	}

	
</style>