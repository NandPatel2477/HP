// components/Sidebar.tsx
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 p-4">
      <ul>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/register">Register</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
        <li>
          <Link href="/analytics">Analytics</Link>
        </li>
        <li>
          <Link href="/profile">Profile</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
