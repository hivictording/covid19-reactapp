/**
 * Written by Victor Ding
 * 2020-04-20
 */

import Link from "next/link";

const Blog = () => {
    return <div>
        <h1>Victor's Blogs</h1>
        <Link href='/'><a>Corona Virus Daily Update</a></Link>
        <Link href='/table'><a>My Test Table</a></Link>
        <Link href='/form'><a>My Test Form</a></Link>
    </div>
};

export default Blog;
