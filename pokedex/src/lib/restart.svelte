<script lang="ts">
    import { lives, score } from "./store";

    function reset(){
        lives.update(lives => 3)
        score.update(score => 0)
    }

</script>

<button on:click={reset}>Restart</button>