import { Body, Injectable } from "@nestjs/common";

@Injectable()
export class BlogsService {
  blogs = [
    { id: 1, title: "Understanding JavaScript Closures" },
    { id: 2, title: "A Guide to Responsive Web Design" },
    { id: 3, title: "Exploring Next.js for React Developers" },
  ];
  constructor() {}

  getAllBlogs() {
    return this.blogs;
  }
  getBlogById(id: any) {
    return this.blogs.find((blog) => blog.id == id);
  }

  addBlog(body: any) {
    this.blogs.push(body);
    return { message: "added", blogs: this.blogs };
  }

  updateBlog() {
    return "Update a blog";
  }

  deleteBlog() {
    return "Delete a blog";
  }
}
