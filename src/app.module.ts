import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PostsModule } from "./posts/posts.module";
import { BlogsModule } from "./blogs/blogs.module";
import { TagsModule } from "./tags/tags.module";
import { ArticleModule } from "./article/article.module";
import { MongooseModule } from "@nestjs/mongoose";
import { AuthModule } from "./auth/auth.module";

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://127.0.0.1:27018/nest"),
    ArticleModule,
    PostsModule,
    BlogsModule,
    AuthModule,
    TagsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
