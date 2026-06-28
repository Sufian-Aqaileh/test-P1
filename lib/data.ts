import {
  Activity,
  BadgeCheck,
  Bone,
  CalendarCheck,
  Clock,
  CirclePlus,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Syringe,
  UserRoundCheck
} from "lucide-react";

export const clinic = {
  name: "عيادة الكريمة",
  tagline: "رعاية متكاملة لطب وجراحة الفم والأسنان",
  phone: "0777650178",
  whatsapp: "962777650178",
  city: "اربد، الأغوار الشمالية، كريمة",
  address: "الأردن - اربد - الأغوار الشمالية - كريمة",
  maps: "https://maps.app.goo.gl/KXNf2p7zhQFHj9RQ7",
  hours: "السبت - الخميس، 9:00 صباحا - 6:00 مساء"
};

export const navItems = [
  ["الرئيسية", "/"],
  ["الخدمات", "/services"],
  ["الأطباء", "/doctors"],
  ["الحجز", "/appointments"],
  ["نتائج العلاج", "/results"],
  ["المعرض", "/gallery"],
  ["الموقع", "/location"],
  ["الإدارة", "/admin"]
] as const;

export const services = [
  ["فحص الأسنان", "تقييم شامل لصحة الأسنان واللثة مع خطة علاج واضحة.", "20 دقيقة", CirclePlus],
  ["تنظيف الأسنان", "إزالة التصبغات السطحية وتحسين صحة الفم.", "35 دقيقة", Sparkles],
  ["إزالة الجير", "تنظيف عميق لتقليل التهابات اللثة والروائح.", "40 دقيقة", ShieldCheck],
  ["حشوات الأسنان", "حشوات تجميلية بلون السن للحفاظ على المظهر الطبيعي.", "45 دقيقة", BadgeCheck],
  ["علاج التسوس", "إزالة التسوس وترميم السن بتقنيات حديثة.", "45 دقيقة", Activity],
  ["علاج عصب الأسنان", "علاج دقيق للألم والالتهاب للحفاظ على السن.", "75 دقيقة", HeartPulse],
  ["خلع الأسنان", "خلع آمن ومريح مع تعليمات متابعة واضحة.", "30 دقيقة", Syringe],
  ["خلع ضرس العقل", "تقييم وجراحة ضرس العقل بأقل انزعاج ممكن.", "60 دقيقة", Bone],
  ["تركيب التيجان والجسور", "تعويضات ثابتة بجودة ومظهر طبيعي.", "90 دقيقة", BadgeCheck],
  ["زراعة الأسنان", "حل دائم لتعويض الأسنان المفقودة بخطة متكاملة.", "90 دقيقة", ShieldCheck],
  ["تقويم الأسنان", "تصحيح ترتيب الأسنان لتحسين الابتسامة والعضة.", "30 دقيقة", UserRoundCheck],
  ["تبييض الأسنان", "تبييض آمن يمنح الابتسامة إشراقة واضحة.", "50 دقيقة", Sparkles],
  ["تجميل الأسنان", "تحسين شكل الابتسامة بتفاصيل تناسب ملامح الوجه.", "60 دقيقة", CirclePlus],
  ["القشور التجميلية (Veneers)", "قشور رقيقة لتصميم ابتسامة أكثر تناسقا.", "90 دقيقة", Sparkles],
  ["علاج التهابات اللثة", "خطة علاج ومتابعة للثة صحية ومستقرة.", "45 دقيقة", HeartPulse],
  ["جراحة الفم والأسنان", "إجراءات جراحية فموية بمعايير طبية موثوقة.", "75 دقيقة", Stethoscope],
  ["متابعة العلاج", "مراجعة النتائج وضبط الخطة العلاجية.", "20 دقيقة", CalendarCheck],
  ["استشارة طبية", "استشارة عامة وتوجيه مناسب للحالة.", "25 دقيقة", Clock],
  ["خدمات أخرى", "نساعدك في تحديد الخدمة المناسبة عند الزيارة.", "حسب الحالة", Activity]
] as const;

