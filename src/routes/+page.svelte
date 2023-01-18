<script lang="ts">
	import MainContainer from '../components/generics/MainContainer.svelte';
	import Navbar from '../components/home/Navbar.svelte';
	import '@fontsource/space-grotesk';
	import { challengesObject } from '../data/challenges';
	import clsx from 'clsx';
	import { features } from '../data/features';
	const challenges = Object.values(challengesObject);
</script>

<div class="relative mainContainer">
	<MainContainer>
		<Navbar />
		<div class="bg-brand-dark text-white flex py-6">
			<div class="flex-1 space-y-6 pt-20 pb-40 z-10">
				<h1 class="w-1/3 text-5xl font-extrabold">Conquista la luna con Javascript! 🌔</h1>
				<p class="text-xl">
					Eleva tus skills de programación con Javascript, resolviendo divertidos problemas.
				</p>
			</div>
		</div>
	</MainContainer>
</div>
<div class="bg-brand-dark text-white py-20">
	<div class="flex flex-col items-center space-y-6">
		<h1 class="text-5xl">Un proyecto auspiciado por</h1>
		<a class="w-1/5" href="https://losjunior.co" target="_blank" rel="noreferrer noopener">
			<img src="/lj-logo.png" alt="" />
		</a>
	</div>
</div>

<MainContainer>
	<div class="mainContainer py-20">
		<h1 class="text-5xl text-white">Por qué?</h1>
		<div class="grid grid-cols-4 text-white gap-20 py-10">
			{#each features as feature}
				<div class="p-5 h-64 text-center flex flex-col items-center justify-between">
					<p class="text-xs">{feature.title}</p>
					<img class="w-20" src={feature.image} alt="" />
					<p class="text-[11px]">{feature.description}</p>
				</div>
			{/each}
		</div>
	</div>

	<h1 class="text-5xl text-white">Problemas a resolver</h1>
	<div class="grid grid-cols-4 gap-10 py-20">
		{#each challenges as challenge (challenge.id)}
			<a href={`/retos/${challenge.id}`}>
				<div
					class="h-96 bg-brand-dark-purple border border-brand-light-purple rounded p-4 text-white flex flex-col justify-between items-center"
				>
					<p class="text-center text-purple-300">
						{challenge.name}
					</p>
					<img src={challenge.image} class="w-2/3" alt="" />
					<p
						class={clsx(
							'px-2 py-1 rounded text-black',
							challenge.difficulty === 'Fácil' && 'bg-emerald-400',
							challenge.difficulty === 'Medio' && 'bg-orange-500',
							challenge.difficulty === 'Difícil' && 'bg-red-500'
						)}
					>
						{challenge.difficulty}
					</p>
				</div>
			</a>
		{/each}
	</div>
</MainContainer>

<style>
	.mainContainer {
		font-family: 'Space Grotesk';
	}
</style>
