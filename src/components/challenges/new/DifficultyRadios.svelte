<script>
	import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@rgossiaux/svelte-headlessui';

	let plan = 'startup';
</script>

<RadioGroup value={plan} on:change={(e) => (plan = e.detail)}>
	<RadioGroupLabel>Plan</RadioGroupLabel>
	<RadioGroupOption value="startup" let:checked>
		<span class:checked>Startup</span>
	</RadioGroupOption>
	<RadioGroupOption value="business" let:checked>
		<span class:checked>Business</span>
	</RadioGroupOption>
	<RadioGroupOption value="enterprise" let:checked>
		<span class:checked>Enterprise</span>
	</RadioGroupOption>
</RadioGroup>

<style>
	.checked {
		/* Your styles here */
	}
</style>
