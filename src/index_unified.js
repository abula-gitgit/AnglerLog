// AnglerLog Unified Portal Worker
const ICON_PNG_B64 = "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";
const LOGO_PNG_B64 = ICON_PNG_B64;

function b64ToUint8Array(b64) {
  const bin = atob(b64);
  const len = bin.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = bin.charCodeAt(i);
  }
  return bytes;
}

const I18N = {
  ja: {
    lang: "ja",
    title: "AnglerLog - 自分だけの秘密の釣り場マップ | 完全ローカル保存・PWA対応釣行ノート",
    desc: "誰にも教えたくない秘密の釣り場マップを自由自在に作成。データは外部送信ゼロの完全ローカル保持で安心。PWA対応で電波の届かない沖磯・船上でもサクサク動作する自分専用の釣行記録アプリ。",
    ogTitle: "AnglerLog - 自分だけの秘密の釣り場マップ（完全ローカル保存・PWA対応）",
    ogDesc: "秘密のポイントも、最高の一匹も。外部送信なしの完全ローカル保持とPWA対応で安心・快適に使える自分専用の釣行ノート。",
    ogUrl: "https://angler-log.app/",
    navFeatures: "特徴・機能",
    navPwa: "PWAアプリ機能",
    navEditions: "エディション",
    navPrivacy: "プライバシー",
    navTerms: "利用規約",
    langSwitchUrl: "/en",
    langSwitchLabel: "English",
    langSwitchFlag: "🌐",
    langSwitchTitle: "Switch to English Introduction",
    launchAppText: "アプリを開く",
    heroBadge: "誰にも漏らさない・完全ローカル保持型フィッシングマップ & 釣行ノート",
    heroTitle: `自分だけの秘密の釣り場マップ。<br class="hidden sm:inline" /><span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-cyan-300 to-sky-200">完全ローカル保存</span>で誰にも教えない。`,
    heroDesc: `実績ポイントや根の位置、エントリー場所を地図上に自由自在にピン留め。記録データは外部サーバーやクラウドへ一切送信されず、お使いの端末内のみに完全ローカル保存されます。<br class="hidden sm:inline" />さらにPWA化に対応。ホーム画面に追加すれば、電波の届かない沖磯や船上でもアプリ感覚で快適に記録できます。`,
    card1Flag: "🇯🇵",
    card1Badge: "日本語版",
    card1Title: "AnglerLog 日本語版",
    card1Desc: "自分だけの秘密の釣り場マップ & 釣果ノート。日本の潮名・タイド予測に対応。完全ローカル保持・PWAインストール対応。",
    card1Btn: "jp.angler-log.app を開く",
    card1Url: "https://jp.angler-log.app/",
    card2Flag: "🌐",
    card2Badge: "English Edition",
    card2Title: "AnglerLog Global",
    card2Desc: "Personal Secret Fishing Map & Catch Log. 100% Offline Local Storage, Tide Charts & PWA Install Ready.",
    card2SubLinkText: "英語紹介ページ",
    card2SubLinkUrl: "/en",
    card2Btn: "en.angler-log.app &rarr;",
    card2Url: "https://en.angler-log.app/",
    featSub: "Key Features",
    featTitle: "秘密を守るローカル設計と、現場で役立つ6つの強み",
    featDesc: "誰にも知られたくない秘密のポイント作りから、電波の届かない現場でのPWA利用まで、釣り人のリアルなこだわりを満たします。",
    f1Title: "自分だけの秘密の釣り場マップ",
    f1Desc: "実績ポイント、シークレットな根の位置、水深、底質、エントリー場所を地図上に自由自在にピン留め。GPS連動で現在地からの距離や方角も即座に確認できます。",
    f1Tag: "ポイントピン留め・GPSスポット記録",
    f2Title: "完全ローカル保持・外部漏洩ゼロ",
    f2Desc: "釣り場座標、釣果写真、メモ、タックル情報はすべて端末のブラウザ内（IndexedDB）にのみ保存。サーバーへの自動送信やクラウド共有は一切行われず、秘密が漏れる心配がありません。",
    f2Tag: "サーバー送信なし・プライバシー完全保護",
    f3Title: "PWA化対応・アプリ感覚で便利",
    f3Desc: "ホーム画面に追加するだけで、アドレスバーのない全画面ネイティブアプリとして起動。キャッシュ機能により、電波の届かない沖磯や船上でもサクサク快適に動作します。",
    f3Tag: "ホーム画面追加・圏外オフライン動作",
    f4Title: "タイドグラフ・潮名・気象連動",
    f4Desc: "釣果時刻と連動して潮汐・潮名（大潮・若潮等）・潮位変動、風向・風速・気圧を自動把握。釣れたタイミング合致のパターン分析を強力にサポートします。",
    f4Tag: "潮汐予測・気圧・気象データ連動",
    f5Title: "詳細な釣果 & タックル管理",
    f5Desc: "魚種、サイズ、重量、ヒットルアー・仕掛け、レンジ、アクション、釣果写真まで詳細に記録。自分だけの釣果図鑑とヒットパターンが構築できます。",
    f5Tag: "釣果図鑑・タックルボックス・写真アルバム",
    f6Title: "手元で安全バックアップ & 復元",
    f6Desc: "端末内の全データはいつでもワンタップでJSON形式としてエクスポート可能。機種変更やバックアップも、クラウドを介さず自分自身の手元で安全に完結します。",
    f6Tag: "データ書き出し・端末間引き継ぎ対応",
    pwaBadge: "Progressive Web App (PWA) 機能",
    pwaTitle: `アプリストア不要。<br class="sm:hidden" />ホーム画面に追加して今すぐアプリとして便利に使える。`,
    pwaDesc: `AnglerLogは最新のPWA（プログレッシブウェブアプリ）技術に対応。App StoreやGoogle Playでの面倒なダウンロードやアカウント登録は一切不要です。ブラウザから「ホーム画面に追加」するだけで、独立した専用アプリとしてインストール完了し、快適にご利用いただけます。`,
    pwaC1Title: "全画面・高速起動",
    pwaC1Desc: "アドレスバーが非表示になり、スマホアプリと同等のフルスクリーンで直感的に地図や釣果を操作できます。",
    pwaC2Title: "圏外でも完全オフライン動作",
    pwaC2Desc: "電波の届かない沖磯、渡船上、離島でもキャッシュ機能により滞ることなくスムーズに記録できます。",
    pwaC3Title: "アカウント登録不要",
    pwaC3Desc: "メールアドレスやパスワードの入力は不要。開いた瞬間からあなただけの秘密のノートとして使えます。",
    pwaIosTip: "iOS: Safariの共有ボタン →「ホーム画面に追加」",
    pwaAndroidTip: "Android: Chromeのメニュー →「アプリをインストール」",
    edtBadge: "Edition Selection",
    edtTitle: "言語・地域別エディション",
    edtDesc: "ご希望の言語バージョンを選択してください。ブラウザからそのまま即座に利用可能で、ホーム画面へのPWA追加にも対応しています。",
    privBadge: "Privacy Policy & Safe Angling Disclaimer",
    privTitle: "プライバシーポリシー・免責事項",
    privFullLink: "全文ページ（/privacy）を見る &rarr;",
    priv1Title: "1. 釣り場情報および釣果データの取り扱い（ローカル完結設計）",
    priv1Desc: "AnglerLog（以下「当サービス」）は、アングラーにとって大切な釣行ポイント（シークレットスポット）や個人的な記録の保護を最重要事項として設計されています。当サービスに入力された釣り場名、GPS座標、釣果記録、メモ、タックル情報、写真などのデータは、すべて利用者が使用する端末内（IndexedDB / localStorage）にのみ保存され、外部サーバーへ自動送信・収集・第三者共有されることはありません。",
    priv2Title: "2. 位置情報（GPS）の利用について",
    priv2Desc: "現在地の確認、地図上へのポイント記録、および近隣のタイド予測・気象データ取得のために端末のGPS機能を利用します。取得された位置情報は利用者の端末内での処理およびデータ取得のためにのみ使用され、行動履歴として追跡・蓄積されることはありません。",
    priv3Title: "3. 免責事項（安全な釣行に関するお願い）",
    priv3Desc: "当サービスで提供されるタイドグラフ、潮位、日の出日の入り、気象データ等は参考用データです。実際の現場では急な気象変化、高波、突風、潮の急変等が生じる可能性があります。釣行時は必ず気象庁や自治体の公式警報・注意報を確認し、ライフジャケットの常時着用や立入禁止区域の遵守など、安全確保を最優先にしてください。当サービスの利用に起因していかなる事故や損害が発生した場合でも、開発者および運営者は一切の責任を負いかねます。",
    priv4Title: "4. お問い合わせ窓口",
    priv4Desc: "ご意見・ご要望・お問い合わせは下記までお願いいたします。<br /><span class="font-mono text-slate-200">Email: stooone.studio@gmail.com</span>",
    footerJp: "日本語版",
    footerEn: "English Page",
    footerEnApp: "English App",
    footerPrivacy: "プライバシーポリシー"
  },
  en: {
    lang: "en",
    title: "AnglerLog - Secret Fishing Spots Map | 100% Offline & Local PWA Journal",
    desc: "Build your own secret fishing spots map. 100% local-first storage with zero cloud leaks. Install as a PWA app to record catches on offshore reefs & boats without cellular signal.",
    ogTitle: "AnglerLog - Secret Fishing Spots Map (100% Local & PWA Ready)",
    ogDesc: "Keep your secret spots safe. 100% offline local storage, customizable GPS map, tide forecasts, and PWA install ready.",
    ogUrl: "https://angler-log.app/en",
    navFeatures: "Features",
    navPwa: "PWA App",
    navEditions: "Editions",
    navPrivacy: "Privacy",
    navTerms: "Terms",
    langSwitchUrl: "/",
    langSwitchLabel: "日本語",
    langSwitchFlag: "🇯🇵",
    langSwitchTitle: "日本語ページに切り替え",
    launchAppText: "Launch App",
    heroBadge: "100% Offline & Local-First Fishing Spot Map & Catch Journal",
    heroTitle: `Your Secret Fishing Spots Map.<br class="hidden sm:inline" /><span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-cyan-300 to-sky-200">Stored Locally.</span> Kept Strictly Secret.`,
    heroDesc: `Pin proven honey holes, underwater reefs, and kayak launch sites with total confidence. All data is stored strictly inside your device browser—never uploaded to external servers or cloud trackers.<br class="hidden sm:inline" />Install as a PWA app in 1 tap to record catches seamlessly on offshore reefs and boats without cellular reception.`,
    card1Flag: "🌐",
    card1Badge: "Global Edition",
    card1Title: "AnglerLog Global",
    card1Desc: "Personal secret fishing spot map & catch log. 100% offline local storage, tide graphs, GPS spot marking & PWA install ready.",
    card1Btn: "Launch en.angler-log.app",
    card1Url: "https://en.angler-log.app/",
    card2Flag: "🇯🇵",
    card2Badge: "Japanese Edition",
    card2Title: "AnglerLog Japanese",
    card2Desc: "Specialized for Japan waters with traditional Japanese tide phases (Ooshio, Wakashio, etc.) and localized predictions.",
    card2SubLinkText: "日本語紹介ページ",
    card2SubLinkUrl: "/",
    card2Btn: "Launch jp.angler-log.app",
    card2Url: "https://jp.angler-log.app/",
    featSub: "Key Features",
    featTitle: "Built for Absolute Privacy & Real Anglers",
    featDesc: "From guarding your secret honey holes to instant PWA logging on offshore waters without internet access.",
    f1Title: "Secret Fishing Spots Map",
    f1Desc: "Pin secret honey holes, submerged boulders, drop-offs, depths, bottom composition, and kayak launch spots. Real-time GPS distance and bearing tracking.",
    f1Tag: "Custom Waypoints & GPS Coordinates",
    f2Title: "100% Local Storage & Zero Leaks",
    f2Desc: "Coordinates, photos, notes, and tackle setups are saved exclusively in your browser (IndexedDB). Zero server transmission, zero cloud snooping, absolute privacy.",
    f2Tag: "Zero Server Uploads & Total Privacy",
    f3Title: "Installable PWA App",
    f3Desc: "Add to your home screen in 1 tap without app store downloads. Instant launch, full-screen display, and reliable offline operation even offshore without cellular reception.",
    f3Tag: "Offline-Ready & Standalone Native Feel",
    f4Title: "Tide Charts & Solunar Forecasts",
    f4Desc: "Instant tide curves, water levels, high/low tide timings, sunrise/sunset, wind direction, speed, and pressure synchronized automatically with catch timestamps.",
    f4Tag: "Tide Curve & Environmental Metrics",
    f5Title: "Catch & Tackle Management",
    f5Desc: "Record fish species, length, weight, lures, rigs, depth layers, water temps, and catch photos. Build an invaluable personal pattern database over seasons.",
    f5Tag: "Personal Angling Diary & Photo Archive",
    f6Title: "Safe Local Backup & Export",
    f6Desc: "Export your full spot database and catch journals as a JSON file anytime. Easily transfer or backup your memories between smartphones with complete data ownership.",
    f6Tag: "One-Click JSON Export & Device Migration",
    pwaBadge: "PWA (Progressive Web Apps) Ready",
    pwaTitle: `Install in 1 Tap. No App Store Needed.<br /><span class="text-brand-400">Instant Access on Offshore Waters.</span>`,
    pwaDesc: `AnglerLog supports modern PWA technology. You can add it directly to your iOS or Android home screen from your browser. It opens in full-screen mode like a native app, loads instantly, and runs reliably even without mobile network coverage.`,
    pwaC1Title: "Zero Lag",
    pwaC1Desc: "Launches instantly from your home screen with no loading delays.",
    pwaC2Title: "Offline Capable",
    pwaC2Desc: "Record spots and catches on offshore reefs or boats with zero reception.",
    pwaC3Title: "Space-Saving",
    pwaC3Desc: "Takes virtually no device storage, with zero app store updates required.",
    pwaIosTip: 'iOS (Safari): Tap Share button → "Add to Home Screen"',
    pwaAndroidTip: 'Android (Chrome): Tap Menu (3 dots) → "Install app"',
    edtBadge: "Edition Selection",
    edtTitle: "Choose Your Language & Edition",
    edtDesc: "Both editions are 100% free, run in browser with offline storage, and support PWA installation.",
    privBadge: "Strictly Local-First Design & Maritime Safety Guidelines",
    privTitle: "Privacy Policy & Safe Angling",
    privFullLink: "View Full Terms (/privacy) &rarr;",
    priv1Title: "1. 100% Local-First Design (Zero Server Leaks)",
    priv1Desc: "AnglerLog is engineered with angler privacy as its number one priority. All spot coordinates, catch logs, notes, tackle configurations, and photos are saved strictly in your device browser storage (IndexedDB / localStorage). Nothing is uploaded, collected, or shared with external servers or cloud services.",
    priv2Title: "2. Geolocation (GPS) Usage",
    priv2Desc: "GPS location is requested solely to display your position on the map, record custom waypoints, and fetch local tide and marine weather forecasts for those coordinates. Your position is processed locally and never tracked or logged on any server.",
    priv3Title: "3. Safety Disclaimer",
    priv3Desc: "Tide curves, water levels, sunrise/sunset times, and weather data provided are for informational reference only. Maritime and weather conditions can change abruptly. Always check official coast guard advisories, wear personal flotation devices (life vests), avoid restricted zones, and make safety your highest priority. The developer assumes no liability for any incidents or damages.",
    priv4Title: "4. Contact & Support",
    priv4Desc: "For feedback, questions, or bug reports, please reach out to:<br /><span class="font-mono text-slate-200">Email: stooone.studio@gmail.com</span>",
    footerJp: "日本語紹介ページ",
    footerEn: "English App",
    footerEnApp: "日本語版アプリ",
    footerPrivacy: "Privacy Policy"
  }
};

