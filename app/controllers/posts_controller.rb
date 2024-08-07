class PostsController < ApplicationController
  before_action :require_login
  
  def index
    @posts = current_user.posts.includes(:user).order(created_at: :desc)
  end

  def show
    @post = Post.find(params[:id])
  end

  def new
    @post = Post.new
  end

  def create
    @post = current_user.posts.build(post_params)
    if @post.save
      redirect_to posts_path, flash: { notice: '投稿しました' }
    else
      render :new, status: :unprocessable_entity
    end
  end

  def edit; end

  def update; end

  def destroy; end

  private

  def post_params
    params.require(:post).permit(:brand, :category, :production_year, :instrument_model, :body, :image, :video)
  end
end
