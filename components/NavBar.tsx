import Image from "next/image"
import Link from "next/link"

const NavBar = () => {
  return (
    <header>
        <nav>
            <Link href="/" className="logo">
                <Image src="/icons/logo.png" width={24} height={24} alt="logo"  />
                <p>DevEvent</p>
            </Link>

            <ul>
                <Link href="/">Home</Link>
                <Link href="/events">Events</Link>
                <Link href="/create-events">Create Events</Link>
            </ul>
        </nav>
    </header>
  )
}

export default NavBar;