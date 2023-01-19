<script lang="ts">
	import { page } from '$app/stores';
	const user = $page.data.session?.user;
	let isUserMenuOpen = false;
</script>

{#if user}
	{#if isUserMenuOpen}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			class="absolute top-0 left-0 w-screen h-screen z-20"
			on:click={() => {
				isUserMenuOpen = false;
			}}
		/>
	{/if}
	<div class="relative">
		<button
			on:click={() => {
				isUserMenuOpen = !isUserMenuOpen;
			}}
		>
			<img class="w-6 h-6 border border-brand-dark-purple rounded-full" src={user.image} alt="" />
		</button>

		{#if isUserMenuOpen}
			<div
				class="absolute z-40 right-0 origin-top-right w-40 bg-brand-dark-purple border border-brand-light-purple rounded flex flex-col space-y-2 p-2"
			>
				<a href="/dashboard">Dashboard</a>
				<a href="/dashboard/settings">Configuración</a>
				<div class="w-full border-t border-brand-light-purple " />
				<a href="/logout">Logout</a>
			</div>
		{/if}
	</div>
{:else}
	<button>Registrarme</button>
{/if}
