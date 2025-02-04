// src/app/activity/page.tsx
import { Card, CardHeader, CardBody, Button } from '@shadcn/ui';

const ActivityPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-4">User Activity</h1>
      <Card>
        <CardHeader>
          <h3 className="text-xl">Recent Activities</h3>
        </CardHeader>
        <CardBody>
          <p>User logged in.</p>
          <p>Created a new post.</p>
          <p>Updated profile settings.</p>
        </CardBody>
      </Card>
      <Button variant="outline">Load More</Button>
    </div>
  );
};

export default ActivityPage;
