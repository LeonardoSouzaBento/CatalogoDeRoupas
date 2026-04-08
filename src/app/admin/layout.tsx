import { AdminProvider } from "@/contexts/adminContext";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AdminProvider>
      <div className="flex flex-col min-h-screen relative">
        {children}
      </div>
    </AdminProvider>
  );
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
