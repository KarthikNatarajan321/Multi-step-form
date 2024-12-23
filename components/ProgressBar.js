import { Progress } from '@shadcn/ui';

export default function ProgressBar({ currentStep, totalSteps }) {
  return (
    <Progress value={(currentStep / totalSteps) * 100} className="mb-4" />
  );
}