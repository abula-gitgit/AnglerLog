// AnglerLog Unified Portal Worker - 7 Languages Edition (JA, EN, FR, DE, ES, IT, PT)
const ICON_PNG_B64 = "iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAABC2lDQ1BJQ0MgUHJvZmlsZQAAeJyVkLFOwlAUhr+LJILBOMjAwNCBgUWCDsaBCYaGzRRJKE5tKV2gbW5rfAHZGFjZiItvIK/ghomJg5OPQEh0NtdqysLAmb785885/zkgXgCydRj7sTT0ptYz+9rhJwKhOmA5UcjuEvD9nnjfzti/8gM3coA1UJE9sw+iCBS9hKuK7YQbiu/jMAZxrVjeGC0QA6DqbbG9xU4olX8KNMajO7XrLzcF1+92gBxQJsJAp6nuTyzBI1x9wcEs1ew5LCdQ+ki1ygJOHuB5lWrpT0JLWr9SFsgMh7B5gmMTTl/h6Pb/ETuyqXlldAICPEa4aLTxcaihcUGdcy5/AKbWPz8bOFjoAAAAwFBMVEWhYSTWpFnpmyjv2aJ1TSHhXAj49OhWKxX0yGCicUq0i2VUCgBWHALNspvmcwr7YQAdAgBRGgJ4WkarloWyhDf6mAf2jQ72iA/caQrEPQGqVQBNFwIuCwBvJgWMKwC1Rwg5EQKSNQipOANXJAzKVgbveAfvVwLwZwQAAADTZQpyNxNlHQDyhQjMRwKTRxb0lxcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA2xQtjAAAAMHRSTlP///3///z/+P///w1g/2UF/7H///8fVaa8/wP+/v7+//7+/v7+//7+AP7///7///59lNXOAAAEKUlEQVR42o2WCXOjOBCFWxzBOHEmx2SObTVICAISNvn//26fBI7JbNXuvqrENn5fXzrKNE3Tt2n68TM7Qx9J2V4f27OfP6bpDWaapr+mt199f7n0kPe+HKLOV6VP4zgOw8+3GJrw77Hvmq5r28tKDDtiuPrH9/dx+AEzRX/zxV96arv4oB93GUC8j4/TGyW/3QFtY5daQTV1XT+cd0Ak6FvZNLsMrdhjHqWyw0Gptun3wHv5jR5b2QGNrPY8TyPLDsraMfkTUI6P9MvegFaCyg+ITIu1tvXoPFNL4z8zlO+/qE+AjUA7BwU72dRUB4aQB8QtAwaCKpqta5HY6zI3NglPm6b1Z2WbzxYu/QbEmixHv5WFkrlWpzw/HcV/KGlX/1egY1JZ1spc3+WWTndQfbojmDOa39eKLjfAdg3D78XNStEr3EDyu2N9lHLIuF072IA1BbuYgJmOIUa/O8Z/eV413mdBVv/vrieSFbAVZedSAMB/Op7yWFWeE9ven4nXgrD0hNmshKZs8AD4lBdBqVxRfaylEiFfEl+i/zdG8wmIpvPg2ckLZlNTrfL8KCzkuO09cZviYzVXQBIwjJ6peD3kd0odcoRHugNxH4GuhL9rEjAnIgIeQIVqMpUfq2VhRyFkCdBd8mMhr4A0Ogz9IFUVV09VmlXgQBmG4lu/8ObfA+zKfiTjjvA7zexYawzCLQAco/7mCnAChDX5fnBPhKOjnTFav7xoIvZtS0ZS+AR0wvOaQ4exH712KOjFWNaveaUJUTofdNPcgJl53lL4vh/oKaiqrl31mpN2eikxesObXaRLwFaUlkRoRy42/r1AD0Nn6ZogejqyHDWvKVrcT0MWjDYFEQVTlnGpNF/tN2AlNGbeX/xHRkXlXhSZNp46p+Xqn8VeAXQ+I4X0bd/ilGUZ6aqutG3a8CTNNpZ5D7CESCzwJ1nMiY3YRXM8ugiOkDzvAMK2EWPaKyDWCvxGi5SHQ4gAXPsM5PFe8wasPS6oElGX1Z0AYcOfDM+s3Q6w2CMohuXT0nwBkrTEq7hLfswtzmLJ5FYHALNDRNxTIlKGp7ik8SHvAGNWwrAL0EKVli42LA5rHu/MIPwPAIgEcYG+49IunkDEdSxwzX6nIta22k0CNOw6xsO9kWXRYTTDonWgeLdl2EwuiLkB2mjn8DWOFxXwVQyCNRw4eNhUPiu0cWspAHCutBFARNaR1tustNleyS2E/afTdAA4E4l4Hh3giop0NDexK1APYf/puAtQvdDz+r3jWJcRifsalUWlN87h+kgVoQjNz/TA12AxJ3qHqmJVwMcQYqtydT3QfWW2/PG5c/j7DOHk6xPM456mh13NsVMn4apoxyx3PT1MdP+V+FfBjwz/n4j++OPkfrp/NuY/7eYZxvRrJr48PFd/7PI/VD0/JOP0NyVA8fj4idf+AAAAAElFTkSuQmCC";

function b64ToUint8Array(b64) {
  const bin = atob(b64);
  const len = bin.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) bytes[i] = bin.charCodeAt(i);
  return bytes;
}

const SVGS = {
  pin: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>',
  lock: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>',
  mobile: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>',
  cloud: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z"/></svg>',
  book: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/></svg>',
  backup: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/></svg>',
  arrowRight: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>',
  chevronRight: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>',
  share: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/></svg>',
  sparkle: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>',
  check: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>',
  shield: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>',
  waves: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 12c2.5-3 5.5-3 8 0s5.5 3 8 0 5.5-3 8 0M2 17c2.5-3 5.5-3 8 0s5.5 3 8 0 5.5-3 8 0"/></svg>',
  compass: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke-width="2"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="currentColor"/></svg>',
  globe: '<svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>',
  chevronDown: '<svg class="w-3.5 h-3.5 text-slate-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>'
};

