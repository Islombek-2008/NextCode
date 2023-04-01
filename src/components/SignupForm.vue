<template>
	<div class="container">
		<form @submit.prevent="signUp" class="form">
			<h2 class="title-form">Sign Up</h2>
			<input
				type="text"
				placeholder="Username"
				required
				v-model="username"
				id="username"
			/>
			<input
				type="email"
				placeholder="Email"
				required
				v-model="email"
				id="email"
			/>
			<input
				type="password"
				placeholder="Password"
				required
				v-model="password"
				id="password"
			/>
			<button class="login-button">Sign Up</button>
		</form>
	</div>
</template>

<script>
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase/init.js";

export default {
	// register event to emit
	emits: ["loggedIn"],
	data() {
		return {
			username: "",
			email: "",
			password: "",
		};
	},
	methods: {
		signUp() {
			// register and login user
			createUserWithEmailAndPassword(auth, this.email, this.password).then(
				() => {
					// update 'displayName'
					updateProfile(auth.currentUser, {
						displayName: this.username,
					}).then(() => {
						// emit event
						this.$emit("loggedIn");
					});
				}
			);
		},
	},
};
</script>

<style scoped>
.container {
	background-image: url(./img/@wall8kuz.jpg);
	height: 100vh;
	background-repeat: no-repeat;
	background-size: cover;
	display: flex;
	align-items: center;
	justify-content: center;
}
.form {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: #fff;
	border-radius: 10px;
	border: 1px solid #717171;
	width: 25rem;
	padding: 2rem 5rem;
	box-shadow: 0px 0px 20px 0px black;
}
.title-form {
	color: #fff;
	text-transform: uppercase;
	font-size: 2rem;
	margin-bottom: 2rem;
}
#username,
#email,
#password {
	border: 2px solid cyan;
	margin: 1rem;
	padding: 1rem 2rem;
	border-radius: 3rem;
	width: 15rem;
	font-size: 1.2rem;
	outline: none;
	text-align: center;
	background: transparent;
	transition: all 0.2s ease-in-out;
}
#username:focus,
#email:focus,
#password:focus {
	width: 20rem;
}

.login-button {
	padding: 1rem 3rem;
	border: 2px solid green;
	background: transparent;
	border-radius: 1.5rem;
	color: green;
	transition: all 0.5s;
	cursor: pointer;
}
.login-button:hover {
	background-color: green;
	color: white;
}
</style>
