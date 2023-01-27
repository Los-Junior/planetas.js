<script lang="ts">
	import MainContainer from '@/components/generics/MainContainer.svelte';
	import Navbar from '@/components/generics/Navbar.svelte';
	import clsx from 'clsx';
	import { features } from '@/data/features';
	import { getHomeChallenges } from '@/services/client/challenges';

	const challenges = getHomeChallenges();
</script>

<div class="relative">
	<MainContainer>
		<Navbar />
		<div class="bg-brand-dark text-white flex py-6">
			<div class="flex-1 space-y-6 pt-20 pb-40 z-10">
				<h1 class="w-2/3 text-5xl font-extrabold leading-tight">
					Conquista la galaxia con Javascript! 🚀🌔
				</h1>
				<p class="text-xl">Eleva tus skills de programación resolviendo divertidos problemas.</p>
				<div class="flex space-x-4">
					<a href={`#retos`} class="text-sm hover:underline">Retos</a>
					<a href={`/retos/nuevo`} class="text-sm hover:underline">Crear retos</a>
				</div>
			</div>
		</div>
	</MainContainer>
</div>
<div class="bg-brand-dark px-4 text-white lg:py-20">
	<div class="flex flex-col items-center space-y-6">
		<div class="hidden md:flex text-emerald-300 lg:text-sm space-x-2 items-center">
			<p>Trabajas con Next.js? Administra las rutas de API con</p>
			<a href="https://github.com/lifespikes/apext" target="_blank" rel="noopener noreferrer">
				<button
					class="py-0.5 px-2 bg-brand-dark-purple text-white rounded border border-brand-light-purple"
					>APEXT</button
				>
			</a>
		</div>
		<h1 class="md:text-2xl lg:text-5xl">Un proyecto auspiciado por</h1>
		<a class="w-3/5 lg:w-1/5" href="https://losjunior.co" target="_blank" rel="noreferrer noopener">
			<img src="/lj-logo.png" alt="" />
		</a>
	</div>
</div>

<MainContainer>
	<div class="mainContainer py-20">
		<h1 class="text-5xl text-white">Por qué?</h1>
		<div class="grid md:grid-cols-2 lg:grid-cols-4 text-white gap-20 py-10">
			{#each features as feature}
				<div
					class="p-5 h-64 border border-brand-light-purple rounded text-center flex flex-col items-center justify-between"
				>
					<p class="text-base lg:text-xs xl:">{feature.title}</p>
					<img class="w-20" src={feature.image} alt="" />
					<p class="text-sm lg:text-[11px]">{feature.description}</p>
				</div>
			{/each}
		</div>
	</div>

	<h1 id="retos" class="text-5xl text-white">Problemas a resolver</h1>
	<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-10 py-20">
		{#await challenges}
			<p>Cargando Retos!</p>
		{:then challenges}
			{#each challenges as challenge (challenge._id)}
				<a href={`/retos/${challenge._id}`}>
					<div
						class="h-96 bg-brand-dark-purple border border-brand-light-purple rounded p-4 text-white flex flex-col justify-between items-center"
					>
						<p class="text-center text-purple-300">
							{challenge.name}
						</p>
						<img src={challenge.image} class=" w-1/3 lg:w-2/3" alt="" />
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
		{/await}
	</div>
</MainContainer>
