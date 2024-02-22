<script>
	export let form;
</script>

<svelte:head>
	<title>Dara Exchange - Foreign Currency Exchange</title>
	<meta
		name="description"
		content="Providing you with easy access to foreign currency from any country you are travelling to"
	/>
	<meta name="keywords" content="travel money foreign currency exchange money rates australia " />
</svelte:head>

<div class="flex flex-col gap-8 md:items-center">
	<div class="flex items-center gap-4">
		<img src="/favicon.svg" alt="logo" />
		<p><span class="font-bold">Dara </span><span>Exchange &#8482;</span></p>
	</div>
	<div class="flex flex-col gap-4 md:text-center">
		<h1 class="text-3xl font-bold uppercase">Coming Soon!</h1>
		<p>
			Dara Exchange &#8482; is a Foreign Currency Exchange soon to be operating Australia-wide
			providing you with easy access to foreign currency from any country you are travelling to.
		</p>
	</div>
	{#if !form?.success}
		<form method="post" action="?/insert" class="flex w-full flex-col gap-4 border px-6 py-4">
			<p>Sign up to be notified when we launch!</p>
			<div class="flex flex-col gap-2">
				<input
					required
					class="border px-4 py-2 focus:outline-[#ffd700]"
					type="email"
					name="email"
					id="email"
					placeholder="Your email address"
				/>
				<small class="text-neutral-400">We won't share your email address with anyone else.</small>
			</div>
			<button class="bg-[#FFD700] px-4 py-2 font-medium">Notify me</button>
		</form>
	{:else if form?.success}
		<p class="bg-green-200 px-6 py-4 text-green-950">
			Thank you for signing up, you will be notified when we launch!
		</p>
	{/if}
</div>
