import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  ValidationPipe,
} from "@nestjs/common";
import { BlogsService } from "./blogs.service";

import { BlogsDTO } from "src/dto/blogs.dto";

@Controller("blogs")
export class BlogsController {
  constructor(private _blogsService: BlogsService) {}
  @Get()
  getBlogs() {
    return this._blogsService.getAllBlogs();
  }
  @Get(":id")
  getBlogById(@Param("id") id: any) {
    return this._blogsService.getBlogById(id);
  }

  @Post()
  addBlogs(
    @Body(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    body: BlogsDTO,
  ) {
    return this._blogsService.addBlog(body);
  }

  @Put()
  updateBlog() {
    return this._blogsService.updateBlog();
  }

  @Delete()
  deleteBlog() {
    return this._blogsService.deleteBlog();
  }
}
