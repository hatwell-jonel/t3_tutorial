import BackButton from "@/components/BackButton";
import PostsTable from "@/components/posts/PostsTable";
import PostPagination from "@/components/posts/PostPagination";

const PostsPage = () => {
    return ( 
    <>
        <BackButton text="Go back" link="/" />
        <PostsTable title="Latest Posts" limit={5} />
        <PostPagination />
    </> );
}
 
export default PostsPage;