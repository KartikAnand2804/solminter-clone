import React, { useEffect, useState } from "react";
import "./App.css";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { WalletNotConnectedError } from "@solana/wallet-adapter-base";

function TokenDashboard() {
  const { connection } = useConnection();
  const { publicKey } = useWallet();

  return publicKey ? (
    <div className="token">
      Token management
      <div className="create-new-token">
        <div className="tokens-in-your-wallet">
          <h5>Tokens in your wallet</h5>
          Any tokens minted using the address connected to Solminter will appear
          below. Please note: If you have transferred ownership of a token
          you've minted here, it will not appear below
        </div>

        <div className="SPL-token">
          <button>Create a new SPL token +</button>
        </div>
      </div>
      <div className="listed-tokens">
        TODO: get all the tokens in the wallet and load them here.
      </div>
    </div>
  ) : (
    <h4>Please connect your wallet.</h4>
  );
}

export default TokenDashboard;
