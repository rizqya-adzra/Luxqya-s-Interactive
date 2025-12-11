<template>
    <div class="relative">
        <div class="mx-14 relative z-10">
            <div class="absolute top-20 right-[730px]">
                <img :src="wip" class="w-20"/>
            </div>
            <div class="absolute top-20 right-14">
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
        <img src="assets/images/bg-1.png" alt="" class="absolute left-0 w-full -mt-60 z-0">
        <div class="relative z-10 pt-[210px] text-center"> 
            <div class="absolute top-52 right-[510px]">
                <img src="assets/images/stars/white.png" alt="" class="w-12">
            </div>
            <div class="absolute top-72 right-[200px]">
                <InteractiveStar :src="star1" class="w-12"/>
            </div>
            <div class="absolute top-64 left-[200px]">
                <InteractiveStar :src="star_circledwhiteblue" class="w-20"/>
            </div>
            <div class="absolute -bottom-24 left-[55px]">
                <img src="assets/images/stars/twins.png" alt="" class="w-48">
            </div>
            <div class="absolute -bottom-36 right-[200px]">
                <InteractiveStar :src="star_circledwhiteblue" class="w-20"/>
            </div>
            <p class="font-playfair text-8xl font-black text-secondary mb-16">About Me</p>
            <CardsAboutMeCard />
        </div>
        <div class="relative mt-[500px]">
            <div class="absolute -bottom-24 right-[80px] z-20">
                <HoverStar :src="gif_circledprimary" size="w-44"/>
            </div>
            <CardsServicesCard/>
        </div>
        <div class="relative">
            <div class="absolute top-44 left-44">
                <InteractiveStar :src="star1" class="w-16"/>
            </div>
            <p class="mt-48 mb-16 font-playfair text-8xl font-black text-primary text-center">What They Say?</p>
            <CardsTestimonyCard/>
        </div>
        <div class="space-y-4 px-28 mt-48 bg-secondary">
            <div class="h-4 w-full rounded-full bg-gradient-to-r from-complimentary to-primary"></div>
            <div class="h-4 w-[85%] rounded-full bg-gradient-to-r from-complimentary to-primary"></div>
            <div class="h-4 w-[75%] rounded-full bg-gradient-to-r from-complimentary to-primary"></div>
        </div>
        <div class="relative">
            <p class="mt-48 mb-10 font-playfair text-8xl font-black text-primary text-center">Gallery</p>
            <div class="absolute top-0 right-[550px]">
                <img src="assets/images/stars/primary.png" alt="" class="w-12">
            </div>
            <div class="absolute top-12 right-[200px]">
                <InteractiveStar :src="star1" class="w-16"/>
            </div>
            <div class="absolute top-12 left-[200px]">
                <InteractiveStar :src="star_circledblue" class="w-20"/>
            </div>
            <CardsGalleryCard/>
        </div>
        <div class="mb-44 relative">
            <div class="absolute top-12 right-[200px]">
                <InteractiveStar :src="star1" class="w-12"/>
            </div>
            <div class="absolute -top-16 left-[150px]">
                <HoverStar :src="gif_circledsecondary" size="w-44" />
            </div>
            <p class="mt-48 mb-20 font-playfair text-8xl font-black text-primary text-center">Frequently Asked <br> Questions.</p>
            <CardsFAQCard
                v-for="(item, i) in faqs"
                :key="i"
                :question="item.q"
                :answer="item.a"
            />
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

const faqs = [
  { q: "Bagaimana cara memesan?", a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatges. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatges. Lorem ipsum dolor sit amet, consectetur adipiscing elit," },
  { q: "Berapa lama proses pengerjaan?", a: "Rata-rata 3–7 hari tergantung antrian." },
  { q: "Apakah revisi diperbolehkan?", a: "Boleh, maksimal 2 kali revisi kecil." },
  { q: "Apakah revisi diperbolehkan?", a: "Boleh, maksimal 2 kali revisi kecil." },
  { q: "Apakah revisi diperbolehkan?", a: "Boleh, maksimal 2 kali revisi kecil." },
];
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
