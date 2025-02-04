// src/app/reports/page.tsx
import { Card, CardHeader, CardBody, Button } from '@shadcn/ui';

const ReportsPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-4">Reports & Insights</h1>
      <Card>
        <CardHeader>
          <h3 className="text-xl">Monthly Report</h3>
        </CardHeader>
        <CardBody>
          <p>Data and insights will be here...</p>
        </CardBody>
      </Card>
      <Button variant="outline" onClick={() => alert('Generating Report')}>
        Generate Report
      </Button>
    </div>
  );
};

export default ReportsPage;