function renderLanding(langKey) {
  const t = I18N[langKey] || I18N.ja;
  const isJp = langKey === "ja";
  return `<!DOCTYPE html>
<html lang="${t.lang}" class="scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  <title>${t.title}</title>
  <meta name="description" content="${t.desc}" />
  <meta property="og:title" content="${t.ogTitle}" />
  <meta property="og:description" content="${t.ogDesc}" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="${t.ogUrl}" />
  <meta name="theme-color" content="#0f172a" />
  <link rel="icon" type="image/png" href="data:image/png;base64,${ICON_PNG_B64}" />
  <link rel="apple-touch-icon" href="data:image/png;base64,${ICON_PNG_B64}" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=IBM+Plex+Sans+JP:wght@400;500;600;700&display=swap" rel="stylesheet">
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5353304887278086" crossorigin="anonymous"></script>
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', '"IBM Plex Sans JP"', 'sans-serif'],
          },
          colors: {
            brand: {
              50: '#f0f9ff',
              100: '#e0f2fe',
              200: '#bae6fd',
              300: '#7dd3fc',
              400: '#38bdf8',
              500: '#0ea5e9',
              600: '#0284c7',
              700: '#0369a1',
              800: '#075985',
              900: '#0c4a6e',
              950: '#082f49',
            },
            deep: {
              900: '#0f172a',
              950: '#090d16',
            }
          }
        }
      }
    }
  </script>
  <style>
    body { background-color: #0b1120; color: #e2e8f0; font-feature-settings: "palt"; }
    .glass-nav { background: rgba(15, 23, 42, 0.85); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border-bottom: 1px solid rgba(56, 189, 248, 0.15); }
    .glass-card { background: rgba(15, 23, 42, 0.7); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border: 1px solid rgba(56, 189, 248, 0.15); }
    .hero-glow { background: radial-gradient(circle at 50% 25%, rgba(14, 165, 233, 0.2) 0%, rgba(11, 17, 32, 0) 70%); }
  </style>
</head>
<body class="min-h-screen flex flex-col font-sans selection:bg-brand-500 selection:text-white">

  <!-- Header -->
  <header class="sticky top-0 z-40 glass-nav">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
      <a href="${isJp ? '/' : '/en'}" class="flex items-center gap-2.5 group">
        <img src="data:image/png;base64,${ICON_PNG_B64}" alt="AnglerLog Icon" class="w-10 h-10 rounded-xl shadow-md shadow-brand-500/10 group-hover:scale-105 transition-transform object-contain" />
        <div class="flex flex-col">
          <span class="font-extrabold text-xl tracking-tight text-white">AnglerLog</span>
          <span class="text-[10px] font-semibold text-brand-400 uppercase tracking-wider -mt-1">Fishing Journal</span>
        </div>
      </a>

      <nav class="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-300">
        <a href="#features" class="hover:text-brand-400 transition-colors">${t.navFeatures}</a>
        <a href="#pwa" class="hover:text-brand-400 transition-colors">${t.navPwa}</a>
        <a href="#editions" class="hover:text-brand-400 transition-colors">${t.navEditions}</a>
        <a href="#privacy" class="hover:text-brand-400 transition-colors">${t.navPrivacy}</a>
        <a href="/privacy" class="hover:text-brand-400 transition-colors text-xs text-slate-400">${t.navTerms}</a>
      </nav>

      <div class="flex items-center gap-3">
        <a href="${t.langSwitchUrl}" class="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-xs font-semibold text-slate-300 hover:text-white transition-colors" title="${t.langSwitchTitle}">
          <span>${t.langSwitchFlag}</span>
          <span>${t.langSwitchLabel}</span>
        </a>
        <a href="${isJp ? 'https://jp.angler-log.app/' : 'https://en.angler-log.app/'}" class="px-4 py-2 rounded-lg bg-gradient-to-r from-brand-500 to-cyan-500 hover:from-brand-600 hover:to-cyan-600 text-white font-semibold text-sm shadow-md shadow-brand-500/20 transition-all active:scale-95 flex items-center gap-1.5">
          <span>${t.launchAppText}</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </a>
      </div>
    </div>
  </header>

  <!-- Main Content -->
  <main class="flex-grow">
    <!-- Hero Section -->
    <section class="relative pt-16 pb-24 hero-glow overflow-hidden">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        
        <!-- Detected Language Banner (JP page only) -->
        ${isJp ? `
        <div id="langBanner" class="hidden mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-950/80 border border-brand-500/40 text-brand-300 text-xs sm:text-sm font-medium animate-pulse">
          <span id="langBannerText">推奨アプリがあります</span>
          <a id="langBannerLink" href="https://jp.angler-log.app/" class="underline font-bold text-white hover:text-brand-200">今すぐ開く &rarr;</a>
        </div>` : ''}

        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700 shadow-inner text-brand-400 text-xs font-semibold mb-6">
          <span class="w-2 h-2 rounded-full bg-brand-400 animate-ping"></span>
          ${t.heroBadge}
        </div>

        <h1 class="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.2] mb-6">
          ${t.heroTitle}
        </h1>

        <p class="max-w-2xl mx-auto text-base sm:text-lg text-slate-300 mb-10 leading-relaxed">
          ${t.heroDesc}
        </p>

        <!-- Edition Quick Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto text-left mb-8">
          <a href="${t.card1Url}" class="group p-6 rounded-2xl glass-card hover:border-brand-400/80 shadow-lg hover:shadow-brand-500/10 transition-all transform hover:-translate-y-1 flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-3">
                <span class="text-3xl" role="img">${t.card1Flag}</span>
                <span class="px-2.5 py-0.5 rounded-full bg-brand-950 text-brand-300 text-[11px] font-bold border border-brand-500/30">${t.card1Badge}</span>
              </div>
              <h2 class="text-xl font-bold text-white mb-1.5 group-hover:text-brand-300 transition-colors">${t.card1Title}</h2>
              <p class="text-xs text-slate-400 leading-relaxed mb-4">${t.card1Desc}</p>
            </div>
            <div class="pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-bold text-brand-400 group-hover:text-brand-300">
              <span>${t.card1Btn}</span>
              <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </div>
          </a>

          <div class="group p-6 rounded-2xl glass-card hover:border-brand-400/80 shadow-lg hover:shadow-brand-500/10 transition-all flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-3">
                <span class="text-3xl" role="img">${t.card2Flag}</span>
                <span class="px-2.5 py-0.5 rounded-full bg-brand-950 text-brand-300 text-[11px] font-bold border border-brand-500/30">${t.card2Badge}</span>
              </div>
              <h2 class="text-xl font-bold text-white mb-1.5 group-hover:text-brand-300 transition-colors">${t.card2Title}</h2>
              <p class="text-xs text-slate-400 leading-relaxed mb-4">${t.card2Desc}</p>
            </div>
            <div class="pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-bold gap-2">
              <a href="${t.card2SubLinkUrl}" class="text-brand-400 hover:text-brand-300 underline flex items-center gap-1">
                <span>${t.card2SubLinkText}</span>
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
              </a>
              <a href="${t.card2Url}" class="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 transition-all">
                ${t.card2Btn}
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- Key Features Section -->
    <section id="features" class="py-20 bg-slate-900/60 border-y border-slate-800">
      <div class="max-w-5xl mx-auto px-4 sm:px-6">
        <div class="text-center max-w-2xl mx-auto mb-14">
          <h2 class="text-xs font-bold text-brand-400 uppercase tracking-widest mb-2">${t.featSub}</h2>
          <p class="text-2xl sm:text-3xl font-extrabold text-white">${t.featTitle}</p>
          <p class="text-sm text-slate-400 mt-2">${t.featDesc}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Feature 1 -->
          <div class="p-6 rounded-2xl glass-card flex flex-col justify-between border-brand-500/30 hover:border-brand-400 transition-all">
            <div>
              <div class="w-12 h-12 rounded-xl bg-brand-950 border border-brand-500/30 text-brand-400 flex items-center justify-center mb-5">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <h3 class="text-lg font-bold text-white mb-2">${t.f1Title}</h3>
              <p class="text-sm text-slate-300 leading-relaxed">${t.f1Desc}</p>
            </div>
            <div class="mt-4 pt-3 border-t border-slate-800 text-[11px] font-semibold text-brand-400">${t.f1Tag}</div>
          </div>

          <!-- Feature 2 -->
          <div class="p-6 rounded-2xl glass-card flex flex-col justify-between border-brand-500/30 hover:border-brand-400 transition-all">
            <div>
              <div class="w-12 h-12 rounded-xl bg-brand-950 border border-brand-500/30 text-brand-400 flex items-center justify-center mb-5">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
              </div>
              <h3 class="text-lg font-bold text-white mb-2">${t.f2Title}</h3>
              <p class="text-sm text-slate-300 leading-relaxed">${t.f2Desc}</p>
            </div>
            <div class="mt-4 pt-3 border-t border-slate-800 text-[11px] font-semibold text-brand-400">${t.f2Tag}</div>
          </div>

          <!-- Feature 3 -->
          <div class="p-6 rounded-2xl glass-card flex flex-col justify-between border-brand-500/30 hover:border-brand-400 transition-all">
            <div>
              <div class="w-12 h-12 rounded-xl bg-brand-950 border border-brand-500/30 text-brand-400 flex items-center justify-center mb-5">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
              </div>
              <h3 class="text-lg font-bold text-white mb-2">${t.f3Title}</h3>
              <p class="text-sm text-slate-300 leading-relaxed">${t.f3Desc}</p>
            </div>
            <div class="mt-4 pt-3 border-t border-slate-800 text-[11px] font-semibold text-brand-400">${t.f3Tag}</div>
          </div>

          <!-- Feature 4 -->
          <div class="p-6 rounded-2xl glass-card flex flex-col justify-between">
            <div>
              <div class="w-12 h-12 rounded-xl bg-brand-950 border border-brand-500/30 text-brand-400 flex items-center justify-center mb-5">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>
              </div>
              <h3 class="text-lg font-bold text-white mb-2">${t.f4Title}</h3>
              <p class="text-sm text-slate-300 leading-relaxed">${t.f4Desc}</p>
            </div>
            <div class="mt-4 pt-3 border-t border-slate-800 text-[11px] font-semibold text-slate-400">${t.f4Tag}</div>
          </div>

          <!-- Feature 5 -->
          <div class="p-6 rounded-2xl glass-card flex flex-col justify-between">
            <div>
              <div class="w-12 h-12 rounded-xl bg-brand-950 border border-brand-500/30 text-brand-400 flex items-center justify-center mb-5">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
              </div>
              <h3 class="text-lg font-bold text-white mb-2">${t.f5Title}</h3>
              <p class="text-sm text-slate-300 leading-relaxed">${t.f5Desc}</p>
            </div>
            <div class="mt-4 pt-3 border-t border-slate-800 text-[11px] font-semibold text-slate-400">${t.f5Tag}</div>
          </div>

          <!-- Feature 6 -->
          <div class="p-6 rounded-2xl glass-card flex flex-col justify-between">
            <div>
              <div class="w-12 h-12 rounded-xl bg-brand-950 border border-brand-500/30 text-brand-400 flex items-center justify-center mb-5">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
              </div>
              <h3 class="text-lg font-bold text-white mb-2">${t.f6Title}</h3>
              <p class="text-sm text-slate-300 leading-relaxed">${t.f6Desc}</p>
            </div>
            <div class="mt-4 pt-3 border-t border-slate-800 text-[11px] font-semibold text-slate-400">${t.f6Tag}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- PWA Special Highlight Section -->
    <section id="pwa" class="py-20 bg-gradient-to-b from-slate-900/40 via-brand-950/20 to-slate-900/60 border-b border-slate-800">
      <div class="max-w-5xl mx-auto px-4 sm:px-6">
        <div class="p-8 sm:p-12 rounded-3xl glass-card relative overflow-hidden border border-brand-500/30 shadow-2xl">
          <div class="absolute -right-12 -bottom-12 w-72 h-72 bg-brand-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div class="max-w-3xl">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-950 text-brand-300 text-xs font-bold border border-brand-500/30 mb-4">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
              <span>${t.pwaBadge}</span>
            </div>

            <h2 class="text-2xl sm:text-3xl font-extrabold text-white mb-4 leading-tight">
              ${t.pwaTitle}
            </h2>

            <p class="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
              ${t.pwaDesc}
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div class="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                <div class="text-brand-400 font-bold text-sm mb-1 flex items-center gap-1.5">
                  <span>⚡</span>
                  <span>${t.pwaC1Title}</span>
                </div>
                <p class="text-xs text-slate-400 leading-relaxed">${t.pwaC1Desc}</p>
              </div>

              <div class="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                <div class="text-brand-400 font-bold text-sm mb-1 flex items-center gap-1.5">
                  <span>📶</span>
                  <span>${t.pwaC2Title}</span>
                </div>
                <p class="text-xs text-slate-400 leading-relaxed">${t.pwaC2Desc}</p>
              </div>

              <div class="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                <div class="text-brand-400 font-bold text-sm mb-1 flex items-center gap-1.5">
                  <span>🔒</span>
                  <span>${t.pwaC3Title}</span>
                </div>
                <p class="text-xs text-slate-400 leading-relaxed">${t.pwaC3Desc}</p>
              </div>
            </div>

            <div class="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-300">
              <div class="flex items-center gap-1.5">
                <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>${t.pwaIosTip}</span>
              </div>
              <div class="flex items-center gap-1.5">
                <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>${t.pwaAndroidTip}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Editions Selection Section -->
    <section id="editions" class="py-20">
      <div class="max-w-5xl mx-auto px-4 sm:px-6">
        <div class="text-center max-w-2xl mx-auto mb-12">
          <h2 class="text-xs font-bold text-brand-400 uppercase tracking-widest mb-2">${t.edtBadge}</h2>
          <p class="text-2xl sm:text-3xl font-extrabold text-white">${t.edtTitle}</p>
          <p class="text-sm text-slate-400 mt-2">${t.edtDesc}</p>
        </div>

        <div class="space-y-4 max-w-3xl mx-auto">
          <!-- JP Edition Row -->
          <div class="p-6 rounded-2xl glass-card flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-slate-800 hover:border-brand-500/50 transition-all">
            <div class="flex items-start gap-4">
              <span class="text-3xl">🇯🇵</span>
              <div>
                <div class="flex items-center gap-2">
                  <h3 class="text-lg font-bold text-white">AnglerLog 日本語版</h3>
                  <span class="px-2 py-0.5 text-[10px] font-bold rounded bg-brand-950 text-brand-400 border border-brand-500/30">JP</span>
                </div>
                <p class="text-xs text-slate-400 mt-1">自分専用の釣り場・釣果ノート（日本の潮名・タイド計算対応）</p>
                <div class="text-xs text-slate-500 mt-1 font-mono">https://jp.angler-log.app/ ${!isJp ? '&bull; <a href="/" class="underline text-brand-400 hover:text-brand-300">日本語紹介ページを見る</a>' : ''}</div>
              </div>
            </div>
            <div class="flex flex-col sm:flex-row gap-2 shrink-0">
              ${!isJp ? '<a href="/" class="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-semibold text-xs text-center border border-slate-700 transition-all">紹介ページ</a>' : ''}
              <a href="https://jp.angler-log.app/" class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-500 to-cyan-500 hover:from-brand-600 hover:to-cyan-600 text-white font-bold text-sm text-center shadow-md shadow-brand-500/20 transition-all shrink-0">
                日本語版を開く
              </a>
            </div>
          </div>

          <!-- EN Edition Row -->
          <div class="p-6 rounded-2xl glass-card flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-slate-800 hover:border-brand-500/50 transition-all">
            <div class="flex items-start gap-4">
              <span class="text-3xl">🌐</span>
              <div>
                <div class="flex items-center gap-2">
                  <h3 class="text-lg font-bold text-white">AnglerLog English (Global)</h3>
                  <span class="px-2 py-0.5 text-[10px] font-bold rounded bg-brand-950 text-brand-400 border border-brand-500/30">${!isJp ? 'Current' : 'EN'}</span>
                </div>
                <p class="text-xs text-slate-400 mt-1">Personal Fishing Journal, GPS Spot Tracker & Tide Chart</p>
                <div class="text-xs text-slate-500 mt-1 font-mono">https://en.angler-log.app/ ${isJp ? '&bull; <a href="/en" class="underline text-brand-400 hover:text-brand-300">英語紹介ページを見る</a>' : ''}</div>
              </div>
            </div>
            <div class="flex flex-col sm:flex-row gap-2 shrink-0">
              ${isJp ? '<a href="/en" class="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-semibold text-xs text-center border border-slate-700 transition-all">英語紹介ページ</a>' : ''}
              <a href="https://en.angler-log.app/" class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-500 to-cyan-500 hover:from-brand-600 hover:to-cyan-600 text-white font-bold text-sm text-center shadow-md shadow-brand-500/20 transition-all">
                Launch English
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Privacy Policy Summary Section -->
    <section id="privacy" class="py-20 bg-slate-900/60 border-t border-slate-800">
      <div class="max-w-4xl mx-auto px-4 sm:px-6">
        <div class="p-8 sm:p-10 rounded-3xl glass-card">
          <div class="flex items-center justify-between flex-wrap gap-4 mb-6">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-brand-950 border border-brand-500/30 text-brand-400 flex items-center justify-center">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <div>
                <h2 class="text-xl sm:text-2xl font-extrabold text-white">${t.privTitle}</h2>
                <p class="text-xs text-slate-400">${t.privBadge}</p>
              </div>
            </div>
            <a href="/privacy" class="text-xs font-bold text-brand-400 hover:text-brand-300 underline flex items-center gap-1">
              <span>${t.privFullLink}</span>
            </a>
          </div>

          <div class="space-y-6 text-sm text-slate-300 leading-relaxed border-t border-slate-800 pt-6">
            <div>
              <h3 class="font-bold text-white text-base mb-2">${t.priv1Title}</h3>
              <p>${t.priv1Desc}</p>
            </div>
            <div>
              <h3 class="font-bold text-white text-base mb-2">${t.priv2Title}</h3>
              <p>${t.priv2Desc}</p>
            </div>
            <div>
              <h3 class="font-bold text-white text-base mb-2">${t.priv3Title}</h3>
              <p>${t.priv3Desc}</p>
            </div>
            <div>
              <h3 class="font-bold text-white text-base mb-2">${t.priv4Title}</h3>
              <p>${t.priv4Desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <!-- Footer -->
  <footer class="bg-deep-950 border-t border-slate-800 py-10">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
      <div class="flex items-center gap-2">
        <span class="font-bold text-slate-200">AnglerLog</span>
        <span>&copy; 2026 All rights reserved.</span>
      </div>
      <div class="flex items-center gap-4">
        <a href="${isJp ? 'https://jp.angler-log.app/' : '/'}" class="hover:text-brand-400 transition-colors">${t.footerJp}</a>
        <span>&bull;</span>
        <a href="${isJp ? '/en' : 'https://en.angler-log.app/'}" class="hover:text-brand-400 transition-colors">${t.footerEn}</a>
        <span>&bull;</span>
        <a href="${isJp ? 'https://en.angler-log.app/' : 'https://jp.angler-log.app/'}" class="hover:text-brand-400 transition-colors">${t.footerEnApp}</a>
        <span>&bull;</span>
        <a href="/privacy" class="hover:text-brand-400 transition-colors">${t.footerPrivacy}</a>
      </div>
    </div>
  </footer>

  ${isJp ? `
  <script>
    (function() {
      const userLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
      const banner = document.getElementById('langBanner');
      const text = document.getElementById('langBannerText');
      const link = document.getElementById('langBannerLink');
      if (!banner || !text || !link) return;
      if (userLang.startsWith('ja')) {
        banner.classList.remove('hidden');
        text.textContent = '日本語の利用環境を検出しました:';
        link.textContent = '日本語版アプリを開く →';
        link.href = 'https://jp.angler-log.app/';
      } else {
        banner.classList.remove('hidden');
        text.textContent = 'English language detected:';
        link.textContent = 'View English Page →';
        link.href = '/en';
      }
    })();
  </script>` : ''}
</body>
</html>`;
}

