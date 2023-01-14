<script lang="ts">
	import {
		Dialog,
		DialogOverlay,
		DialogTitle,
		DialogDescription
	} from '@rgossiaux/svelte-headlessui';
	export let isOpen = true;
	export let openNavbar = (val: boolean) => {};
</script>

<Dialog
	class="absolute right-0 h-screen max-w-sm bg-brand-dark top-0 border-l-2 border-l-brand-dark-purple text-white"
	open={isOpen}
	on:close={() => openNavbar(false)}
>
	<DialogOverlay />

	<DialogTitle>Deactivate account</DialogTitle>
	<DialogDescription>This will permanently deactivate your account</DialogDescription>

	<p>
		Are you sure you want to deactivate your account? All of your data will be permanently removed.
		This action cannot be undone.
	</p>

	<button on:click={() => openNavbar(false)}>Deactivate</button>
	<button on:click={() => openNavbar(false)}>Cancel</button>
</Dialog>
