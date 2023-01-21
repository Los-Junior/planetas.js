<script lang="ts">
	import { afterUpdate } from 'svelte';
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';
	import FaEdit from 'svelte-icons/fa/FaEdit.svelte';

	let show = false;
	let user = $page.data.session?.user;
	let profile = $page.data.profile;

	afterUpdate(() => {
		show = true;
	});
</script>

<div class="min-h-[91vh] text-white">
	{#if show}
		<div in:fade class="wrapper w-full py-10 space-y-8">
			<h1 class="text-4xl">Información Personal</h1>
			<div>
				<form
					on:submit={async (e) => {
						e.preventDefault();
					}}
					class="grid gap-5 bg-brand-dark-purple w-2/3 p-6 rounded border border-brand-light-purple"
				>
					<div class="flex flex-col space-y-2">
						<label for="">Bio</label>
						<textarea
							class="py-2 px-2  bg-brand-light-purple outline-none"
							value={profile.bio ? profile.bio : ''}
							placeholder="Hola, soy desarrollador front-end, me gusta..."
						/>
					</div>
					<div class="flex flex-col space-y-2">
						<label for="">Locación</label>
						<input
							class="py-2 px-2 bg-brand-light-purple outline-none"
							type="text"
							value={profile.location ? profile.location : ''}
							placeholder="🇨🇴 🇦🇷 🇲🇽 🇵🇪 🇪🇨 🇬🇹 🇨🇷 🇨🇱 🇺🇾 🇵🇾 🇳🇮 🇨🇺 🇵🇦 🇸🇻 🇭🇳"
						/>
					</div>
					<div class="flex flex-col space-y-2">
						<label for="">Website</label>
						<input
							class="py-2 px-2  bg-brand-light-purple outline-none"
							type="text"
							value={profile.website ? profile.website : ''}
							placeholder="https://miportafolio.com"
						/>
					</div>
					<div class="flex flex-col space-y-2">
						<label for="">Github</label>
						<input
							class="py-2 px-2  bg-brand-light-purple outline-none"
							type="text"
							value={profile.github ? profile.github : ''}
							placeholder="https://github.com/miusuario"
						/>
					</div>
					<div class="flex justify-end">
						<button type="submit" class="px-2 py-2 bg-brand-silver">Guardar</button>
					</div>
				</form>
			</div>
			<div class="flex space-x-5 w-full" />
		</div>
	{/if}
</div>
