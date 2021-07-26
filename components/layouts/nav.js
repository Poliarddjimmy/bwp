import Link from "next/link"

export default function Nav() {
  return (
    <div className="main-nav">
      <ul className='main-menu'>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/posts">Posts</Link>
          <ul className='submenu'>
            <li><a href="#">category 1</a></li>
            <li><a href="#">category 2</a></li>
          </ul>
        </li>
      </ul>
    </div>
  )
}