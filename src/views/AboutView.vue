<template>
	<div class="container">
		<form>
			<label
				>Ism:
				<input
					type="text"
					required
					placeholder="ismingizni kiriting"
					v-model="username"
				/>
			</label>
			<label
				>Parol:
				<input
					type="password"
					placeholder="parolingizni kiriting"
					required
					v-mode="password"
				/>
			</label>
			<button @click="login" type="button">Login</button>
		</form>
	</div>
</template>
<style scoped>
.container {
	width: 100%;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 100px 0;
}
form {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 50px;
}
label {
	font-size: 25px;
}
label input {
	width: 350px;
	height: 50px;
	border-radius: 50px;
	font-size: 23px;
	padding: 0 10px;
}
button {
	width: 100px;
	height: 40px;
	font-size: 23px;
	text-align: center;
	cursor: pointer;
}
@media (max-width: 619px) {
	label {
		font-size: 20px;
	}
	label input {
		width: 150px;
		height: 30px;
		border-radius: 50px;
		font-size: 18px;
	}
}
</style>
<script>
export default {
	data() {
		return {
			username: "",
			password: "",
			isLoggedIn: false,
		};
	},
	methods: {
		login() {
			if (this.username === "" && this.password === "") {
				alert("Invalid login credentials");
			} else {
				this.isLoggedIn = true;
				this.$router.push("/home");
			}
		},
		logout() {
			this.isLoggedIn = false;
		},
	},
};
</script>