const TRANSLATIONS = {
  "ja": {
    "meta": {
      "title": "AnglerLog - 自分だけの秘密の釣り場マップ | 完全ローカル保存・PWA対応釣行ノート",
      "desc": "誰にも教えたくない秘密の釣り場マップを自由自在に作成。データは外部送信ゼロの完全ローカル保持で安心。PWA対応で電波の届かない沖磯・船上でもサクサク動作する自分専用の釣行記録アプリ。",
      "ogTitle": "AnglerLog - 自分だけの秘密の釣り場マップ（完全ローカル保存・PWA対応）",
      "ogDesc": "秘密のポイントも、最高の一匹も。外部送信なしの完全ローカル保持とPWA対応で安心・快適に使える自分専用の釣行ノート。"
    },
    "nav": {
      "features": "特徴・強み",
      "preview": "機能プレビュー",
      "workflow": "3ステップ活用術",
      "guides": "実践コラム",
      "pwa": "オフラインPWA",
      "faq": "よくある質問",
      "launchApp": "アプリを開く",
      "home": "トップページ",
      "privacy": "プライバシーポリシー・免責事項"
    },
    "hero": {
      "pill": "誰にも知られない・完全ローカル保持型フィッシングマップ & 釣行ノート",
      "title": "<span class=\"inline-block\">自分だけの秘密の釣り場マップ。</span><span class=\"inline-block\"><span class=\"text-gradient\">完全ローカル保存</span>で誰にも教えない。</span>",
      "desc": "実績ポイント、シークレットな沈み根、立ち位置やエントリー場所を地図上に自由自在にピン留め。データは外部サーバーやクラウドへ一切送信されず、端末内のみに完全保存。PWA対応により、電波の届かない沖磯や船上でもサクサク起動・記録できます。",
      "launchBtn": "日本語版アプリを起動",
      "launchUrl": "https://jp.angler-log.app/",
      "demoBtn": "1クリックで今すぐデモ体験",
      "demoDesc": "架空の実績スポット3件と大物釣果データが入った状態で即座に試せます（いつでも全消去可能）。",
      "mockupSpotTitle": "三浦半島 西堤防・外向きサラシ（実績A）",
      "mockupTarget": "ヒラスズキ 82cm / 4.8kg",
      "mockupTide": "大潮 / 下げ三分（潮位 142cm）",
      "mockupWeather": "風速: 北東 3.8m / 気圧: 1014hPa",
      "mockupStatusLocal": "完全ローカル暗号化保持（IndexedDB）",
      "mockupStatusGps": "GPS高精度測位中（外部送信ゼロ）",
      "depthLabel": "潮目直撃 / 水深 4.5m",
      "reefWarning": "沈み根・カケアガリ注意 / サラシ・キビナゴ付き",
      "currentPos": "現在地 (GPS Lock)",
      "statsCount": "登録スポット数: 14箇所（完全端末内保存）",
      "statsAdd": "1タップでピン追加 +",
      "tideTitle": "リアルタイム潮汐 & 気象連動",
      "tideBadge": "大潮",
      "tideHigh": "満潮 06:12 (168cm)",
      "tideNow": "現在 16:45 (時合い直撃)",
      "tideLow": "干潮 12:40 (45cm)",
      "tidePressure": "気圧: 1014 hPa (微低下・好転)",
      "tideWind": "風向: 北東 3.8m/s (適度な波立ち)",
      "trophySub": "TROPHY CATCH RECORD",
      "trophyTag": "秘密保存",
      "trophyLure": "ルアー: 裂波120F（チャートキャンディ）",
      "trophyTideLabel": "潮回り: 大潮 / 下げ三分",
      "trophyDate": "2026.10.18",
      "trophyExif": "EXIF完全保護"
    },
    "features": {
      "sub": "KEY FEATURES",
      "title": "<span class=\"inline-block\">秘密を守るローカル設計と、</span><span class=\"inline-block\">現場で役立つ6つの強み</span>",
      "desc": "誰にも知られたくない秘密のポイント作りから、電波の届かない現場でのPWA利用まで、釣り人のリアルなこだわりを満たします。",
      "item1": {
        "badge": "GPSスポット記録",
        "title": "自分だけの秘密の釣り場マップ",
        "desc": "実績ポイント、シークレットな根の位置、水深、底質、エントリー場所を地図上に自由自在にピン留め。GPS連動で現在地からの距離や方角も即座に確認できます。",
        "tag": "ポイントピン留め・海底地形メモ・方角コンパス機能"
      },
      "item2": {
        "badge": "完全ローカル",
        "title": "外部サーバー送信ゼロ",
        "desc": "釣り場座標、釣果写真、メモ、タックル情報はすべて端末のブラウザ内（IndexedDB）にのみ暗号化保存。外部サーバーへの自動送信やクラウド共有は一切行われず、情報漏洩リスクはゼロです。",
        "tag": "プライバシー完全保護"
      },
      "item3": {
        "badge": "PWA対応",
        "title": "圏外でもサクサク動くPWA",
        "desc": "ホーム画面に追加するだけで、アドレスバーのない全画面ネイティブアプリとして起動。キャッシュ機能により、電波の届かない沖磯や船上でも高速に動作します。",
        "tag": "ホーム画面追加・オフライン完結"
      },
      "item4": {
        "badge": "タイド・気象",
        "title": "タイドグラフ・潮名・気象連携",
        "desc": "釣果時刻と連動して潮汐・潮名（大潮・若潮等）・潮位変動、風向・風速・気圧を自動把握。釣れたタイミング合致のパターン分析を強力にサポートします。",
        "tag": "潮汐予測・気圧・気象データ連動"
      },
      "item5": {
        "badge": "秘密厳守シェア",
        "title": "場所隠しSNS釣果カード",
        "desc": "秘密の釣り場名やGPS位置、写真のEXIF情報を完全マスク。魚種・サイズ・重量・潮名・ヒットルアーだけを合成した自慢用SNS画像を端末内で0.1秒出力します。",
        "tag": "位置情報ゼロ漏洩・SNSシェア"
      },
      "item6": {
        "badge": "釣果図鑑",
        "title": "詳細な釣果 & タックル管理",
        "desc": "魚種、サイズ、重量、ヒットルアー・仕掛け、レンジ、アクション、釣果写真まで詳細に記録。自分だけの釣果図鑑とヒットパターンが構築できます。",
        "tag": "タックルボックス・写真アルバム"
      },
      "item7": {
        "badge": "完全手元管理",
        "title": "手元で安全バックアップ & 復元",
        "desc": "端末内の全データはいつでもワンタップでJSON形式としてエクスポート可能。機種変更やバックアップも、クラウドを介さず自分自身の手元で安全に完結します。",
        "tag": "JSON書き出し・機種変更引き継ぎ"
      },
      "item8": {
        "badge": "即体験",
        "title": "サンプルデータ体験モード",
        "desc": "架空の実績ポイント3件とリアルな釣果記録が入った状態で1クリック体験。空の状態から悩むことなく、マップやタイドグラフの使い勝手を即座に試せます。",
        "tag": "登録不要・ワンタップ全消去対応"
      }
    },
    "workflow": {
      "sub": "ANGLING WORKFLOW",
      "title": "<span class=\"inline-block\">「釣れた時」だけじゃない。</span><span class=\"inline-block\">釣行前から始まる</span><span class=\"inline-block\">3ステップ活用術</span>",
      "desc": "週末の作戦会議から、現場での瞬時の判断、帰宅後のパターン分析まで、アングラーの釣行サイクル全体をサポートします。",
      "step1": {
        "step": "STEP 01",
        "time": "釣行前（作戦会議）",
        "title": "タイド・気象予報と過去実績を照合してポイント選定",
        "desc": "釣行前の夜にアプリを開き、登録スポットの潮汐・満潮干潮時刻、風向・気圧予測をチェック。過去の似た潮回りや季節に何が釣れたかを照合し、その日最も確率の高いエントリー場所と時合いを事前に絞り込みます。",
        "tag": "週末タイド確認・過去パターン照合・タックル準備"
      },
      "step2": {
        "step": "STEP 02",
        "time": "釣行中（現場・沖磯・船上）",
        "title": "圏外でも即起動。変化する海況とヒットの瞬間を記録",
        "desc": "現場に着いたら、気配のある潮目や根、ベイトの溜まり場をGPSで即ピン留め。魚が釣れたら写真を撮ってサイズやルアーを素早く登録。釣果がなかった日でも海況メモを残すことで次回の大事な判断材料になります。",
        "tag": "圏外オフライン記録・GPSピン留め・海況メモ"
      },
      "step3": {
        "step": "STEP 03",
        "time": "釣行後（振り返り・資産化）",
        "title": "潮位カーブとヒット条件を分析し、一生モノのデータベースへ",
        "desc": "帰宅後にタイドグラフ上のヒットタイミングを振り返り、「下げ三分×北東風×シンキングペンシル」といった再現性ある勝ちパターンを蓄積。データは手元にJSONバックアップでき、一生モノの釣行資産になります。",
        "tag": "時合い分析・ヒットルアー集計・ローカルJSON保存"
      }
    },
    "guides": {
      "sub": "PRACTICAL GUIDES",
      "title": "<span class=\"inline-block\">釣り人の悩みを解決する</span><span class=\"inline-block\">実践活用コラム</span>",
      "desc": "大切な釣り場を守りながら、毎回の釣行データから確実に次の1匹へとつなげるための実践ノウハウです。",
      "col1": {
        "badge": "COLUMN 01 / ポイント保護とプライバシー",
        "title": "なぜSNS型・クラウド共有型の釣果アプリで「場所荒れ」が起きるのか？",
        "p1": "苦労して自分の足で開拓したシークレットポイントや、地元の小さな磯場のピンスポット。一般的なSNS型釣果アプリやクラウド保存型サービスでは、写真のEXIF情報（撮影位置）や背景の地形、あるいはサーバー上の共有マップから意図せずポイントが特定され、数日のうちに釣り人が殺到して釣り場が荒れてしまうトラブルが後を絶ちません。",
        "p2": "AnglerLogは、すべてのデータを端末内（IndexedDB）に完全ローカル保持するアーキテクチャを採用。サーバーへのアップロード自体が存在しないため、運営者を含め第三者があなたの釣り場座標を知ることは技術的に不可能です。真の秘密を守るための唯一の選択肢です。"
      },
      "col2": {
        "badge": "COLUMN 02 / タイド・海況データの読み解き方",
        "title": "「満潮・干潮」だけでは不十分。タイドカーブ・潮位変動と時合いの関係",
        "p1": "大潮だから釣れる、満潮だからチャンスとは限りません。実際のフィールドでは、「満潮から干潮に向かって潮が動き始めた瞬間（下げ三分）」や「潮位差が激しく急激に潮流が生じる時間帯」に魚の捕食スイッチが入ります。さらに、風向によるベイトの吹き寄せや気圧の微細な変化が重なることで、爆釣パターンが成立します。",
        "p2": "AnglerLogでは、釣果を登録した瞬間のタイドグラフ上の位置、潮名、風速・風向、気圧を自動で紐付け。釣れた時だけでなく反応がなかった時間の海況も蓄積することで、「この場所は下げ始め・北東風3m・気圧低下時がベスト」という、あなただけの勝利の方程式が浮き彫りになります。"
      },
      "col3": {
        "badge": "COLUMN 03 / 現場でのスマートな運用法",
        "title": "電波の届かない沖磯・離島・ボート上でスマホを専用フィールドノートにする方法",
        "p1": "携帯電波が届かない沖磯や、通信が途切れがちな沿岸のボートフィッシング。通信を前提とした従来のWebアプリやクラウドサービスでは、肝心な場面で画面が読み込めず、貴重な時合いの最中にストレスを感じる原因になります。",
        "p2": "AnglerLogはPWA（プログレッシブウェブアプリ）に対応。事前にスマートフォンのホーム画面に追加しておくだけで、圏外の海の上でも機内モードでも瞬時に起動します。GPSセンサーによる現在地測位、ポイントのピン留め、釣果のカメラ撮影と記録が、一切の通信なしでスムーズに完結します。"
      }
    },
    "pwa": {
      "badge": "PROGRESSIVE WEB APP (PWA)",
      "title": "<span class=\"inline-block\">アプリストア不要。</span><span class=\"inline-block\">ホーム画面に追加して</span><span class=\"inline-block\"><span class=\"text-gradient\">今すぐネイティブアプリ感覚</span>で使える。</span>",
      "desc": "AnglerLogは最新のPWA技術に対応。App StoreやGoogle Playでの面倒なダウンロードやアカウント登録は一切不要です。ブラウザから「ホーム画面に追加」するだけで、独立した専用アプリとしてインストール完了し、快適にご利用いただけます。",
      "feat1Title": "全画面・0.5秒起動",
      "feat1Desc": "アドレスバーなしのネイティブ感覚で地図と釣果を快適操作。",
      "feat2Title": "圏外でも完全動作",
      "feat2Desc": "電波の届かない沖磯・船上でもキャッシュで滞りなく記録。",
      "feat3Title": "アカウント登録ゼロ",
      "feat3Desc": "メールもPW不要。開いた瞬間からあなた専用の記録帳に。",
      "installIos": "iOS: Safari 共有ボタン →「ホーム画面に追加」",
      "installAndroid": "Android: Chrome メニュー →「アプリをインストール」"
    },
    "faq": {
      "sub": "FREQUENTLY ASKED QUESTIONS",
      "title": "よくある質問（FAQ）",
      "desc": "AnglerLogの仕組みや安全性、日々の使い方についてよくいただく質問と回答です。",
      "list": [
        {
          "q": "登録した秘密の釣り場（GPS座標）や釣果写真が外部に漏れたり、他の人に公開されたりしませんか？",
          "a": "一切ありません。AnglerLogに入力したスポット座標、釣り場名、写真、メモ、タックル情報はすべてお使いのスマートフォンやPCのブラウザ内部（IndexedDB）にのみ保存されます。運営者のサーバーや外部クラウドへ送信・収集される仕組み自体が存在しないため、完全なプライベート環境で安心してご利用いただけます。"
        },
        {
          "q": "利用料金はかかりますか？また、会員登録やメールアドレスの入力は必要ですか？",
          "a": "すべての機能を完全無料でご利用いただけます。また、アカウント作成、メールアドレス登録、パスワード設定なども一切不要です。サイトからアプリを開いたその瞬間から、あなた専用の釣り場マップ＆釣行ノートとして使い始めることができます。"
        },
        {
          "q": "スマートフォンを機種変更する際や、万が一のデータ消失に備えたバックアップはどうすればよいですか？",
          "a": "アプリ内の設定メニューにある「バックアップ（JSON書き出し）」機能を使うことで、登録したすべてのスポット・釣果・タックルデータを1つのJSONファイルとして端末やiCloud Drive / Googleドライブ等の個人フォルダに保存できます。新しい端末で「復元（インポート）」を選択すれば、簡単に全データを引き継げます。"
        },
        {
          "q": "電波の届かない沖磯や船上、山奥の渓流でも本当に使えますか？",
          "a": "はい、使えます。PWA（プログレッシブウェブアプリ）技術に対応しているため、事前に電波のある場所でアプリを開くか「ホーム画面に追加」しておけば、圏外エリアでもアプリの起動、記録済みマップや過去の釣果の閲覧、現在地のGPS取得、新規釣果やメモの保存がオフラインで完結します。"
        },
        {
          "q": "まだ釣果写真がない状態や、釣りに行く前の予定立てにも使えますか？",
          "a": "もちろんです。まずは気になっている釣り場やいつも通う堤防・サーフ・磯をマップ上にピン留めしてみてください。スポットを登録しておけば、週末のタイドグラフ（潮汐予測）や風向・気象のチェックツールとして日常的に活用でき、次の釣行計画を立てるのがぐっと楽しくなります。"
        }
      ]
    },
    "cta": {
      "title": "<span class=\"inline-block\">大切な釣り場と記録を、</span><span class=\"inline-block\">手元でずっと守り抜く。</span>",
      "desc": "面倒な登録は一切不要。今すぐブラウザから開いて、あなただけの秘密のフィールドノートを作成しましょう。",
      "launchBtn": "今すぐアプリを起動する",
      "privacyLink": "プライバシーポリシーと免責事項を確認"
    },
    "videoShowcase": {
      "sub": "FEATURE SHOWCASE",
      "title": "主な機能の操作感を動画で体験",
      "desc": "地図タップでのシークレットポイント記録から、詳細な釣果・タックル管理、タイド・時合予測まで。現場で迷わず使える直感的な操作性を動画でご覧いただけます。",
      "tabs": {
            "spot": "1. 釣り場登録",
            "catch": "2. 釣果記録",
            "tackle": "3. タックル管理",
            "tide": "4. タイド・時合予測"
      },
      "items": {
            "spot": {
                  "badge": "GPS SPOT PINNING",
                  "title": "秘密のポイントを地図上に瞬時にピン留め",
                  "desc": "地図上の立ち位置や狙い目の根、エントリー場所をワンタップで記録。水深や海底地形、危険箇所の注意書きも自由にメモできます。完全ローカル暗号化保持のため、誰にも場所を知られる心配はありません。",
                  "points": [
                        "地図タップからの素早いスポット座標取得",
                        "磯・サーフ・港湾・急深などポイント種別設定",
                        "外部送信ゼロ・端末内（IndexedDB）完全暗号化保存"
                  ],
                  "videoFile": "angler_spot_add"
            },
            "catch": {
                  "badge": "CATCH LOGGING",
                  "title": "釣果とヒットルアーを瞬時にファイリング",
                  "desc": "大物が釣れたらサイズや重量、ヒットルアー、アクション、レンジをすばやく記録。潮汐や気象データも自動で紐付き、あなただけの釣果図鑑とヒットパターンが蓄積されます。",
                  "points": [
                        "魚種・サイズ・重量・ルアーを素早く入力",
                        "釣果時刻と連動した潮汐・気象データの自動記録",
                        "プライバシー保護付きのSNS釣果カード生成"
                  ],
                  "videoFile": "angler_catch_record"
            },
            "tackle": {
                  "badge": "TACKLE BOX MANAGER",
                  "title": "愛用タックルとお気に入りルアーを手元管理",
                  "desc": "ロッド、リール、ライン、リーダー、お気に入りルアーのセットアップをタックルボックスとして整理。編集や追加も直感的に行え、釣果記録時に1タップでタックルを選択できます。",
                  "points": [
                        "ロッド・リール・ライン構成の自由なカスタマイズ",
                        "よく使うルアー・仕掛けの素早いタイピング追記",
                        "釣果記録とのワンタップ紐付けでヒット傾向を分析"
                  ],
                  "videoFile": "angler_tackle_box_management"
            },
            "tide": {
                  "badge": "TIDE & PATTERN PREDICTION",
                  "title": "タイドグラフのスクラブと時合予測AI",
                  "desc": "潮汐曲線を指でなぞるだけで、満潮・干潮時刻や潮流が動く時合（上げ三分・下げ七分など）を一目で把握。さらに独自アルゴリズムによる時合予測と戦術アドバイスで釣行をサポートします。",
                  "points": [
                        "24時間タイド曲線のリアルタイムスクラブ操作",
                        "最適な時合い（Prime Bite）ウィンドウの自動算出",
                        "季節・月齢・過去実績に基づく戦術アドバイス"
                  ],
                  "videoFile": "angler_tide_pattern_prediction"
            }
      },
      "tryBtn": "この機能をアプリで試す"
},
    "footer": {
      "tagline": "自分だけの秘密の釣り場マップ & 完全ローカル保存型釣行ノート",
      "copy": "© 2026 AnglerLog. All rights reserved. Built for dedicated anglers.",
      "archBadge": "100% Local Storage Architecture"
    }
  },
  "en": {
    "meta": {
      "title": "AnglerLog - Secret Fishing Spots Map | 100% Offline & Local PWA Journal",
      "desc": "Build your own secret fishing spots map. 100% local-first storage with zero cloud leaks. Install as a PWA app to record catches on offshore reefs & boats without cellular signal.",
      "ogTitle": "AnglerLog - Secret Fishing Spots Map (100% Local & PWA Ready)",
      "ogDesc": "Keep your secret spots safe. 100% offline local storage, customizable GPS map, tide forecasts, and PWA install ready."
    },
    "nav": {
      "features": "Features",
      "preview": "Preview",
      "workflow": "Workflow",
      "guides": "Guides",
      "pwa": "PWA App",
      "faq": "FAQ",
      "launchApp": "Launch App",
      "home": "English Home",
      "privacy": "Privacy Policy & Disclaimer"
    },
    "hero": {
      "pill": "100% Offline & Local-First Fishing Spot Map & Catch Journal",
      "title": "<span class=\"inline-block\">Your Secret Fishing Spots Map.</span> <span class=\"inline-block\"><span class=\"text-gradient\">Stored Locally.</span> Kept Strictly Secret.</span>",
      "desc": "Pin honey holes, submerged reefs, and kayak launch sites with total confidence. All data is stored strictly inside your device browser—never uploaded to external servers or cloud trackers. Install as a PWA app in 1 tap to record catches seamlessly on offshore reefs and boats without cellular signal.",
      "launchBtn": "Launch Global Edition",
      "launchUrl": "https://en.angler-log.app/",
      "demoBtn": "Instant Demo with Sample Data (1-Click)",
      "demoDesc": "Test-drive the interactive map, tide curves, and trophy logs instantly with preloaded sample fishing spots.",
      "mockupSpotTitle": "Outer Reef - Drop-off & Rip Current (Spot A)",
      "mockupTarget": "Striped Bass 38 in / 22 lbs",
      "mockupTide": "Spring Tide / Ebb 30% (Depth: 24 ft)",
      "mockupWeather": "Wind: NE 8 kts / Pressure: 1014 hPa",
      "mockupStatusLocal": "100% Local Encrypted Storage (IndexedDB)",
      "mockupStatusGps": "Live GPS Plotting (Zero Server Upload)",
      "depthLabel": "Drop-off Strike / Depth 14.5 ft",
      "reefWarning": "Submerged Reef & Breakwater Edge / High Bait Density",
      "currentPos": "Current GPS (Locked)",
      "statsCount": "Saved Spots: 14 Waypoints (100% On-Device)",
      "statsAdd": "Add Waypoint Pin +",
      "tideTitle": "Real-time Tides & Weather Engine",
      "tideBadge": "Spring Tide",
      "tideHigh": "High 06:12 (5.5 ft)",
      "tideNow": "Now 16:45 (Peak Bite Window)",
      "tideLow": "Low 12:40 (1.4 ft)",
      "tidePressure": "Pressure: 1014 hPa (Dropping slightly)",
      "tideWind": "Wind: NE 8 kts (Moderate Chop)",
      "trophySub": "TROPHY CATCH RECORD",
      "trophyTag": "Secret Log",
      "trophyLure": "Lure: Jerkbait 120F (Chartreuse Bone)",
      "trophyTideLabel": "Tide: Spring Tide / Ebb 30%",
      "trophyDate": "2026.10.18",
      "trophyExif": "EXIF Scrubbed"
    },
    "features": {
      "sub": "KEY FEATURES",
      "title": "<span class=\"inline-block\">Built for Absolute Privacy</span> <span class=\"inline-block\">& Real Anglers</span>",
      "desc": "From guarding your secret honey holes to instant PWA logging on offshore waters without internet access.",
      "item1": {
        "badge": "GPS Waypoint Map",
        "title": "Your Private Fishing Spots Map",
        "desc": "Pin productive reefs, sunken structures, depth contours, and kayak launch sites freely on interactive satellite maps with live distance and compass bearing from your current position.",
        "tag": "Pin Custom Waypoints & Compass Bearing"
      },
      "item2": {
        "badge": "100% Local",
        "title": "Zero External Server Uploads",
        "desc": "All GPS coordinates, photos, tackle logs, and tactical notes are saved strictly in your browser's IndexedDB. Zero cloud telemetry, zero sharing algorithms, and zero risk of coordinates leaking.",
        "tag": "Absolute Privacy Guaranteed"
      },
      "item3": {
        "badge": "PWA Offline",
        "title": "Fast PWA Works Everywhere Offline",
        "desc": "Add to your home screen for an addressbar-free fullscreen app. Aggressive asset caching ensures instantaneous loading and full functionality even offshore or on remote mountain streams.",
        "tag": "1-Tap Home Screen Install & Full Offline"
      },
      "item4": {
        "badge": "Tides & Weather",
        "title": "Tide Curves, Solunar & Weather",
        "desc": "Automatically tracks water height, tidal state (ebb/flood), moon phase, wind speed/direction, and atmospheric pressure at the exact second a fish is landed for deep pattern analysis.",
        "tag": "Tide Predictions & Solunar Activity"
      },
      "item5": {
        "badge": "Safe Sharing",
        "title": "Spot-Masked Social Catch Cards",
        "desc": "Automatically scrubs GPS coordinates and photo EXIF metadata before generating sleek social media catch cards with only species, length, weight, tide, and lure details.",
        "tag": "Zero Location Leaks & Social Sharing"
      },
      "item6": {
        "badge": "Catch Journal",
        "title": "Detailed Logbook & Tackle Box",
        "desc": "Record species, measurements, weights, hit lures, rigging, presentation depth, and retrieve actions alongside your photos to build your ultimate personal fishing database.",
        "tag": "Tackle Manager & Catch Gallery"
      },
      "item7": {
        "badge": "Self-Custody",
        "title": "Safe Local Backup & Restore",
        "desc": "Export your entire database into an encrypted JSON file with a single tap. Transfer everything to a new smartphone without depending on external cloud services.",
        "tag": "JSON Export & Easy Device Migration"
      },
      "item8": {
        "badge": "Instant Demo",
        "title": "Interactive Sample Data Mode",
        "desc": "Experience AnglerLog with 3 realistic sample spots and catch records pre-populated in 1 click. Explore the maps and tide tools immediately before logging your own waters.",
        "tag": "No Registration & 1-Tap Wipe"
      }
    },
    "workflow": {
      "sub": "ANGLING WORKFLOW",
      "title": "<span class=\"inline-block\">Not Just When You Catch Fish:</span> <span class=\"inline-block\">Your Complete Trip Companion</span>",
      "desc": "AnglerLog supports every phase of your fishing journey—from planning your weekend trip on Thursday night to logging offshore action and reviewing seasonal patterns at home.",
      "step1": {
        "step": "STEP 01",
        "time": "Before Trip (Planning)",
        "title": "Check Tides, Wind & Past Logs to Pick the Winning Spot",
        "desc": "Open AnglerLog before heading out to inspect upcoming tide curves, water levels, wind directions, and pressure. Compare conditions against your past catches to determine the highest-percentage honey hole.",
        "tag": "Weekend Tide Check & Pattern Matching"
      },
      "step2": {
        "step": "STEP 02",
        "time": "On the Water (Offshore & Remote)",
        "title": "Instant Offline GPS Pinning & Rapid Catch Logging",
        "desc": "Mark structures, rip currents, and baitballs on the spot with GPS. Log fish length, weight, and lures in seconds—or record water clarity and wind even on slow days so every trip builds intelligence.",
        "tag": "Offline PWA Operation & GPS Waypoints"
      },
      "step3": {
        "step": "STEP 03",
        "time": "After Trip (Review & Archive)",
        "title": "Analyze Bite Windows & Build a Lifetime Database",
        "desc": "Review where on the tide curve each strike occurred and refine your repeatable patterns. Export your full database anytime as a local JSON backup file to keep your hard-earned knowledge safe.",
        "tag": "Bite Window Analysis & Local JSON Backup"
      }
    },
    "guides": {
      "sub": "PRACTICAL GUIDES",
      "title": "<span class=\"inline-block\">Practical Guides for</span> <span class=\"inline-block\">Protecting Spots & Tactics</span>",
      "desc": "Learn how local-first architecture protects your secret waters and how systematic environmental logging turns random catches into repeatable success.",
      "col1": {
        "badge": "COLUMN 01 / Spot Privacy & Protection",
        "title": "Why Social & Cloud Fishing Apps Burn Secret Honey Holes—and How Local Storage Protects Them",
        "p1": "Every dedicated angler knows the frustration of spending months scouting a productive reef, bank, or jetty, only to see it overcrowded after coordinates or photo metadata leak online. Traditional social fishing apps upload your GPS logs and photo EXIF data to central servers where public heatmaps or shared feeds can expose your hard-earned locations.",
        "p2": "AnglerLog eliminates this risk at the architectural level. By storing all waypoints, notes, tackle logs, and photos exclusively inside your device browser's IndexedDB, zero data ever leaves your phone. With no user accounts and no cloud database, your secret fishing spots remain 100% yours."
      },
      "col2": {
        "badge": "COLUMN 02 / Tide & Weather Pattern Analysis",
        "title": "Beyond High and Low Tide: Finding Your True Bite Window with Tide Speed, Wind & Pressure",
        "p1": "Experienced anglers know that a spring tide alone does not guarantee a bite. Real feeding windows happen when multiple factors align: the rate of water movement during mid-tide, wind pushing baitfish against a shoreline, barometric pressure drops ahead of a front, and low-light periods at dawn or dusk.",
        "p2": "By linking each catch and observation to its exact position on the tide curve along with wind direction and pressure, AnglerLog helps you uncover spot-specific rules—such as discovering that a specific rocky point fires only during the first two hours of an outgoing tide with a moderate onshore breeze."
      },
      "col3": {
        "badge": "COLUMN 03 / Offshore & Remote Fieldcraft",
        "title": "Turning Your Smartphone into a Reliable Offline GPS Plotter & Field Journal",
        "p1": "Whether you are fishing remote offshore reefs, island hopping, or wading deep mountain streams, cellular signal is often weak or nonexistent. Web apps that rely on constant server connections fail right when you need to check a waypoint or log a trophy catch.",
        "p2": "By adding AnglerLog to your home screen as a Progressive Web App (PWA) before leaving port, the entire application interface is cached locally on your device. Even in airplane mode or dead zones, it launches in fullscreen within half a second and works seamlessly with your phone's internal GPS receiver."
      }
    },
    "pwa": {
      "badge": "PROGRESSIVE WEB APP (PWA)",
      "title": "<span class=\"inline-block\">Install in 1 Tap.</span> <span class=\"inline-block\">No App Store Needed.</span> <span class=\"inline-block text-gradient\">Instant Offline Access on Offshore Waters.</span>",
      "desc": "AnglerLog supports modern PWA technology. You can add it directly to your iOS or Android home screen from your browser. It opens in full-screen mode like a native app, loads in 0.5s, and runs reliably even without mobile network coverage.",
      "feat1Title": "Fullscreen & 0.5s Startup",
      "feat1Desc": "Clean addressbar-free interface with fast map panning and logging.",
      "feat2Title": "100% Offline Ready",
      "feat2Desc": "Works completely without internet on offshore reefs and boats.",
      "feat3Title": "Zero Account Signups",
      "feat3Desc": "No email or password needed. Open and use immediately.",
      "installIos": "iOS: Safari Share button → 'Add to Home Screen'",
      "installAndroid": "Android: Chrome menu → 'Install App'"
    },
    "faq": {
      "sub": "FREQUENTLY ASKED QUESTIONS",
      "title": "Frequently Asked Questions (FAQ)",
      "desc": "Common questions about AnglerLog's local-first privacy, offline capabilities, and data management.",
      "list": [
        {
          "q": "Can my pinned fishing spots, GPS coordinates, or catch photos ever be seen by other users?",
          "a": "Never. Every spot coordinate, note, tackle setup, and photo you save is stored strictly inside your own device's local browser storage (IndexedDB). Nothing is transmitted to external servers or shared with third parties."
        },
        {
          "q": "Is AnglerLog free to use? Do I need to create an account or sign in?",
          "a": "AnglerLog is 100% free with no hidden subscriptions. You do not need to register an email address, create an account, or log in. Simply open the app and start pinning spots immediately."
        },
        {
          "q": "How do I back up my data or transfer it when buying a new smartphone?",
          "a": "You can export all your spots, logs, and settings into a single JSON file with one tap from the backup menu. Save that file to your personal storage or transfer it to your new phone and import it directly into AnglerLog."
        },
        {
          "q": "Does it really work without internet or cellular service on offshore boats and remote shores?",
          "a": "Yes. Once loaded or installed to your home screen as a PWA, AnglerLog caches its core assets locally. You can launch the app, view your saved spots and catch history, read your device GPS coordinates, and record new entries completely offline."
        },
        {
          "q": "Can I use AnglerLog before my trip even if I haven't caught any fish yet?",
          "a": "Absolutely. Start by pinning the beaches, piers, reefs, or rivers you plan to visit. You can then use AnglerLog throughout the week to check upcoming tide curves, moon phases, and weather forecasts for each spot to plan your next outing."
        }
      ]
    },
    "cta": {
      "title": "<span class=\"inline-block\">Protect Your Secret Waters & Catches</span> <span class=\"inline-block\">Forever in Your Hands.</span>",
      "desc": "Zero registration required. Open right in your mobile browser and build your own private fishing database today.",
      "launchBtn": "Launch AnglerLog Now",
      "privacyLink": "View Privacy Policy & Disclaimer"
    },
    "videoShowcase": {
      "sub": "FEATURE SHOWCASE",
      "title": "Experience Core Features in Action",
      "desc": "From pinning secret honey holes on the map to rapid catch logging, tackle customization, and intelligent tide forecasting—watch how AnglerLog performs seamlessly in the field.",
      "tabs": {
            "spot": "1. Spot Pinning",
            "catch": "2. Catch Record",
            "tackle": "3. Tackle Box",
            "tide": "4. Tide & Prediction"
      },
      "items": {
            "spot": {
                  "badge": "GPS SPOT PINNING",
                  "title": "Pin Secret Honey Holes Directly on the Map",
                  "desc": "Drop pins on reefs, drop-offs, or launch spots with a single tap. Add depth, seabed structure, and hazard notes with total peace of mind—stored 100% locally with zero cloud leaks.",
                  "points": [
                        "Rapid coordinate capture right from the interactive map",
                        "Categorize spots: rocky ledges, surf, breakwaters & estuaries",
                        "100% encrypted local storage (IndexedDB) with zero external uploads"
                  ],
                  "videoFile": "angler_spot_add"
            },
            "catch": {
                  "badge": "CATCH LOGGING",
                  "title": "Log Catches & Hit Lures in Seconds",
                  "desc": "Record trophy length, weight, strike lures, and retrieval actions instantly. Tide curves and atmospheric weather are automatically linked to uncover your winning patterns.",
                  "points": [
                        "Quick-entry for species, length, weight, and favorite lures",
                        "Auto-linked tide stage, water temp, and barometric pressure",
                        "Instant privacy-masked shareable catch cards for social media"
                  ],
                  "videoFile": "angler_catch_record"
            },
            "tackle": {
                  "badge": "TACKLE BOX MANAGER",
                  "title": "Organize Rods, Reels & Lure Setups",
                  "desc": "Configure custom combos for surfcasting, inshore spinning, or offshore jigging. Update favorite lures on the fly and link setups to catch logs with a single tap.",
                  "points": [
                        "Customize rod, reel, line, and leader configurations",
                        "Add and update favorite lures and jigs effortlessly",
                        "Link tackle setups directly to catch records for gear insights"
                  ],
                  "videoFile": "angler_tackle_box_management"
            },
            "tide": {
                  "badge": "TIDE & PATTERN PREDICTION",
                  "title": "Scrub Interactive Tide Curves & Forecast Bite Windows",
                  "desc": "Drag across the 24-hour tide curve to inspect exact water levels, ebb/flood transitions, and peak feeding periods. Access tactical advice tailored to conditions.",
                  "points": [
                        "Smooth interactive scrubbing across 24-hour tide curves",
                        "Automatic calculation of Prime Bite feeding windows",
                        "Actionable tactical advice based on lunar phase, wind & season"
                  ],
                  "videoFile": "angler_tide_pattern_prediction"
            }
      },
      "tryBtn": "Try This Feature in App"
},
    "footer": {
      "tagline": "Secret Fishing Spots Map & 100% Local-First Catch Journal",
      "copy": "© 2026 AnglerLog. All rights reserved. Built for dedicated anglers.",
      "archBadge": "100% Local Storage Architecture"
    }
  },
  "fr": {
    "meta": {
      "title": "AnglerLog - Carte Secrète des Spots de Pêche | Journal PWA 100% Hors-Ligne & Local",
      "desc": "Créez votre propre carte secrète de spots de pêche. Stockage 100% local sans fuite vers le cloud. Installez en PWA pour enregistrer vos prises en mer, sur les rochers et en bateau sans réseau cellulaire.",
      "ogTitle": "AnglerLog - Carte Secrète des Spots de Pêche (100% Local & PWA)",
      "ogDesc": "Protégez vos coins secrets. Stockage local 100% hors-ligne, carte GPS personnalisée, prévisions de marées et PWA prête à l'emploi."
    },
    "nav": {
      "features": "Fonctionnalités",
      "preview": "Aperçu",
      "workflow": "Méthode",
      "guides": "Guides",
      "pwa": "App PWA",
      "faq": "FAQ",
      "launchApp": "Ouvrir l'app",
      "home": "Accueil Français",
      "privacy": "Confidentialité & Mentions Légales"
    },
    "hero": {
      "pill": "Carte des Spots de Pêche & Journal de Prises 100% Hors-Ligne & Local",
      "title": "<span class=\"inline-block\">Votre Carte Secrète des Spots.</span> <span class=\"inline-block\"><span class=\"text-gradient\">Stockage 100% Local.</span> Secret Absolu.</span>",
      "desc": "Marquez vos têtes de roche, fosses secrètes et cales de mise à l'eau en toute sérénité. Vos données restent exclusivement dans votre navigateur (IndexedDB) sans jamais être transmises à des serveurs tiers. Grâce à la technologie PWA, lancez l'application en 0,5 seconde et notez vos prises au large sans aucun signal cellulaire.",
      "launchBtn": "Lancer l'Édition Française",
      "launchUrl": "https://fr.angler-log.app/",
      "demoBtn": "Démo Immédiate en 1 Clic",
      "demoDesc": "Testez instantanément la carte interactive, les courbes de marée et le carnet de trophées avec 3 spots pré-chargés.",
      "mockupSpotTitle": "Presqu'île - Tombant & Écume du Large (Spot A)",
      "mockupTarget": "Bar / Loup 82 cm / 4,8 kg",
      "mockupTide": "Vive-eau / Descendante 30% (Hauteur: 4,5 m)",
      "mockupWeather": "Vent: NE 15 km/h / Pression: 1014 hPa",
      "mockupStatusLocal": "Stockage Local Sécurisé (IndexedDB)",
      "mockupStatusGps": "Position GPS Précise (Zéro Envoi Serveur)",
      "depthLabel": "Attaque sur la cassure / Fond 4,5 m",
      "reefWarning": "Tête de roche & Courant vif / Présence de lançons",
      "currentPos": "Position Actuelle (GPS Verrouillé)",
      "statsCount": "Spots enregistrés: 14 repères (100% sur l'appareil)",
      "statsAdd": "Ajouter un repère +",
      "tideTitle": "Marées en Direct & Météo Marine",
      "tideBadge": "Grande Marée",
      "tideHigh": "PM 06:12 (5,80 m)",
      "tideNow": "Actuel 16:45 (Pic d'activité)",
      "tideLow": "BM 12:40 (1,20 m)",
      "tidePressure": "Pression: 1014 hPa (Légère baisse favorable)",
      "tideWind": "Vent: NE 15 km/h (Clapot régulier)",
      "trophySub": "RECORD DE PRISE PERSONNEL",
      "trophyTag": "Secret Gardé",
      "trophyLure": "Leurre: Poisson nageur 120F (Coloris Fluo)",
      "trophyTideLabel": "Marée: Vive-eau / Début descendant",
      "trophyDate": "18.10.2026",
      "trophyExif": "EXIF Masqué"
    },
    "features": {
      "sub": "POINTS FORTS",
      "title": "<span class=\"inline-block\">Conçu pour la Confidentialité</span> <span class=\"inline-block\">& les Vrais Passionnés</span>",
      "desc": "De la protection absolue de vos coins secrets à l'enregistrement fluide au large sans connexion internet.",
      "item1": {
        "badge": "Reperes GPS",
        "title": "Votre Carte Secrète Personnelle",
        "desc": "Positionnez vos têtes de roches, cassures, accès côtiers et cales de mise à l'eau sur une carte satellite interactive avec boussole et calcul de distance en direct.",
        "tag": "Repères GPS personnalisés & Boussole de navigation"
      },
      "item2": {
        "badge": "100% Local",
        "title": "Zéro Transmission vers l'Extérieur",
        "desc": "Coordonnées, photos de prises, montages et notes sont stockés uniquement dans votre appareil (IndexedDB). Aucune fuite possible vers des serveurs centraux ou des flux publics.",
        "tag": "Confidentialité Totale (Conforme RGPD)"
      },
      "item3": {
        "badge": "PWA Hors-Ligne",
        "title": "Application PWA Réactive Hors Réseau",
        "desc": "Ajoutez à l'écran d'accueil pour profiter d'une interface plein écran sans barre d'adresse. Les ressources sont mises en cache pour fonctionner sans accroc en mer ou en rivière isolée.",
        "tag": "Installation 1 clic & Fonctionnement hors-ligne"
      },
      "item4": {
        "badge": "Marée & Météo",
        "title": "Courbes de Marée, Solunaire & Météo",
        "desc": "Associez automatiquement la hauteur d'eau, l'état du courant, la phase lunaire, le vent et la pression atmosphérique au moment exact où la prise a été enregistrée.",
        "tag": "Prédictions de marée & Indices d'activité solunaire"
      },
      "item5": {
        "badge": "Partage Protégé",
        "title": "Cartes Réseaux Sociaux avec Spot Masqué",
        "desc": "Générez en 0,1 seconde une photo de prise valorisante pour vos réseaux sociaux avec espèce, taille, poids et leurre, tout en masquant complètement vos coordonnées GPS et l'EXIF.",
        "tag": "Partage social sécurisé sans fuite de spot"
      },
      "item6": {
        "badge": "Carnet de Prises",
        "title": "Carnet Détaillé & Boîte à Pêche",
        "desc": "Enregistrez tailles, poids, leurres fétiches, profondeurs de nage et animations pour constituer un véritable historique personnel de vos meilleures sessions.",
        "tag": "Gestion des boîtes à leurres & Galerie photo"
      },
      "item7": {
        "badge": "Autonomie Complète",
        "title": "Sauvegarde & Restauration JSON",
        "desc": "Exportez l'intégralité de votre carnet et de vos repères dans un fichier JSON personnel en un clic. Transférez facilement vos données lors d'un changement de smartphone.",
        "tag": "Export JSON & Migration sans cloud"
      },
      "item8": {
        "badge": "Démo Immédiate",
        "title": "Mode Découverte avec Données Test",
        "desc": "Testez l'application avec 3 faux spots de pêche et des prises réalistes déjà enregistrés. Découvrez le fonctionnement de la carte et des marées sans aucune contrainte.",
        "tag": "Sans inscription & Suppression en 1 tap"
      }
    },
    "workflow": {
      "sub": "MÉTHODE DU PÊCHEUR",
      "title": "<span class=\"inline-block\">Bien Plus qu'un Simple Carnet:</span> <span class=\"inline-block\">Votre Compagnon de Sortie</span>",
      "desc": "De la préparation du jeudi soir jusqu'à l'analyse des réussites au retour au port, AnglerLog sublime chaque étape de votre passion.",
      "step1": {
        "step": "ÉTAPE 01",
        "time": "Avant le départ (Préparation)",
        "title": "Analyser les marées, le vent et vos réussites passées",
        "desc": "Consultez les hauteurs d'eau, horaires de pleine mer/basse mer et prévisions météo. Comparez avec vos anciennes prises sur des marées similaires pour sélectionner le meilleur spot du jour.",
        "tag": "Vérification des marées & Choix tactique du spot"
      },
      "step2": {
        "step": "ÉTAPE 02",
        "time": "Sur l'eau (Côte, rochers & bateau)",
        "title": "Pointage GPS instantané & Enregistrement hors réseau",
        "desc": "En arrivant sur zone, marquez la dérive ou la cassure au GPS d'un geste. Photographiez vos prises et notez le leurre immédiatement. Même sans poisson, gardez une trace des conditions observées.",
        "tag": "Pointage GPS & Journal terrain hors-ligne"
      },
      "step3": {
        "step": "ÉTAPE 03",
        "time": "Après la sortie (Bilan & Archives)",
        "title": "Analyser les moments de touche & Bâtir votre expertise",
        "desc": "Visualisez à quel moment précis de la marée les touches sont survenues pour comprendre les schémas gagnants. Sauvegardez vos données en JSON pour préserver votre patrimoine de pêche.",
        "tag": "Analyse des fenêtres de touche & Sauvegarde JSON"
      }
    },
    "guides": {
      "sub": "GUIDES PRATIQUES",
      "title": "<span class=\"inline-block\">Conseils Terrain pour</span> <span class=\"inline-block\">Protéger vos Spots & Réussir</span>",
      "desc": "Découvrez pourquoi une architecture 100% locale protège vos coins secrets et comment un suivi rigoureux transforme le hasard en victoires régulières.",
      "col1": {
        "badge": "GUIDE 01 / Protection des Spots & Vie Privée",
        "title": "Pourquoi les applications cloud détruisent les coins secrets et comment le local vous protège",
        "p1": "Tout passionné a déjà connu la frustration de voir un poste durement déniché se retrouver envahi après une fuite de coordonnées GPS ou de métadonnées photo sur les réseaux sociaux. Les applications de pêche classiques envoient vos données sur des serveurs tiers où des cartes publiques finissent par révéler vos trésors.",
        "p2": "AnglerLog supprime ce risque à la racine. Grâce au stockage exclusif dans la mémoire locale de votre navigateur (IndexedDB), aucune donnée ne quitte votre téléphone. Sans compte utilisateur ni base de données cloud, vos spots secrets restent strictement votre propriété."
      },
      "col2": {
        "badge": "GUIDE 02 / Analyse des Marées & Météo",
        "title": "Au-delà des pleines et basses mers: trouver la vraie fenêtre d'activité",
        "p1": "Les pêcheurs chevronnés savent qu'un fort coefficient ne garantit pas la réussite. Le véritable moment d'activité se déclenche quand plusieurs facteurs s'alignent: la vitesse du courant au tiers de marée, le vent qui pousse les proies vers une bordure et la baisse barométrique avant un front.",
        "p2": "En associant chaque capture à sa position exacte sur la courbe de marée, au vent et à la pression, AnglerLog met en lumière les règles propres à chaque poste: par exemple qu'un tombant ne produit qu'aux deux premières heures de descendante par vent de terre modéré."
      },
      "col3": {
        "badge": "GUIDE 03 / Pratique en Mer & Zones Isolées",
        "title": "Faire de son smartphone un traceur GPS et un carnet de bord infaillible",
        "p1": "Que vous pêchiez sur une île isolée, le long de falaises rocheuses ou à plusieurs milles des côtes en bateau, le réseau cellulaire est souvent absent. Les applications web classiques qui exigent une connexion permanente se bloquent au moment précis où vous souhaitez enregistrer une prise.",
        "p2": "En installant AnglerLog sur votre écran d'accueil en PWA avant d'embarquer, tous les fichiers sont conservés dans votre appareil. Même en mode avion ou en zone blanche, l'application s'ouvre en une demi-seconde et exploite directement la puce GPS de votre téléphone."
      }
    },
    "pwa": {
      "badge": "PROGRESSIVE WEB APP (PWA)",
      "title": "<span class=\"inline-block\">Installation en 1 Clic.</span> <span class=\"inline-block\">Sans App Store.</span> <span class=\"inline-block text-gradient\">Accès Hors-Ligne Immédiat au Large.</span>",
      "desc": "AnglerLog utilise la technologie PWA moderne. Ajoutez l'application directement à l'écran d'accueil de votre smartphone depuis votre navigateur. Elle se lance en plein écran comme une application native, s'ouvre en 0,5s et fonctionne parfaitement sans connexion réseau.",
      "feat1Title": "Plein écran & Démarrage en 0,5s",
      "feat1Desc": "Interface épurée sans barre d'adresse pour manipuler cartes et prises.",
      "feat2Title": "100% Fonctionnel Hors Réseau",
      "feat2Desc": "Enregistrement complet même en zone blanche ou au grand large.",
      "feat3Title": "Aucune Création de Compte",
      "feat3Desc": "Ni email ni mot de passe. Ouvrez et commencez immédiatement.",
      "installIos": "iOS: Bouton Partager de Safari → « Sur l'écran d'accueil »",
      "installAndroid": "Android: Menu de Chrome → « Installer l'application »"
    },
    "faq": {
      "sub": "FOIRE AUX QUESTIONS",
      "title": "Questions Fréquentes (FAQ)",
      "desc": "Tout savoir sur le fonctionnement local, la sécurité de vos données et l'utilisation hors-ligne d'AnglerLog.",
      "list": [
        {
          "q": "Mes coordonnées GPS secrètes ou mes photos de prises peuvent-elles être vues par d'autres ?",
          "a": "Absolument jamais. Chaque coordonnée de spot, note, matériel et photo que vous enregistrez est conservé uniquement dans la mémoire locale de votre navigateur (IndexedDB). Rien n'est envoyé vers des serveurs externes ni partagé avec des tiers."
        },
        {
          "q": "L'application est-elle gratuite ? Dois-je m'inscrire avec une adresse email ?",
          "a": "AnglerLog est 100% gratuit et sans abonnement caché. Vous n'avez pas besoin de créer de compte, ni de renseigner d'adresse email ou de mot de passe. Dès que vous ouvrez l'application, votre carnet personnel est prêt à l'emploi."
        },
        {
          "q": "Comment sauvegarder mes données ou changer de smartphone sans rien perdre ?",
          "a": "Depuis le menu de l'application, l'option « Sauvegarde » génère un fichier JSON complet contenant tous vos spots et prises. Enregistrez ce fichier sur votre espace personnel ou envoyez-le sur votre nouveau téléphone pour le restaurer en un clic."
        },
        {
          "q": "L'application fonctionne-t-elle vraiment sans internet sur un bateau ou une côte isolée ?",
          "a": "Oui. Grâce à la mise en cache PWA, l'application fonctionne de manière autonome. Vous pouvez consulter vos cartes enregistrées, lire vos coordonnées GPS en direct et consigner de nouvelles prises sans aucune couverture réseau."
        },
        {
          "q": "Puis-je utiliser AnglerLog avant ma sortie pour planifier même si je n'ai pas encore de prises ?",
          "a": "Tout à fait. Commencez par marquer sur la carte les plages, falaises, pointes rocheuses ou épaves que vous souhaitez explorer. Vous pourrez ainsi suivre les marées et la météo prévues tout au long de la semaine pour préparer votre sortie."
        }
      ]
    },
    "cta": {
      "title": "<span class=\"inline-block\">Protégez vos Coins Secrets & vos Prises</span> <span class=\"inline-block\">dans Votre Propre Poche.</span>",
      "desc": "Aucune inscription nécessaire. Ouvrez l'application dans votre navigateur dès aujourd'hui et créez votre carnet de pêche sur mesure.",
      "launchBtn": "Lancer AnglerLog Français",
      "privacyLink": "Consulter la politique de confidentialité"
    },
    "videoShowcase": {
      "sub": "DÉMONSTRATION DES FONCTIONNALITÉS",
      "title": "Découvrez les fonctionnalités clés en action",
      "desc": "Du marquage précis de vos coins secrets sur la carte à l'enregistrement ultra-rapide des prises, en passant par la gestion du matériel et les prévisions de marées.",
      "tabs": {
            "spot": "1. Nouveaux Spots",
            "catch": "2. Prises",
            "tackle": "3. Matériel",
            "tide": "4. Marées & Activité"
      },
      "items": {
            "spot": {
                  "badge": "GÉOLOCALISATION DE SPOTS",
                  "title": "Marquez vos coins secrets directement sur la carte",
                  "desc": "Placez des repères sur vos rochers, plateaux et cales de mise à l'eau d'un simple toucher. Renseignez la profondeur et la nature du fond en toute confidentialité.",
                  "points": [
                        "Capture rapide des coordonnées GPS par simple clic sur la carte",
                        "Typologie complète : enrochement, plage, estuaire et digue",
                        "Stockage 100% chiffré dans le navigateur sans transmission externe"
                  ],
                  "videoFile": "angler_spot_add"
            },
            "catch": {
                  "badge": "JOURNAL DE PRISES",
                  "title": "Enregistrez vos prises et leurres gagnants",
                  "desc": "Notez la taille, le poids, le leurre et l'animation en quelques secondes. La hauteur d'eau et la météo se synchronisent automatiquement.",
                  "points": [
                        "Saisie rapide de l'espèce (Bar, Daurade...), taille et poids",
                        "Association automatique de la phase de marée et du vent",
                        "Cartes photo partageables avec masquage de l'emplacement secret"
                  ],
                  "videoFile": "angler_catch_record"
            },
            "tackle": {
                  "badge": "BOÎTE DE PÊCHE",
                  "title": "Organisez vos ensembles cannes, moulinets et leurres",
                  "desc": "Configurez vos ensembles pour le spinning, surfcasting ou la pêche au bar. Mettez à jour vos leurres fétiches en un instant.",
                  "points": [
                        "Personnalisation canne, moulinet, tresse et bas de ligne",
                        "Ajout rapide de leurres durs, souples et jigs favoris",
                        "Liaison directe aux captures pour analyser les rendements"
                  ],
                  "videoFile": "angler_tackle_box_management"
            },
            "tide": {
                  "badge": "MARÉES ET PRÉDICTIONS",
                  "title": "Explorez la courbe de marée et anticipez les moments d'activité",
                  "desc": "Faites glisser votre doigt sur la courbe pour observer le marnage et les créneaux propices. Obtenez des conseils tactiques sur mesure.",
                  "points": [
                        "Défilement fluide sur la courbe horaire des marées",
                        "Calcul automatique des pics d'activité alimentaire",
                        "Conseils tactiques personnalisés selon le vent et la lune"
                  ],
                  "videoFile": "angler_tide_pattern_prediction"
            }
      },
      "tryBtn": "Essayer cette fonctionnalité"
},
    "footer": {
      "tagline": "Carte Secrète des Spots & Journal de Pêche 100% Hors-Ligne",
      "copy": "© 2026 AnglerLog. Tous droits réservés. Conçu pour les vrais pêcheurs.",
      "archBadge": "Architecture 100% Stockage Local"
    }
  },
  "de": {
    "meta": {
      "title": "AnglerLog - Geheime Angelplätze-Karte | 100% Offline & Lokales PWA Fangbuch",
      "desc": "Erstellen Sie Ihre private Gewässerkarte für geheime Fangplätze. 100% lokaler Speicher ohne Cloud-Datenlecks. Als PWA installierbar, um Fänge auf See und an abgelegenen Gewässern ohne Mobilfunknetz zu dokumentieren.",
      "ogTitle": "AnglerLog - Geheime Angelplätze-Karte (100% Lokal & PWA)",
      "ogDesc": "Schützen Sie Ihre Hotspots. 100% Offline-Speicher, anpassbare GPS-Karte, Gezeitenvorhersagen und PWA-Installation bereit."
    },
    "nav": {
      "features": "Funktionen",
      "preview": "Vorschau",
      "workflow": "Praxis",
      "guides": "Ratgeber",
      "pwa": "PWA App",
      "faq": "FAQ",
      "launchApp": "App starten",
      "home": "Deutsche Startseite",
      "privacy": "Datenschutz & Haftungsausschluss"
    },
    "hero": {
      "pill": "100% Offline & Lokales Fangbuch & Geheime GPS-Gewässerkarte",
      "title": "<span class=\"inline-block\">Ihre Geheime Angelplätze-Karte.</span> <span class=\"inline-block\"><span class=\"text-gradient\">100% Lokal Gespeichert.</span> Absolut Geheim.</span>",
      "desc": "Markieren Sie Hotspots, Unterwasserkanten, Steinschüttungen und Bootsrampen mit vollem Vertrauen. Alle Daten bleiben ausschließlich im Speicher Ihres Browsergeräts (IndexedDB) – niemals auf fremden Servern. Dank moderner PWA-Technologie starten Sie die App in 0,5 Sekunden und erfassen Fänge völlig unabhängig vom Mobilfunknetz.",
      "launchBtn": "Deutsche Edition Starten",
      "launchUrl": "https://de.angler-log.app/",
      "demoBtn": "Sofort-Demo mit Beispieldaten (1 Klick)",
      "demoDesc": "Testen Sie die interaktive Gewässerkarte, Gezeitenkurven und Trophäenübersicht sofort mit 3 vorinstallierten Beispielfangplätzen.",
      "mockupSpotTitle": "Außenmole - Strömungskante & Steinpackung (Spot A)",
      "mockupTarget": "Zander / Wolfsbarsch 82 cm / 4,8 kg",
      "mockupTide": "Springtide / Ebbe 30% (Wassertiefe: 4,5 m)",
      "mockupWeather": "Wind: NO 15 km/h / Luftdruck: 1014 hPa",
      "mockupStatusLocal": "100% Lokal Verschlüsselt (IndexedDB)",
      "mockupStatusGps": "Live GPS-Ortung (Kein Server-Upload)",
      "depthLabel": "Biss an der Kante / Wassertiefe 4,5 m",
      "reefWarning": "Hängergefahr an Steinpackung / Hohe Futterfischdichte",
      "currentPos": "Aktueller Standort (GPS Fix)",
      "statsCount": "Gespeicherte Spots: 14 Fangplätze (100% auf dem Gerät)",
      "statsAdd": "Spot-Markierung hinzufügen +",
      "tideTitle": "Echtzeit-Gezeiten & Wetterdaten",
      "tideBadge": "Springtide",
      "tideHigh": "HW 06:12 (5,80 m)",
      "tideNow": "Aktuell 16:45 (Beißfenster)",
      "tideLow": "NW 12:40 (1,20 m)",
      "tidePressure": "Luftdruck: 1014 hPa (Leichter Abfall günstig)",
      "tideWind": "Wind: NO 15 km/h (Leichte Kabbelwelle)",
      "trophySub": "PERSÖNLICHER REKORDFANG",
      "trophyTag": "Geheim Gespeichert",
      "trophyLure": "Köder: Schlanker Wobbler 120F (Schockfarbe)",
      "trophyTideLabel": "Gezeit: Springtide / Beginnende Ebbe",
      "trophyDate": "18.10.2026",
      "trophyExif": "EXIF Vollständig Entfernt"
    },
    "features": {
      "sub": "HAUPTMERKMALE",
      "title": "<span class=\"inline-block\">Maximale Privatsphäre</span> <span class=\"inline-block\">& Echte Anglerpraxis</span>",
      "desc": "Vom Schutz geheimer Fangplätze bis zum zuverlässigen Erfassen auf dem offenen Wasser ohne Netzempfang.",
      "item1": {
        "badge": "GPS-Fangplatzkarte",
        "title": "Ihre Eigene Private Gewässerkarte",
        "desc": "Markieren Sie Plateaus, Krautfelder, Tiefenlinien und Slipstellen auf einer interaktiven Satellitenkarte mit Entfernungs- und Kompasspeilung in Echtzeit.",
        "tag": "Eigene GPS-Markierungen & Kompasspeilung"
      },
      "item2": {
        "badge": "100% Lokal",
        "title": "Keine Weitergabe an Fremde Server",
        "desc": "GPS-Koordinaten, Fangfotos, Gerätedaten und Notizen werden ausschließlich lokal in der IndexedDB Ihres Browsers gespeichert. Null Cloud-Tracking, null Datenlecks.",
        "tag": "Vollständiger Datenschutz (DSGVO-konform)"
      },
      "item3": {
        "badge": "PWA Offline",
        "title": "Schnelle PWA Funktioniert Überall Offline",
        "desc": "Fügen Sie die App zum Startbildschirm hinzu und nutzen Sie sie als Vollbild-App ohne Browserleiste. Caching sorgt für blitzschnelles Laden auch mitten auf dem See.",
        "tag": "1-Klick-Installation & Offline-Nutzung"
      },
      "item4": {
        "badge": "Gezeiten & Wetter",
        "title": "Gezeitenkurven, Solunar & Wetterdaten",
        "desc": "Erfasst Wasserstand, Gezeitenphase (Ebbe/Flut), Mondphasen, Windstärke und Luftdruck exakt im Moment des Fangs für eine präzise Musteranalyse.",
        "tag": "Gezeitenvorhersage & Solunar-Aktivitätsindex"
      },
      "item5": {
        "badge": "Sicheres Teilen",
        "title": "Fangkarte für Social Media mit Spot-Schutz",
        "desc": "Erzeugt in 0,1 Sekunden ansprechende Social-Media-Fangkarten mit Fischart, Maßen und Köder, während GPS-Koordinaten und Foto-EXIF-Daten restlos entfernt werden.",
        "tag": "Keine Preisgabe geheimer Koordinaten"
      },
      "item6": {
        "badge": "Fangbuch",
        "title": "Detailliertes Fangbuch & Tackle-Box",
        "desc": "Dokumentieren Sie Fischarten, Längen, Gewichte, Erfolgsköder, Lauftiefen und Führungsmethoden für eine lückenlose Fanghistorie.",
        "tag": "Köderverwaltung & Fangfotogalerie"
      },
      "item7": {
        "badge": "Volle Kontrolle",
        "title": "Sichere Lokale Sicherung & Wiederherstellung",
        "desc": "Exportieren Sie Ihre komplette Datenbank mit einem Fingertipp als JSON-Datei. Übertragen Sie Ihre Daten bei einem Gerätewechsel ohne fremde Cloud-Dienste.",
        "tag": "JSON-Export & Einfacher Gerätewechsel"
      },
      "item8": {
        "badge": "Sofort-Demo",
        "title": "Interaktiver Modus mit Beispieldaten",
        "desc": "Erleben Sie die App mit 3 realistischen Test-Spots und Fangeinträgen mit einem Klick. Erkunden Sie Gewässerkarte und Gezeitentools sofort ohne Hürden.",
        "tag": "Ohne Registrierung & 1-Klick-Löschung"
      }
    },
    "workflow": {
      "sub": "PRAXIS-LEITFADEN",
      "title": "<span class=\"inline-block\">Nicht Nur für Den Fangmoment:</span> <span class=\"inline-block\">Ihr Begleiter am Wasser</span>",
      "desc": "Von der Taktikplanung am Vorabend über schnelle Einträge auf dem Boot bis zur Auswertung daheim unterstützt AnglerLog jeden Schritt.",
      "step1": {
        "step": "SCHRITT 01",
        "time": "Vor dem Angeltag (Planung)",
        "title": "Gezeiten, Wind und Fanghistorie abgleichen",
        "desc": "Öffnen Sie AnglerLog vor der Tour, um Wasserstandskurven, Strömungszeiten, Wind und Luftdruck zu prüfen. Vergleichen Sie mit früheren Fängen, um den chancenreichsten Platz zu wählen.",
        "tag": "Gezeitencheck am Wochenende & Taktikwahl"
      },
      "step2": {
        "step": "SCHRITT 02",
        "time": "Am Gewässer (Ufer, Boot & See)",
        "title": "GPS-Spots sofort markieren & Fänge offline erfassen",
        "desc": "Markieren Sie heiße Kanten und Futterfischschwärme direkt per GPS. Tragen Sie Fischgröße, Gewicht und Köder sekundenschnell ein – auch an Schneidertagen für wertvolle Gewässerdaten.",
        "tag": "Offline-Nutzung & GPS-Wegpunkte"
      },
      "step3": {
        "step": "SCHRITT 03",
        "time": "Nach der Tour (Auswertung & Archiv)",
        "title": "Beißfenster analysieren & Wissen dauerhaft sichern",
        "desc": "Überprüfen Sie, zu welcher Gezeitenphase die Bisse kamen, und schärfen Sie Ihre Muster. Sichern Sie Ihre Daten jederzeit als lokale JSON-Datei als persönlichen Erfahrungsschatz.",
        "tag": "Beißfenster-Analyse & Lokales JSON-Backup"
      }
    },
    "guides": {
      "sub": "PRAKTISCHE RATGEBER",
      "title": "<span class=\"inline-block\">Praxistipps für den</span> <span class=\"inline-block\">Schutz Ihrer Plätze & Mehr Erfolg</span>",
      "desc": "Erfahren Sie, warum lokale Datenspeicherung Ihre Geheimnisse schützt und wie gezieltes Dokumentieren Zufallstreffer in planbare Fänge verwandelt.",
      "col1": {
        "badge": "RATGEBER 01 / Fangplatzschutz & Privatsphäre",
        "title": "Warum Cloud-Angel-Apps geheime Plätze überlaufen lassen und wie lokale Speicherung schützt",
        "p1": "Jeder engagierte Angler kennt den Frust, wenn mühsam erarbeitete Hotspots überlaufen sind, weil Standortdaten oder Foto-Metadaten im Netz gelandet sind. Herkömmliche Social-Fishing-Apps laden GPS-Punkte auf zentrale Server hoch, wo geteilte Feeds Ihre Erfolge öffentlich preisgeben.",
        "p2": "AnglerLog beseitigt dieses Risiko architektonisch. Alle Markierungen, Notizen und Fotos verbleiben ausschließlich im lokalen IndexedDB-Speicher Ihres Geräts. Ohne Benutzerkonto und ohne fremde Serverdatenbank bleiben Ihre Geheimnisse zu 100% bei Ihnen."
      },
      "col2": {
        "badge": "RATGEBER 02 / Gezeiten- & Wetteranalyse",
        "title": "Mehr als Hoch- und Niedrigwasser: Das wahre Beißfenster erkennen",
        "p1": "Erfahrene Angler wissen, dass eine Springtide allein noch keine Fanggarantie ist. Wahre Beißfenster entstehen beim Zusammenspiel mehrerer Faktoren: Strömungsgeschwindigkeit bei auflaufendem oder ablaufendem Wasser, windbedingte Futterfischkonzentrationen und Luftdruckveränderungen.",
        "p2": "Durch die direkte Verknüpfung jedes Fangs mit der genauen Position auf der Gezeitenkurve, Windrichtung und Luftdruck deckt AnglerLog spotspezifische Gesetzmäßigkeiten auf – etwa dass eine bestimmte Steinkante nur in den ersten zwei Stunden der Ebbe bei mäßigem Wind fängt."
      },
      "col3": {
        "badge": "RATGEBER 03 / Praxis am Gewässer & Funklöcher",
        "title": "Das Smartphone als zuverlässiges Offline-GPS-Gerät und Fangbuch nutzen",
        "p1": "Egal ob auf offener See, an abgelegenen Felsküsten oder tief in Bergtälern: Mobilfunkempfang ist beim Angeln oft schwach oder gar nicht vorhanden. Herkömmliche Web-Apps verweigern genau dann den Dienst, wenn man einen Wegpunkt prüfen oder einen Rekordfisch festhalten will.",
        "p2": "Indem Sie AnglerLog vor der Tour als Progressive Web App (PWA) zum Startbildschirm hinzufügen, werden alle Programmdateien lokal zwischengespeichert. Selbst im Flugmodus öffnet die App in einer halben Sekunde und nutzt den geräteeigenen GPS-Sensor reibungslos ohne Internetverbindung."
      }
    },
    "pwa": {
      "badge": "PROGRESSIVE WEB APP (PWA)",
      "title": "<span class=\"inline-block\">Installation in 1 Klick.</span> <span class=\"inline-block\">Kein App Store Nötig.</span> <span class=\"inline-block text-gradient\">Sofortiger Offline-Zugriff auf dem Wasser.</span>",
      "desc": "AnglerLog setzt auf moderne PWA-Technologie. Fügen Sie die App direkt aus Ihrem Browser zum Startbildschirm Ihres Smartphones hinzu. Sie startet im Vollbildmodus wie eine native App, lädt in 0,5 Sekunden und funktioniert selbst im tiefsten Funkloch zuverlässig.",
      "feat1Title": "Vollbild & 0,5s Schnellstart",
      "feat1Desc": "Aufgeräumte Oberfläche ohne Adressleiste für intuitive Bedienung.",
      "feat2Title": "100% Offline-Einsatzbereit",
      "feat2Desc": "Lückenlose Erfassung auch auf hoher See und ohne Mobilfunknetz.",
      "feat3Title": "Keine Benutzerregistrierung",
      "feat3Desc": "Keine E-Mail, kein Passwort. Öffnen und sofort loslegen.",
      "installIos": "iOS: Safari Teilen-Button → «Zum Home-Bildschirm»",
      "installAndroid": "Android: Chrome Menü → «App installieren»"
    },
    "faq": {
      "sub": "HÄUFIG GESTELLTE FRAGEN",
      "title": "Häufig Gestellte Fragen (FAQ)",
      "desc": "Wissenswertes über die lokale Datenspeicherung, Sicherheit und den Offline-Betrieb von AnglerLog.",
      "list": [
        {
          "q": "Können meine geheimen GPS-Fangplätze oder Fotos von anderen Anglern eingesehen werden?",
          "a": "Niemals. Alle Koordinaten, Notizen, Gerätedaten und Fotos werden ausschließlich im lokalen Speicher Ihres eigenen Browsergeräts (IndexedDB) abgelegt. Es findet keinerlei Übertragung an externe Server statt."
        },
        {
          "q": "Ist AnglerLog kostenlos? Muss ich mich registrieren oder eine E-Mail angeben?",
          "a": "AnglerLog ist zu 100% kostenlos und kommt ohne versteckte Abonnements aus. Sie müssen weder ein Konto erstellen noch eine E-Mail-Adresse angeben. Sie können die App sofort öffnen und Fangplätze markieren."
        },
        {
          "q": "Wie sichere ich meine Daten oder übertrage sie auf ein neues Smartphone?",
          "a": "Im Einstellungsmenü können Sie mit der Funktion «Backup» alle Spots und Fänge in einer einzigen JSON-Datei exportieren. Speichern Sie diese Datei in Ihrem privaten Speicher oder senden Sie sie an Ihr neues Gerät, um sie dort direkt einzulesen."
        },
        {
          "q": "Funktioniert die App wirklich ohne Internet auf dem Boot oder an einsamen Küsten?",
          "a": "Ja. Sobald AnglerLog geladen oder als PWA auf dem Startbildschirm installiert ist, sind alle Kernfunktionen lokal gespeichert. Sie können gespeicherte Spots ansehen, aktuelle GPS-Koordinaten abrufen und neue Fänge völlig offline eintragen."
        },
        {
          "q": "Kann ich AnglerLog schon vor dem Angeln nutzen, auch wenn ich noch keine Fische gefangen habe?",
          "a": "Selbstverständlich. Markieren Sie interessante Strände, Molen, Riffe oder Flüsse im Vorfeld auf der Karte. So können Sie die Gezeitenkurven und Wettervorhersagen für jeden Spot beobachten, um Ihren nächsten Angeltag optimal vorzubereiten."
        }
      ]
    },
    "cta": {
      "title": "<span class=\"inline-block\">Schützen Sie Ihre Geheimen Plätze</span> <span class=\"inline-block\">Dauerhaft in Eigener Hand.</span>",
      "desc": "Keine Registrierung erforderlich. Öffnen Sie die App direkt in Ihrem mobilen Browser und starten Sie Ihre private Gewässerkarte.",
      "launchBtn": "Deutsche Version Jetzt Starten",
      "privacyLink": "Datenschutzerklärung & Haftungsausschluss ansehen"
    },
    "videoShowcase": {
      "sub": "FUNKTIONS-VORSCHAU",
      "title": "Erleben Sie die wichtigsten Funktionen in Aktion",
      "desc": "Vom Setzen geheimer Hotspots auf der Gewässerkarte über schnelle Fangberichte bis hin zu Gezeiten- und Beißzeit-Vorhersagen.",
      "tabs": {
            "spot": "1. Spot anlegen",
            "catch": "2. Fang eintragen",
            "tackle": "3. Tackle Box",
            "tide": "4. Gezeiten & Prognose"
      },
      "items": {
            "spot": {
                  "badge": "GPS-SPOT-MARKIERUNG",
                  "title": "Geheime Fangplätze direkt auf der Karte markieren",
                  "desc": "Setzen Sie Wegpunkte auf Kanten, Riffe oder Buchten mit nur einem Fingertipp. Wassertiefe und Bodenstruktur bleiben zu 100% lokal geschützt.",
                  "points": [
                        "Schnelle Koordinatenübernahme per Fingertipp auf die Karte",
                        "Kategorien für Buhnen, Steilküsten, Strände und Mündungen",
                        "100% verschlüsselte lokale Speicherung ohne Server-Upload"
                  ],
                  "videoFile": "angler_spot_add"
            },
            "catch": {
                  "badge": "FANG-PROTOKOLLIERUNG",
                  "title": "Fänge und fängige Köder sekundenschnell festhalten",
                  "desc": "Erfassen Sie Länge, Gewicht, Köder und Führung direkt am Wasser. Gezeitenkurve und Luftdruck werden automatisch verknüpft.",
                  "points": [
                        "Schnelleingabe für Fischart (Wolfsbarsch, Zander...), Länge und Köder",
                        "Automatische Zuordnung von Gezeitenphase, Wind und Wassertemperatur",
                        "Datenschutz-konforme Social-Media-Fangkarte zum Teilen"
                  ],
                  "videoFile": "angler_catch_record"
            },
            "tackle": {
                  "badge": "TACKLE-VERWALTUNG",
                  "title": "Ruten, Rollen und Lieblingsköder übersichtlich bündeln",
                  "desc": "Verwalten Sie Ihre Spinn- und Brandungskombis. Fügen Sie fängige Minnows, Gummifische und Jigs mit einem Klick hinzu.",
                  "points": [
                        "Freie Konfiguration von Rute, Rolle, Schnur und Vorfach",
                        "Schnelle Ergänzung bewährter Kunstköder und Montagen",
                        "Verknüpfung mit Fangberichten zur Auswertung erfolgreicher Setups"
                  ],
                  "videoFile": "angler_tackle_box_management"
            },
            "tide": {
                  "badge": "GEZEITEN & BEISSZEITEN",
                  "title": "Gezeitenkurven abtasten & Aktivitätsfenster erkennen",
                  "desc": "Streichen Sie über die 24-Stunden-Kurve, um Strömungswechsel und Hochwasserstände zu prüfen. Nutzen Sie intelligente Taktik-Tipps.",
                  "points": [
                        "Flüssiges horizontales Abtasten der 24-Stunden-Gezeitenkurve",
                        "Automatische Erkennung der lukrativen Beißzeiten (Prime Bite)",
                        "Konkrete Taktik-Ratschläge abgestimmt auf Mondphase und Wind"
                  ],
                  "videoFile": "angler_tide_pattern_prediction"
            }
      },
      "tryBtn": "Diese Funktion in der App testen"
},
    "footer": {
      "tagline": "Geheime Angelplätze-Karte & 100% Lokales Fangbuch",
      "copy": "© 2026 AnglerLog. Alle Rechte vorbehalten. Entwickelt für ambitionierte Angler.",
      "archBadge": "100% Lokale Speicher-Architektur"
    }
  },
  "es": {
    "meta": {
      "title": "AnglerLog - Mapa Secreto de Pesca | Diario PWA 100% Offline y Local",
      "desc": "Crea tu propio mapa secreto de pesca. Almacenamiento 100% local sin filtraciones a la nube. Instala como app PWA para registrar capturas en alta mar y orillas remotas sin cobertura móvil.",
      "ogTitle": "AnglerLog - Mapa Secreto de Pesca (100% Local y PWA)",
      "ogDesc": "Protege tus mejores spots. Almacenamiento 100% offline, mapa GPS personalizado, previsión de mareas y app PWA lista para usar."
    },
    "nav": {
      "features": "Características",
      "preview": "Vista previa",
      "workflow": "Flujo de pesca",
      "guides": "Guías",
      "pwa": "App PWA",
      "faq": "FAQ",
      "launchApp": "Abrir app",
      "home": "Inicio Español",
      "privacy": "Privacidad y Condiciones"
    },
    "hero": {
      "pill": "Mapa de Pesca y Diario de Capturas 100% Offline y Local",
      "title": "<span class=\"inline-block\">Tu Mapa Secreto de Pesca.</span> <span class=\"inline-block\"><span class=\"text-gradient\">Almacenamiento Local.</span> Absolutamente Secreto.</span>",
      "desc": "Marca tus bajos de piedra, pozas secretas y bajadas con total tranquilidad. Todos los datos se guardan estrictamente en tu navegador (IndexedDB) sin enviarse a servidores externos. Con la tecnología PWA, abre la app en 0,5 segundos y registra capturas en alta mar sin señal móvil.",
      "launchBtn": "Abrir Edición en Español",
      "launchUrl": "https://es.angler-log.app/",
      "demoBtn": "Demostración en 1 Clic con Datos",
      "demoDesc": "Prueba al instante el mapa interactivo, curvas de marea y fichas de trofeos con 3 spots ficticios precargados.",
      "mockupSpotTitle": "Espigón Exterior - Rompiente y Corriente (Spot A)",
      "mockupTarget": "Lubina / Robalo 82 cm / 4,8 kg",
      "mockupTide": "Marea Viva / Vaciante 30% (Fondo: 4,5 m)",
      "mockupWeather": "Viento: NE 15 km/h / Presión: 1014 hPa",
      "mockupStatusLocal": "Almacenamiento Local Seguro (IndexedDB)",
      "mockupStatusGps": "GPS de Alta Precisión (Cero Envíos)",
      "depthLabel": "Picada en la caída / Fondo 4,5 m",
      "reefWarning": "Bajo rocoso & Corriente / Presencia de pez pasto",
      "currentPos": "Posición Actual (GPS Fijado)",
      "statsCount": "Spots guardados: 14 waypoints (100% en el dispositivo)",
      "statsAdd": "Añadir marcador +",
      "tideTitle": "Mareas en Directo y Meteorología Marina",
      "tideBadge": "Marea Viva",
      "tideHigh": "Pleamar 06:12 (5,80 m)",
      "tideNow": "Actual 16:45 (Momento Clave)",
      "tideLow": "Bajamar 12:40 (1,20 m)",
      "tidePressure": "Presión: 1014 hPa (Ligera bajada favorable)",
      "tideWind": "Viento: NE 15 km/h (Rizado constante)",
      "trophySub": "RÉCORD PERSONAL DE CAPTURA",
      "trophyTag": "Spot Protegido",
      "trophyLure": "Señuelo: Minnow 120F (Color Flúor)",
      "trophyTideLabel": "Marea: Marea Viva / Vaciante inicial",
      "trophyDate": "18.10.2026",
      "trophyExif": "EXIF Eliminado"
    },
    "features": {
      "sub": "CARACTERÍSTICAS CLAVE",
      "title": "<span class=\"inline-block\">Máxima Privacidad</span> <span class=\"inline-block\">& Experiencia de Pesca Real</span>",
      "desc": "Desde la protección estricta de tus marcas secretas hasta el registro fiable en alta mar sin cobertura telefónica.",
      "item1": {
        "badge": "Mapa GPS",
        "title": "Tu Propio Mapa Privado de Pesca",
        "desc": "Marca cantiles, piedras sumergidas, líneas de profundidad y accesos costeros sobre un mapa satelital con cálculo de rumbo y distancia en tiempo real.",
        "tag": "Marcadores GPS personalizados & Brújula táctica"
      },
      "item2": {
        "badge": "100% Local",
        "title": "Cero Envíos a Servidores Externos",
        "desc": "Las coordenadas, fotos de capturas, bajos y notas se guardan solo en tu navegador (IndexedDB). Sin cuentas de usuario ni rastreo en la nube.",
        "tag": "Privacidad Total (Cumple RGPD)"
      },
      "item3": {
        "badge": "PWA Offline",
        "title": "App PWA Rápida Funciona Sin Red",
        "desc": "Añade la app a la pantalla de inicio para una experiencia en pantalla completa. Todos los recursos se almacenan en caché para funcionar en alta mar o zonas aisladas.",
        "tag": "Instalación en 1 toque & 100% offline"
      },
      "item4": {
        "badge": "Mareas y Clima",
        "title": "Curvas de Marea, Tablas Solunares y Viento",
        "desc": "Registra altura del agua, fase de marea (vaciante/llenante), fases lunares, velocidad del viento y presión en el instante exacto de la picada.",
        "tag": "Previsión de mareas & Actividad solunar"
      },
      "item5": {
        "badge": "Compartir Seguro",
        "title": "Fichas para Redes Sociales con Spot Oculto",
        "desc": "Genera en 0,1 segundos una imagen de captura para compartir en redes con especie, longitud, peso y señuelo, ocultando por completo las coordenadas GPS y el EXIF.",
        "tag": "Cero filtraciones de ubicación en redes"
      },
      "item6": {
        "badge": "Diario de Pesca",
        "title": "Diario Detallado y Caja de Aparejos",
        "desc": "Apunta tamaños, pesos, señuelos favoritos, profundidad de nado y tipos de recogida para crear tu catálogo personal de patrones exitosos.",
        "tag": "Gestión de señuelos & Galería de capturas"
      },
      "item7": {
        "badge": "Control Total",
        "title": "Copia de Seguridad y Restauración JSON",
        "desc": "Exporta toda tu base de datos a un archivo JSON con un solo toque. Pasa fácilmente tus marcas y datos al cambiar de teléfono sin intermediarios en la nube.",
        "tag": "Exportación JSON & Migración sencilla"
      },
      "item8": {
        "badge": "Modo Demo",
        "title": "Prueba Rápida con Datos de Ejemplo",
        "desc": "Explora la app con 3 marcas y capturas de muestra precargadas en 1 clic. Prueba las herramientas de mapa y marea de inmediato sin complicaciones.",
        "tag": "Sin registro & Borrado con 1 toque"
      }
    },
    "workflow": {
      "sub": "MÉTODO DE PESCA",
      "title": "<span class=\"inline-block\">Mucho Más que un Registro:</span> <span class=\"inline-block\">Tu Compañero en Cada Jornada</span>",
      "desc": "Desde la planificación en casa hasta las anotaciones rápidas en la embarcación y el análisis de patrones al regresar.",
      "step1": {
        "step": "PASO 01",
        "time": "Antes de salir (Planificación)",
        "title": "Comprobar mareas, viento e historial para elegir el spot",
        "desc": "Abre AnglerLog antes de salir para revisar la curva de mareas, altura de agua, viento y presión. Compara con tus capturas previas en condiciones similares para escoger el punto óptimo.",
        "tag": "Revisión de mareas & Elección de spot"
      },
      "step2": {
        "step": "PASO 02",
        "time": "En el agua (Costa, rocas y barco)",
        "title": "Marcación GPS instantánea & Registro sin conexión",
        "desc": "Al llegar, marca la piedra o la zona de corriente con el GPS. Fotografía la captura y anota el señuelo rápidamente. Si hay porra, guarda notas del agua para aprender de ellas.",
        "tag": "Operación PWA offline & Waypoints GPS"
      },
      "step3": {
        "step": "PASO 03",
        "time": "Tras la jornada (Análisis y archivo)",
        "title": "Analizar el momento de picada y crear tu base de datos",
        "desc": "Comprueba en qué momento de la marea se dieron las picadas y perfecciona tus fórmulas de éxito. Guarda una copia JSON local para conservar tus conocimientos de por vida.",
        "tag": "Análisis de momentos de actividad & Copia JSON"
      }
    },
    "guides": {
      "sub": "GUÍAS PRÁCTICAS",
      "title": "<span class=\"inline-block\">Consejos Prácticos para</span> <span class=\"inline-block\">Cuidar tus Puntos & Triunfar</span>",
      "desc": "Aprende por qué el almacenamiento 100% local protege tus marcas secretas y cómo un registro riguroso convierte la suerte en picadas regulares.",
      "col1": {
        "badge": "GUÍA 01 / Protección de Spots & Privacidad",
        "title": "Por qué las apps en la nube masifican los puntos secretos y cómo el almacenamiento local te defiende",
        "p1": "Cualquier pescador sabe lo frustrante que resulta encontrar una piedra productiva tras meses de exploración y verla saturada días después por una fuga de coordenadas o metadatos de fotos. Las aplicaciones sociales habituales suben los datos a servidores compartidos donde las ubicaciones terminan haciéndose públicas.",
        "p2": "AnglerLog suprime este riesgo por diseño. Toda la información reside exclusivamente en la memoria local de tu navegador (IndexedDB), sin salir nunca de tu teléfono. Sin cuentas de usuario ni bases de datos en la nube, tus secretos son solo tuyos."
      },
      "col2": {
        "badge": "GUÍA 02 / Lectura de Mareas y Condiciones",
        "title": "Más allá de pleamar y bajamar: cómo detectar el verdadero momento de actividad",
        "p1": "Los pescadores con experiencia saben que un gran coeficiente no garantiza el éxito. El momento real de alimentación ocurre cuando confluyen varios factores: la velocidad de la corriente a mitad de marea, el viento empujando comida hacia la orilla y la bajada barométrica antes de un cambio de tiempo.",
        "p2": "Al asociar cada captura con su posición exacta en la curva de marea, dirección de viento y presión, AnglerLog te ayuda a descubrir los patrones propios de cada spot, por ejemplo sabiendo qué roca funciona solo en las dos primeras horas de vaciante con brisa moderada."
      },
      "col3": {
        "badge": "GUÍA 03 / Jornadas en el Mar y Zonas Remotas",
        "title": "Convierte tu teléfono en un plotter GPS y cuaderno de campo fiable",
        "p1": "En escolleras lejanas, acantilados o millas mar adentro, la cobertura telefónica suele ser nula. Las aplicaciones web habituales que dependen de conexión constante se congelan en el momento más inoportuno, justo cuando quieres comprobar una marca o guardar una buena pieza.",
        "p2": "Instalando AnglerLog en tu pantalla de inicio como PWA antes de salir, todos los archivos quedan guardados en tu dispositivo. Incluso en modo avión o sin señal, la app se abre en medio segundo y utiliza directamente el GPS de tu móvil sin consumir datos."
      }
    },
    "pwa": {
      "badge": "PROGRESSIVE WEB APP (PWA)",
      "title": "<span class=\"inline-block\">Instalación en 1 Toque.</span> <span class=\"inline-block\">Sin Tienda de Apps.</span> <span class=\"inline-block text-gradient\">Acceso Offline Total en el Agua.</span>",
      "desc": "AnglerLog utiliza tecnología PWA de última generación. Puedes añadirla directamente a tu pantalla de inicio desde el navegador. Funciona a pantalla completa como una app nativa, abre en 0,5 s y rinde al máximo sin conexión a internet.",
      "feat1Title": "Pantalla completa & Inicio en 0,5s",
      "feat1Desc": "Sin barra de navegación para consultar mapas y registrar con fluidez.",
      "feat2Title": "100% Funcional Sin Cobertura",
      "feat2Desc": "Registra capturas y consulta spots en alta mar o zonas sin red móvil.",
      "feat3Title": "Cero Creación de Cuentas",
      "feat3Desc": "Sin correo ni contraseña. Abre la app y empieza a marcar de inmediato.",
      "installIos": "iOS: Botón Compartir de Safari → «Añadir a pantalla de inicio»",
      "installAndroid": "Android: Menú de Chrome → «Instalar aplicación»"
    },
    "faq": {
      "sub": "PREGUNTAS FRECUENTES",
      "title": "Preguntas Frecuentes (FAQ)",
      "desc": "Todo lo que necesitas saber sobre el almacenamiento local, la seguridad de tus marcas y el uso offline de AnglerLog.",
      "list": [
        {
          "q": "¿Pueden otros pescadores ver mis coordenadas secretas o las fotos de mis capturas?",
          "a": "Bajo ningún concepto. Cada coordenada de punto, nota, montaje y foto se almacena únicamente en la memoria local de tu navegador (IndexedDB). Nada se sube a servidores externos ni se comparte con terceros."
        },
        {
          "q": "¿La aplicación es gratuita? ¿Tengo que registrarme con mi correo electrónico?",
          "a": "AnglerLog es 100% gratuita y sin suscripciones ocultas. No necesitas crear ninguna cuenta, ni introducir tu email o contraseña. Desde el momento en que abres la app, tu diario de pesca privado está listo para usar."
        },
        {
          "q": "¿Cómo hago una copia de seguridad o paso mis datos si cambio de móvil?",
          "a": "Desde el menú de ajustes de la aplicación, la opción «Copia de seguridad» genera un archivo JSON con todos tus puntos y capturas. Guarda este archivo en tu almacenamiento personal o envíatelo al nuevo teléfono para restaurarlo en un instante."
        },
        {
          "q": "¿De verdad funciona sin internet en el barco o en playas sin cobertura?",
          "a": "Sí. Gracias a la tecnología PWA, los archivos principales de la app quedan guardados en tu dispositivo. Puedes consultar tus mapas guardados, leer la señal GPS en vivo y anotar nuevas piezas sin necesidad de red móvil."
        },
        {
          "q": "¿Puedo usar AnglerLog antes de mi salida para planificar aunque no tenga capturas aún?",
          "a": "Por supuesto. Empieza marcando en el mapa las playas, escolleras o bajos que planeas visitar. Podrás seguir las curvas de marea y la previsión meteorológica de cada punto durante la semana para preparar tu salida con ventaja."
        }
      ]
    },
    "cta": {
      "title": "<span class=\"inline-block\">Tus Spots Secretos y Capturas,</span> <span class=\"inline-block\">Seguros en tus Propias Manos.</span>",
      "desc": "Sin registros obligatorios. Abre la aplicación en tu navegador móvil hoy mismo y crea tu mapa personal de pesca.",
      "launchBtn": "Abrir AnglerLog en Español",
      "privacyLink": "Ver política de privacidad y condiciones"
    },
    "videoShowcase": {
      "sub": "DEMOSTRACIÓN DE FUNCIONES",
      "title": "Descubre las funciones principales en acción",
      "desc": "Desde marcar puntos secretos en el mapa hasta registrar capturas al instante, gestionar aparejos y predecir los mejores repuntes de marea.",
      "tabs": {
            "spot": "1. Registrar Spot",
            "catch": "2. Registrar Captura",
            "tackle": "3. Aparejos",
            "tide": "4. Mareas y Actividad"
      },
      "items": {
            "spot": {
                  "badge": "MARCADOR GPS DE SPOTS",
                  "title": "Marca tus pesqueros secretos directamente en el mapa",
                  "desc": "Guarda pedreros, bajíos o varaderos con un solo toque. Añade profundidad, tipo de fondo y notas de acceso con total confidencialidad local.",
                  "points": [
                        "Captura ágil de coordenadas pulsando en el mapa interactivo",
                        "Categorías: escolleras, rompientes, rías, playas y acantilados",
                        "Almacenamiento 100% local en tu navegador sin subidas a la nube"
                  ],
                  "videoFile": "angler_spot_add"
            },
            "catch": {
                  "badge": "DIARIO DE CAPTURAS",
                  "title": "Registra tus capturas y señuelos eficaces en segundos",
                  "desc": "Anota tamaño, peso, señuelo y profundidad al instante. La marea y el viento se vinculan automáticamente para detectar tus patrones de éxito.",
                  "points": [
                        "Registro veloz de especie (Lubina, Dorada...), talla y señuelo",
                        "Asociación automática de estado de marea, presión y oleaje",
                        "Tarjeta de captura con privacidad total lista para compartir"
                  ],
                  "videoFile": "angler_catch_record"
            },
            "tackle": {
                  "badge": "CAJA DE PESCA",
                  "title": "Organiza tus equipos de caña, carrete y señuelos",
                  "desc": "Configura tus combos para spinning costero, surfcasting o embarcación. Añade tus señuelos predilectos y enlázalos a cada captura.",
                  "points": [
                        "Configuración personalizada de caña, carrete, línea y bajo",
                        "Añade vinilos, paseantes y jigs favoritos fácilmente",
                        "Vinculación en 1 toque con tus capturas para analizar efectividad"
                  ],
                  "videoFile": "angler_tackle_box_management"
            },
            "tide": {
                  "badge": "MAREAS Y PREDICCIONES",
                  "title": "Recorre la curva de marea y anticipa los momentos de picada",
                  "desc": "Desliza el dedo por la gráfica para ver el repunte de marea y las horas clave. Consulta consejos tácticos según viento y coeficiente.",
                  "points": [
                        "Desplazamiento interactivo continuo en la curva de marea de 24h",
                        "Detección automática de ventanas óptimas de actividad (Prime Bite)",
                        "Consejos tácticos adaptados a la luna, temporada y viento"
                  ],
                  "videoFile": "angler_tide_pattern_prediction"
            }
      },
      "tryBtn": "Probar esta función en la app"
},
    "footer": {
      "tagline": "Mapa Secreto de Pesca & Diario de Capturas 100% Offline",
      "copy": "© 2026 AnglerLog. Todos los derechos reservados. Diseñado para pescadores reales.",
      "archBadge": "Arquitectura de Almacenamiento 100% Local"
    }
  },
  "it": {
    "meta": {
      "title": "AnglerLog - Mappa Segreta degli Spot di Pesca | Diario PWA 100% Offline e Locale",
      "desc": "Crea la tua mappa privata degli spot di pesca. Archiviazione 100% locale senza invio dati al cloud. Installabile come PWA per registrare catture in mare aperto e rive isolate senza copertura di rete.",
      "ogTitle": "AnglerLog - Mappa Segreta degli Spot (100% Locale e PWA)",
      "ogDesc": "Custodisci i tuoi spot segreti. 100% offline, mappa GPS personalizzata, previsione maree e installazione PWA istantanea."
    },
    "nav": {
      "features": "Funzionalità",
      "preview": "Anteprima",
      "workflow": "Flusso di pesca",
      "guides": "Guide",
      "pwa": "App PWA",
      "faq": "FAQ",
      "launchApp": "Apri l'app",
      "home": "Home Italiano",
      "privacy": "Privacy e Condizioni"
    },
    "hero": {
      "pill": "Mappa degli Spot e Diario di Cattura 100% Offline e Locale",
      "title": "<span class=\"inline-block\">La Tua Mappa Segreta degli Spot.</span> <span class=\"inline-block\"><span class=\"text-gradient\">Salvata in Locale.</span> Assolutamente Segreta.</span>",
      "desc": "Segna secche, scogliere sommerse e scivoli di varo in totale serenità. Tutti i dati restano esclusivamente nella memoria del tuo browser (IndexedDB) senza passare da server esterni. Grazie alla tecnologia PWA, apri l'app in 0,5 secondi e registra catture in barca senza rete cellulare.",
      "launchBtn": "Apri l'Edizione Italiana",
      "launchUrl": "https://it.angler-log.app/",
      "demoBtn": "Demo Immediata in 1 Clic",
      "demoDesc": "Prova subito la mappa interattiva, i grafici di marea e il registro delle catture con 3 spot di esempio precaricati.",
      "mockupSpotTitle": "Molo Esterno - Schiumata e Corrente (Spot A)",
      "mockupTarget": "Spigola / Branzino 82 cm / 4,8 kg",
      "mockupTide": "Marea Viva / Calante 30% (Fondale: 4,5 m)",
      "mockupWeather": "Vento: NE 15 km/h / Pressione: 1014 hPa",
      "mockupStatusLocal": "Archivio Locale Protetto (IndexedDB)",
      "mockupStatusGps": "GPS ad Alta Precisione (Nessun Invio)",
      "depthLabel": "Attacco sulla caduta / Fondale 4,5 m",
      "reefWarning": "Scoglio sommerso & Corrente / Concentrazione di foraggio",
      "currentPos": "Posizione Attuale (Punto GPS)",
      "statsCount": "Spot registrati: 14 waypoints (100% sul dispositivo)",
      "statsAdd": "Aggiungi punto spot +",
      "tideTitle": "Maree in Tempo Reale & Meteo Marino",
      "tideBadge": "Marea Viva",
      "tideHigh": "Alta 06:12 (5,80 m)",
      "tideNow": "Attuale 16:45 (Momento di Attività)",
      "tideLow": "Bassa 12:40 (1,20 m)",
      "tidePressure": "Pressione: 1014 hPa (In lieve calo favorevole)",
      "tideWind": "Vento: NE 15 km/h (Incrustatura regolare)",
      "trophySub": "RECORD DI CATTURA PERSONALE",
      "trophyTag": "Spot Riservato",
      "trophyLure": "Esca: Minnow 120F (Colore Fluorescente)",
      "trophyTideLabel": "Marea: Marea Viva / Inizio calante",
      "trophyDate": "18.10.2026",
      "trophyExif": "EXIF Rimosso"
    },
    "features": {
      "sub": "CARATTERISTICHE CHIAVE",
      "title": "<span class=\"inline-block\">Massima Riservatezza</span> <span class=\"inline-block\">& Vera Esperienza di Pesca</span>",
      "desc": "Dalla protezione assoluta delle tue secche segrete all'annotazione rapida in mare aperto senza copertura telefonica.",
      "item1": {
        "badge": "Mappa GPS",
        "title": "La Tua Mappa Privata degli Spot",
        "desc": "Posiziona relitti, scogliere sommerse, cambi di profondità e scivoli di alaggio su una mappa satellitare interattiva con bussola e distanza in tempo reale.",
        "tag": "Punti GPS personalizzati & Bussola di navigazione"
      },
      "item2": {
        "badge": "100% Locale",
        "title": "Zero Trasmissioni a Server Esterni",
        "desc": "Coordinate, fotografie, montature ed esche restano custodite solo nella memoria interna del browser (IndexedDB). Nessun tracciamento cloud o diffusione dati.",
        "tag": "Privacy Totale (Conforme GDPR)"
      },
      "item3": {
        "badge": "PWA Offline",
        "title": "App PWA Veloce e Funzionante Senza Rete",
        "desc": "Aggiungi alla schermata home per visualizzare l'app a schermo intero senza barra del browser. I file vengono memorizzati nella cache per funzionare ovunque.",
        "tag": "Installazione in 1 tocco & Piena operatività offline"
      },
      "item4": {
        "badge": "Maree e Meteo",
        "title": "Grafici di Marea, Tavole Solunari e Vento",
        "desc": "Registra altezza dell'acqua, fase di marea (calante/crescente), fasi lunari, forza del vento e pressione atmosferica nel secondo esatto dell'abboccata.",
        "tag": "Previsione maree & Indice solunare"
      },
      "item5": {
        "badge": "Condivisione Protetta",
        "title": "Schede per i Social con Spot Mascherato",
        "desc": "Crea in 0,1 secondi una scheda fotografica per i social con specie, misura, peso ed esca, oscurando completamente le coordinate GPS e i dati EXIF.",
        "tag": "Condivisione social sicura senza fughe di spot"
      },
      "item6": {
        "badge": "Diario di Bordo",
        "title": "Diario Dettagliato & Cassetta Esche",
        "desc": "Segna lunghezze, pesi, esche preferite, profondità di nuoto e movimenti di recupero per costruire il tuo catalogo personale di strategie vincenti.",
        "tag": "Gestione attrezzatura & Galleria catture"
      },
      "item7": {
        "badge": "Controllo Totale",
        "title": "Backup & Ripristino Locale in JSON",
        "desc": "Esporta l'intero archivio in un singolo file JSON con un tocco. Trasferisci facilmente tutti i tuoi spot quando cambi smartphone senza affidarti al cloud.",
        "tag": "Esportazione JSON & Migrazione semplice"
      },
      "item8": {
        "badge": "Demo Immediata",
        "title": "Modalità di Prova con Dati di Esempio",
        "desc": "Esplora l'applicazione con 3 spot fittizi e catture verosimili pronte all'uso in un clic. Scopri subito le funzioni di mappa e marea senza ostacoli.",
        "tag": "Senza registrazione & Cancellazione in 1 tap"
      }
    },
    "workflow": {
      "sub": "METODO DI PESCA",
      "title": "<span class=\"inline-block\">Molto Più di un Registro:</span> <span class=\"inline-block\">Il Tuo Alleato in Ogni Uscita</span>",
      "desc": "Dalla strategia stabilita a casa fino alle note rapide sul gommone e all'analisi delle catture al rientro.",
      "step1": {
        "step": "PASSO 01",
        "time": "Prima dell'uscita (Pianificazione)",
        "title": "Controllare maree, vento e storico per scegliere lo spot",
        "desc": "Apri AnglerLog prima di partire per verificare curva delle maree, altezza dell'acqua, vento e pressione. Confronta con le uscite passate per individuare la postazione migliore.",
        "tag": "Controllo maree & Scelta tattica dello spot"
      },
      "step2": {
        "step": "PASSO 02",
        "time": "In pesca (Riva, scogliera e barca)",
        "title": "Punto GPS immediato & Annotazioni senza campo",
        "desc": "All'arrivo, fissa lo spot con il GPS. Fotografa la preda e segna l'esca all'istante. Anche in caso di cappotto, salva le condizioni del mare per imparare dai dettagli.",
        "tag": "Uso PWA offline & Waypoints GPS"
      },
      "step3": {
        "step": "PASSO 03",
        "time": "Dopo la pescata (Analisi e archivio)",
        "title": "Studiare la finestra di mangianza e costruire l'esperienza",
        "desc": "Osserva in quale momento della marea sono avvenute le mangianze per individuare schemi ripetibili. Esporta una copia JSON per conservare il tuo patrimonio di pesca.",
        "tag": "Analisi delle mangianze & Backup JSON"
      }
    },
    "guides": {
      "sub": "GUIDE PRATICHE",
      "title": "<span class=\"inline-block\">Consigli Pratici per</span> <span class=\"inline-block\">Custodire gli Spot & Catturare di Più</span>",
      "desc": "Scopri perché l'architettura 100% locale protegge le tue coordinate segrete e come un diario rigoroso trasforma il caso in catture regolari.",
      "col1": {
        "badge": "GUIDA 01 / Tutela degli Spot & Privacy",
        "title": "Perché le app cloud fanno sovraffollare gli spot e come la memoria locale li protegge",
        "p1": "Ogni pescatore esperto conosce la delusione di trovare una secca isolata dopo mesi di perlustrazione e vederla invasa poco dopo per colpa di una fuga di coordinate GPS o metadati fotografici. Le normali app social trasmettono i dati a server condivisi dove le posizioni prima o poi diventano pubbliche.",
        "p2": "AnglerLog annulla questo pericolo alla radice. Tutti i contenuti rimangono esclusivamente nella memoria locale del tuo browser (IndexedDB) e non lasciano mai il telefono. Senza account né database sul cloud, i tuoi segreti restano tuoi."
      },
      "col2": {
        "badge": "GUIDA 02 / Lettura di Maree e Condizioni",
        "title": "Oltre l'alta e la bassa marea: come individuare il vero momento di attività",
        "p1": "Chi va spesso a pesca sa che un coefficiente elevato non basta da solo. Il momento in cui i pesci entrano in attività coincide con l'incastro di più fattori: la velocità della corrente a metà marea, il vento che spinge il foraggio verso la riva e il calo barometrico prima di un fronte.",
        "p2": "Associando ciascuna cattura alla sua esatta posizione sulla curva di marea, alla direzione del vento e alla pressione, AnglerLog ti mostra i principi propri di ogni spot, rivelando ad esempio quale scogliera produce solo nelle prime due ore di calante con vento moderato."
      },
      "col3": {
        "badge": "GUIDA 03 / Pesca in Mare e Aree Senza Rete",
        "title": "Trasformare lo smartphone in un plotter GPS e taccuino di bordo infallibile",
        "p1": "Sulle scogliere remote o a molte miglia dalla costa in barca, la ricezione del cellulare è quasi sempre assente. Le applicazioni web tradizionali che richiedono un collegamento costante si bloccano sul più bello, proprio quando desideri consultare un punto o registrare una bella cattura.",
        "p2": "Aggiungendo AnglerLog alla schermata home come PWA prima di salpare, tutti i componenti rimangono salvati sul dispositivo. Anche in modalità aereo o senza segnale, l'app si avvia in mezzo secondo e dialoga direttamente con il sensore GPS del telefono."
      }
    },
    "pwa": {
      "badge": "PROGRESSIVE WEB APP (PWA)",
      "title": "<span class=\"inline-block\">Installazione in 1 Tocco.</span> <span class=\"inline-block\">Nessun App Store.</span> <span class=\"inline-block text-gradient\">Accesso Offline Completo in Barca.</span>",
      "desc": "AnglerLog impiega la moderna tecnologia PWA. Puoi aggiungerla direttamente alla schermata home del tuo smartphone dal browser. Si apre a schermo intero come un'applicazione nativa, carica in 0,5 secondi e lavora perfettamente anche senza connessione internet.",
      "feat1Title": "Schermo intero & Avvio in 0,5s",
      "feat1Desc": "Senza barra degli indirizzi per visualizzare mappe e annotare catture con facilità.",
      "feat2Title": "100% Funzionante Senza Segnale",
      "feat2Desc": "Annota le catture anche al largo o in vallate prive di ricezione cellulare.",
      "feat3Title": "Nessun Account Richiesto",
      "feat3Desc": "Né email né password. Apri l'app e comincia a segnare i tuoi punti all'istante.",
      "installIos": "iOS: Tasto Condividi di Safari → «Aggiungi alla schermata home»",
      "installAndroid": "Android: Menu di Chrome → «Installa applicazione»"
    },
    "faq": {
      "sub": "DOMANDE FREQUENTI",
      "title": "Domande Frequenti (FAQ)",
      "desc": "Tutto ciò che serve sapere sull'archiviazione locale, la protezione dei dati e l'utilizzo offline di AnglerLog.",
      "list": [
        {
          "q": "Gli altri pescatori possono visualizzare le mie coordinate segrete o le foto delle catture?",
          "a": "Mai e poi mai. Ogni coordinata GPS, nota, montatura ed esca salvata rimane unicamente nella memoria locale del tuo browser (IndexedDB). Nessun dato viene trasmesso a server esterni o condiviso con terzi."
        },
        {
          "q": "L'applicazione è gratuita? Devo registrarmi indicando un indirizzo email?",
          "a": "AnglerLog è al 100% gratuita e priva di costi nascosti. Non serve registrarsi, né indicare alcuna email o password. Dal momento in cui apri l'applicazione, il tuo taccuino di pesca privato è immediatamente funzionante."
        },
        {
          "q": "Come posso creare un backup o trasferire le mie informazioni quando cambio smartphone?",
          "a": "Dalle impostazioni dell'app, il pulsante «Backup» genera un file JSON con tutte le tue coordinate e catture. Salva questo file nel tuo spazio personale o invialo al nuovo smartphone per ripristinarlo in un tocco."
        },
        {
          "q": "Funziona davvero senza connessione internet in mare aperto o lungo rive isolate?",
          "a": "Certamente. Con la memorizzazione PWA, tutti i file principali risiedono nel tuo telefono. Puoi consultare le mappe salvate, rilevare la posizione GPS in tempo reale e inserire nuove catture senza alcuna linea telefonica."
        },
        {
          "q": "Posso utilizzare AnglerLog prima dell'uscita per pianificare anche se non ho ancora catturato pesci?",
          "a": "Senz'altro. Inizia marcando sulla mappa le spiagge, le scogliere o le secche che intendi esplorare. Potrai osservare le curve di marea e le previsioni meteo per ogni punto durante la settimana per organizzare al meglio la tua battuta di pesca."
        }
      ]
    },
    "cta": {
      "title": "<span class=\"inline-block\">I Tuoi Spot Segreti e le Catture,</span> <span class=\"inline-block\">Sempre nelle Tue Sole Mani.</span>",
      "desc": "Nessuna registrazione richiesta. Apri subito l'applicazione nel browser del tuo smartphone e costruisci la tua mappa di pesca privata.",
      "launchBtn": "Apri AnglerLog in Italiano",
      "privacyLink": "Consulta l'informativa sulla privacy e i termini"
    },
    "videoShowcase": {
      "sub": "PANORAMICA DELLE FUNZIONALITÀ",
      "title": "Scopri le funzionalità principali in azione",
      "desc": "Dal salvataggio rapido degli spot segreti sulla mappa, alla registrazione delle catture, gestione dell'attrezzatura e previsioni delle maree.",
      "tabs": {
            "spot": "1. Salva Spot",
            "catch": "2. Nuova Cattura",
            "tackle": "3. Attrezzatura",
            "tide": "4. Maree & Attività"
      },
      "items": {
            "spot": {
                  "badge": "PUNTI GPS SEGRETI",
                  "title": "Salva i tuoi spot segreti direttamente sulla mappa",
                  "desc": "Segna scogliere, secche o scivoli con un tocco. Inserisci batimetria, tipo di fondale e note d'accesso con la sicurezza del salvataggio 100% locale.",
                  "points": [
                        "Cattura immediata delle coordinate toccando la mappa interattiva",
                        "Classificazione per scogliere, spiagge, porti e foci",
                        "Memorizzazione crittografata al 100% nel browser senza invii a server"
                  ],
                  "videoFile": "angler_spot_add"
            },
            "catch": {
                  "badge": "DIARIO DELLE CATTURE",
                  "title": "Registra catture ed esche vincenti in pochi secondi",
                  "desc": "Salva lunghezza, peso, artificiale e recupero. Il grafico delle maree e il meteo si collegano da soli per affinare le tue strategie vincenti.",
                  "points": [
                        "Inserimento veloce di specie (Spigola, Orata...), peso e lunghezza",
                        "Collegamento automatico di fase di marea, vento e pressione",
                        "Generazione di schede fotografiche per social a tutela della privacy"
                  ],
                  "videoFile": "angler_catch_record"
            },
            "tackle": {
                  "badge": "GESTIONE ATTREZZATURA",
                  "title": "Organizza canne, mulinelli e le tue esche preferite",
                  "desc": "Crea combo su misura per spinning costiero, surfcasting o barca. Aggiungi i tuoi artificiali fidati e associali alle catture in un tocco.",
                  "points": [
                        "Personalizzazione di canna, mulinello, trecciato e terminale",
                        "Aggiunta rapida di minnow, siliconici e jig preferiti",
                        "Associazione immediata alle catture per scoprire i setup più efficaci"
                  ],
                  "videoFile": "angler_tackle_box_management"
            },
            "tide": {
                  "badge": "MAREE E PREVISIONI",
                  "title": "Esplora la curva di marea e individua i picchi di attività",
                  "desc": "Scorri con il dito sulla curva delle 24 ore per visualizzare il livello dell'acqua e i momenti di massima corrente con consigli tattici.",
                  "points": [
                        "Scorrimento interattivo fluido sulla curva delle maree",
                        "Calcolo automatico delle finestre di mangianza (Prime Bite)",
                        "Consigli tattici e suggerimenti in base a luna, stagione e vento"
                  ],
                  "videoFile": "angler_tide_pattern_prediction"
            }
      },
      "tryBtn": "Prova questa funzione nell'app"
},
    "footer": {
      "tagline": "Mappa Segreta degli Spot & Diario di Pesca 100% Offline",
      "copy": "© 2026 AnglerLog. Tutti i diritti riservati. Realizzato per veri pescatori.",
      "archBadge": "Architettura con Salvataggio 100% Locale"
    }
  },
  "pt": {
    "meta": {
      "title": "AnglerLog - Mapa Secreto de Pesqueiros | Diário PWA 100% Offline e Local",
      "desc": "Crie o seu próprio mapa secreto de pesqueiros. Armazenamento 100% local sem fugas para a nuvem. Instale como aplicação PWA para registar capturas em alto mar e pesqueiros remotos sem rede móvel.",
      "ogTitle": "AnglerLog - Mapa Secreto de Pesqueiros (100% Local e PWA)",
      "ogDesc": "Guarde os seus pesqueiros em segurança. 100% offline, mapa GPS personalizado, previsão de marés e instalação PWA imediata."
    },
    "nav": {
      "features": "Funcionalidades",
      "preview": "Pré-visualização",
      "workflow": "Prática",
      "guides": "Guias",
      "pwa": "App PWA",
      "faq": "Perguntas Frequentes",
      "launchApp": "Abrir app",
      "home": "Início Português",
      "privacy": "Privacidade e Termos"
    },
    "hero": {
      "pill": "Mapa de Pesqueiros e Diário de Capturas 100% Offline e Local",
      "title": "<span class=\"inline-block\">O Seu Mapa Secreto de Pesqueiros.</span> <span class=\"inline-block\"><span class=\"text-gradient\">Guardado Localmente.</span> Segredo Absoluto.</span>",
      "desc": "Marque os seus cabeços de pedra, baixios e pontos de entrada com total tranquilidade. Todos os dados permanecem exclusivamente no seu navegador (IndexedDB) sem envio para servidores externos. Com tecnologia PWA, abra a aplicação em 0,5 segundos e registe capturas a bordo sem rede móvel.",
      "launchBtn": "Abrir Edição em Português",
      "launchUrl": "https://pt.angler-log.app/",
      "demoBtn": "Demonstração em 1 Clique com Amostras",
      "demoDesc": "Experimente já o mapa interativo, as curvas de maré e o registo de capturas com 3 pesqueiros de exemplo pré-carregados.",
      "mockupSpotTitle": "Pontão Exterior - Rebentação e Corrente (Spot A)",
      "mockupTarget": "Robalo / Corvina 82 cm / 4,8 kg",
      "mockupTide": "Maré Viva / Vazante 30% (Fundo: 4,5 m)",
      "mockupWeather": "Vento: NE 15 km/h / Pressão: 1014 hPa",
      "mockupStatusLocal": "Armazenamento Local Protegido (IndexedDB)",
      "mockupStatusGps": "GPS de Alta Precisão (Zero Envios)",
      "depthLabel": "Ataque na descida / Fundo 4,5 m",
      "reefWarning": "Cabeço de pedra & Corrente / Concentração de peixe miúdo",
      "currentPos": "Posição Atual (Ponto GPS)",
      "statsCount": "Pesqueiros guardados: 14 marcos (100% no telemóvel)",
      "statsAdd": "Adicionar pesqueiro +",
      "tideTitle": "Marés em Tempo Real & Meteorologia Marítima",
      "tideBadge": "Maré Viva",
      "tideHigh": "Preia-mar 06:12 (5,80 m)",
      "tideNow": "Atual 16:45 (Momento de Atividade)",
      "tideLow": "Baixa-mar 12:40 (1,20 m)",
      "tidePressure": "Pressão: 1014 hPa (Ligeira descida favorável)",
      "tideWind": "Vento: NE 15 km/h (Ondulação regular)",
      "trophySub": "RECORDE PESSOAL DE CAPTURA",
      "trophyTag": "Pesqueiro Secreto",
      "trophyLure": "Amostra: Amostra Rígida 120F (Cor Fluo)",
      "trophyTideLabel": "Maré: Maré Viva / Início da vazante",
      "trophyDate": "18.10.2026",
      "trophyExif": "EXIF Suprimido"
    },
    "features": {
      "sub": "CARACTERÍSTICAS PRINCIPAIS",
      "title": "<span class=\"inline-block\">Privacidade Absoluta</span> <span class=\"inline-block\">& Verdadeira Prática de Pesca</span>",
      "desc": "Da proteção total dos seus pesqueiros secretos ao registo fluido em alto mar sem cobertura móvel.",
      "item1": {
        "badge": "Mapa GPS",
        "title": "O Seu Mapa Privado de Pesqueiros",
        "desc": "Assinale cabeços de pedra, parcelas, declives de profundidade e pontos de acesso num mapa de satélite interativo com bússola e distância em tempo real.",
        "tag": "Marcos GPS personalizados & Bússola de navegação"
      },
      "item2": {
        "badge": "100% Local",
        "title": "Zero Transmissões para Servidores Externos",
        "desc": "Coordenadas, fotografias, montagens e notas ficam guardadas apenas na memória interna do navegador (IndexedDB). Sem contas de utilizador nem nuvem.",
        "tag": "Privacidade Total (Conforme RGPD)"
      },
      "item3": {
        "badge": "PWA Offline",
        "title": "Aplicação PWA Rápida Funciona Sem Rede",
        "desc": "Adicione ao ecrã principal para ter uma aplicação em ecrã completo sem barra de endereço. Todos os ficheiros são guardados no dispositivo para funcionar em qualquer lugar.",
        "tag": "Instalação em 1 toque & Funcionamento offline"
      },
      "item4": {
        "badge": "Marés e Clima",
        "title": "Curvas de Maré, Tabelas Solunares e Vento",
        "desc": "Registe a altura da água, estado da maré (vazante/enchente), fases da lua, velocidade do vento e pressão no segundo exato do ataque do peixe.",
        "tag": "Previsão de marés & Índice solunar"
      },
      "item5": {
        "badge": "Partilha Segura",
        "title": "Cartões para Redes Sociais com Pesqueiro Oculto",
        "desc": "Crie em 0,1 segundos uma imagem de captura para redes sociais com espécie, tamanho, peso e amostra, ocultando totalmente as coordenadas GPS e o EXIF.",
        "tag": "Partilha social sem perigo de revelar o pesqueiro"
      },
      "item6": {
        "badge": "Diário de Bordo",
        "title": "Diário Pormenorizado & Caixa de Pesca",
        "desc": "Aponte tamanhos, pesos, amostras favoritas, profundidade de natação e tipo de recolha para criar o seu catálogo pessoal de padrões de sucesso.",
        "tag": "Gestão de equipamento & Galeria de capturas"
      },
      "item7": {
        "badge": "Controlo Total",
        "title": "Cópia de Segurança e Restauro Local JSON",
        "desc": "Exporte toda a sua informação para um único ficheiro JSON com um toque. Transfira facilmente os seus pesqueiros quando mudar de telemóvel sem intermediários.",
        "tag": "Exportação JSON & Migração simples"
      },
      "item8": {
        "badge": "Modo Demonstração",
        "title": "Modo de Experiência com Amostras",
        "desc": "Explore a aplicação com 3 pesqueiros fictícios e registos realistas prontos a usar em 1 clique. Conheça as ferramentas de mapa e marés de imediato.",
        "tag": "Sem registo & Limpeza num toque"
      }
    },
    "workflow": {
      "sub": "MÉTODO DE PESCA",
      "title": "<span class=\"inline-block\">Muito Mais do que um Registo:</span> <span class=\"inline-block\">O Seu Aliado em Cada Jornada</span>",
      "desc": "Do planeamento em casa aos apontamentos rápidos a bordo da embarcação e à revisão dos padrões ao regressar.",
      "step1": {
        "step": "PASSO 01",
        "time": "Antes da saída (Planeamento)",
        "title": "Verificar marés, vento e histórico para escolher o pesqueiro",
        "desc": "Abra o AnglerLog antes de sair para analisar a curva de marés, altura da água, vento e pressão. Compare com jornadas anteriores para escolher a melhor opção.",
        "tag": "Verificação de marés & Escolha do pesqueiro"
      },
      "step2": {
        "step": "PASSO 02",
        "time": "Na água (Costa, pedras e barco)",
        "title": "Marcação GPS instantânea & Registo sem ligação móvel",
        "desc": "Ao chegar, marque o pesqueiro com o GPS. Fotografe a captura e anote a amostra de imediato. Mesmo em dias sem peixe, aponte as condições do mar para aprender.",
        "tag": "Uso PWA offline & Marcos GPS"
      },
      "step3": {
        "step": "PASSO 03",
        "time": "Após a pescaria (Análise e arquivo)",
        "title": "Estudar o momento de atividade e construir experiência",
        "desc": "Veja em que momento da maré ocorreram os ataques para compreender os padrões regulares. Guarde uma cópia JSON local para proteger o seu património de pesca.",
        "tag": "Análise de atividade & Cópia de segurança JSON"
      }
    },
    "guides": {
      "sub": "GUIAS PRÁTICOS",
      "title": "<span class=\"inline-block\">Conselhos Práticos para</span> <span class=\"inline-block\">Proteger Pesqueiros & Ter Sucesso</span>",
      "desc": "Descubra porque é que o armazenamento 100% local protege os seus segredos e como um registo atento transforma a sorte em capturas regulares.",
      "col1": {
        "badge": "GUIA 01 / Proteção de Pesqueiros & Privacidade",
        "title": "Porque as aplicações na nuvem estragam os pesqueiros e como a gravação local o protege",
        "p1": "Qualquer pescador sabe como é frustrante descobrir uma pedra excelente após semanas de procura e vê-la cheia de gente dias depois devido a uma partilha de coordenadas ou metadados de fotografias. As aplicações sociais correntes guardam dados em servidores onde as localizações acabam por ser descobertas.",
        "p2": "O AnglerLog elimina este risco pela base. Toda a informação fica guardada exclusivamente na memória local do seu navegador (IndexedDB), sem nunca sair do telemóvel. Sem contas nem servidores na nuvem, os seus pesqueiros continuam a ser apenas seus."
      },
      "col2": {
        "badge": "GUIA 02 / Leitura de Marés e Condições",
        "title": "Mais do que preia-mar e baixa-mar: como encontrar a verdadeira janela de atividade",
        "p1": "Os pescadores experientes sabem que um coeficiente alto não garante peixe. O verdadeiro momento de alimentação ocorre quando se conjugam vários fatores: a velocidade da corrente a meio da maré, o vento a empurrar alimento para a margem e a descida barométrica antes de uma frente.",
        "p2": "Ao associar cada captura à posição exata na curva da maré, direção do vento e pressão, o AnglerLog revela as regras próprias de cada pesqueiro, descobrindo por exemplo que uma ponta de pedra só funciona nas primeiras duas horas de vazante com vento fraco de feição."
      },
      "col3": {
        "badge": "GUIA 03 / Pesca no Mar e Locais Isolados",
        "title": "Fazer do telemóvel um plotter GPS e diário de bordo infalível",
        "p1": "Em falésias costeiras ou a várias milhas da terra num barco, o sinal de rede é quase sempre fraco ou inexistente. As aplicações web comuns que necessitam de ligação contínua falham no momento exato em que precisa de consultar um ponto ou registar um belo exemplar.",
        "p2": "Ao adicionar o AnglerLog ao ecrã principal como PWA antes de sair de casa, todos os ficheiros ficam guardados no seu telemóvel. Mesmo em modo de voo ou sem rede, a aplicação abre em meio segundo e funciona diretamente com o GPS do telemóvel."
      }
    },
    "pwa": {
      "badge": "PROGRESSIVE WEB APP (PWA)",
      "title": "<span class=\"inline-block\">Instalação em 1 Toque.</span> <span class=\"inline-block\">Sem Loja de Aplicações.</span> <span class=\"inline-block text-gradient\">Acesso Offline Imediato no Mar.</span>",
      "desc": "O AnglerLog utiliza a moderna tecnologia PWA. Pode adicioná-lo diretamente ao ecrã principal a partir do navegador. Funciona em ecrã inteiro como uma aplicação nativa, carrega em 0,5 segundos e responde na perfeição sem qualquer rede móvel.",
      "feat1Title": "Ecrã inteiro & Arranque em 0,5s",
      "feat1Desc": "Sem barra de endereço para ver mapas e registar com facilidade.",
      "feat2Title": "100% Funcional Sem Rede",
      "feat2Desc": "Registe capturas mesmo em locais remotos ou em alto mar.",
      "feat3Title": "Sem Criação de Contas",
      "feat3Desc": "Nem email nem palavra-passe. Abra a aplicação e comece de imediato.",
      "installIos": "iOS: Botão Partilhar do Safari → «Ecrã principal»",
      "installAndroid": "Android: Menu do Chrome → «Instalar aplicação»"
    },
    "faq": {
      "sub": "PERGUNTAS FREQUENTES",
      "title": "Perguntas Frequentes (FAQ)",
      "desc": "Tudo o que precisa de saber sobre o armazenamento local, a proteção das suas marcas e o funcionamento offline do AnglerLog.",
      "list": [
        {
          "q": "Outros pescadores podem ver as minhas coordenadas secretas ou as fotos das capturas?",
          "a": "De forma alguma. Cada coordenada GPS, nota, montagem e fotografia fica guardada unicamente na memória local do seu navegador (IndexedDB). Nada é transmitido para servidores externos nem partilhado com terceiros."
        },
        {
          "q": "A aplicação é gratuita? Tenho de me registar com o meu endereço de email?",
          "a": "O AnglerLog é 100% gratuito e não tem custos ocultos. Não precisa de criar conta, nem de introduzir email ou palavra-passe. Assim que abre a aplicação, o seu diário de pesca pessoal está pronto a usar."
        },
        {
          "q": "Como faço uma cópia de segurança ou mudo de telemóvel sem perder nada?",
          "a": "No menu de definições da aplicação, a opção «Cópia de segurança» cria um ficheiro JSON com todos os pesqueiros e capturas. Guarde esse ficheiro no seu armazenamento pessoal ou envie para o novo telemóvel para restaurar num instante."
        },
        {
          "q": "Funciona mesmo sem internet no barco ou em praias isoladas?",
          "a": "Sim. Graças à tecnologia PWA, os ficheiros principais ficam guardados no seu aparelho. Pode consultar mapas guardados, ler as coordenadas GPS em tempo real e apontar novas capturas sem precisar de rede móvel."
        },
        {
          "q": "Posso utilizar o AnglerLog antes da saída para planear, mesmo sem capturas guardadas?",
          "a": "Com certeza. Comece por marcar no mapa as praias, pedras ou cabeços que pretende explorar. Poderá acompanhar as marés e as previsões meteorológicas para cada ponto durante a semana para preparar a pescaria com calma."
        }
      ]
    },
    "cta": {
      "title": "<span class=\"inline-block\">Os Seus Pesqueiros e Capturas,</span> <span class=\"inline-block\">Seguros nas Suas Próprias Mãos.</span>",
      "desc": "Sem necessidade de registos. Abra a aplicação no navegador do seu telemóvel hoje mesmo e construa o seu mapa pessoal de pesca.",
      "launchBtn": "Abrir AnglerLog em Português",
      "privacyLink": "Consultar política de privacidade e termos"
    },
    "videoShowcase": {
      "sub": "DEMONSTRAÇÃO DE FUNCIONALIDADES",
      "title": "Veja as principais funcionalidades em ação",
      "desc": "Da marcação de pesqueiros secretos no mapa ao registo rápido de capturas, gestão de material e previsões de marés e momentos de atividade.",
      "tabs": {
            "spot": "1. Novo Pesqueiro",
            "catch": "2. Registar Captura",
            "tackle": "3. Material",
            "tide": "4. Marés & Previsões"
      },
      "items": {
            "spot": {
                  "badge": "MARCADOR GPS DE PESQUEIROS",
                  "title": "Marque os seus pesqueiros secretos diretamente no mapa",
                  "desc": "Assinale cabeços de pedra, declives ou pontos de entrada com um simples toque. Adicione notas de profundidade e segurança com total privacidade local.",
                  "points": [
                        "Obtenção rápida de coordenadas tocando no mapa interativo",
                        "Tipos de pesqueiro: falésias, molhes, praias de surfcasting e rias",
                        "Armazenamento 100% encriptado no navegador sem envio para a nuvem"
                  ],
                  "videoFile": "angler_spot_add"
            },
            "catch": {
                  "badge": "REGISTO DE CAPTURAS",
                  "title": "Guarde as suas capturas e amostras num instante",
                  "desc": "Registe tamanho, peso, amostra e animação. O ciclo da maré e a meteorologia são associados automaticamente para revelar os melhores padrões.",
                  "points": [
                        "Introdução rápida de espécie (Robalo, Dourada...), peso e tamanho",
                        "Associação automática de fase de maré, vento e pressão barométrica",
                        "Cartão de captura para redes sociais com localização secreta oculta"
                  ],
                  "videoFile": "angler_catch_record"
            },
            "tackle": {
                  "badge": "O MEU MATERIAL",
                  "title": "Organize as suas canas, carretos e amostras favoritas",
                  "desc": "Configure conjuntos para spinning costeiro, surfcasting ou barco. Adicione vinis e passeantes e associe-os às capturas com um toque.",
                  "points": [
                        "Configuração personalizada de cana, carreto, multifilamento e líder",
                        "Adição fácil de amostras rígidas, vinis e jigs comprovados",
                        "Ligação direta aos registos de capturas para análise de eficácia"
                  ],
                  "videoFile": "angler_tackle_box_management"
            },
            "tide": {
                  "badge": "MARÉS E PREVISÕES",
                  "title": "Percorra a curva da maré e preveja os períodos de atividade",
                  "desc": "Deslize o dedo pela curva de 24 horas para verificar a enchente, vazante e os melhores momentos de atividade com conselhos táticos.",
                  "points": [
                        "Navegação interativa suave na curva de maré ao longo de 24 horas",
                        "Cálculo automático das janelas de melhor atividade (Prime Bite)",
                        "Conselhos táticos baseados na fase lunar, vento e época do ano"
                  ],
                  "videoFile": "angler_tide_pattern_prediction"
            }
      },
      "tryBtn": "Experimentar esta função na aplicação"
},
    "footer": {
      "tagline": "Mapa Secreto de Pesqueiros & Diário de Pesca 100% Offline",
      "copy": "© 2026 AnglerLog. Todos os direitos reservados. Concebido para pescadores dedicados.",
      "archBadge": "Arquitetura com Armazenamento 100% Local"
    }
  }
};


