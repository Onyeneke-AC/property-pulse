import connectDB from "@/config/database";
import User from "@/models/User";
import Property from "@/models/Property";
import { getSessionUser } from "@/utils/getSessionUser";

export const dynamic = 'force-dynamic';

export const POST = async (request) => {
    try {
        await connectDB();

        const { propertyId } = await request.json();

        const sessionUser = await getSessionUser();

        if (!sessionUser || !sessionUser.userId) {
            return new Response('User ID is required', {
                status: 401,
            });
        }

        const { userId } = sessionUser;

        // Find user in the database
        const user = await User.findOne({ _id: userId });
        // console.log(user)

        // check if property is bookmarked
        let isBookmarked = user.bookmarks.includes(propertyId);

        let message;

        if (isBookmarked) {
            // if already bookmarked, remove it
            user.bookmarks.pull(propertyId);
            // console.log(user.bookmarks);
            message = 'Bookmark removed successfully';
            isBookmarked= false;
        } else {
            // if not bookmarked
            user.bookmarks.push(propertyId);
            message = 'Bookmark added successfully';
            isBookmarked= true;
        }

        // console.log(user.bookmarks);

        await user.save();

        return new Response(JSON.stringify({message, isBookmarked}), { status: 200 });

    } catch (err){
        console.log(err);
        return new Response('Something went wrong', {
            status: 500,
        })
    }
}
