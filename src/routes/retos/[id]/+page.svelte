<script lang="ts">
	import { challengesObject } from '../../..//data/challenges';
	import Navbar from '../../../components/challenges/Navbar.svelte';

	/** @type {import('./$types').PageData} */
	export let data: { id: string };

	import Description from '../../../components/challenges/Description.svelte';
	import MobileNavbar from '../../../components/challenges/MobileNavbar.svelte';
	import Editor from '../../../components/challenges/Editor.svelte';

	const challenge = challengesObject[data.id];

	let isSidebarOpen = false;
	let openNavbar = (value: boolean) => {
		isSidebarOpen = value;
	};
</script>

<div class="relative h-screen bg-brand-dark">
	<Navbar {openNavbar} {isSidebarOpen} {challenge} />
	<MobileNavbar {openNavbar} isOpen={isSidebarOpen} />
	<div class="flex pt-6">
		<Editor {challenge} />
		<Description markdown={challenge.description} />
	</div>
</div>