const VIDEO_BASE_URLS = {
  ja: "https://jp.angler-log.app/videos",
  en: "https://en.angler-log.app/videos",
  fr: "https://fr.angler-log.app/videos",
  de: "https://de.angler-log.app/videos",
  es: "https://es.angler-log.app/videos",
  it: "https://it.angler-log.app/videos",
  pt: "https://pt.angler-log.app/videos"
};

const APP_URLS = {
  ja: "https://jp.angler-log.app/",
  en: "https://en.angler-log.app/",
  fr: "https://fr.angler-log.app/",
  de: "https://de.angler-log.app/",
  es: "https://es.angler-log.app/",
  it: "https://it.angler-log.app/",
  pt: "https://pt.angler-log.app/"
};

const PORTAL_PATHS = {
  ja: "/",
  en: "/en",
  fr: "/fr",
  de: "/de",
  es: "/es",
  it: "/it",
  pt: "/pt"
};

function htmlLayout({ title, desc, ogTitle, ogDesc, ogUrl, lang = "ja", isPrivacy = false, content, extraScript = "" }) {
  const currentLang = TRANSLATIONS[lang] ? lang : "ja";
  const t = TRANSLATIONS[currentLang];
  const canonicalUrl = ogUrl || (currentLang === "ja" ? "https://angler-log.app/" : `https://angler-log.app/${currentLang}`);
  const appUrl = APP_URLS[currentLang] || APP_URLS.en;

  const jsonLd = !isPrivacy ? `\n  <script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "AnglerLog",
    "alternateName": t.meta.ogTitle,
    "url": canonicalUrl,
    "installUrl": appUrl,
    "applicationCategory": "SportsApplication",
    "operatingSystem": "Web, iOS, Android, Windows, macOS",
    "browserRequirements": "Requires JavaScript and HTML5 IndexedDB",
    "inLanguage": ["ja", "en", "fr", "de", "es", "it", "pt"],
    "description": desc,
    "image": "https://angler-log.app/icon.png",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": currentLang === "ja" ? "JPY" : (currentLang === "en" ? "USD" : "EUR")
    },
    "featureList": [
      t.features.item1.title,
      t.features.item2.title,
      t.features.item3.title,
      t.features.item4.title,
      t.features.item6.title
    ]
  })}</script>` : "";

  return `<!DOCTYPE html>
<html lang="${currentLang}" class="scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
  <title>${title}</title>
  <meta name="description" content="${desc}" />
  <meta name="robots" content="index, follow" />
  <meta property="og:title" content="${ogTitle || title}" />
  <meta property="og:description" content="${ogDesc || desc}" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="${canonicalUrl}" />
  <meta property="og:image" content="https://angler-log.app/icon.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${ogTitle || title}" />
  <meta name="twitter:description" content="${ogDesc || desc}" />
  <link rel="canonical" href="${canonicalUrl}" />
  ${!isPrivacy ? `<link rel="alternate" hreflang="ja" href="https://angler-log.app/" />
  <link rel="alternate" hreflang="en" href="https://angler-log.app/en" />
  <link rel="alternate" hreflang="fr" href="https://angler-log.app/fr" />
  <link rel="alternate" hreflang="de" href="https://angler-log.app/de" />
  <link rel="alternate" hreflang="es" href="https://angler-log.app/es" />
  <link rel="alternate" hreflang="it" href="https://angler-log.app/it" />
  <link rel="alternate" hreflang="pt" href="https://angler-log.app/pt" />
  <link rel="alternate" hreflang="x-default" href="https://angler-log.app/" />` : `<link rel="alternate" hreflang="ja" href="https://angler-log.app/privacy" />
  <link rel="alternate" hreflang="en" href="https://angler-log.app/en/privacy" />
  <link rel="alternate" hreflang="fr" href="https://angler-log.app/fr/privacy" />
  <link rel="alternate" hreflang="de" href="https://angler-log.app/de/privacy" />
  <link rel="alternate" hreflang="es" href="https://angler-log.app/es/privacy" />
  <link rel="alternate" hreflang="it" href="https://angler-log.app/it/privacy" />
  <link rel="alternate" hreflang="pt" href="https://angler-log.app/pt/privacy" />
  <link rel="alternate" hreflang="x-default" href="https://angler-log.app/privacy" />`}
  ${jsonLd}
  <meta name="theme-color" content="#070c18" />
  <link rel="icon" type="image/png" href="data:image/png;base64,${ICON_PNG_B64}" />
  <link rel="apple-touch-icon" href="data:image/png;base64,${ICON_PNG_B64}" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,700&family=IBM+Plex+Sans+JP:wght@400;500;600;700&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5353304887278086" crossorigin="anonymous"></script>
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', '"IBM Plex Sans JP"', 'sans-serif'],
            mono: ['"JetBrains Mono"', 'monospace']
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
              950: '#082f49'
            },
            ocean: {
              800: '#0c1a30',
              900: '#071224',
              950: '#040914'
            }
          },
          animation: {
            'float-slow': 'float 6s ease-in-out infinite',
            'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            'wave-drift': 'waveDrift 14s linear infinite'
          },
          keyframes: {
            float: {
              '0%, 100%': { transform: 'translateY(0px)' },
              '50%': { transform: 'translateY(-8px)' }
            },
            waveDrift: {
              '0%': { transform: 'translateX(0)' },
              '100%': { transform: 'translateX(-50%)' }
            }
          }
        }
      }
    };
  </script>
  <style>
    body {
      background-color: #040914;
      color: #f1f5f9;
      font-feature-settings: "palt" 1;
      -webkit-font-smoothing: antialiased;
      overflow-x: hidden;
    }
    .text-gradient {
      background: linear-gradient(135deg, #38bdf8 0%, #0ea5e9 50%, #22d3ee 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .text-gradient-gold {
      background: linear-gradient(135deg, #fcd34d 0%, #f59e0b 50%, #d97706 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .glass-card {
      background: rgba(7, 18, 36, 0.72);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid rgba(56, 189, 248, 0.16);
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .glass-card:hover {
      border-color: rgba(56, 189, 248, 0.38);
      transform: translateY(-2px);
      box-shadow: 0 12px 30px -10px rgba(14, 165, 233, 0.22);
    }
    .glass-header {
      background: rgba(4, 9, 20, 0.82);
      backdrop-filter: blur(14px);
      -webkit-backdrop-filter: blur(14px);
      border-bottom: 1px solid rgba(56, 189, 248, 0.12);
    }
    .glow-radial-sky {
      background: radial-gradient(circle at 50% 0%, rgba(14, 165, 233, 0.15) 0%, rgba(4, 9, 20, 0) 70%);
    }
    .glow-radial-card {
      background: radial-gradient(circle at 100% 100%, rgba(56, 189, 248, 0.12) 0%, rgba(7, 18, 36, 0) 60%);
    }
    .bg-mesh {
      background-image: 
        radial-gradient(at 15% 15%, rgba(14, 165, 233, 0.12) 0px, transparent 50%),
        radial-gradient(at 85% 85%, rgba(34, 211, 238, 0.08) 0px, transparent 50%);
    }
  </style>
</head>
<body class="min-h-screen flex flex-col bg-mesh selection:bg-brand-500 selection:text-white">

  <!-- Header -->
  <header class="sticky top-0 z-50 glass-header">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
      <a href="${PORTAL_PATHS[currentLang] || '/'}" class="flex items-center gap-3 group">
        <div class="relative">
          <div class="absolute -inset-1 rounded-2xl bg-gradient-to-r from-brand-500 to-cyan-400 opacity-30 group-hover:opacity-60 blur-sm transition-opacity"></div>
          <img src="data:image/png;base64,${ICON_PNG_B64}" alt="AnglerLog Icon" class="relative w-10 h-10 sm:w-11 sm:h-11 rounded-2xl shadow-lg shadow-brand-950/60 object-contain ring-1 ring-white/10" />
        </div>
        <div class="flex flex-col">
          <div class="flex items-center gap-1.5">
            <span class="font-extrabold text-xl sm:text-2xl tracking-tight text-white group-hover:text-brand-300 transition-colors">AnglerLog</span>
            <span class="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold bg-brand-950/90 text-brand-300 border border-brand-500/30">PWA</span>
          </div>
          <span class="text-[10px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-widest -mt-0.5">Secret Fishing Spot Map</span>
        </div>
      </a>

      ${isPrivacy ? `
      <div class="flex items-center gap-2.5 sm:gap-3">
        <div class="relative inline-flex items-center">
          <div class="absolute left-2.5 sm:left-3 pointer-events-none text-slate-400">
            ${SVGS.globe}
          </div>
          <select
            aria-label="Privacy Policy Language"
            onchange="window.location.href=this.value"
            class="appearance-none bg-slate-900/90 hover:bg-slate-800 text-slate-200 text-xs sm:text-sm font-semibold pl-8 sm:pl-9 pr-7 sm:pr-8 py-1.5 sm:py-2 rounded-xl border border-slate-700/80 hover:border-brand-500/50 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500/50 transition-all cursor-pointer shadow-sm"
          >
            <option value="/privacy" class="bg-slate-900 text-slate-200" ${currentLang === 'ja' ? 'selected' : ''}>日本語 (JA)</option>
            <option value="/en/privacy" class="bg-slate-900 text-slate-200" ${currentLang === 'en' ? 'selected' : ''}>English (EN)</option>
            <option value="/fr/privacy" class="bg-slate-900 text-slate-200" ${currentLang === 'fr' ? 'selected' : ''}>Français (FR)</option>
            <option value="/de/privacy" class="bg-slate-900 text-slate-200" ${currentLang === 'de' ? 'selected' : ''}>Deutsch (DE)</option>
            <option value="/es/privacy" class="bg-slate-900 text-slate-200" ${currentLang === 'es' ? 'selected' : ''}>Español (ES)</option>
            <option value="/it/privacy" class="bg-slate-900 text-slate-200" ${currentLang === 'it' ? 'selected' : ''}>Italiano (IT)</option>
            <option value="/pt/privacy" class="bg-slate-900 text-slate-200" ${currentLang === 'pt' ? 'selected' : ''}>Português (PT)</option>
          </select>
          <div class="absolute right-2 sm:right-2.5 pointer-events-none text-slate-400">
            ${SVGS.chevronDown}
          </div>
        </div>
        <a href="${PORTAL_PATHS[currentLang] || '/'}" class="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-xs sm:text-sm font-semibold text-brand-400 hover:text-brand-300 border border-slate-800 transition-all shadow-sm">
          <span>&larr; ${t.nav.home}</span>
        </a>
      </div>` : `
      <nav class="hidden xl:flex items-center gap-6 text-xs sm:text-sm font-semibold text-slate-300">
        <a href="#features" class="hover:text-brand-300 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-brand-400 after:transition-all">${t.nav.features}</a>
        <a href="#preview" class="hover:text-brand-300 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-brand-400 after:transition-all">${t.nav.preview}</a>
        <a href="#workflow" class="hover:text-brand-300 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-brand-400 after:transition-all">${t.nav.workflow}</a>
        <a href="#guide" class="hover:text-brand-300 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-brand-400 after:transition-all">${t.nav.guides}</a>
        <a href="#pwa" class="hover:text-brand-300 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-brand-400 after:transition-all">${t.nav.pwa}</a>
        <a href="#faq" class="hover:text-brand-300 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-brand-400 after:transition-all">${t.nav.faq}</a>
      </nav>

      <div class="flex items-center gap-1.5 sm:gap-3">
        <!-- Language Selector Dropdown -->
        <div class="relative inline-flex items-center">
          <div class="absolute left-2.5 sm:left-3 pointer-events-none text-slate-400">
            ${SVGS.globe}
          </div>
          <select
            id="lang-select"
            aria-label="Language Selector"
            onchange="window.location.href=this.value"
            class="appearance-none bg-slate-900/90 hover:bg-slate-800 text-slate-200 text-xs sm:text-sm font-semibold pl-8 sm:pl-9 pr-7 sm:pr-8 py-1.5 sm:py-2 rounded-xl border border-slate-700/80 hover:border-brand-500/50 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500/50 transition-all cursor-pointer shadow-sm"
          >
            <option value="/" class="bg-slate-900 text-slate-200" ${currentLang === 'ja' ? 'selected' : ''}>日本語 (JA)</option>
            <option value="/en" class="bg-slate-900 text-slate-200" ${currentLang === 'en' ? 'selected' : ''}>English (EN)</option>
            <option value="/fr" class="bg-slate-900 text-slate-200" ${currentLang === 'fr' ? 'selected' : ''}>Français (FR)</option>
            <option value="/de" class="bg-slate-900 text-slate-200" ${currentLang === 'de' ? 'selected' : ''}>Deutsch (DE)</option>
            <option value="/es" class="bg-slate-900 text-slate-200" ${currentLang === 'es' ? 'selected' : ''}>Español (ES)</option>
            <option value="/it" class="bg-slate-900 text-slate-200" ${currentLang === 'it' ? 'selected' : ''}>Italiano (IT)</option>
            <option value="/pt" class="bg-slate-900 text-slate-200" ${currentLang === 'pt' ? 'selected' : ''}>Português (PT)</option>
          </select>
          <div class="absolute right-2 sm:right-2.5 pointer-events-none text-slate-400">
            ${SVGS.chevronDown}
          </div>
        </div>

        <!-- Launch App CTA -->
        <a href="${appUrl}" class="relative inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-xl bg-gradient-to-r from-brand-500 via-sky-500 to-cyan-500 hover:from-brand-400 hover:via-sky-400 hover:to-cyan-400 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 transition-all active:scale-95 group shrink-0">
          <span>${t.nav.launchApp}</span>
          <span class="group-hover:translate-x-0.5 transition-transform">${SVGS.arrowRight}</span>
        </a>
      </div>`}
    </div>
  </header>

  ${content}

  <!-- Footer -->
  <footer class="bg-ocean-950 border-t border-slate-800/80 py-12 relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent pointer-events-none"></div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
        <div class="flex items-center gap-3">
          <img src="data:image/png;base64,${ICON_PNG_B64}" alt="AnglerLog Icon" class="w-9 h-9 rounded-xl ring-1 ring-white/10" />
          <div>
            <span class="font-extrabold text-lg text-white">AnglerLog</span>
            <p class="text-xs text-slate-400">${t.footer.tagline}</p>
          </div>
        </div>

        <!-- Multilingual Footer Links -->
        <div class="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 text-xs font-medium text-slate-400">
          <a href="/" class="hover:text-brand-300 transition-colors">日本語</a>
          <a href="/en" class="hover:text-brand-300 transition-colors">English</a>
          <a href="/fr" class="hover:text-brand-300 transition-colors">Français</a>
          <a href="/de" class="hover:text-brand-300 transition-colors">Deutsch</a>
          <a href="/es" class="hover:text-brand-300 transition-colors">Español</a>
          <a href="/it" class="hover:text-brand-300 transition-colors">Italiano</a>
          <a href="/pt" class="hover:text-brand-300 transition-colors">Português</a>
          <span class="text-slate-700 hidden sm:inline">|</span>
          <a href="${currentLang === 'ja' ? '/privacy' : `/${currentLang}/privacy`}" class="hover:text-brand-300 transition-colors">${t.nav.privacy}</a>
        </div>
      </div>

      <div class="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
        <div>
          ${t.footer.copy}
        </div>
        <div class="flex items-center gap-2 font-mono text-[11px]">
          <span class="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
          <span>${t.footer.archBadge}</span>
        </div>
      </div>
    </div>
  </footer>

  ${extraScript}
</body>
</html>`;
}

