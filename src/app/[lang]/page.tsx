export const runtime = "edge";

import Link from "next/link";

type Props = {
  params: { lang: string };
};

export default function SearchPage({ params }: Props) {
  return (
    <>
      <div>Search Page</div>
      <Link href={`/${params.lang}/doctors`}>Go To Doctors Page</Link>
    </>
  );
}
