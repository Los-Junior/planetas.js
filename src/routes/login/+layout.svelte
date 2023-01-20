<script>
	import Navbar from '@/components/generics/Navbar.svelte';
	import MainContainer from '@/components/generics/MainContainer.svelte';
</script>

<MainContainer className="mainContainer">
	<Navbar />
	<slot />
</MainContainer>
