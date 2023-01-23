<script lang="ts">
	import Modal from '@/components/generics/Modal.svelte';
	import { argumentsStore } from '@/stores/newChallenge';
	let value = '';

	const handleSubmit = (close: () => void) => {
		argumentsStore.update((args) => {
			args.push({
				type: 'string',
				value
			});
			return args;
		});
		close();
	};
</script>

<Modal
	let:closeModal
	cta="Agregar String"
	ctaClass="bg-brand-dark-purple border border-brand-light-purple"
>
	<form on:submit|preventDefault={() => handleSubmit(closeModal)} class="space-y-2">
		<p class="text-xs">
			Agrega un <span class="text-brand-light-purple">string</span> como argumento a tu función.
		</p>
		<input type="text" class="w-full p-2 border border-brand-silver rounded" bind:value />
	</form>
</Modal>
