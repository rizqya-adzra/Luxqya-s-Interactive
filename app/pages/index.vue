<template>
    <div class="relative">
        <Header />
        <HeaderMobile />
        <div class="hidden lg:flex sticky-navbar fixed top-3 left-1/2 -translate-x-1/2 w-[1300px] h-[70px] mx-auto z-50 rounded-full bg-gray-900/40 backdrop-blur-lg text-secondary items-center justify-between px-16 py-2">
            <button class="font-playfair font-black text-2xl" @click="navbarScroll('start')">LUXQYA</button>
            <div class="flex gap-5">
                <ButtonsNav1Button class="text-secondary" buttonName="About Me" @click="navbarScroll('about')"/>
                <ButtonsNav1Button class="text-secondary" buttonName="Service" @click="navbarScroll('service')"/>
                <ButtonsNav1Button class="text-secondary" buttonName="Testimony" @click="navbarScroll('testimony')"/>
                <ButtonsNav1Button class="text-secondary" buttonName="Gallery" @click="navbarScroll('gallery')"/>
                <ButtonsNav1Button class="text-secondary" buttonName="FAQ" @click="navbarScroll('faq')"/>
            </div>
            <a  href="https://trello.com/b/4dYYaxuy/luxqyas-commissions-list"
                class="bg-primary hover:bg-secondary px-5 py-4 flex transition-all duration-300 font-poppins font-black text-secondary hover:text-primary rounded-full"
            >
                Work Queue
            </a>
        </div>
        <section id="start" class="mx-4 sm:mx-8 lg:mx-14 relative z-10 start-section">
            <div class="hidden lg:block absolute top-10 right-14">
                <InteractiveStar :src="star1" class="hidden md:block" />
            </div>
            <div class="hidden lg:block absolute bottom-64 right-[650px]">
                <InteractiveStar :src="star2" class="w-10 hidden md:block" />
            </div>
            <div class="flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between">
                <StartImage class="mb-10 -mt-20 lg:-mt-0 lg:mb-0 lg:ml-2" />
                <StartIcon class="absolute -top-2 right-20 md:right-24 lg:top-28 lg:right-20" />
                <div class="flex flex-col items-center lg:items-end gap-8 lg:gap-10 pt-20 pb-7 lg:py-32 px-4 sm:px-6 lg:px-7">
                    <div class="text-center lg:text-end">
                        <p class="font-playfair font-black text-primary text-5xl md:text-6xl lg:text-8xl"> Hii It's <span class="text-complimentary underline"> Luxqya! </span> Your Beloved </p>
                        <div class="text-mask">
                            <p class="font-playfair font-black text-primary hero-text text-5xl md:text-6xl lg:text-8xl">3D-Modeller</p>
                        </div>
                    </div>
                    <ButtonsCommissionButton />
                </div>
            </div>
        </section>
        <section class="relative w-full text-center">
            <div class="absolute top-28 md:top-0 w-full h-full z-0 pointer-events-none">
                <picture>
                    <source 
                        media="(max-width: 767px)" 
                        srcset="assets/images/bg-1-mobile.png"
                    >
                    <img 
                        src="assets/images/bg-1.png" 
                        alt="" 
                        class="absolute top-0 left-1/2 -translate-x-1/2 max-w-none 
                            w-full md:w-[170%] lg:w-full 
                            -mt-32 lg:-mt-56"
                    >
                </picture>
            </div>
            <div class="relative z-10 pt-[110px] md:pt-[180px] lg:pt-[210px] about-section">
                <div class="absolute top-52 right-[510px] about-anim-star1">
                    <img src="assets/images/stars/white.png" alt="" class="w-12 hidden md:block">
                </div>
                <div id="about"></div>
                <div class="absolute top-64 right-[200px] about-anim-item z-20">
                    <InteractiveStar :src="star1" class="w-12 hidden md:block"/>
                </div>
                <div class="absolute top-54 left-[200px] about-anim-item z-20">
                    <InteractiveStar :src="star_circledwhiteblue" class="w-20 hidden md:block"/>
                </div>
                <div class="absolute -bottom-24 left-[55px] about-anim-item z-20">
                    <img src="assets/images/stars/twins.png" alt="" class="w-48 hidden md:block">
                </div>
                <div class="absolute -bottom-56 right-[200px] about-anim-star2 z-20">
                    <InteractiveStar :src="star_circledwhiteblue" class="w-20 hidden md:block"/>
                </div>
                <p class="hidden md:block font-playfair text-5xl md:text-6xl lg:text-8xl font-black text-[#FFFAF0] mb-10 about-anim-text">
                    About Me
                </p>
                <div class="about-anim-item px-2 lg:px-0">
                    <CardsAboutMeCard />
                </div>
            </div>
        </section>
        <section id="service" class="relative mt-56 md:mt-96 lg:mt-[500px] service-section">
            <div class="absolute -bottom-14 md:right-[20px] lg:-bottom-10 right-[80px] z-20 service-anim-star">
                <HoverStar :src="gif_circledprimary" size="w-44" class="hidden md:block"/>
            </div>
            <CardsServicesCard/>
        </section>
        <section id="testimony" class="relative testimony-section">
            <div class="absolute top-44 left-44 testimony-anim-star z-20">
                <InteractiveStar :src="star1" class="w-16 hidden md:block"/>
            </div>
            <p class="mt-32 font-playfair text-5xl md:text-6xl lg:text-8xl font-black text-primary text-center testimony-anim-text">What They Say?</p>
            <div class="testimony-anim-item">
                <CardsTestimonyCard/>
            </div>
        </section>
        <section class="space-y-4 px-5 md:px-28 mt-32 bg-secondary line-section">
            <div class="h-4 w-full rounded-full bg-gradient-to-r from-complimentary to-primary line-anim-item1"></div>
            <div class="h-4 w-[85%] rounded-full bg-gradient-to-r from-complimentary to-primary line-anim-item2"></div>
            <div class="h-4 w-[75%] rounded-full bg-gradient-to-r from-complimentary to-primary line-anim-item3"></div>
        </section>
        <section id="gallery" class="relative gallery-section">
            <p class="mt-32 md:mb-1 lg:mb-10 font-playfair text-5xl md:text-6xl lg:text-8xl font-black text-primary text-center gallery-anim-text">Gallery</p>
            <div class="absolute top-0 right-[550px]">
                <img src="assets/images/stars/primary.png" alt="" class="w-12">
            </div>
            <div class="absolute top-12 right-[200px]">
                <InteractiveStar :src="star1" class="w-16 hidden lg:block"/>
            </div>
            <div class="absolute top-12 left-[200px]">
                <InteractiveStar :src="star_circledblue" class="w-20 hidden lg:block"/>
            </div>
            <div class="gallery-anim-item">
                <CardsGalleryCard/>
            </div>
        </section>
        <section id="faq" class="mb-20 relative faq-section">
            <div class="absolute top-12 right-[200px] z-20">
                <InteractiveStar :src="star1" class="w-12 hidden lg:block"/>
            </div>
            <div class="absolute -top-16 left-[150px] faq-anim-star z-20">
                <HoverStar :src="gif_circledsecondary" size="w-44 hidden lg:block" />
            </div>
            <p class="mt-24 lg:mt-36 mb-10 md:mb-20 font-playfair text-5xl md:text-6xl lg:text-8xl font-black text-primary text-center faq-anim-text">Frequently Asked <br> Questions.</p>
            <div class="faq-anim-item">
                <CardsFAQCard
                    v-for="(item, i) in faqs"
                    :key="i"
                    :question="item.question"
                    :answer="item.answer"
                />
            </div>
        </section>
        <section id="contact" class="footer-section">
            <Footer />
        </section>
    </div>
