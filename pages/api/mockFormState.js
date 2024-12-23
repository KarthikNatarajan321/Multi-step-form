export default function handler(req, res) {
    if (req.method === 'GET') {
      res.status(200).json({ name: 'John Doe', email: 'john.doe@example.com' });
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }
  
  // Update Frontend to Fetch Mock Data
  // pages/form/step4.js
  import { useEffect } from 'react';
  import { useFormStore } from '../../state/formState';
  
  export default function Step4() {
    const { formData, setFormData } = useFormStore();
  
    useEffect(() => {
      fetch('/api/mockFormState')
        .then((response) => response.json())
        .then((data) => setFormData(data));
    }, [setFormData]);
  
    return (
      <div>
        <h2>Review & Submit</h2>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div>
    );
  }
  