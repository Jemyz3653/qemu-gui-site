// ==== Переводы ====
const translations = {
  ru: {
    title: "QEMU Manager GUI",
    subtitle: "Open Source проект | By: <a href='https://github.com/Jemyz3653/QEMU-Manager-GUI'>Jemyz36</a>",
    download_title: "Скачать",
    btn_exe: "⬇ Windows (EXE)",
    btn_src: "💻 Исходники (Python)",
    btn_icon: "🖼 Иконка",
    donate_title: "Поддержать проект",
    donate_desc: "Вы можете помочь развитию через Donation Alerts:",
    donate_btn: "Задонатить",
    footer: "© 2025 QEMU Manager GUI | Open Source | By: Jemyz36"
  },
  en: {
    title: "QEMU Manager GUI",
    subtitle: "Open Source project | By: <a href='https://github.com/Jemyz3653/QEMU-Manager-GUI'>Jemyz36</a>",
    download_title: "Download",
    btn_exe: "⬇ Windows (EXE)",
    btn_src: "💻 Source Code (Python)",
    btn_icon: "🖼 Icon",
    donate_title: "Support project",
    donate_desc: "You can support via Donation Alerts:",
    donate_btn: "Donate",
    footer: "© 2025 QEMU Manager GUI | Open Source | By: Jemyz36"
  },
  es: {
    title: "QEMU Manager GUI",
    subtitle: "Proyecto de código abierto | By: <a href='https://github.com/Jemyz3653/QEMU-Manager-GUI'>Jemyz36</a>",
    download_title: "Descargar",
    btn_exe: "⬇ Windows (EXE)",
    btn_src: "💻 Código fuente (Python)",
    btn_icon: "🖼 Icono",
    donate_title: "Apoyar proyecto",
    donate_desc: "Puedes apoyar el desarrollo vía Donation Alerts:",
    donate_btn: "Donar",
    footer: "© 2025 QEMU Manager GUI | Código Abierto | By: Jemyz36"
  },
  zh: {
    title: "QEMU 管理器 GUI",
    subtitle: "开源项目 | By: <a href='https://github.com/Jemyz3653/QEMU-Manager-GUI'>Jemyz36</a>",
    download_title: "下载",
    btn_exe: "⬇ Windows (EXE)",
    btn_src: "💻 源代码 (Python)",
    btn_icon: "🖼 图标",
    donate_title: "支持项目",
    donate_desc: "您可以通过 Donation Alerts 支持开发：",
    donate_btn: "捐赠",
    footer: "© 2025 QEMU Manager GUI | 开源项目 | By: Jemyz36"
  },
  ja: {
    title: "QEMU マネージャー GUI",
    subtitle: "オープンソースプロジェクト | By: <a href='https://github.com/Jemyz3653/QEMU-Manager-GUI'>Jemyz36</a>",
    download_title: "ダウンロード",
    btn_exe: "⬇ Windows (EXE)",
    btn_src: "💻 ソースコード (Python)",
    btn_icon: "🖼 アイコン",
    donate_title: "プロジェクトを支援",
    donate_desc: "Donation Alerts で支援できます:",
    donate_btn: "寄付する",
    footer: "© 2025 QEMU Manager GUI | オープンソース | By: Jemyz36"
  },
  de: {
    title: "QEMU Manager GUI",
    subtitle: "Open Source Projekt | By: <a href='https://github.com/Jemyz3653/QEMU-Manager-GUI'>Jemyz36</a>",
    download_title: "Herunterladen",
    btn_exe: "⬇ Windows (EXE)",
    btn_src: "💻 Quellcode (Python)",
    btn_icon: "🖼 Symbol",
    donate_title: "Projekt unterstützen",
    donate_desc: "Sie können über Donation Alerts unterstützen:",
    donate_btn: "Spenden",
    footer: "© 2025 QEMU Manager GUI | Open Source | By: Jemyz36"
  },
  pl: {
    title: "QEMU Manager GUI",
    subtitle: "Projekt Open Source | By: <a href='https://github.com/Jemyz3653/QEMU-Manager-GUI'>Jemyz36</a>",
    download_title: "Pobierz",
    btn_exe: "⬇ Windows (EXE)",
    btn_src: "💻 Kod źródłowy (Python)",
    btn_icon: "🖼 Ikona",
    donate_title: "Wspieraj projekt",
    donate_desc: "Możesz wspierać przez Donation Alerts:",
    donate_btn: "Wesprzyj",
    footer: "© 2025 QEMU Manager GUI | Open Source | By: Jemyz36"
  },
  be: {
    title: "QEMU Manager GUI",
    subtitle: "Адкрыты праект | By: <a href='https://github.com/Jemyz3653/QEMU-Manager-GUI'>Jemyz36</a>",
    download_title: "Спампаваць",
    btn_exe: "⬇ Windows (EXE)",
    btn_src: "💻 Зыходны код (Python)",
    btn_icon: "🖼 Іконка",
    donate_title: "Падтрымаць праект",
    donate_desc: "Вы можаце падтрымаць праз Donation Alerts:",
    donate_btn: "Ахвяраваць",
    footer: "© 2025 QEMU Manager GUI | Адкрыты код | By: Jemyz36"
  }
};

// ==== Заполняем селект языков ====
const langSelect = document.getElementById("lang-switcher");
for (let lang of Object.keys(translations)) {
  const opt = document.createElement("option");
  opt.value = lang;
  opt.textContent = lang.toUpperCase();
  langSelect.appendChild(opt);
}

// ==== Переключение языка ====
function setLanguage(lang) {
  if (!translations[lang]) lang = "en"; 
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
  langSelect.value = lang;
}

// Автоопределение языка браузера
setLanguage(navigator.language.slice(0,2));

// Слушатель на select
langSelect.addEventListener("change", (e) => setLanguage(e.target.value));
