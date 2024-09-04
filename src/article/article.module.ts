import { Module } from '@nestjs/common';
import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';
import { JwtService } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticleSchema,Article } from 'src/core/schemas/article.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:Article.name,schema:ArticleSchema}])],
  controllers: [ArticleController],
  providers: [ArticleService,JwtService]
})
export class ArticleModule {}
