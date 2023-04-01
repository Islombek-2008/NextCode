<template>
	<div v-if="!isLoggedIn">
		<!-- login -->
		<template v-if="showLogin"> </template>
		<!-- or register -->
		<template v-else>
			<signup-form @loggedIn="isLoggedIn = true" />
		</template>
	</div>
	<!-- is logged in -->
	<div v-else>
		<div class="info-top">
			<button @click="signOut" class="left-long">
				<i class="fas fa-left-long"></i>
			</button>
			<div id="right">
				<div v-if="akk" class="akk">
					<div class="icon-akk">
						<i class="fas fa-user"></i>
					</div>
					<h1>{{ displayName }}</h1>
					<p>{{ email }}</p>
				</div>
				<button @click="akaunt" class="akk-och">
					<span v-if="akk"><i class="fas fa-user"></i></span>
					<span v-else><i class="fas fa-user"></i></span>
				</button>
			</div>
		</div>
		<div class="container">
			<h1 class="course">NextCode kurslari</h1>
			<div class="vidios">
				<a href="https://vuejs.org/">
					<img
						src="https://blog.vueschool.io/wp-content/uploads/2022/11/Frame-20.jpg"
						alt="vue"
						style="
							width: 800px;
							height: 500px;
							border-radius: 5px;
							margin-top: 45px;
						"
						class="img"
					/>
				</a>
				<div style="display: flex; align-items: center">
					<img src="../assets/img/vue.png" alt="avatar" />
					<a href="https://vuejs.org/">VueJS JavaScript fremwork</a>
				</div>
			</div>
			<div class="vidios">
				<a href="https://t.me/+aIw0qOXlQYBmZThi">
					<img
						src="https://www.turing.com/blog/wp-content/uploads/2021/11/vue-js-features-scaled.jpg"
						alt="vue"
						style="
							width: 800px;
							height: 500px;
							border-radius: 5px;
							margin-top: 45px;
						"
						class="img"
					/>
				</a>
				<div style="display: flex; align-items: center">
					<img src="../assets/img/DonyorRakhmatullayev.jpg" alt="avatar" />
					<a
						href="https://www.google.com/search?q=donyor_rakhmatullaev&source=lmns&bih=667&biw=1366&rlz=1C1GCEA_enUZ1035UZ1036&hl=ru&sa=X&ved=2ahUKEwiBs-2o--D9AhWWwyoKHdyiCw8Q_AUoAHoECAEQAA"
						>Donyor Rakhmatullayev VueJS kurs</a
					>
				</div>
			</div>
			<div class="vidios">
				<a href="https://t.me/+KJ0HkolSP0gwN2Ji">
					<img
						src="https://images.squarespace-cdn.com/content/v1/58d20c79725e25b221549193/1521098258210-W9FBV72SMJJX3LESUA7Z/js.jpg?format=2500w"
						alt="vue"
						style="
							width: 800px;
							height: 500px;
							border-radius: 5px;
							margin-top: 45px;
						"
						class="img"
					/>
				</a>
				<div style="display: flex; align-items: center">
					<img src="../assets/img/Roziya-Zohidova.png" alt="avatar" />
					<a
						href="https://www.google.com/search?q=roziya+zohidova&rlz=1C1GCEA_enUZ1035UZ1036&oq=roziya+zohidova&aqs=chrome..69i57j33i10i160.14529j0j7&sourceid=chrome&ie=UTF-8"
						>Roziya Zohidova JavaScript kurs</a
					>
				</div>
			</div>
			<div class="vidios">
				<a href="https://t.me/+MVnsf7UGhH1mNTZi">
					<img
						src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoGBxMREREREBQRExESFhkTExIRERMWExQTGRkaGRkYGhsbHysiGh4oHRoWIzQjKCwwMTExGSE3PDcvOyswPi4BCwsLDw4PHRERHS4pHygwLjAwMDEwMDAwMDAwMDEyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMP/AABEIAKgBKwMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABgEDBAUHAgj/xABQEAACAQIDBAMKCAgLCQAAAAAAAQIDEQQSIQUGMUFRcYEHIjJCUmGRk7HRExQWVJKhwdIjM1NilNPh8BUkNUNEY2RygqLCNHODhKSys+Px/8QAGwEBAAMBAQEBAAAAAAAAAAAAAAMEBQIGAQf/xAA1EQACAgEBAwkGBQUAAAAAAAAAAQIDEQQFEiETMUFRYXGx0fAygZGhweEGFBUiQiMzUmKy/9oADAMBAAIRAxEAPwDFABpHgwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYOMr1nWo4fDqGerwz8L66ebRM+N4WSammV09yPP29hnAsvY+0Vx+KLrqx95c/gDafk4b6aOeUXaWv023rj8fsegVhu/tN3WXD3tp3643XHsv8AUPk1tXycN9NEM9XTB4nLDJYbH1M1mGGu9+RQFfk1tXycN9NGDtjD43Bxp1MRGhknNQWR3bdm+XDRPU+R1tEniMk2fXsXVpZaXr3GaCpQtGSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADN2V4/Z9oZ1GO88GEY2D/AJTwXV9kySWNLX/lXAdT9kyKb4GloKt27Oeh+BMatRqbum+D0b1tyXfrl5rOxfp4hS6Vx0dr6dTZbqZL9/DjzcIyvbRcLsufFoeRDo8FcOg4NEvUWnw4NPhoVjSjr+N7akvq77QpCOjSXJpJaci3Sot3Vmrpc10mFtFJ3cX0LxZ6LZSXIPj0/RF34NW/nfWS+8Q/urRSwuGtm/2jxpOT/Fz6WyZUKFlZ9NyHd1Vv4th7xy/xhaXTv+DnroVtNjl446y1qv7Uka4G7aDPWbx+a8j2mkAB0QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAzdleP2faYlODk1GKbk+Cim2+pI2WEwNWnmdSFSCdrOcZJPj0o+Mlqi28pcDII9tbFwobRwdWo2qdON5NJtpd+uC1erRITZbK3fw+MhbEU1K0rKSc4zSy8LwabWr0vYhseImtoFm7HY/A02J3zwM2n8Lw6cPVk+PVwPEd7cBmblWvfj/Fql31vLqTz5L4X5vh+f9Fp9ni8yj3Wwn5DD/otPt8XkQcr2Gx+Vj1kPp794Bfz0lpb8RV0/wApWnvzgF4VaUv+Xqr2RJh8lsL83w/P+i0+nTxeY+S+F+b4fl/RafTr4vIqX6eF0t6Wc+uwuaeyVENyPNzkVjv/ALPXCrL1Fb7pGt/t5MPi6NCGHqSnKFZTlenOFo5JLjJJcWjp/wAlsJ+Qw/6LT6dPF5mHjN0MGpQq/AU88dElBwp6X4wVoSer4q/DoRxXo6q5qazld3kdzvsnFxeOJGGUYDNg8YaUAEhQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQqyjfX6GfT42kdI2XhYbPw0JZM+Iq2v0uTV8t+UV+/EzMHtWc3krRp5Z6d627X5NPRlvB1Y47D0asGvhKfhR6J2yyi+jpXYesPgJKSc7JJ3smm3bqPP6mWp5dKK4es5PXRcoqCp9jCxjm95Hd5NnRoVe88CazxXRrZx9PtNlubwf8Ae/0o97z0IVIrv4xq0k3lk138Xx05PQs7pzywbte0uD/uo1JPNZBVWq9bhczTx8PXAlEk78+KXhc1r7Cnns7cfC8V/tMR4z8yPP6z1DGXkkoQu7IgNYyrPhrfReF4yVynns7avwvFa1+srln5FP0/sLGIqyhbNCGt1oAXsr4a30j4XjJXRY2kmoebM2tb8vfcsSxCbTyRurW1fJlutWUr6JPVtp/VYAgyJDu9u9CtSlVrOSi7qKi7XS4yfbf0GkwVB1akKaaTm1G/R0vsR0ihCFOEYRaUYJRWq4JFm2eOCMLZ+nVjcprgvH7HNt692vieWcJuVKbssytOLtdJ246J66cDQEm3+2t8LWVKL7ynx88n7l9bZGiattxyzL1sa43yjUuC8ekoADsqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHuHDt+xjMykeK6r+02W7eHhUxNKnVjmhJyTjdq/eya4NPikYG04N6iK60vI/SPwncls6ef4zl/zFmvUrcNOo90k5X1aOhS3awa404LrqVF/qLmG3fwN3+Dp+tl94rvRWda+fka/wCr0/4y+C8znnxf876v2h0Wk++/f0nSv4AwPkU/XS+8RDfHD0qVXLQSUFTTdpOSzNyvq2+ViC3T2VR3pNevcTafX13z3Ip57Uugj9LfV7PfwapKq6lptuq42tdJeC78y/S7rMk0/isdGn+PfL/ARLbtCdbFwpUYynUlGMYQiryk++lZLqLkdzdo/M8T6tm3poJUxz1GPrd16ieev7E3Xdon8zj+kv8AVlvE91uU7XwsVa/8+3x/4ZD47m7Q+aYn1bLeK3bxlJZquFxMYrjL4GbiutpO3aTbsSuow9Mly7qMvm0fXP7hHsXiVWqSrZVH4RuplvfLmbdr8+JooyNnhnemv35l7Z6xY12fUy9sVpUxaXT9GXLFcq6DoNCWznCDawibim01C6bWqfnLtKls+TUYRwspPhGMYNvsRO9dj+EjO/Ts/wA4kOWxl5b+iveP4GXlv6K9516GwcNZfgKXDyUWcbsbCwp1J/A0lljJ3yrikyP9Rj1P5B7MsS9pfM47i8Iqc4RTbvZ6q3OxllraGteK6EvtZdJdS+KRi3POAACsQgAAAAAAAAAAAAAAAAAAAAAAAAAAFYcexmy3dnlxeHf9bFfSeX7TW9PU/YX8PUcKkJx1lGUZJdLTTSMXavCyuXrg0e+/B73tNqK+1fOLX0J5vhsipiadNUlFyjJt5ml3rXn86RoMNubibvvafrIm0xu8GNowc6mFpxgmk5OV9XouEjGw2/dW7/BU/TP3la/8vKTc857mbWl/PV1KFW64rPSn4Mt/I7E+TD1kTTbUwsqMp05pKcbKSTutbPj1NHQt2NrSxUKk5xjHLJRWW+ul+fWQbeyebE13/WtfR0+wrXU0xhGdeeLLWj1N9l0q7ccF0d6IpuxO+38L5qqXoos7ptPGxoUatepfJShKpPKryywTk7Lm7I4FuZUzbew7/tMl6ITX2Hct7MLOrgcZSpxcqlShVhCKaTlOUGktdNW+ZtKOIwXYvAwdU966T7X4kZXdg2f0Yn1K+8SHdrenDbQjOWGm5OnZThKLhON+F0+Ts9VdaPoOIx7nm1fmdT1lD9YdE7km5+JwUq9fFxVOVSMacKWaMpJJuTlJxbS5JJN8ySUYpcGRyjFLnNX3aN36dF0sZSioSrTdKqoqylLK5xnbptGSb56EK2e+86m/YTLu07x0qrpYOlJTlRm6tWUXeMZ5XCMLrxrSk2uWhCtlS72S8/2FzQZVi7mU9pJvSZfQ15fUnG726EKtOnWrTbjNZlThp9KXHsVuslWDwNKjHLShGC55Vq+t8ZdpE9hbRx6o040KMKlKN4xlJavvm3465voMd774lXTjRutPAl986up1Fsmt5NLoyvDzKlN2npinutN9OHx9/kdTx0sRZLDxpcPCqzkrf4VHX0kV27sXGShOriKsJqCzOKcrJLyVZK54w++OJbhG1LXKvAlzaXlEl3wnbB1vPlXpnFEUI2UTjHC4vvfOLJ06muck5ftXcubqOQYh3xEvN7kZBjJ3r1H537bGQXNR7XuPN3e0AAQEQAAAAAAAAAAAAAAAAAAAAAAAAAAAf2nuo+jieGXJLX0+1mRtdfsg+1/M9t+Cpf1rodai/g35nT9oYSGKo5ZSeSpllmg1e6akrXTXI0VDcTv3assnnh33/dZkRw2LqUnenOdN/mScfTbibnB72YvK4/CJ/nOEM3ptb6ihPUU2cbIvPruPTx0Oq063abFjtX2fyJ5sXZcMJTcIyk05Z5SlZa2S5cFoc121UzVqkuOapKXY5P3nvGbSnUd6tWU/NKTa7FwRr8XWWXNwUU3dkF1ysUYRjhIs6PSTplKyyW83z+vsRjudzzbawj8qvN+mNRn0Ft3aHxbDV8Rlz/AUp1cl7ZskXK17O17cbHzr3K/5W2f/ALx/+OZ9Bb4YedTAY2lTi51KmHqwhCPGUpU5JJeds9BasSSPLye88nPF3cv7F/1X/qJFuV3S6O0ayw8qU6FeScoKUlOE8qu0pJJ5rXdmuCZyKO4m0/mWI+jH3kv7l+4OMpY6lisVSdClQzSSlKOepOUJQSUYt2XfNtu3D0fZRgkfWom57rG5NFYeeOw1ONKrStKrGnFRhUpt2csq0Ule9+ave+lubbHl4S6n7TuHdOxsKOy8Y5tL4Sm6UU+c6neRS9N+xnCtjT7+S6Y/aifRN8oivrP3aWfrmaZ1PufVk8M46ZoVJac7NRd7dbfoMXH7jRlKUqdZxzNyyzgmtXe1017CGRbTTV01wa0aNnhN5MTS8GtOS6J2mv8ANdrsZdlprYzc6pYz0P0zIhqqp1xrtjnHSjpGy9y4QcJ1KjnKLUkoJRjdaq97t/UZG/VdLDOF1mlKPe3V7J34dhEcbvNiJLv6+WPQrQX1WbNJW2tTTbTlOXSl7WyOOltlNTslnHrsOJ6uqNcq6YYzzv69PiYOEd51H0v2tsyTG2etG/OjJOr3mxmPb7QABCRAAAAAAAAAAAAAAAAAAAAAAAAAAAAr2LtRQBrPBnUZOLynhnpS6fqt9qGb/wCX/YeQVZ6Giby4/Dh4GvRt/aNC3Y2tr/bEvnJNnjGTap1HC8ZKMpK9uNnbhqc1xGLqVdak5zf50m12LkdOITt7dupSnKdKLnSeqUVeUPNbmuokhRXX7EUvXxLeh2rdfKUdTY23jGXw7scyPO5W1qeDx+GxNZTdOjNykqaTlbLJaJtX1a5nYl3btnfk8Z6mn+sOELDVPIqerl7j0sPU8ip6uXuPkq1J8TY3o9Z3Zd2zZ35PGepp/rCzi+7dg0n8DQxVSXJTVKnG/nedteg4iqE/Iqern7i5GhPyJ+rl7jjkYn1OPX8yR74b54jaU4yrZYUoNulRpt5It6Zm34c7aZny4JXd9HFluNCfkT+hL3GZgdm1arSjCSXOUlJRXp49h3u9CO3bCEcykku8327dNToycrv8I0m2+Fo/tM6eBXJ26z3gcMqVONOPCPPpfNl4swsnBcGeK1Wo5S+c48zfDuMaOCXGTb6i7ChFcEu3UuA6lZOXOyu5yfOyhUAjOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABYWAAwVsUsABgWKlAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/9k="
						alt="vue"
						style="
							width: 800px;
							height: 500px;
							border-radius: 5px;
							margin-top: 45px;
						"
						class="img"
					/>
				</a>
				<div style="display: flex; align-items: center">
					<img src="../assets/img/najmiddin-nazarov.jpg" alt="avatar" />
					<a
						href="https://www.google.com/search?q=najmiddin+nazarov&rlz=1C1GCEA_enUZ1035UZ1036&oq=najmiddin+nazarov&aqs=chrome..69i57j33i160l2.11115j0j7&sourceid=chrome&ie=UTF-8"
						>Najmiddin Nazarov HTML CSS BOOTSTRAP</a
					>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import SignupForm from "../components/SignupForm.vue";
