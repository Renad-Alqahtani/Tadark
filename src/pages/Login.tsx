import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { TadarakLogo } from '@/components/shared/TadarakLogo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { User, Lock, Eye, EyeOff } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [employeeId, setEmployeeId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo: navigate to dashboard
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-card flex flex-col max-w-md mx-auto">
      {/* Header with logo */}
      <div className="pt-12 pb-8 px-6 flex justify-center">
        <TadarakLogo size="md" showText={false} />
      </div>
      
      {/* Login Form */}
      <div className="flex-1 px-6 animate-fade-in">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-foreground">Login account</h1>
          <p className="text-muted-foreground mt-1">Use your credential to continue</p>
        </div>
        
        <form onSubmit={handleLogin} className="space-y-5">
          {/* Employee ID */}
          <div className="space-y-2">
            <Label htmlFor="employeeId" className="text-sm font-medium text-foreground">
              Employee ID
            </Label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                id="employeeId"
                type="text"
                placeholder="Enter Employee ID"
                value={employeeId}
                onChange={(e) => setEmployeeId(e.target.value)}
                className="pl-12 py-6 rounded-xl border-border bg-background"
              />
            </div>
          </div>
          
          {/* Password */}
          <div className="space-y-2">
            <Label htmlFor="password" className="text-sm font-medium text-foreground">
              Password
            </Label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-12 pr-12 py-6 rounded-xl border-border bg-background"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>
          
          {/* Forgot Password Link */}
          <div className="flex justify-end">
            <Link to="/forgot-password" className="text-sm text-primary font-medium hover:underline">
              Forgot password?
            </Link>
          </div>
          
          {/* Login Button */}
          <Button 
            type="submit"
            className="w-full py-6 text-lg font-semibold rounded-2xl shadow-button mt-6"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
