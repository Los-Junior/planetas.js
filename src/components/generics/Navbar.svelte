<script>
	import UserSettings from './UserSettings.svelte';
	import FaDiscord from 'svelte-icons/fa/FaDiscord.svelte';
	import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
	import MobileNav from './MobileNav.svelte';

	let isMobileNavOpen = false;
</script>

<div class="flex justify-between items-center text-white h-[10vh]">
	<div class="flex space-x-8 z-10">
		<a href={`/`}>
			<div class="flex space-x-2 items-center">
				<img
					src={'/advent-logo.png'}
					alt="Logo de Advent of Juniors - Resuelve problemas de programación"
					class="w-6 h-6"
				/>
				<p class="text-xs">Planetas.js</p>
			</div>
		</a>
	</div>

	<div class="flex space-x-6">
		<div class="hidden md:flex space-x-6 items-center">
			<a class="text-lg text-zinc-300 hover:text-zinc-200" href={`/retos`}>Retos</a>
			<a class="text-lg text-zinc-300 hover:text-zinc-200" href={`/docs`}>Docs</a>
			<a
				href="https://discord.gg/BvNsjCeQ"
				target="_blank"
				rel="noopener noreferrer"
				class="w-5 text-zinc-300 hover:text-zinc-200"
			>
				<FaDiscord />
			</a>
			<a
				href="https://github.com/los-junior/advent-of-juniors"
				target="_blank"
				rel="noopener noreferrer"
				class="w-5 text-zinc-300 hover:text-zinc-200"
			>
				<FaGithub />
			</a>
		</div>
		<div class="flex items-center">
			<UserSettings />
			<MobileNav isOpen={isMobileNavOpen} />
		</div>
	</div>
</div>
