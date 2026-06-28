import { AdminDashboardClient } from "@/components/AdminDashboardClient";

export const metadata = {
  title: "لوحة الإدارة",
  description: "إدارة المواعيد والمحتوى والتحليلات في عيادة الكريمة."
};

export default function AdminDashboardPage() {
  return <AdminDashboardClient />;
}
