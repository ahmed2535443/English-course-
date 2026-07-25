export const LESSONS = [
  {
    id: 1,
    t: "إجراءات المطار والوحات",
    i: "🎫",
    w: 6,
    n: 8,
    dlg: [
      { s: "Officer", c: "#171717", e: "Boarding pass, please.", a: "بطاقة الصعود إلى الطائرة، من فضلك." },
      { s: "Passenger", c: "#0070f3", e: "Certainly, here it is.", a: "بكل تأكيد، تفضل." },
      { s: "Officer", c: "#171717", e: "Go straight ahead and then take a left.", a: "اذهب مباشرة إلى الأمام ثم اتجه يساراً." },
      { s: "Passenger", c: "#0070f3", e: "Okay, thank you.", a: "حسناً، شكراً لك." },
      { s: "Officer", c: "#171717", e: "Enjoy your flight!", a: "استمتع برحلتك!" }
    ],
    voc: [
      { e: "Boarding pass", a: "بطاقة الصعود", d: "كلمة Boarding من الفعل board = يصعد. pass هنا بمعنى تصريح.", cl: ["Show your boarding pass", "Here is my boarding pass"], ms: [{ w: "boarding card", c: "boarding pass", n: "card خطأ شائع" }], us: [{ t: "في المطار", e: "May I see your boarding pass, please?", a: "ممكن أشوف بطاقة الصعود، من فضلك؟" }, { t: "عند البوردينق", e: "You need to show your boarding pass at the gate.", a: "لازم تورّي بطاقة الصعود عند البوابة." }] },
      { e: "Certainly", a: "بكل تأكيد", d: "بديل رسمى لـ Of course.", cl: ["Certainly, sir", "Certainly, here it is"], ms: [{ w: "sure thing", c: "certainly", n: "sure thing عامية" }], us: [{ t: "في الرد", e: "Can I see your passport? — Certainly!", a: "ممكن أشوف جوازك؟ — بكل تأكيد!" }, { t: "عند التسليم", e: "Certainly, here are my documents.", a: "بكل تأكيد، تفضل بمستنداتي." }] },
      { e: "Here it is", a: "تفضل", d: "تستخدم عند تسليم شيء باليد.", cl: ["Here you go", "Here it is", "Here are my docs"], ms: [{ w: "here it has", c: "here it is", n: "خطأ شائع" }], us: [{ t: "عند التسليم", e: "Here it is, your boarding pass.", a: "تفضل، بطاقة الصعود بتاعتك." }, { t: "عند الإعطاء", e: "Here it is. Thank you very much.", a: "تفضل. شكراً ليك جداً." }] },
      { e: "Go straight ahead", a: "امشي طوالي", d: "صيغة أمر. لا نستخدم to مع straight.", cl: ["Go straight ahead", "Keep going straight"], ms: [{ w: "go to straight", c: "go straight", n: "لا نستخدم to" }], us: [{ t: "الإرشاد", e: "Go straight ahead and you'll find the gate.", a: "امشي طوالي وهتلاقي البوابة." }, { t: "في المطار", e: "Go straight ahead for two blocks.", a: "امشي طوالي مبنيين." }] },
      { e: "Take a left", a: "اتجه يساراً", d: "نستخدم article a مع الاتجاهات.", cl: ["Take a left", "Take a right", "Turn left"], ms: [{ w: "take left", c: "take a left", n: "نحتاج a" }], us: [{ t: "الإرشاد", e: "Take a left at the next corner.", a: "اتجه يسار عند الزاوية الجاية." }, { t: "في المطار", e: "Take a left and you'll see the bathroom.", a: "اتجه يسار وهتلاقي الحمام." }] },
      { e: "Enjoy your flight", a: "استمتع برحلتك", d: "flight = رحلة جوية، journey = رحلة عامة.", cl: ["Enjoy your meal", "Enjoy your stay"], ms: [{ w: "enjoy your journey", c: "enjoy your flight", n: "في المطار نقول flight" }], us: [{ t: "في المطار", e: "Enjoy your flight to London!", a: "استمتع برحلتك لندن!" }, { t: "عند الوداع", e: "Thank you. Enjoy your flight!", a: "شكراً. استمتع برحلتك!" }] }
    ],
    gram: [
      { t: "صيغة الأمر (Imperative)", d: "نبدأ الفعل مباشرة بدون فاعل.", r: "الفعل + المفعول به", ex: [{ e: "Go straight ahead", a: "امشي طوالي" }, { e: "Take a left", a: "اتجه يساراً" }, { e: "Open your bag", a: "افتح حقيبتك" }], tp: "نضيف please للوقار" },
      { t: "صيغ التمني", d: "نستخدم Enjoy + المفعول به.", ex: [{ e: "Enjoy your flight!", a: "استمتع برحلتك!" }], tp: "flight = جوية، journey = عامة" },
      { t: "صيغ التسليم", d: "Here is للمفرد، Here are للجمع.", ex: [{ e: "Here it is.", a: "تفضل." }, { e: "Here are my documents.", a: "تفضل بمستنداتي." }], tp: "Here you go = بديل عامي" }
    ],
    pron: [
      { w: "Boarding", t: "تنطق بالواو: بوردنغ" },
      { w: "Certainly", t: "حرف T صامت: سيرتنلي" },
      { w: "Here it is", t: "تنطق: هيـريتِز" }
    ],
    cul: [
      { n: "في أمريكا، الموظف يسألك: Window or aisle?" },
      { n: "Guidebook كلمة واحدة في أمريكا، كلمتين في بريطانيا" }
    ],
    ex: [
      { tp: "mcq", q: "ماذا تقول عند تسليم جواز سفرك؟", a: "تفضل", o: ["Here it is", "Go straight", "Take a left", "Enjoy it"], c: 0 },
      { tp: "mcq", q: "ما معناى Go straight ahead؟", a: "", o: ["اتجه يميناً", "امشي طوالي", "ارجع للخلف", "افتح الباب"], c: 1 },
      { tp: "fill", q: "________ pass, please.", a: "بطاقة الصعود", an: "Boarding" },
      { tp: "reorder", q: "رتّب الجملة", a: "اذهب مباشرة إلى الأمام", w: ["go", "straight", "ahead"] },
      { tp: "match", q: "طابق الكلمة بالمعنى", p: [["Boarding pass", "بطاقة الصعود"], ["Certainly", "بكل تأكيد"], ["Take a left", "اتجه يساراً"], ["Enjoy", "استمتع"]] },
      { tp: "mcq", q: "ماذا يقول الموظف في النهاية؟", a: "رحلة سعيدة", o: ["Go straight ahead", "Here it is", "Enjoy your flight", "Take a left"], c: 2 },
      { tp: "fill", q: "Enjoy ________ flight!", a: "استمتع برحلتك!", an: "your" },
      { tp: "translate", q: "ترجم: بطاقة الصعود من فضلك", a: "", an: "boarding pass please" },
      { tp: "listen", q: "استمع واختر الترجمة", en: "Certainly, here it is.", o: ["بكل تأكيد، تفضل", "امشي طوالي", "رحلة سعيدة", "اتجه يساراً"], c: 0 },
      { tp: "mcq", q: "ما الفرق بين flight و journey؟", a: "", o: ["flight = جوية، journey = عامة", "كلاهما نفس المعنى", "flight = بحرية", "journey = جوية"], c: 0 },
      { tp: "egpt", q: "ازاي تقول 'بطاقة الصعود من فضلك' بالإنجليزي؟", hint: "فكر في الكلمتين: Boarding + pass", an: "boarding pass please", ph: "اكتب الإنجليزي..." },
      { tp: "usage", q: "اكتب جملة باستخدام كلمة boarding pass", w: "boarding pass" }
    ]
  },
  {
    id: 2,
    t: "صالة الوصول والرحلة",
    i: "🧳",
    w: 6,
    n: 8,
    dlg: [
      { s: "Thomas", c: "#0070f3", e: "Hey, Daniel!", a: "أهلاً يا دانيل!" },
      { s: "Daniel", c: "#7928ca", e: "Thomas! How are you doing?", a: "توماس! كيف حالك؟" },
      { s: "Thomas", c: "#0070f3", e: "I'm doing great. You look great. How was your flight over?", a: "أنا بخير جداً. تبدو ممتازاً. كيف كانت رحلتك إلى هنا؟" },
      { s: "Daniel", c: "#7928ca", e: "It was quite a long flight.", a: "كانت رحلة طويلة جداً." },
      { s: "Thomas", c: "#0070f3", e: "How many hours did it take?", a: "كم ساعة استغرقت؟" },
      { s: "Daniel", c: "#7928ca", e: "It took 12 hours.", a: "استغرقت 12 ساعة." },
      { s: "Thomas", c: "#0070f3", e: "Did you have to stop anywhere on the way?", a: "هل اضطررت للتوقف في الطريق؟" },
      { s: "Daniel", c: "#7928ca", e: "No, it was a direct flight.", a: "لا، كانت رحلة مباشرة." },
      { s: "Thomas", c: "#0070f3", e: "Is there going to be a lot of traffic?", a: "هل سيكون هناك زحام؟" },
      { s: "Daniel", c: "#7928ca", e: "No, the traffic should be light.", a: "لا، المرور خفيف من المفترض." }
    ],
    voc: [
      { e: "How are you doing?", a: "كيف حالك؟", d: "بديل لـ How are you. الرد: I'm doing great.", cl: ["How are you doing?", "I'm doing great"], ms: [{ w: "How you doing?", c: "How are you doing?", n: "نحتاج are" }], us: [{ t: "في السؤال", e: "Hey! How are you doing?", a: "أهلاً! إزيك؟" }, { t: "في الرد", e: "I'm doing great, thanks!", a: "أنا كويس جداً، شكراً!" }] },
      { e: "Quite", a: "جداً", d: "لا تخلط مع Quiet (هادئ).", cl: ["Quite a lot", "Quite big"], ms: [{ w: "quiet", c: "quite", n: "Quiet = هادئ" }], us: [{ t: "في الوصف", e: "The flight was quite long.", a: "الرحلة كانت طويلة جداً." }, { t: "في المقارنة", e: "London is quite expensive.", a: "لندن غالية جداً." }] },
      { e: "Took", a: "استغرق", d: "ماضي take. It took + وقت.", cl: ["It took 2 hours", "How long did it take?"], ms: [{ w: "taked", c: "took", n: "take ماضيها irregular" }], us: [{ t: "في الوقت", e: "It took me 3 hours to get here.", a: "استغرقت 3 ساعات أجي هنا." }, { t: "في السؤال", e: "How long did it take?", a: "كم استغرق؟" }] },
      { e: "Direct flight", a: "رحلة مباشرة", d: "رحلة بدون توقف. عكسها: Layover.", cl: ["Is this a direct flight?"], ms: [{ w: "straight flight", c: "direct flight", n: "straight خطأ" }], us: [{ t: "في السؤال", e: "Is this a direct flight or a connecting one?", a: "دي رحلة مباشرة ولا متصلة؟" }, { t: "في التوضيح", e: "I prefer direct flights.", a: "أفضل الرحلات المباشرة." }] },
      { e: "Traffic", a: "حركة المرور", d: "الزحام المروري. Heavy traffic = زحام شديد.", cl: ["Heavy traffic", "Traffic jam"], ms: [{ w: "traffic is big", c: "traffic is heavy", n: "نستخدم heavy" }], us: [{ t: "في الوصف", e: "The traffic is terrible today.", a: "المرور وحش النهاردة." }, { t: "في السؤال", e: "Is there a lot of traffic?", a: "في زحام كتير؟" }] },
      { e: "Light", a: "خفيف", d: "في سياق المرور = غير مزدحم.", cl: ["Traffic should be light"], ms: [{ w: "traffic is small", c: "traffic is light", n: "نستخدم light" }], us: [{ t: "في التوقع", e: "Traffic should be light at this hour.", a: "المرور المفروض خفيف الساعة دي." }, { t: "في الوصف", e: "The traffic is light now.", a: "المرور خفيف دلوقتي." }] }
    ],
    gram: [
      { t: "How was your flight over?", d: "إضافة over تعني إلى هنا.", ex: [{ e: "How was your flight over?", a: "كيف رحلتك إلى هنا؟" }], tp: "over تحدد اتجاه الوصول" },
      { t: "It took + وقت", d: "الماضي البسيط للحدث المنتهي.", ex: [{ e: "It took 12 hours", a: "استغرقت 12 ساعة" }], tp: "take في الماضي = took" },
      { t: "Going to للمستقبل", d: "للتوقعات والأحداث القادمة.", ex: [{ e: "Is there going to be traffic?", a: "هل سيكون زحام؟" }], tp: "will أقصر، going to للتخطيط" },
      { t: "Should be للتوقع", d: "من المفترض أن (ليس النصيحة).", ex: [{ e: "The traffic should be light", a: "المرور من المفترض خفيف" }], tp: "should هنا = توقع لا نصيحة" }
    ],
    pron: [
      { w: "Quite", t: "لا تخلط بين Quite (جداً) و Quiet (هادئ)" },
      { w: "Traffic", t: "تنطق ترافيك بالفاء" }
    ],
    cul: [
      { n: "Daniel يختصر إلى Dan أو Danny" },
      { n: "Thomas يختصر إلى Tom أو Tommy" }
    ],
    ex: [
      { tp: "mcq", q: "كيف تسأل عن حالة صديقك؟", a: "كيف حالك؟", o: ["How are you doing?", "Where are you?", "What are you doing?", "When are you going?"], c: 0 },
      { tp: "mcq", q: "ماذا تعني Quite في سياق Quite long؟", a: "", o: ["هادئ", "جداً", "قليلاً", "بطيء"], c: 1 },
      { tp: "fill", q: "It ________ 12 hours.", a: "استغرقت 12 ساعة", an: "took" },
      { tp: "reorder", q: "رتّب", a: "كانت رحلة مباشرة", w: ["it", "was", "a", "direct", "flight"] },
      { tp: "match", q: "طابق", p: [["Direct flight", "رحلة مباشرة"], ["Traffic", "حركة المرور"], ["Light", "خفيف"], ["Took", "استغرق"]] },
      { tp: "mcq", q: "ماذا تعني should في traffic should be light؟", a: "", o: ["ينبغي", "من المفترض أن", "يجب أن", "سيكون"], c: 1 },
      { tp: "fill", q: "How was your flight ________?", a: "كيف كانت رحلتك إلى هنا؟", an: "over" },
      { tp: "listen", q: "استمع واختر المعنى", en: "It was quite a long flight.", o: ["رحلة قصيرة", "رحلة طويلة جداً", "رحلة مباشرة", "رحلة صعبة"], c: 1 },
      { tp: "mcq", q: "ما اختصار اسم Daniel؟", a: "", o: ["Dan / Danny", "Dave", "Dann", "Dee"], c: 0 },
      { tp: "translate", q: "ترجم: المرور خفيف", a: "", an: "the traffic is light" },
      { tp: "egpt", q: "ازاي تسأل صاحبك 'ازيك' بالإنجليزي؟", hint: "فيه 4 كلمات: How + are + you + doing", an: "how are you doing", ph: "اكتب الإنجليزي..." },
      { tp: "usage", q: "اكتب جملة باستخدام كلمة traffic", w: "traffic" }
    ]
  },
  {
    id: 3,
    t: "التسوق والملابس في لندن",
    i: "🛍️",
    w: 6,
    n: 8,
    dlg: [
      { s: "A", c: "#ff9100", e: "Do you need to buy anything today?", a: "هل تحتاج لشراء أي شيء اليوم؟" },
      { s: "B", c: "#00c853", e: "Yes, I need to buy some clothes.", a: "نعم، أحتاج لشراء بعض الملابس." },
      { s: "A", c: "#ff9100", e: "What kind of clothes do you want to buy?", a: "ما نوع الملابس؟" },
      { s: "B", c: "#00c853", e: "I need to get some shirts, trousers, and a warm jacket.", a: "أحتاج قمصاناً وسراويل وجاكيت دافئ." },
      { s: "A", c: "#ff9100", e: "Is there anything else you want to buy?", a: "هل هناك شيء آخر؟" },
      { s: "B", c: "#00c853", e: "Oh yes. I need to buy a guidebook about London.", a: "أوه نعم. أحتاج كتاب إرشادي عن لندن." },
      { s: "A", c: "#ff9100", e: "Can we go somewhere a little bit cheaper?", a: "هل يمكننا الذهاب إلى مكان أرخص؟" }
    ],
    voc: [
      { e: "Clothes", a: "ملابس", d: "تنطق Close. كلمة جمع دائماً.", cl: ["Buy clothes", "A piece of clothes"], ms: [{ w: "a cloth", c: "a piece of clothes", n: "clothes جمع دائماً" }], us: [{ t: "في التسوق", e: "I need to buy some new clothes.", a: "محتاج أشتري هدوم جديدة." }, { t: "في الوصف", e: "These clothes are very nice.", a: "الهدوم دي حلوة جداً." }] },
      { e: "Guidebook", a: "كتاب دليل", d: "كلمة واحدة في أمريكا.", cl: ["Buy a guidebook", "Read a guidebook"], ms: [{ w: "guide book", c: "guidebook", n: "في أمريكا كلمة واحدة" }], us: [{ t: "في الشراء", e: "I want to buy a guidebook about London.", a: "عايز أشتري كتاب دليل عن لندن." }, { t: "في القراءة", e: "The guidebook has a lot of useful information.", a: "كتاب الدليل فيه معلومات كتير مفيدة." }] },
      { e: "Cheaper", a: "أرخص", d: "مقارنة من cheap.", cl: ["A little bit cheaper", "Much cheaper"], ms: [{ w: "more cheap", c: "cheaper", n: "مقارنة الأسماء القصيرة" }], us: [{ t: "في المقارنة", e: "This one is cheaper than that one.", a: "ده أرخص من ده." }, { t: "في التسوق", e: "Can we find something cheaper?", a: "ممكن نلاقي حاجة أرخص؟" }] },
      { e: "A little bit", a: "قليلاً", d: "تخفيف المقارنة.", cl: ["A little bit cheaper"], ms: [{ w: "a bit of", c: "a little bit", n: "في المقارنة نقول a little bit" }], us: [{ t: "في التخفيف", e: "It's a little bit cold outside.", a: "الجو بارد قليلاً بره." }, { t: "في التسوق", e: "This is a little bit expensive.", a: "ده غالي قليلاً." }] },
      { e: "Trousers", a: "سراويل", d: "كلمة جمع دائماً.", cl: ["A pair of trousers"], ms: [{ w: "a trouser", c: "a pair of trousers", n: "جمع دائماً" }], us: [{ t: "في الشراء", e: "I need a new pair of trousers.", a: "محتاج بنطلون جديد." }, { t: "في الوصف", e: "These trousers are very comfortable.", a: "البنطلون ده مريح جداً." }] },
      { e: "Anything else", a: "شيء آخر", d: "في الأسئلة. Something else في الإثبات.", cl: ["Anything else?", "Nothing else"], ms: [{ w: "anything other", c: "anything else", n: "نستخدم else" }], us: [{ t: "في السؤال", e: "Do you need anything else?", a: "محتاج حاجة تانية؟" }, { t: "في الرد", e: "No, nothing else. Thank you.", a: "لا، مفيش حاجة تانية. شكراً." }] }
    ],
    gram: [
      { t: "Clothes تنطق Close", d: "الكلمة جمع دائماً.", ex: [{ e: "I need to buy some clothes", a: "أحتاج لشراء بعض الملابس" }], tp: "لا نقول a clothes" },
      { t: "مقارنة الصفات", d: "cheap → cheaper → cheapest.", ex: [{ e: "A little bit cheaper", a: "أرخص قليلاً" }], tp: "a little bit تخفف المقارنة" },
      { t: "Anything vs Something", d: "Anything في الأسئلة، Something في الإثبات.", ex: [{ e: "Anything else?", a: "شيء آخر؟" }], tp: "لا تستخدم anything في الإثبات" }
    ],
    pron: [
      { w: "Clothes", t: "تنطق كـ Close بدون مقطع إضافي" },
      { w: "Especially", t: "تنطق Ex-pecially بالعامية" }
    ],
    cul: [
      { n: "Kensington High Street مكان غالي في لندن" },
      { n: "Guidebook كلمة واحدة في أمريكا، كلمتين في بريطانيا" }
    ],
    ex: [
      { tp: "mcq", q: "كيف تنطق كلمة clothes؟", a: "", o: ["كلوذز", "كلوتس", "كلوز", "كلوثس"], c: 2 },
      { tp: "fill", q: "I need to buy a ________ about London.", a: "كتاب إرشادي", an: "guidebook" },
      { tp: "mcq", q: "كيف تسأل عن شيء آخر؟", a: "", o: ["Is there anything else?", "What else you need?", "Do you want more?", "Anything more?"], c: 0 },
      { tp: "reorder", q: "رتّب", a: "أحتاج لشراء بعض الملابس", w: ["I", "need", "to", "buy", "some", "clothes"] },
      { tp: "match", q: "طابق", p: [["Cheaper", "أرخص"], ["Trousers", "سراويل"], ["Guidebook", "كتاب دليل"], ["Anything else", "شيء آخر"]] },
      { tp: "fill", q: "Can we go somewhere a ________ bit cheaper?", a: "مكان أرخص قليلاً", an: "little" },
      { tp: "mcq", q: "ما كلمة المقارنة من cheap؟", a: "", o: ["cheaper", "cheapest", "more cheap", "cheaply"], c: 0 },
      { tp: "listen", q: "استمع واختر الإجابة", en: "I need to buy a guidebook about London.", o: ["شراء قميص", "شراء كتاب عن لندن", "شراء سراويل", "شراء جاكيت"], c: 1 },
      { tp: "translate", q: "ترجم: أحتاج لشراء بعض الملابس", a: "", an: "I need to buy some clothes" },
      { tp: "mcq", q: "كم وحدة في a piece of clothes؟", a: "", o: ["واحدة", "اثنتان", "ثلاثة", "مجموعة"], c: 0 },
      { tp: "egpt", q: "ازاي تقول 'محتاج أشتري هدوم' بالإنجليزي؟", hint: "فكر في: I need to buy + some clothes", an: "i need to buy some clothes", ph: "اكتب الإنجليزي..." },
      { tp: "usage", q: "اكتب جملة باستخدام كلمة guidebook", w: "guidebook" }
    ]
  },
  {
    id: 4,
    t: "الطقس والسفر لتايلاند",
    i: "🌦️",
    w: 6,
    n: 8,
    dlg: [
      { s: "A", c: "#ff9100", e: "Are you enjoying your trip?", a: "هل أنت مستمتع برحلتك؟" },
      { s: "B", c: "#00c853", e: "Yes, I am enjoying my trip.", a: "نعم، أنا مستمتع برحلتي." },
      { s: "A", c: "#ff9100", e: "Have you finished reading your guidebook yet?", a: "هل أنهيت قراءة كتاب الإرشادات؟" },
      { s: "B", c: "#00c853", e: "Yes, I finished reading it.", a: "نعم، أنهيته." },
      { s: "A", c: "#ff9100", e: "Is it always cold in London?", a: "هل الجو بارد دائماً في لندن؟" },
      { s: "B", c: "#00c853", e: "Yes, it is cold, especially in the winter.", a: "نعم، بارد، خاصة في الشتاء." },
      { s: "A", c: "#ff9100", e: "Do you think I would like the weather in Thailand?", a: "هل تظن أن طقس تايلاند سيعجبني؟" },
      { s: "B", c: "#00c853", e: "Yes, I think you would like it a lot.", a: "نعم، أعتقد أنه سيعجبك كثيراً." }
    ],
    voc: [
      { e: "Enjoying", a: "مستمتع", d: "مضارع مستمر. للحدث الحالي.", cl: ["Are you enjoying?"], ms: [{ w: "Do you enjoy?", c: "Are you enjoying?", n: "للحدث الحالي نستخدم المستمر" }], us: [{ t: "في السؤال", e: "Are you enjoying your trip?", a: "إنت مستمتع برحلتك؟" }, { t: "في الرد", e: "Yes, I'm really enjoying it!", a: "أيوه، أنا مستمتع بيها فعلاً!" }] },
      { e: "Finished", a: "أنهى", d: "ماضي finish. Have you finished...yet?", cl: ["Have you finished?"], ms: [{ w: "Did you finish yet?", c: "Have you finished yet?", n: "نستخدم المضارع التام مع yet" }], us: [{ t: "في السؤال", e: "Have you finished reading the book?", a: "خلّصت قراءة الكتاب؟" }, { t: "في الرد", e: "Yes, I finished it yesterday.", a: "أيوه، خلّصته إمبارح." }] },
      { e: "Especially", a: "خصوصاً", d: "تنطق Ex-pecially في العامية.", cl: ["Especially in winter"], ms: [{ w: "specially", c: "especially", n: "specially ≠ especially" }], us: [{ t: "في التأكيد", e: "I love London, especially in summer.", a: "بحب لندن، خصوصاً في الصيف." }, { t: "في التوضيح", e: "It's cold, especially at night.", a: "الجو بارد، خصوصاً بالليل." }] },
      { e: "Weather", a: "الطقس", d: "لا تخلط مع Whether (إذا).", cl: ["The weather is cold"], ms: [{ w: "whether", c: "weather", n: "whether = إذا، weather = طقس" }], us: [{ t: "في السؤال", e: "How's the weather in London?", a: "إيه حالة الطقس في لندن؟" }, { t: "في الوصف", e: "The weather is beautiful today.", a: "الطقس جميل النهاردة." }] },
      { e: "Cold", a: "بارد", d: "تدرج: Cold → Cool → Warm → Hot.", cl: ["It's cold outside"], ms: [{ w: "The weather is cold", c: "It is cold", n: "نستخدم it مع الطقس" }], us: [{ t: "في الطقس", e: "It's very cold in winter.", a: "الجو بارد جداً في الشتاء." }, { t: "في الإحساس", e: "I'm cold. Can you close the window?", a: "انا بردان. ممكن تقفل الشباك؟" }] },
      { e: "Warm", a: "دافئ", d: "بين Cool و Hot.", cl: ["Warm weather"], ms: [{ w: "hot weather", c: "warm weather", n: "warm ≠ hot" }], us: [{ t: "في الطقس", e: "The weather is warm in summer.", a: "الطقس دافئ في الصيف." }, { t: "في الإحساس", e: "I feel warm today.", a: "حاسس إنه دافئ النهاردة." }] }
    ],
    gram: [
      { t: "المضارع المستمر", d: "Are you enjoying? للحدث الحالي.", ex: [{ e: "Are you enjoying your trip?", a: "هل أنت مستمتع برحلتك؟" }], tp: "للحدث الذي يحدث الآن" },
      { t: "المضارع التام", d: "Have you finished...yet? انتهى وأثره باقي.", ex: [{ e: "Have you finished reading?", a: "هل أنهيت القراءة؟" }], tp: "yet تأتي في النهاية" },
      { t: "تدرج الحرارة", d: "Cold → Cool → Warm → Hot.", ex: [{ e: "It is cold in winter", a: "الجو بارد في الشتاء" }], tp: "can be = يمكن أن يكون" }
    ],
    pron: [
      { w: "Especially", t: "تنطق Ex-pecially بالعامية" },
      { w: "Weather", t: "لا تخلط مع Whether" }
    ],
    cul: [
      { n: "تايلاند حارة جداً مقارنة بلندن" },
      { n: "في أمريكا يقولين It is cold، لا تقول The weather is cold" }
    ],
    ex: [
      { tp: "mcq", q: "هل أنت مستمتع؟ بالإنجليزي:", a: "", o: ["Are you enjoying?", "Do you enjoy?", "Are you enjoy?", "You are enjoying?"], c: 0 },
      { tp: "fill", q: "Have you ________ reading your guidebook?", a: "هل أنهيت", an: "finished" },
      { tp: "mcq", q: "ماذا تعني especially؟", a: "", o: ["أيضاً", "خصوصاً", "ربما", "دائماً"], c: 1 },
      { tp: "reorder", q: "رتّب", a: "الجو بارد في لندن", w: ["is", "the", "weather", "cold", "in", "London"] },
      { tp: "match", q: "رتّب الحرارة", p: [["Cold", "بارد"], ["Cool", "مائل للبرودة"], ["Warm", "دافئ"], ["Hot", "حار"]] },
      { tp: "mcq", q: "ما الفرق بين Did و Have مع yet؟", a: "", o: ["Have يربط الماضي بالحاضر", "كلاهما متساويان", "Did أحدث", "لا فرق"], c: 0 },
      { tp: "fill", q: "I think you ________ like it a lot.", a: "أعتقد أنه سيعجبك", an: "would" },
      { tp: "listen", q: "استمع واختر الإجابة", en: "It is cold, especially in the winter.", o: ["بارد في الصيف", "بارد خاصة في الشتاء", "دافئ في الشتاء", "حار في الصيف"], c: 1 },
      { tp: "translate", q: "ترجم: هل أنهيت قراءة الكتاب؟", a: "", an: "have you finished reading the book" },
      { tp: "mcq", q: "ماذا تكتب بعد finished؟", a: "", o: ["to read", "reading", "read", "for read"], c: 1 },
      { tp: "egpt", q: "ازاي تقول 'الطقس بارد في الشتاء' بالإنجليزي؟", hint: "فكر في: It is cold in winter", an: "it is cold in winter", ph: "اكتب الإنجليزي..." },
      { tp: "usage", q: "اكتب جملة باستخدام كلمة weather", w: "weather" }
    ]
  },
  {
    id: 5,
    t: "ضابط الهجرة والجمارك",
    i: "🛂",
    w: 6,
    n: 8,
    dlg: [
      { s: "Officer", c: "#171717", e: "Passport and declaration form, please.", a: "جواز السفر واستمارة الإقرار، من فضلك." },
      { s: "Traveler", c: "#0070f3", e: "Here you go.", a: "تفضل." },
      { s: "Officer", c: "#171717", e: "What is the purpose of your visit?", a: "ما الغرض من زيارتك؟" },
      { s: "Traveler", c: "#0070f3", e: "I am here for tourism and shopping.", a: "أنا هنا للسياحة والتسوق." },
      { s: "Officer", c: "#171717", e: "How long will you be staying?", a: "كم المدة التي ستقيمها؟" },
      { s: "Traveler", c: "#0070f3", e: "I will be staying for two weeks.", a: "سأقيم لمدة أسبوعين." },
      { s: "Officer", c: "#171717", e: "Do you have anything to declare?", a: "هل لديك أي شيء تصرح عنه؟" },
      { s: "Traveler", c: "#0070f3", e: "No, I do not have anything to declare.", a: "لا، ليس لدي شيء." }
    ],
    voc: [
      { e: "Purpose of visit", a: "الغرض من الزيارة", d: "for + اسم أو to + فعل.", cl: ["What is the purpose?"], ms: [{ w: "purpose for visit", c: "purpose of visit", n: "نستخدم of" }], us: [{ t: "في السؤال", e: "What is the purpose of your visit?", a: "إيه الغرض من زيارتك؟" }, { t: "في الرد", e: "The purpose of my visit is tourism.", a: "الغرض من زيارتي السياحة." }] },
      { e: "Declaration form", a: "استمارة الإقرار", d: "استمارة الجمارك.", cl: ["Fill out the form"], ms: [{ w: "customs form", c: "declaration form", n: "declaration أدق" }], us: [{ t: "في المطار", e: "Please fill out the declaration form.", a: "من فضلك عبّي استمارة الإقرار." }, { t: "في التسليم", e: "Here is my declaration form.", a: "تفضل استمارة الإقرار بتاعتي." }] },
      { e: "Declare", a: "يصرح", d: "يعلن جمركياً.", cl: ["Anything to declare?"], ms: [{ w: "say", c: "declare", n: "declare رسمى" }], us: [{ t: "في السؤال", e: "Do you have anything to declare?", a: "عندك حاجة تصرح بيها؟" }, { t: "في الرد", e: "No, I don't have anything to declare.", a: "لا، مفيش حاجة أصرح بيها." }] },
      { e: "Tourism", a: "السياحة", d: "لا تخلط مع tourist (سائح).", cl: ["For tourism"], ms: [{ w: "tourist", c: "tourism", n: "tourism = صناعة، tourist = شخص" }], us: [{ t: "في الغرض", e: "I am here for tourism.", a: "أنا هنا للسياحة." }, { t: "في الوصف", e: "Tourism is a big industry in Egypt.", a: "السياحة صناعة كبيرة في مصر." }] },
      { e: "Here you go", a: "تفضل", d: "بديل عامي لـ Here it is.", cl: ["Here you go"], ms: [{ w: "here you are", c: "here you go", n: "كلمتين شائعتين" }], us: [{ t: "عند التسليم", e: "Here you go, your passport.", a: "تفضل، جوازك." }, { t: "في الإعطاء", e: "Here you go. Thank you!", a: "تفضل. شكراً!" }] },
      { e: "Two weeks", a: "أسبوعان", d: "أسبوعان = two weeks.", cl: ["For two weeks"], ms: [{ w: "two week", c: "two weeks", n: "نضيف s" }], us: [{ t: "في المدة", e: "I will be staying for two weeks.", a: "هقعد لمدة أسبوعين." }, { t: "في السؤال", e: "How long? — Two weeks.", a: "لمدة إيه؟ — أسبوعين." }] }
    ],
    gram: [
      { t: "Purpose: for + اسم / to +فعل", d: "نستخدم for مع الأسماء، to مع الأفعال.", ex: [{ e: "For tourism", a: "للسياحة" }, { e: "To visit friends", a: "لزيارة الأصدقاء" }], tp: "لا تقل for tourism" },
      { t: "المستقبل المستمر", d: "will be + ing لحدث مستغرق.", ex: [{ e: "I will be staying", a: "سأقيم" }], tp: "للحدث المستمر في المستقبل" }
    ],
    pron: [
      { w: "Declaration", t: "تنطق ديكلاريشن بالسكون" },
      { w: "Purpose", t: "تنطق بيربس" }
    ],
    cul: [
      { n: "في أمريكا، ضابط الهجرة يسألك: What is the purpose?" },
      { n: "في بريطانيا: What's the nature of your visit?" }
    ],
    ex: [
      { tp: "mcq", q: "كيف تسأل عن الغرض من الزيارة؟", a: "", o: ["What is the purpose of your visit?", "Why are you here?", "What do you want?", "Where are you going?"], c: 0 },
      { tp: "fill", q: "I am here for ________ and shopping.", a: "للسياحة", an: "tourism" },
      { tp: "mcq", q: "ماذا تعني Here you go؟", a: "", o: ["اذهب هنا", "تفضل", "هنا أنت", "رياح هنا"], c: 1 },
      { tp: "reorder", q: "رتّب", a: "ما الغرض من زيارتك", w: ["what", "is", "the", "purpose", "of", "your", "visit"] },
      { tp: "match", q: "طابق", p: [["Purpose", "الغرض"], ["Declare", "يصرح"], ["Tourism", "السياحة"], ["Declaration", "الإقرار"]] },
      { tp: "fill", q: "I will be ________ for two weeks.", a: "سأقيم لمدة أسبوعين", an: "staying" },
      { tp: "mcq", q: "ما الفرق بين for و to بعد purpose؟", a: "", o: ["for + اسم، to +فعل", "كلاهما متساوي", "to + اسم، for +فعل", "لا فرق"], c: 0 },
      { tp: "listen", q: "استمع واختر الإجابة", en: "I do not have anything to declare.", o: ["ليس لدي جواز", "ليس لدي شيء أصرح عنه", "ليس لدي مال", "ليس لدي أمتعة"], c: 1 },
      { tp: "translate", q: "ترجم: أنا هنا للسياحة", a: "", an: "I am here for tourism" },
      { tp: "mcq", q: "كم تبقى في أسبوعين؟", a: "", o: ["10 أيام", "14 يوماً", "7 أيام", "21 يوماً"], c: 1 },
      { tp: "egpt", q: "ازاي تسأل 'الغرض من زيارتك' بالإنجليزي؟", hint: "فكر في: What is the purpose of your visit", an: "what is the purpose of your visit", ph: "اكتب الإنجليزي..." },
      { tp: "usage", q: "اكتب جملة باستخدام كلمة tourism", w: "tourism" }
    ]
  },
  {
    id: 6,
    t: "السؤال عن العدد والأمتعة",
    i: "🧳",
    w: 6,
    n: 8,
    dlg: [
      { s: "Clerk", c: "#171717", e: "How many bags are you checking in?", a: "كم عدد الشنط التي تسجل دخولها؟" },
      { s: "Traveler", c: "#0070f3", e: "I'm checking in two bags.", a: "أسجل شنطتين." },
      { s: "Clerk", c: "#171717", e: "Do you have any carry-on luggage?", a: "هل لديك حقائب يدوية؟" },
      { s: "Traveler", c: "#0070f3", e: "Yes, I have one carry-on bag.", a: "نعم، حقيبة يدوية واحدة." },
      { s: "Clerk", c: "#171717", e: "How much is the extra baggage fee?", a: "كم رسوم الحقائب الزائدة؟" },
      { s: "Traveler", c: "#0070f3", e: "It is 30 dollars per bag.", a: "30 دولاراً لكل حقيبة." }
    ],
    voc: [
      { e: "How many", a: "كم عدد", d: "للأسماء المعدودة المكتملة.", cl: ["How many bags?"], ms: [{ w: "How much bags?", c: "How many bags?", n: "bags معدودة" }], us: [{ t: "في السؤال", e: "How many bags do you have?", a: "عندك كم شنطة؟" }, { t: "في الرد", e: "I have two bags.", a: "عندي شنطتين." }] },
      { e: "How much", a: "كم سعر", d: "للأسعار والكميات غير المعدودة.", cl: ["How much is it?"], ms: [{ w: "How many is it?", c: "How much is it?", n: "السعر غير معدود" }], us: [{ t: "في السؤال", e: "How much is the extra fee?", a: "كم الرسوم الإضافية؟" }, { t: "في الرد", e: "It's 30 dollars per bag.", a: "30 دولار لكل شنطة." }] },
      { e: "Carry-on", a: "حقيبة يدوية", d: "حقيبة تأخذها معك في الطائرة.", cl: ["Carry-on bag"], ms: [{ w: "hand bag", c: "carry-on", n: "carry-on أدق للمطار" }], us: [{ t: "في المطار", e: "Do you have any carry-on luggage?", a: "عندك حقائب يدوية؟" }, { t: "في الرد", e: "Yes, I have one carry-on bag.", a: "أيوه، عندي حقيبة يدوية واحدة." }] },
      { e: "Extra fee", a: "رسوم إضافية", d: "رسوم زائدة على الأسعار العادية.", cl: ["Extra fee"], ms: [{ w: "extra money", c: "extra fee", n: "fee رسمى" }], us: [{ t: "في السؤال", e: "Is there an extra fee for the bags?", a: "في رسوم إضافية للشنط؟" }, { t: "في الرد", e: "Yes, there is an extra fee.", a: "أيوه، في رسوم إضافية." }] },
      { e: "Per", a: "لكل", d: "لكل وحدة. per bag = لكل حقيبة.", cl: ["Per bag", "Per person"], ms: [{ w: "for each", c: "per", n: "per أقصر وأكثر رسمية" }], us: [{ t: "في السعر", e: "It costs 30 dollars per bag.", a: "التكلفة 30 دولار لكل شنطة." }, { t: "في العدد", e: "Two people per room.", a: "اتنين للغرفة." }] },
      { e: "Bags", a: "شنط", d: "جمع bag.", cl: ["Check in bags"], ms: [{ w: "luggages", c: "bags", n: "luggage جمع دائماً" }], us: [{ t: "في العدد", e: "I have three bags.", a: "عندي 3 شنط." }, { t: "في الفحص", e: "I need to check in my bags.", a: "محتاج أسجّل شنطي." }] }
    ],
    gram: [
      { t: "How many vs How much", d: "many للعد، much للسعر.", ex: [{ e: "How many bags?", a: "كم شنطة؟" }, { e: "How much is it?", a: "كم سعره؟" }], tp: "many + جمع، much + مفرد" },
      { t: "Per + اسم", d: "per تعني لكل وحدة.", ex: [{ e: "30 dollars per bag", a: "30$ لكل حقيبة" }], tp: "per = for each" }
    ],
    pron: [
      { w: "Per", t: "تنطق بيرو بالإنجليزية الأمريكية" },
      { w: "Carry-on", t: "Carry-on بسكون بين الكلمتين" }
    ],
    cul: [
      { n: "في أمريكا الحقيبة اليدوية = carry-on bag" },
      { n: "في بريطانيا: hand luggage" }
    ],
    ex: [
      { tp: "mcq", q: "كم سعر الشنطة؟ تسأل بـ:", a: "", o: ["How many?", "How much?", "How long?", "How far?"], c: 1 },
      { tp: "mcq", q: "كم عدد الشنط؟ تسأل بـ:", a: "", o: ["How much?", "How many?", "How often?", "How old?"], c: 1 },
      { tp: "fill", q: "I'm checking in ________ bags.", a: "شنطتين", an: "two" },
      { tp: "reorder", q: "رتّب", a: "كم الرسوم الإضافية", w: ["how", "much", "is", "the", "extra", "fee"] },
      { tp: "match", q: "طابق", p: [["How many", "كم عدد"], ["How much", "كم سعر"], ["Carry-on", "حقيبة يدوية"], ["Per bag", "لكل حقيبة"]] },
      { tp: "fill", q: "It is 30 dollars ________ bag.", a: "لكل حقيبة", an: "per" },
      { tp: "mcq", q: "هل الحقيبة اليدوية carry-on؟", a: "", o: ["نعم", "لا", "أحياناً", "لا أعرف"], c: 0 },
      { tp: "listen", q: "استمع واختر", en: "How many bags are you checking in?", o: ["كم سعر الشنط؟", "كم عدد الشنط؟", "أين الشنط؟", "من شنطتك؟"], c: 1 },
      { tp: "translate", q: "ترجم: أسجل شنطتين", a: "", an: "I am checking in two bags" },
      { tp: "mcq", q: "30$ لكل حقيبة = ", a: "", o: ["30$ per bag", "30$ in bag", "30$ at bag", "30$ on bag"], c: 0 },
      { tp: "egpt", q: "ازاي تسأل 'كم عدد الشنط' بالإنجليزي؟", hint: "فكر في: How many bags", an: "how many bags", ph: "اكتب الإنجليزي..." },
      { tp: "usage", q: "اكتب جملة باستخدام كلمة carry-on", w: "carry-on" }
    ]
  },
  {
    id: 7,
    t: "اختصارات الأسماء والمجاملات",
    i: "👋",
    w: 6,
    n: 8,
    dlg: [
      { s: "Chris", c: "#0070f3", e: "Hi, my name is Christopher, but call me Chris.", a: "مرحباً، اسمي كريستوفر لكن نادني كريس." },
      { s: "Jane", c: "#ff0080", e: "Nice to meet you Chris! Where are you heading?", a: "سررت بلقائك كريس! إلى أين تتجه؟" },
      { s: "Chris", c: "#0070f3", e: "I'm heading to London. We have a lot in common!", a: "متجه إلى لندن. لدينا الكثير من المشتركات!" },
      { s: "Jane", c: "#ff0080", e: "Yes, we do have a lot in common!", a: "نعم، لدينا بالفعل الكثير من المشتركات!" }
    ],
    voc: [
      { e: "Call me...", a: "نادني", d: "لاختصار الاسم.", cl: ["Call me Chris"], ms: [{ w: "name me", c: "call me", n: "نستخدم call" }], us: [{ t: "عند التعريف", e: "My name is Christopher, but call me Chris.", a: "اسمي كريستوفر بس نادني كريس." }, { t: "في الصداقة", e: "You can call me Ahmed.", a: "تقدر تناديني أحمد." }] },
      { e: "Heading to", a: "متجه إلى", d: "بديل رسمى لـ Going to.", cl: ["I'm heading to"], ms: [{ w: "heading for", c: "heading to", n: "نستخدم to" }], us: [{ t: "في التخطيط", e: "I'm heading to London tomorrow.", a: "ناشد لندن بكرة." }, { t: "في السؤال", e: "Where are you heading?", a: "روّح فين؟" }] },
      { e: "Have a lot in common", a: "مشتركات كثيرة", d: "تستخدم عند اكتشاف تشابه.", cl: ["We have a lot in common"], ms: [{ w: "in common", c: "a lot in common", n: "نحتاج a lot" }], us: [{ t: "في الاكتشاف", e: "We have a lot in common!", a: "عندنا أشياء كتير مشتركة!" }, { t: "في الصداقة", e: "I think we have a lot in common.", a: "أعتقد عندنا أشياء كتير مشتركة." }] },
      { e: "Nice to meet you", a: "سررت بلقائك", d: "عند لقاء شخص لأول مرة.", cl: ["Nice to meet you"], ms: [{ w: "nice meeting you", c: "nice to meet you", n: "أول لقاء نستخدم to meet" }], us: [{ t: "في اللقاء", e: "Nice to meet you! I'm Sarah.", a: "سررت بلقائك! أنا سارة." }, { t: "في الرد", e: "Nice to meet you too!", a: "أنا كمان سعيد بلمعاك!" }] },
      { e: "Christopher", a: "كريستوفر", d: "يختصر إلى Chris.", cl: ["Christopher → Chris"], ms: [{ w: "Cris", c: "Chris", n: "بالحاء" }], us: [{ t: "في التعريف", e: "My full name is Christopher.", a: "اسمي الكامل كريستوفر." }, { t: "في الاختصار", e: "But everyone calls me Chris.", a: "بس الكل يناديني كريس." }] },
      { e: "Common", a: "مشترك", d: "شيء مشترك بين اثنين.", cl: ["In common"], ms: [{ w: "commonly", c: "common", n: "common = مشترك" }], us: [{ t: "في التشابه", e: "We have many things in common.", a: "عندنا أشياء كتير مشتركة." }, { t: "في الوصف", e: "English is a common language.", a: "الإنجليزي لغة مشتركة." }] }
    ],
    gram: [
      { t: "التوكيد بـ do", d: "نستخدم do قبل الفعل في الإثبات.", ex: [{ e: "We do have a lot in common", a: "لدينا بالفعل مشتركات كثيرة" }], tp: "do للتوكيد القوي فقط" }
    ],
    pron: [
      { w: "Christopher", t: "تنطق كريستوفر بسكون" },
      { w: "Common", t: "تنطق كومون بسكون الميم" }
    ],
    cul: [
      { n: "Christopher → Chris (الأكثر شيوعاً)" },
      { n: "William → Will / Bill، Robert → Bob" }
    ],
    ex: [
      { tp: "mcq", q: "كيف تختصر اسم Christopher؟", a: "", o: ["Chris", "Toph", "Cris", "Kris"], c: 0 },
      { tp: "fill", q: "Nice to ________ you Chris!", a: "سررت بلقائك", an: "meet" },
      { tp: "mcq", q: "ماذا تعني We have a lot in common؟", a: "", o: ["لدينا مكان مشترك", "لدينا مشتركات كثيرة", "نحب بعض", "نتكلم نفس اللغة"], c: 1 },
      { tp: "reorder", q: "رتّب", a: "متجه إلى لندن", w: ["I'm", "heading", "to", "London"] },
      { tp: "match", q: "طابق", p: [["Call me", "نادني"], ["Heading", "متجه"], ["Common", "مشترك"], ["Nice to meet", "سررت بلقائك"]] },
      { tp: "fill", q: "We ________ a lot in common!", a: "لدينا بالفعل مشتركات", an: "do" },
      { tp: "mcq", q: "لماذا نستخدم do في we do have؟", a: "", o: ["للتوكيد", "للنفي", "للسؤال", "للمستقبل"], c: 0 },
      { tp: "listen", q: "استمع واختر", en: "My name is Christopher, but call me Chris.", o: ["اسمي كريس", "اسمي كريستوفر لكن نادني كريس", "اسمي كريستوفر", "أنا كريس"], c: 1 },
      { tp: "translate", q: "ترجم: نادني كريس", a: "", an: "call me Chris" },
      { tp: "mcq", q: "هل Thomas يختصر إلى؟", a: "", o: ["Tom / Tommy", "Thom", "Toms", "Ty"], c: 0 },
      { tp: "egpt", q: "ازاي تقول 'نادني كريس' بالإنجليزي؟", hint: "فكر في: Call me + اسم", an: "call me chris", ph: "اكتب الإنجليزي..." },
      { tp: "usage", q: "اكتب جملة باستخدام كلمة common", w: "common" }
    ]
  },
  {
    id: 8,
    t: "بدء المحادثات والتعارف",
    i: "💬",
    w: 6,
    n: 8,
    dlg: [
      { s: "A", c: "#ff9100", e: "Excuse me, is anyone sitting here?", a: "عفواً، هل يجلس أحد هنا؟" },
      { s: "B", c: "#00c853", e: "No, it is free. Please go ahead.", a: "لا، إنه فارغ. تفضل." },
      { s: "A", c: "#ff9100", e: "Thanks! Are you on your way to London as well?", a: "شكراً! هل أنت في طريقك إلى لندن أيضاً؟" },
      { s: "B", c: "#00c853", e: "Yes, I am heading to London for a conference.", a: "نعم، متجه إلى لندن لمؤتمر." },
      { s: "A", c: "#ff9100", e: "Sounds interesting! Have a great time!", a: "يبدو ممتعاً! أتمنى لك وقتاً رائعاً!" }
    ],
    voc: [
      { e: "Excuse me", a: "عفواً", d: "للإذن أو جلب الانتباه.", cl: ["Excuse me, where is...?"], ms: [{ w: "sorry", c: "excuse me", n: "excuse me للإذن، sorry للاعتذار" }], us: [{ t: "لجلب الانتباه", e: "Excuse me, where is the gate?", a: "عفواً، البوابة فين؟" }, { t: "للإذن", e: "Excuse me, can I sit here?", a: "عفواً، ممكن أجلس هنا؟" }] },
      { e: "Free", a: "فارغ", d: "غير مشغول. مقعد فارغ = free seat.", cl: ["Is this seat free?"], ms: [{ w: "empty", c: "free", n: "free = غير مشغول، empty = فارغ تماماً" }], us: [{ t: "في السؤال", e: "Is this seat free?", a: "المقعد ده فاضي؟" }, { t: "في الرد", e: "Yes, it's free. Go ahead.", a: "أيوه، فاضي. تفضل." }] },
      { e: "Go ahead", a: "تفضل", d: "إذن بالفعل. بديل لـ Please.", cl: ["Go ahead"], ms: [{ w: "go on", c: "go ahead", n: "go ahead أدق" }], us: [{ t: "في الإذن", e: "Can I sit here? — Go ahead!", a: "ممكن أجلس هنا؟ — تفضل!" }, { t: "في التحدث", e: "You go ahead. I'll wait.", a: "أنت تكلم. أنا هستنى." }] },
      { e: "As well", a: "أيضاً", d: "بديل رسمى لـ too.", cl: ["As well"], ms: [{ w: "as well too", c: "as well", n: "لا نستخدم as well too" }], us: [{ t: "في الإضافة", e: "I'm going to London as well.", a: "أنا كمان رايح لندن." }, { t: "في الموافقة", e: "Me as well!", a: "أنا كمان!" }] },
      { e: "Conference", a: "مؤتمر", d: "مؤتمر رسمى. Seminar = ندوة.", cl: ["Attend a conference"], ms: [{ w: "meeting", c: "conference", n: "conference أكبر من meeting" }], us: [{ t: "في الحضور", e: "I'm going to attend a conference.", a: "رايح أحضر مؤتمر." }, { t: "في السؤال", e: "What kind of conference?", a: "مؤتمر إيه؟" }] },
      { e: "Sounds interesting", a: "يبدو ممتعاً", d: "تعبير عن الإعجاب. Sounds + صفة.", cl: ["Sounds interesting", "Sounds great"], ms: [{ w: "it sounds", c: "sounds", n: "نحذف it في العامية" }], us: [{ t: "في التعبير", e: "That sounds interesting!", a: "ده يبدو ممتعاً!" }, { t: "في الموافقة", e: "Sounds great! Let's do it.", a: "يبدو حلو! يلا نعمله." }] }
    ],
    gram: [
      { t: "Excuse me للاستئذان", d: "نبدأ بها عند التحدث لغريب.", ex: [{ e: "Excuse me, is anyone sitting here?", a: "عفواً، هل يجلس أحد هنا؟" }], tp: "لا تستخدمها مع الأصدقاء" },
      { t: "Is anyone sitting here؟", d: "سؤال مهذب للتحقق من مقعد فارغ.", ex: [{ e: "Is anyone sitting here?", a: "هل يجلس أحد هنا؟" }], tp: "أرق من Can I sit here?" }
    ],
    pron: [
      { w: "Excuse me", t: "تنطق اكسكيوز مي" },
      { w: "Conference", t: "تنطق كونفرنس بسكون" }
    ],
    cul: [
      { n: "في الطائرة، Excuse me أرق من Can I?" },
      { n: "Sounds interesting تعبير أمريكى شائيع" }
    ],
    ex: [
      { tp: "mcq", q: "كيف تبدأ حوار مع غريب؟", a: "", o: ["Excuse me", "Hey you", "Listen", "Come here"], c: 0 },
      { tp: "fill", q: "No, it is ________. Please go ahead.", a: "فارغ", an: "free" },
      { tp: "mcq", q: "ماذا تعني Sounds interesting؟", a: "", o: ["يبدو غريباً", "يبدو ممتعاً", "يبدو صعباً", "يبدو سهلاً"], c: 1 },
      { tp: "reorder", q: "رتّب", a: "هل يجلس أحد هنا", w: ["is", "anyone", "sitting", "here"] },
      { tp: "match", q: "طابق", p: [["Excuse me", "عفواً"], ["Free", "فارغ"], ["Go ahead", "تفضل"], ["As well", "أيضاً"]] },
      { tp: "fill", q: "Are you on your ________ to London as well?", a: "في طريقك", an: "way" },
      { tp: "mcq", q: "هل تقول Excuse me للصديق؟", a: "", o: ["أحياناً", "دائماً", "لا حاجة", "فقط في المكتب"], c: 2 },
      { tp: "listen", q: "استمع واختر", en: "Excuse me, is anyone sitting here?", o: ["هل هذا مقعدك؟", "هل يجلس أحد هنا؟", "أين جلوسي؟", "ممكن أجلس؟"], c: 1 },
      { tp: "translate", q: "ترجم: عفواً، هل يجلس أحد هنا؟", a: "", an: "excuse me is anyone sitting here" },
      { tp: "mcq", q: "Conference تعني:", a: "", o: ["مؤتمر", "مقابلة", "محادثة", "ندوة"], c: 0 },
      { tp: "egpt", q: "ازاي تقول 'عفواً، هل يجلس أحد هنا' بالإنجليزي؟", hint: "فكر في: Excuse me, is anyone sitting here", an: "excuse me is anyone sitting here", ph: "اكتب الإنجليزي..." },
      { tp: "usage", q: "اكتب جملة باستخدام كلمة conference", w: "conference" }
    ]
  }
];
