import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export const authUserSession = async () => {
    const response = await getServerSession(authOptions);
    return response?.user
}