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
            <div class="absolute top-16 right-14">
                <InteractiveStar :src="star1"/>
            </div>
            <div class="absolute bottom-36 right-[650px]">
                <InteractiveStar :src="star2" class="w-10"/>
            </div>
            <div class="flex items-start">
                <img src="assets/images/Main Image.png" alt="" class="w-[77vh]">
                <div class="flex flex-col items-end gap-10 py-44 px-7">
                    <p class="font-playfair text-8xl font-black text-primary">Hii, It's <span class="underline-gradient-dotted">Luxqya!</span></p>
                    <p class="font-poppins text-end text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                    <a href="https://vgen.co/luxqya_ra" class="border-4 border-primary hover:bg-primary rounded-lg px-7 py-3 font-poppins font-black text-primary hover:text-secondary transition-all duration-300">
                        Commission Me!
                    </a>
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

onMounted(() => {
  aboutPopupAnimation();
  servicesCardAnimation();
  testimonyCardAnimation();
  lineAnimation();
  navbarAnimation();
  galleryAnimation();
  faqAnimation();
  footerAnimation()
});
</script>

<style>
.underline-gradient-dotted {
  position: relative;
  display: inline-block;
}

.underline-gradient-dotted::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -15px; 
  height: 14px; 
  background-image: 
    radial-gradient(circle, #E24050 30%, transparent 30%),
    radial-gradient(circle, #D8686B 30%, transparent 30%),
    radial-gradient(circle, #C47A7E 30%, transparent 30%),
    radial-gradient(circle, #B8898C 30%, transparent 30%),
    radial-gradient(circle, #A49AA1 30%, transparent 30%),
    radial-gradient(circle, #8C8C9A 30%, transparent 30%),
    radial-gradient(circle, #6F9FA3 30%, transparent 30%),
    radial-gradient(circle, #4EA9AB 30%, transparent 30%),
    radial-gradient(circle, #2CB2AD 30%, transparent 30%),
    radial-gradient(circle, #00B7AC 30%, transparent 30%),
    radial-gradient(circle, #00AFAA 30%, transparent 30%),
    radial-gradient(circle, #009DA8 30%, transparent 30%),
    radial-gradient(circle, #009DA8 30%, transparent 30%);
  
  background-size: 30px 30px;
  background-repeat: no-repeat;
  background-position:
    0    50%,
    26px 50%,
    52px 50%,
    78px 50%,
    104px 50%,
    130px 50%,  
    156px 50%,
    234px 50%,
    260px 50%,
    286px 50%,
    312px 50%;
}
</style>
