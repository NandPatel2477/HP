// src/app/settings/page.tsx
import { Card, CardHeader, CardBody, Input, Switch, Button } from '@shadcn/ui';

const SettingsPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-4">Settings</h1>
      <Card>
        <CardHeader>
          <h3 className="text-xl">Preferences</h3>
        </CardHeader>
        <CardBody>
          <div className="space-y-4">
            <div>
              <label className="text-sm">Enable Notifications</label>
              <Switch />
            </div>
            <div>
              <label className="text-sm">Change Email</label>
              <Input placeholder="New Email" />
            </div>
            <Button variant="primary">Save Settings</Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default SettingsPage;
