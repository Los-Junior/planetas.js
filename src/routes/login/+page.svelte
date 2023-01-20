<script>
	import { signIn } from '@auth/sveltekit/client';
</script>

<div class="h-[91vh] text-white flex justify-center items-center">
	<div
		class="bg-brand-dark-purple h-64 p-4 rounded-md border border-brand-light-purple flex flex-col items-center justify-center space-y-5"
	>
		<h1>Haz login y empieza a resolver retos de programación.</h1>
		<button on:click={() => signIn('github')} class="bg-purple-700 w-full py-1 rounded"
			>Registrarme con GitHub</button
		>
		<div class="w-full border-t border-brand-light-purple" />
		<a
			href="https://losjunior.co"
			target="_blank"
			rel="noopener noreferrer"
			class="flex flex-col items-center justify-center space-y-2"
		>
			<p>Un proyecto de</p>
			<img src="/lj-logo.png" class="w-40" alt="" />
		</a>
	</div>
</div>
