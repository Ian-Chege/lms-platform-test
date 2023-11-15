import { SignIn } from "@clerk/nextjs"
import Image from "next/image"

export default function Page() {
  return (
    <div className="flex justify-between gap-4 items-center">
      <SignIn />
      <div className="flex justify-end h-screen pl-4 border-l-2 border-solid divide-slate-700">
        <Image
          src="/auth.svg"
          alt=""
          width={500}
          height={850}
          objectFit="fill"
        />
      </div>
    </div>
  )
}
