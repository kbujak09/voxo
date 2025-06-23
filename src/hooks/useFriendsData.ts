import { useEffect, useState } from "react"

const useFriendsData = (userId: string | undefined) => {
  const [friends, setFriends] = useState([]);
  const [receivedRequests, setReceivedRequests] = useState([]);
  const [sentRequests, setSentRequests] = useState([]);
  const [suggested, setSuggested] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(friends, receivedRequests, sentRequests, suggested)

  const apiLink = import.meta.env.VITE_API;

  useEffect(() => {
    Promise.all([
      fetch(`${apiLink}/users/${userId}/friends`),
      fetch(`${apiLink}/requests/${userId}/received`),
      fetch(`${apiLink}/requests/${userId}/sent`),
      fetch(`${apiLink}/users/${userId}/suggested`)
    ])
    .then(async ([fData, rrData, srData, sData]) => {
      setFriends(await fData.json());
      setReceivedRequests(await rrData.json());
      setSentRequests(await srData.json());
      setSuggested(await sData.json());
    })
    .catch(err => console.error(err))
    .finally(() => setLoading(false));
  }, []);

  return {
    friends,
    receivedRequests,
    sentRequests,
    suggested,
    loading
  };
}

export default useFriendsData;