// src/app/profile/page.tsx
import { Card, CardHeader, CardBody } from '@shadcn/ui';

const ProfilePage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-6">User Profile</h1>
      <Card>
        <CardHeader>
          <h3 className="text-xl">Profile Information</h3>
        </CardHeader>
        <CardBody>
          <div className="space-y-4">
            <p>Name: John Doe</p>
            <p>Email: john.doe@example.com</p>
            <p>Role: Admin</p>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProfilePage;
