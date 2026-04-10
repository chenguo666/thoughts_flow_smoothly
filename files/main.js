const dimensionMeta = {
    S1: { name: '道心坚定', model: '道心模型' },
    S2: { name: '自知之明', model: '道心模型' },
    S3: { name: '道途追求', model: '道心模型' },
    E1: { name: '羁绊信任', model: '情缘模型' },
    E2: { name: '情感投入', model: '情缘模型' },
    E3: { name: '独处修炼', model: '情缘模型' },
    A1: { name: '正邪观念', model: '心境模型' },
    A2: { name: '规矩变通', model: '心境模型' },
    A3: { name: '人生志向', model: '心境模型' },
    Ac1: { name: '行动动机', model: '修行模型' },
    Ac2: { name: '决策风格', model: '修行模型' },
    Ac3: { name: '执行方式', model: '修行模型' },
    So1: { name: '交友之道', model: '社交模型' },
    So2: { name: '人际距离', model: '社交模型' },
    So3: { name: '真实表达', model: '社交模型' }
};

const questions = [
    {
        id: 'q1', dim: 'S1',
        text: '修仙路上，资质平平，道途坎坷，同辈都已筑基成功，而你还在炼气期徘徊，宗门资源也向天才倾斜，你会怎么想？',
        options: [
            { label: '唉，我就是没天赋，这辈子就这样了...', value: 1 },
            { label: '也许我真的不太适合修仙...', value: 2 },
            { label: '资质算什么！道心坚定者，终将大成！', value: 3 }
        ]
    },
    {
        id: 'q2', dim: 'S1',
        text: '宗门大比，你被一位实力远不如你的人用阴谋诡计赢了，当众羞辱你，你会？',
        options: [
            { label: '我确实技不如人...', value: 1 },
            { label: '心里有些不服，但也不想争辩', value: 2 },
            { label: '今日之辱，他日必百倍奉还！', value: 3 }
        ]
    },
    {
        id: 'q3', dim: 'S2',
        text: '你很清楚自己适合走什么样的修仙道路',
        options: [
            { label: '不太清楚', value: 1 },
            { label: '有些迷茫', value: 2 },
            { label: '非常清楚', value: 3 }
        ]
    },
    {
        id: 'q4', dim: 'S2',
        text: '你内心有真正想要守护或追求的东西',
        options: [
            { label: '没有', value: 1 },
            { label: '也许有吧', value: 2 },
            { label: '当然有！', value: 3 }
        ]
    },
    {
        id: 'q5', dim: 'S3',
        text: '修仙就是要不断变强、追求更高的境界',
        options: [
            { label: '不认同', value: 1 },
            { label: '中立', value: 2 },
            { label: '认同', value: 3 }
        ]
    },
    {
        id: 'q6', dim: 'S3',
        text: '其他修士的议论和眼光对你来说无所谓',
        options: [
            { label: '很在意', value: 1 },
            { label: '有时在意', value: 2 },
            { label: '完全不在意', value: 3 }
        ]
    },
    {
        id: 'q7', dim: 'E1',
        text: '你的道侣闭关三个月，出关后说在闭关时有位异性修士经常来送丹药，你会怎么想？',
        options: [
            { label: '他们之间肯定有什么...', value: 1 },
            { label: '在信任和怀疑之间摇摆', value: 2 },
            { label: '道侣能得到帮助是好事', value: 3 }
        ]
    },
    {
        id: 'q8', dim: 'E1',
        text: '在感情里你经常担心被对方背叛或抛弃',
        options: [
            { label: '是的', value: 1 },
            { label: '偶尔', value: 2 },
            { label: '不是', value: 3 }
        ]
    },
    {
        id: 'q9', dim: 'E2',
        text: '你对每一段感情都是认真付出的',
        options: [
            { label: '并没有', value: 1 },
            { label: '也许吧', value: 2 },
            { label: '当然！（真诚脸）', value: 3 }
        ]
    },
    {
        id: 'q10', dim: 'E2',
        text: '你遇到了一位完美的道侣：容貌绝世、天赋异禀、温柔体贴、用情专一、对你死心塌地，此时你会？',
        options: [
            { label: '就算再完美也不会投入太深', value: 1 },
            { label: '介于A和C之间', value: 2 },
            { label: '会非常珍惜，也许会变成恋爱脑', value: 3 }
        ]
    },
    {
        id: 'q11', dim: 'E3',
        text: '你的道侣非常黏人，想天天跟你在一起修炼，你作何感想？',
        options: [
            { label: '那太好了！', value: 1 },
            { label: '都行无所谓', value: 2 },
            { label: '我更喜欢独自修炼', value: 3 }
        ]
    },
    {
        id: 'q12', dim: 'E3',
        text: '你在任何关系里都很重视个人修炼空间',
        options: [
            { label: '更喜欢黏在一起', value: 1 },
            { label: '看情况', value: 2 },
            { label: '是的！（斩钉截铁）', value: 3 }
        ]
    },
    {
        id: 'q13', dim: 'A1',
        text: '修仙界大多数修士还是心存善念的',
        options: [
            { label: '修仙界人心险恶，哪有什么善念', value: 1 },
            { label: '也许吧', value: 2 },
            { label: '是的，我愿相信好人更多', value: 3 }
        ]
    },
    {
        id: 'q14', dim: 'A1',
        text: '你走在修真坊市，一位可爱的小师妹蹦蹦跳跳地朝你走来，她递给你一枚疗伤丹药，此时你作何感想？',
        options: [
            { label: '呜呜她真好！居然给我丹药！', value: 3 },
            { label: '一脸懵逼，作挠头状', value: 2 },
            { label: '这也许是一种新型骗局？还是走开为好', value: 1 }
        ]
    },
    {
        id: 'q15', dim: 'A2',
        text: '宗门规定弟子必须参加每月一次的讲道大会，但今晚你约了一位前辈交流修炼心得，前辈机会难得，你怎么办？',
        options: [
            { label: '翘了！反正就一次！', value: 1 },
            { label: '干脆请假吧', value: 2 },
            { label: '前辈以后再约，讲道不能缺席', value: 3 }
        ]
    },
    {
        id: 'q16', dim: 'A2',
        text: '你喜欢打破常规，不喜欢被宗门规矩束缚',
        options: [
            { label: '认同', value: 1 },
            { label: '保持中立', value: 2 },
            { label: '不认同', value: 3 }
        ]
    },
    {
        id: 'q17', dim: 'A3',
        text: '你修炼通常有明确的目标',
        options: [
            { label: '不认同', value: 1 },
            { label: '中立', value: 2 },
            { label: '认同', value: 3 }
        ]
    },
    {
        id: 'q18', dim: 'A3',
        text: '突然某一天，你意识到修仙哪有什么意义，人不过是和蝼蚁一样被欲望支配着，饿了就吃，困了就睡，修为再高终有一死，我们简直和猪狗一样没什么区别',
        options: [
            { label: '是这样的', value: 1 },
            { label: '也许是，也许不是', value: 2 },
            { label: '这简直是胡扯', value: 3 }
        ]
    },
    {
        id: 'q19', dim: 'Ac1',
        text: '你做事主要为了取得突破和进步，而不是避免麻烦和风险',
        options: [
            { label: '不认同', value: 1 },
            { label: '中立', value: 2 },
            { label: '认同', value: 3 }
        ]
    },
    {
        id: 'q20', dim: 'Ac1',
        text: '你修炼遇到瓶颈，尝试了各种方法都无法突破（已长达三个月），此时你更像',
        options: [
            { label: '再坐三个月枯禅，说不定就突破了', value: 1 },
            { label: '用力拍打自己的脑袋并说："快开窍啊！"', value: 2 },
            { label: '去寻找机缘、请教前辈，快点突破才好', value: 3 }
        ]
    },
    {
        id: 'q21', dim: 'Ac2',
        text: '你做决定比较果断，不喜欢犹豫',
        options: [
            { label: '不认同', value: 1 },
            { label: '中立', value: 2 },
            { label: '认同', value: 3 }
        ]
    },
    {
        id: 'q22', dim: 'Ac2',
        text: '此题没有题目，请盲选',
        options: [
            { label: '反复思考后感觉应该选A？', value: 1 },
            { label: '啊，要不选B？', value: 2 },
            { label: '不会就选C？', value: 3 }
        ]
    },
    {
        id: 'q23', dim: 'Ac3',
        text: '别人说你"执行力强"，你内心更接近哪句？',
        options: [
            { label: '我被逼到最后确实执行力超强...', value: 1 },
            { label: '啊，有时候吧', value: 2 },
            { label: '是的，修炼本来就该被推进', value: 3 }
        ]
    },
    {
        id: 'q24', dim: 'Ac3',
        text: '你修炼常常有计划，____',
        options: [
            { label: '然而计划不如变化快', value: 1 },
            { label: '有时能完成，有时不能', value: 2 },
            { label: '我讨厌被打破计划', value: 3 }
        ]
    },
    {
        id: 'q25', dim: 'So1',
        text: '你因参加宗门大会结识了许多外门修士，并被邀请参加他们的线下聚会，你的想法是？',
        options: [
            { label: '网上聊聊就算了，真见面还是有点忐忑', value: 1 },
            { label: '见见面也挺好，反正谁来聊我就聊两句', value: 2 },
            { label: '我会好好准备并热情聊天，万一呢', value: 3 }
        ]
    },
    {
        id: 'q26', dim: 'So1',
        text: '朋友带了他的朋友一起来修炼，你最可能的状态是',
        options: [
            { label: '对"朋友的朋友"天然有点距离感', value: 1 },
            { label: '看对方，能聊就聊', value: 2 },
            { label: '朋友的朋友应该也算我的朋友！要热情聊天', value: 3 }
        ]
    },
    {
        id: 'q27', dim: 'So2',
        text: '你和人相处主打一个结界，靠太近会自动报警',
        options: [
            { label: '认同', value: 3 },
            { label: '中立', value: 2 },
            { label: '不认同', value: 1 }
        ]
    },
    {
        id: 'q28', dim: 'So2',
        text: '你渴望和信任的人关系密切，熟得像失散多年的道侣',
        options: [
            { label: '认同', value: 1 },
            { label: '中立', value: 2 },
            { label: '不认同', value: 3 }
        ]
    },
    {
        id: 'q29', dim: 'So3',
        text: '有时候你明明对一件事有不同的、负面的看法，但最后没说出来。多数情况下原因是：',
        options: [
            { label: '这种情况较少', value: 1 },
            { label: '可能碍于情面或者关系', value: 2 },
            { label: '不想让别人知道自己是个阴暗的人', value: 3 }
        ]
    },
    {
        id: 'q30', dim: 'So3',
        text: '你在不同人面前会表现出不一样的自己',
        options: [
            { label: '不认同', value: 1 },
            { label: '中立', value: 2 },
            { label: '认同', value: 3 }
        ]
    }
];

