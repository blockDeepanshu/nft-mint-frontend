import { Web3Button } from "@web3modal/react";
import { useContractWrite, useAccount } from "wagmi";

import { ABI } from "../ABI/contractABI";
import { useState } from "react";
import { ethers } from "ethers";

const Form = () => {
  const [mintCount, setMintCount] = useState(0);

  const { address } = useAccount();

  const { write } = useContractWrite({
    address: "0x5d4C87f3b052ab1F2fa1F251e976b161d3D528F2",
    abi: ABI,
    functionName: "mint",
    onError(error) {
      console.log(error);
      alert("Some error occured");
    },
  });

  const onChangeHandler = (e) => {
    setMintCount(e.target.value);
  };

  const mint = () => {
    if (mintCount == 0) {
      alert("Please select the mint amount");
    } else {
      write({
        args: [address, mintCount],
        from: address,
        value: ethers.parseEther((mintCount * 0.06).toString()),
      });
    }
  };

  return (
    <div className="card w-96 bg-teal-300 shadow-lg text-black m-4 shadow-teal-300 mx-auto">
      <div className="card-body items-center">
        <h1 className="card-title font-bold">Mint Portal</h1>
        <p>Please connect your wallet</p>
        <Web3Button />

        <input
          type="number"
          placeholder="Select number of NFT's to mint"
          min={1}
          max={5}
          className="input input-bordered input-secondary w-full max-w-xs text-white"
          onChange={onChangeHandler}
        />
        <button className="btn btn-outline btn-secondary" onClick={mint}>
          Mint / Buy
        </button>
        <p>Price 0.06 ETH per mint</p>
      </div>
    </div>
  );
};

export default Form;
