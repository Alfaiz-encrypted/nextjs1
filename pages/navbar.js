import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li className="nav-item">
                    <Link href="/blog/blog1">
                        bloag1
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/blog/blog2">
                        bloag2
                    </Link>
                </li>
                {/* <li className="nav-item">
                    <Link href="/contact">
                        Contact
                    </Link>
                </li> */}
                {/* Add more links as needed */}
            </ul>

            {/* Add additional styling or components here */}
            <style jsx>{`
        .navbar {
          background-color: rgb(33, 10, 48);
          padding: 10px;
        }

        .nav-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          color:white;
        }

        .nav-item {
          margin-right: 15px;
          color:white
        }

        .nav-link {
          text-decoration: none;
          color: white;
          font-weight: bold;
          font-size: 16px;
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
