import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Success = () => {
  const navigate = useNavigate();

  // Get current date/time
  const now = new Date();
  const dateString = now.toLocaleDateString('en-US', { 
    weekday: 'short', 
    month: 'short',
    day: 'numeric'
  });
  const timeString = now.toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: false 
  });

  return (
    <div className="min-h-screen bg-card flex flex-col items-center justify-center px-6 max-w-md mx-auto">
      <div className="text-center animate-scale-in">
        <h1 className="text-3xl font-bold text-primary mb-12">Thank You</h1>
        
        {/* Email Icon */}
        <div className="w-24 h-24 mx-auto mb-6 relative">
          <div className="w-full h-full bg-primary rounded-2xl flex items-end justify-center overflow-hidden">
            <div className="w-full h-3/4 bg-secondary/80 rounded-t-lg relative">
              <div className="absolute top-0 left-0 right-0 h-6 bg-primary" 
                style={{ clipPath: 'polygon(0 0, 50% 100%, 100% 0)' }} />
            </div>
          </div>
        </div>
        
        <p className="text-xl font-semibold text-foreground mb-2">Report Sent Successfully</p>
        
        <p className="text-muted-foreground mb-8">
          {dateString} at {timeString}
        </p>
        
        <div className="space-y-3 w-full mt-8">
          <Button 
            onClick={() => navigate('/')}
            className="w-full h-14 text-base font-semibold rounded-2xl"
          >
            View the Report
          </Button>
          <Button 
            onClick={() => navigate('/')}
            className="w-full h-14 text-base font-semibold rounded-2xl"
          >
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Success;
