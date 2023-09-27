// import AdsPost from "./AdsPost";
// import FriendSuggestion from "./FriendSuggestion";
import { useEffect, useState } from "react";
import Post from "./Post";
import { useDispatch } from "react-redux";
import { getTimeline } from "../../post/post";
// import MultiPost from "./MultiPost";
// import SimplePost from "./SimplePost";
// import VotePost from "./VotePost";
// import VoteResultPost from "./VoteResultPost";
// import BlogPost from "./BlogPost";
// import SimplePost2 from "./SimplePost2";
// import LoadMorePost from "./LoadMorePost";

export default function Timeline() {
    const [timeline, setTimeline] = useState([]);
    const dispatch = useDispatch();
    async function fetchData() {
        const posts = await getTimeline(dispatch);
        setTimeline(()=>[...posts]);
    }

    useEffect(()=>{
        fetchData();
    },[])
    
    return (
        <>
        {timeline && timeline.length > 0? (
            timeline.map((post, index)=><Post key={index} {...post}/>)
            ):(
                <div className="h5 text-center text-secondary">No Post Found</div>
            )}
            
            {/* <AdsPost />
            <MultiPost />
            <SimplePost />
            <FriendSuggestion />
            <VotePost />
            <VoteResultPost />
            <BlogPost />
            <SimplePost2 />
            <LoadMorePost /> */}
        </>
    );
}