<script lang="ts">
	import { DefaultChallenge, type ChallengeI } from '@/types';
	import MainContainer from '@/components/generics/MainContainer.svelte';
	import IoLogoGithub from 'svelte-icons/io/IoLogoGithub.svelte';
	import IoIosMenu from 'svelte-icons/io/IoIosMenu.svelte';
	export let challenge: ChallengeI = DefaultChallenge;

	export let openNavbar = (val: boolean) => {};
	export let isSidebarOpen = false;
</script>

<MainContainer className="relative border-b border-brand-light-purple">
	<div class="flex justify-between items-center bg-brand-dark text-white py-6">
		<div class="flex space-x-8">
			<a href={`/`}>
				<div class="flex space-x-2 items-center">
					<img
						src={'/advent-logo.png'}
						alt="Logo de Advent of Juniors - Resuelve problemas de programación"
						class="w-6 h-6"
					/>
					<p class="text-xs text-brand-green">Advent of Juniors</p>
				</div>
			</a>
			<div class="hidden xl:flex space-x-2 items-center ">
				<h3 class="text-xl">{challenge.name}</h3>
				<p class="text-xs px-2 py-1 bg-brand-green text-brand-dark-purple rounded">
					Dificultad: {challenge.difficulty}
				</p>
			</div>
		</div>
		<div class="flex items-center space-x-2">
			<a
				href="https://github.com/los-junior/advent-of-juniors"
				target="_blank"
				rel="noopener noreferrer"
			>
				<button class="flex space-x-2 items-center bg-brand-light-purple px-4 py-2 rounded">
					<span>Contribuye</span>
					<span class="w-5"><IoLogoGithub /></span>
				</button>
			</a>
			<div
				on:keydown
				on:click={(e) => {
					openNavbar(!isSidebarOpen);
				}}
				class="block lg:hidden w-8 p-1"
			>
				<IoIosMenu />
			</div>
		</div>
	</div>
</MainContainer>