function renderLandingContent(lang = "ja") {
  const currentLang = TRANSLATIONS[lang] ? lang : "ja";
  const t = TRANSLATIONS[currentLang];
  const appUrl = APP_URLS[currentLang] || APP_URLS.en;

  return `
  <main class="flex-grow">
    <!-- Hero Section -->
    <section class="relative pt-12 sm:pt-20 pb-20 sm:pb-32 glow-radial-sky overflow-hidden">
      <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div class="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Hero Header -->
        <div class="text-center max-w-4xl mx-auto">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-brand-500/30 text-xs sm:text-sm font-medium text-brand-300 shadow-md shadow-brand-950/40 mb-6 hover:border-brand-500/50 transition-all">
            <span class="flex h-2 w-2 relative">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
            </span>
            <span>${t.hero.pill}</span>
          </div>

          <h1 class="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15] sm:leading-[1.12] mb-6">
            ${t.hero.title}
          </h1>

          <p class="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-10 text-balance">
            ${t.hero.desc}
          </p>

          <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <a href="${appUrl}" class="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-brand-500 via-sky-500 to-cyan-400 hover:from-brand-400 hover:via-sky-400 hover:to-cyan-300 text-slate-950 font-black text-base shadow-xl shadow-brand-500/30 hover:shadow-brand-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group">
              <span>${t.hero.launchBtn}</span>
              <span class="group-hover:translate-x-1 transition-transform">${SVGS.arrowRight}</span>
            </a>
            <a href="${appUrl}?demo=1" class="w-full sm:w-auto px-6 py-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800/90 text-amber-300 hover:text-amber-200 font-bold text-sm border border-amber-500/40 hover:border-amber-400 shadow-lg shadow-amber-950/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
              <span>${SVGS.sparkle}</span>
              <span>${t.hero.demoBtn}</span>
            </a>
          </div>
          <p class="text-xs text-slate-400 mb-14">
            ${t.hero.demoDesc}
          </p>

          <!-- Key Highlights Ticker -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto text-left">
            <div class="p-3.5 rounded-2xl bg-slate-900/70 border border-slate-800/80 flex items-center gap-2.5">
              <div class="w-7 h-7 rounded-lg bg-brand-950 text-brand-400 flex items-center justify-center shrink-0">
                ${SVGS.lock}
              </div>
              <div>
                <div class="text-[11px] font-bold text-white leading-tight">${t.features.item2.badge}</div>
                <div class="text-[10px] text-slate-400">${t.features.item2.title}</div>
              </div>
            </div>
            <div class="p-3.5 rounded-2xl bg-slate-900/70 border border-slate-800/80 flex items-center gap-2.5">
              <div class="w-7 h-7 rounded-lg bg-brand-950 text-brand-400 flex items-center justify-center shrink-0">
                ${SVGS.mobile}
              </div>
              <div>
                <div class="text-[11px] font-bold text-white leading-tight">${t.features.item3.badge}</div>
                <div class="text-[10px] text-slate-400">${t.features.item3.title}</div>
              </div>
            </div>
            <div class="p-3.5 rounded-2xl bg-slate-900/70 border border-slate-800/80 flex items-center gap-2.5">
              <div class="w-7 h-7 rounded-lg bg-brand-950 text-brand-400 flex items-center justify-center shrink-0">
                ${SVGS.cloud}
              </div>
              <div>
                <div class="text-[11px] font-bold text-white leading-tight">${t.features.item4.badge}</div>
                <div class="text-[10px] text-slate-400">${t.features.item4.title}</div>
              </div>
            </div>
            <div class="p-3.5 rounded-2xl bg-slate-900/70 border border-slate-800/80 flex items-center gap-2.5">
              <div class="w-7 h-7 rounded-lg bg-brand-950 text-brand-400 flex items-center justify-center shrink-0">
                ${SVGS.backup}
              </div>
              <div>
                <div class="text-[11px] font-bold text-white leading-tight">${t.features.item7.badge}</div>
                <div class="text-[10px] text-slate-400">${t.features.item7.title}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Main Features Video Showcase (Approach A: Split View) -->
        <div id="preview" class="mt-16 sm:mt-24 relative max-w-6xl mx-auto">
          <div class="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-brand-500 via-sky-500 to-cyan-500 opacity-20 blur-xl"></div>
          
          <div class="relative rounded-3xl bg-slate-900/95 border border-brand-500/30 shadow-2xl p-5 sm:p-8 lg:p-10 backdrop-blur-xl">
            
            <!-- Header -->
            <div class="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-950/80 border border-brand-500/30 text-xs font-bold text-brand-300 mb-3">
                <span class="w-2 h-2 rounded-full bg-brand-400 animate-pulse"></span>
                <span>${t.videoShowcase ? t.videoShowcase.sub : 'FEATURE SHOWCASE'}</span>
              </div>
              <h2 class="text-2xl sm:text-4xl font-black text-white tracking-tight">
                ${t.videoShowcase ? t.videoShowcase.title : '主な機能の操作感を動画で体験'}
              </h2>
              <p class="text-xs sm:text-base text-slate-300 mt-3 leading-relaxed">
                ${t.videoShowcase ? t.videoShowcase.desc : '直感的な操作性を動画でご覧いただけます。'}
              </p>
            </div>

            <!-- Tab Selector (4 Main Features) -->
            <div class="flex items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 flex-wrap">
              <button onclick="switchVideoTab('spot')" id="tabBtn-spot" class="video-tab-btn px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 bg-gradient-to-r from-brand-500 to-cyan-500 text-slate-950 shadow-lg shadow-brand-500/25 scale-[1.02]">
                <span>📍</span>
                <span>${t.videoShowcase ? t.videoShowcase.tabs.spot : '1. 釣り場登録'}</span>
              </button>
              <button onclick="switchVideoTab('catch')" id="tabBtn-catch" class="video-tab-btn px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 bg-slate-900/90 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800">
                <span>🐟</span>
                <span>${t.videoShowcase ? t.videoShowcase.tabs.catch : '2. 釣果記録'}</span>
              </button>
              <button onclick="switchVideoTab('tackle')" id="tabBtn-tackle" class="video-tab-btn px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 bg-slate-900/90 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800">
                <span>🧰</span>
                <span>${t.videoShowcase ? t.videoShowcase.tabs.tackle : '3. タックル管理'}</span>
              </button>
              <button onclick="switchVideoTab('tide')" id="tabBtn-tide" class="video-tab-btn px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 bg-slate-900/90 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800">
                <span>🌊</span>
                <span>${t.videoShowcase ? t.videoShowcase.tabs.tide : '4. タイド・時合予測'}</span>
              </button>
            </div>

            <!-- Main Split View (Left: Phone Video Frame, Right: Feature Details) -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              
              <!-- Left: Smartphone Frame with Video -->
              <div class="lg:col-span-5 flex justify-center">
                <div class="relative w-[280px] sm:w-[310px] aspect-[9/18] rounded-[42px] bg-slate-950 p-2.5 ring-1 ring-white/20 shadow-2xl shadow-brand-500/20 border border-slate-800">
                  <!-- Notch & Camera -->
                  <div class="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-4 bg-slate-900 rounded-full z-20 flex items-center justify-center pointer-events-none">
                    <div class="w-2.5 h-2.5 rounded-full bg-slate-950 border border-slate-800"></div>
                  </div>
                  <!-- Live Demo Pill Badge -->
                  <div class="absolute top-5 right-5 z-20 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-slate-950/80 border border-emerald-500/40 text-[9px] font-mono text-emerald-400 font-bold backdrop-blur-md pointer-events-none">
                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                    <span>LIVE DEMO</span>
                  </div>

                  <!-- Screen Container -->
                  <div class="w-full h-full rounded-[34px] overflow-hidden bg-slate-950 relative flex items-center justify-center">
                    <video id="demoVideo" class="w-full h-full object-cover" autoplay loop muted playsinline preload="auto" src="/videos/${currentLang}/angler_spot_add.mp4">
                    </video>
                  </div>
                </div>
              </div>

              <!-- Right: Detailed Feature Showcase & Insights -->
              <div class="lg:col-span-7 flex flex-col justify-center">
                <div id="featBadge" class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-brand-950/80 border border-brand-500/30 text-xs font-mono font-bold text-brand-300 w-fit mb-3">
                  ${t.videoShowcase ? t.videoShowcase.items.spot.badge : 'GPS SPOT PINNING'}
                </div>
                <h3 id="featTitle" class="text-xl sm:text-2xl lg:text-3xl font-black text-white mb-4 leading-snug">
                  ${t.videoShowcase ? t.videoShowcase.items.spot.title : '秘密のポイントを地図上に瞬時にピン留め'}
                </h3>
                <p id="featDesc" class="text-xs sm:text-sm lg:text-base text-slate-300 leading-relaxed mb-6 font-normal">
                  ${t.videoShowcase ? t.videoShowcase.items.spot.desc : '地図上の立ち位置や狙い目の根、エントリー場所をワンタップで記録。'}
                </p>

                <!-- Bullet Highlights -->
                <div id="featPoints" class="space-y-3 mb-8">
                  ${(t.videoShowcase ? t.videoShowcase.items.spot.points : [
                    '地図タップからの素早いスポット座標取得',
                    '磯・サーフ・港湾・急深などポイント種別設定',
                    '外部送信ゼロ・端末内（IndexedDB）完全暗号化保存'
                  ]).map(pt => `
                  <div class="flex items-start gap-2.5">
                    <div class="mt-0.5 w-5 h-5 rounded-full bg-brand-500/20 text-brand-400 flex items-center justify-center flex-shrink-0 text-xs font-bold">✓</div>
                    <span class="text-xs sm:text-sm text-slate-200 font-medium">${pt}</span>
                  </div>`).join('')}
                </div>

                <!-- Launch App CTA -->
                <div class="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-800">
                  <a href="${appUrl}" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-500 via-sky-500 to-cyan-500 hover:from-brand-400 hover:to-cyan-400 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:scale-[1.02] active:scale-95 transition-all">
                    <span>${t.videoShowcase ? t.videoShowcase.tryBtn : 'この機能をアプリで試す'}</span>
                    <span>&rarr;</span>
                  </a>
                  <span class="text-[11px] text-slate-400 font-mono">
                    ${t.hero.mockupStatusLocal}
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>

        <script>
          const VIDEO_SHOWCASE_DATA = ${JSON.stringify(t.videoShowcase || {})};
          const CURRENT_VIDEO_LANG = "${currentLang}";

          function switchVideoTab(tabKey) {
            if (!VIDEO_SHOWCASE_DATA || !VIDEO_SHOWCASE_DATA.items) return;
            const data = VIDEO_SHOWCASE_DATA.items[tabKey];
            if (!data) return;

            // Update Tab buttons
            ['spot', 'catch', 'tackle', 'tide'].forEach(function(k) {
              const btn = document.getElementById('tabBtn-' + k);
              if (btn) {
                if (k === tabKey) {
                  btn.className = 'video-tab-btn active px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 bg-gradient-to-r from-brand-500 to-cyan-500 text-slate-950 shadow-lg shadow-brand-500/25 scale-[1.02]';
                } else {
                  btn.className = 'video-tab-btn px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 bg-slate-900/90 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800';
                }
              }
            });

            // Update Video source directly
            const video = document.getElementById('demoVideo');
            const newMp4 = '/videos/' + CURRENT_VIDEO_LANG + '/' + data.videoFile + '.mp4';

            if (video) {
              video.muted = true;
              video.defaultMuted = true;
              if (!video.src.endsWith(newMp4)) {
                video.src = newMp4;
                video.load();
              }
              const p = video.play();
              if (p !== undefined) {
                p.catch(function(err) {
                  console.warn('Play deferred:', err);
                });
              }
            }

            // Update Text contents
            const badge = document.getElementById('featBadge');
            const title = document.getElementById('featTitle');
            const desc = document.getElementById('featDesc');
            const points = document.getElementById('featPoints');

            if (badge) badge.textContent = data.badge;
            if (title) title.textContent = data.title;
            if (desc) desc.textContent = data.desc;
            if (points && data.points) {
              points.innerHTML = data.points.map(function(pt) {
                return '<div class="flex items-start gap-2.5"><div class="mt-0.5 w-5 h-5 rounded-full bg-brand-500/20 text-brand-400 flex items-center justify-center flex-shrink-0 text-xs font-bold">✓</div><span class="text-xs sm:text-sm text-slate-200 font-medium">' + pt + '</span></div>';
              }).join('');
            }
          }

          // Ensure video autoplay works on all desktop & mobile browsers
          (function initVideo() {
            function tryPlay() {
              const v = document.getElementById('demoVideo');
              if (v) {
                v.muted = true;
                v.defaultMuted = true;
                v.play().catch(function() {});
              }
            }
            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', tryPlay);
            } else {
              tryPlay();
            }
            window.addEventListener('click', tryPlay, { once: true });
            window.addEventListener('touchstart', tryPlay, { once: true });
          })();
        </script>
      </div>
    </section>

    <!-- Bento Grid Key Features Section -->
    <section id="features" class="py-24 bg-ocean-950 border-y border-slate-800/80 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-4xl mx-auto mb-16">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-950/80 border border-brand-500/30 text-brand-400 text-xs font-bold tracking-widest uppercase mb-3">
            <span>${t.features.sub}</span>
          </div>
          <h2 class="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
            ${t.features.title}
          </h2>
          <p class="text-sm sm:text-base text-slate-400 mt-3 leading-relaxed">
            ${t.features.desc}
          </p>
        </div>

        <!-- Bento Grid Layout -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <!-- Bento Item 1 (Large Feature Card) -->
          <div class="lg:col-span-2 p-8 rounded-3xl glass-card relative overflow-hidden flex flex-col justify-between">
            <div class="absolute -right-10 -bottom-10 w-64 h-64 bg-brand-500/10 rounded-full blur-2xl pointer-events-none"></div>
            <div>
              <div class="flex items-center justify-between mb-6">
                <div class="w-12 h-12 rounded-2xl bg-brand-950 border border-brand-500/30 text-brand-400 flex items-center justify-center">
                  ${SVGS.pin}
                </div>
                <span class="px-3 py-1 rounded-full bg-brand-950/80 text-brand-300 text-xs font-bold border border-brand-500/30">${t.features.item1.badge}</span>
              </div>
              <h3 class="text-xl sm:text-2xl font-black text-white mb-3">${t.features.item1.title}</h3>
              <p class="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
                ${t.features.item1.desc}
              </p>
            </div>
            <div class="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-brand-400">
              <span>${t.features.item1.tag}</span>
              <span class="text-slate-500">Feature 01</span>
            </div>
          </div>

          <!-- Bento Item 2 (High Security Local Storage) -->
          <div class="p-8 rounded-3xl glass-card relative overflow-hidden flex flex-col justify-between border-brand-500/40">
            <div class="absolute -right-6 -bottom-6 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none"></div>
            <div>
              <div class="flex items-center justify-between mb-6">
                <div class="w-12 h-12 rounded-2xl bg-brand-950 border border-brand-500/30 text-brand-400 flex items-center justify-center">
                  ${SVGS.lock}
                </div>
                <span class="px-3 py-1 rounded-full bg-emerald-950 text-emerald-400 text-xs font-bold border border-emerald-500/30">${t.features.item2.badge}</span>
              </div>
              <h3 class="text-xl font-black text-white mb-3">${t.features.item2.title}</h3>
              <p class="text-sm text-slate-300 leading-relaxed">
                ${t.features.item2.desc}
              </p>
            </div>
            <div class="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-emerald-400">
              <span>${t.features.item2.tag}</span>
              <span class="text-slate-500">Feature 02</span>
            </div>
          </div>

          <!-- Bento Item 3 (PWA Offline) -->
          <div class="p-8 rounded-3xl glass-card flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-6">
                <div class="w-12 h-12 rounded-2xl bg-brand-950 border border-brand-500/30 text-brand-400 flex items-center justify-center">
                  ${SVGS.mobile}
                </div>
                <span class="px-3 py-1 rounded-full bg-brand-950 text-brand-300 text-xs font-bold border border-brand-500/30">${t.features.item3.badge}</span>
              </div>
              <h3 class="text-xl font-black text-white mb-3">${t.features.item3.title}</h3>
              <p class="text-sm text-slate-300 leading-relaxed">
                ${t.features.item3.desc}
              </p>
            </div>
            <div class="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-brand-400">
              <span>${t.features.item3.tag}</span>
              <span class="text-slate-500">Feature 03</span>
            </div>
          </div>

          <!-- Bento Item 4 (Tide Chart & Solunar) -->
          <div class="p-8 rounded-3xl glass-card flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-6">
                <div class="w-12 h-12 rounded-2xl bg-brand-950 border border-brand-500/30 text-brand-400 flex items-center justify-center">
                  ${SVGS.cloud}
                </div>
                <span class="px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 text-xs font-bold border border-cyan-500/30">${t.features.item4.badge}</span>
              </div>
              <h3 class="text-xl font-black text-white mb-3">${t.features.item4.title}</h3>
              <p class="text-sm text-slate-300 leading-relaxed">
                ${t.features.item4.desc}
              </p>
            </div>
            <div class="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-brand-400">
              <span>${t.features.item4.tag}</span>
              <span class="text-slate-500">Feature 04</span>
            </div>
          </div>

          <!-- Bento Item 5 (Catch Card Share Masking) -->
          <div class="p-8 rounded-3xl glass-card flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-6">
                <div class="w-12 h-12 rounded-2xl bg-brand-950 border border-brand-500/30 text-brand-400 flex items-center justify-center">
                  ${SVGS.share}
                </div>
                <span class="px-3 py-1 rounded-full bg-amber-950 text-amber-300 text-xs font-bold border border-amber-500/30">${t.features.item5.badge}</span>
              </div>
              <h3 class="text-xl font-black text-white mb-3">${t.features.item5.title}</h3>
              <p class="text-sm text-slate-300 leading-relaxed">
                ${t.features.item5.desc}
              </p>
            </div>
            <div class="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-amber-400">
              <span>${t.features.item5.tag}</span>
              <span class="text-slate-500">Feature 05</span>
            </div>
          </div>

          <!-- Bento Item 6 (Detailed Catch & Tackle Log) -->
          <div class="p-8 rounded-3xl glass-card flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-6">
                <div class="w-12 h-12 rounded-2xl bg-brand-950 border border-brand-500/30 text-brand-400 flex items-center justify-center">
                  ${SVGS.book}
                </div>
                <span class="px-3 py-1 rounded-full bg-brand-950 text-brand-300 text-xs font-bold border border-brand-500/30">${t.features.item6.badge}</span>
              </div>
              <h3 class="text-xl font-black text-white mb-3">${t.features.item6.title}</h3>
              <p class="text-sm text-slate-300 leading-relaxed">
                ${t.features.item6.desc}
              </p>
            </div>
            <div class="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-brand-400">
              <span>${t.features.item6.tag}</span>
              <span class="text-slate-500">Feature 06</span>
            </div>
          </div>

          <!-- Bento Item 7 (Safe JSON Backup) -->
          <div class="p-8 rounded-3xl glass-card flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-6">
                <div class="w-12 h-12 rounded-2xl bg-brand-950 border border-brand-500/30 text-brand-400 flex items-center justify-center">
                  ${SVGS.backup}
                </div>
                <span class="px-3 py-1 rounded-full bg-brand-950 text-brand-300 text-xs font-bold border border-brand-500/30">${t.features.item7.badge}</span>
              </div>
              <h3 class="text-xl font-black text-white mb-3">${t.features.item7.title}</h3>
              <p class="text-sm text-slate-300 leading-relaxed">
                ${t.features.item7.desc}
              </p>
            </div>
            <div class="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-brand-400">
              <span>${t.features.item7.tag}</span>
              <span class="text-slate-500">Feature 07</span>
            </div>
          </div>

          <!-- Bento Item 8 (Instant Demo) -->
          <div class="p-8 rounded-3xl glass-card flex flex-col justify-between border-amber-500/30">
            <div>
              <div class="flex items-center justify-between mb-6">
                <div class="w-12 h-12 rounded-2xl bg-amber-950 border border-amber-500/30 text-amber-400 flex items-center justify-center">
                  ${SVGS.sparkle}
                </div>
                <span class="px-3 py-1 rounded-full bg-amber-950 text-amber-300 text-xs font-bold border border-amber-500/30">${t.features.item8.badge}</span>
              </div>
              <h3 class="text-xl font-black text-white mb-3">${t.features.item8.title}</h3>
              <p class="text-sm text-slate-300 leading-relaxed">
                ${t.features.item8.desc}
              </p>
            </div>
            <div class="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-amber-400">
              <span>${t.features.item8.tag}</span>
              <span class="text-slate-500">Feature 08</span>
            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- 3-Step Workflow Section -->
    <section id="workflow" class="py-24 relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-4xl mx-auto mb-16">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-950/80 border border-brand-500/30 text-brand-400 text-xs font-bold tracking-widest uppercase mb-3">
            <span>${t.workflow.sub}</span>
          </div>
          <h2 class="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
            ${t.workflow.title}
          </h2>
          <p class="text-sm sm:text-base text-slate-400 mt-3 leading-relaxed">
            ${t.workflow.desc}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <!-- Step 1 Card -->
          <div class="p-8 rounded-3xl glass-card flex flex-col justify-between relative group hover:border-brand-400/50">
            <div>
              <div class="flex items-center justify-between mb-6">
                <span class="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-cyan-300 font-mono">${t.workflow.step1.step}</span>
                <span class="px-3 py-1 rounded-full bg-slate-900 text-slate-300 text-xs font-bold border border-slate-700">${t.workflow.step1.time}</span>
              </div>
              <h3 class="text-lg sm:text-xl font-black text-white mb-3 leading-snug">${t.workflow.step1.title}</h3>
              <p class="text-sm text-slate-300 leading-relaxed">${t.workflow.step1.desc}</p>
            </div>
            <div class="mt-8 pt-4 border-t border-slate-800 text-[11px] font-semibold text-brand-400">
              ${t.workflow.step1.tag}
            </div>
          </div>

          <!-- Step 2 Card -->
          <div class="p-8 rounded-3xl glass-card flex flex-col justify-between relative group hover:border-brand-400/50 border-brand-500/40">
            <div>
              <div class="flex items-center justify-between mb-6">
                <span class="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-cyan-300 font-mono">${t.workflow.step2.step}</span>
                <span class="px-3 py-1 rounded-full bg-brand-950 text-brand-300 text-xs font-bold border border-brand-500/40">${t.workflow.step2.time}</span>
              </div>
              <h3 class="text-lg sm:text-xl font-black text-white mb-3 leading-snug">${t.workflow.step2.title}</h3>
              <p class="text-sm text-slate-300 leading-relaxed">${t.workflow.step2.desc}</p>
            </div>
            <div class="mt-8 pt-4 border-t border-slate-800 text-[11px] font-semibold text-brand-400">
              ${t.workflow.step2.tag}
            </div>
          </div>

          <!-- Step 3 Card -->
          <div class="p-8 rounded-3xl glass-card flex flex-col justify-between relative group hover:border-brand-400/50">
            <div>
              <div class="flex items-center justify-between mb-6">
                <span class="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-cyan-300 font-mono">${t.workflow.step3.step}</span>
                <span class="px-3 py-1 rounded-full bg-slate-900 text-slate-300 text-xs font-bold border border-slate-700">${t.workflow.step3.time}</span>
              </div>
              <h3 class="text-lg sm:text-xl font-black text-white mb-3 leading-snug">${t.workflow.step3.title}</h3>
              <p class="text-sm text-slate-300 leading-relaxed">${t.workflow.step3.desc}</p>
            </div>
            <div class="mt-8 pt-4 border-t border-slate-800 text-[11px] font-semibold text-brand-400">
              ${t.workflow.step3.tag}
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- Practical Guides & Columns Section -->
    <section id="guide" class="py-24 bg-ocean-950 border-t border-slate-800/80">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-4xl mx-auto mb-16">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-950/80 border border-brand-500/30 text-brand-400 text-xs font-bold tracking-widest uppercase mb-3">
            <span>${t.guides.sub}</span>
          </div>
          <h2 class="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
            ${t.guides.title}
          </h2>
          <p class="text-sm sm:text-base text-slate-400 mt-3 leading-relaxed">
            ${t.guides.desc}
          </p>
        </div>

        <div class="space-y-8">
          <!-- Column 1 -->
          <article class="p-8 sm:p-10 rounded-3xl glass-card border border-slate-800 hover:border-brand-500/40 transition-all">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-950 text-brand-300 text-xs font-bold border border-brand-500/30 mb-4">
              ${t.guides.col1.badge}
            </div>
            <h3 class="text-xl sm:text-2xl font-black text-white mb-4 leading-snug">${t.guides.col1.title}</h3>
            <div class="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              <p>${t.guides.col1.p1}</p>
              <p>${t.guides.col1.p2}</p>
            </div>
          </article>

          <!-- Column 2 -->
          <article class="p-8 sm:p-10 rounded-3xl glass-card border border-slate-800 hover:border-brand-500/40 transition-all">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 text-xs font-bold border border-cyan-500/30 mb-4">
              ${t.guides.col2.badge}
            </div>
            <h3 class="text-xl sm:text-2xl font-black text-white mb-4 leading-snug">${t.guides.col2.title}</h3>
            <div class="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              <p>${t.guides.col2.p1}</p>
              <p>${t.guides.col2.p2}</p>
            </div>
          </article>

          <!-- Column 3 -->
          <article class="p-8 sm:p-10 rounded-3xl glass-card border border-slate-800 hover:border-brand-500/40 transition-all">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950 text-emerald-300 text-xs font-bold border border-emerald-500/30 mb-4">
              ${t.guides.col3.badge}
            </div>
            <h3 class="text-xl sm:text-2xl font-black text-white mb-4 leading-snug">${t.guides.col3.title}</h3>
            <div class="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              <p>${t.guides.col3.p1}</p>
              <p>${t.guides.col3.p2}</p>
            </div>
          </article>
        </div>

      </div>
    </section>

    <!-- PWA Special Highlight Section -->
    <section id="pwa" class="py-24 relative overflow-hidden border-t border-slate-800/80">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="p-8 sm:p-14 rounded-3xl glass-card relative overflow-hidden border border-brand-500/40 shadow-2xl">
          <div class="absolute -right-20 -bottom-20 w-96 h-96 bg-brand-500/15 rounded-full blur-3xl pointer-events-none"></div>

          <div class="max-w-3xl">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-950 text-brand-300 text-xs font-bold border border-brand-500/40 mb-6">
              <span class="w-2 h-2 rounded-full bg-brand-400 animate-ping"></span>
              <span>${t.pwa.badge}</span>
            </div>

            <h2 class="text-2xl sm:text-4xl font-black text-white mb-6 leading-tight">
              ${t.pwa.title}
            </h2>

            <p class="text-sm sm:text-base text-slate-300 leading-relaxed mb-10">
              ${t.pwa.desc}
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
              <div class="p-5 rounded-2xl bg-slate-950/70 border border-slate-800/80">
                <div class="text-brand-400 font-bold text-sm mb-1.5 flex items-center gap-2">
                  <span>⚡</span>
                  <span>${t.pwa.feat1Title}</span>
                </div>
                <p class="text-xs text-slate-400 leading-relaxed">${t.pwa.feat1Desc}</p>
              </div>

              <div class="p-5 rounded-2xl bg-slate-950/70 border border-slate-800/80">
                <div class="text-emerald-400 font-bold text-sm mb-1.5 flex items-center gap-2">
                  <span>📶</span>
                  <span>${t.pwa.feat2Title}</span>
                </div>
                <p class="text-xs text-slate-400 leading-relaxed">${t.pwa.feat2Desc}</p>
              </div>

              <div class="p-5 rounded-2xl bg-slate-950/70 border border-slate-800/80">
                <div class="text-amber-400 font-bold text-sm mb-1.5 flex items-center gap-2">
                  <span>🔒</span>
                  <span>${t.pwa.feat3Title}</span>
                </div>
                <p class="text-xs text-slate-400 leading-relaxed">${t.pwa.feat3Desc}</p>
              </div>
            </div>

            <!-- Install guide pills -->
            <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs font-semibold text-slate-300 pt-6 border-t border-slate-800/80">
              <div class="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800">
                <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>${t.pwa.installIos}</span>
              </div>
              <div class="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800">
                <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>${t.pwa.installAndroid}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Accordion Section -->
    <section id="faq" class="py-24 bg-ocean-950 border-t border-slate-800/80">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-2xl mx-auto mb-16">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-950/80 border border-brand-500/30 text-brand-400 text-xs font-bold tracking-widest uppercase mb-3">
            <span>${t.faq.sub}</span>
          </div>
          <h2 class="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
            ${t.faq.title}
          </h2>
          <p class="text-sm sm:text-base text-slate-400 mt-3 leading-relaxed">
            ${t.faq.desc}
          </p>
        </div>

        <div class="space-y-4">
          ${t.faq.list.map(item => `
          <details class="group p-6 rounded-2xl glass-card border border-slate-800 hover:border-brand-500/40 transition-all cursor-pointer">
            <summary class="flex items-center justify-between text-base sm:text-lg font-bold text-white list-none">
              <span>${item.q}</span>
              <span class="ml-4 shrink-0 text-brand-400 transition-transform duration-200">
                <svg class="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </span>
            </summary>
            <div class="mt-4 pt-4 border-t border-slate-800/80 text-sm sm:text-base text-slate-300 leading-relaxed">
              ${item.a}
            </div>
          </details>`).join('')}
        </div>

      </div>
    </section>

    <!-- Bottom Call-To-Action Banner -->
    <section class="py-20 relative overflow-hidden border-t border-slate-800/80 glow-radial-sky">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight mb-4">
          ${t.cta.title}
        </h2>
        <p class="text-sm sm:text-base text-slate-300 mb-8 max-w-2xl mx-auto">
          ${t.cta.desc}
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="${appUrl}" class="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-brand-500 via-sky-500 to-cyan-400 hover:from-brand-400 hover:via-sky-400 hover:to-cyan-300 text-slate-950 font-black text-base shadow-xl shadow-brand-500/30 transition-all active:scale-95 flex items-center justify-center gap-2 group">
            <span>${t.cta.launchBtn}</span>
            <span class="group-hover:translate-x-1 transition-transform">${SVGS.arrowRight}</span>
          </a>
          <a href="${lang === 'ja' ? '/privacy' : `/${lang}/privacy`}" class="text-xs font-semibold text-slate-400 hover:text-brand-300 underline">
            ${t.cta.privacyLink}
          </a>
        </div>
      </div>
    </section>

  </main>`;
}


