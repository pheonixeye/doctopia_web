// export const runtime = "edge";

import Link from "next/link";

type Props = {
  params: { lang: string };
};

export default function DoctorPage({ params }: Props) {
  return (
    <>
      <div>DoctorPage</div>
      <Link href={`/${params.lang}`}>Go To HomePage</Link>
    </>
  );
}
