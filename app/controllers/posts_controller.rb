class PostsController < ApplicationController
  before_action :require_login
  
  def index
    @posts = Post.all.includes(:user).order(created_at: :desc)
  end

  def show; end

  def new
    @post = Post.new
  end

  def create
    @post = current_user.posts.build(post_params)
     Rails.logger.debug "Post params: #{post_params.inspect}"
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
    params.require(:post).permit(:brand, :category, :production_year, :instrument_model, :image, :video, :body,)
  end
end
