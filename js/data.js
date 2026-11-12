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

  // Категории для фильтра в портфолио
  categories: [
    { id: "all", label: "Все" },
    { id: "edit", label: "Новости и интервью" },
    { id: "podcast", label: "Подкасты" },
    { id: "reels", label: "Reels" },
    { id: "3d", label: "3D-графика" }
  ],

  /*
    Работы. Поля:
      title    — название
      category — id из списка categories
      role     — ваша роль / что делали
      text     — короткое описание (необязательно)
      link     — ссылка на оригинал
      image    — обложка: путь к файлу (assets/img/...) или ссылка
      cover    — крупная надпись вместо обложки, если картинки нет
      badge    — жёлтая плашка на обложке (необязательно)
      youtube  — ID ролика на YouTube (то, что после watch?v=).
                 Если указан, ролик открывается прямо на сайте,
                 а обложка подставляется автоматически.
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
      title: "Студенческая работа №1 — ролик для Instagram",
      category: "reels",
      role: "Монтаж · Reels · студенческий проект",
      link: "https://www.instagram.com/reel/CvPWpdGAKFj/",
      cover: "REEL",
      badge: "9:16"
    },
    {
      title: "Студенческая работа №2 — ролик для Instagram",
      category: "reels",
      role: "Монтаж · Reels · студенческий проект",
      link: "https://www.instagram.com/reel/Ce_G51GAjOp/",
      cover: "REEL",
      badge: "9:16"
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
