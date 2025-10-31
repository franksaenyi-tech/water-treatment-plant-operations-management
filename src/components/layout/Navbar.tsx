
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Droplet, LogOut, Menu, Moon, Sun } from 'lucide-react';
import { useState } from 'react';

export const Navbar = () => {
  const { user, signOut } = useAuth();
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="border-b bg-card">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2">
              <Droplet className="h-8 w-8 text-primary" />
              <div>
                <h1 className="text-xl font-bold text-foreground">Matisi T/works</h1>
                <p className="text-xs text-muted-foreground">Water Treatment Operations</p>
              </div>
            </Link>
            
            {user && (
              <div className="hidden md:flex items-center gap-4">
                <Link to="/dashboard">
                  <Button variant="ghost">Dashboard</Button>
                </Link>
                <Link to="/pump-readings">
                  <Button variant="ghost">Pump Readings</Button>
                </Link>
                <Link to="/chemical-inventory">
                  <Button variant="ghost">Chemical Inventory</Button>
                </Link>
                <Link to="/reports">
                  <Button variant="ghost">Reports</Button>
                </Link>
              </div>
            )}
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            
            {user && (
              <>
                <div className="hidden md:block text-sm">
                  <p className="font-medium text-foreground">{user.full_name}</p>
                  <p className="text-xs text-muted-foreground capitalize">{user.role}</p>
                </div>
                <Button variant="outline" size="sm" onClick={signOut}>
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </Button>
              </>
            )}
            
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};