const PRIVACY_TRANSLATIONS = {
  "ja": {
    "metaTitle": "プライバシーポリシー・免責事項 - AnglerLog",
    "metaDesc": "AnglerLog（自分専用の釣り場・釣果ノート）のプライバシーポリシーおよび釣行に関する免責事項。完全ローカル保存・外部送信ゼロ。",
    "title": "プライバシーポリシー・免責事項",
    "sub": "Privacy Policy & Safe Angling Disclaimer",
    "sections": [
      {
        "num": "1",
        "title": "基本方針（ローカルファースト設計）",
        "paragraphs": [
          "AnglerLog（以下「当サービス」）は、アングラーにとってかけがえのない秘密の釣行ポイントや個人記録の機密保護を最重要方針として設計されています。",
          "当サービスに入力される一切の情報（釣り場名、GPS座標、潮位・気象メモ、釣果魚種、サイズ、仕掛け・ルアー情報、写真データ等）は、すべて利用者が使用している端末のブラウザ内（IndexedDB / localStorage）にのみ保存されます。ユーザーの明示的なエクスポート操作なしに、外部サーバーへの自動送信・収集・第三者提供が行われることは一切ありません。"
        ]
      },
      {
        "num": "2",
        "title": "位置情報（GPS）の利用",
        "paragraphs": [
          "当サービスでは、現在地の地図表示、ポイントの新規登録、およびその地点の潮汐（タイド）・気象データを取得するために、端末の位置情報サービス（GPS）へのアクセスを求める場合があります。",
          "位置情報は端末内での演算および気象・タイドAPIへの座標リクエストのみに利用され、利用者の移動履歴や行動ログをサーバー上に追跡・プロファイリングすることはありません。"
        ]
      },
      {
        "num": "3",
        "title": "写真・画像データの取り扱い",
        "paragraphs": [
          "釣果写真やポイントメモのために保存された画像は、お使いの端末ローカルストレージにのみ保存されます。外部のクラウドや画像サーバーへ自動アップロードされることはありません。"
        ]
      },
      {
        "num": "4",
        "title": "アクセス解析・Cookieについて",
        "paragraphs": [
          "当ポータルおよび各エディションでは、インフラの安定運用・可用性向上・障害検知のため、Cloudflare Web Analytics 等の匿名解析ツールを利用する場合があります。これらは個人を特定するCookieを使用せず、プライバシーに配慮された集計データのみを取り扱います。"
        ]
      },
      {
        "num": "5",
        "title": "免責事項（釣行時の安全確保について）",
        "paragraphs": [
          "当サービスで表示されるタイドグラフ（潮汐予測）、潮名、気象情報、日の出・日の入り時刻等は参考用データです。気象および海況条件は急激に変化する可能性があり、実際の天候や海象と異なる場合があります。",
          "釣行の際は必ず気象庁・海上保安庁・自治体等の最新の気象警報・注意報を確認し、ライフジャケットの常時着用、立入禁止・危険箇所の回避、天候悪化時の速やかな退避など、自身の安全確保を最優先として行動してください。",
          "当サービスの利用または利用不能により生じた一切の損害、事故、トラブルについて、開発者および運営者はその責任を負いかねますのであらかじめご了承ください。"
        ]
      },
      {
        "num": "6",
        "title": "お問い合わせ窓口",
        "paragraphs": [
          "本サービスに関するご質問、フィードバック、お問い合わせは以下までお願いいたします。"
        ]
      }
    ],
    "dates": {
      "created": "制定日: 2026年10月17日",
      "revised": "改定日: 2026年10月25日 (多言語個別ページ対応)"
    }
  },
  "en": {
    "metaTitle": "Privacy Policy & Maritime Disclaimer - AnglerLog",
    "metaDesc": "Privacy policy and maritime safety disclaimer for AnglerLog. 100% local device storage, zero cloud leaks, and complete fishing spot privacy.",
    "title": "Privacy Policy & Maritime Safety Disclaimer",
    "sub": "Privacy Policy & Safe Angling Disclaimer",
    "sections": [
      {
        "num": "1",
        "title": "Core Policy: 100% Local-First Architecture",
        "paragraphs": [
          "AnglerLog (\"the Service\") is architected around one uncompromising commitment: safeguarding the absolute confidentiality of your secret fishing spots, catch records, and personal angling data.",
          "All data entered into the Service—including waypoint coordinates, spot nicknames, tide and weather observations, target species, length, weight, tackle setups, and uploaded trophy photos—is stored strictly within your device browser's local memory (IndexedDB / localStorage). Nothing is transmitted, collected, synced, or shared with external servers without your explicit manual export."
        ]
      },
      {
        "num": "2",
        "title": "Use of GPS Location Services",
        "paragraphs": [
          "The Service may request access to your device's GPS geolocation services solely to render your current position on the map, pin new fishing spots, and query tide/marine weather predictions for your current coordinates.",
          "Geolocation data is processed locally on your device and never tracked, recorded, logged, or profiled on any remote server."
        ]
      },
      {
        "num": "3",
        "title": "Photos & Media Storage",
        "paragraphs": [
          "Photos captured or imported for catch logs and spot references are compressed and stored solely inside your local browser database. Your imagery and its associated metadata (such as EXIF geolocation) are never uploaded to any cloud storage or image repository."
        ]
      },
      {
        "num": "4",
        "title": "Analytics, Cookies & Telemetry",
        "paragraphs": [
          "To maintain portal infrastructure reliability, prevent abuse, and optimize availability, the Service may utilize privacy-preserving, cookieless analytics solutions such as Cloudflare Web Analytics. No cross-site tracking cookies or personal fingerprinting techniques are ever employed."
        ]
      },
      {
        "num": "5",
        "title": "Maritime Safety & Fieldwork Disclaimer",
        "paragraphs": [
          "Tide curves, astronomical moon phases, weather metrics, and sunrise/sunset times displayed in the Service are calculated estimates intended purely for recreational planning. Natural conditions, bathymetry, currents, and sudden squalls can cause actual conditions to diverge significantly from calculated models.",
          "Always verify local maritime forecasts, marine police warnings, and national weather service advisories prior to heading out. Maintain maritime safety as your primary priority: wear an approved life vest / personal flotation device (PFD) at all times, avoid restricted or unstable coastal terrain, and withdraw promptly if weather or surf deteriorates.",
          "The developer and operator disclaim all liability for any accidents, injuries, losses, or damages resulting from the use or inability to use the Service."
        ]
      },
      {
        "num": "6",
        "title": "Contact & Inquiries",
        "paragraphs": [
          "For questions, feedback, or support regarding AnglerLog, please contact:"
        ]
      }
    ],
    "dates": {
      "created": "Established: October 17, 2026",
      "revised": "Revised: October 25, 2026 (Dedicated Multilingual Editions)"
    }
  },
  "fr": {
    "metaTitle": "Politique de Confidentialité & Avertissement - AnglerLog",
    "metaDesc": "Politique de confidentialité et avertissement maritime d'AnglerLog. Architecture 100% locale, zéro fuite sur le cloud, confidentialité totale de vos spots.",
    "title": "Politique de Confidentialité & Avertissement de Sécurité",
    "sub": "Politique de Confidentialité & Avertissement Maritime",
    "sections": [
      {
        "num": "1",
        "title": "Principe Fondamental : Architecture 100% Locale",
        "paragraphs": [
          "AnglerLog (« le Service ») est conçu avec une exigence absolue : garantir la confidentialité totale de vos spots de pêche secrets, de vos prises et de vos notes de terrain.",
          "Toutes les données saisies dans le Service (coordonnées GPS, noms de spots, relevés de marée et météo, espèces capturées, tailles, poids, montages et photographies) sont stockées exclusivement dans la mémoire locale de votre navigateur (IndexedDB / localStorage). Aucune donnée n'est transmise, collectée ou partagée avec des serveurs externes sans votre démarche explicite d'exportation."
        ]
      },
      {
        "num": "2",
        "title": "Utilisation des Données de Localisation GPS",
        "paragraphs": [
          "Le Service peut solliciter l'accès au capteur GPS de votre appareil uniquement pour situer votre position sur la carte, enregistrer de nouveaux repères et interroger les prévisions de marées et de météo marine correspondant à ces coordonnées.",
          "Ces coordonnées sont traitées localement et ne font l'objet d'aucun suivi, archivage ou profilage sur des serveurs distants."
        ]
      },
      {
        "num": "3",
        "title": "Traitement des Photos et Médias",
        "paragraphs": [
          "Les photos enregistrées pour illustrer vos prises et repères sont conservées uniquement au sein du stockage interne de votre navigateur. Vos clichés et leurs métadonnées EXIF ne sont jamais transférés vers un hébergement cloud externe."
        ]
      },
      {
        "num": "4",
        "title": "Analyses d'Audience et Cookies",
        "paragraphs": [
          "Pour assurer la stabilité, la sécurité et la haute disponibilité de l'infrastructure, le Service peut faire appel à des outils d'analyse anonymes et sans cookies, tels que Cloudflare Web Analytics. Aucun traceur publicitaire intrusif n'est utilisé."
        ]
      },
      {
        "num": "5",
        "title": "Avertissement de Sécurité Maritime et Responsabilité",
        "paragraphs": [
          "Les courbes de marées, coefficients, prévisions météo et heures solaires fournis par le Service sont des estimations calculées à titre informatif et récréatif. La météo et l'état de la mer peuvent évoluer rapidement et différer des modèles théoriques.",
          "Consultez systématiquement les bulletins officiels des services météorologiques et des autorités maritimes avant chaque sortie. Faites toujours passer votre sécurité en premier : portez un gilet de sauvetage homologué en permanence, évitez les zones côtières dangereuses ou interdites, et quittez les lieux dès les premiers signes de dégradation météorologique.",
          "Le développeur et l'exploitant déclinent toute responsabilité en cas d'accident, de blessure, de dommage matériel ou d'incident survenu lors de l'utilisation de l'application."
        ]
      },
      {
        "num": "6",
        "title": "Contact et Assistance",
        "paragraphs": [
          "Pour toute question, suggestion ou demande relative à AnglerLog, vous pouvez nous écrire à l'adresse suivante :"
        ]
      }
    ],
    "dates": {
      "created": "Date d'établissement : 17 octobre 2026",
      "revised": "Dernière révision : 25 octobre 2026 (Éditions multilingues dédiées)"
    }
  },
  "de": {
    "metaTitle": "Datenschutzerklärung & Seefahrts-Hinweise - AnglerLog",
    "metaDesc": "Datenschutzerklärung und Sicherheitshinweise für AnglerLog. 100% lokale Speicherung, null Cloud-Uploads und absoluter Schutz Ihrer geheimen Angelplätze.",
    "title": "Datenschutzerklärung & Seefahrts-Haftungsausschluss",
    "sub": "Datenschutzerklärung & Sicherheitshinweise am Wasser",
    "sections": [
      {
        "num": "1",
        "title": "Grundprinzip: 100% Lokale Offline-Architektur",
        "paragraphs": [
          "AnglerLog („der Dienst“) basiert auf einem zentralen Leitgedanken: dem kompromisslosen Schutz Ihrer geheimen Angelplätze, Fangstatistiken und persönlichen Notizen.",
          "Alle in den Dienst eingegebenen Daten (GPS-Koordinaten, Gewässernamen, Gezeiten- und Wetterdaten, Fischarten, Maße, Gewichte, Köder und Fotos) werden ausschließlich im lokalen Speicher Ihres Browsers (IndexedDB / localStorage) gesichert. Es erfolgt keinerlei automatischer Transfer, keine Speicherung auf externen Cloud-Servern und keine Weitergabe an Dritte ohne Ihren ausdrücklichen Export."
        ]
      },
      {
        "num": "2",
        "title": "Nutzung von GPS-Standortdaten",
        "paragraphs": [
          "Der Dienst fordert den Zugriff auf den GPS-Empfänger Ihres Endgeräts ausschließlich an, um Ihren aktuellen Standort auf der Karte darzustellen, neue Fangplätze zu markieren und standortgenaue Gezeiten- sowie Wettervorhersagen abzurufen.",
          "Die Positionsdaten werden ausschließlich lokal auf Ihrem Endgerät verarbeitet und zu keinem Zeitpunkt auf Servern getrackt, protokolliert oder für Nutzerprofile ausgewertet."
        ]
      },
      {
        "num": "3",
        "title": "Speicherung von Fotos und Medien",
        "paragraphs": [
          "Fotos, die Sie zu Fangberichten oder Spots speichern, verbleiben ausschließlich im lokalen Browser-Speicher Ihres Geräts. Bilder und deren EXIF-Metadaten werden niemals auf externe Bildserver oder Cloud-Dienste übertragen."
        ]
      },
      {
        "num": "4",
        "title": "Web-Analyse, Cookies & Telemetrie",
        "paragraphs": [
          "Zur Sicherstellung von Systemstabilität, Ausfallsicherheit und Performance nutzt der Dienst datenschutzfreundliche, cookie-freie Analysedienste wie Cloudflare Web Analytics. Es werden keine verhaltensbasierten Tracking-Cookies eingesetzt."
        ]
      },
      {
        "num": "5",
        "title": "Sicherheit am Wasser & Haftungsausschluss",
        "paragraphs": [
          "Gezeitengrafiken, Mondphasen, Wetterprognosen sowie Sonnenauf- und -untergangszeiten sind rechnerische Orientierungshilfen für den Freizeiteinsatz. Die tatsächlichen Bedingungen vor Ort können durch Strömungen, Untiefen oder plötzliche Wetterumschwünge erheblich abweichen.",
          "Informieren Sie sich vor jedem Angeltrip über amtliche Seewetterberichte und behördliche Warnungen. Eigensicherung hat stets oberste Priorität: Tragen Sie durchgehend eine geprüfte Rettungsweste, meiden Sie gesperrte Uferzonen und brechen Sie das Angeln bei widrigen Verhältnissen frühzeitig ab.",
          "Entwickler und Betreiber übernehmen keinerlei Haftung für Unfälle, Personen- oder Sachschäden, die aus der Nutzung des Dienstes entstehen."
        ]
      },
      {
        "num": "6",
        "title": "Kontakt und Anfragen",
        "paragraphs": [
          "Bei Fragen, Anregungen oder Support-Anliegen zu AnglerLog erreichen Sie uns unter:"
        ]
      }
    ],
    "dates": {
      "created": "Datum des Inkrafttretens: 17. Oktober 2026",
      "revised": "Letzte Aktualisierung: 25. Oktober 2026 (Mehrsprachige Einzelseiten)"
    }
  },
  "es": {
    "metaTitle": "Política de Privacidad & Descargo de Seguridad - AnglerLog",
    "metaDesc": "Política de privacidad y advertencia de seguridad para AnglerLog. Almacenamiento 100% local, cero envíos a la nube y privacidad total de tus pesqueros.",
    "title": "Política de Privacidad & Descargo de Responsabilidad Marítima",
    "sub": "Política de Privacidad & Normas de Seguridad en Pesca",
    "sections": [
      {
        "num": "1",
        "title": "Principio Fundamental: Arquitectura 100% Local",
        "paragraphs": [
          "AnglerLog (\"el Servicio\") está diseñado bajo una premisa inquebrantable: preservar la confidencialidad absoluta de tus marcas secretas, capturas y notas personales de pesca.",
          "Toda la información introducida en el Servicio (coordenadas GPS, nombres de zonas, lecturas de mareas y clima, especies, medidas, pesos, aparejos y fotografías) se almacena únicamente en el almacenamiento local de tu navegador (IndexedDB / localStorage). Nada se envía a servidores externos ni se comparte con terceros sin tu exportación voluntaria."
        ]
      },
      {
        "num": "2",
        "title": "Uso de Servicios de Ubicación GPS",
        "paragraphs": [
          "El Servicio puede requerir acceso a los servicios de geolocalización GPS de tu dispositivo únicamente para mostrar tu posición en el mapa, registrar nuevos pesqueros y consultar previsiones de mareas y oleaje para ese punto.",
          "Las coordenadas se calculan localmente y nunca se rastrean, archivan ni perfilan en servidores remotos."
        ]
      },
      {
        "num": "3",
        "title": "Almacenamiento de Fotos e Imágenes",
        "paragraphs": [
          "Las fotografías agregadas a tus capturas o marcas quedan guardadas exclusivamente en la memoria de tu dispositivo. Tus fotos y metadatos EXIF jamás se suben a repositorios cloud externos."
        ]
      },
      {
        "num": "4",
        "title": "Análisis Web y Cookies",
        "paragraphs": [
          "Para monitorizar la disponibilidad del portal y prevenir fallos técnicos, el Servicio puede emplear herramientas de métricas anónimas sin cookies, tales como Cloudflare Web Analytics. No se utilizan cookies invasivas de seguimiento publicitario."
        ]
      },
      {
        "num": "5",
        "title": "Seguridad en el Mar y Descargo de Responsabilidad",
        "paragraphs": [
          "Las tablas de mareas, fases lunares y previsiones meteorológicas mostradas son cálculos orientativos para la planificación deportiva. Las corrientes, bajíos y temporales repentinos pueden provocar variaciones notables frente a los modelos predictivos.",
          "Comprueba siempre los partes meteorológicos oficiales de salvamento marítimo y autoridades portuarias. Tu seguridad es prioritaria: lleva chaleco salvavidas homologado en todo momento, respeta zonas prohibidas o acantilados peligrosos, y evacúa con rapidez ante cualquier empeoramiento del tiempo.",
          "El desarrollador y el operador no se responsabilizan de accidentes, percances personales o pérdidas materiales derivados del uso del Servicio."
        ]
      },
      {
        "num": "6",
        "title": "Contacto y Consultas",
        "paragraphs": [
          "Si deseas realizar consultas, comentarios o sugerencias sobre AnglerLog, puedes contactarnos en:"
        ]
      }
    ],
    "dates": {
      "created": "Fecha de establecimiento: 17 de octubre de 2026",
      "revised": "Última revisión: 25 de octubre de 2026 (Páginas multilingües dedicadas)"
    }
  },
  "it": {
    "metaTitle": "Informativa sulla Privacy & Disclaimer - AnglerLog",
    "metaDesc": "Informativa sulla privacy e avviso di sicurezza marittima per AnglerLog. Architettura 100% locale, zero fughe su cloud, riservatezza totale dei tuoi spot.",
    "title": "Informativa sulla Privacy & Disclaimer di Sicurezza Marittima",
    "sub": "Informativa sulla Privacy & Linee Guida di Sicurezza in Mare",
    "sections": [
      {
        "num": "1",
        "title": "Principio Fondamentale: Architettura 100% Locale",
        "paragraphs": [
          "AnglerLog (\"il Servizio\") è strutturato secondo un principio irrinunciabile: proteggere la segretezza assoluta dei tuoi spot di pesca, delle tue catture e delle annotazioni personali.",
          "Qualsiasi informazione inserita nel Servizio (coordinate GPS, toponimi, osservazioni su maree e meteo, specie ittiche, misure, pesi, esche e foto) viene salvata esclusivamente nella memoria locale del tuo browser (IndexedDB / localStorage). Nessun dato viene trasmesso, archiviato su server remoti o condiviso con terze parti senza una tua esplicita azione di esportazione."
        ]
      },
      {
        "num": "2",
        "title": "Uso dei Servizi di Posizione GPS",
        "paragraphs": [
          "Il Servizio può richiedere l'accesso ai sensori di geolocalizzazione GPS del dispositivo unicamente per visualizzare la posizione sulla mappa, appuntare nuovi waypoint e caricare le previsioni meteomarine per quelle coordinate.",
          "Le informazioni di localizzazione sono elaborate localmente e non vengono mai tracciate o profilate su server esterni."
        ]
      },
      {
        "num": "3",
        "title": "Trattamento di Foto e Immagini",
        "paragraphs": [
          "Le foto salvate nel diario di cattura rimangono confinate nel database locale del tuo browser. Le immagini e i relativi metadati EXIF non vengono mai caricati su server cloud esterni."
        ]
      },
      {
        "num": "4",
        "title": "Analisi Web e Cookie",
        "paragraphs": [
          "Per garantire stabilità operativa ed efficienza dell'infrastruttura, il Servizio può avvalersi di soluzioni analitiche anonime senza cookie come Cloudflare Web Analytics. Non viene fatto uso di cookie traccianti per finalità pubblicitarie."
        ]
      },
      {
        "num": "5",
        "title": "Sicurezza in Mare e Limitazione di Responsabilità",
        "paragraphs": [
          "I grafici di marea, le fasi lunari e i parametri meteo proposti dall'applicazione sono stime a scopo informativo e ricreativo. Il mare e le perturbazioni atmosferiche possono mutare repentinamente, rendendo le condizioni reali dissimili da quelle previste.",
          "Verifica con costanza i bollettini ufficiali della guardia costiera e degli enti meteo accreditati. Dai assoluta priorità alla tua sicurezza: indossa sempre un giubbotto di salvataggio omologato, evita scogliere scivolose o zone interdette, e allontanati tempestivamente all'avvicinarsi del maltempo.",
          "Gli sviluppatori e i gestori declinano ogni responsabilità per incidenti, infortuni o danni a persone o cose legati all'impiego dell'applicazione."
        ]
      },
      {
        "num": "6",
        "title": "Contatti e Assistenza",
        "paragraphs": [
          "Per quesiti, segnalazioni o assistenza su AnglerLog, è possibile contattare:"
        ]
      }
    ],
    "dates": {
      "created": "Data di emissione: 17 ottobre 2026",
      "revised": "Ultima revisione: 25 ottobre 2026 (Pagine dedicate multilingua)"
    }
  },
  "pt": {
    "metaTitle": "Política de Privacidade & Isenção Marítima - AnglerLog",
    "metaDesc": "Política de privacidade e aviso de segurança marítima do AnglerLog. Armazenamento 100% local, zero fugas na cloud e total privacidade dos seus pesqueiros.",
    "title": "Política de Privacidade & Aviso de Segurança Marítima",
    "sub": "Política de Privacidade & Salvaguarda Náutica",
    "sections": [
      {
        "num": "1",
        "title": "Princípio Fundamental: Arquitetura 100% Local",
        "paragraphs": [
          "O AnglerLog (\"o Serviço\") foi concebido sob um compromisso inegociável: proteger o sigilo absoluto dos seus pesqueiros secretos, registos de capturas e notas pessoais de pesca.",
          "Todas as informações introduzidas no Serviço (coordenadas GPS, nomes de pesqueiros, registos de marés e meteorologia, espécies, tamanhos, pesos, montagens e fotos) são guardadas exclusivamente na memória local do seu navegador (IndexedDB / localStorage). Nada é transmitido, arquivado em servidores remotos ou partilhado com terceiros sem que execute uma exportação manual."
        ]
      },
      {
        "num": "2",
        "title": "Utilização de Serviços de Localização GPS",
        "paragraphs": [
          "O Serviço pode solicitar acesso à geolocalização por GPS do seu dispositivo exclusivamente para assinalar a sua posição na carta, marcar novos pontos de pesca e consultar as previsões marítimas para essa localização.",
          "Os dados geográficos são processados localmente e nunca são rastreados, armazenados ou analisados para definição de perfis em servidores externos."
        ]
      },
      {
        "num": "3",
        "title": "Armazenamento de Fotografias e Ficheiros",
        "paragraphs": [
          "As fotos adicionadas aos seus registos de pesca permanecem unicamente na base de dados interna do seu navegador. As suas fotografias e respetivos metadados EXIF nunca são enviados para plataformas na cloud."
        ]
      },
      {
        "num": "4",
        "title": "Análise de Tráfego e Cookies",
        "paragraphs": [
          "De forma a assegurar a fiabilidade, estabilidade e capacidade de resposta da infraestrutura, o Serviço poderá recorrer a ferramentas estatísticas anónimas sem cookies, tais como o Cloudflare Web Analytics. Não são utilizados cookies de monitorização publicitária."
        ]
      },
      {
        "num": "5",
        "title": "Segurança no Mar e Isenção de Responsabilidade",
        "paragraphs": [
          "Os gráficos de marés, efemérides lunares e previsões meteorológicas apresentados são cálculos meramente indicativos para fins de lazer. O estado do mar, as correntes e as frentes meteorológicas podem sofrer alterações súbitas, divergindo dos modelos teóricos.",
          "Consulte sempre os avisos à navegação e alertas meteorológicos emitidos pela autoridade marítima e pelos serviços oficiais. A sua integridade física deve prevalecer sempre: use colete salva-vidas permanentemente, evite arribas instáveis ou locais de acesso interdito, e retire-se prontamente caso as condições marítimas se deteriorem.",
          "O programador e os responsáveis pela plataforma declinam qualquer responsabilidade por acidentes, danos físicos ou materiais decorrentes do uso da aplicação."
        ]
      },
      {
        "num": "6",
        "title": "Contacto e Apoio",
        "paragraphs": [
          "Para esclarecimento de dúvidas, comentários ou sugestões sobre o AnglerLog, contacte-nos através de:"
        ]
      }
    ],
    "dates": {
      "created": "Data de instituição: 17 de outubro de 2026",
      "revised": "Última atualização: 25 de outubro de 2026 (Páginas multilingues dedicadas)"
    }
  }
};

