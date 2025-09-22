import Link from "next/link";

export default function Sidebar() {
  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link" href="/home">
            <i className="icon-grid menu-icon" />
            <span className="menu-title">Dashboard</span>
          </Link>
        </li>

        <li className="nav-item">
          <a
            className="nav-link"
            data-toggle="collapse"
            href="#auth"
            aria-expanded="false"
            aria-controls="auth"
          >
            <i className="icon-head menu-icon" />
            <span className="menu-title">User Pages</span>
            <i className="menu-arrow" />
          </a>

          <div className="collapse" id="auth">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                <Link className="nav-link" href="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/users">
                  Users
                </Link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  );
}
