// src/app/login/page.tsx
import { Card, CardHeader, CardBody, Input, Button } from '@shadcn/ui';

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <Card className="w-96">
        <CardHeader>
          <h2 className="text-2xl font-semibold">Login</h2>
        </CardHeader>
        <CardBody>
          <div className="space-y-4">
            <Input placeholder="Email" className="w-full" />
            <Input placeholder="Password" type="password" className="w-full" />
            <Button variant="primary" className="w-full" onClick={() => alert('Logging In')}>
              Login
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default LoginPage;
