<script lang="ts">
	import { afterUpdate } from 'svelte';
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';

	import { datef, fromNow } from '@/lib/time';

	let show = false;
	let user = $page.data.session?.user;
	let cards = $page.data.cards;
	let profile = $page.data.profile;
	afterUpdate(() => {
		show = true;
	});
</script>

<div class="text-white min-h-[91vh]">
	{#if show}
		<div in:fade class="wrapper w-full py-10">
			<div class="flex space-x-5 w-full">
				<img src={user?.image} class="w-40 rounded-full" alt="" />
				<div class="flex justify-between w-full">
					<div class="space-y-2">
						<h1 class="text-6xl">{user?.name}</h1>
						<p class="">🎂 Se unió el {datef(profile.createAt, 'DD [de] MMMM [del] YYYY')}.</p>
						<p class="">🔭 Visto por última vez hace {fromNow(profile.lastSeen)}.</p>
						<p class="">{profile.location ? `📍 ${profile.location}.` : ''}</p>
					</div>
					<div>
						<a href="/dashboard/settings">
							<button
								class="bg-brand-dark-purple border border-brand-light-purple py-2 px-4 rounded"
								>Editar perfil</button
							>
						</a>
					</div>
				</div>
			</div>
		</div>
		<div in:fade class="w-full py-10">
			<div class="text-[10px] p-2 text-brand-silver">
				<span class="py-0.5 px-2 border rounded border-brand-silver">shift</span> + scroll
			</div>
			<div class="wrapper space-x-5">
				{#each cards as card}
					<div class="card">
						<div
							class="bg-brand-dark-purple border border-brand-light-purple h-40 w-96 rounded-lg p-5 flex flex-col justify-between"
						>
							<div class="flex justify-between items-center">
								<p class="font-bold text-xs">{card.title}</p>
							</div>
							<p class="font-light">{@html card.description}</p>
							<a href={card.href} class="w-full">
								<button class="py-1 w-full bg-white rounded text-brand-dark-purple text-xs"
									>{card.cta}</button
								>
							</a>
						</div>
					</div>
				{/each}
			</div>
		</div>
	{/if}
</div>

<style>
	.wrapper {
		display: flex;
		flex-wrap: nowrap;
		overflow-x: auto;
	}
	.card {
		flex: 0 0 auto;
	}
</style>
