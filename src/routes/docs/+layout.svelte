<script>
	import Navbar from '@/components/generics/Navbar.svelte';
	import MainContainer from '@/components/generics/MainContainer.svelte';
</script>

<MainContainer className="mainContainer">
	<Navbar />
	<div class="flex">
		<div class="flex-none w-1/4 text-white">
			<p>sidebar</p>
		</div>
		<div class="flex-1 h-[80vh] overflow-scroll">
			<slot />
		</div>
	</div>
</MainContainer>
