/*
  Всё, что чаще всего придётся менять, лежит в этом файле:
  контакты и список работ. Остальной текст — в index.html.
*/

const SITE = {
  // Контакты. Пустая строка = кнопка не показывается.
  contacts: {
    email: "hova22234@gmail.com",
    phone: "+7 778 812 94 06",
    whatsapp: "77788129406",      // номер без «+» и пробелов
    telegram: "Chesnochii",       // ник без «@»
    behance: "https://www.behance.net/yashakadirov",
    youtube: "",                  // ссылка на личный YouTube-канал
    instagram: ""                 // ссылка на профиль
  },

  // Два больших блока в разделе «Работы»
  groups: [
    { id: "video", label: "Видео", note: "Ролики открываются прямо на сайте" },
    { id: "image", label: "Графика и 3D", note: "Изображения открываются в полном размере" }
  ],

  /*
    Категории: кнопки фильтра и подзаголовки внутри блоков.
      group    — в каком блоке показывать: "video" или "image"
      vertical — true для вертикальных роликов (Reels, Shorts)
      note     — подпись под названием категории (необязательно)
      link     — ссылка рядом с названием (необязательно)
  */
  categories: [
    { id: "edit", label: "Новости и интервью", group: "video" },
    { id: "youtube", label: "YouTube-шоу", group: "video" },
    { id: "podcast", label: "Подкасты", group: "video" },
    { id: "ai", label: "ИИ-видео", group: "video", vertical: true,
      note: "Мой канал Tiny Bone: ролики созданы с помощью нейросетей",
      link: "https://www.youtube.com/@TinyBonesss", linkLabel: "Открыть канал" },
    { id: "reels", label: "Reels", group: "video", vertical: true },
    { id: "3d", label: "3D-графика", group: "image",
      link: "https://www.behance.net/yashakadirov", linkLabel: "Все работы на Behance" }
  ],

  /*
    Работы. Поля:
      title    — название
      category — id из списка categories
      role     — ваша роль / что делали
      text     — короткое описание (необязательно)
      link     — ссылка на оригинал
      image    — обложка: путь к файлу (assets/img/...) или ссылка
      youtube  — ID ролика на YouTube (то, что после watch?v=).
                 Ролик открывается прямо на сайте, обложка подставляется сама.
      video    — путь к своему видеофайлу (assets/video/...), играет на сайте
      cover    — крупная надпись вместо обложки, если картинки нет
      badge    — жёлтая плашка на обложке (необязательно)
      wide     — true, чтобы карточка была крупной
  */
  projects: [
    {
      title: "Orda — новостной YouTube-канал",
      category: "edit",
      role: "Главный монтажёр, август 2024 — декабрь 2025",
      text: "Все новостные выпуски канала — 5 в неделю, а также подкасты, репортажи и сюжеты. Горизонтальные версии для YouTube и вертикальные для Shorts и Reels.",
      link: "https://www.youtube.com/@ORDANews",
      cover: "ORDA",
      badge: "5 выпусков в неделю",
      wide: true
    },
    {
      title: "Большое интервью с Наташей Калымбетовой — ORDA News",
      category: "edit",
      role: "Монтаж · 2 ч 19 мин · 960+ тыс. просмотров",
      youtube: "XG5ZNJyx3aI"
    },
    {
      title: "Паводки в Казахстане: Петропавловск и Атырау — ORDA News",
      category: "edit",
      role: "Монтаж · 13 мин · 1,1 млн просмотров",
      youtube: "vlIYeRpZ2z0"
    },
    {
      title: "«Неугомонные детки» #2 — подкаст kirkiimad и nowkie",
      category: "podcast",
      role: "Монтаж · 1 ч 40 мин · 48 тыс. просмотров",
      youtube: "7mLnyXK13Vc"
    },
    {
      title: "«Суровый веб» #233 — подкаст uWebDesign",
      category: "podcast",
      role: "Монтаж · 2 ч 05 мин",
      youtube: "coTwuCsYIc0"
    },
    {
      title: "«Битва матерей»: дедовщина в армии Казахстана — ORDA News",
      category: "edit",
      role: "Монтаж",
      youtube: "eNVY-Y06nsI"
    },
    {
      title: "Третий лишний в Backrooms — канал «Даня Кортиз»",
      category: "youtube",
      role: "Монтаж · 22 мин · 600+ тыс. просмотров",
      youtube: "l46SkTXdZz4"
    },
    {
      title: "Новые адские уровни (Super Bunny Man) — канал «Даня Кортиз»",
      category: "youtube",
      role: "Монтаж · 18 мин · 120+ тыс. просмотров",
      youtube: "yd2GJTasJNY"
    },
    {
      title: "Новые уровни, старые мы — канал «Это Веталя»",
      category: "youtube",
      role: "Монтаж",
      youtube: "RuDlS3uxaFw"
    },
    {
      title: "«От души подкаст» — гость Qewbite, канал Little Rock",
      category: "podcast",
      role: "Монтаж · 1 ч 04 мин",
      youtube: "oXpeH3Bv80w"
    },
    {
      title: "What if you have an unlimited card?",
      category: "ai",
      role: "Сделано с помощью ИИ · Tiny Bone",
      youtube: "C6vsuhZfnqA",
      badge: "ИИ"
    },
    {
      title: "What if you woke up in the USSR?",
      category: "ai",
      role: "Сделано с помощью ИИ · Tiny Bone",
      youtube: "oijVkqwvZ1Q",
      badge: "ИИ"
    },
    {
      title: "You've entered your favorite anime",
      category: "ai",
      role: "Сделано с помощью ИИ · Tiny Bone",
      youtube: "zFd6UJR8QV8",
      badge: "ИИ"
    },
    {
      title: "How to survive in the Kaiju world?",
      category: "ai",
      role: "Сделано с помощью ИИ · Tiny Bone",
      youtube: "4jPgqjtfq08",
      badge: "ИИ"
    },
    {
      title: "Студенческая работа — «Бизнес в UIB»",
      category: "reels",
      role: "Монтаж и графика · Reels для UIB",
      link: "https://www.instagram.com/reel/CvPWpdGAKFj/",
      image: "assets/img/reel-uib-business.jpg"
    },

    {
      title: "Студенческая работа — «Хочу грант», UNICON",
      category: "reels",
      role: "Монтаж и графика · Reels для UIB",
      link: "https://www.instagram.com/reel/Cj5O4TLgLuI/",
      image: "assets/img/reel-uib-grant.jpg"
    },
    {
      title: "Студенческая работа — «Сдать документы»",
      category: "reels",
      role: "Монтаж и графика · Reels для UIB",
      link: "https://www.instagram.com/reel/Ce_G51GAjOp/",
      image: "assets/img/reel-uib-documents.jpg"
    },
    {
      title: "Студенческая работа — «UIB-шный Санта»",
      category: "reels",
      role: "Монтаж и графика · Reels для UIB",
      link: "https://www.instagram.com/tv/CYHExI9Nl5a/",
      image: "assets/img/reel-uib-santa.jpg"
    },

    // Пример ролика с YouTube — раскомментируйте и подставьте свой ID:
    // {
    //   title: "Название выпуска",
    //   category: "edit",
    //   role: "Монтаж, графика, звук",
    //   youtube: "XXXXXXXXXXX"
    // },

    { title: "What game do you associate with this atmosphere?", category: "3d", role: "3D-графика", link: "https://www.behance.net/gallery/149601623/What-game-do-you-associate-with-this-atmosphere", image: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/96ee58149601623.Y3JvcCwxMzgwLDEwODAsMjcwLDA.png" },
    { title: "Can I eat at your place?", category: "3d", role: "3D-графика", link: "https://www.behance.net/gallery/149488497/Can-I-eat-at-your-place", image: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/6ef918149488497.Y3JvcCwxOTk5LDE1NjQsMCwyMTc.png" },
    { title: "Cyberpunk alley", category: "3d", role: "3D-графика", link: "https://www.behance.net/gallery/149253449/cyberpunk-alley", image: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/73ba07149253449.Y3JvcCwxOTk5LDE1NjQsMCwyMTc.png" },
    { title: "Inflatable duck", category: "3d", role: "3D-графика", link: "https://www.behance.net/gallery/149311931/Inflatable-duck", image: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/589f79149311931.Y3JvcCwxOTk5LDE1NjQsMCwyMTc.png" },
    { title: "Pixel isometry", category: "3d", role: "3D-графика", link: "https://www.behance.net/gallery/148570819/PIXEL-ISOMETRY", image: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/4a5ec2148570819.Y3JvcCwxOTk5LDE1NjQsMCwyMTc.png" },
    { title: "Come along with me to a town beside the sea", category: "3d", role: "3D-графика", link: "https://www.behance.net/gallery/149820971/Come-along-with-me-To-a-town-beside-the-sea", image: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/52a1ca149820971.Y3JvcCwxOTk5LDE1NjQsMCwyMTc.png" },
    { title: "All hands on deck", category: "3d", role: "3D-графика", link: "https://www.behance.net/gallery/148321401/All-hands-on-deck", image: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/4eada9148321401.Y3JvcCwxOTk5LDE1NjQsMCwyMTc.png" },
    { title: "Abandoned tree house in the fall", category: "3d", role: "3D-графика", link: "https://www.behance.net/gallery/148482893/Abandoned-tree-house-in-the-fall", image: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/de6b6c148482893.Y3JvcCwxOTk5LDE1NjQsMCwyMTc.png" },
    { title: "Arsenal of Jinks", category: "3d", role: "3D-графика", link: "https://www.behance.net/gallery/148071691/Arsenal-of-Jinks", image: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/f56bcc148071691.Y3JvcCwxOTk5LDE1NjQsMCwyMTc.png" },
    { title: "Plasticine frog", category: "3d", role: "3D-графика", link: "https://www.behance.net/gallery/147597181/PLASTICINE-FROG", image: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/486a1e147597181.Y3JvcCwxOTk5LDE1NjQsMCwyMTc.png" },
    { title: "Interior (without rendering)", category: "3d", role: "3D-графика", link: "https://www.behance.net/gallery/147661425/Interior-(Without-rendering)", image: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/4f50c0147661425.Y3JvcCw5NzQsNzYyLDE5NSww.png" },
    { title: "Plasticine cucumber", category: "3d", role: "3D-графика", link: "https://www.behance.net/gallery/147671833/Plasticine-cucumber", image: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/743f79147671833.Y3JvcCwxOTk5LDE1NjQsMCwyMTc.png" }
  ]
};
