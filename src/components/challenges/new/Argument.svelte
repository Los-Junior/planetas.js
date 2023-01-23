<script lang="ts">
	export let arg: any;
	console.log(arg);
</script>

<div class="w-1/4 space-y-2">
	<p class="font-light text-xs">
		{JSON.stringify(arg)}
	</p>
</div>
