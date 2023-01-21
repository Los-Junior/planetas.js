<script>
	import MainContainer from '@/components/generics/MainContainer.svelte';
	import Navbar from '@/components/generics/Navbar.svelte';
</script>

<MainContainer>
	<Navbar />
	<slot />
</MainContainer>
