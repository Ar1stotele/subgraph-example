import {
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  BatchMetadataUpdate as BatchMetadataUpdateEvent,
  MetadataUpdate as MetadataUpdateEvent,
  NFTMinted as NFTMintedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Transfer as TransferEvent,
  ERC721 as NftContract,
} from "../generated/ERC721/ERC721";
import { NFTMinted } from "../generated/schema";

export function handleNFTMinted(event: NFTMintedEvent): void {
  let nftMinted = NFTMinted.load(event.params.tokenId.toString());
  if (!nftMinted) {
    nftMinted = new NFTMinted(event.params.tokenId.toString());
    nftMinted.tokenId = event.params.tokenId;
    nftMinted.owner = event.params.owner.toHexString();
    nftMinted.sender = event.transaction.from.toHexString();
  }
  nftMinted.save();

  // let user = User.load(event.params.owner.toHexString());
  // if (user) {
  //   user.save();
  // }
}
