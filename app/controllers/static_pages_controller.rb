class StaticPagesController < ApplicationController
  def terms
  end

  def about
  end

  def preregister
  	render layout: 'preregister'
  end

end
