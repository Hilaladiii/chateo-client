import BottomNavigator from "@/commons/components/layouts/BottomNavigator";

export default function Layout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen justify-between">
      {modal}
      {children}
      <BottomNavigator />
    </div>
  );
}
