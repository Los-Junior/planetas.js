<script>
	import Navbar from '@/components/generics/Navbar.svelte';
	import MainContainer from '@/components/generics/MainContainer.svelte';
	import { sidebarLinks } from '@/data/docs/SidebarLinks';
</script>

<MainContainer className="mainContainer">
	<Navbar />
	<div class="border-t border-brand-light-purple" />
	<div class="flex">
		<div class="flex flex-col w-1/6 border-r border-brand-light-purple text-white py-4">
			{#each sidebarLinks as link}
				<a href={link.href}> {link.title}</a>
			{/each}
		</div>
		<div class="flex-1 h-[90vh] overflow-scroll py-4">
			<slot />
		</div>
	</div>
</MainContainer>
