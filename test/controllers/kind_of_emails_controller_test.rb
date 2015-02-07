require 'test_helper'

class KindOfEmailsControllerTest < ActionController::TestCase
  test "should get welcome" do
    get :welcome
    assert_response :success
  end

  test "should get news" do
    get :news
    assert_response :success
  end

  test "should get text_center" do
    get :text_center
    assert_response :success
  end

  test "should get text_left" do
    get :text_left
    assert_response :success
  end

end
