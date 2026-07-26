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
    t: "مقارنة التسوق بين لندن وبانكوك",
    i: "🛍️",
    w: 14,
    n: 7,
    dlg: [
      { s: "A", c: "#ff9100", e: "Where can we go?", a: "وين نقدر نروح؟" },
      { s: "B", c: "#00c853", e: "We can go to the King's Road.", a: "نقدر نروح طريق الملك." },
      { s: "A", c: "#ff9100", e: "Is it cheaper than Kensington High Street?", a: "هل هو أرخص من شارع كينغزتون العالي؟" },
      { s: "B", c: "#00c853", e: "Yes, it is cheaper.", a: "نعم، هو أرخص." },
      { s: "A", c: "#ff9100", e: "Is it far from here?", a: "هل هو بعيد من هنا؟" },
      { s: "B", c: "#00c853", e: "No, it's quite near.", a: "لا، هو قريب نوعاً ما." },
      { s: "A", c: "#ff9100", e: "Can we go there please?", a: "ممكن نروح هناك من فضلك؟" },
      { s: "B", c: "#00c853", e: "Sure, we'll go there.", a: "أكيد، هنروح هناك." },
      { s: "A", c: "#ff9100", e: "London is very expensive, isn't it?", a: "لندن غالية جداً، مش كده؟" },
      { s: "B", c: "#00c853", e: "Yes, London is very expensive.", a: "نعم، لندن غالية جداً." },
      { s: "A", c: "#ff9100", e: "I think Bangkok is much better.", a: "أنا أعتقد أن بانكوك أحسن بكثير." },
      { s: "B", c: "#00c853", e: "Why is Bangkok better than London?", a: "ليه بانكوك أحسن من لندن؟" },
      { s: "A", c: "#ff9100", e: "Because the shops are much cheaper.", a: "لأن المحلات أرخص بكثير." },
      { s: "B", c: "#00c853", e: "Does Bangkok have many shops to choose from?", a: "هل بانكوك فيها محلات كتير نختار منها؟" },
      { s: "A", c: "#ff9100", e: "Yes, there are a lot of different shops.", a: "نعم، في محلات كتير مختلفة." },
      { s: "B", c: "#00c853", e: "Are the Thai people helpful?", a: "هل الشعب التايلاندي مساعد؟" },
      { s: "A", c: "#ff9100", e: "Yes, they're very helpful.", a: "نعم، هم مساعدين جداً." },
      { s: "B", c: "#00c853", e: "Have we forgotten to buy anything?", a: "هل نسينا نشتري أي حاجة؟" },
      { s: "A", c: "#ff9100", e: "Yes, we forgot one item.", a: "نعم، نسينا حاجة واحدة." },
      { s: "B", c: "#00c853", e: "What did we forget to buy?", a: "إيه اللي نسينا نشتريه؟" },
      { s: "A", c: "#ff9100", e: "We forgot to buy a guidebook.", a: "سينا نشتري كتاب إرشادي." },
      { s: "B", c: "#00c853", e: "Do you really need a guidebook?", a: "هل فعلاً محتاج كتاب إرشادي؟" },
      { s: "A", c: "#ff9100", e: "Yes, I really need a guidebook.", a: "نعم، أنا فعلاً محتاج كتاب إرشادي." }
    ],
    voc: [
      { e: "Cheaper than", a: "أرخص من", d: "مقارنة: cheaper than تُستخدم للمقارنة بين شيئين. عند المقارنة بالصفات القصيرة نضيف er.", cl: ["Is it cheaper than...?", "It is cheaper."], ms: [{ w: "more cheap", c: "cheaper", n: "مقارنة الصفات القصيرة نضيف er" }], us: [{ t: "في المقارنة", e: "Is it cheaper than Kensington High Street?", a: "هل هو أرخص من شارع كينغزتون؟" }, { t: "في الرد", e: "Yes, it is cheaper.", a: "نعم، هو أرخص." }] },
      { e: "Far from", a: "بعيد عن", d: "far من الكلمات التي تُستخدم في الأسئلة والنفي.far من هنا = far from here.", cl: ["Is it far from here?", "It's not far."], ms: [{ w: "far to", c: "far from", n: "نستخدم from مع far" }], us: [{ t: "في السؤال", e: "Is it far from here?", a: "هل هو بعيد من هنا؟" }, { t: "في الرد", e: "No, it's quite near.", a: "لا، هو قريب نوعاً ما." }] },
      { e: "Quite near", a: "قريب نوعاً ما", d: "quite تستخدم لتقليل درجة الصفة. quite near = قريب نوعاً ما.", cl: ["It's quite near"], ms: [{ w: "very near", c: "quite near", n: "quite أخف من very" }], us: [{ t: "في الرد", e: "No, it's quite near.", a: "لا، هو قريب نوعاً ما." }] },
      { e: "Can we go there please?", a: "ممكن نروح هناك من فضلك؟", d: "طلب مهذب: Can we go + please. استخدام please يضيف تهذيباً للطلب.", cl: ["Can we go there please?"], ms: [{ w: "Can we go there?", c: "Can we go there please?", n: "please تضيف تهذيباً" }], us: [{ t: "في الطلب", e: "Can we go there please?", a: "ممكن نروح هناك من فضلك؟" }] },
      { e: "Isn't it?", a: "مش كده؟", d: "سؤال ذيلي (Tag Question): للجملة المثبتة نستخدم نفي. isn't it? تعتمد على الفعل المساعد في الجملة.", cl: ["London is expensive, isn't it?"], ms: [{ w: "isn't it?", c: "isn't it?", n: "نستخدم النفي مع الجملة المثبتة" }], us: [{ t: "في التأكيد", e: "London is very expensive, isn't it?", a: "لندن غالية جداً، مش كده؟" }] },
      { e: "I think", a: "أنا أعتقد", d: "I think تستخدم لتقديم رأي شخصي. تأتي في بداية الجملة.", cl: ["I think Bangkok is better."], ms: [{ w: "I think so", c: "I think", n: "لتقديم رأي شخصي" }], us: [{ t: "في الرأي", e: "I think Bangkok is much better.", a: "أنا أعتقد أن بانكوك أحسن بكثير." }] },
      { e: "Much better", a: "أفضل بكثير", d: "much + صفة مقارنة لتقوية المقارنة. much better = أفضل بكثير.", cl: ["Bangkok is much better."], ms: [{ w: "more better", c: "much better", n: "much + صفة مقارنة" }], us: [{ t: "في المقارنة", e: "I think Bangkok is much better.", a: "أنا أعتقد أن بانكوك أحسن بكثير." }] },
      { e: "Because", a: "لأن", d: "لإعطاء السبب. تأتي في الإجابة عن سؤال Why.", cl: ["Because the shops are cheaper."], ms: [{ w: "so", c: "because", n: "because = سبب، so = نتيجة" }], us: [{ t: "في السبب", e: "Because the shops are much cheaper.", a: "لأن المحلات أرخص بكثير." }] },
      { e: "Many shops to choose from", a: "محلات كتير نختار منها", d: "many تُستخدم مع الأسماء المعدودة. choose from = نختار من.", cl: ["Many shops to choose from"], ms: [{ w: "much shops", c: "many shops", n: "shops معدودة فنستخدم many" }], us: [{ t: "في السؤال", e: "Does Bangkok have many shops to choose from?", a: "هل بانكوك فيها محلات كتير نختار منها؟" }] },
      { e: "Helpful", a: "مساعد", d: "صفة مشتقة من help. تصف الشخص الذي يساعد الآخرين.", cl: ["They're very helpful."], ms: [{ w: "helping", c: "helpful", n: "helpful = مساعد، helping = يساعد" }], us: [{ t: "في الوصف", e: "Are the Thai people helpful?", a: "هل الشعب التايلاندي مساعد؟" }] },
      { e: "Have we forgotten", a: "هل نسينا", d: "زمن المضارع التام: Have/Has + pp. Have forgotten تعبر عن شيء حدث في الماضي وله أثر في الحاضر.", cl: ["Have we forgotten to buy anything?"], ms: [{ w: "Did we forget", c: "Have we forgotten", n: "المضارع التام للحدث الذي له أثر" }], us: [{ t: "في السؤال", e: "Have we forgotten to buy anything?", a: "هل نسينا نشتري أي حاجة؟" }] },
      { e: "Forgot", a: "نسى", d: "ماضي forget. forgot تصريف ثانٍ للفعل forget. نستخدمه في الماضي البسيط.", cl: ["We forgot one item."], ms: [{ w: "forgotten", c: "forgot", n: "forgot = ماضي بسيط، forgotten = ماضي تام" }], us: [{ t: "في الرد", e: "Yes, we forgot one item.", a: "نعم، نسينا حاجة واحدة." }] },
      { e: "Do you really need", a: "هل فعلاً محتاج", d: "really تستخدم للتأكيد على السؤال. تُضاف بعد الفعل المساعد.", cl: ["Do you really need a guidebook?"], ms: [{ w: "Do you need really", c: "Do you really need", n: "really تأتي بعد الفعل المساعد" }], us: [{ t: "في التأكيد", e: "Do you really need a guidebook?", a: "هل فعلاً محتاج كتاب إرشادي؟" }] },
      { e: "A lot of", a: "كتير / كثير", d: "تُستخدم مع الأسماء المعدودة وغير المعدودة. a lot of shops = محلات كتير.", cl: ["There are a lot of different shops."], ms: [{ w: "a lots of", c: "a lot of", n: "lot بدون s" }], us: [{ t: "في العدد", e: "There are a lot of different shops.", a: "في محلات كتير مختلفة." }] }
    ],
    gram: [
      { t: "1. المقارنة بالصفات القصيرة (cheaper than)", d: "عند المقارنة بالصفات القصيرة (من حرف واحد أو حرفين) نضيف er + than. cheap → cheaper than.", ex: [{ e: "Is it cheaper than Kensington High Street?", a: "هل هو أرخص من شارع كينغزتون؟" }, { e: "The shops are much cheaper.", a: "المحلات أرخص بكثير." }], tp: "cheap (1yllable) → cheaper" },
      { t: "2. far في الأسئلة والنفي", d: "far من الكلمات التي تُستخدم في الأسئلة والنفي. نقول Is it far from here? ولا نقول Is it near? في الأسئلة.", ex: [{ e: "Is it far from here?", a: "هل هو بعيد من هنا؟" }, { e: "No, it's quite near.", a: "لا، هو قريب نوعاً ما." }], tp: "far = بعيد، near = قريب" },
      { t: "3. السؤال الذيلي (Tag Questions)", d: "للجملة المثبتة نستخدم نفي في السؤال الذيلي. London is expensive, isn't it?", ex: [{ e: "London is very expensive, isn't it?", a: "لندن غالية جداً، مش كده؟" }], tp: "مثبت + نفي" },
      { t: "4. أسلوب الطلب المهذب (Can we + please)", d: "نستخدم Can we + please للطلب المهذب. please تضيف تهذيباً للطلب.", ex: [{ e: "Can we go there please?", a: "ممكن نروح هناك من فضلك؟" }], tp: "Can we + please = طلب مهذب" },
      { t: "5. المضارع التام مع forgotten", d: "Have/Has + pp لحدث حدث في الماضي وله أثر في الحاضر.", ex: [{ e: "Have we forgotten to buy anything?", a: "هل نسينا نشتري أي حاجة؟" }, { e: "Yes, we forgot one item.", a: "نعم، نسينا حاجة واحدة." }], tp: "forgotten = pp، forgot = ماضي بسيط" },
      { t: "6. really للتأكيد", d: "t really تُستخدم للتأكيد على السؤال أو الإجابة. تأتي بعد الفعل المساعد.", ex: [{ e: "Do you really need a guidebook?", a: "هل فعلاً محتاج كتاب إرشادي؟" }, { e: "Yes, I really need a guidebook.", a: "نعم، أنا فعلاً محتاج كتاب إرشادي." }], tp: "really = فعلاً / حقاً" },
      { t: "7. many مع الأسماء المعدودة", d: "many تُستخدم مع الأسماء المعدودة (المعلمة بـ s). much مع غير المعدودة.", ex: [{ e: "Does Bangkok have many shops to choose from?", a: "هل بانكوك فيها محلات كتير نختار منها؟" }, { e: "There are a lot of different shops.", a: "في محلات كتير مختلفة." }], tp: "many + جمع معدود، much + غير معدود" }
    ],
    pron: [
      { w: "Cheaper than", t: "تنطق تشابَر ذان ب Stress على cheaper" },
      { w: "Far from here", t: "تنطق فار فروم هير بسرعة" },
      { w: "Quite near", t: "تنطق كوايت نير ب Stress على near" },
      { w: "Guidebook", t: "تنطق غادبوك كلمة واحدة" }
    ],
    cul: [
      { n: "King's Road في لندن شارع تسوق شهير" },
      { n: "Kensington High Street شارع تسوق غالي في لندن" },
      { n: "Bangkok أرخص من لندن بكثير في التسوق" },
      { n: "Thai = صفة جنسية تبدأ بحرف كبير دائماً" },
      { n: "Guidebook كلمة واحدة في أمريكا، كلمتين في بريطانيا" }
    ],
    ex: [
      { tp: "mcq", q: "كيف تسأل عن المسافة؟", a: "", o: ["Is it far from here?", "How far it is?", "Is it near?", "Where is it?"], c: 0 },
      { tp: "mcq", q: "ما كلمة المقارنة من cheap؟", a: "", o: ["cheaper", "cheapest", "more cheap", "cheaply"], c: 0 },
      { tp: "fill", q: "Is it ________ than Kensington High Street?", a: "أرخص من", an: "cheaper" },
      { tp: "reorder", q: "رتّب الجملة: هل بانكوك فيها محلات كتير؟", a: "does bangkok have many shops", w: ["does", "bangkok", "have", "many", "shops"] },
      { tp: "match", q: "طابق الكلمة بالمعنى", p: [["Cheaper", "أرخص"], ["Far from", "بعيد عن"], ["Quite near", "قريب نوعاً ما"], ["Because", "لأن"]] },
      { tp: "mcq", q: "ما الفرق بين many و much؟", a: "", o: ["many للعد، much للسعر", "much للعد، many للسعر", "كلاهما متساويان", "لا فرق"], c: 0 },
      { tp: "fill", q: "London is very expensive, ________ it?", a: "مش كده؟", an: "isn't" },
      { tp: "listen", q: "استمع واختر الإجابة", en: "Because the shops are much cheaper.", o: ["لأن المحلات أرخص بكثير", "لأن المحلات غالية", "لأن المحلات قريبة", "لأن المحلات كتير"], c: 0 },
      { tp: "translate", q: "ترجم: أنا أعتقد أن بانكوك أحسن", a: "", an: "i think bangkok is better" },
      { tp: "mcq", q: "ماذا تعني isn't it؟", a: "", o: ["مش كده؟", "أليس كذلك؟", "هل هو؟", "لا يوجد"], c: 0 },
      { tp: "egpt", q: "ازاي تسأل 'هل هي بعيدة من هنا' بالإنجليزي؟", hint: "فكر في: Is it far from here?", an: "is it far from here", ph: "اكتب الإنجليزي..." },
      { tp: "usage", q: "اكتب جملة باستخدام كلمة because", w: "because" }
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
    t: "النقاط السياحية والنقل العام",
    i: "🚌",
    w: 12,
    n: 7,
    dlg: [
      { s: "A", c: "#ff9100", e: "Would you like me to show you the public transport system?", a: "هل تحب أوريك نظام النقل العام؟" },
      { s: "B", c: "#00c853", e: "Yes, please. I'm a little tired.", a: "نعم من فضلك. أنا قليلاً متعب." },
      { s: "A", c: "#ff9100", e: "Okay then, let's go.", a: "تمام إذن، يلا بنا." },
      { s: "B", c: "#00c853", e: "Where are the museums located?", a: "المتاحف فين موجودة؟" },
      { s: "A", c: "#ff9100", e: "They are not far from here. They're on Exhibition Road.", a: "هم مش بعيد من هنا. هم على طريق المعرض." },
      { s: "B", c: "#00c853", e: "What is your favorite museum?", a: "المتحف المفضل عندك أيهم؟" },
      { s: "A", c: "#ff9100", e: "My favorite is the Science Museum.", a: "المتحف المفضل عندي المتحف العلمي." },
      { s: "B", c: "#00c853", e: "Is it an interesting place?", a: "هل هو مكان مثير للاهتمام؟" },
      { s: "A", c: "#ff9100", e: "Yes, it is. It has many interesting things.", a: "نعم. فيه أشياء كتير مثيرة للاهتمام." },
      { s: "B", c: "#00c853", e: "Do you think I would like it?", a: "هل تعتقد أنني سأعجب به؟" },
      { s: "A", c: "#ff9100", e: "Yes, I think you would like it a lot.", a: "نعم، أعتقد أنك ستعجب به جداً." },
      { s: "B", c: "#00c853", e: "Would you like to go there?", a: "هل تحب نروح هناك؟" },
      { s: "A", c: "#ff9100", e: "Sure, I'd love to!", a: "أكيد، أحب ذلك!" }
    ],
    voc: [
      { e: "Public transport", a: "النقل العام", d: "النقل العام أو الجماعي. مرادفات: Public Transit, Mass Transit.", cl: ["Public transport system", "Public transit systems"], ms: [{ w: "public transportation", c: "public transport", n: "transport و transportation صحيحتان" }], us: [{ t: "في السؤال", e: "Where is the public transport station?", a: "محطة النقل العام فين؟" }, { t: "في الوصف", e: "Public transport is efficient.", a: "النقل العام فعال." }] },
      { e: "Public Transit / Mass Transit", a: "مرادفات للنقل العام", d: "Mass transit systems are efficient. أنظمة النقل الجماعي فعالة.", cl: ["Mass transit systems are efficient"], ms: [{ w: "public transit", c: "mass transit", n: "كلاهما مرادف للنقل العام" }], us: [{ t: "في الوصف", e: "Mass transit systems are efficient.", a: "أنظمة النقل الجماعي فعالة." }] },
      { e: "Ready", a: "جاهز", d: "صفة تأتي بعد فعل الكينونة (am/is/are). Are you ready to leave?", cl: ["Are you ready to leave?", "I'm ready."], ms: [{ w: "ready to go", c: "ready", n: "ready = جاهز" }], us: [{ t: "في السؤال", e: "Are you ready to leave?", a: "هل أنت جاهز للذهاب؟" }, { t: "في الرد", e: "Yes, I'm ready.", a: "نعم، أنا جاهز." }] },
      { e: "Would you like...", a: "هل تحب... / هل تريد...", d: "تُستخدم للعرض أو الاقتراح بلطف. أكثر تهذيباً من Do you want.", cl: ["Would you like me to show you?", "Would you like to go there?"], ms: [{ w: "Do you want", c: "Would you like", n: "Would you like أرق وأكثر تهذيباً" }], us: [{ t: "في العرض", e: "Would you like me to show you the public transport system?", a: "هل تحب أوريك نظام النقل العام؟" }, { t: "في الاقتراح", e: "Would you like to go there?", a: "هل تحب نروح هناك؟" }] },
      { e: "A little tired", a: "قليلاً متعب", d: "A little تأتي قبل الصفة لتقليل درجتها. a little tired = قليلاً متعب.", cl: ["I'm a little tired"], ms: [{ w: "a little bit tired", c: "a little tired", n: "a little = قليلاً" }], us: [{ t: "في الوصف", e: "I'm a little tired.", a: "أنا قليلاً متعب." }] },
      { e: "Then", a: "إذاً", d: "تُستخدم للربط بين الجمل. Okay then, let's go = تمام إذن، يلا بنا.", cl: ["Okay then, let's go"], ms: [{ w: "so", c: "then", n: "then و so مترادفتان" }], us: [{ t: "في الربط", e: "Okay then, let's go.", a: "تمام إذن، يلا بنا." }] },
      { e: "Located", a: "يقع / تقع", d: "صفة من الفعل locate. Where are the museums located? = المتاحف فين موجودة؟", cl: ["Where are the museums located?"], ms: [{ w: "location", c: "located", n: "located = يقع، location = موقع" }], us: [{ t: "في السؤال", e: "Where are the museums located?", a: "المتاحف فين موجودة؟" }, { t: "في الإجابة", e: "They're located on Exhibition Road.", a: "هم موجودين على طريق المعرض." }] },
      { e: "Far from", a: "بعيد عن", d: "يُستخدم للتعبير عن المسافة. not far from here = مش بعيد من هنا.", cl: ["They are not far from here"], ms: [{ w: "far to", c: "far from", n: "نستخدم from مع far" }], us: [{ t: "في السؤال", e: "Is it far from here?", a: "هل هو بعيد من هنا؟" }, { t: "في الإجابة", e: "No, it's not far from here.", a: "لا، مش بعيد من هنا." }] },
      { e: "Exhibition Road", a: "طريق المعرض", d: "اسم شارع في لندن. The road is called Exhibition Road.", cl: ["The road is called Exhibition Road"], ms: [{ w: "exhibition", c: "exhibition", n: "exhibition = معرض" }], us: [{ t: "في الوصف", e: "The road is called Exhibition Road.", a: "الشارع اسمه طريق المعرض." }] },
      { e: "Named / Called", a: "يُسمى / يُطلق عليه", d: "يُستخدم لتسمية الأماكن والأسماء. The road is called... = الشارع اسمه...", cl: ["The road is called Exhibition Road", "It is named after..."], ms: [{ w: "named", c: "called", n: "called أكثر شيوعاً" }], us: [{ t: "في التسمية", e: "The road is called Exhibition Road.", a: "الشارع اسمه طريق المعرض." }, { t: "في السبب", e: "It is named after a famous scientist.", a: "يُسمى تكريماً لعالم مشهور." }] },
      { e: "Museum", a: "متحف", d: "مكان لعرض القطع التاريخية والعلمية. المتاحف في لندن كتير.", cl: ["Science Museum", "The museum is interesting"], ms: [{ w: "museums", c: "museum", n: "مفرده museum، جمعه museums" }], us: [{ t: "في السؤال", e: "What is your favorite museum?", a: "المتحف المفضل عندك أيهم؟" }, { t: "في الإجابة", e: "My favorite is the Science Museum.", a: "المتحف المفضل عندي المتحف العلمي." }] },
      { e: "Interesting", a: "مثير للاهتمام", d: "صفة لوصف الشيء المشوق. It is an interesting place = مكان مثير للاهتمام.", cl: ["It is an interesting place", "Many interesting things"], ms: [{ w: "interested", c: "interesting", n: "interested = مهتم، interesting = مثير للاهتمام" }], us: [{ t: "في الوصف", e: "It is an interesting place.", a: "هو مكان مثير للاهتمام." }, { t: "في الإضافة", e: "It has many interesting things.", a: "فيه أشياء كتير مثيرة للاهتمام." }] },
      { e: "Do you think I would like it?", a: "هل تعتقد أنني سأعجب به؟", d: "يُستخدم would بدل will للتخيل أو الاحتمال. I think you would like it = أعتقد أنك ستعجب به.", cl: ["Do you think I would like it?"], ms: [{ w: "Do you think I will like it?", c: "Do you think I would like it?", n: "would للتخيل والاحتمال" }], us: [{ t: "في السؤال", e: "Do you think I would like it?", a: "هل تعتقد أنني سأعجب به؟" }, { t: "في الإجابة", e: "Yes, I think you would like it a lot.", a: "نعم، أعتقد أنك ستعجب به جداً." }] }
    ],
    gram: [
      { t: "1. استخدام (A / An) مع الصفات", d: "تُوضع أداة التعريف قبل الصفة إذا كان الموصوف مفرد ومذكور. It is an interesting place / many interesting things.", ex: [{ e: "It is an interesting place.", a: "هو مكان مثير للاهتمام." }, { e: "It has many interesting things.", a: "فيه أشياء كتير مثيرة للاهتمام." }], tp: "A مع الأسماء المبتدئة بحرف ساكن، An مع الحروف الصوتية" },
      { t: "2. حذف الكلمة اختصاراً", d: "عدم تكرار الكلمة إذا كان السياق واضحاً. My favorite is the Science Museum (بدون تكرار museum).", ex: [{ e: "What is your favorite museum? — My favorite is the Science Museum.", a: "المتحف المفضل عندك أيهم؟ — المتحف المفضل عندي المتحف العلمي." }], tp: "لا نكرر museum في الإجابة" },
      { t: "3. التعبير عن التردد بذوق", d: "استخدام عبارات مهذبة بدلاً من الرفض الفج. I'm not sure (لست متأكداً) أو I'm a little tired (أنا قليلاً متعب).", ex: [{ e: "I'm a little tired.", a: "أنا قليلاً متعب." }], tp: "A little قبل الصفة لتقليل الدرجة" },
      { t: "4. الحالة الثانية للافتراض (would)", d: "يُستخدم would بدل will للتخيل أو الاحتمال أو الطلب المهذب. Do you think I would like it?", ex: [{ e: "Do you think I would like it?", a: "هل تعتقد أنني سأعجب به؟" }, { e: "Would you like me to show you?", a: "هل تحب أوريك؟" }], tp: "would للتخيل، will للحقيقة" },
      { t: "5. Would you like للعرض والاقتراح", d: "أكثر تهذيباً من Do you want. تُستخدم للعرض أو الدعوة بلطف.", ex: [{ e: "Would you like me to show you the public transport system?", a: "هل تحب أوريك نظام النقل العام؟" }, { e: "Would you like to go there?", a: "هل تحب نروح هناك؟" }], tp: "Would you like = هل تحب (أرق من Do you want)" },
      { t: "6. Located و Far from", d: "Located = يقع/يقع. Far from = بعيد عن. نستخدم These/They مع المتاحف لأنها جمع.", ex: [{ e: "Where are the museums located?", a: "المتاحف فين موجودة؟" }, { e: "They are not far from here.", a: "هم مش بعيد من هنا." }], tp: "They مع الجمع، It مع المفرد" },
      { t: "7. Named / Called للتسمية", d: "يُستخدم لتسمية الأماكن والأسماء. The road is called... = الشارع اسمه...", ex: [{ e: "The road is called Exhibition Road.", a: "الشارع اسمه طريق المعرض." }], tp: "called أكثر شيوعاً من named" }
    ],
    pron: [
      { w: "Public transport", t: "تنطق بابليك ترانسبورت ب Stress على المقطع الأول" },
      { w: "Exhibition", t: "تنطق ايكسهيبيشن ب Stress على the المقطع الثالث" },
      { w: "Would you like", t: "تنطق وود يو لايك بسرعة كجملة واحدة" },
      { w: "Museum", t: "تنطق ميوزيام ب Stress على the المقطع الثاني" }
    ],
    cul: [
      { n: "النقل العام في لندن: Undergound (المترو)، Bus (الحافلات)، Overground (القطار السطحي)" },
      { n: "Exhibition Road في لندن طريق مشهور يضم المتاحف العلمية" },
      { n: "Science Museum في لندن مجاني وشائع جداً" },
      { n: "British Museum (المتحف البريطاني) مجاني أيضاً" },
      { n: "في بريطانيا نقول Museum بلفظ ميوزيوم، وفي أمريكا ميوزيام" }
    ],
    ex: [
      { tp: "mcq", q: "كيف تسأل عن مكان المتاحف؟", a: "", o: ["Where are the museums located?", "Where are the museums?", "What is the museum?", "How are the museums?"], c: 0 },
      { tp: "mcq", q: "ما الفرق بين would و will؟", a: "", o: ["would للتخيل، will للحقيقة", "will للتخيل، would للحقيقة", "كلاهما متساويان", "لا فرق"], c: 0 },
      { tp: "fill", q: "Would you ________ me to show you?", a: "هل تحب أوريك", an: "like" },
      { tp: "reorder", q: "رتّب الجملة: المتاحف فين موجودة؟", a: "where are the museums located", w: ["where", "are", "the", "museums", "located"] },
      { tp: "match", q: "طابق الكلمة بالمعنى", p: [["Public transport", "النقل العام"], ["Located", "يقع/يقع"], ["Far from", "بعيد عن"], ["Interesting", "مثير للاهتمام"]] },
      { tp: "mcq", q: "ماذا تعني Would you like?", a: "", o: ["هل تحب / هل تريد", "هل تستطيع", "هل يجب", "هل أنت"], c: 0 },
      { tp: "fill", q: "It is ________ interesting place.", a: "مكان مثير للاهتمام", an: "an" },
      { tp: "listen", q: "استمع واختر الإجابة", en: "They are not far from here.", o: ["هم قريبين من هنا", "هم بعيد عن هنا", "هم موجودين هنا", "هم مش هنا"], c: 1 },
      { tp: "translate", q: "ترجم: هل تحب نروح هناك؟", a: "", an: "would you like to go there" },
      { tp: "mcq", q: "الscience Museum في لندن:", a: "", o: ["مجاني وشائع", "غالي جداً", "مغلق", "صغير"], c: 0 },
      { tp: "egpt", q: "ازاي تسأل 'المتاحف فين موجودة' بالإنجليزي؟", hint: "فكر في: Where are the museums located?", an: "where are the museums located", ph: "اكتب الإنجليزي..." },
      { tp: "usage", q: "اكتب جملة باستخدام كلمة museum", w: "museum" }
    ]
  },
  {
    id: 9,
    t: "ملخص المحادثة والنطق",
    i: "🎙️",
    w: 14,
    n: 5,
    dlg: [
      { s: "Officer", c: "#171717", e: "Good morning, sir. Could I see your passport and visa documentation?", a: "صباح الخير يا سيدي. هل يمكنني رؤية جواز سفرك ووثائق التأشيرة؟" },
      { s: "Traveler", c: "#0070f3", e: "Here you go.", a: "تفضل." },
      { s: "Officer", c: "#171717", e: "Do you have anything to declare?", a: "هل لديك أي شيء تصرح به؟" },
      { s: "Traveler", c: "#0070f3", e: "No, I do not have anything to declare.", a: "لا، ليس لدي ما أصرح به." },
      { s: "A", c: "#ff9100", e: "Where can we go?", a: "وين نقدر نروح؟" },
      { s: "B", c: "#00c853", e: "We can go to the King's Road.", a: "نقدر نروح طريق الملك." },
      { s: "A", c: "#ff9100", e: "Is it cheaper than Kensington High Street?", a: "هل هو أرخص من شارع كينغزتون العالي؟" },
      { s: "B", c: "#00c853", e: "Yes, it is cheaper.", a: "نعم، هو أرخص." },
      { s: "A", c: "#ff9100", e: "London is very expensive, isn't it?", a: "لندن غالية جداً، مش كده؟" },
      { s: "B", c: "#00c853", e: "I think Bangkok is much better.", a: "أنا أعتقد أن بانكوك أحسن بكثير." },
      { s: "C", c: "#7928ca", e: "Is it always cold in London?", a: "هل الجو بارد دائماً في لندن؟" },
      { s: "D", c: "#0070f3", e: "Yes, it is cold, especially in the winter.", a: "نعم، بارد، خاصة في الشتاء." },
      { s: "A", c: "#ff9100", e: "Which museum is your favorite?", a: "أي متحف هو المفضل لك؟" },
      { s: "B", c: "#00c853", e: "My favorite is the Science Museum.", a: "المفضل لي هو متحف العلوم." }
    ],
    voc: [
      { e: "Boarding pass", a: "بطاقة صعود الطائرة", d: "Noun. كلمة Boarding من الفعل board = يصード. pass هنا بمعنى تصريح.", cl: ["Here is my boarding pass"], ms: [{ w: "boarding card", c: "boarding pass", n: "card خطأ شائع" }], us: [{ t: "في المطار", e: "Here is my boarding pass.", a: "تفضل بطاقة الصعود." }] },
      { e: "Straight ahead", a: "إلى الأمام مباشرة", d: "Phrase. صيغة أمر. لا نستخدم to مع straight.", cl: ["Go straight ahead and then take a left"], ms: [{ w: "go to straight", c: "go straight ahead", n: "لا نستخدم to" }], us: [{ t: "في الإرشاد", e: "Go straight ahead and then take a left.", a: "امشي طوالي ثم اتجه يساراً." }] },
      { e: "Holiday", a: "عطلة / إجازة", d: "Noun. في بريطانيا نقول holiday بدلاً من vacation.", cl: ["Have you been on holiday in Bangkok?"], ms: [{ w: "vacation", c: "holiday", n: "holiday بريطاني، vacation أمريكي" }], us: [{ t: "في السؤال", e: "Have you been on holiday in Bangkok?", a: "هل كنتِ في عطلة في بانكوك؟" }] },
      { e: "Visa documentation", a: "أوراق/وثائق التأشيرة", d: "Noun. وثائق التأشيرة الرسمية.", cl: ["Could I see your passport and visa documentation?"], ms: [{ w: "visa papers", c: "visa documentation", n: "documentation أدق" }], us: [{ t: "في المطار", e: "Could I see your passport and visa documentation?", a: "هل يمكنني رؤية جواز سفرك ووثائق التأشيرة؟" }] },
      { e: "Declare", a: "يُصرّح", d: "Verb. تُستخدم عادة في الجمارك للإفصاح عن الأشياء المحمولة.", cl: ["Do you have anything to declare?"], ms: [{ w: "say", c: "declare", n: "declare رسمى وجماركي" }], us: [{ t: "في الجمارك", e: "Do you have anything to declare?", a: "هل لديك أي شيء تصرح به؟" }] },
      { e: "Baggage claim", a: "مكان استلام الأمتعة", d: "Noun. المكان الذي تستلم فيه شنطك بعد الرحلة.", cl: ["Where is the baggage claim?"], ms: [{ w: "baggage take", c: "baggage claim", n: "المصطلح الصحيح baggage claim" }], us: [{ t: "في المطار", e: "Where is the baggage claim?", a: "أين مكان استلام الأمتعة؟" }] },
      { e: "Direct flight", a: "رحلة طيران مباشرة", d: "Noun. رحلة بدون توقف ترانزيت في الطريق.", cl: ["It was quite a long flight... was it a direct flight?"], ms: [{ w: "straight flight", c: "direct flight", n: "المصطلح الصحيح direct flight" }], us: [{ t: "في السؤال", e: "Was it a direct flight?", a: "هل كانت رحلة مباشرة؟" }] },
      { e: "Light traffic", a: "حركة مرور خفيفة", d: "Noun. حركة مرور غير مزدحمة.", cl: ["The traffic should be light."], ms: [{ w: "small traffic", c: "light traffic", n: "المرور الخفيف يسمى light traffic" }], us: [{ t: "في الوصف", e: "The traffic should be light.", a: "من المفترض أن يكون المرور خفيفاً." }] },
      { e: "Trousers", a: "بنطال", d: "Noun. استخدام بريطاني. في أمريكا نقول pants.", cl: ["I need to get some shirts, trousers, and a warm jacket."], ms: [{ w: "pants", c: "trousers", n: "trousers بريطاني، pants أمريكي" }], us: [{ t: "في التسوق", e: "I need to get some trousers.", a: "محتاج أشتري بنطلون." }] },
      { e: "Guidebook", a: "كتاب إرشادي", d: "Noun. كتاب للسياح. كلمة واحدة في أمريكا، كلمتين في بريطانيا.", cl: ["I need to buy a guidebook about London."], ms: [{ w: "guide book", c: "guidebook", n: "في أمريكا كلمة واحدة" }], us: [{ t: "في التسوق", e: "I need to buy a guidebook about London.", a: "محتاج أشتري كتاب إرشادي عن لندن." }] },
      { e: "Expensive", a: "غالي الثمن", d: "Adjective. صفة لوصف الأسعار العالية.", cl: ["London is very expensive, isn't it?"], ms: [{ w: "expensify", c: "expensive", n: "expensive = غالي" }], us: [{ t: "في الوصف", e: "London is very expensive.", a: "لندن غالية جداً." }] },
      { e: "Exhibition", a: "معرض", d: "Noun. مكان لعرض القطع الفنية أو العلمية.", cl: ["The road is called Exhibition Road."], ms: [{ w: "exhibition", c: "exhibition", n: "exhibition = معرض" }], us: [{ t: "في التسمية", e: "The road is called Exhibition Road.", a: "الشارع اسمه طريق المعرض." }] },
      { e: "Natural History Museum", a: "متحف التاريخ الطبيعي", d: "Noun. أحد أشهر المتاحف في لندن.", cl: ["I think you would like the Natural History Museum more."], ms: [{ w: "history museum", c: "natural history museum", n: "natural history = تاريخ طبيعي" }], us: [{ t: "في التوصية", e: "I think you would like the Natural History Museum more.", a: "أعتقد أنك ستعجب بمتحف التاريخ الطبيعي أكثر." }] },
      { e: "Public transport", a: "وسائل النقل العامة", d: "Noun. النقل العام أو الجماعي.", cl: ["Would you like me to show you the public transport system?"], ms: [{ w: "public transportation", c: "public transport", n: "transport و transportation صحيحتان" }], us: [{ t: "في العرض", e: "Would you like me to show you the public transport system?", a: "هل تحب أوريك نظام النقل العام؟" }] }
    ],
    gram: [
      { t: "1. Present Continuous for Future", d: "استخدام (am/is/are + v.ing) للتعبير عن خطط مستقبلية تم الترتيب لها مسبقاً.", ex: [{ e: "I am going to visit my friend.", a: "أنا ذاهب لزيارة صديقي." }, { e: "I am going to stay with my friends.", a: "سأقيم مع أصدقائي." }], tp: "المضارع المستمر للخطط المستقبلية المؤكدة" },
      { t: "2. Question Tags (الأسئلة المذيلة)", d: "سؤال قصير في نهاية الجملة للتوكيد. معناه (أليس كذلك؟) يُعكس فيه النفي والإثبات.", ex: [{ e: "London is very expensive, isn't it?", a: "لندن غالية جداً، مش كده؟" }], tp: "مثبت + نفي، نفي + إثبات" },
      { t: "3. Comparatives (صيغة المقارنة)", d: "استخدام much و a little bit قبل صفة المقارنة لبيان مقدار الفارق.", ex: [{ e: "Is it cheaper than Kensington?", a: "هل هو أرخص من كينغزتون؟" }, { e: "Bangkok is much better.", a: "بانكوك أحسن بكثير." }], tp: "much + صفة مقارنة لتقوية الفارق" },
      { t: "4. Present Perfect (المضارع التام)", d: "يستخدم للسؤال عن تجارب سابقة دون تحديد الوقت (Have + Past Participle).", ex: [{ e: "Have you been on holiday in Bangkok?", a: "هل كنت في عطلة في بانكوك؟" }, { e: "Have we forgotten to buy anything?", a: "هل نسينا نشتري أي حاجة؟" }], tp: "للتجارب بدون تحديد وقت" },
      { t: "5. Polite Requests (الطلبات المهذبة)", d: "استخدام (Could I) لطلب شيء بأدب، و (Would you like) للعرض.", ex: [{ e: "Could I see your passport?", a: "هل يمكنني رؤية جوازك؟" }, { e: "Would you like me to show you the public transport?", a: "هل تحب أوريك النقل العام؟" }], tp: "Could I أرق من Can I" }
    ],
    pron: [
      { w: "Boarding pass", t: "تنطق بوردنغ باس ب Stress على boarding" },
      { w: "Baggage claim", t: "تنطق باغيج كليم متصلة" },
      { w: "Trousers", t: "تنطق تراوزرز بالإنجليزية البريطانية" },
      { w: "Exhibition", t: "تنطق ايكسهيبيشن ب Stress على the المقطع الثالث" }
    ],
    cul: [
      { n: "Kensington High Street شارع تسوق غالي في لندن" },
      { n: "King's Road شارع تسوق شهير وأرخص من كينغزتون" },
      { n: "في بريطانيا نقول Holiday بدلاً من Vacation" },
      { n: "في بريطانيا نقول Trousers بدلاً من Pants" },
      { n: "Natural History Museum في لندن مجاني وشائع جداً" }
    ],
    ex: [
      { tp: "mcq", q: "ماذا تقول عند تسليم جواز سفرك؟", a: "تفضل", o: ["Here it is", "Go straight", "Take a left", "Enjoy it"], c: 0 },
      { tp: "mcq", q: "ما معنى Straight ahead؟", a: "", o: ["إلى الأمام مباشرة", "اتجه يميناً", "ارجع للخلف", "افتح الباب"], c: 0 },
      { tp: "fill", q: "Have you been on ________ in Bangkok?", a: "هل كنت في عطلة", an: "holiday" },
      { tp: "reorder", q: "رتّب الجملة: هل يمكنك رؤية جواز سفرك؟", a: "could i see your passport", w: ["could", "i", "see", "your", "passport"] },
      { tp: "match", q: "طابق الكلمة بالمعنى", p: [["Boarding pass", "بطاقة صعود"], ["Baggage claim", "مكان استلام الأمتعة"], ["Trousers", "بنطال"], ["Guidebook", "كتاب إرشادي"]] },
      { tp: "mcq", q: "ما الفرق بين holiday و vacation؟", a: "", o: ["holiday بريطاني، vacation أمريكي", "vacation بريطاني، holiday أمريكي", "كلاهما متساويان", "لا فرق"], c: 0 },
      { tp: "fill", q: "London is very expensive, ________ it?", a: "مش كده؟", an: "isn't" },
      { tp: "listen", q: "استمع واختر المعنى الصحيح", en: "Do you have anything to declare?", o: ["هل لديك جواز سفر؟", "هل لديك أي شيء تصرح به؟", "هل أنت جاهز؟", "هل تريد شيء؟"], c: 1 },
      { tp: "translate", q: "ترجم: هل يمكنك رؤية جواز سفرك ووثائق التأشيرة؟", a: "", an: "could i see your passport and visa documentation" },
      { tp: "mcq", q: "الNatural History Museum في لندن:", a: "", o: ["مجاني وشائع", "غالي جداً", "مغلق", "صغير"], c: 0 },
      { tp: "egpt", q: "ازاي تسأل 'هل لديك أي شيء تصرح به' بالإنجليزي؟", hint: "فكر في: Do you have anything to declare?", an: "do you have anything to declare", ph: "اكتب الإنجليزي..." },
      { tp: "usage", q: "اكتب جملة باستخدام كلمة holiday", w: "holiday" }
    ]
  },
  {
    id: 101,
    t: "وصفة الأومليت",
    i: "🍳",
    w: 11,
    n: 3,
    dlg: [
      { s: "Narrator", c: "#171717", e: "Mike likes omelets.", a: "مايك يحب الأومليت." },
      { s: "Narrator", c: "#171717", e: "They are easy and fun to prepare.", a: "هي سهلة وممتعة في التحضير." },
      { s: "Narrator", c: "#171717", e: "He heats butter in a pan on the stove.", a: "يسخن الزبدة في طاسة على البوتاجاز." },
      { s: "Narrator", c: "#171717", e: "He mixes milk, 3 eggs, salt, and pepper in a bowl.", a: "يخلط اللبن و3 بيضات وملح وفلفل في وعاء." },
      { s: "Narrator", c: "#171717", e: "He cooks the mix in the pan for 2 minutes.", a: "يطبخ المزيج في الطاسة لمدة دقيقتين." },
      { s: "Narrator", c: "#171717", e: "Then he adds cheese.", a: "ثم يضيف الجبن." },
      { s: "Narrator", c: "#171717", e: "He turns off the stove.", a: "يطفئ البوتاجاز." },
      { s: "Narrator", c: "#171717", e: "He folds the omelet in half.", a: "يطوي الأومليت إلى نصفين." },
      { s: "Narrator", c: "#171717", e: "Enjoy, yum!", a: "بالهناء والشفاء، لذيذ!" }
    ],
    voc: [
      { e: "Omelet / Omelette", a: "أومليت / عجة بيض", d: "تُكتب أحياناً بـ 2 t في الإنجليزية البريطانية (Omelettes).", cl: ["Mike likes omelets", "The omelet is ready"], ms: [{ w: "omelette", c: "omelet", n: "omelet أمريكي، omelette بريطاني" }], us: [{ t: "في الطبخ", e: "I love making omelets for breakfast.", a: "بحب أعمل أومليت على الفطار." }] },
      { e: "Prepare", a: "يجهز / يحضر", d: "تُستخدم للتعبير عن الاستعداد لعمل شيء ما.", cl: ["Easy to prepare", "How do you prepare it?"], ms: [{ w: "cooking", c: "prepare", n: "prepare أعم من cooking" }], us: [{ t: "في الوصف", e: "They are easy and fun to prepare.", a: "هي سهلة وممتعة في التحضير." }] },
      { e: "Stove", a: "موقد / بوتاجاز", d: "الجهاز المستخدم للطهي وتسخين الأواني.", cl: ["On the stove", "Turn off the stove"], ms: [{ w: "cooker", c: "stove", n: "stove = الموقد فقط" }], us: [{ t: "في المطبخ", e: "He heats butter in a pan on the stove.", a: "يسخن الزبدة في طاسة على البوتاجاز." }] },
      { e: "Pan", a: "طاسة / مقلاة", d: "الإناء المسطح المستخدم للقلي والطهي السريع.", cl: ["In a pan", "Frying pan"], ms: [{ w: "pot", c: "pan", n: "pot = قدر، pan = طاسة مسطحة" }], us: [{ t: "في الطبخ", e: "He cooks the mix in the pan.", a: "يطبخ المزيج في الطاسة." }] },
      { e: "Stir", a: "يقلب / يخلط", d: "حركة تقليب المكونات معاً.", cl: ["Stir the mixture", "Stir well"], ms: [{ w: "mix", c: "stir", n: "stir = تحريك، mix = دمج" }], us: [{ t: "في الطبخ", e: "Stir the eggs in a bowl.", a: "قلب البيض في وعاء." }] },
      { e: "Butter", a: "زبدة / يدهن بالزبدة", d: "مادة دهنية تستخدم في الطبخ وإعطاء نكهة.", cl: ["Heat butter", "Add butter"], ms: [{ w: "oil", c: "butter", n: "butter = زبدة، oil = زيت" }], us: [{ t: "في الطبخ", e: "He heats butter in a pan.", a: "يسخن الزبدة في طاسة." }] },
      { e: "Mix", a: "يخلط / مزيج", d: "دمج عدة عناصر معاً.", cl: ["The mix", "Mix well"], ms: [{ w: "mixing", c: "mix", n: "mix = يخلط، mixture = مزيج" }], us: [{ t: "في الطبخ", e: "He mixes milk and eggs.", a: "يخلط اللبن والبيض." }] },
      { e: "Salt", a: "ملح", d: "منكه أساسي للطعام.", cl: ["Add salt", "Salt and pepper"], ms: [{ w: "salty", c: "salt", n: "salt = ملح، salty = مملح" }], us: [{ t: "في الطبخ", e: "Add salt and pepper.", a: "أضف ملح وفلفل." }] },
      { e: "Bowl", a: "وعاء / سلطانية", d: "إناء عميق لخلط المكونات (مثل وعاء خفق البيض).", cl: ["In a bowl", "Mixing bowl"], ms: [{ w: "plate", c: "bowl", n: "plate = طبق، bowl = وعاء عميق" }], us: [{ t: "في المطبخ", e: "Mix in a bowl.", a: "اخلط في وعاء." }] },
      { e: "Ingredients", a: "مكونات", d: "العناصر أو المواد الداخلة في وصفة طهي. كلمة جمع دائماً.", cl: ["The ingredients", "Fresh ingredients"], ms: [{ w: "ingredient", c: "ingredients", n: "ingredient = مكون واحد" }], us: [{ t: "في الطبخ", e: "What ingredients do we need?", a: "إيه المكونات اللي محتاجينها؟" }] },
      { e: "Recipe", a: "وصفة طهي", d: "الخطوات والمقادير اللازمة لتحضير طعام معين.", cl: ["A recipe", "Follow the recipe"], ms: [{ w: "receipt", c: "recipe", n: "receipt = فاتورة، recipe = وصفة" }], us: [{ t: "في الطبخ", e: "This is an easy recipe.", a: "دي وصفة سهلة." }] }
    ],
    gram: [
      { t: "1. المضارع البسيط مع الفاعل المفرد", d: "يُستخدم للتعبير عن الحقائق والعادات اليومية. مع الفاعل المفرد (He, She, It، أو اسم مفرد مثل Mike)، نضيف حرف s أو es لنهاية الفعل.", ex: [{ e: "Mike likes omelets.", a: "مايك يحب الأومليت." }, { e: "He heats butter.", a: "يسخن الزبدة." }, { e: "He mixes milk.", a: "يخلط اللبن." }], tp: "لا يضاف حرف s إذا كان الفاعل جمعاً أو (I, We, They, You)" },
      { t: "2. نطق أداة التعريف The", d: "أداة التعريف The تنطق بشكل طبيعي (ذا) إذا جاء بعدها حرف ساكن، ولكن إذا جاء بعدها كلمة تبدأ بصوت متحرك (مثل A, E, I, O, U) فإنها تُنطق (ذي).", ex: [{ e: "the omelet (تُنطق: ذي أومليت)", a: "لأن كلمة omelet تبدأ بحرف متحرك (o)." }], tp: "قاعدة صوتية ممتازة لتبدو متحدثاً طبيعياً" },
      { t: "3. الأفعال المركبة (Phrasal Verbs)", d: "تكون الفعل من جزأين (فعل + حرف جر أو ظرف) ليعطي معنى جديداً مستقلاً تماماً.", ex: [{ e: "turn off (يطفئ جهاز أو نور)", a: "He turns off the stove." }], tp: "تتكرر كثيراً في الإنجليزية ويجب حفظها كوحدة واحدة" }
    ],
    pron: [
      { w: "Omelet", t: "تنطق أومليت بال Stress على المقطع الأول" },
      { w: "Stove", t: "تنطق ستوف بحرف o مفتوح" },
      { w: "Ingredients", t: "تنطق إنغريدينتس بال Stress على the الثاني" }
    ],
    cul: [
      { n: "الأومليت (Omelet) طبق فرنسي شهير يُحضر بالبيض والخضار والجبنة" },
      { n: "في أمريكا يقولين turn off البوتاجاز، وفي بريطانيا say switch off" },
      { n: "البيض مع الجبن من أكثر الوجبات السريعة شيوعاً في الغرب" }
    ],
    ex: [
      { tp: "mcq", q: "ماذا يفعل مايك؟", a: "", o: ["يحب الأومليت", "يكره الطبخ", "يعمل شاي", "يأكل خبز"], c: 0 },
      { tp: "mcq", q: "ماذا يسخن مايك في الطاسة؟", a: "", o: ["زيت", "زبدة", "حليب", "ماء"], c: 1 },
      { tp: "fill", q: "He ________ milk, 3 eggs, salt, and pepper.", a: "يخلط", an: "mixes" },
      { tp: "reorder", q: "رتّب: يطبخ المزيج في الطاسة", a: "he cooks the mix in the pan", w: ["he", "cooks", "the", "mix", "in", "the", "pan"] },
      { tp: "match", q: "طابق الكلمة بالمعنى", p: [["Omelet", "أومليت"], ["Stove", "بوتاجاز"], ["Butter", "زبدة"], ["Bowl", "وعاء"]] },
      { tp: "fill", q: "He turns ________ the stove.", a: "يطفئ", an: "off" },
      { tp: "mcq", q: "ما هي المكونات؟", a: "", o: ["البيض والحليب والملح", "الخبز والزبدة", "الأرز واللحم", "الفاكهة"], c: 0 },
      { tp: "listen", q: "استمع واختر الإجابة", en: "Mike likes omelets.", o: ["مايك يكره الأومليت", "مايك يحب الأومليت", "مايك يطبخ الأومليت", "مايك يشتري الأومليت"], c: 1 },
      { tp: "translate", q: "ترجم: يسخن الزبدة في طاسة على البوتاجاز", a: "", an: "he heats butter in a pan on the stove" },
      { tp: "mcq", q: "ماذا يعني turn off؟", a: "", o: ["يشغّل", "يطفئ", "يفتح", "يغلق"], c: 1 },
      { tp: "egpt", q: "ازاي تقول 'مايك يحب الأومليت' بالإنجليزي؟", hint: "فكر في: Mike likes omelets", an: "mike likes omelets", ph: "اكتب الإنجليزي..." },
      { tp: "usage", q: "اكتب جملة باستخدام كلمة prepare", w: "prepare" }
    ]
  },
  {
    id: 102,
    t: "يوم عادي في لندن",
    i: "🇬🇧",
    w: 14,
    n: 5,
    dlg: [
      { s: "Narrator", c: "#171717", e: "Tom lives in London.", a: "توم يعيش في لندن." },
      { s: "Narrator", c: "#171717", e: "He wakes up at 7 o'clock every morning.", a: "يستيقظ الساعة 7 كل صباح." },
      { s: "Narrator", c: "#171717", e: "He has breakfast with his family.", a: "يأكل فطور مع عائلته." },
      { s: "Narrator", c: "#171717", e: "Then he takes the underground to work.", a: "ثم يأخذ المترو للعمل." },
      { s: "Narrator", c: "#171717", e: "The underground is very busy at 8 o'clock.", a: "المترو مزدحم جداً الساعة 8." },
      { s: "Narrator", c: "#171717", e: "Tom works in an office near Oxford Street.", a: "توم يعمل في مكتب قريب من شارع أكسفورد." },
      { s: "Narrator", c: "#171717", e: "He likes his job because it is interesting.", a: "يحب وظيفته لأنها مثيرة للاهتمام." },
      { s: "Narrator", c: "#171717", e: "For lunch, he usually eats a sandwich.", a: "للغداء، عادةً يأكل ساندويتش." },
      { s: "Narrator", c: "#171717", e: "After work, he goes to the gym.", a: "بعد العمل، يذهب إلى الجيم." },
      { s: "Narrator", c: "#171717", e: "In the evening, he watches TV or reads a book.", a: "بالمساء، يشاهد التلفاز أو يقرأ كتاباً." },
      { s: "Narrator", c: "#171717", e: "He goes to bed at 11 o'clock.", a: "يذهب للنوم الساعة 11." },
      { s: "Narrator", c: "#171717", e: "Tom has a happy life in London.", a: "توم يعيش حياة سعيدة في لندن." }
    ],
    voc: [
      { e: "Wake up", a: "يستيقظ", d: "فعل مركب (Phrasal Verb). يستيقظ من النوم.", cl: ["He wakes up at 7"], ms: [{ w: "get up", c: "wake up", n: "wake up = يستيقظ، get up = ينهض" }], us: [{ t: "في الصباح", e: "I wake up at 6 o'clock.", a: "أستيقظ الساعة 6." }] },
      { e: "Underground", a: "مترو أنفاق", d: "المترو في لندن. يُسمى also Tube.", cl: ["Take the underground"], ms: [{ w: "subway", c: "underground", n: "underground بريطاني، subway أمريكي" }], us: [{ t: "في النقل", e: "He takes the underground to work.", a: "يأخذ المترو للعمل." }] },
      { e: "Busy", a: "مزدحم / مشغول", d: "صفة تصف المكان المكتظ أو الشخص المشغول.", cl: ["The underground is very busy"], ms: [{ w: "crowded", c: "busy", n: "busy = مشغول، crowded = مكتظ" }], us: [{ t: "في الوصف", e: "The underground is very busy at 8.", a: "المترو مزدحم جداً الساعة 8." }] },
      { e: "Office", a: "مكتب", d: "مكان العمل الداخلي.", cl: ["He works in an office"], ms: [{ w: "work", c: "office", n: "work = عمل، office = مبنى المكتب" }], us: [{ t: "في العمل", e: "He works in an office near Oxford Street.", a: "يعمل في مكتب قريب من شارع أكسفورد." }] },
      { e: "Interesting", a: "مثير للاهتمام", d: "صفة لوصف الشيء المشوق والممتع.", cl: ["It is interesting"], ms: [{ w: "interested", c: "interesting", n: "interested = مهتم، interesting = مثير" }], us: [{ t: "في الوصف", e: "He likes his job because it is interesting.", a: "يحب وظيفتها لأنها مثيرة للاهتمام." }] },
      { e: "Sandwich", a: "ساندويتش", d: "وجبة خفيفة من الخبز والحشوة.", cl: ["Eats a sandwich"], ms: [{ w: "burger", c: "sandwich", n: "sandwich أوسع من burger" }], us: [{ t: "في الطعام", e: "He usually eats a sandwich for lunch.", a: "عادةً يأكل ساندويتش للغداء." }] },
      { e: "Gym", a: "جيم / صالة رياضية", d: "مكان لممارسة الرياضة.", cl: ["Goes to the gym"], ms: [{ w: "sport", c: "gym", n: "gym = المبنى، sport = النشاط" }], us: [{ t: "في الرياضة", e: "After work, he goes to the gym.", a: "بعد العمل، يذهب إلى الجيم." }] },
      { e: "Evening", a: "مساء", d: "الفترة من العصر إلى النوم.", cl: ["In the evening"], ms: [{ w: "night", c: "evening", n: "evening = مساء مبكر، night = ليل" }], us: [{ t: "في الوقت", e: "In the evening, he watches TV.", a: "بالمساء، يشاهد التلفاز." }] },
      { e: "Watch TV", a: "يشاهد التلفاز", d: "تعبير للترفيه.", cl: ["He watches TV"], ms: [{ w: "see TV", c: "watch TV", n: "نستخدم watch مع التلفاز" }], us: [{ t: "في الترفيه", e: "He watches TV or reads a book.", a: "يشاهد التلفاز أو يقرأ كتاباً." }] },
      { e: "Go to bed", a: "يذهب للنوم", d: "تعبير شائع للنوم.", cl: ["He goes to bed at 11"], ms: [{ w: "sleep", c: "go to bed", n: "go to bed = يذهب للنوم" }], us: [{ t: "في النوم", e: "He goes to bed at 11 o'clock.", a: "يذهب للنوم الساعة 11." }] }
    ],
    gram: [
      { t: "1. المضارع البسيط مع He", d: "نضيف s لنهاية الفعل مع He/She/It. wake → wakes, take → takes, work → works.", ex: [{ e: "He wakes up at 7.", a: "يستيقظ الساعة 7." }, { e: "He takes the underground.", a: "يأخذ المترو." }], tp: "لا تنس s مع الفاعل المفرد" },
      { t: "2. عادات اليوم (Daily Routines)", d: "نستخدم المضارع البسيط للعادات اليومية مع كلمات waktu مثل every day, usually, always.", ex: [{ e: "He usually eats a sandwich.", a: "عادةً يأكل ساندويتش." }, { e: "He goes to the gym after work.", a: "يذهب للجيم بعد العمل." }], tp: "usually = عادةً، always = دائماً، sometimes = أحياناً" },
      { t: "3. حروف الجر للوقت", d: "at + وقت محدد، in + فترة (morning, evening)، on + يوم.", ex: [{ e: "At 7 o'clock", a: "الساعة 7" }, { e: "In the evening", a: "بالمساء" }], tp: "at 7, in the morning, on Monday" }
    ],
    pron: [
      { w: "Underground", t: "تنطق أندِرغراوند بال Stress على المقطع الثاني" },
      { w: "Sandwich", t: "تنطق ساندويتش مش ساندويتش" },
      { w: "Usually", t: "تنطق يوزويلي بال Stress على المقطع الأول" }
    ],
    cul: [
      { n: "المترو في لندن (The Underground) أقدم مترو في العالم (1863)" },
      { n: "شارع أكسفورد أشهر شارع تسوق في لندن" },
      { n: "ال brits يأكلون sandwich للغداء بشكل يومي" },
      { n: "الجيم (Gym) شائع جداً في بريطانيا وأمريكا" }
    ],
    ex: [
      { tp: "mcq", q: "أين يعيش توم؟", a: "", o: ["في لندن", "في باريس", "في نيويورك", "في القاهرة"], c: 0 },
      { tp: "mcq", q: "متى يستيقظ توم؟", a: "", o: ["الساعة 6", "الساعة 7", "الساعة 8", "الساعة 9"], c: 1 },
      { tp: "fill", q: "He ________ the underground to work.", a: "يأخذ", an: "takes" },
      { tp: "reorder", q: "رتّب: يذهب للجيم بعد العمل", a: "he goes to the gym after work", w: ["he", "goes", "to", "the", "gym", "after", "work"] },
      { tp: "match", q: "طابق الكلمة بالمعنى", p: [["Underground", "مترو أنفاق"], ["Busy", "مزدحم"], ["Gym", "جيم رياضي"], ["Sandwich", "ساندويتش"]] },
      { tp: "fill", q: "He ________ up at 7 o'clock.", a: "يستيقظ", an: "wakes" },
      { tp: "mcq", q: "لماذا يحب توم وظيفته؟", a: "", o: ["لأنها سهلة", "لأنها مثيرة للاهتمام", "لأنها قريبة", "لأنها غالية"], c: 1 },
      { tp: "listen", q: "استمع واختر الإجابة", en: "He goes to bed at 11 o'clock.", o: ["يستيقظ الساعة 11", "يذهب للنوم الساعة 11", "يأكل العشاء الساعة 11", "يذهب للعمل الساعة 11"], c: 1 },
      { tp: "translate", q: "ترجم: يستيقظ الساعة 7 كل صباح", a: "", an: "he wakes up at 7 o'clock every morning" },
      { tp: "mcq", q: "ماذا يأكل توم للغداء عادةً؟", a: "", o: ["أومليت", "ساندويتش", "pizza", "سلطة"], c: 1 },
      { tp: "egpt", q: "ازاي تقول 'يذهب للنوم الساعة 11' بالإنجليزي؟", hint: "فكر في: He goes to bed at 11", an: "he goes to bed at 11", ph: "اكتب الإنجليزي..." },
      { tp: "usage", q: "اكتب جملة باستخدام كلمة underground", w: "underground" }
    ]
  },
  {
    id: 103,
    t: "عائلتي وأصدقائي",
    i: "👨‍👩‍👧‍👦",
    w: 16,
    n: 5,
    dlg: [
      { s: "Narrator", c: "#171717", e: "This is my family.", a: "هذه عائلتي." },
      { s: "Narrator", c: "#171717", e: "My father is a doctor.", a: "أبي طبيب." },
      { s: "Narrator", c: "#171717", e: "My mother is a teacher.", a: "أمي معلمة." },
      { s: "Narrator", c: "#171717", e: "I have two brothers and one sister.", a: "لدي أخوان وأخت واحدة." },
      { s: "Narrator", c: "#171717", e: "My brothers are older than me.", a: "أخواني أكبر مني." },
      { s: "Narrator", c: "#171717", e: "My sister is younger than me.", a: "أختي أصغر مني." },
      { s: "Narrator", c: "#171717", e: "We live in a big house.", a: "نعيش في بيت كبير." },
      { s: "Narrator", c: "#171717", e: "We have a garden with many flowers.", a: "لدينا حديقة بالورود." },
      { s: "Narrator", c: "#171717", e: "My best friend is Ahmed.", a: "صديقي المفضل أحمد." },
      { s: "Narrator", c: "#171717", e: "He lives next to my house.", a: "يسكن بجانب بيتي." },
      { s: "Narrator", c: "#171717", e: "We go to school together every day.", a: "نذهب للمدرسة معاً كل يوم." },
      { s: "Narrator", c: "#171717", e: "Ahmed likes football and I like basketball.", a: "أحمد يحب الكورة وأنا أحب كرة السلة." },
      { s: "Narrator", c: "#171717", e: "After school, we play in the park.", a: "بعد المدرسة، نلعب في الحديقة." },
      { s: "Narrator", c: "#171717", e: "We always have a great time together.", a: "دائماً نقضي وقتاً رائعاً معاً." }
    ],
    voc: [
      { e: "Father", a: "أب", d: "بديل رسمي لـ Dad.", cl: ["My father is a doctor"], ms: [{ w: "dad", c: "father", n: "father رسمي، dad عامي" }], us: [{ t: "في التعريف", e: "My father is a doctor.", a: "أبي طبيب." }] },
      { e: "Mother", a: "أم", d: "بديل رسمي لـ Mum/Mom.", cl: ["My mother is a teacher"], ms: [{ w: "mom", c: "mother", n: "mother رسمي، mom أميريكي، mum بريطاني" }], us: [{ t: "في التعريف", e: "My mother is a teacher.", a: "أمي معلمة." }] },
      { e: "Brother", a: "أخ", d: "ذكر من نفس الأبوين.", cl: ["I have two brothers"], ms: [{ w: "bro", c: "brother", n: "bro عامي لـ brother" }], us: [{ t: "في العائلة", e: "I have two brothers.", a: "لدي أخوان." }] },
      { e: "Sister", a: "أخت", d: "أنثى من نفس الأبوين.", cl: ["My sister is younger"], ms: [{ w: "sis", c: "sister", n: "sis عامي لـ sister" }], us: [{ t: "في العائلة", e: "My sister is younger than me.", a: "أختي أصغر مني." }] },
      { e: "Older", a: "أكبر (سناً)", d: "مقارنة من old. أكبر من = older than.", cl: ["My brothers are older than me"], ms: [{ w: "bigger", c: "older", n: "older للعمر، bigger للحجم" }], us: [{ t: "في المقارنة", e: "My brothers are older than me.", a: "أخواني أكبر مني." }] },
      { e: "Younger", a: "أصغر (سناً)", d: "مقارنة من young. أصغر من = younger than.", cl: ["My sister is younger than me"], ms: [{ w: "smaller", c: "younger", n: "younger للعمر، smaller للحجم" }], us: [{ t: "في المقارنة", e: "My sister is younger than me.", a: "أختي أصغر مني." }] },
      { e: "House", a: "بيت / منزل", d: "مكان الإقامة الدائم.", cl: ["We live in a big house"], ms: [{ w: "home", c: "house", n: "house = المبنى، home = المكان" }], us: [{ t: "في السكن", e: "We live in a big house.", a: "نعيش في بيت كبير." }] },
      { e: "Garden", a: "حديقة", d: "مساحة خضراء أمام البيت.", cl: ["We have a garden"], ms: [{ w: "yard", c: "garden", n: "garden = حديقة، yard = فناء" }], us: [{ t: "في المنزل", e: "We have a garden with many flowers.", a: "لدينا حديقة بالورود." }] },
      { e: "Best friend", a: "صديق مفضل / صديق حميم", d: "أقرب الأصدقاء.", cl: ["My best friend is Ahmed"], ms: [{ w: "friend", c: "best friend", n: "best friend = صديق مقرب جداً" }], us: [{ t: "في الصداقة", e: "My best friend is Ahmed.", a: "صديقي المفضل أحمد." }] },
      { e: "Next to", a: "بجانب / إلى جانب", d: "حرف جر للximity.", cl: ["He lives next to my house"], ms: [{ w: "near", c: "next to", n: "next to = بجانب مباشرة، near = قريب" }], us: [{ t: "في الموقع", e: "He lives next to my house.", a: "يسكن بجانب بيتي." }] },
      { e: "Together", a: "معاً", d: "في مكان واحد.", cl: ["We play together"], ms: [{ w: "with each other", c: "together", n: "together أقصر" }], us: [{ t: "في الصحبة", e: "We go to school together.", a: "نذهب للمدرسة معاً." }] }
    ],
    gram: [
      { t: "1. المقارنة بالصفات (Comparatives)", d: "مع الصفات القصيرة نضيف er + than. old → older than, young → younger than.", ex: [{ e: "My brothers are older than me.", a: "أخواني أكبر مني." }, { e: "My sister is younger than me.", a: "أختي أصغر مني." }], tp: "short adjective + er + than" },
      { t: "2. have / has للملكية", d: "I/We/You/They + have، He/She/It + has. للتعبير عن الشيء الذي تملكه.", ex: [{ e: "I have two brothers.", a: "لدي أخوان." }, { e: "We have a garden.", a: "لدينا حديقة." }], tp: "have للجمع، has للمفرد" },
      { t: "3. we للجمع", d: "نستخدم We للتعبير عن المجموعة التي نحن فيها (أنا + آخرون).", ex: [{ e: "We live in a big house.", a: "نعيش في بيت كبير." }, { e: "We go to school together.", a: "نذهب للمدرسة معاً." }], tp: "We = نحن (أنا + غيري)" }
    ],
    pron: [
      { w: "Father", t: "تنطق فازر بحرف th صامت" },
      { w: "Brother", t: "تنطق برازر بحرف th صامت" },
      { w: "Garden", t: "تنطق غاردن بحرف d صامت" }
    ],
    cul: [
      { n: "في بريطانيا Mum وليس Mom" },
      { n: "العائلة في الغرب عادةً أصغر من في مصر (يعيشون لوحدهم)" },
      { n: "Best friend تعني صديق مقرّب جداً" },
      { n: "الحديقة (Garden) جزء أساسي من البيت في بريطانيا" }
    ],
    ex: [
      { tp: "mcq", q: "ما وظيفة أبي؟", a: "", o: ["معلم", "طبيب", "مهندس", "محامي"], c: 1 },
      { tp: "mcq", q: "كم أخوة لدى الراوي؟", a: "", o: ["واحد", "اثنان", "ثلاثة", "أربعة"], c: 1 },
      { tp: "fill", q: "My sister is ________ than me.", a: "أصغر من", an: "younger" },
      { tp: "reorder", q: "رتّب: نذهب للمدرسة معاً كل يوم", a: "we go to school together every day", w: ["we", "go", "to", "school", "together", "every", "day"] },
      { tp: "match", q: "طابق الكلمة بالمعنى", p: [["Father", "أب"], ["Sister", "أخت"], ["Garden", "حديقة"], ["Best friend", "صديق مفضل"]] },
      { tp: "fill", q: "I ________ two brothers.", a: "لدي", an: "have" },
      { tp: "mcq", q: "أين يسكن أحمد؟", a: "", o: ["بعيد", "بجانب بيت الراوي", "في مبنى آخر", "في نفس البيت"], c: 1 },
      { tp: "listen", q: "استمع واختر الإجابة", en: "We live in a big house.", o: ["نعيش في شقة صغيرة", "نعيش في بيت كبير", "نعيش في فيلا", "نعيش في كوخ"], c: 1 },
      { tp: "translate", q: "ترجم: أبي طبيب", a: "", an: "my father is a doctor" },
      { tp: "mcq", q: "ماذا يحب أحمد؟", a: "", o: ["كرة السلة", "كرة القدم", "السباحة", "الملاكمة"], c: 1 },
      { tp: "egpt", q: "ازاي تقول 'لدي أخوان' بالإنجليزي؟", hint: "فكر في: I have two brothers", an: "i have two brothers", ph: "اكتب الإنجليزي..." },
      { tp: "usage", q: "اكتب جملة باستخدام كلمة garden", w: "garden" }
    ]
  },
  {
    id: 104,
    t: "التسوق في السوبر ماركت",
    i: "🛒",
    w: 15,
    n: 5,
    dlg: [
      { s: "Narrator", c: "#171717", e: "Sarah goes to the supermarket every Saturday.", a: "سارة تذهب للسوبر ماركت كل سبت." },
      { s: "Narrator", c: "#171717", e: "She takes a shopping list with her.", a: "تأخذ قائمة تسوق معها." },
      { s: "Narrator", c: "#171717", e: "First, she buys fresh vegetables.", a: "أولاً، تشتري خضروات طازجة." },
      { s: "Narrator", c: "#171717", e: "She needs tomatoes, onions, and cucumbers.", a: "تحتاج طماطم وخيار وبصل." },
      { s: "Narrator", c: "#171717", e: "Then she goes to the fruit section.", a: "ثم تذهب لقسم الفاكهة." },
      { s: "Narrator", c: "#171717", e: "She buys apples, bananas, and oranges.", a: "تشتري تفاح وموز وبرتقال." },
      { s: "Narrator", c: "#171717", e: "Next, she gets some milk and eggs.", a: "بعدها، تأخذ بعض اللبن والبيض." },
      { s: "Narrator", c: "#171717", e: "She also needs bread and butter.", a: "تحتاج أيضاً خبزاً وزبدة." },
      { s: "Narrator", c: "#171717", e: "Sarah checks her list carefully.", a: "سارة تفحص قائمتها بعناية." },
      { s: "Narrator", c: "#171717", e: "She doesn't forget anything.", a: "لا تنسى أي شيء." },
      { s: "Narrator", c: "#171717", e: "At the checkout, she pays with her card.", a: "عند الصندوق، تدفع بالبطاقة." },
      { s: "Narrator", c: "#171717", e: "The total is 35 pounds.", a: "المجموع 35 جنيهاً." },
      { s: "Narrator", c: "#171717", e: "Sarah takes her bags and goes home.", a: "سارة تأخذ أغراضها وتعود للبيت." }
    ],
    voc: [
      { e: "Supermarket", a: "سوبر ماركت", d: "متجر كبير للطعام والمشروبات.", cl: ["Go to the supermarket"], ms: [{ w: "market", c: "supermarket", n: "supermarket أكبر من market" }], us: [{ t: "في التسوق", e: "Sarah goes to the supermarket.", a: "سارة تذهب للسوبر ماركت." }] },
      { e: "Shopping list", a: "قائمة تسوق", d: "قائمة بالأشياء التي نحتاج شراءها.", cl: ["Takes a shopping list"], ms: [{ w: "list", c: "shopping list", n: "shopping list أدق" }], us: [{ t: "في التسوق", e: "She takes a shopping list with her.", a: "تأخذ قائمة تسوق معها." }] },
      { e: "Fresh", a: "طازج", d: "صفة للطعام الجديد غير المجمد.", cl: ["Fresh vegetables"], ms: [{ w: "new", c: "fresh", n: "fresh = طازج، new = جديد" }], us: [{ t: "في التسوق", e: "She buys fresh vegetables.", a: "تشتري خضروات طازجة." }] },
      { e: "Vegetables", a: "خضروات", d: "نباتات تؤكل. كلمة جمع دائماً.", cl: ["Fresh vegetables"], ms: [{ w: "veggies", c: "vegetables", n: "veggies عامي" }], us: [{ t: "في الطعام", e: "She buys fresh vegetables.", a: "تشتري خضروات طازجة." }] },
      { e: "Section", a: "قسم", d: "جزء من المتجر.", cl: ["The fruit section"], ms: [{ w: "part", c: "section", n: "section = قسم، part = جزء" }], us: [{ t: "في المتجر", e: "She goes to the fruit section.", a: "تذهب لقسم الفاكهة." }] },
      { e: "Checkout", a: "صندوق الدفع", d: "مكان الدفع في المتجر.", cl: ["At the checkout"], ms: [{ w: "cashier", c: "checkout", n: "checkout = المكان، cashier = الشخص" }], us: [{ t: "في الدفع", e: "At the checkout, she pays with her card.", a: "عند الصندوق، تدفع بالبطاقة." }] },
      { e: "Card", a: "بطاقة (دفع)", d: "بطاقة ائتمان أو مدين.", cl: ["Pays with her card"], ms: [{ w: "cash", c: "card", n: "card = بطاقة، cash = كاش" }], us: [{ t: "في الدفع", e: "She pays with her card.", a: "تدفع بالبطاقة." }] },
      { e: "Pounds", a: "جنيهات", d: "عملة بريطانيا. رمزها £.", cl: ["The total is 35 pounds"], ms: [{ w: "dollars", c: "pounds", n: "pounds بريطاني، dollars أمريكي" }], us: [{ t: "في السعر", e: "The total is 35 pounds.", a: "المجموع 35 جنيهاً." }] },
      { e: "Carefully", a: "بعناية", d: "ظرف من careful.", cl: ["She checks carefully"], ms: [{ w: "careful", c: "carefully", n: "careful = صفة، carefully = ظرف" }], us: [{ t: "في الفحص", e: "Sarah checks her list carefully.", a: "سارة تفحص قائمتها بعناية." }] },
      { e: "Forget", a: "ينسى", d: "عكس remember.", cl: ["She doesn't forget anything"], ms: [{ w: "leave", c: "forget", n: "forget = ينسى، leave = يترك" }], us: [{ t: "في النسيان", e: "She doesn't forget anything.", a: "لا تنسى أي شيء." }] }
    ],
    gram: [
      { t: "1. ترتيب الخطوات (Sequence Words)", d: "نستخدم كلمات ترتيب أولاً، ثم، بعدها: First, Then, Next, After that, Finally.", ex: [{ e: "First, she buys fresh vegetables.", a: "أولاً، تشتري خضروات طازجة." }, { e: "Then she goes to the fruit section.", a: "ثم تذهب لقسم الفاكهة." }], tp: "First → Then → Next → After that → Finally" },
      { t: "2. النفي مع doesn't", d: "مع He/She/It نستخدم doesn't + الفعل الأساسي (بدون s).", ex: [{ e: "She doesn't forget anything.", a: "لا تنسى أي شيء." }], tp: "doesn't + verb base form" },
      { t: "3. كل + يوم", d: "نستخدم every + يوم للتعبير عن التكرار الأسبوعي.", ex: [{ e: "Every Saturday", a: "كل سبت" }, { e: "Every day", a: "كل يوم" }], tp: "every = كل (للتكرار)" }
    ],
    pron: [
      { w: "Supermarket", t: "تنطق سوبر ماركيت ب Stress على المقطع الأول" },
      { w: "Vegetables", t: "تنطق فيجتبلز بحرف j صامت" },
      { w: "Checkout", t: "تنطق تشاوت كلمة واحدة" }
    ],
    cul: [
      { n: "في بريطانيا الجنيه (Pound) وليس الدولار" },
      { n: "التسوق الأسبوعي (Weekly shop) عادةً يوم سبت" },
      { n: "الدفع بالبطاقة (Card) هو الأكثر شيوعاً في بريطانيا" },
      { n: "قائمة التسوق (Shopping list) ت helped تقلل الهدر" }
    ],
    ex: [
      { tp: "mcq", q: "متى تذهب سارة للسوبر ماركت؟", a: "", o: ["كل أحد", "كل سبت", "كل يوم", "كل شهر"], c: 1 },
      { tp: "mcq", q: "ماذا تشتر أولاً؟", a: "", o: ["فاكهة", "خبز", "خضروات", "حليب"], c: 2 },
      { tp: "fill", q: "She ________ a shopping list with her.", a: "تأخذ", an: "takes" },
      { tp: "reorder", q: "رتّب: تذهب للسوبر ماركت كل سبت", a: "she goes to the supermarket every saturday", w: ["she", "goes", "to", "the", "supermarket", "every", "saturday"] },
      { tp: "match", q: "طابق الكلمة بالمعنى", p: [["Fresh", "طازج"], ["Vegetables", "خضروات"], ["Checkout", "صندوق الدفع"], ["Pounds", "جنيهات"]] },
      { tp: "fill", q: "She pays ________ her card.", a: "تدفع بالبطاقة", an: "with" },
      { tp: "mcq", q: "كم المجموع؟", a: "", o: ["25 جنيهاً", "35 جنيهاً", "45 جنيهاً", "55 جنيهاً"], c: 1 },
      { tp: "listen", q: "استمع واختر الإجابة", en: "She doesn't forget anything.", o: ["تنسى بعض الأشياء", "لا تنسى أي شيء", "تنسى القائمة", "تشتري كل شيء"], c: 1 },
      { tp: "translate", q: "ترجم: تشتري تفاح وموز وبرتقال", a: "", an: "she buys apples bananas and oranges" },
      { tp: "mcq", q: "ماذا تعني checkout؟", a: "", o: ["مدخل المتجر", "صندوق الدفع", "قسم الخضروات", "المخزن"], c: 1 },
      { tp: "egpt", q: "ازاي تقول 'تشتري خضروات طازجة' بالإنجليزي؟", hint: "فكر في: She buys fresh vegetables", an: "she buys fresh vegetables", ph: "اكتب الإنجليزي..." },
      { tp: "usage", q: "اكتب جملة باستخدام كلمة supermarket", w: "supermarket" }
    ]
  }
];
