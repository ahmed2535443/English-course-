export const STORIES = [
  {
    id: 1,
    title: "في المطعم",
    titleEn: "At the Restaurant",
    icon: "🍽️",
    difficulty: "A1",
    xp: 30,
    duration: "3 دقائق",
    description: "تعلم كيف تطلب الطعام في مطعم أمريكي",
    lines: [
      {
        type: "narration",
        text: "You walk into a busy restaurant. A waiter comes to greet you.",
        textAr: "تدخل مطعماً مزدحماً. يأتي النادل لاستقبالك.",
        icon: "🚶"
      },
      {
        type: "dialogue",
        speaker: "Waiter",
        speakerAr: "النادل",
        text: "Good evening! Welcome to Joe's Diner. How many?",
        textAr: "مساء الخير! أهلاً بك في مطعم جو. كم شخص؟",
        color: "#171717"
      },
      {
        type: "question",
        question: "What is the waiter asking?",
        questionAr: "ماذا يسأل النادل؟",
        options: [
          { text: "How many people?", textAr: "كم شخص؟", correct: true },
          { text: "What time is it?", textAr: "كم الساعة؟", correct: false },
          { text: "Where are you from?", textAr: "من أين أنت؟", correct: false }
        ]
      },
      {
        type: "dialogue",
        speaker: "You",
        speakerAr: "أنت",
        text: "A table for two, please.",
        textAr: "طاولة لشخصين، من فضلك.",
        color: "#0070f3"
      },
      {
        type: "narration",
        text: "The waiter takes you to a nice table by the window.",
        textAr: "يأخذك النادل إلى طاولة جميلة بجوار النافذة.",
        icon: "🪑"
      },
      {
        type: "dialogue",
        speaker: "Waiter",
        speakerAr: "النادل",
        text: "Here's the menu. Are you ready to order?",
        textAr: "هذه القائمة. هل أنت جاهز للطلب؟",
        color: "#171717"
      },
      {
        type: "question",
        question: "What does 'menu' mean?",
        questionAr: "ماذا يعني كلمة 'menu'؟",
        options: [
          { text: "قائمة الطعام", textAr: "قائمة الطعام", correct: true },
          { text: "الحساب", textAr: "الحساب", correct: false },
          { text: "الograve;e", textAr: "الograve;e", correct: false }
        ]
      },
      {
        type: "dialogue",
        speaker: "You",
        speakerAr: "أنت",
        text: "I'd like a cheeseburger and a coke, please.",
        textAr: "أريد همبرجر بالجبن وكوكا كولا، من فضلك.",
        color: "#0070f3"
      },
      {
        type: "dialogue",
        speaker: "Waiter",
        speakerAr: "النادل",
        text: "Would you like fries with that?",
        textAr: "هل تريد بطاطس مع ذلك؟",
        color: "#171717"
      },
      {
        type: "question",
        question: "What are 'fries'?",
        questionAr: "ماذا هي 'fries'؟",
        options: [
          { text: "بطاطس مقلية", textAr: "بطاطس مقلية", correct: true },
          { text: "خبز", textAr: "خبز", correct: false },
          { text: "سلطة", textAr: "سلطة", correct: false }
        ]
      },
      {
        type: "dialogue",
        speaker: "You",
        speakerAr: "أنت",
        text: "Yes, please. And a glass of water.",
        textAr: "نعم، من فضلك. وكوب ماء.",
        color: "#0070f3"
      },
      {
        type: "dialogue",
        speaker: "Waiter",
        speakerAr: "النادل",
        text: "Sure! That'll be $12.50. I'll bring your food in a few minutes.",
        textAr: "بالتأكيد! المبلغ 12.50 دولار. سأحضر طعامك في بضع دقائق.",
        color: "#171717"
      },
      {
        type: "narration",
        text: "After a few minutes, the waiter brings your food.",
        textAr: "بعد بضع دقائق، يحضر النادل طعامك.",
        icon: "🍔"
      },
      {
        type: "dialogue",
        speaker: "Waiter",
        speakerAr: "النادل",
        text: "Here you go! Enjoy your meal.",
        textAr: "تفضل! استمتع بوجبتك.",
        color: "#171717"
      },
      {
        type: "question",
        question: "What does 'Enjoy your meal' mean?",
        questionAr: "ماذا يعني 'Enjoy your meal'؟",
        options: [
          { text: "استمتع بوجبتك", textAr: "استمتع بوجبتك", correct: true },
          { text: "في صحةك", textAr: "في صحةك", correct: false },
          { text: "بالهنا والشفا", textAr: "بالهنا والشفا", correct: false }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "في السوبرماركت",
    titleEn: "At the Supermarket",
    icon: "🛒",
    difficulty: "A1",
    xp: 30,
    duration: "3 دقائق",
    description: "تعلم كيف تشتري حاجات من السوبرماركت",
    lines: [
      {
        type: "narration",
        text: "You need to buy some groceries. You go to the supermarket.",
        textAr: "تحتاج لشراء بعض الأغراض. تذهب إلى السوبرماركت.",
        icon: "🏪"
      },
      {
        type: "narration",
        text: "You grab a shopping cart and start looking for items.",
        textAr: "تأخذ عربة تسوق وتبدأ في البحث عن الأغراض.",
        icon: "🛒"
      },
      {
        type: "dialogue",
        speaker: "You",
        speakerAr: "أنت",
        text: "Excuse me, where can I find the milk?",
        textAr: "عفواً، أين أجد الحليب؟",
        color: "#0070f3"
      },
      {
        type: "dialogue",
        speaker: "Employee",
        speakerAr: "الموظف",
        text: "The milk is in aisle 3, on the left side.",
        textAr: "الحليب في الممر الثالث، على الجانب الأيسر.",
        color: "#7928ca"
      },
      {
        type: "question",
        question: "What is 'aisle'?",
        questionAr: "ماذا يعني 'aisle'؟",
        options: [
          { text: "ممر", textAr: "ممر", correct: true },
          { text: "رف", textAr: "رف", correct: false },
          { text: "كرتونة", textAr: "كرتونة", correct: false }
        ]
      },
      {
        type: "narration",
        text: "You find the milk and put it in your cart. Then you look for bread.",
        textAr: "تجد الحليب وتحطه في العربة. ثم تبحث عن الخبز.",
        icon: "🍞"
      },
      {
        type: "dialogue",
        speaker: "You",
        speakerAr: "أنت",
        text: "How much is this bread?",
        textAr: "بكم هذا الخبز؟",
        color: "#0070f3"
      },
      {
        type: "dialogue",
        speaker: "Employee",
        speakerAr: "الموظف",
        text: "That's $2.99. Do you need a bag?",
        textAr: "بـ 2.99 دولار. تحتاج كيس؟",
        color: "#7928ca"
      },
      {
        type: "question",
        question: "What does the employee ask?",
        questionAr: "ماذا يسأل الموظف؟",
        options: [
          { text: "هل تحتاج كيس؟", textAr: "هل تحتاج كيس؟", correct: true },
          { text: "هل تريد المزيد؟", textAr: "هل تريد المزيد؟", correct: false },
          { text: "هل لديك خصم؟", textAr: "هل لديك خصم؟", correct: false }
        ]
      },
      {
        type: "dialogue",
        speaker: "You",
        speakerAr: "أنت",
        text: "No, thanks. I have my own bag.",
        textAr: "لا، شكراً. لدي كيسي الخاص.",
        color: "#0070f3"
      },
      {
        type: "narration",
        text: "You go to the checkout to pay.",
        textAr: "تذهب إلى الكاشير للدفع.",
        icon: "💳"
      },
      {
        type: "dialogue",
        speaker: "Cashier",
        speakerAr: "الكاشير",
        text: "Your total is $5.49. Cash or card?",
        textAr: "المبلغ الإجمالي 5.49 دولار. كاش ولا كرت؟",
        color: "#ec4899"
      },
      {
        type: "question",
        question: "What does 'total' mean?",
        questionAr: "ماذا يعني 'total'؟",
        options: [
          { text: "المبلغ الإجمالي", textAr: "المبلغ الإجمالي", correct: true },
          { text: "الخصم", textAr: "الخصم", correct: false },
          { text: "الضريبة", textAr: "الضريبة", correct: false }
        ]
      },
      {
        type: "dialogue",
        speaker: "You",
        speakerAr: "أنت",
        text: "Card, please.",
        textAr: "كرت، من فضلك.",
        color: "#0070f3"
      },
      {
        type: "dialogue",
        speaker: "Cashier",
        speakerAr: "الكاشير",
        text: "Done! Have a great day!",
        textAr: "تم! أتمنى لك يوماً رائعاً!",
        color: "#ec4899"
      }
    ]
  },
  {
    id: 3,
    title: "الاتصال بالفندق",
    titleEn: "Calling the Hotel",
    icon: "🏨",
    difficulty: "A1",
    xp: 25,
    duration: "2 دقائق",
    description: "تعلم كيف تحجز غرفة في الفندق",
    lines: [
      {
        type: "narration",
        text: "You need to book a hotel room. You pick up the phone.",
        textAr: "تحتاج لحجز غرفة في الفندق. تلتقط الهاتف.",
        icon: "📞"
      },
      {
        type: "dialogue",
        speaker: "Receptionist",
        speakerAr: "موظف الاستقبال",
        text: "Grand Hotel, good morning! How can I help you?",
        textAr: "فندق غراند، صباح الخير! كيف يمكنني مساعدتك؟",
        color: "#7928ca"
      },
      {
        type: "dialogue",
        speaker: "You",
        speakerAr: "أنت",
        text: "Hi, I'd like to book a room for two nights.",
        textAr: "مرحباً، أريد حجز غرفة لمدة ليلتين.",
        color: "#0070f3"
      },
      {
        type: "question",
        question: "What does the person want?",
        questionAr: "ماذا يريد الشخص؟",
        options: [
          { text: "حجز غرفة", textAr: "حجز غرفة", correct: true },
          { text: "إلغاء حجز", textAr: "إلغاء حجز", correct: false },
          { text: "شكوى", textAr: "شكوى", correct: false }
        ]
      },
      {
        type: "dialogue",
        speaker: "Receptionist",
        speakerAr: "موظف الاستقبال",
        text: "Sure! When would you like to check in?",
        textAr: "بالتأكيد! متى تريد تسجيل الدخول؟",
        color: "#7928ca"
      },
      {
        type: "dialogue",
        speaker: "You",
        speakerAr: "أنت",
        text: "This Friday, please.",
        textAr: "هذا الجمعة، من فضلك.",
        color: "#0070f3"
      },
      {
        type: "dialogue",
        speaker: "Receptionist",
        speakerAr: "موظف الاستقبال",
        text: "We have a standard room for $89 per night. Would you like that?",
        textAr: "لدينا غرفة عادية بـ 89 دولار لليلة. هل تريد ذلك؟",
        color: "#7928ca"
      },
      {
        type: "question",
        question: "How much is the room per night?",
        questionAr: "بكم الغرفة لليلة؟",
        options: [
          { text: "$89", textAr: "$89", correct: true },
          { text: "$98", textAr: "$98", correct: false },
          { text: "$80", textAr: "$80", correct: false }
        ]
      },
      {
        type: "dialogue",
        speaker: "You",
        speakerAr: "أنت",
        text: "Yes, that sounds good. I'll take it.",
        textAr: "نعم، يبدو ذلك جيداً. سآخذه.",
        color: "#0070f3"
      },
      {
        type: "dialogue",
        speaker: "Receptionist",
        speakerAr: "موظف الاستقبال",
        text: "Great! Can I have your name, please?",
        textAr: "رائع! هل يمكنني اسمك، من فضلك؟",
        color: "#7928ca"
      },
      {
        type: "dialogue",
        speaker: "You",
        speakerAr: "أنت",
        text: "It's Ahmed Hassan.",
        textAr: "أحمد حسن.",
        color: "#0070f3"
      },
      {
        type: "dialogue",
        speaker: "Receptionist",
        speakerAr: "موظف الاستقبال",
        text: "Perfect! Your reservation is confirmed. See you on Friday!",
        textAr: "ممتاز! تم تأكيد حجزك. نراكم الجمعة!",
        color: "#7928ca"
      }
    ]
  }
]

export function getStoryById(id) {
  return STORIES.find(s => s.id === parseInt(id))
}

export function getStoriesByDifficulty(difficulty) {
  return STORIES.filter(s => s.difficulty === difficulty)
}
