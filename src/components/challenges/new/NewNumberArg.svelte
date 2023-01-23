<script lang="ts">
	import Modal from '@/components/generics/Modal.svelte';
</script>

<Modal
	let:closeModal
	cta="Agregar Número"
	ctaClass="bg-brand-dark-purple border border-brand-light-purple"
>
	<p>Este modal agrega un objeto number al array de parametros</p>
</Modal>
