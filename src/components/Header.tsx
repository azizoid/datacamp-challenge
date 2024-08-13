const links = [
  {
    title: "Github",
    link: "https://github.com/azizoid"
  },
  {
    title: 'Youtube',
    link: 'https://youtube.com/@azizoid'
  }
]

export const Header = () => <header className="w-full bg-gray-800 text-white py-4">
  <div className="container mx-auto flex justify-between items-center">
    <a href="/" className="text-2xl font-bold">
      DATACAMP
    </a>
    <nav className="space-x-4">
      {links.map(({ title, link }) => <a
        key={`${title}-${link}`}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-gray-400"
      >
        {title}
      </a>)}
    </nav>
  </div>
</header>