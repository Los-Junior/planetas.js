<script lang="ts">
	import clsx from 'clsx';
	export let className = '';
</script>

<div class={clsx(className, 'px-4 xl:px-20 bg-brand-dark mainContainer')}>
	<slot />
</div>
