import { useNavigate, useParams } from 'react-router-dom';
import { MobileLayout } from '@/components/layout/MobileLayout';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

const ReportDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Mock data
  const report = {
    id: id,
    reportNumber: '24361',
    pharmacistName: 'Dr.Bassam Ali',
    employeeId: '2579426',
    department: 'Emergency',
    prescriptionNumber: 'RX-772428',
    medicationName: 'Insulin glargine 100ml',
    errorType: 'wrong dose',
    date: '23 Jun, 2026',
    time: '6:45 PM',
    note: 'Prescribed 40 instead of 4',
    hasPhoto: true,
  };

  const DetailRow = ({ label, value }: { label: string; value: string }) => (
    <div className="flex justify-between py-3 border-b border-border last:border-0">
      <span className="text-primary font-medium">{label}</span>
      <span className="text-muted-foreground">{value} (auto Filled)</span>
    </div>
  );

  return (
    <MobileLayout showNav={false}>
      <div className="min-h-screen bg-card flex flex-col">
        {/* Header */}
        <div className="pt-6 px-4 pb-4 flex items-center gap-4">
          <button 
            onClick={() => navigate(-1)}
            className="p-2 rounded-xl border border-primary text-primary hover:bg-secondary transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h1 className="text-lg font-bold text-foreground">Report Details</h1>
        </div>

        {/* Content */}
        <div className="flex-1 px-6 pb-8 animate-fade-in">
          <p className="font-semibold text-foreground mb-6">Report No: {report.reportNumber}</p>

          <div className="space-y-1">
            <DetailRow label="Pharmacists Name" value={report.pharmacistName} />
            <DetailRow label="Employee ID" value={report.employeeId} />
            <DetailRow label="Department" value={report.department} />
            <DetailRow label="Prescription Number" value={report.prescriptionNumber} />
            <DetailRow label="Medication Name" value={report.medicationName} />
            <DetailRow label="Error Type" value={report.errorType} />
            <DetailRow label="Data" value={report.date} />
            <DetailRow label="Time" value={report.time} />
            
            <div className="flex justify-between py-3 border-b border-border">
              <span className="text-primary font-medium">Note</span>
              <span className="text-muted-foreground">{report.note} (manual)</span>
            </div>
            
            <div className="flex justify-between py-3">
              <span className="text-primary font-medium">Photo (optional)</span>
              <span className="text-muted-foreground">Prescription image attached</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 space-y-3">
            <Button 
              className="w-full py-6 text-base font-semibold rounded-2xl shadow-button"
            >
              Edit Prescription
            </Button>
            <div className="flex gap-3">
              <Button 
                variant="outline"
                className="flex-1 py-5 rounded-2xl border-primary text-primary hover:bg-primary/5"
              >
                Comment
              </Button>
              <Button 
                variant="outline"
                className="flex-1 py-5 rounded-2xl border-primary text-primary hover:bg-primary/5"
              >
                Rejected
              </Button>
            </div>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
};

export default ReportDetails;