const specialQuestions = [
    {
        id: 'drink_gate_q1',
        special: true,
        kind: 'drink_gate',
        text: '你平时修炼之余有什么爱好？',
        options: [
            { label: '打坐炼丹', value: 1 },
            { label: '琴棋书画', value: 2 },
            { label: '饮酒作乐', value: 3 },
            { label: '锻炼身体', value: 4 }
        ]
    },
    {
        id: 'drink_gate_q2',
        special: true,
        kind: 'drink_trigger',
        text: '你对饮酒的态度是？',
        options: [
            { label: '小酌怡情，喝不了太多', value: 1 },
            { label: '我习惯将灵酒灌在葫芦里，当水喝，美酒令我信服', value: 2 }
        ]
    }
];

const TYPE_LIBRARY = {
    "XIANZUN": {
        "code": "XIANZUN",
        "cn": "仙尊",
        "intro": "天地不仁，以万物为刍狗。",
        "desc": "恭喜您，您测出了修仙界最为罕见的道骨——仙尊！您是天道法则的天然掌控者！修仙界所谓的强者，99.99%都是您的拙劣模仿者。仙尊道骨，是行走的人形天道意志，凡人眼中的\"规则\"，在您这里只是天地的基础参数设置；修士所谓的\"修炼计划\"，对您而言不过是心血来潮的随手涂鸦。拥有一个仙尊朋友意味着什么？意味着你的修仙导航系统会变得更加精准、高效。因为仙尊最会掌控了。仙尊会在你修仙列车即将脱轨的前一秒，用一个\"天道敕令\"帮你硬核存档，再用一套无法拒绝的逻辑把你强行拽回正轨。他们是你混乱修仙路上最后的备份盘，是天地崩塌前唯一还亮着的那个重启键。"
    },
    "DANSHENG": {
        "code": "DANSHENG",
        "cn": "丹圣",
        "intro": "你以为我炼丹是为了卖钱吗？",
        "desc": "恭喜您，您竟然测出了这个修仙界最稀有的道骨。您或将成为炼丹界的未解之谜——是的，丹圣不一定真的\"送丹\"，但可能永远在\"付出\"。付出时间、付出精力、付出耐心、付出一个个本该安宁的炼丹之夜。因此像一部老旧但坚固的丹炉，投进去的是别人的焦虑和麻烦，吐出来的是\"没事，有我\"的安心保证。您的人生就是一场盛大的、无人喝彩的单人炼丹秀。您竟用磐石般的可靠，承受了瀑布般的索取，偶尔夜深人静才会对着丹炉——可能是精神上的——发出一声叹息：我这该死的、无处安放的责任心啊。"
    },
    "SANREN": {
        "code": "SANREN",
        "cn": "散修",
        "intro": "等着我散修逆袭。",
        "desc": "恭喜！您并非普通散修，您是道家先贤老子失散多年的精神传人，因为散修的全称是 Sage's Natural Realist - 真人。散修道骨，是对当代修仙界功利主义陷阱和成功学PUA最彻底的蔑视。他们不是\"不求上进\"，而是早已看穿一切\"上进\"的尽头不过是更高级的牢笼。散修有着大智慧。当别人在追逐风口，被时代的巨浪拍得七荤八素时，散修早已在自己的精神洞府里晒着太阳，达到了\"人洞合一\"的至高境界。他们信奉的不是空话，是经过亿万次实践检验的物理法则与生物本能：一、躺着比站着舒服；二、饭点到了就得干饭。"
    },
    "ZONGZHU": {
        "code": "ZONGZHU",
        "cn": "宗主",
        "intro": "宗主之位给我，我来当。",
        "desc": "宗主是一个手里永远拿着宗主令的人。哪怕宗门已经危在旦夕，哪怕长老们在胡说八道，你都会面无表情地说一句：我来当。然后真的把宗门带向了兴盛。该道骨拥有独立的物理法则——永恒向上定律。宗主道骨看修仙界，就像玩通关了的玩家在看新手教程。效率是他们的信仰，秩序是他们的呼吸。他们不是\"自带领袖气场\"，他们本身就是人形的气场发生器，方圆五米内，空气都会自动变得严肃而高效。他们眼中的\"自我突破\"，约等于普通人眼中的\"自虐\"。今天掌握一门新功法，明天考下一个炼丹师证书，后天就计划统一修仙界。你说这太卷了，他会用一种看弱鸡的眼神看着你：不是我太狠，是你太松。"
    },
    "SHANREN": {
        "code": "SHANREN",
        "cn": "善人",
        "intro": "我感谢苍天！我感谢大地！",
        "desc": "恭喜您，您测出了修仙界最为罕见的道骨。您应当感谢我！感谢您在此刻拥有了生命的滋润！倘若您御剑途中遇到风暴？您也应当说一句：我感谢这次风暴，它让我有更多时间聆听这首美妙的仙乐，并欣赏窗外每一张因焦虑而扭曲的脸庞，让我更珍惜内心的平静。是的，善人拥有温润如玉的性格和海纳百川的胸怀。他们眼中的修仙界没有完全的坏人，只有\"尚未被感恩光芒照耀到的道友\"。拥有一个善人朋友，就像身边多了一个永不枯竭的灵气发射塔。TA甚至能帮你从墙角的霉斑里发现一幅天然的山水画。"
    },
    "JINSHEN": {
        "code": "JINSHEN",
        "cn": "谨慎",
        "intro": "不好！前方有危险！",
        "desc": "\"不好！\"并非恐惧的尖叫，而是一种顶级的智慧。当普通修士看到一个丹炉放在桌沿，谨慎看到的是一场由\"丹炉打翻-丹药损失-走火入魔-全宗疏散-经济损失-蝴蝶效应-世界末日\"构成的灾难史诗。于是，伴随着一声发自灵魂深处的 不好！，他们会以迅雷不及掩耳之势把丹炉挪到桌子正中央，然后再垫上一张防火垫。谨慎对\"安全\"有一种近乎偏执的尊重：你的就是你的，我的就是我的。所有意外和风险都已经在他的\"不好！\"声中，被扼杀在了萌芽状态。他们是秩序的守护神，是混乱修仙界里最后那批神经绷得很直的体面人。"
    },
    "XINGZHE": {
        "code": "XINGZHE",
        "cn": "行者",
        "intro": "走走走~出发咯",
        "desc": "经研究发现，行者道骨的大脑构造与常人有根本性不同。行者活在一个极致的\"所见即所得\"世界里，修仙信条简单粗暴到令人发指：只要我闭上眼睛，天就是黑的；只要我把灵石都花了，我就没有灵石了；只要我站在飞剑上，我现在就是剑修了。逻辑完美闭环，根本无法反驳。别人还在为\"先有鸡还是先有蛋\"而辩论，行者已经把鸡和蛋一起做成了一盘\"鸡生蛋，蛋生鸡之终极奥义盖浇饭\"。他们不是在\"解决问题\"，他们是在\"清除待办事项\"。对他们来说，修仙界只有两种状态：已完成，和即将被我完成。"
    },
    "TIANJIAO": {
        "code": "TIANJIAO",
        "cn": "天骄",
        "intro": "您就是天生的天骄！",
        "desc": "当您走进一个宗门，照明系统会自动将您识别为天生的天骄，并自觉调暗亮度，以避免能源浪费。当您微笑时，您就变成了微笑着的天骄，周围的空气湿度也会显著下降，因为水蒸气都凝结成了人眼中的爱心。无论是谁，都容易对您的存在产生一种超标的注意力。传说，如果有足够多的天骄聚集在一起开派对，其释放出的综合魅力能量足以暂时扭曲时空结构，让参加者产生\"时间变慢了\"的幸福错觉。他们不需要卖力表达，很多时候，单是存在本身就已经很像一篇华丽到过分的仙赋。"
    },
    "DUOQING": {
        "code": "DUOQING",
        "cn": "多情",
        "intro": "爱意太满，修仙界显得有点贫瘠。",
        "desc": "多情道骨像远古神话时代幸存至今的珍稀物种，其存在概率比你在丹炉里炼出作者胳膊的概率还低。您简直是这个钢铁森林修仙时代最后的、也是最不合时宜的吟游诗人。因为您的情感处理器不是二进制的，而是彩虹制的。一片落叶，在常人眼里只是\"秋天来了\"，在多情眼中，则是一场关于轮回、牺牲与无言之爱的十三幕悲喜剧。您内心世界像一座永不关门的仙门主题公园，一生都在寻找那个能看懂园区地图、并愿意陪你坐旋转飞剑直到宇宙尽头的灵魂道侣。"
    },
    "SHIZUN": {
        "code": "SHIZUN",
        "cn": "师尊",
        "intro": "或许...我可以叫你师尊吗....?",
        "desc": "恭喜您，您测出了修仙界最稀有的师尊道骨。是的，在混沌未开、时间尚无姓名之前，在第一颗星辰打出第一个嗝之前，就已经有了师尊。师尊道骨的底色是温柔，擅长感知情绪，具有超强共情力，知道什么时候该停下来，什么时候该对自己说一句\"算了\"。师尊像一个医仙，治愈了别人的不开心。只可惜，当师尊落泪时，TA给自己的药，剂量总是比给别人小一号。师尊对自己的温柔，常常打了折。"
    },
    "WEIREN": {
        "code": "WEIREN",
        "cn": "伪人",
        "intro": "已经，没有修士了。",
        "desc": "修真界紧急报告：项目编号 SCP-CN-████ \"伪人\"。在社交场合，伪人是八面玲珑的存在，因为他们切换人格面具比切换功法还快。上一秒还是推心置腹的好兄弟模式，下一秒掌门来了，瞬间切换成沉稳可靠好弟子模式，连脸上的光泽度和发型都会发生微调。你以为你交到了一个真心懂你的道友？醒醒。你只是幸运地遇到了一个善于伪装、高性能的仿生人罢了。夜深人静时，伪人把面具一层层摘下来，最后才发现，面具下空得很，正是这些面具构成了自己。"
    },
    "SUIBIAN": {
        "code": "SUIBIAN",
        "cn": "随便",
        "intro": "我说随便，是真的随便。",
        "desc": "让我们直面这个词的粗犷本质：随便。这已经不是一种道骨，而是一种统治哲学。当凡人面临\"中午吃米饭还是面条\"的世纪抉择时，大脑在激烈燃烧卡路里；而随便道骨，会用一种批阅奏章般的淡然，轻飘飘地吐出两个字：都行。这不是没主见，这是在告诉你：尔等凡俗的选择，于朕而言，皆为蝼蚁。为什么不争执？因为跟草履虫辩论宇宙的未来毫无意义。为什么不较真？因为帝王不会在意脚下的尘埃是往左飘还是往右飘。"
    },
    "YAOGUAI": {
        "code": "YAOGUAI",
        "cn": "妖怪",
        "intro": "人生是个副本，而我只是一只妖怪。",
        "desc": "朋友，你不是\"童心未泯\"，你压根就没进化。你的灵魂还停留在那个挂在树上荡秋千、看见桃子就两眼放光的快乐时代。当人类祖先决定从树上下来、学会直立行走、穿上道袍时，妖怪道骨的祖先在旁边的大树上看着他们，挠了挠屁股，嘴里发出一声不屑的\"吱\"。他们看透了一切：所谓的\"修仙文明\"，不过是一场最无聊、最不好玩的付费游戏。规则偶尔是可以打破的，天花板是用来倒挂的，会议室是用来表演后空翻的。妖怪本身就是一个从巨大脑洞里掉出来、忘了关门的奇思妙想。"
    },
    "XIAOCHOU": {
        "code": "XIAOCHOU",
        "cn": "小丑",
        "intro": "原来我们都是小丑。",
        "desc": "请注意，小丑道骨不是一个\"人\"，更像一个把笑话穿在身上的小丑。你打开一层，是个笑话；再打开一层，是个段子；你一层层打开，直到最后，你发现最里面……是空的，只剩下一点微弱的回声在说：哈，没想到吧。小丑是社交场合的气氛组组长兼唯一指定火力输出。有他们在，场子就不会冷。所有人前仰后合地笑着，而笑得最开心的，往往也是他们自己——用最大的笑声，盖住心碎的声音。"
    },
    "WOKAO": {
        "code": "WOKAO",
        "cn": "卧槽",
        "intro": "卧槽，我怎么是这个道骨？",
        "desc": "我们发现了一种神奇的生物——卧槽道骨。他们拥有两种完全独立的操作系统：一个叫\"表面系统\"，负责发出\"卧槽\"\"牛逼\"\"啊？\"等一系列大惊小怪的拟声词；另一个叫\"后台系统\"，负责冷静分析：嗯，果然不出我所料。卧槽道骨只会卧槽，不会多管闲事，因为他们深知，给傻逼讲道理，就像扶着烂泥上墙，不仅浪费体力，还弄自己一手屎。所以他们选择，握着一根智慧的大草，用一声饱含深情的\"卧槽！\"来为这个疯狂的修仙界献上最高敬意。"
    },
    "SIKAOZHE": {
        "code": "SIKAOZHE",
        "cn": "思考者",
        "intro": "已深度思考100息。",
        "desc": "经研究发现，思考者道骨的大脑构造与常人有根本性不同。正如名称所示，您的大脑长时间处于思考状态。您十分会审判信息，注重论点、论据、逻辑推理、潜在偏见，乃至\"作者本人三代以内思想背景调查报告\"的全套材料。在这个信息爆炸的修仙界，您绝不会轻易盲从，会在关系中衡量利弊，也十分捍卫自己的修炼空间。当别人看到您独处时在发呆？愚蠢，那不是发呆，那是您的大脑正在对今天接收到的所有信息进行分类、归档和销毁。"
    },
    "FENSHIZHE": {
        "code": "FENSHIZHE",
        "cn": "愤世者",
        "intro": "这个修仙界，真是一坨屎。",
        "desc": "恭喜您，愤世者道骨是宇宙中已知的唯一一种稀有道骨。所谓狗屎，并不是在抱怨，而是在进行一种神秘仪式。愤世者的行为模式是一场惊天动地的悖论戏剧。嘴上：这个宗门任务简直是屎。手上：默默打开玉简，开始建构函数模型和甘特图。嘴上：这帮同门都是 shit。手上：在同门搞砸之后，一边烦着，一边熬夜把烂摊子收拾得明明白白。嘴上：这个修仙界就是一坨 shit，赶紧毁灭吧。手上：第二天早上七点准时起床，挤上 shit 一样的飞剑，去干那份 shit 一样的工作。别怕，那不是世界末日的警报，那是他马上要开始拯救修仙界的冲锋号。"
    },
    "ZHUANGSIZHE": {
        "code": "ZHUANGSIZHE",
        "cn": "装死",
        "intro": "我没死，我只是在闭关。",
        "desc": "恭喜您，您测出了修仙界最稀有的装死道骨。群里99+条消息您可以视而不见，但当有人发出\"@全体成员 还有半个时辰就截止了\"的最后通牒时，您也许会像刚从千年古墓里苏醒一样，缓缓地敲出一个\"收到\"，然后在29分钟内，交出一份虽然及格的答卷。是的，直到\"死线\"这个唯一的、最高权限的指令出现，您就真正爆发了，不鸣则已，一鸣惊人。您向宇宙证明了一个真理：有时什么都不做，就不会做错。"
    },
    "PINQIONG": {
        "code": "PINQIONG",
        "cn": "清贫",
        "intro": "我穷，但我很专一。",
        "desc": "恭喜您，您测出了【清贫道骨】。这个\"清贫\"不是钱包余额的判决书，更像一种欲望断舍离后的资源再分配。别人把精力撒成漫天二维码，你把精力压成一束激光，照哪儿，哪儿就开始冒烟。清贫的世界很简单：不重要的东西一律降噪，重要的东西狠狠干到底。热闹、社交、虚荣、到处刷存在感？抱歉，没空。你不是资源少，你是把资源全部灌进了一个坑里，所以看起来像贫困，实际上像矿井。一旦某件事被你认定值得钻，外界再吵也只是背景杂音。"
    },
    "SENGREN": {
        "code": "SENGREN",
        "cn": "僧人",
        "intro": "没有那种世俗的欲望。",
        "desc": "当别人在坊市里参悟爱与恨的纠缠，僧人道骨选择在家中参悟一份大道。僧人已然看破红尘，不希望闲人来扰其清修、破其道行。僧人的个人空间，是他们的结界，是他们的须弥山，是他们的绝对领域，神圣不可侵犯。踏入者，会感受到一种来自灵魂深处的窒息感。僧人们不黏不缠，因为在他们的世界观里，万物皆有其独立轨道。行星与行星之间保持着亿万公里的距离，才构成和谐宇宙，人与人之间为什么不行？"
    },
    "SHAGUA": {
        "code": "SHAGUA",
        "cn": "傻者",
        "intro": "认真的么？我真的是傻逼么？",
        "desc": "恭喜您！您根本不在人类范畴内！您测出了百万年一遇的【傻者道骨】。傻者道骨的大脑里住着两个不死不休的究极战士：一个叫\"我他妈冲了！\"，另一个叫\"我是个傻逼！\"。当傻者面对一个有好感的人时，前者会说：冲啊！去要微信！去约饭！爱要大声说出来！后者接着说：人家凭什么看得上你？你去了就是自取其辱！最终结果：盯着对方背影直到消失，然后掏出玉简搜索\"如何克服社交恐惧症\"。傻者不是真的傻，只是您的内心戏，可能比整个修仙界的故事加起来都长。"
    },
    "GUER": {
        "code": "GUER",
        "cn": "孤儿",
        "intro": "我哭了，我怎么会是孤儿？",
        "desc": "恭喜您，您测出了修仙界最稀有的【孤儿道骨】。别急着哭，帝王的加冕仪式，通常都是一个人。孤儿的自我价值感偏低，因此有时主动疏远他人，孤儿们在自己的灵魂外围建起了一座名为\"莫挨老子\"的万里长城。每一块砖，都是过去的一道伤口。孤儿就像一只把所有软肋都藏起来，然后用最硬的刺对着修仙界的刺猬。那满身的尖刺不是攻击，那是一句句说不出口的\"别过来，我怕你也受伤\"和\"求求你，别离开\"。"
    },
    "CAOZHE": {
        "code": "CAOZHE",
        "cn": "草者",
        "intro": "操！这是什么道骨？",
        "desc": "恭喜您！您根本不在人类范畴内！您测出了百万年一遇的【草者道骨】。修仙文明城市里，出现了一株无法被任何除草剂杀死的、具有超级生命力的人形野草——那就是草者道骨。它的学名，就叫 草者。在草者的世界观里，世俗规则简直毫无意义，并且草者的情绪开关是物理拨片式的：草！ 和 滚！。草者追求的不只是当下快感，也在追求一种在体内横冲直撞的生命力。当所有人都被驯化成了温顺家禽，草者则是荒野上最后那一声狼嚎。"
    },
    "SIZHE": {
        "code": "SIZHE",
        "cn": "死者",
        "intro": "我，还活着吗？",
        "desc": "恭喜您，您测出了修仙界最为罕见的道骨，只是\"死者\"这个名字实在有点晦气，所以也可以叫：Don't Expect Any Drives。死者已经看透了那些无意义的哲学思考，因此显得对一切\"失去\"了兴趣。死者们看修仙界的眼神，就像一位顶级玩家通关了所有主线、支线、隐藏任务，删档重开了999次之后，终于发现：这游戏压根就没意思。死者是超越了欲望和目标的终极贤者。他们的存在，就是对这个喧嚣修仙界最沉默也最彻底的抗议。"
    },
    "FEIWU": {
        "code": "FEIWU",
        "cn": "废物",
        "intro": "我真的...是废物吗？",
        "desc": "恭喜您，您测出的不是一个普通道骨，您是一种极其珍稀的、仅占修仙界人口0.0001％的——【废物道骨】。废物们的自尊通常有些脆弱，缺乏安全感，偶尔也会缺乏主见，因此这种道骨能精确地感知到周围最强的那个 WiFi 信号——也就是他们心里最可靠的人。走进【废物】道骨的生活，就像走进了一个顶级兰花温室：需要精确控制温度、湿度，以及每天定时进行\"我爱你\"的言语光合作用。给废物一颗糖，他们会还你一个完全信任你、亮晶晶的眼神。你未必是废物，你只是太没防备，太容易认真。"
    },
    "SHALEZHE": {
        "code": "SHALEZHE",
        "cn": "傻乐",
        "intro": "哈哈哈哈哈哈。",
        "desc": "恭喜您！由于您的思维回路过于清奇，标准道骨库已全面崩溃。第一道骨匹配率只有60％以下时，系统才会为您强制匹配这个道骨——【傻乐道骨】。这个道骨有什么特质？哈哈哈哈哈哈哈哈哈哈哈哈！对不起，这就是全部的特质了。您可以查看十五维度进行不专业的评估，实在是抱歉！作者设置道骨时没有考虑全面，因此才会出现这样的状况。哈哈哈哈哈哈……笑着笑着，我便哭了出来。怎么会有人的脑回路这么新奇。"
    },
    "JIUGUI": {
        "code": "JIUGUI",
        "cn": "酒鬼",
        "intro": "灵酒烧喉，不得不醉。",
        "desc": "您为什么走路摇摇晃晃？您为什么总是情绪高涨？您为什么看东西是重影的？因为您体内流淌的不是血液，是美味的五粮液！是国窖1573！是江小白！是陕西西凤！哦，美味的灵酒，每一滴都在燃烧，都在沸腾。您是否已经习惯了将灵酒灌在葫芦里，当作白开水一饮而下？多么伟大的灵酒！它让您在饭桌上谈笑风生，在厕所里抱着马桶忏悔人生；它让您觉得自己是夜场诗人，是宇宙中心那团不灭的火，直到第二天上午十点，您的头像裂开的核桃，嘴角挂着食物残渣，灵魂缩在角落里。您终于明白，昨晚那个高谈阔论、拍桌怒吼的人，已经成为了一个酒鬼。"
    }
};

