import { writable } from 'svelte/store';

export const lives = writable(3);
export const score = writable(0);