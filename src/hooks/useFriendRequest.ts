import { useState } from "react";
import axios from 'axios';

const useFriendRequests = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const api = import.meta.env.VITE_API;

  const acceptRequest = async (requestId: string) => {
    try {
      setLoading(true);
      await axios.put(api + `/requests/${requestId}`, {
        status: 'accepted'
      });
    }
    catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      } else {
        setError('An unknown error occured');
      }
    }
    finally {
      setLoading(false);
    }
  };

  const declineRequest = async (requestId: string) => {
    try {
      setLoading(true);
      await axios.put(api + `/requests/${requestId}`, {
        status: 'declined'
      });
    }
    catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      } else {
        setError('An unknown error occured');
      }
    }
    finally {
      setLoading(false);
    }
  };

  const sendRequest = async ({from, to}: {from?: string, to?: string}) => {
    if (!from || !to) {
      return setError('Missing user ID');;
    }
    try {
      setLoading(true);
      await axios.post(api + '/requests', {
        from: from,
        to: to
      });
    }
    catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      } else {
        setError('An unknown error occured');
      }
    }
    finally {
      setLoading(false);
    }
  };

  const cancelRequest = async () => {

  };

  return {
    loading,
    error,
    acceptRequest,
    declineRequest,
    sendRequest,
    cancelRequest
  }
};

export default useFriendRequests;