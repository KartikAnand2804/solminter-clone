import React, { useEffect, useState } from "react";
import "./App.css";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { WalletNotConnectedError } from "@solana/wallet-adapter-base";

function NftDashboard() {
  const { connection } = useConnection();
  const { publicKey } = useWallet();

  return publicKey ? (
    <div className="token">
      NFT management
      <div className="create-new-token">
        <div className="tokens-in-your-wallet">
          <h5>NFT's in your wallet</h5>
          Any NFT created using the address connected to Solminter will appear
          below. To trade them, add the NFT address to your Solana wallet.
        </div>

        <div className="new-nft">
          <button>Create a new NFT +</button>
        </div>
      </div>
      <div className="listed-tokens">
        TODO: get all the nfts in the wallet and load them here.
      </div>
    </div>
  ) : (
    <h1>Please connect your wallet.</h1>
  );
}

export default NftDashboard;
