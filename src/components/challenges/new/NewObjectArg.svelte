<script lang="ts">
	import Modal from '@/components/generics/Modal.svelte';
</script>

<Modal
	let:closeModal
	cta="Agregar Objeto"
	ctaClass="bg-brand-dark-purple border border-brand-light-purple"
>
	<p>Este modal agrega un objeto al array de parametros</p>
</Modal>
