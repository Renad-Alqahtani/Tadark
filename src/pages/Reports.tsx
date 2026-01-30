import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MobileLayout } from '@/components/layout/MobileLayout';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Settings2, Pill, Calendar, Clock } from 'lucide-react';

interface ReportItem {
  id: number;
  prescriptionNumber: string;
  date: string;
  time: string;
}

const Reports = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('waiting');

  const waitingReports: ReportItem[] = [
    { id: 1, prescriptionNumber: '988734882', date: '16 oct 2025', time: '1:15PM' },
    { id: 2, prescriptionNumber: '988776289', date: '20 oct 2025', time: '2:45PM' },
    { id: 3, prescriptionNumber: '988776117', date: '10 nov 2025', time: '11:30AM' },
    { id: 4, prescriptionNumber: '988776510', date: '29 Des 2025', time: '3:30PM' },
  ];

  const closedReports: ReportItem[] = [
    { id: 5, prescriptionNumber: '988734622', date: '22 Oct 2025', time: '4:40PM' },
    { id: 6, prescriptionNumber: '988776634', date: '29 Oct 2025', time: '9:30AM' },
  ];

  const ReportCard = ({ report }: { report: ReportItem }) => (
    <div className="bg-card rounded-2xl border border-border p-4 shadow-card">
      <div className="flex items-start gap-3">
        <div className="p-2 bg-secondary rounded-xl">
          <Pill className="w-5 h-5 text-primary" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <span className="font-medium text-foreground">Prescription Number:</span>
            <span className="font-semibold text-foreground">{report.prescriptionNumber}</span>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{report.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{report.time}</span>
            </div>
          </div>
        </div>
        <Button 
          size="sm"
          onClick={() => navigate(`/report/${report.id}`)}
          className="rounded-full px-4"
        >
          View
        </Button>
      </div>
    </div>
  );

  return (
    <MobileLayout>
      <div className="px-5 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-bold text-foreground">Report</h1>
          <button className="p-2 rounded-xl hover:bg-secondary transition-colors">
            <Settings2 className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full grid grid-cols-2 mb-6 bg-transparent p-0 h-auto">
            <TabsTrigger 
              value="waiting" 
              className="py-3 rounded-none border-b-2 data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=inactive]:border-transparent data-[state=inactive]:text-muted-foreground bg-transparent shadow-none"
            >
              Waiting for Permission
            </TabsTrigger>
            <TabsTrigger 
              value="closed"
              className="py-3 rounded-none border-b-2 data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=inactive]:border-transparent data-[state=inactive]:text-muted-foreground bg-transparent shadow-none"
            >
              Closed Prescription
            </TabsTrigger>
          </TabsList>

          <TabsContent value="waiting" className="space-y-4 animate-fade-in">
            {waitingReports.map((report) => (
              <ReportCard key={report.id} report={report} />
            ))}
          </TabsContent>

          <TabsContent value="closed" className="space-y-4 animate-fade-in">
            {closedReports.map((report) => (
              <ReportCard key={report.id} report={report} />
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </MobileLayout>
  );
};

export default Reports;
