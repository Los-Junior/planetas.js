<script>
	import { Dialog, DialogOverlay, Transition, TransitionChild } from '@rgossiaux/svelte-headlessui';
	import clsx from 'clsx';
	export let cta = 'Abrir';
	export let ctaClass = '';

	let isOpen = false;
	let toggle = () => {
		isOpen = !isOpen;
	};
	function closeModal() {
		isOpen = false;
	}
	function openModal() {
		isOpen = true;
	}
</script>

<button
	type="button"
	on:click={openModal}
	class={clsx(
		'px-4 py-2 mr-2 text-sm font-medium rounded-md bg-opacity-20 hover:bg-opacity-30',
		ctaClass
	)}
>
	{cta}
</button>

<Transition appear show={isOpen}>
	<Dialog as="div" class="fixed inset-0 z-10 overflow-y-auto" on:close={closeModal}>
		<div class="min-h-screen px-4 text-center">
			<TransitionChild
				enter="ease-out duration-300"
				enterFrom="opacity-0"
				enterTo="opacity-100"
				leave="ease-in duration-200"
				leaveFrom="opacity-100"
				leaveTo="opacity-0"
			>
				<DialogOverlay class="fixed inset-0" />
			</TransitionChild>

			<TransitionChild
				enter="ease-out duration-300"
				enterFrom="opacity-0 scale-95"
				enterTo="opacity-100 scale-100"
				leave="ease-in duration-200"
				leaveFrom="opacity-100 scale-100"
				leaveTo="opacity-0 scale-95"
			>
				fg <span class="inline-block h-screen align-middle" aria-hidden="true"> &#8203; </span>
				<div
					class="inline-block my-8 overflow-hidden text-left align-middle transition-all transform shadow-xl"
				>
					<slot {isOpen} {cta} {toggle} {closeModal} />
				</div>
			</TransitionChild>
		</div>
	</Dialog>
</Transition>
