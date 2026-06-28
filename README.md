# عيادة الكريمة

موقع عيادة أسنان عربي RTL مبني بـ Next.js وTypeScript وTailwind CSS، مع صفحات عامة، نظام حجز، لوحة إدارة تجريبية، Prisma schema وNextAuth.

## التشغيل

```bash
npm install
npm run dev
```

افتح `http://localhost:3000`.

## قاعدة البيانات

انسخ `.env.example` إلى `.env` وعدل `DATABASE_URL`، ثم:

```bash
npm run prisma:generate
npm run prisma:migrate
```

الواجهة تعمل ببيانات demo قبل ربط PostgreSQL.
