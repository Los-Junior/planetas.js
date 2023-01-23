<script>
	import clsx from 'clsx';
	export let className = '';
</script>

<div class={clsx('py-5 flex space-x-5', className)}>
	<slot />
</div>
