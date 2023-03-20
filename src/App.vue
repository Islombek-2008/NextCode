<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
<template>
	<nav>
		<a href="#">
			<img src="./assets/img/logo.jpg" alt="logo" />
		</a>
		<ul>
			<RouterLink to="/">Home</RouterLink>
			<RouterLink to="/home">salom</RouterLink>
			<RouterLink to="/about">Login</RouterLink>
		</ul>
	</nav>
	<RouterView class="routerView" />
</template>

<style scoped>
nav {
	width: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	box-shadow: 0 0 30px #2222;
}
nav img {
	width: 60px;
}
nav ul {
	display: flex;
	gap: 25px;
}
nav ul a {
	text-decoration: none;
	font-size: 23px;
}
.routerView {
	width: 100%;
	height: 100%;
}
</style>
