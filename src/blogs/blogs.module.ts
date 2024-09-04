import { Module } from '@nestjs/common';
import { BlogsController } from './blogs/blogs.controller';
import { BlogsService } from './blogs/blogs.service';

@Module({
  controllers: [BlogsController],
  providers: [BlogsService]
})
export class BlogsModule {}