export const bookingServices = [
  "ألم أسنان",
  "فحص أسنان",
  "تنظيف أسنان",
  "علاج تسوس",
  "علاج عصب",
  "خلع أسنان",
  "خلع ضرس عقل",
  "تقويم أسنان",
  "زراعة أسنان",
  "تبييض أسنان",
  "متابعة موعد سابق",
  "استشارة",
  "أخرى"
];

export const doctors = [
  {
    name: "د. أحمد الكريمة",
    specialty: "طب وجراحة الفم والأسنان",
    experience: "12 سنة خبرة",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=900&auto=format&fit=crop",
    bio: "يهتم بتقديم علاج محافظ ومريح مع شرح كامل للحالة قبل بدء الخطة العلاجية."
  },
  {
    name: "د. سارة العلي",
    specialty: "تجميل الأسنان وعلاج اللثة",
    experience: "8 سنوات خبرة",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=900&auto=format&fit=crop",
    bio: "تركز على تصميم ابتسامة طبيعية وتحسين صحة اللثة باستخدام أساليب حديثة."
  },
  {
    name: "د. عمر محمود",
    specialty: "الطب العام والمتابعة الطبية",
    experience: "10 سنوات خبرة",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=900&auto=format&fit=crop",
    bio: "يوفر رعاية أولية واستشارات عامة تساعد المرضى على اختيار المسار العلاجي المناسب."
  }
];

export const testimonials = [
  ["تجربة ممتازة، الحجز كان سريع والطبيب شرح لي كل خطوة بوضوح.", "رنا م.", 5],
  ["النظافة والاهتمام بالتفاصيل أعطوني ثقة كبيرة. أنصح بها.", "محمد ع.", 5],
  ["تعامل راق ونتيجة التبييض كانت أجمل من المتوقع.", "لينا ك.", 5]
] as const;

export const treatmentCases = [
  {
    title: "تحسين لون الابتسامة",
    category: "تبييض الأسنان",
    duration: "جلسة واحدة",
    age: "29 سنة",
    type: "تبييض آمن",
    description: "تحسين واضح في درجة اللون مع الحفاظ على مظهر طبيعي.",
    featured: true,
    published: true,
    consentApproved: true,
    before: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=900&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?q=80&w=900&auto=format&fit=crop"
  },
  {
    title: "ترميم تجميلي أمامي",
    category: "تجميل الأسنان",
    duration: "زيارتان",
    age: "34 سنة",
    type: "حشوات تجميلية",
    description: "إعادة تنسيق الأسنان الأمامية بترميمات قريبة من لون السن.",
    featured: true,
    published: true,
    consentApproved: true,
    before: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=900&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=900&auto=format&fit=crop"
  },
  {
    title: "تعويض سن مفقود",
    category: "زراعة الأسنان",
    duration: "3 أشهر",
    age: "42 سنة",
    type: "زراعة وتاج",
    description: "خطة زراعة وتعويض ثابت لاستعادة الوظيفة والمظهر.",
    featured: false,
    published: true,
    consentApproved: true,
    before: "https://images.unsplash.com/photo-1616391182219-e080b4d1043a?q=80&w=900&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?q=80&w=900&auto=format&fit=crop"
  }
];

export const gallery = [
  ["غرفة العلاج", "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop"],
  ["منطقة الانتظار", "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop"],
  ["معدات حديثة", "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&auto=format&fit=crop"],
  ["عناية وتعقيم", "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1200&auto=format&fit=crop"],
  ["ابتسامة صحية", "https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?q=80&w=1200&auto=format&fit=crop"],
  ["استشارة طبية", "https://images.unsplash.com/photo-1551190822-a9333d879b1f?q=80&w=1200&auto=format&fit=crop"]
] as const;

export const appointments = [
  { patient: "سامي خالد", phone: "0790001111", service: "علاج عصب", date: "2026-06-27", time: "10:00", status: "مؤكد" },
  { patient: "نور علي", phone: "0790002222", service: "تبييض أسنان", date: "2026-06-27", time: "12:00", status: "بانتظار التأكيد" },
  { patient: "مها حسن", phone: "0790003333", service: "فحص أسنان", date: "2026-06-28", time: "09:00", status: "مكتمل" }
];

export const allSlots = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];
export const bookedSlotsByDate: Record<string, string[]> = {
  "2026-06-27": ["10:00", "12:00"],
  "2026-06-28": ["09:00", "13:00"]
};
