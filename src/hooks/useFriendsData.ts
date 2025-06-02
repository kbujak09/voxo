import { useEffect, useState } from "react"

const useFriendsData = () => {
  const [friends, setFriends] = useState([]);
  const [requests, setRequests] = useState([]);
  const [suggested, setSuggested] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch(''),
      fetch(''),
      fetch('')
    ])
    .then(async ([fData, rData, sData]) => {
      setFriends(await fData.json());
      setRequests(await rData.json());
      setSuggested(await sData.json());
    })
    .catch(err => console.error(err))
    .finally(() => setLoading(false));
  }, []);

  return {
    friends,
    requests,
    suggested,
    loading
  };
}

export default useFriendsData;