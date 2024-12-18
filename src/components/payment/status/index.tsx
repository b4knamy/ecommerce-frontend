import { useLocation } from 'react-router-dom';
import PaymentCheckOutSuccessful from './success';
import PaymentCheckOutCancelled from './cancel';

export default function PaymentCheckOutStatus() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);

  const success = params.get('success');
  const cancelled = params.get('cancelled');

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      {success && <PaymentCheckOutSuccessful />}

      {cancelled && <PaymentCheckOutCancelled />}
    </div>
  );
}
