export default function EditorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="overflow-hidden h-screen">{children}</div>;
}