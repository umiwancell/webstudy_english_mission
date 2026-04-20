/**
 * questions.js
 * ชุดข้อสอบภาษาอังกฤษ 100 ข้อ (Practice Test 100 Questions)
 * อ้างอิงระดับความยากและโครงสร้างจาก O-NET / NIETS
 */

const allQuestions = [
    // === PART 1: Situational Dialogs (Items 1-20) ===
    {
        "id": 1,
        "category": "Situational Dialog",
        "question": "Situation: A foreign tourist is looking at a map and looks lost. You want to help.\nYou: ________________",
        "options": ["What is your name?", "Where do you want to go?", "May I help you with the map?", "Why are you looking at a map?"],
        "answer": 2,
        "explanation": "คำอธิบาย: เมื่อเห็นชาวต่างชาติดูหลงทาง การเสนอความช่วยเหลืออย่างสุภาพใช้ 'May I help you?' หรือ 'Can I help you?'"
    },
    {
        "id": 2,
        "category": "Situational Dialog",
        "question": "Situation: Your friend forgot her umbrella and it's raining outside.\nYou: ________________",
        "options": ["You are very careless.", "You can share mine.", "It will stop raining soon.", "I don't have an umbrella."],
        "answer": 1,
        "explanation": "คำอธิบาย: การแสดงความเอื้อเฟื้อเมื่อเพื่อนลืมร่มคือ 'You can share mine' (มาใช้ร่มคันเดียวกับฉันได้นะ)"
    },
    {
        "id": 3,
        "category": "Situational Dialog",
        "question": "Situation: You are late for a group meeting.\nYou: ________________",
        "options": ["I am busy.", "I don't like waiting.", "Sorry I'm late. The bus was delayed.", "Who is the leader?"],
        "answer": 2,
        "explanation": "คำอธิบาย: เมื่อมาสาย ควรขอโทษด้วยคำว่า 'Sorry I'm late' พร้อมบอกเหตุผลสั้นๆ"
    },
    {
        "id": 4,
        "category": "Situational Dialog",
        "question": "Situation: Your sister is studying for an exam. You are making too much noise.\nSister: ________________",
        "options": ["Could you please be quiet?", "I am very happy.", "Do you want to play?", "Study hard!"],
        "answer": 0,
        "explanation": "คำอธิบาย: เมื่อต้องการขอให้คนอื่นลดเสียงลงอย่างสุภาพ ใช้ 'Could you please be quiet?'"
    },
    {
        "id": 5,
        "category": "Situational Dialog",
        "question": "Situation: A friend says, 'I passed the exam!'\nYou: ________________",
        "options": ["Good luck.", "I'm sorry to hear that.", "Congratulations!", "You are very old."],
        "answer": 2,
        "explanation": "คำอธิบาย: เมื่อเพื่อนมีข่าวดีหรือประสบความสำเร็จ เราต้องพูดว่า 'Congratulations!'"
    },
    {
        "id": 6,
        "category": "Situational Dialog",
        "question": "Situation: You want to ask a shopkeeper for the price of a shirt.\nYou: ________________",
        "options": ["How much is this shirt?", "Where is the shirt?", "Is this a shirt?", "I want this shirt."],
        "answer": 0,
        "explanation": "คำอธิบาย: การถามราคาใช้โครงสร้าง 'How much is...?'"
    },
    {
        "id": 7,
        "category": "Situational Dialog",
        "question": "Situation: Your friend suggests, 'Let's go to the zoo.' You don't want to go.\nYou: ________________",
        "options": ["I'd love to, but I'm busy.", "Yes, let's go.", "The zoo is big.", "I like animals."],
        "answer": 0,
        "explanation": "คำอธิบาย: การปฏิเสธคำชวนอย่างสุภาพใช้ 'I'd love to, but...' (อยากไปนะ แต่ว่า...)"
    },
    {
        "id": 8,
        "category": "Situational Dialog",
        "question": "Situation: You want to borrow a pen from your classmate.\nYou: ________________",
        "options": ["Give me your pen.", "Can I borrow your pen, please?", "Where is your pen?", "This is my pen."],
        "answer": 1,
        "explanation": "คำอธิบาย: การขอยืมของอย่างสุภาพใช้ 'Can I borrow...?' และลงท้ายด้วย 'please'"
    },
    {
        "id": 9,
        "category": "Situational Dialog",
        "question": "Situation: You did not hear what the teacher said.\nYou: ________________",
        "options": ["What?", "Could you say that again, please?", "I don't like English.", "Speak louder."],
        "answer": 1,
        "explanation": "คำอธิบาย: เมื่อฟังไม่ทันและต้องการให้พูดซ้ำ ใช้ 'Could you say that again, please?'"
    },
    {
        "id": 10,
        "category": "Situational Dialog",
        "question": "Situation: Someone says, 'Thank you for your help.'\nYou: ________________",
        "options": ["You're welcome.", "I'm sorry.", "Goodbye.", "No, thanks."],
        "answer": 0,
        "explanation": "คำอธิบาย: เมื่อได้รับคำขอบคุณ คำตอบรับที่มาตรฐานคือ 'You're welcome' (ยินดีครับ/ค่ะ)"
    },
    {
        "id": 11,
        "category": "Situational Dialog",
        "question": "Situation: You are at a restaurant. You want to order some food.\nYou: ________________",
        "options": ["Where is the food?", "I am hungry.", "May I have the menu, please?", "The food is expensive."],
        "answer": 2,
        "explanation": "คำอธิบาย: เริ่มต้นการสั่งอาหารโดยการขอเมนู 'May I have the menu, please?'"
    },
    {
        "id": 12,
        "category": "Situational Dialog",
        "question": "Situation: A friend asks, 'Can you join my birthday party?'\nYou want to go. You: ________________",
        "options": ["I'm busy.", "I'd love to! What time?", "No, thanks.", "Happy birthday."],
        "answer": 1,
        "explanation": "คำอธิบาย: เมื่อตอบตกลงคำชวนด้วยความยินดีใช้ 'I'd love to!'"
    },
    {
        "id": 13,
        "category": "Situational Dialog",
        "question": "Situation: You want to know the time.\nYou: ________________",
        "options": ["What time is it?", "Do you have a watch?", "Where is the clock?", "How long is it?"],
        "answer": 0,
        "explanation": "คำอธิบาย: การถามเวลาที่พบบ่อยที่สุดคือ 'What time is it?'"
    },
    {
        "id": 14,
        "category": "Situational Dialog",
        "question": "Situation: Your friend looks sad.\nYou: ________________",
        "options": ["Why are you sad?", "What's wrong?", "Don't be sad.", "I am happy."],
        "answer": 1,
        "explanation": "คำอธิบาย: เมื่อเห็นคนอื่นมีท่าทางไม่ดี การถามด้วยความห่วงใยใช้ 'What's wrong?' (เกิดอะไรขึ้น/มีอะไรหรือเปล่า)"
    },
    {
        "id": 15,
        "category": "Situational Dialog",
        "question": "Situation: You want to introduce your friend 'Leo' to your mother.\nYou: ________________",
        "options": ["Mom, this is Leo.", "Mom, where is Leo?", "Leo, this is my mom.", "Who is Leo, mom?"],
        "answer": 0,
        "explanation": "คำอธิบาย: การแนะนำเพื่อนให้ผู้ใหญ่รู้จัก ใช้ 'Mom, this is [ชื่อเพื่อน].'"
    },
    {
        "id": 16,
        "category": "Situational Dialog",
        "question": "Situation: You are in a library. Someone is talking loudly on the phone.\nYou: ________________",
        "options": ["Quiet, please.", "Stop talking.", "No phone here.", "Excuse me, but could you please lower your voice?"],
        "answer": 3,
        "explanation": "คำอธิบาย: การตักเตือนในที่สาธารณะควรเริ่มด้วย 'Excuse me' เพื่อความสุภาพ"
    },
    {
        "id": 17,
        "category": "Situational Dialog",
        "question": "Situation: A tourist asks for directions to the train station.\nYou don't know the answer. You: ________________",
        "options": ["I don't like trains.", "Go straight and turn left.", "I'm sorry, I'm not from around here.", "Ask someone else."],
        "answer": 2,
        "explanation": "คำอธิบาย: เมื่อไม่ทราบเส้นทาง ควรขอโทษและบอกว่าไม่ใช่คนแถวนี้ 'I'm not from around here.'"
    },
    {
        "id": 18,
        "category": "Situational Dialog",
        "question": "Situation: You want to go to the cinema. You ask your friend to go with you.\nYou: ________________",
        "options": ["Do you want to see a movie?", "The cinema is closed.", "I like movies.", "Where is the cinema?"],
        "answer": 0,
        "explanation": "คำอธิบาย: การชวนไปทำกิจกรรมต่างๆ ใช้ 'Do you want to...?'"
    },
    {
        "id": 19,
        "category": "Situational Dialog",
        "question": "Situation: You found a wallet on the street. You take it to the police station.\nYou: ________________",
        "options": ["I found this wallet on the street.", "Whose wallet is this?", "I want some money.", "This is my wallet."],
        "answer": 0,
        "explanation": "คำอธิบาย: การแจ้งเรื่องกับตำรวจ บอกสิ่งที่เกิดขึ้นตามจริง 'I found this...'"
    },
    {
        "id": 20,
        "category": "Situational Dialog",
        "question": "Situation: Your friend is sick.\nYou: ________________",
        "options": ["I hope you feel better soon.", "Go to school.", "Why are you sick?", "I am sick too."],
        "answer": 0,
        "explanation": "คำอธิบาย: การอวยพรให้คนป่วยหายไวๆ ใช้ 'I hope you feel better soon.' (Get well soon)"
    },

    // === PART 2: Dialog Completion (Items 21-40) ===
    {
        "id": 21,
        "category": "Dialog",
        "question": "Ben: What is your favorite subject?\nAnna: ____________. I love learning about numbers.",
        "options": ["Math", "English", "History", "Science"],
        "answer": 0,
        "explanation": "คำอธิบาย: เพราะ Anna บอกว่าชอบเรียนเกี่ยวกับตัวเลข (numbers) คำตอบจึงต้องเป็นคณิตศาสตร์ (Math)"
    },
    {
        "id": 22,
        "category": "Dialog",
        "question": "A: How ________ do you exercise?\nB: Three times a week.",
        "options": ["many", "often", "long", "much"],
        "answer": 1,
        "explanation": "คำอธิบาย: การถามถึงความถี่ (Three times a week) ต้องใช้ 'How often' (บ่อยแค่ไหน)"
    },
    {
        "id": 23,
        "category": "Dialog",
        "question": "A: Where were you yesterday afternoon?\nB: ____________. I was watching a movie.",
        "options": ["At the park", "At the cinema", "At school", "At home"],
        "answer": 1,
        "explanation": "คำอธิบาย: สัมพันธ์กับคำว่า 'watching a movie' (ดูหนัง) สถานที่จึงควรเป็นโรงหนัง (cinema)"
    },
    {
        "id": 24,
        "category": "Dialog",
        "question": "A: Can you swim?\nB: ____________. I learned when I was five.",
        "options": ["Yes, I can.", "No, I can't.", "Yes, I do.", "No, I don't."],
        "answer": 0,
        "explanation": "คำอธิบาย: คำถามขึ้นต้นด้วย 'Can you...?' ต้องตอบด้วย Can และประโยคหลังบอกว่าเรียนมาแล้ว จึงตอบตกลง"
    },
    {
        "id": 25,
        "category": "Dialog",
        "question": "A: What would you like to drink?\nB: ____________, please. I'm very thirsty.",
        "options": ["A sandwich", "Some water", "A pizza", "Ice cream"],
        "answer": 1,
        "explanation": "คำอธิบาย: คำถามถามถึง 'drink' (เครื่องดื่ม) ตัวเลือกเดียวที่เป็นน้ำคือ 'Some water'"
    },
    {
        "id": 26,
        "category": "Dialog",
        "question": "A: Excuse me, __________ is the post office?\nB: It's next to the bank.",
        "options": ["what", "when", "where", "how"],
        "answer": 2,
        "explanation": "คำอธิบาย: คำตอบบอกตำแหน่งสถานที่ (next to the bank) คำถามจึงต้องใช้ 'where' (ที่ไหน)"
    },
    {
        "id": 27,
        "category": "Dialog",
        "question": "A: How was your weekend?\nB: ____________. We went to the beach and had fun.",
        "options": ["It was terrible.", "It was boring.", "It was great.", "I was at work."],
        "answer": 2,
        "explanation": "คำอธิบาย: ประโยคหลังบอกว่า 'had fun' (สนุก) แสดงว่าสุดสัปดาห์นั้นต้องดี (great)"
    },
    {
        "id": 28,
        "category": "Dialog",
        "question": "A: Whose pencil is this?\nB: It's ____________.",
        "options": ["me", "mine", "my", "I"],
        "answer": 1,
        "explanation": "คำอธิบาย: การแสดงความเป็นเจ้าของโดยไม่มีนามตามหลัง ใช้ Possessive Pronoun 'mine' (ของฉัน)"
    },
    {
        "id": 29,
        "category": "Dialog",
        "question": "A: Why are you so happy today?\nB: Because ____________.",
        "options": ["I lost my money.", "I failed the test.", "It is raining.", "It is my birthday!"],
        "answer": 3,
        "explanation": "คำอธิบาย: เหตุผลที่ทำให้มีความสุข (happy) คือเป็นวันเกิด (birthday)"
    },
    {
        "id": 30,
        "category": "Dialog",
        "question": "A: Have you ever been to Japan?\nB: No, __________. But I want to go one day.",
        "options": ["ever", "never", "always", "already"],
        "answer": 1,
        "explanation": "คำอธิบาย: เมื่อยังไม่เคยไป และตอบ No ต้องใช้ 'never' (ไม่เคย)"
    },
    {
        "id": 31,
        "category": "Dialog",
        "question": "A: What time does the flight _________?\nB: At 8:30 p.m. Don't be late.",
        "options": ["leave", "leaves", "left", "leaving"],
        "answer": 0,
        "explanation": "คำอธิบาย: หลัง 'does' ในประโยคคำถาม กริยาต้องเป็นรูปฐาน (V.inf) ไม่เติม s"
    },
    {
        "id": 32,
        "category": "Dialog",
        "question": "A: How ________ is it from here to the airport?\nB: About 20 kilometers.",
        "options": ["long", "often", "far", "much"],
        "answer": 2,
        "explanation": "คำอธิบาย: คำตอบเป็นระยะทาง (kilometers) ต้องใช้ 'How far' (ไกลแค่ไหน)"
    },
    {
        "id": 33,
        "category": "Dialog",
        "question": "A: I'm very hungry. Let's get something to eat.\nB: ____________. How about some noodles?",
        "options": ["No, thanks.", "I'm not hungry.", "That sounds good.", "I'm tired."],
        "answer": 2,
        "explanation": "คำอธิบาย: เมื่อเห็นด้วยกับข้อเสนอ (Let's...) ใช้ 'That sounds good' (ฟังดูดีนะ)"
    },
    {
        "id": 34,
        "category": "Dialog",
        "question": "A: What _________ you doing at 8 o'clock last night?\nB: I was doing my homework.",
        "options": ["are", "do", "were", "was"],
        "answer": 2,
        "explanation": "คำอธิบาย: ถามถึงเหตุการณ์ที่กำลังทำในอดีต (Past Continuous) ประธาน 'you' ต้องใช้กับ 'were'"
    },
    {
        "id": 35,
        "category": "Dialog",
        "question": "A: Would you like some more cake?\nB: ____________. I'm full.",
        "options": ["Yes, please.", "No, thank you.", "I like cake.", "Here you are."],
        "answer": 1,
        "explanation": "คำอธิบาย: เพราะบอกว่า 'I'm full' (อิ่มแล้ว) จึงต้องปฏิเสธอย่างสุภาพว่า 'No, thank you.'"
    },
    {
        "id": 36,
        "category": "Dialog",
        "question": "A: __________ do you like better, tea or coffee?\nB: I prefer coffee.",
        "options": ["Who", "What", "Which", "Where"],
        "answer": 2,
        "explanation": "คำอธิบาย: เมื่อต้องการให้เลือกอย่างใดอย่างหนึ่ง (tea or coffee) ต้องใช้ 'Which' (อันไหน/สิ่งไหน)"
    },
    {
        "id": 37,
        "category": "Dialog",
        "question": "A: Look! It's starting to rain.\nB: We __________ stay inside.",
        "options": ["should", "cannot", "don't", "are"],
        "answer": 0,
        "explanation": "คำอธิบาย: เป็นการแนะนำ (should) ว่าเมื่อฝนตกควรอยู่ข้างใน"
    },
    {
        "id": 38,
        "category": "Dialog",
        "question": "A: Can you play the guitar?\nB: No, but I can play __________ piano.",
        "options": ["a", "an", "the", "(-)"],
        "answer": 2,
        "explanation": "คำอธิบาย: หน้าชื่อเครื่องดนตรี (เมื่อพูดถึงการเล่น) ต้องใช้ article 'the' เสมอ"
    },
    {
        "id": 39,
        "category": "Dialog",
        "question": "A: What ________ your sister look like?\nB: She is tall and has long hair.",
        "options": ["is", "do", "does", "has"],
        "answer": 2,
        "explanation": "คำอธิบาย: การถามลักษณะรูปร่างภายนอกใช้โครงสร้าง 'What does [Subject] look like?'"
    },
    {
        "id": 40,
        "category": "Dialog",
        "question": "A: Is this your bag?\nB: No, it belongs __________ Sarah.",
        "options": ["at", "to", "with", "for"],
        "answer": 1,
        "explanation": "คำอธิบาย: กริยา 'belong' ต้องใช้คู่กับบุพบท 'to' (belong to = เป็นของ...)"
    },

    // === PART 3: Writing, Grammar & Ordering (Items 41-60) ===
    {
        "id": 41,
        "category": "Grammar",
        "question": "Somsak ________ to school every day by bus.",
        "options": ["go", "goes", "going", "gone"],
        "answer": 1,
        "explanation": "คำอธิบาย: ประโยคบอกเล่าที่เป็นกิจวัตร (every day) ประธานเอกพจน์ (Somsak) กริยาต้องเติม s/es"
    },
    {
        "id": 42,
        "category": "Grammar",
        "question": "Listen! The birds ________ in the garden.",
        "options": ["sing", "sings", "are singing", "sang"],
        "answer": 2,
        "explanation": "คำอธิบาย: คำว่า 'Listen!' บ่งบอกว่าเหตุการณ์กำลังเกิดขึ้น ณ ตอนนี้ จึงใช้ Present Continuous (are singing)"
    },
    {
        "id": 43,
        "category": "Grammar",
        "question": "This book is ________ than that one.",
        "options": ["interesting", "more interesting", "most interesting", "as interesting"],
        "answer": 1,
        "explanation": "คำอธิบาย: มีการเปรียบเทียบ (than) คำยาว (interesting) ต้องใช้ 'more... than'"
    },
    {
        "id": 44,
        "category": "Grammar",
        "question": "I haven't finished my homework __________.",
        "options": ["already", "yet", "since", "for"],
        "answer": 1,
        "explanation": "คำอธิบาย: ในประโยคปฏิเสธ (haven't) ของ Present Perfect มักใช้ 'yet' ไว้ท้ายประโยค"
    },
    {
        "id": 45,
        "category": "Grammar",
        "question": "We __________ to the zoo last month.",
        "options": ["go", "goes", "went", "going"],
        "answer": 2,
        "explanation": "คำอธิบาย: มีระบุเวลาในอดีต (last month) ต้องใช้กริยาช่อง 2 (went)"
    },
    {
        "id": 46,
        "category": "Grammar",
        "question": "There isn't __________ milk in the fridge.",
        "options": ["some", "any", "many", "a"],
        "answer": 1,
        "explanation": "คำอธิบาย: ในประโยคปฏิเสธกับนามนับไม่ได้ ใช้ 'any'"
    },
    {
        "id": 47,
        "category": "Grammar",
        "question": "She is the __________ student in our class.",
        "options": ["good", "better", "best", "as good as"],
        "answer": 2,
        "explanation": "คำอธิบาย: ขั้นสุด (Superlative) ของ good คือ 'the best'"
    },
    {
        "id": 48,
        "category": "Grammar",
        "question": "If I ________ you, I would tell the truth.",
        "options": ["am", "is", "was", "were"],
        "answer": 3,
        "explanation": "คำอธิบาย: ประโยคสมมติ (Conditional Type 2) เมื่อสมมติเป็นคนอื่น เราใช้ 'If I were...'"
    },
    {
        "id": 49,
        "category": "Grammar",
        "question": "My father has lived in Bangkok ________ 2010.",
        "options": ["for", "since", "during", "at"],
        "answer": 1,
        "explanation": "คำอธิบาย: บอกจุดเริ่มต้นของเวลา ใช้ 'since'"
    },
    {
        "id": 50,
        "category": "Grammar",
        "question": "You ________ smoke in the hospital. It's against the rules.",
        "options": ["must", "must not", "should", "don't"],
        "answer": 1,
        "explanation": "คำอธิบาย: เป็นข้อห้าม (against the rules) ใช้ 'must not'"
    },
    {
        "id": 51,
        "category": "Sentence Ordering",
        "question": "1. I brushed my teeth.\n2. I woke up at 6 a.m.\n3. I went to the kitchen to have breakfast.\nWhich is the correct order?",
        "options": ["2-1-3", "2-3-1", "1-2-3", "3-2-1"],
        "answer": 0,
        "explanation": "คำอธิบาย: ลำดับเหตุการณ์ที่เป็นตรรกะคือ ตื่นนอน (2) -> แปรงฟัน (1) -> กินข้าวเช้า (3)"
    },
    {
        "id": 52,
        "category": "Sentence Ordering",
        "question": "A. First, put the bread in the toaster.\nB. Finally, put some jam on the toast.\nC. Then, wait for 2 minutes.\nOrder the steps:",
        "options": ["A-B-C", "A-C-B", "B-A-C", "C-A-B"],
        "answer": 1,
        "explanation": "คำอธิบาย: ขั้นตอน (Process) เริ่มด้วย First (A) -> Then (C) -> Finally (B)"
    },
    {
        "id": 53,
        "category": "Grammar",
        "question": "That's the girl __________ won the first prize.",
        "options": ["who", "which", "whose", "whom"],
        "answer": 0,
        "explanation": "คำอธิบาย: ใช้ 'who' เพื่อขยายประธานที่เป็นคน (the girl)"
    },
    {
        "id": 54,
        "category": "Grammar",
        "question": "He ________ his keys yesterday.",
        "options": ["lose", "lost", "losing", "loses"],
        "answer": 1,
        "explanation": "คำอธิบาย: อดีต (yesterday) ของ lose คือ 'lost'"
    },
    {
        "id": 55,
        "category": "Grammar",
        "question": "The flowers are ________ by the gardener every morning.",
        "options": ["water", "watering", "watered", "waters"],
        "answer": 2,
        "explanation": "คำอธิบาย: Passive Voice (ประธานถูกกระทำ) โครงสร้างคือ be + V.3 (watered)"
    },
    {
        "id": 56,
        "category": "Grammar",
        "question": "I am interested ________ learning French.",
        "options": ["at", "on", "in", "with"],
        "answer": 2,
        "explanation": "คำอธิบาย: 'interested' ต้องใช้คู่กับบุพบท 'in' เสมอ"
    },
    {
        "id": 57,
        "category": "Grammar",
        "question": "________ you like a cup of tea?",
        "options": ["Do", "Will", "Would", "Can"],
        "answer": 2,
        "explanation": "คำอธิบาย: การเสนอของให้อย่างสุภาพ ใช้โครงสร้าง 'Would you like...?'"
    },
    {
        "id": 58,
        "category": "Grammar",
        "question": "She ________ speaks English very well.",
        "options": ["slowly", "quick", "fluent", "fluently"],
        "answer": 3,
        "explanation": "คำอธิบาย: ต้องการ Adverb ขยายกริยา speaks จึงใช้ 'fluently'"
    },
    {
        "id": 59,
        "category": "Grammar",
        "question": "Please don't forget ________ your homework.",
        "options": ["do", "doing", "to do", "did"],
        "answer": 2,
        "explanation": "คำอธิบาย: 'forget' ตามด้วย 'to + V.inf' หมายถึงลืมสิ่งที่ต้องทำ"
    },
    {
        "id": 60,
        "category": "Grammar",
        "question": "We are looking forward ________ visiting you.",
        "options": ["to", "for", "at", "in"],
        "answer": 0,
        "explanation": "คำอธิบาย: สำนวน 'look forward to' ต้องใช้คู่กับ 'to' (ตามด้วย V.ing)"
    },

    // === PART 4: Graphic Presentation (Items 61-80) ===
    {
        "id": 61,
        "category": "Graphic",
        "question": "Sign: 'EXIT'\nWhere would you see this sign?",
        "options": ["Inside a park", "Above a door", "On the street", "At a bus stop"],
        "answer": 1,
        "explanation": "คำอธิบาย: ป้าย EXIT (ทางออก) มักอยู่เหนือประตู"
    },
    {
        "id": 62,
        "category": "Graphic",
        "question": "Label: 'Store in a cool and dry place.'\nWhat does this mean?",
        "options": ["Put it in the oven.", "Keep it in the fridge or a cool area.", "Leave it outside in the sun.", "Wash it with water."],
        "answer": 1,
        "explanation": "คำอธิบาย: 'Cool and dry place' หมายถึงที่ที่เย็นและไม่ชื้น"
    },
    {
        "id": 63,
        "category": "Graphic",
        "question": "Notice: 'NO SMOKING'\nWhat happens if you smoke here?",
        "options": ["You get a prize.", "You might be fined.", "You are welcome.", "It is a rule."],
        "answer": 1,
        "explanation": "คำอธิบาย: เขตห้ามสูบบุหรี่ หากฝ่าฝืนมักจะถูกปรับ (be fined)"
    },
    {
        "id": 64,
        "category": "Graphic",
        "question": "Weather Forecast: ☀️ 38°C\nHow is the weather today?",
        "options": ["Cold", "Rainy", "Very hot", "Snowy"],
        "answer": 2,
        "explanation": "คำอธิบาย: สัญลักษณ์ดวงอาทิตย์และอุณหภูมิ 38 องศา หมายถึงอากาศร้อนมาก"
    },
    {
        "id": 65,
        "category": "Graphic",
        "question": "Sign: 'WET FLOOR'\nWhat should you do?",
        "options": ["Run fast.", "Jump.", "Walk carefully.", "Dance."],
        "answer": 2,
        "explanation": "คำอธิบาย: พื้นเปียก (Wet floor) ต้องเดินอย่างระมัดระวัง"
    },
    {
        "id": 66,
        "category": "Graphic",
        "question": "Product Label: 'Expiry Date: 12/2026'\nCan you eat this in 2027?",
        "options": ["Yes, it's fine.", "No, it's too old.", "Yes, if you cook it.", "Maybe."],
        "answer": 1,
        "explanation": "คำอธิบาย: หมดอายุ (Expiry Date) ปี 2026 ดังนั้นปี 2027 จึงทานไม่ได้แล้ว"
    },
    {
        "id": 67,
        "category": "Graphic",
        "question": "Price Tag: 'Buy 1 Get 1 Free'\nIf you buy 2 shirts, how many shirts will you get?",
        "options": ["2", "3", "4", "1"],
        "answer": 2,
        "explanation": "คำอธิบาย: โปรโมชั่น ซื้อ 1 แถม 1 ถ้าซื้อ 2 ก็จะได้แถมอีก 2 รวมเป็น 4 ตัว"
    },
    {
        "id": 68,
        "category": "Graphic",
        "question": "Sign: 'SILENCE, PLEASE'\nWhere is this sign most common?",
        "options": ["Market", "Concert", "Library", "Football stadium"],
        "answer": 2,
        "explanation": "คำอธิบาย: ป้ายขอความเงียบ (Silence) มักพบในห้องสมุด (Library)"
    },
    {
        "id": 69,
        "category": "Graphic",
        "question": "Notice: 'STAFF ONLY'\nWho can go inside?",
        "options": ["Students", "Customers", "Workers of the company", "Children"],
        "answer": 2,
        "explanation": "คำอธิบาย: STAFF ONLY หมายถึงเฉพาะพนักงาน (workers) เท่านั้น"
    },
    {
        "id": 70,
        "category": "Graphic",
        "question": "Review: ⭐⭐⭐⭐⭐ 'The best food in town!'\nDoes the reviewer like the food?",
        "options": ["No, it was bad.", "Yes, they loved it.", "It was okay.", "They didn't eat it."],
        "answer": 1,
        "explanation": "คำอธิบาย: 5 ดาวและคำว่า 'best food' แสดงว่าชอบมาก"
    },
    {
        "id": 71,
        "category": "Graphic",
        "question": "Sign: 'KEEP OFF THE GRASS'\nWhat should you not do?",
        "options": ["Water the grass.", "Walk on the grass.", "Look at the grass.", "Plant trees."],
        "answer": 1,
        "explanation": "คำอธิบาย: ป้ายห้ามเดินลัดสนาม (Keep off the grass)"
    },
    {
        "id": 72,
        "category": "Graphic",
        "question": "Ticket: 'One-Way Ticket to Lampang'\nCan the passenger go and come back with this ticket?",
        "options": ["Yes.", "No, only one way.", "Yes, if they pay extra.", "Only on weekends."],
        "answer": 1,
        "explanation": "คำอธิบาย: One-way ticket คือตั๋วเที่ยวเดียว ไม่ใช่ตั๋วไป-กลับ"
    },
    {
        "id": 73,
        "category": "Graphic",
        "question": "Sign: 'PLEASE DO NOT FEED THE ANIMALS'\nWhere are you?",
        "options": ["At school", "At the zoo", "At home", "At the library"],
        "answer": 1,
        "explanation": "คำอธิบาย: ป้ายห้ามให้อาหารสัตว์ มักพบในสวนสัตว์"
    },
    {
        "id": 74,
        "category": "Graphic",
        "question": "Ad: '50% OFF ALL ITEMS'\nA shirt costs 400 Baht. How much is it now?",
        "options": ["400 Baht", "300 Baht", "200 Baht", "100 Baht"],
        "answer": 2,
        "explanation": "คำอธิบาย: ลด 50% ของ 400 คือลดไปครึ่งราคา เหลือ 200 บาท"
    },
    {
        "id": 75,
        "category": "Graphic",
        "question": "Bus Schedule: 'Bus arrives every 15 minutes.'\nThe last bus was at 10:00. When is the next one?",
        "options": ["10:05", "10:15", "10:30", "11:00"],
        "answer": 1,
        "explanation": "คำอธิบาย: รถมาทุก 15 นาที รอบถัดไปจาก 10:00 คือ 10:15"
    },
    {
        "id": 76,
        "category": "Graphic",
        "question": "Sign: 'P' (in a blue circle)\nWhat can you do here?",
        "options": ["Play", "Park your car", "Push the door", "Pay money"],
        "answer": 1,
        "explanation": "คำอธิบาย: สัญลักษณ์ตัว P คือที่จอดรถ (Parking)"
    },
    {
        "id": 77,
        "category": "Graphic",
        "question": "Notice: 'NO FOOD OR DRINK ALLOWED'\nCan you eat a snack here?",
        "options": ["Yes.", "No.", "Only water.", "If you are quick."],
        "answer": 1,
        "explanation": "คำอธิบาย: ห้ามนำอาหารและเครื่องดื่มเข้ามา"
    },
    {
        "id": 78,
        "category": "Graphic",
        "question": "Sign: 'CAUTION: CHILDREN CROSSING'\nWhere should drivers be careful?",
        "options": ["Near a hospital", "Near a school", "In the mountains", "On a bridge"],
        "answer": 1,
        "explanation": "คำอธิบาย: ป้ายระวังเด็กข้ามถนน มักพบใกล้โรงเรียน"
    },
    {
        "id": 79,
        "category": "Graphic",
        "question": "Icon: 🔋 (Green, full bar)\nWhat does this mean?",
        "options": ["Battery is low.", "No signal.", "Battery is full.", "Bluetooth is on."],
        "answer": 2,
        "explanation": "คำอธิบาย: สัญลักษณ์แบตเตอรี่เต็ม"
    },
    {
        "id": 80,
        "category": "Graphic",
        "question": "Label: 'Hand Wash Only'\nCan you put this in a washing machine?",
        "options": ["Yes.", "No.", "Yes, with cold water.", "Only for 5 minutes."],
        "answer": 1,
        "explanation": "คำอธิบาย: 'Hand wash only' หมายถึงต้องซักด้วยมือเท่านั้น ห้ามใช้เครื่อง"
    },

    // === PART 5: Reading Passage & Vocab (Items 81-100) ===
    {
        "id": 81,
        "category": "Reading",
        "question": "Passage: 'The blue whale is the largest animal on Earth. It lives in the ocean and eats tiny shrimp called krill.'\nWhere does the blue whale live?",
        "options": ["In rivers", "In the ocean", "On land", "In lakes"],
        "answer": 1,
        "explanation": "คำอธิบาย: จากเนื้อเรื่องระบุว่า 'lives in the ocean'"
    },
    {
        "id": 82,
        "category": "Reading",
        "question": "Passage: 'The blue whale is the largest animal on Earth. It lives in the ocean and eats tiny shrimp called krill.'\nWhere does the blue whale live?  According to the passage above, what do blue whales eat?",
        "options": ["Small fish", "Plants", "Krill", "Bread"],
        "answer": 2,
        "explanation": "คำอธิบาย: จากเนื้อเรื่องระบุว่า 'eats tiny shrimp called krill'"
    },
    {
        "id": 83,
        "category": "Vocabulary",
        "question": "What is the synonym of 'huge'?",
        "options": ["Small", "Large", "Tiny", "Short"],
        "answer": 1,
        "explanation": "คำอธิบาย: 'huge' มีความหมายเดียวกับ 'large' (ใหญ่)"
    },
    {
        "id": 84,
        "category": "Reading",
        "question": "Passage: 'Bangkok is the capital city of Thailand. It is famous for its beautiful temples and delicious street food.'\nWhat is Bangkok famous for?",
        "options": ["Temples and food", "Snow and mountains", "Pyramids", "Fast cars"],
        "answer": 0,
        "explanation": "คำอธิบาย: ระบุในเนื้อเรื่องว่า 'famous for its beautiful temples and delicious street food'"
    },
    {
        "id": 85,
        "category": "Vocabulary",
        "question": "What is the opposite of 'easy'?",
        "options": ["Difficult", "Simple", "Happy", "Fast"],
        "answer": 0,
        "explanation": "คำอธิบาย: คำตรงข้ามของ 'easy' (ง่าย) คือ 'difficult' (ยาก)"
    },
    {
        "id": 86,
        "category": "Reading",
        "question": "Passage: 'Elephants are very smart animals. They use their trunks to breathe, drink, and pick up things.'\nWhat do elephants NOT use their trunks for?",
        "options": ["Breathe", "Drink", "Running", "Pick up things"],
        "answer": 2,
        "explanation": "คำอธิบาย: ในเนื้อเรื่องไม่ได้ระบุว่าใช้งวงในการวิ่ง (running)"
    },
    {
        "id": 87,
        "category": "Vocabulary",
        "question": "A person who teaches students is a __________.",
        "options": ["Doctor", "Teacher", "Driver", "Farmer"],
        "answer": 1,
        "explanation": "คำอธิบาย: ผู้ที่สอนนักเรียนคือ 'Teacher' (คุณครู)"
    },
    {
        "id": 88,
        "category": "Reading",
        "question": "Passage: 'Water is very important. We should save water by turning off the tap when we brush our teeth.'\nHow can we save water?",
        "options": ["Drink more water.", "Keep the tap running.", "Turn off the tap.", "Don't brush your teeth."],
        "answer": 2,
        "explanation": "คำอธิบาย: วิธีประหยัดน้ำที่ระบุคือ 'turning off the tap' (ปิดก๊อกน้ำ)"
    },
    {
        "id": 89,
        "category": "Vocabulary",
        "question": "Which of these is a fruit?",
        "options": ["Carrot", "Potato", "Apple", "Onion"],
        "answer": 2,
        "explanation": "คำอธิบาย: 'Apple' เป็นผลไม้ (fruit) ส่วนที่เหลือเป็นผัก"
    },
    {
        "id": 90,
        "category": "Reading",
        "question": "Passage: 'The sun rises in the east and sets in the west.'\nWhere does the sun set?",
        "options": ["In the north", "In the south", "In the east", "In the west"],
        "answer": 3,
        "explanation": "คำอธิบาย: เนื้อระบุว่า 'sets in the west' (ตกทางทิศตะวันตก)"
    },
    {
        "id": 91,
        "category": "Vocabulary",
        "question": "A place where you can borrow books is a __________.",
        "options": ["Market", "Hospital", "Library", "Bank"],
        "answer": 2,
        "explanation": "คำอธิบาย: สถานที่ยืมหนังสือคือ 'Library' (ห้องสมุด)"
    },
    {
        "id": 92,
        "category": "Reading",
        "question": "Passage: 'Bees are busy insects. They make honey and live in hives.'\nWhat do bees make?",
        "options": ["Milk", "Honey", "Bread", "Water"],
        "answer": 1,
        "explanation": "คำอธิบาย: ผึ้งทำน้ำผึ้ง (honey)"
    },
    {
        "id": 93,
        "category": "Vocabulary",
        "question": "What is the past tense of 'see'?",
        "options": ["Seen", "Saw", "Sees", "Seeing"],
        "answer": 1,
        "explanation": "คำอธิบาย: กริยาช่อง 2 ของ see คือ 'saw'"
    },
    {
        "id": 94,
        "category": "Reading",
        "question": "Passage: 'An octopus has eight arms and three hearts. It lives under the sea.'\nHow many hearts does an octopus have?",
        "options": ["One", "Eight", "Three", "No hearts"],
        "answer": 2,
        "explanation": "คำอธิบาย: เนื้อเรื่องระบุว่ามี 'three hearts' (3 ดวง)"
    },
    {
        "id": 95,
        "category": "Vocabulary",
        "question": "Which month comes after June?",
        "options": ["May", "July", "August", "April"],
        "answer": 1,
        "explanation": "คำอธิบาย: เดือนที่ต่อจากมิถุนายน (June) คือ กรกฎาคม (July)"
    },
    {
        "id": 96,
        "category": "Reading",
        "question": "Passage: 'Dogs are loyal pets. They have a great sense of smell.'\nAccording to the passage, dogs have a good sense of __________.",
        "options": ["Hearing", "Sight", "Smell", "Touch"],
        "answer": 2,
        "explanation": "คำอธิบาย: เนื้อระบุว่า 'sense of smell' (ประสาทสัมผัสการดมกลิ่น)"
    },
    {
        "id": 97,
        "category": "Vocabulary",
        "question": "The opposite of 'fast' is __________.",
        "options": ["Quick", "Slow", "High", "Short"],
        "answer": 1,
        "explanation": "คำอธิบาย: ตรงข้ามกับ 'fast' (เร็ว) คือ 'slow' (ช้า)"
    },
    {
        "id": 98,
        "category": "Reading",
        "question": "Passage: 'A library is a quiet place. People go there to read and study.'\nWhat should you do in a library?",
        "options": ["Talk loudly", "Read and study", "Play football", "Eat pizza"],
        "answer": 1,
        "explanation": "คำอธิบาย: วัตถุประสงค์ของการไปห้องสมุดคือ 'read and study'"
    },
    {
        "id": 99,
        "category": "Vocabulary",
        "question": "A person who flies an airplane is a __________.",
        "options": ["Nurse", "Chef", "Pilot", "Artist"],
        "answer": 2,
        "explanation": "คำอธิบาย: ผู้ขับเครื่องบินคือ 'Pilot' (นักบิน)"
    },
    {
        "id": 100,
        "category": "Reading",
        "question": "Passage: 'Exercise is good for your health. It makes your body strong and your mind happy.'\nWhy is exercise good for you?",
        "options": ["It makes you tired.", "It makes you strong and happy.", "It costs money.", "It takes too much time."],
        "answer": 1,
        "explanation": "คำอธิบาย: เนื้อเรื่องระบุว่าทำให้ร่างกายแข็งแรงและจิตใจมีความสุข 'makes your body strong and your mind happy'"
    }
];