</template> 

<script setup>
import star1 from "~/assets/images/stars/bluegradient-1.png"
import star2 from "~/assets/images/stars/bluegradient-2.png"
import star_white from "~/assets/images/stars/white.png"
import star_circledwhiteblue from "~/assets/images/stars/circledwhiteblue.png"
import star_circledblue from "~/assets/images/stars/circledblue.png"
import star_circledprimary from "~/assets/images/stars/circledprimary.png"
import wip from "~/assets/images/wip.png"
import gif_circledprimary from "~/assets/gif/red_circledstar.gif"
import gif_circledsecondary from "~/assets/gif/blue_circledstar.gif"
import { onMounted } from "vue";
import { aboutPopupAnimation } from "~/composables/animations/aboutPopUp";
import { servicesCardAnimation } from "~/composables/animations/servicesCard";
import { testimonyCardAnimation } from "~/composables/animations/testimonyCard";
import { lineAnimation } from "~/composables/animations/lineAnimation";
import { navbarAnimation } from "~/composables/animations/navbarAnimation";
import { navbarScroll } from "~/composables/animations/navbarScroll";
import { galleryAnimation } from "~/composables/animations/galleryAnimation";
import { faqAnimation } from "~/composables/animations/faqAnimation";
import { footerAnimation } from "~/composables/animations/footerAnimation"
import { faqs } from "~/utils/faq"
import { textSwapAnimation } from "~/composables/animations/startAnimation"

onMounted(() => {
  aboutPopupAnimation();
  servicesCardAnimation();
  testimonyCardAnimation();
  lineAnimation();
  navbarAnimation();
  galleryAnimation();
  faqAnimation();
  footerAnimation()
  textSwapAnimation(".hero-text", [
      "Digital Artist",
      "Designer",
      "Vtuber Artist",
      "3D-Modeller",
  ], {
    duration: 1,
    delay: 2,
    loop: true,
    scrollTrigger: true,
    trigger: ".hero-section",
  });
});
</script>

<style>
.text-mask {
  overflow: hidden;
}

.hero-text {
  display: block;
  line-height: 1.3;
}
</style>