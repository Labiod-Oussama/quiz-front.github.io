export interface IQuestion {
    mainQuestion: string;
    subQuestions: string[];
}

export type QuestionProps = {
    id: number;
    title: string;
    time?: number;
    description?: string;
    type?: 'question' | 'picture' | 'text';
    questions: string[] | number[] | IQuestion;
};

export const questions: QuestionProps[] = [
    {
        id: 1,
        title: "التوجه الزماني",
        description: "ماهو التاريخ الكامل لنهار اليوم؟ اذا كان الجواب صحيحا تعطى العلامة 5 أما اذا كان خاطئا أو ناقصا نطرح الأسئلة الباقية على النحو الأتي:",
        questions: {
            mainQuestion: "ماهو التاريخ الكامل لنهار اليوم؟",
            subQuestions: [
                "في أي عام نحن؟",
                "في أي فصل؟",
                "في أي شهر؟",
                "في أي يوم من الشهر؟",
                "في أي يوم من الأسبوع؟"
            ]
        }
    },
    {
        id: 2,
        title: "التوجه المكاني",
        description: "والان سأطرح عليك بعض الأسئلة تخص المكان الذي نحن متواجدون فيه.",
        questions: [
            "ما اسم البلد الذي نحن متواجدون فيه؟",
            "ما اسم الولاية التي نحن متواجدون فيها؟",
            "ما اسم المستشفى الذي نحن متواجدون فيه؟",
            "ما اسم المكان الذي يقع فيه هذا المستشفى؟",
            "في أي طابق نحن متواجدون فيه؟"
        ]
    },
    {
        id: 3,
        title: "التخزين",
        description: "سأقول لك 3 كلمات أريدك أن تعيدها بعدي ثلاث مرات. وحاول تذكرهم لأننا سنعود اليهم لاحقا.",
        questions: ["طاولة", "تفاحة", "دراهم"]
    },
    {
        id: 4,
        title: "الانتباه والحساب",
        description: "أبدا بالعد التنازلي من 100 وفي كل مرة أنقص 3 حتى أطلب منك التوقف.",
        questions: [100, 97, 94, 91, 88]
    },
    {
        id: 5,
        title: "التذكر",
        time: 10,
        description: "يطلب من الحالة أعادة الكلمات الثلاثة التي كررت في بند التخزين و لا يسمح بأي تساهل . وتمنح 10 ثواني للاجابة.",
        questions: ["طاولة", "تفاحة", "دراهم"]
    },
    {
        id: 6,
        title: "التسمية",
        time: 20,
        description: "تمنح 10 ثواني لكل اجابة.",
        questions: [
            "إظهار القلم ونطرح السؤال: (ما اسم هذا؟)",
            "إظهار الساعة ونطرح السؤال: (ما اسم هذا؟)"
        ]
    },
    {
        id: 7,
        title: "الإعادة",
        description: "اسمع جيدا وحاول اعادة الجملة بعدي.",
        questions: [
            "ماشي لوكان هكذا ولابصح"
        ]
    },
    {
        id: 8,
        title: "فهم اللغة الشفهية",
        description: "ضع ورقة فوق المكتب مبينا أياها للمفحوص قائلا له اسمع جيدا وافعل ما أطلبه منك.",
        questions: [
            "خذ الورقة بيدك اليمنى.",
            "اطوِها في الوسط.",
            "ألقيها على الأرض."
        ]
    },
    {
        id: 9,
        title: "فهم اللغة الكتابية",
        description: 'اظهار للمفحوص ورقة مكتوب عليها"غمض عينيك" ويطلب منه أن يقرأ ما هو مكتوب ويقوم بتنفيذ التعليمة على نفسه, وتعطى للحالة العلامة الكاملة اذا أغمضت عينيها.',
        questions: [
            "غمض عينيك"
        ]
    },
    {
        id: 10,
        title: "اللغة الكتابية",
        type: "text",
        time: 30,
        description: "تمنح 30 ثانية لأداء المهمة.",
        questions: [
            "أكتب جملة بسيطة والتي تخطر على بالك."
        ]
    },
    {
        id: 11,
        title: "الرسم",
        type: "picture",
        time: 60,
        description: "تمنح نقطة واحدة اذا كانت الزوايا واضحة وتقاطع الشكلين واضح. وتمنح دقيقة واحدة لأداء المهمة. ",
        questions: [
            "حاول ترسم وحدة كيما هذي."
        ]

    }
];