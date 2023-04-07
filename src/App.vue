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
			<RouterLink to="/signup/about">SignUp</RouterLink>
			<a href="https://nextcode-chat.netlify.app/">Chat</a>
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
	position: absolute;
	background-color: #fff;
	top: 0;
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
