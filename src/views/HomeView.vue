<script setup></script>

<template>
	<main>
		<h1>NextCode kurs vidiolari</h1>
		<div class="vidios">
			<video
				src="../assets/img/Vue.js_ The Documentary.mp4"
				controls
				width="600"
				height="500"
				loop
				muted
			></video>
			<div style="display: flex; align-items: center">
				<img src="../assets/img/vue.png" alt="avatar" />
				<a href="https://vuejs.org/">VueJS JavaScript fremwork</a>
			</div>
		</div>
		<div class="vidios">
			<video
				src="../assets/img/1.mp4"
				controls
				width="600"
				height="500"
				loop
				muted
			></video>
			<div style="display: flex; align-items: center">
				<img src="../assets/img/DonyorRakhmatullayev.jpg" alt="avatar" />
				<a
					href="https://www.google.com/search?q=donyor_rakhmatullaev&source=lmns&bih=667&biw=1366&rlz=1C1GCEA_enUZ1035UZ1036&hl=ru&sa=X&ved=2ahUKEwiBs-2o--D9AhWWwyoKHdyiCw8Q_AUoAHoECAEQAA"
					>Donyor Rakhmatullayev VueJS kurs</a
				>
			</div>
		</div>
		<div class="vidios">
			<video
				src="../assets/img/javascript-dars.mp4"
				controls
				width="600"
				height="500"
				loop
				muted
			></video>
			<div style="display: flex; align-items: center">
				<img src="../assets/img/Roziya-Zohidova.png" alt="avatar" />
				<a
					href="https://www.google.com/search?q=roziya+zohidova&rlz=1C1GCEA_enUZ1035UZ1036&oq=roziya+zohidova&aqs=chrome..69i57j33i10i160.14529j0j7&sourceid=chrome&ie=UTF-8"
					>Roziya Zohidova JavaScript kurs</a
				>
			</div>
		</div>
		<div class="vidios">
			<video
				src="../assets/img/html-css-bootstrap.mp4"
				controls
				width="600"
				height="500"
				loop
				muted
			></video>
			<div style="display: flex; align-items: center">
				<img src="../assets/img/najmiddin-nazarov.jpg" alt="avatar" />
				<a
					href="https://www.google.com/search?q=najmiddin+nazarov&rlz=1C1GCEA_enUZ1035UZ1036&oq=najmiddin+nazarov&aqs=chrome..69i57j33i160l2.11115j0j7&sourceid=chrome&ie=UTF-8"
					>Najmiddin Nazarov HTML CSS BOOTSTRAP</a
				>
			</div>
		</div>
	</main>
</template>
<style scoped>
main {
	width: 100px;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-bottom: 50px;
}
.vidios img {
	width: 30px;
	height: 30px;
	border-radius: 50%;
	margin-right: 15px;
}
.vidios a {
	font-size: 18px;
}
@media (max-width: 677px) {
	video {
		width: 370px;
		height: 270px;
	}
	.vidios a {
		font-size: 16px;
	}
}
</style>
