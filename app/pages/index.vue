<template>
    <div class="relative">
        <Header />
        <div class="sticky-navbar fixed top-4 left-1/2 -translate-x-1/2 w-[1300px] h-[80px] mx-auto z-50 rounded-full bg-gray-900/90 backdrop-blur-md text-secondary flex items-center justify-between px-16 py-2">
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
        <div id="start" class="mx-14 relative z-10 start-section">
            <div class="absolute top-10 right-14">
                <InteractiveStar :src="star1"/>
            </div>
            <div class="absolute bottom-56 right-[650px]">
                <InteractiveStar :src="star2" class="w-5"/>
            </div>
            <div class="flex items-start justify-between">
                <StartImage class="ml-2" />
                <StartIcon class="absolute top-28 right-20" />
                <div class="flex flex-col items-end gap-10 py-32 px-10">
                    <div>
                        <p class="font-playfair text-8xl font-black text-primary text-end">Hii It's <span class=" text-complimentary underline"> Luxqya!</span> Your Beloved </p>
                        <p class="font-playfair text-8xl font-black text-primary text-end hero-text">3D-Modeller</p>
                    </div>
                    <div class="flex gap-32 justify-between">
                        <img :src="wip" alt="" class="w-20">
                        <ButtonsCommissionButton />
                    </div>
                </div>
            </div>
        </div>
        <img src="assets/images/bg-1.png" alt="" class="absolute left-0 w-full -mt-56 z-0">
        <div class="relative z-10 pt-[210px] text-center about-section">
            <div class="absolute top-52 right-[510px] about-anim-star1">
                <img src="assets/images/stars/white.png" alt="" class="w-12">
            </div>
            <div id="about"></div>
            <div class="absolute top-72 right-[200px] about-anim-item">
                <InteractiveStar :src="star1" class="w-12"/>
            </div>
            <div class="absolute top-64 left-[200px] about-anim-item">
                <InteractiveStar :src="star_circledwhiteblue" class="w-20"/>
            </div>
            <div class="absolute -bottom-24 left-[55px] about-anim-item z-50">
                <img src="assets/images/stars/twins.png" alt="" class="w-48">
            </div>
            <div class="absolute -bottom-56 right-[200px] about-anim-star2">
                <InteractiveStar :src="star_circledwhiteblue" class="w-20"/>
            </div>
            <p class="font-playfair text-8xl font-black text-secondary mb-10 about-anim-text">
                About Me
            </p>
            <div class="about-anim-item">
                <CardsAboutMeCard />
            </div>
        </div>
        <div id="service" class="relative mt-[500px] service-section">
            <div class="absolute -bottom-24 right-[80px] z-20 service-anim-star">
                <HoverStar :src="gif_circledprimary" size="w-44"/>
            </div>
            <CardsServicesCard/>
        </div>
        <div id="testimony" class="relative testimony-section">
            <div class="absolute top-44 left-44 testimony-anim-star">
                <InteractiveStar :src="star1" class="w-16"/>
            </div>
            <p class="mt-48 mb-16 font-playfair text-8xl font-black text-primary text-center testimony-anim-text">What They Say?</p>
            <div class="testimony-anim-item">
                <CardsTestimonyCard/>
            </div>
        </div>
        <div class="space-y-4 px-28 mt-64 bg-secondary line-section">
            <div class="h-4 w-full rounded-full bg-gradient-to-r from-complimentary to-primary line-anim-item1"></div>
            <div class="h-4 w-[85%] rounded-full bg-gradient-to-r from-complimentary to-primary line-anim-item2"></div>
            <div class="h-4 w-[75%] rounded-full bg-gradient-to-r from-complimentary to-primary line-anim-item3"></div>
        </div>
        <div id="gallery" class="relative gallery-section">
            <p class="mt-64 mb-10 font-playfair text-8xl font-black text-primary text-center gallery-anim-text">Gallery</p>
            <div class="absolute top-0 right-[550px]">
                <img src="assets/images/stars/primary.png" alt="" class="w-12">
            </div>
            <div class="absolute top-12 right-[200px]">
                <InteractiveStar :src="star1" class="w-16"/>
            </div>
            <div class="absolute top-12 left-[200px]">
                <InteractiveStar :src="star_circledblue" class="w-20"/>
            </div>
            <div class="gallery-anim-item">
                <CardsGalleryCard/>
            </div>
        </div>
        <div id="faq" class="mb-48 relative faq-section">
            <div class="absolute top-12 right-[200px]">
                <InteractiveStar :src="star1" class="w-12"/>
            </div>
            <div class="absolute -top-16 left-[150px] faq-anim-star">
                <HoverStar :src="gif_circledsecondary" size="w-44" />
            </div>
            <p class="mt-48 mb-20 font-playfair text-8xl font-black text-primary text-center faq-anim-text">Frequently Asked <br> Questions.</p>
            <div class="faq-anim-item">
                <CardsFAQCard
                    v-for="(item, i) in faqs"
                    :key="i"
                    :question="item.question"
                    :answer="item.answer"
                />
            </div>
        </div>
        <div id="contact" class="footer-section">
            <Footer />
        </div>
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
import { aboutPopupAnimation } from "~/utils/animations/aboutPopUp";
import { servicesCardAnimation } from "~/utils/animations/servicesCard";
import { testimonyCardAnimation } from "~/utils/animations/testimonyCard";
import { lineAnimation } from "~/utils/animations/lineAnimation";
import { navbarAnimation } from "~/utils/animations/navbarAnimation";
import { navbarScroll } from "~/utils/animations/navbarScroll";
import { galleryAnimation } from "~/utils/animations/galleryAnimation";
import { faqAnimation } from "~/utils/animations/faqAnimation";
import { footerAnimation } from "~/utils/animations/footerAnimation"
import { faqs } from "~/utils/faq"
import { textSwapAnimation } from "~/utils/animations/startAnimation"

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
      "Chara' Designer",
      "Painter",
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