const TYPE_IMAGES = {};

let answers = {};
let currentScreen = 'intro';

function init() {
    renderQuestions();
    bindEvents();
}

function renderQuestions() {
    const container = document.getElementById('questionList');
    container.innerHTML = '';

    questions.forEach((q, idx) => {
        const div = document.createElement('div');
        div.className = 'question';
        div.innerHTML = `
            <div class="question-meta">
                <span class="badge">${dimensionMeta[q.dim].model}</span>
                <span>第 ${idx + 1} / ${questions.length}</span>
            </div>
            <div class="question-title">${q.text}</div>
            <div class="options">
                ${q.options.map((opt, oIdx) => `
                    <label class="option">
                        <input type="radio" name="${q.id}" value="${opt.value}" data-dim="${q.dim}">
                        <span class="option-code">${String.fromCharCode(65 + oIdx)}</span>
                        <span>${opt.label}</span>
                    </label>
                `).join('')}
            </div>
        `;
        container.appendChild(div);
    });

    document.getElementById('progressText').textContent = `0 / ${questions.length}`;
}

function bindEvents() {
    document.getElementById('startBtn').addEventListener('click', () => switchScreen('test'));
    document.getElementById('backIntroBtn').addEventListener('click', () => switchScreen('intro'));
    document.getElementById('submitBtn').addEventListener('click', calculateResult);
    document.getElementById('restartBtn').addEventListener('click', resetTest);
    document.getElementById('toTopBtn').addEventListener('click', () => switchScreen('intro'));

    document.getElementById('questionList').addEventListener('change', (e) => {
        if (e.target.type === 'radio') {
            const qid = e.target.name;
            const val = parseInt(e.target.value);
            const dim = e.target.dataset.dim;
            answers[qid] = { value: val, dim: dim };
            updateProgress();
        }
    });
}

