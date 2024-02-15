// export const runtime = "edge";

import Link from "next/link";

type Props = {
  params: { lang: string; docid: string };
};

export default function DoctorsPage({ params }: Props) {
  return (
    <>
      <div>All Doctors Page</div>
      <Link href={`/${params.lang}/doctors/55`}>Go To Doctor Page</Link>
    </>
  );
}
