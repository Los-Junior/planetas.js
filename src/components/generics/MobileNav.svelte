<script lang="ts">
	import { page } from '$app/stores';
	import { Dialog, Transition, TransitionChild } from '@rgossiaux/svelte-headlessui';
	import IoIosMenu from 'svelte-icons/io/IoIosMenu.svelte';
	export let isOpen = false;
	const user = $page.data.session?.user;
</script>

<button
	class="block md:hidden text-white w-6 h-6 ml-4"
	on:click={() => {
		isOpen = true;
	}}
>
	<IoIosMenu />
</button>
<Transition show={isOpen} as="div">
	<Dialog
		class="relative top-0 right-0 h-screen w-full  text-white z-40"
		open={isOpen}
		on:close={() => {
			isOpen = false;
		}}
	>
		<div class="fixed inset-0 z-40 flex">
			<TransitionChild
				enter="transition ease-in-out duration-300 transform"
				enterFrom="-translate-x-full"
				enterTo="translate-x-0"
				leave="transition ease-in-out duration-300 transform"
				leaveFrom="translate-x-0"
				leaveTo="-translate-x-full"
				as="div"
			>
				<div
					class="relative flex h-screen w-screen flex-1 flex-col bg-brand-dark border-r border-brand-light-purple px-4 py-4"
				>
					<div class="flex justify-between">
						<p>Menú</p>

						<!-- button to close -->
						<button
							class="w-6 h-6"
							on:click={() => {
								isOpen = false;
							}}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</div>
					<div class="flex flex-col justify-between h-full">
						<ul class="mt-4">
							<li>
								<a href="/" class="block py-2">Inicio</a>
							</li>
							<li>
								<a href="/retos" class="block py-2">Retos</a>
							</li>
							<li>
								<a href="/docs" class="block py-2">Docs</a>
							</li>
							<li>
								<a href="/docs/retos" class="block py-2">Crear retos</a>
							</li>
						</ul>
						{#if user}
							<div
								class="w-full py-2 bg-brand-dark-purple border border-brand-light-purple rounded"
							>
								<p>Hola {user.name} 👋</p>
							</div>
						{:else}
							<a href="/login">
								<button
									class="w-full py-2 bg-brand-dark-purple border border-brand-light-purple rounded"
									>Registrarme</button
								>
							</a>
						{/if}
					</div>
				</div>
			</TransitionChild>
		</div>
	</Dialog>
</Transition>
