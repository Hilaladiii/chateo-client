import BottomNavigator from "@/commons/components/layouts/BottomNavigator";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen justify-between">
      {children}
      <BottomNavigator />
    </div>
  );
}
