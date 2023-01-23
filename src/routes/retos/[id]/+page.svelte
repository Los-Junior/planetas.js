<script lang="ts">
	import type { Session } from '@/types/authjs';
	/** @type {import('./$types').PageData} */
	export let data: { id: string; session: Session };

	import Navbar from '@/components/challenges/Navbar.svelte';
	import Description from '@/components/challenges/Description.svelte';
	import MobileNavbar from '@/components/challenges/MobileNavbar.svelte';
	import Editor from '@/components/challenges/Editor.svelte';
	import { getChallenge } from '@/services/client/challenges';

	const { id, session } = data;

	const challenge = getChallenge(id);

	let isSidebarOpen = false;
	let openNavbar = (value: boolean) => {
		isSidebarOpen = value;
	};
</script>

<div class="relative h-screen bg-brand-dark">
	{#await challenge}
		<div>cargando</div>
	{:then challenge}
		<!-- <Navbar {openNavbar} {isSidebarOpen} {challenge} /> -->
		<MobileNavbar {openNavbar} isOpen={isSidebarOpen} />
		<div class="flex pt-6">
			<Editor challengeId={id} {challenge} {session} />
			<Description markdown={challenge.description} />
		</div>
	{/await}
</div>
