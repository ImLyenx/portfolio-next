export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const { default: Post } = await import(`@/content/${slug}.mdx`);

  return (
    <>
      <h1 className="capitalize font-bold">{slug}</h1>
      <Post />
    </>
  );
}

export function generateStaticParams() {
  return [
    { slug: "hosting" },
    { slug: "miscelleanous" },
    { slug: "portfolio" },
    { slug: "valorant" },
  ];
}

export const dynamicParams = false;
