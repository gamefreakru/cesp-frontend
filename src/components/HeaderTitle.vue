<template>
	<div class="header-title">
		<slot/>
	</div>
</template>

<script>
    export default {
        name: "HeaderTitle"
    }
</script>

<style scoped>

	.header-title {
		font-family: FedraSerifAPro-Medium, sans-serif;
		font-size: 4rem;
	}

	@media screen and (max-width: 1280px) {
		
		.header-title {
			font-size: 3rem;
		}
		
	}

	@media screen and (max-width: 760px) {

		.header-title {
			font-size: 1.8rem;
		}

	}
	
</style>