import { loggedInUserType } from "../../App";
import { Admin } from "../../routes/AdminRoutes";
import { Provider } from "../../routes/ProviderRoutes";
import { User } from "../../routes/UserRoutes";

export const menus = {
  id: "projectMenuItems",
  type: "group",
  children:
    loggedInUserType === "Admin"
      ? Admin
      : loggedInUserType === "Provider"
      ? Provider
      : loggedInUserType === "User"
      ? User
      : null,
};
