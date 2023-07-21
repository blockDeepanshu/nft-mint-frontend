import { useEffect } from "react";
import { useAccount } from "wagmi";

function UserNft() {
  const { address } = useAccount();

  useEffect(() => {}, []);

  return <div>UserNft</div>;
}

export default UserNft;
