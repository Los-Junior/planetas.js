<script lang="ts">
	import Modal from '@/components/generics/Modal.svelte';
	import { fade } from 'svelte/transition';
	import GenericEditor from './GenericEditor.svelte';
	const values = [];
	let currentInput = '';
	let arrayBtnClass = 'bg-white border border-brand-dark-purple px-1 py-0.5 text-xs rounded';
	let inputClass = 'border text-black px-2 py-1';

	function handlecurrentInput(c: string) {
		currentInput = c;
	}

	const addNumber = () => {
		values.push(0);
	};

	const addString = () => {
		values.push('');
	};

	const addObject = () => {
		values.push({});
	};

	const addArray = () => {
		values.push([]);
	};
</script>

<Modal
	let:closeModal
	cta="Agregar Array"
	ctaClass="bg-brand-dark-purple border border-brand-light-purple"
>
	<div class="flex flex-col space-y-2 p-4 bg-brand-dark-purple rounded-lg">
		<h3 class="text-white text-lg">Elige el tipo de array.</h3>
		<div class="flex flex-row space-x-2">
			<button on:click={() => handlecurrentInput('string')} class={arrayBtnClass}>
				Array de strings
			</button>
			<button on:click={() => handlecurrentInput('number')} class={arrayBtnClass}>
				Array de números
			</button>
			<button on:click={() => handlecurrentInput('object')} class={arrayBtnClass}>
				Array de objetos
			</button>
			<button on:click={() => handlecurrentInput('array')} class={arrayBtnClass}>
				Array de arrays
			</button>
		</div>

		{#if currentInput === 'number'}
			<div>
				<input type="text" class={inputClass} />
			</div>
		{/if}

		{#if currentInput === 'string'}
			<div>
				<input type="text" class={inputClass} />
			</div>{/if}

		{#if currentInput === 'object'}
			<div>
				<GenericEditor className="w-full h-32" />
			</div>{/if}

		{#if currentInput === 'array'}
			<div>
				<input type="text" class={inputClass} />
			</div>
		{/if}
	</div>
</Modal>
