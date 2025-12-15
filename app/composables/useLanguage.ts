export const useLanguage = () => {
  const currentLang = useState<"en" | "id">("currentLang", () => "en")

  const translations = {
    en: {
      name: "Name",
      call: "You can call me",
      birthday: "Birthday",
      language: "Languages",
      language1: "Indonesian, English, a bit of German",
      get_to_know_me: "I'm an Digital artist who loves visual art, games, vtuber and soon to be vtuber mama. I'm passionate about creating expressive projects, exploring new ideas, and still finding a way to improving my skills.",
      like: "Art, coding, open worlds, music, and peaceful rainy vibes. I love exploring new ideas and creating things that inspire others.",
      dislike: "Loud chaotic places, unnecessary drama, and being rushed. I prefer calm and meaningful moments.",
      hobby: "I'd like to spend my time doing. . .",
      hobby1: "I love drawing, creating digital art, playing guitar, working out, and exploring programming projects. I enjoy anything that lets me improve and express myself.",
      games: "Current Favorite Games:",

      copyrights: 
      {
        header: "1. Copyrights",
        one: "Using my artworks for AI or NFTs are PROHIBITED.",
        two: "I have my own copyrights for my artworks, including advertising, portfolios, printing etc.",
        three: "Credit me if you want to share my artworks publicly.",
      },
      payment: 
      {
        header: "2. Payment",
        one: "I will only proceed with the workflow after receiving an upfront payment of 50% of the total price. However, if you request me through VGEN, a full upfront payment is required.",
        two: "After the final draft (sketch/lineart) is approved by the client, I will only continue the process once the full payment has been completed.",
        three: "Payment method for local (Indonesia): Gopay.",
        four: "Payment method for international buyers: VGEN / Ko-fi only.",
        five: "No refunds allowed. Please spend carefully.",
      },
      pricing: 
      {
        header: "3. Pricing",
        one: "The price listed are for personal use only.",
        two: "Commercial use is 2x the total price.",
        three: "Merchandise or Fan-merch or Profit use is 3x the total price.",
        four: "NDA (Non-Disclosure Agreement) fees are 2x the total price.",
        five: "By purchasing a commission, the client agrees to the possibility of additional fees being added by the artist",
      },
    },
    id: {
      name: "Nama",
      call: "Biasa dipanggil",
      birthday: "Tanggal Lahir",
      language: "Bahasa",
      language1: "Indonesia, Inggris, Jerman sikit sikit",
      get_to_know_me: "Aku adalah seorang digital artist yang menyukai seni visual, game, vtuber, dan (nantinya) akan menjadi vtuber mama. Aku bersemangat dalam menciptakan karya yang ekspresif, mengeksplorasi ide-ide baru, dan masih terus mencari cara untuk meningkatkan skill-ku.",
      like: "Seni, coding, game open-world, musik, dan suasana hujan yang tenang. Aku suka mengeksplorasi ide baru dan menciptakan hal-hal yang bisa menginspirasi orang lain.",
      dislike: "Tempat yang bising dan kacau, drama yang tidak perlu, serta hal-hal yang serba terburu-buru. Aku lebih menyukai momen yang tenang dan bermakna.",
      hobby: "Aku suka menghabiskan waktuku dengan. . .",
      hobby1: "Aku suka menggambar, membuat digital art, bermain gitar, berolahraga, dan mengeksplorasi proyek programming. Aku menikmati hal-hal yang membantuku berkembang dan mengekspresikan diri.",
      games: "Lagi kecanduan:",

      copyrights: 
      {
        header: "1. Hak Cipta",
        one: "Penggunaan karya aku untuk AI atau NFT DILARANG.",
        two: "Aku memiliki hak cipta penuh atas karya-karyaku, termasuk untuk keperluan iklan, portofolio, percetakan, dan lainnya.",
        three: "Mohon cantumkan kredit jika ingin membagikan karya aku secara publik.",
      },
      payment: 
      {
        header: "2. Pembayaran",
        one: "Aku hanya akan memulai proses pengerjaan setelah menerima pembayaran awal sebesar 50% dari total harga. Namun, jika kamu memesan melalui VGEN, pembayaran penuh di muka wajib dilakukan.",
        two: "Setelah draft akhir (sketsa/lineart) disetujui oleh klien, aku akan melanjutkan proses hanya setelah pembayaran penuh diterima.",
        three: "Metode pembayaran untuk lokal (Indonesia): Gopay.",
        four: "Metode pembayaran untuk pembeli internasional: VGEN / Ko-fi saja.",
        five: "Tidak ada pengembalian dana. Mohon pertimbangkan dengan baik sebelum memesan.",
      },
      pricing: 
      {
        header: "3. Harga",
        one: "Harga yang tertera hanya untuk penggunaan pribadi.",
        two: "Penggunaan komersial dikenakan biaya 2x dari total harga.",
        three: "Penggunaan untuk merchandise, fan-merch, atau tujuan profit dikenakan biaya 3x dari total harga.",
        four: "Biaya NDA (Non-Disclosure Agreement) adalah 2x dari total harga.",
        five: "Dengan melakukan pemesanan commission, klien menyetujui kemungkinan adanya biaya tambahan yang ditetapkan oleh artist.",
      },
    },
  }

  const t = (key: keyof typeof translations["en"]) => {
    return translations[currentLang.value][key]
  }

  const setLang = (lang: "en" | "id") => {
    currentLang.value = lang
  }

  return {
    currentLang,
    t,
    setLang,
  }
}
