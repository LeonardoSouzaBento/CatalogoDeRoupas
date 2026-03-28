import { StoreLayout } from "@/components/common/store-layout";

export default function LojaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <StoreLayout>{children}</StoreLayout>;
}