function renderPrivacyContent(lang) {
  const p = PRIVACY_TRANSLATIONS[lang] || PRIVACY_TRANSLATIONS.ja;
  const langPills = [
    { code: 'ja', label: '日本語', path: '/privacy' },
    { code: 'en', label: 'English', path: '/en/privacy' },
    { code: 'fr', label: 'Français', path: '/fr/privacy' },
    { code: 'de', label: 'Deutsch', path: '/de/privacy' },
    { code: 'es', label: 'Español', path: '/es/privacy' },
    { code: 'it', label: 'Italiano', path: '/it/privacy' },
    { code: 'pt', label: 'Português', path: '/pt/privacy' }
  ];

  const pillsHtml = langPills.map(lp => {
    const isCur = lp.code === lang;
    return `<a href="${lp.path}" class="px-3 py-1 rounded-xl text-xs font-semibold transition-all ${isCur ? 'bg-brand-500/20 text-brand-300 border border-brand-500/40 shadow-sm' : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800' }">${lp.label}</a>`;
  }).join(' ');

  const sectionsHtml = p.sections.map(s => {
    const paras = s.paragraphs.map(text => `<p class="mb-3 last:mb-0">${text}</p>`).join('');
    return `
    <section>
      <h2 class="font-black text-white text-lg mb-3 flex items-center gap-2.5">
        <span class="w-2 h-5 bg-brand-400 rounded-full"></span>
        ${s.num}. ${s.title}
      </h2>
      <div class="leading-relaxed">
        ${paras}
      </div>
      ${s.num === '6' ? '<p class="mt-2 font-mono text-brand-300 font-semibold">Email: stoooone.studio@gmail.com</p>' : ''}
    </section>`;
  }).join('');

  return `
  <main class="flex-grow py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      
      <!-- Multilingual Pill Navigator -->
      <div class="flex flex-wrap items-center justify-center gap-2 mb-8 p-3 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
        ${pillsHtml}
      </div>

      <div class="p-6 sm:p-14 rounded-3xl glass-card border border-brand-500/30 shadow-2xl">
        
        <div class="flex items-center gap-4 mb-10 pb-6 border-b border-slate-800">
          <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-brand-950 border border-brand-500/40 text-brand-400 flex items-center justify-center shrink-0 shadow-lg shadow-brand-950/60">
            ${SVGS.shield}
          </div>
          <div>
            <h1 class="text-xl sm:text-3xl font-black text-white tracking-tight">${p.title}</h1>
            <p class="text-xs text-brand-400 font-mono mt-1">${p.sub}</p>
          </div>
        </div>

        <div class="space-y-10 text-sm sm:text-base text-slate-300 leading-relaxed">
          ${sectionsHtml}

          <div class="pt-8 border-t border-slate-800 text-xs text-slate-500 font-mono space-y-1">
            <div>${p.dates.created}</div>
            <div>${p.dates.revised}</div>
          </div>
        </div>

      </div>
    </div>
  </main>`;
}