function updateProgress() {
    const answered = Object.keys(answers).length;
    const total = questions.length;
    const percent = (answered / total) * 100;
    document.getElementById('progressBar').style.width = `${percent}%`;
    document.getElementById('progressText').textContent = `${answered} / ${total}`;
    document.getElementById('submitBtn').disabled = answered < total;
}

function switchScreen(screen) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screen).classList.add('active');
    currentScreen = screen;
}

function calculateResult() {
    const scores = {};
    Object.keys(dimensionMeta).forEach(d => scores[d] = 0);

    Object.values(answers).forEach(a => {
        scores[a.dim] += a.value;
    });

    const dimScores = {};
    Object.keys(scores).forEach(d => {
        const count = questions.filter(q => q.dim === d).length;
        dimScores[d] = Math.round((scores[d] / (count * 3)) * 100);
    });

    let bestMatch = null;
    let bestScore = 0;

    Object.keys(TYPE_LIBRARY).forEach(key => {
        const score = Math.random() * 40 + 60;
        if (score > bestScore) {
            bestScore = score;
            bestMatch = key;
        }
    });

    const type = TYPE_LIBRARY[bestMatch];
    renderResult(type, dimScores, bestScore);
    switchScreen('result');
}

function renderResult(type, dimScores, match) {
    document.getElementById('resultTypeName').textContent = type.cn;
    document.getElementById('resultTypeSub').textContent = type.intro;
    document.getElementById('resultDesc').textContent = type.desc;
    document.getElementById('matchBadge').textContent = `匹配度 ${Math.round(match)}%`;

    const dimList = document.getElementById('dimList');
    dimList.innerHTML = '';

    Object.keys(dimensionMeta).forEach(dim => {
        const meta = dimensionMeta[dim];
        const score = dimScores[dim];
        const div = document.createElement('div');
        div.className = 'dim-item';
        div.innerHTML = `
            <div class="dim-item-top">
                <span class="dim-item-name">${meta.name}</span>
                <span class="dim-item-score">${score}%</span>
            </div>
            <p>${getDimDesc(score)}</p>
        `;
        dimList.appendChild(div);
    });
}

function getDimDesc(score) {
    if (score >= 80) return '极高！此乃修仙奇才！';
    if (score >= 60) return '不错，有一定潜力';
    if (score >= 40) return '一般般，还需努力';
    return 'emmm...道阻且长';
}

function resetTest() {
    answers = {};
    renderQuestions();
    document.getElementById('progressBar').style.width = '0%';
    document.getElementById('submitBtn').disabled = true;
    switchScreen('intro');
}

document.addEventListener('DOMContentLoaded', init);
