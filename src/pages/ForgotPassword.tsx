import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ChevronLeft, User, CreditCard, Hash, Phone, Lock, Eye, EyeOff } from 'lucide-react';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-card flex flex-col max-w-md mx-auto">
      {/* Header */}
      <div className="pt-6 px-4 pb-4">
        <button 
          onClick={() => navigate(-1)}
          className="p-2 rounded-xl border border-border hover:bg-secondary transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-foreground" />
        </button>
      </div>
      
      {/* Content */}
      <div className="flex-1 px-6 animate-fade-in">
        <h1 className="text-2xl font-bold text-foreground mb-6">Forgot password</h1>
        
        <form onSubmit={handleReset} className="space-y-4">
          {/* Full Name */}
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                id="fullName"
                type="text"
                placeholder="Full Name"
                className="pl-12 py-5 rounded-xl"
              />
            </div>
          </div>
          
          {/* ID Number */}
          <div className="space-y-2">
            <Label htmlFor="idNumber">ID Number</Label>
            <div className="relative">
              <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                id="idNumber"
                type="text"
                placeholder="ID Number"
                className="pl-12 py-5 rounded-xl"
              />
            </div>
          </div>
          
          {/* Employee Number */}
          <div className="space-y-2">
            <Label htmlFor="employeeNumber">Employee Number</Label>
            <div className="relative">
              <Hash className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                id="employeeNumber"
                type="text"
                placeholder="Employee Number"
                className="pl-12 py-5 rounded-xl"
              />
            </div>
          </div>
          
          {/* Phone Number */}
          <div className="space-y-2">
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                id="phoneNumber"
                type="tel"
                placeholder="Phone Number"
                className="pl-12 py-5 rounded-xl"
              />
            </div>
          </div>
          
          {/* New Password */}
          <div className="space-y-2">
            <Label htmlFor="newPassword">New Password</Label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                id="newPassword"
                type={showPassword ? 'text' : 'password'}
                placeholder="New Password"
                className="pl-12 pr-12 py-5 rounded-xl"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>
          
          {/* Confirm Password */}
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm New Password</Label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                id="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Confirm New Password"
                className="pl-12 pr-12 py-5 rounded-xl"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground"
              >
                {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>
          
          {/* Reset Button */}
          <Button 
            type="submit"
            className="w-full py-6 text-lg font-semibold rounded-2xl shadow-button mt-4"
          >
            Reset Password
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
