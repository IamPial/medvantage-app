
import { Avatar } from "@heroui/react";
import { getUserSession } from "@/lib/core/session";

const DashBoardProfiles = async () => {
    const user = await getUserSession();

    return (
        <div className="w-full border-b border-[#0f172a]/5 p-3 flex items-center justify-end">
            <div className="flex items-center gap-3">
                <div className="flex flex-col text-right">
                    <span className="text-sm font-semibold text-[#0f172a] tracking-wide">
                        {user?.name}
                    </span>
                </div>
                <Avatar>
                    <Avatar.Image
                        referrerPolicy="no-referrer"
                        src={user?.image ?? undefined}
                        alt={user?.name?.charAt(0)}
                        className="w-10 h-10 border border-white/10"
                    />
                    <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
                </Avatar>{" "}
            </div>
        </div>
    );
};

export default DashBoardProfiles;