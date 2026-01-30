import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

const Success = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const type = location.state?.type || 'report';

  const messages = {
    report: {
      title: 'Thank You',
      subtitle: 'Report Sent Successfully',
    },
    changes: {
      title: 'Thank You',
      subtitle: 'Changes Saved',
    },
  };

  const content = messages[type as keyof typeof messages] || messages.report;

  return (
    <div className="min-h-screen bg-card flex flex-col items-center justify-center px-6 max-w-md mx-auto">
      <div className="text-center animate-scale-in">
        <h1 className="text-3xl font-bold text-primary mb-8">{content.title}</h1>
        
        <div className="w-20 h-20 mx-auto mb-6 bg-primary rounded-2xl flex items-center justify-center shadow-button">
          <Mail className="w-10 h-10 text-primary-foreground" />
        </div>
        
        <p className="text-xl font-semibold text-foreground mb-12">{content.subtitle}</p>
        
        <div className="space-y-3 w-full">
          <Button 
            onClick={() => navigate('/reports')}
            className="w-full py-6 text-base font-semibold rounded-2xl shadow-button"
          >
            View the Report
          </Button>
          <Button 
            onClick={() => navigate('/dashboard')}
            className="w-full py-6 text-base font-semibold rounded-2xl shadow-button"
          >
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Success;
