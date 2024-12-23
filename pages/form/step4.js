// pages/form/step4.js
import MultiStepForm from '../../components/MultiStepForm';
import { useFormStore } from '../../state/formState';
import Link from 'next/link';

export default function Step4() {
  const { formData } = useFormStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission (can be replaced with actual API call)
    alert('Form submitted successfully!');
    console.log('Form Data:', formData);
  };

  return (
    <MultiStepForm currentStep={4} totalSteps={4}>
      <h2 className="text-xl font-bold mb-4">Step 4: Review & Submit</h2>
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Personal Details:</h3>
        <p className="mb-1"><strong>Name:</strong> {formData.name || 'N/A'}</p>
        <p className="mb-1"><strong>Email:</strong> {formData.email || 'N/A'}</p>
      </div>
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Address Details:</h3>
        <p className="mb-1"><strong>Address:</strong> {formData.address || 'N/A'}</p>
        <p className="mb-1"><strong>City:</strong> {formData.city || 'N/A'}</p>
      </div>
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Preferences:</h3>
        <p className="mb-1">
          <strong>Receive Newsletter:</strong> {formData.newsletter ? 'Yes' : 'No'}
        </p>
        <p className="mb-1">
          <strong>Enable Notifications:</strong> {formData.notifications ? 'Yes' : 'No'}
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-between">
          <Link href="/form/step3">
            <a className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400">Back</a>
          </Link>
          <button
            type="submit"
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            Submit
          </button>
        </div>
      </form>
    </MultiStepForm>
  );
}
