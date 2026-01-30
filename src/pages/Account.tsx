import { useNavigate } from 'react-router-dom';
import { MobileLayout } from '@/components/layout/MobileLayout';
import { 
  User, 
  Bell, 
  Languages, 
  Shield, 
  Moon, 
  HelpCircle, 
  Mail, 
  Lock,
  ChevronRight 
} from 'lucide-react';

const Account = () => {
  const navigate = useNavigate();

  const menuSections = [
    {
      items: [
        { icon: User, label: 'View profile information', path: '/profile' },
        { icon: Bell, label: 'Notification', path: '/notification-settings' },
        { icon: Languages, label: 'Language', value: 'English' },
      ],
    },
    {
      items: [
        { icon: Shield, label: 'Security', path: '/security' },
        { icon: Moon, label: 'Theme', value: 'Light mode' },
      ],
    },
    {
      items: [
        { icon: HelpCircle, label: 'Help & Support', path: '/help' },
        { icon: Mail, label: 'Contact us', path: '/contact' },
        { icon: Lock, label: 'Privacy policy', path: '/privacy' },
      ],
    },
  ];

  return (
    <MobileLayout>
      <div className="gradient-header">
        {/* Profile Header */}
        <div className="pt-10 pb-6 flex flex-col items-center">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-card border-4 border-card flex items-center justify-center overflow-hidden">
              <div className="w-full h-full bg-secondary flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-20 h-20">
                  {/* Simple avatar illustration */}
                  <circle cx="50" cy="35" r="20" fill="#d4a574" />
                  <circle cx="50" cy="30" r="18" fill="#d4a574" />
                  <ellipse cx="50" cy="80" rx="30" ry="25" fill="#ffffff" />
                  <rect x="35" y="55" width="30" height="20" fill="#ffffff" />
                  <rect x="45" y="70" width="10" height="15" fill="#dc2626" />
                  <path d="M35 55 L50 70 L65 55" fill="none" stroke="#0d9488" strokeWidth="2" />
                  {/* Hair */}
                  <path d="M30 35 Q35 15 50 15 Q65 15 70 35" fill="#8b5a2b" />
                  <path d="M30 35 Q25 45 30 55" fill="#8b5a2b" />
                  <path d="M70 35 Q75 45 70 55" fill="#8b5a2b" />
                </svg>
              </div>
            </div>
            <button className="absolute bottom-0 right-0 p-1.5 bg-card rounded-full border border-border shadow-sm">
              <svg className="w-4 h-4 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
              </svg>
            </button>
          </div>
          <h2 className="text-xl font-bold text-foreground mt-4">Sara Ali</h2>
        </div>
      </div>

      {/* Menu Sections */}
      <div className="px-5 py-4 space-y-4 animate-fade-in">
        {menuSections.map((section, sectionIdx) => (
          <div 
            key={sectionIdx}
            className="bg-secondary rounded-2xl overflow-hidden"
          >
            {section.items.map((item, itemIdx) => {
              const Icon = item.icon;
              return (
                <button
                  key={itemIdx}
                  onClick={() => item.path && navigate(item.path)}
                  className="w-full flex items-center justify-between p-4 hover:bg-accent/50 transition-colors border-b border-border/50 last:border-0"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-muted-foreground" />
                    <span className="font-medium text-foreground">{item.label}</span>
                  </div>
                  {item.value ? (
                    <span className="text-sm text-muted-foreground">{item.value}</span>
                  ) : (
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  )}
                </button>
              );
            })}
          </div>
        ))}
      </div>
    </MobileLayout>
  );
};

export default Account;
