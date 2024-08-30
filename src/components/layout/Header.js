import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center">
        <Image src={'/logo.jpg'} width={50} height={50} className="mr-2" alt={'logo'}/>
        <Link className="text-primary font-semibold text-2xl" href="">FoodModo</Link>
      </div>
      <nav className="flex items-center gap-8 text-gray-500 font-semibold">
        <Link href={''}>Home</Link>
        <Link href={''}>Menu</Link>
        <Link href={''}>About</Link>
        <Link href={''}>Contact</Link>
        <Link href={''} className="bg-primary rounded-full text-white px-8 py-2">Login</Link>
      </nav>
      </header>
  );
}