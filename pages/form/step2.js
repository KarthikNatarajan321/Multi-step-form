export default function Step2() {
    const { formData, setFormData } = useFormStore();
    const handleChange = (e) => {
      setFormData({ [e.target.name]: e.target.value });
    };
  
    return (
      <MultiStepForm currentStep={2} totalSteps={4}>
        <h2 className="text-xl font-bold mb-4">Step 2: Address Details</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address || ''}
              onChange={handleChange}
              className="w-full border rounded-md p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">City</label>
            <input
              type="text"
              name="city"
              value={formData.city || ''}
              onChange={handleChange}
              className="w-full border rounded-md p-2"
            />
          </div>
          <div className="flex justify-between">
            <Link href="/form/step1">
              <a className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400">Back</a>
            </Link>
            <Link href="/form/step3">
              <a className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Next</a>
            </Link>
          </div>
        </form>
      </MultiStepForm>
    );
  }