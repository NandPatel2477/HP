// src/components/Navbar.tsx
import { Button } from '@shadcn/ui';

const Navbar = ({ toggleDarkMode, darkMode }: { toggleDarkMode: () => void; darkMode: boolean }) => {
  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Hackathon Dashboard</h1>
        <Button variant="outline" onClick={toggleDarkMode}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;

  