<template>
	<div class="container">
		<div class="about">
			<h3>Kurslarni ko'rish uchun ro'yhatdan o'ting</h3>
			<RouterLink to="/about">
				<img src="../assets/img/user.png" alt="user"
			/></RouterLink>
		</div>
		<div class="info">
			<div>
				<h1>NextCode O'quv Kurslari sizga dasturlashni mukammal o'rgatadi.</h1>
				<p>
					Siz ham biz bilan
					<a href="https://t.me/nextCode24"
						>o'qing <i class="fab fa-readme"></i
					></a>
				</p>
				<a href="https://nextcode-school.netlify.app/"
					>NextCode School <i class="fas fa-right-long"></i
				></a>
			</div>
			<img src="../assets/img/home-img-left.png" alt="home-img-left" />
		</div>
	</div>
</template>
<script>
export default {};
</script>
<style scoped>
a {
	color: darkgray;
}
.container {
	background-image: url(../components/img/@Wallpaper_INT.jpg);
	color: rgb(255, 255, 255);
	background-size: cover;
	height: 100vh;
	padding: 50px 20px 0;
	display: flex;
	flex-direction: column;
}
.about {
	display: flex;
	justify-content: end;
	margin-top: 20px;
	margin-right: 25px;
	align-items: center;
	gap: 10px;
}
.info {
	margin-top: 20px;
	display: flex;
	justify-content: space-around;
	align-items: center;
}
.info h1 {
	width: 500px;
	font-size: 35px;
}
.info p {
	font-size: 18px;
}
@media (max-width: 1054px) {
	.info {
		flex-direction: column;
	}
}
@media (max-width: 541px) {
	.info h1 {
		font-size: 30px;
		width: auto;
	}
	.info img {
		width: 300px;
	}
}
</style>
