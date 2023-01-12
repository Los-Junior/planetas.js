<script lang="ts">
	import clsx from 'clsx';
	export let className = '';
</script>

<div class={clsx(className, 'px-20 bg-brand-dark')}>
	<slot />
</div>
