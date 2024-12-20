interface INavLayout {
  prefixTitle: string;
  children: React.ReactNode;
}

export default function NavLayout({ prefixTitle, children }: INavLayout) {
  return (
    <div className="flex justify-between items-center px-6 py-3 subheading1">
      <h1>{prefixTitle}</h1>
      <div>{children}</div>
    </div>
  );
}
