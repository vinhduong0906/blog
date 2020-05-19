class ApplicationController < ActionController::Base
  helper_method :current_user
  helper_method :logged_in?
  def current_user
    User.find_by(id: session[:user_id])
  end
  def logged_in?
    !current_user.nil?
  end
  private
  def require_login
    if !logged_in?
      flash[:warning]="You need to login to do this action"
      redirect_to login_path
    end
  end
  def require_same_user
    if @article
      if current_user!=@article.user and current_user and !current_user.admin
        flash[:warning]="You can only edit your article"
      end
    else
      if current_user!=@user and current_user and !current_user.admin
        flash[:warning]="You can only edit your acount" 
      end
    end
    
  end
end
