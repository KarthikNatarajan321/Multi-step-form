import MultiStepForm from '../../components/MultiStepForm';
import { useFormStore } from '../../state/formState';
import Link from 'next/link';

export default function Step1() {
  const { formData, setFormData } = useFormStore();
  const handleChange = (e) => {
    setFormData({ [e.target.name]: e.target.value });
  };

  return (
    <MultiStepForm currentStep={1} totalSteps={4}>
      <h2 className="text-xl font-bold mb-4">Step 1: Personal Details</h2>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name || ''}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email || ''}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
          />
        </div>
        <div className="flex justify-between">
          <Link href="/">
            <a className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400">Back</a>
          </Link>
          <Link href="/form/step2">
            <a className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Next</a>
          </Link>
        </div>
      </form>
    </MultiStepForm>
  );
}