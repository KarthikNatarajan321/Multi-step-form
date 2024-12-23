export default function Step3() {
    const { formData, setFormData } = useFormStore();
  
    const handleToggle = (e) => {
      setFormData({ [e.target.name]: e.target.checked });
    };
  
    return (
      <MultiStepForm currentStep={3} totalSteps={4}>
        <h2 className="text-xl font-bold mb-4">Step 3: Preferences</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Receive Newsletter</label>
            <input
              type="checkbox"
              name="newsletter"
              checked={formData.newsletter || false}
              onChange={handleToggle}
              className="w-5 h-5"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Enable Notifications</label>
            <input
              type="checkbox"
              name="notifications"
              checked={formData.notifications || false}
              onChange={handleToggle}
              className="w-5 h-5"
            />
          </div>
          <div className="flex justify-between">
            <Link href="/form/step2">
              <a className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400">Back</a>
            </Link>
            <Link href="/form/step4">
              <a className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Next</a>
            </Link>
          </div>
        </form>
      </MultiStepForm>
    );
  }