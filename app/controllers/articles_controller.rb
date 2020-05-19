class ArticlesController < ApplicationController
  before_action :set_article, only: [ :edit, :update, :destroy]
  before_action :require_same_user, only: [:edit, :update, :destroy]
  before_action :set_category, only: [:edit, :new, :create, :update]
  before_action :require_login,only:[:new]
  def show
    @articles= Article.where(id: params[:id])
  end
  def index
    @articles=Article.paginate(:page => params[:page], :per_page => 5)
  end
  def new
    @article=Article.new
  end
  def create
    @article = Article.new(article_params)
    @category_id=params[:category_id]
    @article.user_id=session[:user_id]
    if @category_id
      if @article.save
        @category_id.each do |category_id|
          @category=Category.find(category_id)
          @article.category_of_articles.create(category: @category)
        end
        flash[:notice]="Create article was suscessfull."
        redirect_to(@article)
      else
        render :new
      end
    else
      @article.errors.add(:base, "Category can not be blank")
      render :new
    end
  
  end
  def edit
    @category_of_articles=@article.categories
  end
  def update
    @category_id=params[:category_id]
    if @category_id
    if @article.update(article_params)
      @article.category_of_articles.delete_all
      @category_id.each do |category_id|
        @category=Category.find(category_id)
        @article.category_of_articles.create(category: @category)
      end
      flash[:notice]="Update article was suscessfull."
      redirect_to(@article)
    else 
      render :edit
    end
  else
    @article.errors.add(:base, "Category can not be blank")
    render :edit
  end
  end
  def destroy
    @article.destroy
    redirect_to articles_path
  end
  private
  def set_article
    @article = Article.find(params[:id])
  end
  def article_params
    params.require(:article).permit(:title, :description)
  end
  def set_category
    @categories=Category.all
  end

end
