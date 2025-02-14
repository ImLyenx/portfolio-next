export default function HomePageSection({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-contrast border-l-4 border-l-primary pl-4 font-bold">
        {title}
      </h2>
      {children}
    </div>
  );
}
