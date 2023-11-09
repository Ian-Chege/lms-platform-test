import Image from "next/image"
import Link from "next/link"

export const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <Image height={40} width={40} src="/logo.svg" alt="" />
      <h1 className="text-navy-blue text-2xl font-bold">Digikids</h1>
    </Link>
  )
}