import { auth } from "../firebase/init";
import { signOut } from "firebase/auth";

export default {
	components: { SignupForm },
	data() {
		return {
			isLoggedIn: false,
			displayName: "",
			email: "",
			akk: false,
		};
	},
	beforeUpdate() {
		if (auth.currentUser) {
			this.displayName = auth.currentUser.displayName;
			this.email = auth.currentUser.email;
		}
	},
	methods: {
		signOut() {
			signOut(auth).then(() => {
				// user signed-out
				this.isLoggedIn = false;
			});
		},
		akaunt() {
			this.akk = !this.akk;
		},
	},
};
</script>

<style scoped>
.info-top {
	display: flex;
	justify-content: space-between;
	padding: 20px;
	position: relative;
	margin-top: 100px;
}
.left-long {
	border: none;
	background: transparent;
}
.left-long i {
	font-size: 23px;
	cursor: pointer;
}
.akk {
	position: absolute;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px 0;
	right: 80px;
	width: 300px;
	border-radius: 10px;
	background-color: rgb(204, 231, 222);
}
.icon-akk {
	width: 50px;
	height: 50px;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: darkgray;
	margin-bottom: 10px;
}
.icon-akk i {
	font-size: 23px;
}
.akk h1 {
	margin: 0;
}
.akk-och {
	width: 40px;
	background-color: aqua;
	border: 0;
	border-radius: 50%;
	cursor: pointer;
}
.akk-och i {
	font-size: 20px;
}
.container {
	display: flex;
	flex-direction: column;
	align-items: center;
}
.info-top button {
	padding: 5px;
	height: 40px;
}
form {
	display: flex;
	flex-direction: column;
	row-gap: 16px;
	max-width: 260px;
	margin: 30px auto;
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
@media (max-width: 824px) {
	.img {
		width: 400px !important;
		height: 300px !important;
	}
	.vidios a {
		font-size: 16px;
	}
}
@media (max-width: 400px) {
	.img {
		width: 300px !important;
		height: 200px !important;
	}
}
</style>
