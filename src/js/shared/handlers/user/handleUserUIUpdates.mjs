import { fetchUser } from "../../api/profile/fetchUser.mjs";
import { updateUserImgElements } from "../../helper/updateUserImgElements.mjs";
import { updateUserTextElements } from "../../helper/updateUserTextElements.mjs";

export const handleUserUIUpdates = async () => {
  const userData = await fetchUser();
  const {
    name,
    avatar,
    banner,
    credits,
    _count: { wins, listings },
    bio,
  } = userData;
  console.log(userData);

  updateUserImgElements("#user-avatar", avatar?.url, avatar?.alt);
  updateUserImgElements("#user-banner", banner?.url, banner?.alt);
  updateUserTextElements("#user-name", name);
  updateUserTextElements("#user-bio", bio);
  updateUserTextElements("#user-credit", credits);
  updateUserTextElements("#total-listings", listings);
  updateUserTextElements("#total-wins", wins);
};
