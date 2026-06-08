import { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "the-beauty-of-overthinking-in-anime",
    title: "アニメにおける考えすぎの美しさ",
    excerpt: "内省、不安、そして人間の思考の複雑さを、アニメがどのように描いてきたのかを読む。",
    content: `アニメには、私たちを自分の思考の中へ静かに座らせる力があります。星を見上げる人物、後悔の輪から抜け出せない人物。そうした場面は、説明よりも深く心に残ります。

考えすぎ、不安、自己不信。それらはアニメの中でただ「現実的」に描かれるだけではありません。むしろ、むき出しの正直さで掘り下げられます。『NHKにようこそ！』『新世紀エヴァンゲリオン』『STEINS;GATE』のような作品は、楽しませるだけでなく、理解されたような感覚を残してくれます。

そこに美しさがあります。
私たちは現実から逃げるために観るのに、ときどきアニメは、その現実を美しく見つめ直させてくれるのです。`,
    category: "THOUGHTS",
    tags: ["内省", "哲学", "心理", "日常"],
    author: "Neuroblastism編集部",
    date: "2024年5月10日",
    readTime: "5分で読める",
    image: "/hero-image.png",
    featured: true,
  },
  {
    id: "2",
    slug: "serial-experiments-lain-digital-existential-crisis",
    title: "serial experiments lain: デジタルな実存危機",
    excerpt: "lainは単なるアニメではなく、アイデンティティ、存在、テクノロジーへの哲学的な潜行です。",
    content: `『serial experiments lain』の中心にあるのは、インターネット時代における自己の解体です。1998年に生まれた作品でありながら、Wiredが人間関係に与える影響を驚くほど鋭く予見していました。

岩倉玲音は、内気で機械が苦手な中学生から、偏在するデジタルな存在へと変わっていきます。その変化は、私たち自身が仮想空間へ沈んでいく姿にも重なります。意識がネットワークの中に広がるなら、身体はどこで終わり、本当の自分はどこから始まるのでしょうか。

それは冷たく、美しく、そして人間の輪郭を問い直す作品です。`,
    category: "ANALYSIS",
    tags: ["lain", "実存主義", "テクノロジー", "アイデンティティ"],
    author: "Neuroblastism編集部",
    date: "2024年5月6日",
    readTime: "7分で読める",
    image: "/images/lain.png",
    featured: true,
  },
  {
    id: "3",
    slug: "hells-paradise-a-beautiful-tragedy",
    title: "地獄楽 - 美しい悲劇",
    excerpt: "MAPPAによるダークなシリーズをレビューし、なぜ単なる少年漫画ではないのかを考える。",
    content: `『地獄楽』は、生と死、赦しを、鮮烈でグロテスクでありながら不思議な美しさをもって描きます。激しい戦闘と超自然的な恐怖の奥には、人間の脆さをめぐる切実な物語があります。

感情がないと語る処刑人・画眉丸は、妻のもとへ帰りたいという単純で美しい願いによって動かされています。神仙郷は、仏教的なイメージと悪夢のような怪物が混ざり合う場所であり、登場人物たちの心理的な防衛を剥ぎ取る炉でもあります。

強さと悲劇の意味を問い直す、ダークファンタジーの傑作です。`,
    category: "REVIEWS",
    tags: ["地獄楽", "レビュー", "悲劇", "MAPPA"],
    author: "Neuroblastism編集部",
    date: "2024年5月2日",
    readTime: "6分で読める",
    image: "/images/hells-paradise.png",
    featured: true,
  },
  {
    id: "4",
    slug: "why-we-love-tragic-characters",
    title: "なぜ私たちは悲劇的な人物に惹かれるのか",
    excerpt: "イタチからグリフィスまで。悲劇が忘れられない人物を生む理由。",
    content: `悲劇は、記憶に残る物語の核であり続けてきました。アニメにおいても、苦しみ、堕ち、あるいは究極の犠牲を払う人物たちは、特別な場所を占めています。

うちはイタチ、グリフィス、ルルーシュのような人物の悲劇に、なぜ私たちは惹かれるのでしょうか。彼らの葛藤は、愛、野心、裏切り、選択の重さといった人間性の最も生々しい部分を露出させるからです。

悲劇的な人物は、失敗の中にも息を呑むほどの美しさがあることを思い出させてくれます。`,
    category: "THOUGHTS",
    tags: ["悲劇", "人物分析", "哲学", "カタルシス"],
    author: "Neuroblastism編集部",
    date: "2024年4月28日",
    readTime: "4分で読める",
    image: "/images/about-sunset.png",
    featured: false,
  },
  {
    id: "5",
    slug: "neon-genesis-evangelion-more-than-just-mecha",
    title: "新世紀エヴァンゲリオン: メカを超えて",
    excerpt: "第3新東京市のパイロットたちが抱える心理的な壁と感情の傷を読み解く。",
    content: `『エヴァンゲリオン』は、巨大ロボットアクションの中に生々しい心理の症例を隠した作品として知られています。庵野秀明は、自身の苦悩をシンジ、アスカ、レイの内面へと注ぎ込みました。

エヴァは機械のスーツではなく、装甲に縛られた生体です。それは他者から身を守るための身体的、感情的な鎧でもあります。ヤマアラシのジレンマは中心的な比喩です。近づくほど傷つけ合うのに、孤独の中では生きられない。

世界を救うことよりも、存在する勇気を見つけることを描いたからこそ、この作品は今も古びません。`,
    category: "ANALYSIS",
    tags: ["エヴァンゲリオン", "心理", "鬱", "実存主義"],
    author: "Neuroblastism編集部",
    date: "2024年4月20日",
    readTime: "8分で読める",
    image: "/images/lain.png",
    featured: false,
  },
  {
    id: "6",
    slug: "attack-on-titan-freedom-and-consequence",
    title: "進撃の巨人: 自由とその代償",
    excerpt: "エレン・イェーガーの倫理的な下降と、完全な自由が要求する重い代償を考察する。",
    content: `『進撃の巨人』がサバイバルスリラーから複雑な地政学的悲劇へ変化していく構造は、現代フィクションでも稀な到達点です。その中心には、自由への執着によって取り返しのつかない行為へ進むエレン・イェーガーがいます。

エレンの自由は絶対的で、幼く、最終的には破壊的です。作品は冷たい問いを投げかけます。自由を得るために世界から自由を奪うなら、それは本当に自由と呼べるのでしょうか。

幾層にも重なる対立と悲劇的な結末を通して、この作品は憎しみの連鎖と選択の重さを直視させます。`,
    category: "REVIEWS",
    tags: ["進撃の巨人", "自由", "倫理", "物語"],
    author: "Neuroblastism編集部",
    date: "2024年4月10日",
    readTime: "9分で読める",
    image: "/images/hells-paradise.png",
    featured: false,
  },
];
