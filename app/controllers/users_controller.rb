include BCrypt
require 'byebug'
class UsersController < ApplicationController
  
  before_action :set_user, only: [:show, :edit, :update, :destroy]
  
  # GET /users
  # GET /users.json
  def index
    @users = User.all
  end

  # GET /users/1
  # GET /users/1.json
  def show
  end

  # GET /users/new
  def new
    @user = User.new
  end

  # GET /users/1/edit
  def edit
  end

  # POST /users
  # POST /users.json
  def create
    @user = User.new(user_params)
    if @user.save
      session[:user_id] = @user.id
      flash[:notice]= "<h5 >#{@user.username}</h5>Welcome to the Alpha Blog , you have successfully signed up"
      redirect_to(@user)
    else
      render :new
    end
  end

  # PATCH/PUT /users/1
  # PATCH/PUT /users/1.json 
  def update
    @new_params=params.require(:user).permit(:password_digest, :username, :email)
    if @user.authenticate(@new_params[:password_digest])
      if @user.update(@new_params)
          flash[:notice]="Infomation was suscessfull updated."
          redirect_to(@user)
      else 
        render :edit
      end
    else
      @user.errors.add(:base, "Password does not match")
      render :edit
    end
  end

  # DELETE /users/1
  # DELETE /users/1.json
  def destroy
    @user.destroy
    flash[:notice] ='User was successfully destroyed.'
    redirect_to users_path
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    
    def user_params
      params.require(:user).permit(:username, :email, :password_digest, :image)
    end
end
