<script lang="ts">
	import { page } from '$app/stores';
	import { signOut } from '@auth/sveltekit/client';
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
	<div class="relative ">
		<div class="flex items-center">
			<button
				class=""
				on:click={() => {
					isUserMenuOpen = !isUserMenuOpen;
				}}
			>
				<img class="w-6 h-6 border border-brand-dark-purple rounded-full" src={user.image} alt="" />
			</button>
		</div>

		{#if isUserMenuOpen}
			<div
				class="absolute text-white z-40 top-10 right-0 origin-top-right w-40 bg-brand-dark-purple border border-brand-light-purple rounded flex flex-col space-y-2 p-2"
			>
				<a href={`/dashboard`}>Dashboard</a>
				<a href={`/dashboard/settings`}>Configuración</a>
				<a href={`/retos/nuevo`}>Crear Reto</a>
				<div class="w-full border-t border-brand-light-purple " />
				<button class="w-min" on:click={() => signOut()}>Logout</button>
			</div>
		{/if}
	</div>
{:else}
	<a href={`/login`}>
		<button
			class="px-3 py-1 bg-brand-dark-purple border border-brand-light-purple text-white rounded text-[9px] md:text-base"
			>Registrarme</button
		>
	</a>
{/if}
