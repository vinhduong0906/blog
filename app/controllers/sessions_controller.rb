require 'byebug'
class SessionsController < ApplicationController
  
  def new
    
  end

  def create
    @user = User.find_by(username: params[:username])

    if @user && @user.authenticate(params[:password])
       session[:user_id] = @user.id
       redirect_to user_path(@user)
       flash[:notice] ="#{@user.username}, Wellcome back to Alpha Blog"
    else
       redirect_to login_path
       flash[:warning] ="Username or password was wrong"
    end

  end

  def login
  end
  def destroy    
    session.delete(:user_id)        
    redirect_to '/' 
  end 
end
