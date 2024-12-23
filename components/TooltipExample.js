import { Tooltip } from '@shadcn/ui';

export default function TooltipExample() {
  return (
    <Tooltip content="Enter your full name">
      <input type="text" placeholder="Name" className="border p-2" />
    </Tooltip>
  );
}