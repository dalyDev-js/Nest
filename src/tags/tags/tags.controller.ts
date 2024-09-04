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
import { TagsService } from "./tags.service";

@Controller("tags")
export class TagsController {
  constructor(private _tagsService: TagsService) {}

  @Get()
  getAllTags() {
    return this._tagsService.getAllTags();
  }

  @Get(":id")
  getTagById(@Param("id") id: any) {
    console.log(typeof id);
    return this._tagsService.getTagById(+id);
  }

  @Post()
  addTag(@Body(new ValidationPipe()) body: any) {
    return this._tagsService.addTag(body);
  }

  @Put(":id")
  updateTag(@Param("id") id: any, @Body(new ValidationPipe()) body: any) {
    return this._tagsService.updateTag(+id, body);
  }
  @Delete(":id")
  deleteTag(@Param("id") id: any) {
    return this._tagsService.deleteTag(+id);
  }
}