const PRIVACY_HTML = `${PRIVACY_HTML}`;

function htmlResponse(html) {
  return new Response(html, {
    status: 200,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "public, max-age=3600, s-maxage=86400",
      "x-content-type-options": "nosniff",
      "referrer-policy": "strict-origin-when-cross-origin"
    }
  });
}

export default {
  async fetch(request) {
    try {
      const url = new URL(request.url);

      if (url.pathname === "/logo.png" || url.pathname === "/icon.png" || url.pathname === "/apple-touch-icon.png" || url.pathname === "/favicon.ico" || url.pathname === "/icon.svg") {
        return new Response(b64ToUint8Array(ICON_PNG_B64), {
          status: 200,
          headers: {
            "content-type": "image/png",
            "cache-control": "public, max-age=86400"
          }
        });
      }

      if (url.pathname === "/en" || url.pathname === "/en/" || url.pathname === "/en.html" || url.pathname === "/index-en.html") {
        return htmlResponse(renderLanding("en"));
      }

      if (url.pathname === "/privacy" || url.pathname === "/privacy/" || url.pathname === "/privacy-policy" || url.pathname === "/privacy.html") {
        return htmlResponse(PRIVACY_HTML);
      }

      return htmlResponse(renderLanding("ja"));
    } catch (err) {
      return new Response(err.stack || err.message || String(err), { status: 500 });
    }
  }
};
