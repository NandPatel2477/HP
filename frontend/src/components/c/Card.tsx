// src/components/charts/Card.tsx

import { Card, CardHeader, CardBody } from '@shadcn/ui';

// Define CardProps interface to include 'title' and 'value'
interface CardProps {
  title: string;
  value: string;
}

// Functional component that accepts 'title' and 'value' as props
const CustomCard: React.FC<CardProps> = ({ title, value }) => {
  return (
    <Card>
      <CardHeader>{title}</CardHeader>
      <CardBody>{value}</CardBody>
    </Card>
  );
};

export default CustomCard;
