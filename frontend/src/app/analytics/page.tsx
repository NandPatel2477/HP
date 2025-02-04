// src/app/analytics/page.tsx
import { Card, CardHeader, CardBody, Button } from '@shadcn/ui';
import Chart from '../../components/Chart';

const AnalyticsPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-4">User Analytics</h1>
      <div className="grid grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader>
            <h3 className="text-xl">Monthly Overview</h3>
          </CardHeader>
          <CardBody>
            <Chart />
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <h3 className="text-xl">Active Users</h3>
          </CardHeader>
          <CardBody>
            <p className="text-2xl">80%</p>
          </CardBody>
        </Card>
      </div>
      <Button variant="outline" onClick={() => alert('More Analytics')}>
        View Detailed Analytics
      </Button>
    </div>
  );
};

export default AnalyticsPage;
