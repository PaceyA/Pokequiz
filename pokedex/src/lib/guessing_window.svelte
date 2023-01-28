<script lang="ts">
	import { each, onMount } from "svelte/internal";
	import type { Pokemon } from "../models/pokemon.model";
    import { lives, score } from "./store";
	//export let data:PageData;

	let pokemon : Pokemon = {
		name:"",
		id:0,
		sprite:""
	};
		
	let guess : string = "";
	let show_name : boolean = false;

	function makeGuess(){
        if (guess.toLowerCase() === pokemon.name){
            score.update(score => score + 1),
            show_name = false;
            getPokemon()
        }else{
            lives.update(lives => lives - 1);
        }

        guess = ""
	}

	function giveUp(){
		show_name = !show_name;
	}

	const getPokemon = async () => {
		let i = await Math.floor(Math.random() * 500) + 1;
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const data  = await res.json();
        
            pokemon.name = data.name,
            pokemon.id = data.id,
            pokemon.sprite = data.sprites.front_default
           
        }

		onMount(getPokemon);

</script>

<div class="page-container">
    <div class="poke-container">
        <div class="attributes">
{#if show_name}
	<h2>{pokemon.name.charAt(0).toUpperCase()+ pokemon.name.slice(1)}</h2>
{:else}
	<h2>????</h2>
{/if}
<h2>ID: {pokemon.id}</h2>
</div>
<img src="{pokemon.sprite}"alt="Pokemon Image">

<div class="input-field">
<input type="text" bind:value={guess} style="width: 100%;"><button on:click={makeGuess}>Guess</button>
</div>

<div class="buttons">
<button on:click={giveUp}>Show</button>
<button on:click={getPokemon}>Next</button>
</div></div></div>

<style>
    img{
        width: 10vw;
    }

    .page-container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;        
    }

    .poke-container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 1px solid black;
        border-radius: 20px;
        width:40vw;
        padding: 2vw;
    }

    .input-field{
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    
    .buttons{
        margin-top: 3vh;
        display: flex;
        justify-content: space-evenly;
        width: 100%;
    }

    .attributes{
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
</style>
