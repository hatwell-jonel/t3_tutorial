'use client';

import BackButton from "@/components/BackButton";
import * as z from "zod";
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
    FormLabel,
  } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import posts from "@/../data/posts";
import { useToast } from "@/components/ui/use-toast";


const formSchema = z.object({
    title: z.string().min(1, {
        message: "Title is required",
    }),
    body: z.string().min(1, {
        message: "Body is required",
    }),
    author: z.string().min(1, {
        message: "Author is required",
    }),
    date: z.string().min(1, {
        message: "Date is required",
    }),
});


interface EditPostPageProps {
  params: {
      id: string;
  };
}


const EditPostPage = ({params} : EditPostPageProps) => {
    const post = posts.find((post) => post.id === params.id);
    const { toast } = useToast();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          title: post?.title || '',
          body: post?.body || '',
          author: post?.author || '',
          date: post?.date || '',
        },
      });

    const handleSubmit = (data: z.infer<typeof formSchema>) => {
        toast({
            title: "Post Updated",
            description: `Updated by ${data?.author} on ${data?.date}`,
        })
    }   
    

    return ( 
    <>
        <BackButton text="Go to posts" link="/posts" />
        <h3 className="text-2xl mb-4">Edit Pos</h3>

        <Form {...form}>
            <form onSubmit={ form.handleSubmit(handleSubmit)} className="space-y-8">



                {/* TITLE */}
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">Title</FormLabel> 
                            <FormControl>
                                <Input className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0" placeholder="Enter title" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/*  BOD */}
                <FormField
                    control={form.control}
                    name="body"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">Enter Body</FormLabel> 
                            <FormControl>
                                <Textarea className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0" placeholder="Enter title" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* AUTHOR */}
                <FormField
                    control={form.control}
                    name="author"
                    render={({ field }) => (
                        <FormItem>  
                            <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">Enter Author</FormLabel> 
                            <FormControl>
                                <Input className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0" placeholder="Enter title" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* DATE */}
                <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                        <FormItem>  
                            <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">Enter Date</FormLabel> 
                            <FormControl>
                                <Input className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0" placeholder="Enter title" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />


                <Button className="w-full dark:bg-slate-800 dark:text-white"s>Update Post</Button>
            </form>
        </Form>
    </>  
    );
}
 
export default EditPostPage;