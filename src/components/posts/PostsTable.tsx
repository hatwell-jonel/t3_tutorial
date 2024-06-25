import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    TableCaption
  } from "@/components/ui/table"
import Link from "next/link"
import { Post } from "@/types/posts"
import posts from '@/data/posts';

interface PostsTableProps {
    limit?: number;
    title?: string;
}

const PostsTable = ({ limit, title  }: PostsTableProps) => {
    return ( 
    <div className="mt-10">
        <h3 className="text-2xl mb-4 font-semibold">
            {title ? title : "Posts"}
        </h3>

        <Table>
            <TableCaption>A list of recent posts</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead className="hidden md:table-cell">Author</TableHead>
                    <TableHead className="hidden md:table-cell">Date</TableHead>
                    <TableHead>View</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {posts.map((post) => (
                    <TableRow key={post.id}>
                        <TableCell>{post.title}</TableCell>
                        <TableCell className="hidden md:table-cell">{post.author}</TableCell>
                        <TableCell className="text-right hidden md:table-cell">{post.date}</TableCell>
                        <TableCell>{post.title}</TableCell>

                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </div>  );
}
 
export default PostsTable;;