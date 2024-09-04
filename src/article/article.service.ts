import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Article } from 'src/core/schemas/article.schema';

@Injectable()
export class ArticleService {

    constructor(@InjectModel(Article.name) private articleModel: Model<Article>){}
    getAllArticles(){
        return this.articleModel.find()
    }
    getArticleById(_id: string){
        return this.articleModel.findById(_id)

    }
    createArticle(article: Article){
        return this.articleModel.create(article)
    }
    updateArticle(id: string, updatedArticle: Article){
        return this.articleModel.findByIdAndUpdate(id, updatedArticle, {new: true})
    }
    deleteArticle(id: string){
        return this.articleModel.findByIdAndDelete(id)
    }

}
