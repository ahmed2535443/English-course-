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
    t: "التعارف ومحادثة الطائرة",
    i: "✈️",
    w: 13,
    n: 4,
    dlg: [
      { s: "Chris", c: "#0070f3", e: "Hi, my name is Chris.", a: "مرحباً، اسمي كريس." },
      { s: "Jane", c: "#7928ca", e: "My name is Jane.", a: "اسمي جين." },
      { s: "Chris", c: "#0070f3", e: "Have you been on holiday in Bangkok?", a: "هل كنتِ في عطلة في بانكوك؟" },
      { s: "Jane", c: "#7928ca", e: "No, I work there.", a: "لا، أنا أعمل هناك." },
      { s: "Chris", c: "#0070f3", e: "Where are you from?", a: "من أين أنتِ؟" },
      { s: "Jane", c: "#7928ca", e: "I'm from America. Really? Me too!", a: "أنا من أمريكا. حقاً؟ وأنا أيضاً!" },
      { s: "Chris", c: "#0070f3", e: "Do you work in Bangkok too?", a: "هل تعملين في بانكوك أيضاً؟" },
      { s: "Jane", c: "#7928ca", e: "Yes, I do work in Bangkok.", a: "نعم، أنا أعمل في بانكوك فعلاً." },
      { s: "Chris", c: "#0070f3", e: "So why are you going to England?", a: "إذن، لماذا أنتِ ذاهبة إلى إنجلترا؟" },
      { s: "Jane", c: "#7928ca", e: "I'm going to visit my friend, he works in London.", a: "أنا ذاهبة لزيارة صديقي، إنه يعمل في لندن." },
      { s: "Chris", c: "#0070f3", e: "I am going to stay with my friends in London too.", a: "أنا سأقيم مع أصدقائي في لندن أيضاً." },
      { s: "Jane", c: "#7928ca", e: "So how long will you be staying?", a: "كم المدة التي ستقيمينها؟" },
      { s: "Chris", c: "#0070f3", e: "I will be staying for two weeks.", a: "سأقيم لمدة أسبوعين." },
      { s: "Jane", c: "#7928ca", e: "We have a lot in common.", a: "لدينا الكثير من القواسم المشتركة." },
      { s: "Chris", c: "#0070f3", e: "Yes, we do have a lot in common.", a: "نعم، لدينا بالفعل الكثير من القواسم المشتركة." }
    ],
    voc: [
      { e: "Hi, my name is...", a: "مرحباً، اسمي هو...", d: "التعريف بالاسم عند اللقاء لأول مرة.", cl: ["Hi, my name is Chris", "Hi, my name is Jane"], ms: [{ w: "Hi, my name", c: "Hi, my name is...", n: "لا تنس استخدام is" }], us: [{ t: "في التعارف", e: "Hi, my name is Ahmed.", a: "مرحباً، اسمي أحمد." }] },
      { e: "Have you been on holiday in...?", a: "هل كنت في عطلة في...؟", d: "السؤال عن تجربة سفر سابقة بدون تحديد وقت.", cl: ["Have you been on holiday in Bangkok?"], ms: [{ w: "Did you be in holiday", c: "Have you been on holiday", n: "نستخدم المضارع التام Have you been" }], us: [{ t: "السؤال عن سفر", e: "Have you been on holiday in Bangkok?", a: "هل كنت في عطلة في بانكوك؟" }] },
      { e: "Where are you from?", a: "من أين أنت؟", d: "السؤال عن الموطن الأصل والبلد الأصلي.", cl: ["Where are you from?", "I'm from America"], ms: [{ w: "Where you from?", c: "Where are you from?", n: "لا تنس فعل الكينونة are" }], us: [{ t: "الموطن", e: "Where are you from? — I'm from Egypt.", a: "من أين أنت؟ — أنا من مصر." }] },
      { e: "Where do you come from?", a: "من أي بلد تأتي؟", d: "صيغة بديلة وشائعة للسؤال عن الموطن الأصل.", cl: ["Where do you come from?"], ms: [{ w: "Where you come from?", c: "Where do you come from?", n: "تحتاج إلى الفعل المساعد do" }], us: [{ t: "السؤال البديل", e: "Where do you come from? — I come from Cairo.", a: "من أي بلد تأتي؟ — أتيت من القاهرة." }] },
      { e: "What's your nationality?", a: "ما هي جنسيتك؟", d: "السؤال المباشر عن الجنسية في المواقف الرسمية والتعارف.", cl: ["What's your nationality?"], ms: [{ w: "What your nationality?", c: "What's your nationality?", n: "لا تنس is" }], us: [{ t: "الجنسية", e: "What's your nationality? — I'm Egyptian.", a: "ما هي جنسيتك؟ — أنا مصري." }] },
      { e: "Really? Me too!", a: "حقاً؟ وأنا أيضاً!", d: "التعبير السريع عن التشابه والتوافق في الآراء والأحداث.", cl: ["Really? Me too!"], ms: [{ w: "I too", c: "Me too", n: "الشائع في المحادثة Me too" }], us: [{ t: "التوافق", e: "I love traveling. — Really? Me too!", a: "أنا بحب السفر. — حقاً؟ وأنا أيضاً!" }] },
      { e: "I do work in...", a: "أنا بالفعل أعمل في...", d: "استخدام do قبل الفعل للتوكيد اللفظي القوي وتصحيح فكرة لدى السامع.", cl: ["I do work in Bangkok"], ms: [{ w: "I working in", c: "I do work in", n: "do تفيد التوكيد هنا" }], us: [{ t: "التأكيد", e: "Yes, I do work in London.", a: "نعم، أنا أعمل بالفعل في لندن." }] },
      { e: "Why are you going to...?", a: "لماذا أنت ذاهب إلى...؟", d: "السؤال عن سبب ووجهة السفر المستقبلي.", cl: ["Why are you going to England?"], ms: [{ w: "Why you going to", c: "Why are you going to", n: "تحتاج إلى are" }], us: [{ t: "سبب السفر", e: "Why are you going to Paris?", a: "لماذا أنت ذاهب إلى باريس؟" }] },
      { e: "I'm going to visit...", a: "أنا ذاهب لزيارة...", d: "التعبير عن خطة أو نية مجهزة ومؤكدة لزيارة شخص أو مكان.", cl: ["I'm going to visit my friend"], ms: [{ w: "I going to visit", c: "I'm going to visit", n: "لا تنس am" }], us: [{ t: "الزيارة", e: "I'm going to visit my friend in London.", a: "أنا ذاهب لزيارة صديقي في لندن." }] },
      { e: "I'm going to stay with...", a: "أنا سأقيم مع...", d: "التعبير عن خطة الإقامة مع أصدقاء أو أقارب.", cl: ["I'm going to stay with my friends"], ms: [{ w: "I stay with", c: "I'm going to stay with", n: "خطة إقامة مستقبلية" }], us: [{ t: "الإقامة", e: "I'm going to stay with my family.", a: "سأقيم مع عائلتي." }] },
      { e: "How long will you be staying?", a: "كم المدة التي ستقيمها؟", d: "السؤال باستخدام المستقبل المستمر عن مدة الإقامة المقررة.", cl: ["How long will you be staying?"], ms: [{ w: "How long you stay?", c: "How long will you be staying?", n: "استخدام المستقبل المستمر" }], us: [{ t: "مدة الإقامة", e: "How long will you be staying in London?", a: "كم المدة التي ستقيمها في لندن؟" }] },
      { e: "I will be staying for...", a: "سأكون مقيماً لمدة...", d: "الإجابة عن مدة الإقامة بالزمن المستقبل المستمر.", cl: ["I will be staying for two weeks"], ms: [{ w: "I stay for", c: "I will be staying for", n: "المستقبل المستمر" }], us: [{ t: "تحديد المدة", e: "I will be staying for two weeks.", a: "سأكون مقيماً لمدة أسبوعين." }] },
      { e: "We have a lot in common.", a: "لدينا الكثير من الأمور المشتركة.", d: "التعبير عن وجود اهتمامات وقواسم مشتركة كثيرة بين شخصين.", cl: ["We have a lot in common", "Yes, we do have a lot in common"], ms: [{ w: "We have many common", c: "We have a lot in common", n: "تعبير محادثة ثابت" }], us: [{ t: "التشابه", e: "We have a lot in common, we both love traveling.", a: "لدينا الكثير من القواسم المشتركة، كلانا يحب السفر." }] }
    ],
    gram: [
      {
        t: "1. المضارع التام (Present Perfect)",
        d: "التكوين: Have / Has + P.P (وفي السؤال: Have/Has + الفاعل + P.P). الاستخدام: حدث انتهى ونتيجته ما زالت موجودة، تجربة في الحياة بدون تحديد وقت (Have you been on holiday in Bangkok?)، حدث بدأ بالماضي وما زال مستمراً، أو حدث تكرر. الكلمات الشائعة معه: just, already, yet, ever, never, since, for, recently, lately, so far, until now.",
        r: "Have / Has + التصريف الثالث (P.P)",
        ex: [
          { e: "Have you been on holiday in Bangkok?", a: "هل كنت في عطلة في بانكوك؟" },
          { e: "I have traveled to London twice.", a: "سافرت إلى لندن مرتين." },
          { e: "They have just arrived.", a: "وصلوا للتو." }
        ],
        tp: "نستخدم هذا الزمن عندما يكون الحدث في الماضي ولكن أثره أو أهميته مستمرة في الحاضر بدون تحديد وقت معين."
      },
      {
        t: "2. المضارع البسيط (Present Simple)",
        d: "التكوين: الفعل في التصريف الأول (نضيف s/es مع المفرد He/She/It). في النفي والاستفهام نستخدم Do / Does. الاستخدام: يعبر عن الحقائق الثابتة، الوظائف، العادات اليومية، والمواقف الدائمة.",
        r: "Subject + Verb(s/es) | Do / Does",
        ex: [
          { e: "I work there.", a: "أنا أعمل هناك (وظيفة واستقرار دائم)." },
          { e: "Where are you from?", a: "من أين أنت؟ (حقيقة ثابتة)." },
          { e: "Yes, I do work in Bangkok.", a: "أنا بالفعل أعمل في بانكوك (do للتوكيد اللفظي)." },
          { e: "She speaks English very well.", a: "هي تتحدث الإنجليزية بطلاقة." }
        ],
        tp: "ملاحظة هامة: استخدام do قبل الفعل الأساسي في الإيجاب (I do work) يفيد التوكيد اللفظي القوي لتصحيح فكرة لدى السامع."
      },
      {
        t: "3. المضارع المستمر للتخطيط (Present Continuous)",
        d: "التكوين: am / is / are + V-ing أو be + going to + المصدر. الاستخدام: يُستخدم في سياق السفر للتعبير عن الخطط والترتيبات المستقبلية المؤكدة والمنظمة مسبقاً (وليس فقط للأفعال التي تحدث في نفس لحظة الكلام).",
        r: "am / is / are + V-ing | be going to + Verb",
        ex: [
          { e: "Why are you going to England?", a: "لماذا أنت مسافرة إلى إنجلترا؟ (ترتيبات سفر قائمة بالفعل)" },
          { e: "I'm going to visit my friend.", a: "أنا ذاهبة لزيارة صديقي (نية وخطة مجهزة)" },
          { e: "I am flying to Paris tomorrow night.", a: "أنا مسافر إلى باريس غداً ليلاً." }
        ],
        tp: "عندما تكون تذكرة الطيران أو الحجز جاهزاً، يفضل أهل اللغة استخدام هذا الزمن للتعبير عن المستقبل."
      },
      {
        t: "4. المستقبل المستمر (Future Continuous)",
        d: "التكوين: will be + V-ing (وفي النفي: won't be + V-ing). الاستخدام: يُستخدم للتعبير عن حدث سوف يكون مستمراً ومستغرقاً لوقت معين في نقطة محددة في المستقبل (مثل الإقامة أو الطيران).",
        r: "will be + V-ing",
        ex: [
          { e: "How long will you be staying?", a: "كم المدة التي ستكون مقيماً خلالها؟" },
          { e: "I will be staying for two weeks.", a: "سأكون مقيماً لمدة أسبوعين." },
          { e: "This time tomorrow, I will be sitting on the plane.", a: "في مثل هذا الوقت غداً، سأكون جالساً في الطائرة." }
        ],
        tp: "هذا الزمن يركز على 'استمرارية الفعل' وديمومته في المستقبل، وهو ممتاز لوصف فترات الإجازات والإقامة في السفر."
      }
    ],
    pron: [
      { w: "I do work", t: "نبرة الصوت (Stress) تعلو على do لتأكيد الفعل وإثباته بالحديث." },
      { w: "Where do you come from?", t: "تنطق بسرعة كجملة واحدة وتدغم do you إلى d'ya." },
      { w: "We have a lot in common", t: "تنطق lot in متصلة ككلمة واحدة: لوتين." }
    ],
    cul: [
      { n: "المضارع التام (Have you been): نستخدمه للسؤال عن التجارب السابقة في الحياة دون تحديد زمن معين." },
      { n: "التوكيد بـ do: استخدام do قبل الفعل الأساسي في الإثبات يفيد تصحيح فكرة خاطئة أو نفي شك لدى السامع." },
      { n: "المستقبل المستمر (Future Continuous): ممتاز لوصف فترات الإجازات والإقامة الطويلة في السفر." }
    ],
    ex: [
      { tp: "mcq", q: "كيف تسأل شخصاً عن موطنه الأصلي؟", a: "السؤال عن الموطن", o: ["Where are you from?", "How long will you stay?", "Why are you going?", "Do you work here?"], c: 0 },
      { tp: "mcq", q: "ما فائدة استخدام do في جملة 'Yes, I do work in Bangkok'؟", a: "التوكيد اللفظي", o: ["التوكيد اللفظي القوي لتصحيح فكرة لدى السامع", "النفي والإثبات", "السؤال عن الماضي", "التردد والاحتمال"], c: 0 },
      { tp: "fill", q: "Have you ________ on holiday in Bangkok?", a: "هل كنت في عطلة؟", an: "been" },
      { tp: "reorder", q: "رتّب الجملة: لدينا الكثير من الأمور المشتركة", a: "we have a lot in common", w: ["we", "have", "a", "lot", "in", "common"] },
      { tp: "match", q: "طابق العبارة بالاستخدام المناسب", p: [["Where are you from?", "السؤال عن الموطن"], ["I'm going to visit...", "التعبير عن خطة زيارة"], ["How long will you be staying?", "السؤال عن مدة الإقامة"], ["We have a lot in common", "وجود اهتمامات مشتركة"]] },
      { tp: "mcq", q: "أي زمن تُفضل استخدامه عندما تكون تذكرة الطيران وحجز السفر جاهزاً ومؤكداً؟", a: "المستقبل والترتيبات", o: ["المضارع المستمر (I'm going to / I'm flying)", "الماضي البسيط", "المستقبل البسيط فقط", "الماضي التام"], c: 0 },
      { tp: "fill", q: "I will be ________ for two weeks.", a: "سأكون مقيماً", an: "staying" },
      { tp: "listen", q: "استمع واختر المعنى الصحيح", en: "We have a lot in common.", o: ["لدينا الكثير من الأمور المشتركة", "سنقيم لمدة أسبوعين", "لماذا أنت ذاهب إلى إنجلترا؟", "أنا ذاهب لزيارة صديقي"], c: 0 },
      { tp: "translate", q: "ترجم: كم المدة التي ستقيمها؟", a: "", an: "how long will you be staying" },
      { tp: "mcq", q: "ما التركيب الصحيح للمستقبل المستمر (Future Continuous)؟", a: "تركيب المستقبل المستمر", o: ["will be + V-ing", "will + V1", "have + P.P", "am/is/are + V-ing"], c: 0 },
      { tp: "egpt", q: "ازاي تقول 'عندنا حاجات كتير مشتركة' بالإنجليزي؟", hint: "فكر في: We have a lot in common", an: "we have a lot in common", ph: "اكتب الإنجليزي..." },
      { tp: "usage", q: "اكتب جملة باستخدام كلمة common أو تعبير in common", w: "common" }
    ]
  },
  {
    id: 3,
    t: "ضابط الهجرة",
    i: "🛂",
    w: 18,
    n: 7,
    dlg: [
      { s: "Officer", c: "#171717", e: "Good morning, sir.", a: "صباح الخير يا سيدي." },
      { s: "Traveler", c: "#0070f3", e: "Good morning.", a: "صباح الخير." },
      { s: "Officer", c: "#171717", e: "Could I see your passport and visa documentation?", a: "هل يمكنني رؤية جواز سفرك ووثائق التأشيرة؟" },
      { s: "Traveler", c: "#0070f3", e: "Here you go.", a: "تفضل." },
      { s: "Officer", c: "#171717", e: "Is this your first visit to the United Kingdom?", a: "هل هذه زيارتك الأولى للمملكة المتحدة؟" },
      { s: "Traveler", c: "#0070f3", e: "Yes, it is.", a: "نعم." },
      { s: "Officer", c: "#171717", e: "And where will you be staying?", a: "وأين ستقيم؟" },
      { s: "Traveler", c: "#0070f3", e: "With my friend in London.", a: "مع صديقي في لندن." },
      { s: "Officer", c: "#171717", e: "And how long will you be staying?", a: "وكم ستطول إقامتك؟" },
      { s: "Traveler", c: "#0070f3", e: "I will be staying for two weeks.", a: "سأقيم لمدة أسبوعين." },
      { s: "Officer", c: "#171717", e: "Do you have anything to declare?", a: "هل لديك أي شيء تصرح به؟" },
      { s: "Traveler", c: "#0070f3", e: "No, I do not have anything to declare.", a: "لا، ليس لدي ما أصرح به." },
      { s: "Officer", c: "#171717", e: "Everything seems to be in order. Enjoy your stay.", a: "كل شيء يبدو على ما يرام. استمتع بإقامتك." },
      { s: "Traveler", c: "#0070f3", e: "Thank you.", a: "شكراً." },
      { s: "Traveler", c: "#0070f3", e: "Excuse me, where is the baggage claim?", a: "عفواً، أين مكان استلام الأمتعة؟" },
      { s: "Staff", c: "#7928ca", e: "Follow the signs to your left, please.", a: "اتبع اللوحات الإرشادية على يسارك من فضلك." }
    ],
    voc: [
      { e: "Immigration", a: "الهجرة", d: "تنطق emi-gra-tion. تُستخدم في سياق المطار.", cl: ["Immigration officer", "Immigration control"], ms: [{ w: "emigration", c: "immigration", n: "immigration = دخول، emigration = خروج" }], us: [{ t: "في المطار", e: "Please go to immigration.", a: "من فضلك روح لقسم الهجرة." }, { t: "في السؤال", e: "Where is the immigration office?", a: "مكتب الهجرة فين؟" }] },
      { e: "Officer", a: "ضابط", d: "ضابط أو موظف رسمي.", cl: ["Immigration officer", "Police officer"], ms: [{ w: "officer", c: "officer", n: "t صامتة في النهاية" }], us: [{ t: "في المطار", e: "The immigration officer asked for my passport.", a: "ضابط الهجرة طلب جوازي." }] },
      { e: "Immigration Officer", a: "ضابط الهجرة", d: "تُستخدم بدلاً من Policeman في المطار.", cl: ["The immigration officer checked my visa"], ms: [{ w: "policeman", c: "immigration officer", n: "في المطار نقول immigration officer" }], us: [{ t: "في المطار", e: "Good morning, immigration officer.", a: "صباح الخير يا ضابط الهجرة." }] },
      { e: "Sir", a: "سيدي / يا فندم", d: "تستخدم للاحترام للرجل الذي لا نعرفه.", cl: ["Good morning, sir", "Excuse me, sir"], ms: [{ w: "mister", c: "sir", n: " sir أرق وأكثر رسمية" }], us: [{ t: "في الاحترام", e: "Good morning, sir.", a: "صباح الخير يا سيدي." }, { t: "في الطلب", e: "Could I see your passport, sir?", a: "ممكن أشوف جوازك يا سيدي؟" }] },
      { e: "Miss", a: "آنسة", d: "تستخدم للبنت أو السيدة الشابة.", cl: ["Good morning, miss"], ms: [{ w: "miss", c: "Miss", n: "بحرف كبير Miss" }], us: [{ t: "في التحية", e: "Good morning, miss.", a: "صباح الخير يا آنسة." }] },
      { e: "Ma'am / Madam", a: "سيدتي", d: "تستخدم للسيدة الأكبر سناً.", cl: ["Good morning, ma'am", "Excuse me, madam"], ms: [{ w: "madam", c: "ma'am", n: "ma'am عامي، Madam رسمي" }], us: [{ t: "في التحية", e: "Good morning, ma'am.", a: "صباح الخير يا سيدتي." }] },
      { e: "Passport", a: "جواز سفر", d: "وثيقة السفر الرسمية.", cl: ["Show your passport", "Here is my passport"], ms: [{ w: "pass", c: "passport", n: "pass ≠ passport" }], us: [{ t: "في المطار", e: "Could I see your passport?", a: "ممكن أشوف جواز سفرك؟" }] },
      { e: "Visa", a: "تأشيرة", d: "إذن الدخول لبلد أجنبي.", cl: ["Visa documentation", "Tourist visa"], ms: [{ w: "visa card", c: "visa", n: "في المطار visa = تأشيرة" }], us: [{ t: "في المطار", e: "Here is my visa.", a: "تفضل تأشيرتي." }] },
      { e: "Documentation", a: "وثائق / مستندات", d: "مفردها Document (وثيقة).", cl: ["Visa documentation", "Your documents"], ms: [{ w: "documents", c: "documentation", n: "documentation = مجموعة الوثائق" }], us: [{ t: "في المطار", e: "Could I see your visa documentation?", a: "ممكن أشوف وثائق تأشيرتك؟" }] },
      { e: "Declare", a: "يصرح / يعلن", d: "تُستخدم في الجمارك للإفصاح عن الأشياء المحمولة.", cl: ["Anything to declare?", "I have nothing to declare"], ms: [{ w: "say", c: "declare", n: "declare رسمى وجماركي" }], us: [{ t: "في الجمارك", e: "Do you have anything to declare?", a: "عندك حاجة تصرح بيها؟" }, { t: "في الرد", e: "No, I do not have anything to declare.", a: "لا، مفيش حاجة أصرح بيها." }] },
      { e: "Seems to be", a: "يبدو أن", d: "تعبير عن الاحتمال أو التأكد الأولي.", cl: ["Seems to be in order"], ms: [{ w: "seem to be", c: "seems to be", n: "نضيف s مع he/she/it" }], us: [{ t: "في التأكيد", e: "Everything seems to be in order.", a: "كل شيء يبدو على ما يرام." }] },
      { e: "In order", a: "تمام / مضبوط / على ما يرام", d: "تُستخدم للتعبير عن سلامة الأوراق.", cl: ["Everything is in order", "Your documents are in order"], ms: [{ w: "on order", c: "in order", n: "نستخدم in" }], us: [{ t: "في التأكيد", e: "Everything seems to be in order.", a: "كل شيء يبدو على ما يرام." }] },
      { e: "Stay", a: "إقامة", d: "هنا استُخدمت كاسم وليس فعل. Enjoy your stay = استمتع بإقامتك.", cl: ["Enjoy your stay", "How long is your stay?"], ms: [{ w: "live", c: "stay", n: "stay = إقامة مؤقتة" }], us: [{ t: "في المطار", e: "Enjoy your stay.", a: "استمتع بإقامتك." }, { t: "في السؤال", e: "How long is your stay?", a: "إقامتك لمدة كام؟" }] },
      { e: "Baggage", a: "أمتعة / حقائب", d: "بديل رسمى لـ luggage.", cl: ["Baggage claim", "Checked baggage"], ms: [{ w: "bag", c: "baggage", n: "baggage جمع ورسمى" }], us: [{ t: "في المطار", e: "Where is the baggage claim?", a: "مكان استلام الأمتعة فين؟" }] },
      { e: "Claim", a: "طلب / استلام", d: "هنا بمعنى استلام الأمتعة.", cl: ["Baggage claim", "Claim your bags"], ms: [{ w: "take", c: "claim", n: "claim أدق للمطار" }], us: [{ t: "في المطار", e: "Where is the baggage claim?", a: "مكان استلام الأمتعة فين؟" }] },
      { e: "Baggage claim", a: "مكان استلام الأمتعة", d: "المكان الذي تستلم فيه شنطك بعد الرحلة.", cl: ["Go to baggage claim"], ms: [{ w: "baggage take", c: "baggage claim", n: "المصطلح الصحيح baggage claim" }], us: [{ t: "في المطار", e: "Where is the baggage claim?", a: "مكان استلام الأمتعة فين؟" }, { t: "في الإرشاد", e: "Go to baggage claim.", a: "روح لمكان استلام الأمتعة." }] },
      { e: "Signs", a: "لافتات / لوحات إرشادية", d: "مفردها Sign. تُستخدم للإرشاد في المطار.", cl: ["Follow the signs", "Look for the signs"], ms: [{ w: "signs", c: "signs", n: "sign = لافتة واحدة" }], us: [{ t: "في الإرشاد", e: "Follow the signs to your left.", a: "اتبع اللوحات الإرشادية على يسارك." }] },
      { e: "Follow", a: "اتبع", d: "فعل أمر. اتبع الإرشادات.", cl: ["Follow the signs", "Follow me"], ms: [{ w: "follow the sign", c: "follow the signs", n: "نستخدم الجمع signs" }], us: [{ t: "في الإرشاد", e: "Follow the signs to your left, please.", a: "اتبع اللوحات الإرشادية على يسارك من فضلك." }] }
    ],
    gram: [
      { t: "1. الفرق بين ضابط الهجرة والشرطي", d: "في المطار نتعامل مع Immigration Officer (ضابط هجرة) وليس Policeman (رجل شرطة).", ex: [{ e: "Immigration officer, not policeman.", a: "ضابط الهجرة وليس الشرطي." }], tp: "المصطلح الصحيح في المطار Immigration Officer" },
      { t: "2. ألقاب الاحترام", d: "نستخدم Sir للرجل، Miss للبنت الشابة، و Ma'am أو Madam للسيدة الأكبر سناً، وتستخدم عندما لا نعرف اسم الشخص.", ex: [{ e: "Good morning, sir.", a: "صباح الخير يا سيدي." }, { e: "Good morning, miss.", a: "صباح الخير يا آنسة." }], tp: " Sir للرجل، Miss للشابة، Ma'am للسيدة" },
      { t: "3. أسلوب الطلب المهذب (Polite Request)", d: "يُفضل دائماً استخدام أفعال مثل (Could I, May I, Can I) للطلب بتهذيب بدلاً من صيغة الأمر المباشرة.", ex: [{ e: "Could I see your passport?", a: "ممكن أشوف جواز سفرك؟" }, { e: "May I see your visa?", a: "ممكن أشوف تأشيرتك؟" }], tp: "Could I أرق من Can I" },
      { t: "4. صيغة الأمر (Imperative)", d: "تبدأ بالفعل في المصدر وتعتبر أسلوباً حاداً أو غير مهذب إذا استخدمت كطلب في الأماكن الرسمية.", ex: [{ e: "Wash your hands.", a: "اغسل يديك." }, { e: "Follow the signs.", a: "اتبع اللوحات الإرشادية." }], tp: "Follow و Wash صيغ أمر" },
      { t: "5. الرد عند إعطاء شيء (Giving things)", d: "استخدم (Here you go / Here you are) بشكل عام. أو (Here it is) للمفرد، و(Here they are) للجمع.", ex: [{ e: "Here you go.", a: "تفضل." }, { e: "Here it is.", a: "تفضل." }, { e: "Here they are.", a: "تفضلوا." }], tp: "Here you go = بديل عامي شائع" },
      { t: "6. استخدام And في بداية الجملة", d: "في المحادثات المنطوقة (Spoken English)، من الطبيعي جداً والمقبول أن تبدأ الجملة بـ And.", ex: [{ e: "And where will you be staying?", a: "وأين ستقيم؟" }, { e: "And how long will you be staying?", a: "وكم ستطول إقامتك؟" }], tp: "And في البداية طبيعى في المحادثة" },
      { t: "7. استخدام Stay كاسم", d: "كلمة Stay يمكن أن تكون فعلاً بمعنى 'يمكث'، ويمكن أن تأتي كاسم بمعنى 'إقامة'.", ex: [{ e: "Enjoy your stay.", a: "استمتع بإقامتك." }, { e: "How long is your stay?", a: "إقامتك لمدة كام؟" }], tp: "stay = إقامة مؤقتة" }
    ],
    pron: [
      { w: "Immigration", t: "تنطق emi-gra-tion ب Stress على الرسالة الثالثة" },
      { w: "Documentation", t: "تنطق ديوكيمينتيشن بالسكون" },
      { w: "Baggage claim", t: "تنطق باغيج كليم متصلة" },
      { w: "Seems to be", t: "تنطق سيمز تو بي بسرعة" }
    ],
    cul: [
      { n: "في المطار نستخدم Immigration Officer وليس Policeman" },
      { n: "Sir للرجل، Miss للشابة، Ma'am للسيدة الكبيرة" },
      { n: "في أمريكا: Where is the baggage claim? | في بريطانيا: Where is baggage reclaim?" },
      { n: "المملكة المتحدة (UK) = إنجلترا + ويلز + اسكتلندا + أيرلندا الشمالية" },
      { n: "بريطانيا العظمى = إنجلترا + ويلز + اسكتلندا (بدون أيرلندا الشمالية)" }
    ],
    ex: [
      { tp: "mcq", q: "ماذا تقول عند تسليم جواز سفرك للضابط؟", a: "تفضل", o: ["Here it is", "Go straight", "Take a left", "Enjoy it"], c: 0 },
      { tp: "mcq", q: "ما المصطلح الصحيح لضابط الهجرة في المطار؟", a: "", o: ["Policeman", "Immigration Officer", "Security Guard", "Customs Man"], c: 1 },
      { tp: "fill", q: "Good morning, ________.", a: "صباح الخير يا سيدي", an: "sir" },
      { tp: "reorder", q: "رتّب الجملة: هل يمكنني رؤية جواز سفرك؟", a: "could i see your passport", w: ["could", "i", "see", "your", "passport"] },
      { tp: "match", q: "طابق الكلمة بالمعنى", p: [["Immigration", "الهجرة"], ["Passport", "جواز سفر"], ["Baggage claim", "مكان استلام الأمتعة"], ["Declare", "يصرح جمركياً"]] },
      { tp: "mcq", q: "ماذا تعني Here you go؟", a: "", o: ["اذهب هنا", "تفضل", "هنا أنت", "رياح هنا"], c: 1 },
      { tp: "fill", q: "I will be ________ for two weeks.", a: "سأقيم لمدة أسبوعين", an: "staying" },
      { tp: "mcq", q: "ما الفرق بين Sir و Miss؟", a: "", o: ["Sir للرجل، Miss للبنت الشابة", "Sir للبنت، Miss للرجل", "كلاهما للرجل", "Sir فقط للأمريكيين"], c: 0 },
      { tp: "listen", q: "استمع واختر الإجابة", en: "Could I see your passport and visa documentation?", o: ["ممكن أشوف جوازك؟", "هل لديك تأشيرة؟", "أين حقيبتك؟", "كم ستقيم؟"], c: 0 },
      { tp: "translate", q: "ترجم: كل شيء يبدو على ما يرام", a: "", an: "everything seems to be in order" },
      { tp: "mcq", q: "في أي بلد نقول Baggage reclaim بدل Baggage claim؟", a: "", o: ["أمريكا", "بريطانيا", "أستراليا", "كندا"], c: 1 },
      { tp: "egpt", q: "ازاي تسأل 'مكان استلام الأمتعة فين' بالإنجليزي؟", hint: "فكر في: Where is the baggage claim?", an: "where is the baggage claim", ph: "اكتب الإنجليزي..." },
      { tp: "usage", q: "اكتب جملة باستخدام كلمة passport", w: "passport" }
    ]
  },
  {
    id: 4,
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
    id: 5,
    t: "صالة الوصول والاستقبال",
    i: "🛬",
    w: 11,
    n: 4,
    dlg: [
      { s: "Greeter", c: "#0070f3", e: "Hey Thomas, how are you doing?", a: "أهلاً توماس، كيف حالك؟" },
      { s: "Thomas", c: "#7928ca", e: "Doing great. And you?", a: "بخير جداً، وأنت؟" },
      { s: "Greeter", c: "#0070f3", e: "I'm fine. You look great!", a: "أنا بخير. تبدو بحالة ممتازة (غير مرهق)!" },
      { s: "Thomas", c: "#7928ca", e: "Oh, thanks.", a: "أوه، شكراً." },
      { s: "Greeter", c: "#0070f3", e: "Yeah, how was your flight over?", a: "نعم، كيف كانت رحلتك للوصول إلى هنا؟" },
      { s: "Thomas", c: "#7928ca", e: "It was quite a long flight.", a: "كانت رحلة طويلة جداً." },
      { s: "Greeter", c: "#0070f3", e: "How many hours did it take?", a: "كم عدد الساعات التي استغرقتها؟" },
      { s: "Thomas", c: "#7928ca", e: "It took 12 hours.", a: "استغرقت 12 ساعة." },
      { s: "Greeter", c: "#0070f3", e: "Did you have to stop anywhere on the way?", a: "هل اضطررت للتوقف في أي مكان في الطريق؟" },
      { s: "Thomas", c: "#7928ca", e: "No, it was a direct flight.", a: "لا، كانت رحلة طيران مباشرة." },
      { s: "Greeter", c: "#0070f3", e: "Is home far from the airport?", a: "هل المنزل بعيد عن المطار؟" },
      { s: "Thomas", c: "#7928ca", e: "No, only 40 minutes.", a: "لا، 40 دقيقة فقط." },
      { s: "Greeter", c: "#0070f3", e: "Is there going to be a lot of traffic?", a: "هل سيكون هناك زحام مروري؟" },
      { s: "Thomas", c: "#7928ca", e: "The traffic should be light.", a: "من المفترض أن يكون المرور خفيفاً." },
      { s: "Greeter", c: "#0070f3", e: "Hey, are you ready to go?", a: "هل أنت مستعد للذهاب؟" },
      { s: "Thomas", c: "#7928ca", e: "Yes, let's go.", a: "نعم، هيا بنا." }
    ],
    voc: [
      { e: "Flight", a: "رحلة طيران / جوية", d: "تستخدم لوصف رحلة الطيران. مثال: How was your flight?", cl: ["How was your flight?", "Have a safe flight"], ms: [{ w: "How was your journey?", c: "How was your flight?", n: "في الطيران نستخدم flight" }], us: [{ t: "في السؤال", e: "How was your flight?", a: "كيف كانت رحلتك الجوية؟" }] },
      { e: "Quite", a: "جداً / إلى حد كبير", d: "تأتي قبل الصفة لتقوية المعنى. لا تخلط مع Quiet (هادئ).", cl: ["Quite a long flight", "Quite good"], ms: [{ w: "quiet", c: "quite", n: "Quiet تعني هادئ" }], us: [{ t: "في الوصف", e: "It was quite a long flight.", a: "كانت رحلة طويلة جداً." }] },
      { e: "Direct flight", a: "رحلة طيران مباشرة", d: "رحلة بدون توقف ترانزيت في الطريق.", cl: ["It was a direct flight without stops"], ms: [{ w: "straight flight", c: "direct flight", n: "المصطلح الصحيح direct flight" }], us: [{ t: "نوع الرحلة", e: "It was a direct flight without stops.", a: "كانت رحلة مباشرة بدون توقف." }] },
      { e: "Traffic", a: "زحام مروري / حركة المرور", d: "تصف حركة السيارات والزحام في الشارع.", cl: ["Is there going to be a lot of traffic?"], ms: [{ w: "traffic is big", c: "heavy traffic", n: "نقول heavy traffic أو a lot of traffic" }], us: [{ t: "في السؤال", e: "Is there going to be a lot of traffic?", a: "هل سيكون هناك زحام مروري؟" }] },
      { e: "Light traffic", a: "مرور خفيف / الشوارع فاضية", d: "تصف حركة المرور السلسة وغير المزدحمة.", cl: ["The traffic should be light"], ms: [{ w: "small traffic", c: "light traffic", n: "المرور الخفيف يسمى light traffic" }], us: [{ t: "وصف المرور", e: "The traffic should be light.", a: "من المفترض أن يكون المرور خفيفاً." }] },
      { e: "Stop", a: "يتوقف / توقف", d: "التوقف أثناء خط سير الرحلة.", cl: ["Did you have to stop anywhere?"], ms: [{ w: "make a stop", c: "stop", n: "الفعل المباشر stop" }], us: [{ t: "التوقف", e: "Did you have to stop anywhere on the way?", a: "هل اضطررت للتوقف في أي مكان في الطريق؟" }] },
      { e: "You look great", a: "تبدو بحالة ممتازة", d: "تُقال للتعبير عن أن الشخص لا يبدو عليه الإرهاق بعد السفر.", cl: ["You look great!"], ms: [{ w: "You see great", c: "You look great", n: "look تعني يبدو هنا" }], us: [{ t: "المجاملة", e: "I'm fine. You look great!", a: "أنا بخير. تبدو بحالة ممتازة!" }] },
      { e: "How was your flight over?", a: "كيف كانت رحلتك للوصول إلى هنا؟", d: "كلمة over هنا تعني للوصول إلى هذا المكان تحديداً.", cl: ["How was your flight over?"], ms: [{ w: "How was your flight to here?", c: "How was your flight over?", n: "over أسلوب متحدث أصلي" }], us: [{ t: "سؤال الاستقبال", e: "Yeah, how was your flight over?", a: "كيف كانت رحلتك للوصول إلى هنا؟" }] },
      { e: "How many hours did it take?", a: "كم ساعة استغرقتها الرحلة؟", d: "السؤال عن مدة الرحلة باستخدام الفعل take.", cl: ["How many hours did it take?", "It took 12 hours"], ms: [{ w: "How many hours it took?", c: "How many hours did it take?", n: "استخدام did في السؤال" }], us: [{ t: "مدة الرحلة", e: "How many hours did it take? — It took 12 hours.", a: "كم ساعة استغرقتها الرحلة؟ — استغرق 12 ساعة." }] },
      { e: "On the way", a: "في الطريق", d: "تُستخدم للسؤال عما إذا كان هناك توقف أثناء خط سير الرحلة.", cl: ["On the way", "Stop anywhere on the way?"], ms: [{ w: "in the way", c: "on the way", n: "حرف الجر الصحيح on" }], us: [{ t: "في الطريق", e: "Did you stop anywhere on the way?", a: "هل توقفت في أي مكان في الطريق؟" }] },
      { e: "Are you ready to go?", a: "هل أنت مستعد للذهاب؟", d: "تُقال عند الاستعداد للتحرك أو مغادرة المكان.", cl: ["Hey, are you ready to go?", "Yes, let's go"], ms: [{ w: "Are you ready for go?", c: "Are you ready to go?", n: "to + المصدر" }], us: [{ t: "التحرك", e: "Hey, are you ready to go? — Yes, let's go!", a: "هل أنت مستعد للذهاب؟ — نعم، هيا بنا!" }] }
    ],
    gram: [
      {
        t: "1. استخدام over بعد كلمة الرحلة (flight over)",
        d: "كلمة over هنا تعني 'للوصول إلى هذا المكان'. نقول: How was your flight over? للتعبير الطبيعي عن رحلة وصول الشخص لمكانك.",
        r: "How was your flight over?",
        ex: [{ e: "How was your flight over?", a: "كيف كانت رحلتك للوصول إلى هنا؟" }],
        tp: "تمنح الجملة طابعاً طبيعياً مثل أهل اللغة الأصليين."
      },
      {
        t: "2. السؤال والتعبير عن المدة بـ (Take / Took)",
        d: "نستخدم الفعل take للسؤال والإجابة عن الوقت واستغراق المدة. في الماضي: It took 12 hours.",
        r: "How many hours did it take? -> It took [12] hours.",
        ex: [
          { e: "How many hours did it take?", a: "كم عدد الساعات التي استغرقتها؟" },
          { e: "It took 12 hours.", a: "استغرقت 12 ساعة." }
        ],
        tp: "تذكر استخدام did في السؤال وتحول take إلى took في الماضي."
      },
      {
        t: "3. المجاملة والوصف بـ (You look great) و (Quite)",
        d: "You look great تُقال للترحيب للتعبير عن عدم ظهور الإرهاق بعد السفر. وQuite تعني جداً / إلى حد كبير.",
        r: "You look + [adj] | Quite + a [adj] [noun]",
        ex: [
          { e: "You look great!", a: "تبدو بحالة ممتازة (غير مرهق)!" },
          { e: "It was quite a long flight.", a: "كانت رحلة طويلة جداً." }
        ],
        tp: "فرق بين Quite (جداً/إلى حد كبير) و Quiet (هادئ)."
      },
      {
        t: "4. التوقعات والاستعداد (Traffic & Ready to go)",
        d: "المرور يُوصف بـ light traffic (خفيف) أو heavy traffic (شديد). وعند التحرك نقول: Are you ready to go?",
        r: "The traffic should be light | Are you ready to go?",
        ex: [
          { e: "The traffic should be light.", a: "من المفترض أن يكون المرور خفيفاً." },
          { e: "Are you ready to go? — Yes, let's go.", a: "هل أنت مستعد للذهاب؟ — نعم، هيا بنا." }
        ],
        tp: "should هنا تعبر عن التوقع المرجح وليس النصيحة."
      }
    ],
    pron: [
      { w: "Flight over", t: "تنطق متصلة: فلايت أوفَر" },
      { w: "Quite a long", t: "تنطق كوايت أ لونغ بفرز Quite عن Quiet" },
      { w: "Traffic", t: "حرف a قصير ومفتوح: ترافيك" }
    ],
    cul: [
      { n: "You look great: مجاملة أمريكية شائعة للترحيب بالقادمين من سفر طويل لتأكيد أنهم بخير." },
      { n: "Light traffic: التعبير الشائع لوصف الشوارع الفاضية بدلاً من free traffic." },
      { n: "Direct flight: رحلة طيران مباشرة بدون توقف ترانزيت." }
    ],
    ex: [
      { tp: "mcq", q: "ما المعنى الدقيق لجملة 'How was your flight over'؟", a: "رحلة الوصول", o: ["كيف كانت رحلتك للوصول إلى هنا؟", "كيف كان الطيران فوق الجبال؟", "هل انتهت رحلتك؟", "أين كانت رحلتك؟"], c: 0 },
      { tp: "mcq", q: "كيف تجامل شخصاً قادماً من السفر بأنه لا يبدو عليه التعب؟", a: "مجاملة السفر", o: ["You look great!", "You look tired!", "You look old!", "You look quiet!"], c: 0 },
      { tp: "fill", q: "It ________ 12 hours.", a: "استغرقت 12 ساعة", an: "took" },
      { tp: "reorder", q: "رتّب الجملة: هل كانت رحلة طيران مباشرة؟", a: "was it a direct flight", w: ["was", "it", "a", "direct", "flight"] },
      { tp: "match", q: "طابق الكلمة بالمعنى الصحيح", p: [["Direct flight", "رحلة مباشرة بدون توقف"], ["Light traffic", "مرور خفيف وشوارع فاضية"], ["On the way", "في الطريق"], ["Quite long", "طويلة جداً"]] },
      { tp: "mcq", q: "ما الفرق بين Quite و Quiet؟", a: "الفارق اللغوي", o: ["Quite = جداً، Quiet = هادئ", "Quiet = جداً، Quite = هادئ", "كلاهما نفس المعنى", "Quite = سريع، Quiet = بطيء"], c: 0 },
      { tp: "fill", q: "The traffic should be ________.", a: "خفيفاً", an: "light" },
      { tp: "listen", q: "استمع واختر المعنى الصحيح", en: "Are you ready to go?", o: ["هل أنت مستعد للذهاب؟", "هل وصلتك الشنط؟", "هل الشوارع زحمة؟", "كم ساعة استغرقت الرحلة؟"], c: 0 },
      { tp: "translate", q: "ترجم: كانت رحلة طويلة جداً", a: "", an: "it was quite a long flight" },
      { tp: "mcq", q: "ماذا تعني كلمة over في 'flight over'؟", a: "دلالة over", o: ["تحديد الوصول إلى مكان المتحدث", "فوق السحاب", "انتهاء الرحلة", "الزيادة عن الحد"], c: 0 },
      { tp: "egpt", q: "ازاي تسأل صاحبك اللي جايلك من السفر 'الرحلة خدت كام ساعة؟' بالإنجليزي؟", hint: "فكر في: How many hours did it take?", an: "how many hours did it take", ph: "اكتب الإنجليزي..." },
      { tp: "usage", q: "اكتب جملة باستخدام كلمة traffic", w: "traffic" }
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
    t: "الطقس والسفر لتايلاند",
    i: "🌦️",
    w: 6,
    n: 3,
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
