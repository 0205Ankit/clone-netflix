import { useEffect, useState } from "react";
import { getuserByUserId, getProfileDoc } from "../services/firebase";

const useProfileData = () => {
  const [profData,setProfData] = useState([]);
  const [loading,setLoading]=useState(true)

  const getData = async () => {
    try {
      setLoading(true)
      const auth = JSON.parse(localStorage.getItem("authUser"));
      const autoId = await getuserByUserId(auth.uid);
      const profileData = await getProfileDoc(autoId);
      setProfData(profileData)
      setLoading(false)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getData()
  }, []);

  return [profData,loading];
};

export default useProfileData;
