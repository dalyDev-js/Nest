import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ArticleService } from './article.service';
import { Article } from 'src/core/schemas/article.schema';
import { AuthGuard } from 'src/core/gaurds/auth.guard';

@Controller('article')
@UseGuards(AuthGuard)

export class ArticleController {
    constructor(private _articleService: ArticleService){}

    @Get('')
    getAllArticles() {
        return this._articleService.getAllArticles();
    }
    @Get("/:id")
    getArticleById(@Param('id') id) {
        return this._articleService.getArticleById(id);
    }
    @Post("")
    createArticle(@Body() article: Article) {
        
        return this._articleService.createArticle(article);
    }
    @Put("/:id")
    updateArticle(@Param('id') id,@Body() updatedArticle: Article) {
        return this._articleService.updateArticle(id, updatedArticle);
    }
    @Delete("/:id")
    deleteArticle(@Param('id') id) {
        return this._articleService.deleteArticle(id);
    }

}