function htmlResponse(html) {
  return new Response(html, {
    status: 200,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "public, max-age=0, s-maxage=86400, stale-while-revalidate=604800",
      "x-content-type-options": "nosniff",
      "referrer-policy": "strict-origin-when-cross-origin"
    }
  });
}

async function handleRequest(request, url) {
  // Video proxy / direct delivery with full Range & CORS support
  if (url.pathname.startsWith("/videos/")) {
    const parts = url.pathname.replace(/^\/videos\//, "").split("/");
    let targetLang = "ja";
    let targetFile = parts[0];
    if (parts.length >= 2) {
      targetLang = parts[0];
      targetFile = parts[1];
    }
    const targetSub = targetLang === "ja" ? "jp" : targetLang;
    const upstreamUrl = `https://${targetSub}.angler-log.app/videos/${targetFile}`;
    try {
      const reqHeaders = new Headers(request.headers);
      reqHeaders.delete("host");
      const upstreamRes = await fetch(upstreamUrl, {
        method: request.method,
        headers: reqHeaders,
        cf: {
          cacheEverything: true,
          cacheTtl: 2592000
        }
      });
      
      const resHeaders = new Headers(upstreamRes.headers);
      resHeaders.set("cache-control", "public, max-age=2592000, stale-while-revalidate=604800");
      resHeaders.set("access-control-allow-origin", "*");
      resHeaders.set("access-control-allow-headers", "Range, Origin, Content-Type");
      resHeaders.set("accept-ranges", "bytes");

      return new Response(upstreamRes.body, {
        status: upstreamRes.status,
        statusText: upstreamRes.statusText,
        headers: resHeaders
      });
    } catch (e) {
      // ignore error and proceed
    }
  }

  if (url.pathname === "/ads.txt") {
    return new Response("google.com, pub-5353304887278086, DIRECT, f08c47fec0942fa0\n", {
      status: 200,
      headers: {
        "content-type": "text/plain; charset=utf-8",
        "cache-control": "public, max-age=86400, stale-while-revalidate=604800"
      }
    });
  }

  if (url.pathname === "/robots.txt") {
    const host = url.hostname || "angler-log.app";
    const extraSitemap = (host === "jp.angler-log.app" || host === "en.angler-log.app" || host === "fr.angler-log.app" || host === "de.angler-log.app" || host === "es.angler-log.app" || host === "it.angler-log.app" || host === "pt.angler-log.app")
      ? `Sitemap: https://${host}/sitemap.xml\n`
      : "";
    return new Response(
      `User-agent: Mediapartners-Google\nAllow: /\n\nUser-agent: *\nAllow: /\n\nSitemap: https://angler-log.app/sitemap.xml\n${extraSitemap}`,
      {
        status: 200,
        headers: {
          "content-type": "text/plain; charset=utf-8",
          "cache-control": "public, max-age=86400, stale-while-revalidate=604800"
        }
      }
    );
  }

  if (url.pathname === "/sitemap.xml") {
    const host = url.hostname || "angler-log.app";
    let sitemapXml = "";
    if (host === "jp.angler-log.app" || host === "en.angler-log.app" || host === "fr.angler-log.app" || host === "de.angler-log.app" || host === "es.angler-log.app" || host === "it.angler-log.app" || host === "pt.angler-log.app") {
      sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://${host}/</loc>
    <lastmod>2026-10-24</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;
    } else {
      sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>https://angler-log.app/</loc>
    <xhtml:link rel="alternate" hreflang="ja" href="https://angler-log.app/" />
    <xhtml:link rel="alternate" hreflang="en" href="https://angler-log.app/en" />
    <xhtml:link rel="alternate" hreflang="fr" href="https://angler-log.app/fr" />
    <xhtml:link rel="alternate" hreflang="de" href="https://angler-log.app/de" />
    <xhtml:link rel="alternate" hreflang="es" href="https://angler-log.app/es" />
    <xhtml:link rel="alternate" hreflang="it" href="https://angler-log.app/it" />
    <xhtml:link rel="alternate" hreflang="pt" href="https://angler-log.app/pt" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://angler-log.app/" />
    <lastmod>2026-10-24</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://angler-log.app/en</loc>
    <xhtml:link rel="alternate" hreflang="ja" href="https://angler-log.app/" />
    <xhtml:link rel="alternate" hreflang="en" href="https://angler-log.app/en" />
    <xhtml:link rel="alternate" hreflang="fr" href="https://angler-log.app/fr" />
    <xhtml:link rel="alternate" hreflang="de" href="https://angler-log.app/de" />
    <xhtml:link rel="alternate" hreflang="es" href="https://angler-log.app/es" />
    <xhtml:link rel="alternate" hreflang="it" href="https://angler-log.app/it" />
    <xhtml:link rel="alternate" hreflang="pt" href="https://angler-log.app/pt" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://angler-log.app/" />
    <lastmod>2026-10-24</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://angler-log.app/fr</loc>
    <xhtml:link rel="alternate" hreflang="ja" href="https://angler-log.app/" />
    <xhtml:link rel="alternate" hreflang="en" href="https://angler-log.app/en" />
    <xhtml:link rel="alternate" hreflang="fr" href="https://angler-log.app/fr" />
    <xhtml:link rel="alternate" hreflang="de" href="https://angler-log.app/de" />
    <xhtml:link rel="alternate" hreflang="es" href="https://angler-log.app/es" />
    <xhtml:link rel="alternate" hreflang="it" href="https://angler-log.app/it" />
    <xhtml:link rel="alternate" hreflang="pt" href="https://angler-log.app/pt" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://angler-log.app/" />
    <lastmod>2026-10-24</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://angler-log.app/de</loc>
    <xhtml:link rel="alternate" hreflang="ja" href="https://angler-log.app/" />
    <xhtml:link rel="alternate" hreflang="en" href="https://angler-log.app/en" />
    <xhtml:link rel="alternate" hreflang="fr" href="https://angler-log.app/fr" />
    <xhtml:link rel="alternate" hreflang="de" href="https://angler-log.app/de" />
    <xhtml:link rel="alternate" hreflang="es" href="https://angler-log.app/es" />
    <xhtml:link rel="alternate" hreflang="it" href="https://angler-log.app/it" />
    <xhtml:link rel="alternate" hreflang="pt" href="https://angler-log.app/pt" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://angler-log.app/" />
    <lastmod>2026-10-24</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://angler-log.app/es</loc>
    <xhtml:link rel="alternate" hreflang="ja" href="https://angler-log.app/" />
    <xhtml:link rel="alternate" hreflang="en" href="https://angler-log.app/en" />
    <xhtml:link rel="alternate" hreflang="fr" href="https://angler-log.app/fr" />
    <xhtml:link rel="alternate" hreflang="de" href="https://angler-log.app/de" />
    <xhtml:link rel="alternate" hreflang="es" href="https://angler-log.app/es" />
    <xhtml:link rel="alternate" hreflang="it" href="https://angler-log.app/it" />
    <xhtml:link rel="alternate" hreflang="pt" href="https://angler-log.app/pt" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://angler-log.app/" />
    <lastmod>2026-10-24</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://angler-log.app/it</loc>
    <xhtml:link rel="alternate" hreflang="ja" href="https://angler-log.app/" />
    <xhtml:link rel="alternate" hreflang="en" href="https://angler-log.app/en" />
    <xhtml:link rel="alternate" hreflang="fr" href="https://angler-log.app/fr" />
    <xhtml:link rel="alternate" hreflang="de" href="https://angler-log.app/de" />
    <xhtml:link rel="alternate" hreflang="es" href="https://angler-log.app/es" />
    <xhtml:link rel="alternate" hreflang="it" href="https://angler-log.app/it" />
    <xhtml:link rel="alternate" hreflang="pt" href="https://angler-log.app/pt" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://angler-log.app/" />
    <lastmod>2026-10-24</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://angler-log.app/pt</loc>
    <xhtml:link rel="alternate" hreflang="ja" href="https://angler-log.app/" />
    <xhtml:link rel="alternate" hreflang="en" href="https://angler-log.app/en" />
    <xhtml:link rel="alternate" hreflang="fr" href="https://angler-log.app/fr" />
    <xhtml:link rel="alternate" hreflang="de" href="https://angler-log.app/de" />
    <xhtml:link rel="alternate" hreflang="es" href="https://angler-log.app/es" />
    <xhtml:link rel="alternate" hreflang="it" href="https://angler-log.app/it" />
    <xhtml:link rel="alternate" hreflang="pt" href="https://angler-log.app/pt" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://angler-log.app/" />
    <lastmod>2026-10-24</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://angler-log.app/privacy</loc>
    <xhtml:link rel="alternate" hreflang="ja" href="https://angler-log.app/privacy" />
    <xhtml:link rel="alternate" hreflang="en" href="https://angler-log.app/en/privacy" />
    <xhtml:link rel="alternate" hreflang="fr" href="https://angler-log.app/fr/privacy" />
    <xhtml:link rel="alternate" hreflang="de" href="https://angler-log.app/de/privacy" />
    <xhtml:link rel="alternate" hreflang="es" href="https://angler-log.app/es/privacy" />
    <xhtml:link rel="alternate" hreflang="it" href="https://angler-log.app/it/privacy" />
    <xhtml:link rel="alternate" hreflang="pt" href="https://angler-log.app/pt/privacy" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://angler-log.app/privacy" />
    <lastmod>2026-10-25</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://angler-log.app/en/privacy</loc>
    <xhtml:link rel="alternate" hreflang="ja" href="https://angler-log.app/privacy" />
    <xhtml:link rel="alternate" hreflang="en" href="https://angler-log.app/en/privacy" />
    <xhtml:link rel="alternate" hreflang="fr" href="https://angler-log.app/fr/privacy" />
    <xhtml:link rel="alternate" hreflang="de" href="https://angler-log.app/de/privacy" />
    <xhtml:link rel="alternate" hreflang="es" href="https://angler-log.app/es/privacy" />
    <xhtml:link rel="alternate" hreflang="it" href="https://angler-log.app/it/privacy" />
    <xhtml:link rel="alternate" hreflang="pt" href="https://angler-log.app/pt/privacy" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://angler-log.app/privacy" />
    <lastmod>2026-10-25</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://angler-log.app/fr/privacy</loc>
    <xhtml:link rel="alternate" hreflang="ja" href="https://angler-log.app/privacy" />
    <xhtml:link rel="alternate" hreflang="en" href="https://angler-log.app/en/privacy" />
    <xhtml:link rel="alternate" hreflang="fr" href="https://angler-log.app/fr/privacy" />
    <xhtml:link rel="alternate" hreflang="de" href="https://angler-log.app/de/privacy" />
    <xhtml:link rel="alternate" hreflang="es" href="https://angler-log.app/es/privacy" />
    <xhtml:link rel="alternate" hreflang="it" href="https://angler-log.app/it/privacy" />
    <xhtml:link rel="alternate" hreflang="pt" href="https://angler-log.app/pt/privacy" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://angler-log.app/privacy" />
    <lastmod>2026-10-25</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://angler-log.app/de/privacy</loc>
    <xhtml:link rel="alternate" hreflang="ja" href="https://angler-log.app/privacy" />
    <xhtml:link rel="alternate" hreflang="en" href="https://angler-log.app/en/privacy" />
    <xhtml:link rel="alternate" hreflang="fr" href="https://angler-log.app/fr/privacy" />
    <xhtml:link rel="alternate" hreflang="de" href="https://angler-log.app/de/privacy" />
    <xhtml:link rel="alternate" hreflang="es" href="https://angler-log.app/es/privacy" />
    <xhtml:link rel="alternate" hreflang="it" href="https://angler-log.app/it/privacy" />
    <xhtml:link rel="alternate" hreflang="pt" href="https://angler-log.app/pt/privacy" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://angler-log.app/privacy" />
    <lastmod>2026-10-25</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://angler-log.app/es/privacy</loc>
    <xhtml:link rel="alternate" hreflang="ja" href="https://angler-log.app/privacy" />
    <xhtml:link rel="alternate" hreflang="en" href="https://angler-log.app/en/privacy" />
    <xhtml:link rel="alternate" hreflang="fr" href="https://angler-log.app/fr/privacy" />
    <xhtml:link rel="alternate" hreflang="de" href="https://angler-log.app/de/privacy" />
    <xhtml:link rel="alternate" hreflang="es" href="https://angler-log.app/es/privacy" />
    <xhtml:link rel="alternate" hreflang="it" href="https://angler-log.app/it/privacy" />
    <xhtml:link rel="alternate" hreflang="pt" href="https://angler-log.app/pt/privacy" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://angler-log.app/privacy" />
    <lastmod>2026-10-25</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://angler-log.app/it/privacy</loc>
    <xhtml:link rel="alternate" hreflang="ja" href="https://angler-log.app/privacy" />
    <xhtml:link rel="alternate" hreflang="en" href="https://angler-log.app/en/privacy" />
    <xhtml:link rel="alternate" hreflang="fr" href="https://angler-log.app/fr/privacy" />
    <xhtml:link rel="alternate" hreflang="de" href="https://angler-log.app/de/privacy" />
    <xhtml:link rel="alternate" hreflang="es" href="https://angler-log.app/es/privacy" />
    <xhtml:link rel="alternate" hreflang="it" href="https://angler-log.app/it/privacy" />
    <xhtml:link rel="alternate" hreflang="pt" href="https://angler-log.app/pt/privacy" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://angler-log.app/privacy" />
    <lastmod>2026-10-25</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://angler-log.app/pt/privacy</loc>
    <xhtml:link rel="alternate" hreflang="ja" href="https://angler-log.app/privacy" />
    <xhtml:link rel="alternate" hreflang="en" href="https://angler-log.app/en/privacy" />
    <xhtml:link rel="alternate" hreflang="fr" href="https://angler-log.app/fr/privacy" />
    <xhtml:link rel="alternate" hreflang="de" href="https://angler-log.app/de/privacy" />
    <xhtml:link rel="alternate" hreflang="es" href="https://angler-log.app/es/privacy" />
    <xhtml:link rel="alternate" hreflang="it" href="https://angler-log.app/it/privacy" />
    <xhtml:link rel="alternate" hreflang="pt" href="https://angler-log.app/pt/privacy" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://angler-log.app/privacy" />
    <lastmod>2026-10-25</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://jp.angler-log.app/</loc>
    <lastmod>2026-10-24</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://en.angler-log.app/</loc>
    <lastmod>2026-10-24</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://fr.angler-log.app/</loc>
    <lastmod>2026-10-24</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://de.angler-log.app/</loc>
    <lastmod>2026-10-24</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://es.angler-log.app/</loc>
    <lastmod>2026-10-24</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://it.angler-log.app/</loc>
    <lastmod>2026-10-24</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://pt.angler-log.app/</loc>
    <lastmod>2026-10-24</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`;
    }
    return new Response(sitemapXml, {
      status: 200,
      headers: {
        "content-type": "application/xml; charset=utf-8",
        "cache-control": "public, max-age=86400, stale-while-revalidate=604800"
      }
    });
  }

  if (url.pathname === "/logo.png" || url.pathname === "/icon.png" || url.pathname === "/apple-touch-icon.png" || url.pathname === "/favicon.ico" || url.pathname === "/icon.svg") {
    const etag = '"anglerlog-icon-v1"';
    if (request.headers.get("if-none-match") === etag) {
      return new Response(null, {
        status: 304,
        headers: {
          "cache-control": "public, max-age=31536000, immutable",
          "etag": etag
        }
      });
    }
    return new Response(b64ToUint8Array(ICON_PNG_B64), {
      status: 200,
      headers: {
        "content-type": "image/png",
        "cache-control": "public, max-age=31536000, immutable",
        "etag": etag
      }
    });
  }

  // Language routing helper
  const langRoutes = [
    { path: "/en", lang: "en" },
    { path: "/fr", lang: "fr" },
    { path: "/de", lang: "de" },
    { path: "/es", lang: "es" },
    { path: "/it", lang: "it" },
    { path: "/pt", lang: "pt" }
  ];

  for (const lr of langRoutes) {
    if (url.pathname === lr.path || url.pathname === lr.path + "/" || url.pathname === lr.path + ".html") {
      const t = TRANSLATIONS[lr.lang];
      const html = htmlLayout({
        title: t.meta.title,
        desc: t.meta.desc,
        ogTitle: t.meta.ogTitle,
        ogDesc: t.meta.ogDesc,
        ogUrl: "https://angler-log.app" + lr.path,
        lang: lr.lang,
        isPrivacy: false,
        content: renderLandingContent(lr.lang)
      });
      return htmlResponse(html);
    }
  }

  const privacyRoutes = [
    { path: "/privacy", lang: "ja", aliases: ["/privacy/", "/privacy-policy", "/privacy.html", "/privacy/ja", "/ja/privacy"] },
    { path: "/en/privacy", lang: "en", aliases: ["/en/privacy/", "/privacy/en", "/en/privacy-policy", "/en/privacy.html"] },
    { path: "/fr/privacy", lang: "fr", aliases: ["/fr/privacy/", "/privacy/fr", "/fr/privacy-policy", "/fr/privacy.html"] },
    { path: "/de/privacy", lang: "de", aliases: ["/de/privacy/", "/privacy/de", "/de/privacy-policy", "/de/privacy.html"] },
    { path: "/es/privacy", lang: "es", aliases: ["/es/privacy/", "/privacy/es", "/es/privacy-policy", "/es/privacy.html"] },
    { path: "/it/privacy", lang: "it", aliases: ["/it/privacy/", "/privacy/it", "/it/privacy-policy", "/it/privacy.html"] },
    { path: "/pt/privacy", lang: "pt", aliases: ["/pt/privacy/", "/privacy/pt", "/pt/privacy-policy", "/pt/privacy.html"] }
  ];

  for (const pr of privacyRoutes) {
    if (url.pathname === pr.path || pr.aliases.includes(url.pathname)) {
      const pt = PRIVACY_TRANSLATIONS[pr.lang];
      const canonPath = pr.lang === "ja" ? "/privacy" : `/${pr.lang}/privacy`;
      const html = htmlLayout({
        title: pt.metaTitle,
        desc: pt.metaDesc,
        ogTitle: pt.metaTitle,
        ogDesc: pt.metaDesc,
        ogUrl: "https://angler-log.app" + canonPath,
        lang: pr.lang,
        isPrivacy: true,
        content: renderPrivacyContent(pr.lang)
      });
      return htmlResponse(html);
    }
  }

  // Default: Japanese landing page with multilingual detection
  const extraScript = `<script>
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
  } else if (userLang.startsWith('fr')) {
    banner.classList.remove('hidden');
    text.textContent = 'Langue française détectée :';
    link.textContent = 'Voir la page en français →';
    link.href = '/fr';
  } else if (userLang.startsWith('de')) {
    banner.classList.remove('hidden');
    text.textContent = 'Deutsche Sprache erkannt:';
    link.textContent = 'Zur deutschen Seite →';
    link.href = '/de';
  } else if (userLang.startsWith('es')) {
    banner.classList.remove('hidden');
    text.textContent = 'Idioma español detectado:';
    link.textContent = 'Ver página en español →';
    link.href = '/es';
  } else if (userLang.startsWith('it')) {
    banner.classList.remove('hidden');
    text.textContent = 'Lingua italiana rilevata:';
    link.textContent = 'Visualizza pagina in italiano →';
    link.href = '/it';
  } else if (userLang.startsWith('pt')) {
    banner.classList.remove('hidden');
    text.textContent = 'Língua portuguesa detetada:';
    link.textContent = 'Ver página em português →';
    link.href = '/pt';
  } else {
    banner.classList.remove('hidden');
    text.textContent = 'English language detected:';
    link.textContent = 'View English Page →';
    link.href = '/en';
  }
})();
</script>`;

  const tJa = TRANSLATIONS.ja;
  const html = htmlLayout({
    title: tJa.meta.title,
    desc: tJa.meta.desc,
    ogTitle: tJa.meta.ogTitle,
    ogDesc: tJa.meta.ogDesc,
    ogUrl: "https://angler-log.app/",
    lang: "ja",
    isPrivacy: false,
    content: renderLandingContent("ja"),
    extraScript
  });
  return htmlResponse(html);
}

export default {
  async fetch(request, env, ctx) {
    try {
      const url = new URL(request.url);
      const isGet = request.method === "GET";
      const isVideo = url.pathname.startsWith("/videos/");
      const cache = typeof caches !== "undefined" ? caches.default : null;

      if (isGet && !isVideo && cache) {
        const cachedRes = await cache.match(request);
        if (cachedRes) {
          return cachedRes;
        }
      }

      const response = await handleRequest(request, url);

      if (isGet && !isVideo && response && response.status === 200 && cache && ctx && ctx.waitUntil) {
        ctx.waitUntil(cache.put(request, response.clone()));
      }

      return response;
    } catch (err) {
      return new Response(err.stack || err.message || String(err), { status: 500 });
    }
  }
};
