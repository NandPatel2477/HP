// src/app/page.tsx
import { Card, CardHeader, CardBody, Button } from '@shadcn/ui';
// src/app/page.tsx
import CustomCard from '../components/charts/Card'; 

const HomePage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-3 gap-6 mb-6">
        <CustomCard title="Total Users" value="1000" />
        <CustomCard title="Active Users" value="800" />
        <CustomCard title="Revenue" value="$100,000" />
      </div>
      <div>
        <Button variant="primary" onClick={() => alert('View More')}>
          View More
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
