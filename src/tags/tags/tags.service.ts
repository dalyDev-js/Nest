import { Injectable } from "@nestjs/common";

@Injectable()
export class TagsService {
  tags = [
    {
      title: "new blog",
      id: 4,
    },
  ];
  constructor() {}

  getAllTags() {
    return this.tags;
  }

  getTagById(id: any) {
    const tag = this.tags.find((tag) => tag.id === id);
    return { tag: tag };
  }

  addTag(body: any) {
    this.tags.push(body);
    return { message: "added", tags: this.tags };
  }
  updateTag(id: any, body: any) {
    const tag = this.tags.find((tag) => tag.id === id);

    if (tag) {
      tag.title = body.title;
      return { message: "Tag updated", tags: this.tags };
    } else {
      return { message: "Tag not found", tags: this.tags };
    }
  }
  deleteTag(id: any) {
    this.tags = this.tags.filter((tag) => tag.id !== id);
    return { message: "deleted", tags: this.tags };
  }
}
