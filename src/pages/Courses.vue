<template>
	<div class="courses-page-container">
		<div class="courses-page-header-container">
			<img class="courses-page-header-image-left" src="../assets/courses/courses-left.svg" alt="">
			<img class="courses-page-header-image-right" src="../assets/courses/courses-right.svg" alt="">
			<img class="courses-page-header-image-left-tablet" src="../assets/courses/courses-left-tablet.svg" alt="">
			<img class="courses-page-header-image-right-tablet" src="../assets/courses/courses-right-tablet.svg" alt="">
			<HeaderTitle class="courses-page-header-title-wrapper">
				Курсы
				<TextBabel class="courses-page-header-text-babel-wrapper" text="Coursos"/>
			</HeaderTitle>
		</div>
		<div class="courses-page-body-container">
			<CourseCard class="courses-page-course-wrapper" v-for="(course, index) in courses"
						:key="index"
						link="/contacts"
						:title="course.name"
						:description="course.description"
						:image="course.photo"
						:icons="course.icons"
						:duration-description="course.durationInfo"
						:price-description="course.price"
						:discount-value="course.discountPercent"
			/>
		</div>
	</div>
</template>

<script>
	
	import HeaderTitle from "../components/HeaderTitle";
	import TextBabel from "../components/TextBabel";
    import CourseCard from '../components/CourseCard.vue'
    import Service from "../service";
	
    export default {
        name: "Courses",
		components: {
            HeaderTitle,
            TextBabel,
			CourseCard
		},
        filters: {
            formatDiscountMessage(value)
            {
                if(!value) return '';
                return "Скидка " + value.toString() + "%";
            }
        },
        data() {
            return {
                courses: {}
            }
        },
        mounted() {
            Service.get("courses", (status, data) => {
                this.courses = data;
            })
        }
    }
</script>

<style scoped>
	
	.courses-page-header-container {
		height: 50rem;
		position: relative;
		background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(255, 239, 170, 0.3) 55%);
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	
	.courses-page-header-image-left {
		position: absolute;
		left: 0;
		bottom: 7rem;
	}
	
	.courses-page-header-image-left-tablet {
		position: absolute;
		left: 0;
		bottom: 0;
		display: none;
	}
	
	.courses-page-header-image-right {
		position: absolute;
		right: 0;
		bottom: 0;
	}
	
	.courses-page-header-image-right-tablet {
		position: absolute;
		right: 0;
		bottom: 0;
		display: none;
	}
	
	.courses-page-header-title-wrapper {
		position: relative;
		width: 30rem;
		margin-top: 25rem;
	}
	
	.courses-page-header-text-babel-wrapper {
		position: absolute;
		top: -4rem;
		left: 20rem;
	}
	
	.courses-page-body-container {
		display: flex;
		flex-wrap: wrap;
		margin-top: -10.5rem;
		align-items: center;
		justify-content: center;
	}
	
	.courses-page-course-wrapper {
		margin: 3.5rem 2rem;
	}

	@media screen and (max-width: 1280px) {

		.courses-page-header-container {
			height: 38rem;
		}
		
		.courses-page-header-title-wrapper {
			margin-top: 20rem;
		}
		
		.courses-page-header-text-babel-wrapper {
			top: -3.5rem;
			left: 18rem;
		}
		
		.courses-page-header-image-left {
			display: none;
		}

		.courses-page-header-image-left-tablet {
			display: block;
		}

		.courses-page-header-image-right {
			display: none;
		}
		
		.courses-page-header-image-right-tablet {
			display: block;
		}
		
	}

	@media screen and (max-width: 760px) {

		.courses-page-header-container {
			height: 30rem;
		}

		.courses-page-header-title-wrapper {
			margin-top: 18rem;
		}

		.courses-page-header-text-babel-wrapper {
			left: 16rem;
		}
		
		.courses-page-header-image-left-tablet {
			display: none;
		}
		
		.courses-page-header-image-right-tablet {
			display: none;
		}

		.courses-page-course-wrapper {
			margin: 2.5rem 2rem;
		}
		
	}

</style>