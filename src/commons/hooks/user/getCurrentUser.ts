import { getCookie, getCookies } from "cookies-next/client";
import { jwtDecode } from "jwt-decode";

export function useCurrentUser() {
  const token = getCookie("token");
  return jwtDecode(token!.toString()) as IUserToken;
}
